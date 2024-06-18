import Button from '@components/Button';
import TextInput from '@components/TextInput';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import fbImg from '@assets/images/facebook.png';
import googleImg from '@assets/images/google.png';
import { useGoogleLogin } from '@react-oauth/google';
import { register } from '@services/auth.service';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Tên đăng nhập không được để trống')
    .min(6, 'Tên đăng nhập phải lớn hơn 6 ký tự'),
  password: yup.string().min(6, 'Mật khẩu phải lớn hơn 6 ký tự').required(),
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Email không được để trống'),
  phone_number: yup
    .string()
    .required('Số điện thoại không được để trống')
    .min(10, 'Số điện thoại phải chứa 10 ký tự')
    .max(10, 'Số điện thoại phải chứa 10 ký tự'),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
});

function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      phone_number: '',
      username: '',
      confirm_password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    try {
      const response = await register(data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error);
      toast.error(error.response.data.message);
    }
  };

  // oauth2 login with google
  const loginGoogleFunc = useGoogleLogin({
    // onSuccess: async (res) =>  {
    //   dispatch(loginGoogle({code: res.code,navigate}))
    // },
    // onError: (error) => console.log(error),
    // flow: 'auth-code',
  });

  return (
    <div className="max-w-[1200px] w-full rounded-2xl  bg-white mx-auto flex shadow-md">
      <div id="background-login" className="h-full "></div>
      <div className="m-auto w-[400px] mr-6">
      <Link to="/" className='float-right'>
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl text-center font-medium">Đăng kí</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <TextInput
            label="Email"
            name="email"
            placeholder="vd: email@gmail.com"
            control={control}
            errors={errors}
          />
          <TextInput
            label="Tên đăng nhập"
            name="username"
            placeholder="tên đăng nhập"
            control={control}
            errors={errors}
          />
          <TextInput
            label="Số điện thoại"
            name="phone_number"
            placeholder=""
            control={control}
            errors={errors}
          />
          <TextInput
            label="Mật khẩu"
            name="password"
            type="password"
            placeholder=""
            control={control}
            errors={errors}
          />
          <TextInput
            label="Nhập lại mật khẩu"
            name="confirm_password"
            type="password"
            placeholder=""
            control={control}
            errors={errors}
          />

          <Button primary fullWidth className="my-3">
            Đăng kí
          </Button>
        </form>
        <div className="flex items-center gap-3">
          <div className="divider h-[1px] bg-slate-300 w-full"></div>

          <div>
            <p>Hoặc</p>
          </div>
          <div className="divider h-[1px] bg-slate-300 w-full"></div>
        </div>

        {/* login-with-social */}
        <div className="mt-4 flex items-center justify-center gap-8 ">
          <div onClick={loginGoogleFunc} className="f">
            <div>
              <img src={googleImg} alt="" className="size-12 " />
            </div>
          </div>

          <div onClick={loginGoogleFunc} className="f">
            <div>
              <img src={fbImg} alt="" className="size-12 " />
            </div>
          </div>
        </div>

        <Link
          to="/auth/login"
          className=" text-center block hover:underline  my-3 cursor-pointer hover:opacity-80"
        >
          Đăng nhập tài khoản đã có
        </Link>
      </div>
    </div>
  );
}

export default Register;
