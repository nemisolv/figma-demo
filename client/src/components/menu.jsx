// Menu.js

const Menu = () => (
  <div className="flex flex-col  bg-white rounded-r-3xl overflow-hidden h-screen">
    <div className="flex items-center justify-center h-20">
      <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
        <i className="bx bxs-user"></i>
      </span>
      <h1 className="text-3xl uppercase text-indigo-500">Admin</h1>
    </div>
    <ul className="flex flex-col py-4">
      <li className="m-4">
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
            <i className="bx bx-home"></i>
          </span>
          <span className="text-3xl font-medium">Trang chủ</span>
        </a>
      </li>
      <li className="m-4">
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
            <i className="bx bx-book-open"></i>
          </span>
          <span className="text-3xl font-medium">Danh Sách truyện</span>
        </a>
      </li>
      <li className="m-4">
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
            <i className="bx bx-group"></i>
          </span>
          <span className="text-3xl font-medium">Danh sách tài khoản </span>
        </a>
      </li>
      <li className="m-4">
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
            <i className="bx bx-bell"></i>
          </span>
          <span className="text-3xl font-medium">Thông báo</span>
        </a>
      </li>
      <li className="m-4">
        <a
          href="#"
          className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400">
            <i className="bx bx-log-in-circle"></i>
          </span>
          <span className="text-3xl font-medium">Đăng xuất</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Menu;
