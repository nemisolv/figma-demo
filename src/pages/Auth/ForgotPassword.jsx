import { Link, useNavigate } from 'react-router-dom';

// project imports
import Button from '@components/Button';

import ForgotPasswordImg from '@assets/images/forgotPassword.jpg';

// third-party
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '@components/TextInput';
import AuthService from '@services/auth.service';
import { toast } from 'react-toastify';
import { useState } from 'react';
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email không được để trống')
    .matches(emailRegex, 'Email không hợp lệ'),
});

function ForgotPassword() {
  const [loading,setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  });

  const sendEmail2Reset = async ({ email }) => {
    try {
      setLoading(true);
      const res = await AuthService.forgotPassword(email);
      toast.success(res.message);
      setLoading(false);
    }catch(err) {
      setLoading(false);
      console.log(err);
    }
  };


  return (
    <>
      <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mobile:h-[60px]">
          {/* <Logo /> */}
        </div>
        <div className="w-full flex justify-center items-center gap-5 mx-auto max-w-[800px] mobile:flex-col px-4 ">
          <div>
            <img
              src={ForgotPasswordImg}
              alt="Forgot password"
              className="mobile:w-60"
            />
          </div>
            <form onSubmit={handleSubmit(sendEmail2Reset)} className="w-full ">
              <h2 className="text-4xl mb-4 font-bold">Forgot password?</h2>
              <p className="text-gray-400 italic">
                Enter the email address associated with your account.
              </p>
              <TextInput
                placeholder="Enter your email"
                name="email"
                control={control}
                errors={errors}
              />

              <Button primary fullWidth className="mt-2" loading={loading}>
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
    </>
  );
}

export default ForgotPassword;
