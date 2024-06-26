import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputSearch from '@components/shared/InputSearch';
import { FaBars } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

function Header() {
  function getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  // check if refresh token is expired
  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     setUser(JSON.parse(localStorage.getItem('user')));
  //   } else {
  //     setUser(null);
  //     navigate('/auth/login');
  //   }
  // }, []);

  return (
    <header className="fixed top-0 right-0 left-0 h-[80px] z-10 bg-[#0B0A0A] text-white flex-between px-28">
      <ul className="flex items-center gap-4 font-[14px] text-white  text-lg">
        <div>
          <Link to="/" className=" font-bold text-2xl ml-[20px]">
            TruyenHay
          </Link>
        </div>
        <li className="py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1">
          {/* <FaBars /> */}
          Thể loại
        </li>
        <li className="py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1">
          {/* <FaBars /> */}
          <Link to="stories/list-by-chapter"> Phân loại theo chương</Link>
        </li>
        <li className="py-2 px-4 cursor-pointer hover:opacity-80 flex items-center gap-1">
          {/* <FaBars /> */}
          Danh sách{' '}
        </li>
      </ul>

      <ul className="flex items-center gap-2 text-white font-medium text-lg">
        <div className="mr-5">
          {' '}
          <InputSearch />
        </div>
        {!user ? (
          <li>
            <Link to="/auth/login">login</Link>
          </li>
        ) : (
          <li
            className="relative
          dropdown-parent
          "
          >
            <div className="flex items-center gap-1 ">
              <img
                src={user?.picture}
                alt={user?.username}
                className="w-10 h-10 rounded-full object-cover"
              />{' '}
              <span className="first-letter:uppercase">{user?.username}</span>
            </div>

            {/* make a dropdown */}
            <ul className="shadow-md bg-white absolute top-8 right-0 mt-2 p-2 min-w-[160px] rounded-md text-[#333] hidden">
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                <Link to="/me/edit"> Profile</Link>
              </li>
              <li
                onClick={() => {
                  localStorage.clear();
                  navigate('/auth/login');
                }}
                className="flex items-center gap-2 cursor-pointer hover:text-red-500"
              >
                <span>Logout</span> <MdOutlineLogout />
              </li>
            </ul>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
