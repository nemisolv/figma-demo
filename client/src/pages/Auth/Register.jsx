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

const loginSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be greater than or equal 6 characters')
    .required(),
});

function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    try {
      const response = await register(data);
      localStorage.setItem('user', JSON.stringify(response.data))
      navigate('/')
      
    }catch(error) {
      console.log("🚀 ~ onSubmit ~ error:", error)
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
  })


  return (
    <div className="max-w-[1200px] w-full rounded-2xl overflow-hidden bg-white mx-auto flex shadow-md">
      <div id="background-login" className="w-1/2"></div>
      <div className="m-auto w-[400px]">
        <h1 className="text-primary font-medium">My anniversary</h1>
        
        <h3 className="text-lg font-semibold">Sign in to your memories</h3>
        <p>
          <Button textLink size="sm" to="/auth/login">
            Sign in
          </Button>
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-between gap-4">
            <TextInput
              label="First name"
              name="first_name"
              control={control}
              errors={errors}
            />
            <TextInput
              label="Last name"
              name="last_name"
              control={control}
              errors={errors}
            />
          </div>
          <TextInput
            label="Email"
            name="email"
            placeholder="Enter your email"
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

          <Button primary fullWidth className="mt-3">
            Sign up
          </Button>
        </form>

        <div className="flex-center gap-3">
          
          <p className="text-center">OR</p>
          
        </div>

        {/* login-with-social */}
        <div className="mt-4 flex-between gap-4">
          <a onClick={loginGoogleFunc} className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
            <div>
              <img src={googleImg} alt="" className="w-4" />
            </div>
            <span className="text-xs">Continue with Google</span>
          </a>
          <a className="flex gap-x-2 items-center p-3 h-[38px] w-[180px] shadow rounded-lg cursor-pointer hover:shadow-md ">
            <div>
              <img src={fbImg} alt="" className="w-4" />
            </div>
            <span className="text-xs">Continue with Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
