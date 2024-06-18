import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import fbImg from '@assets/images/facebook.png';
import googleImg from '@assets/images/google.png';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { login } from '@services/auth.service';
import { FaArrowLeft } from 'react-icons/fa6';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Tên đăng nhập không được để trống')
    .min(6, 'Tên đăng nhập phải lớn hơn 6 ký tự'),
  password: yup.string().min(6, 'Mật khẩu phải lớn hơn 6 ký tự').required(),
});

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const loginGoogleFunc = useGoogleLogin({
    onSuccess: async (res) => {},
    onError: (error) => console.log(error),
    flow: 'auth-code',
  });

  return (
    <div className="max-w-[1200px] w-full rounded-2xl  overflow-hidden bg-white mx-auto flex shadow-md">
      <div id="background-login" className="w-1/2"></div>
      <div className="m-auto w-[400px] mr-6">
        <Link to="/" className='float-right'>
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl text-center font-medium">Đăng nhập</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Tên đăng nhập"
            name="username"
            placeholder=""
            control={control}
            errors={errors}
          />
          <TextInput
            label="Password"
            name="password"
            passwordField
            placeholder="Enter your password"
            control={control}
            errors={errors}
          />

          <Button primary fullWidth className="my-3 hover:bg-[#FF4C4C]">
            Đăng nhập
          </Button>
        </form>
        <div className="flex-between font-medium text-md">
          <Link
            to="/auth/register"
            className=" block hover:underline text-right my-3 cursor-pointer hover:opacity-80"
          >
            Tạo tài khoản mới
          </Link>
          <Link
            to="/auth/forgot-password"
            className=" block hover:underline text-right my-3 cursor-pointer hover:opacity-80"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <div className="divider h-[1px] bg-slate-300 w-full"></div>

        {/* login-with-social */}
        <div className="mt-4 flex items-center justify-around gap-4">
          <div onClick={loginGoogleFunc} className="f">
            <div>
              <img src={googleImg} alt="" className="size-12 " />
            </div>
          </div>
          <div>
            <p>Hoặc</p>
          </div>
          <div onClick={loginGoogleFunc} className="f">
            <div>
              <img src={fbImg} alt="" className="size-12 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
