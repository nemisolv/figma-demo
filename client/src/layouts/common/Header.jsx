import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
 

  // check if refresh token is expired
  useEffect(() => {
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }else {
      setUser(null);
      navigate('/auth/login');
    }
  },[ ]);

  return (
    <header className="fixed top-0 right-0 left-0 h-[60px] z-10 bg-primary flex-between px-4">
      <ul className="flex items-center gap-2 text-white font-medium text-lg">
        <li>Home</li>
        <li>About</li>
        <li>My list</li>
        <li>carrer</li>
      </ul>

      <ul className="flex items-center gap-2 text-white font-medium text-lg">
        <li>notificaion</li>
        {!user ? (
          <li>
            <Link to="/auth/login">login</Link>
          </li>
        ) : (
          <li className="flex items-center">
            <img
              src={user?.picture}
              alt={user?.first_name}
              className="w-10 h-10 rounded-full object-cover"
            />{' '}
            <span>{user?.first_name + ' ' + user?.last_name}</span>
          </li>
        )}
        {user && <li onClick={() =>  {
          localStorage.clear();
          navigate('/auth/login')
        }}>Logout</li>}
      </ul>
    </header>
  );
}

export default Header;
