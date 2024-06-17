import { axiosPublic } from '@configs/axiosConfig';
import Notification from '@pages/Notification';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function VerifyEmail() {
    const location = useLocation();

    // Parse the query string to extract the token
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
  const [objNotification, setObjNotification] = useState({});

  useEffect(() => {
    axiosPublic
      .post('/auth/verify-email', { token })
      .then((res) => {
        setObjNotification(res.data);
      })
      .catch((err) => {
        setObjNotification({
          message: err.response?.data?.message || 'Email verification failed',
        });
      });
  }, [token]);

  const { code, message } = objNotification;

  return (
    <Notification
      content={message || 'Email verification failed'}
      title="Email verification"
      linkBtn="/auth/login"
      titleBtn="Login page"
    />
  );
}

export default VerifyEmail;
