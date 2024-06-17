import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputSearch from '@components/shared/InputSearch';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // check if refresh token is expired
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      setUser(null);
      navigate('/auth/login');
    }
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 h-[80px] z-10 bg-[#0B0A0A] text-white flex-between px-28">

      <ul className="flex items-center gap-4 font-[14px] text-white  text-lg">
      <div>
        <Link to="/" className=" font-bold text-2xl ml-[20px]">
          TruyenHay
        </Link>
      </div>
        <li className='py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1'>
          <FaBars />
          Thể loại
        </li>
        <li className='py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1'>
          <FaBars />
          Phân loại theo chương
        </li>
        <li className='py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1'>
          <FaBars />
          Danh sách{' '}
        </li>
        <li className='py-2 px-4 cursor-pointer hover:opacity-80 '>Truyện tranh</li>
        <li className='py-2 px-4 cursor-pointer hover:opacity-80 '>Truyện đã hoàn thành</li>
      </ul>


      <ul className="flex items-center gap-2 text-white font-medium text-lg">
     <div className='mr-5'> <InputSearch /></div>
        {!user ? (
          <li>
            <Link to="/auth/login">login</Link>
          </li>
        ) : (
          <li className="flex items-center gap-1 ">
            <img
              src={user?.picture}
              alt={user?.first_name}
              className="w-10 h-10 rounded-full object-cover"
            />{' '}
            <span className='first-letter:uppercase'>{user?.first_name + ' ' + user?.last_name}</span>
          </li>
        )}
        {user && (
          <li
            onClick={() => {
              localStorage.clear();
              navigate('/auth/login');
            }}
          >
            Logout
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
