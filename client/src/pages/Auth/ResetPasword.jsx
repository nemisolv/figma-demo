import Button from '@components/Button';
import TextInput from '@components/TextInput';
import ForgotPasswordImg from '@assets/images/forgotPassword.jpg';

import { yupResolver } from '@hookform/resolvers/yup';
import AuthService from '@services/auth.service';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
function ResetPassword() {
  const passwordSchema = yup.object({
    new_password: yup.string().required("New password can't be empty!"),
    confirm_password: yup
      .string()
      .required("Confirm password can't be empty!")
      .oneOf([yup.ref('new_password'), null], 'Password must match!'),
  });
  const location = useLocation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      new_password: '',
      confirm_password: '',
    },
    resolver: yupResolver(passwordSchema),
  });

  // Parse the query string to extract the token
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const onSubmit = async (data) => {
    try {
      await AuthService.resetPassword({ password: data.new_password, token });
      toast.success('Reset password successfully!');
      setTimeout(() => {
        navigate('/auth/login')
      },3000)
    } catch (err) {
      toast.error('something went wrong.Try again later!');
    }
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center gap-5 mx-auto max-w-[800px] mobile:flex-col px-4 ">
        <div>
          <img
            src={ForgotPasswordImg}
            alt="Forgot password"
            className="mobile:w-60"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h2 className="text-4xl mb-4 font-bold ">Reset password</h2>
          <TextInput
            placeholder="New password"
            name="new_password"
            type="password"
            control={control}
            errors={errors}
          />
          <TextInput
            placeholder="Confirm password"
            name="confirm_password"
            type="password"
            control={control}
            errors={errors}
          />

          <Button primary fullWidth className="mt-2">
            Confirm
          </Button>
          <div className="my-3 float-right text-sm ">
            <Link to="/auth/login" className="text-primary !underline">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
