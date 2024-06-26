import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

function EditProfile() {
  function getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  const [user, setUser] = useState(getUser());
  const [gender, setGender] = useState(user?.gender);
  return (
    <div className='mt-[150px]'>
    <div className='text-center'>
          <h2 className="uppercase text-xl px-6 py-1 bg-black fotn-semibold mb-6  text-white inline-block ">
            Thay đổi thông tin
          </h2>
    </div>

      <div className="bg-[#D9D9D9] pt-3 pb-[80px] px-6 rounded-lg max-w-7xl mx-auto">
        <form action="" className="mt-5 flex justify-between">
          
          <div>
            <div>
                <label htmlFor="name" className="block font-medium">
                    Họ và tên
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-[300px] bg-[#DDEFFC] rounded-md p-2"
                    value={user?.first_name}
                    onChange={e => {
                        setUser({
                            ...user,
                            first_name: e.target.value
                        });
                    
                    }}
                />
            </div>
            <div className='mt-6'>
                <label htmlFor="name" className="block font-medium">
                    Mật khẩu
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-[300px] bg-[#DDEFFC] rounded-md p-2"
                    value={user?.password}
                    onChange={e => {
                        setUser({
                            ...user,
                            password: e.target.value
                        });
                    
                    }}
                />
            </div>
            <div className='mt-6'>
                <label htmlFor="name" className="block font-medium">
                    Giới tính
                </label>
                <div className=' flex items-center gap-10'>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  onChange={(e) => setGender(e.target.value)}
                  value="Nam"
                  checked={gender === 'Nam'}
                />
                <label htmlFor="">Nam</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  onChange={(e) => setGender(e.target.value)}
                  value="Nữ"
                  checked={gender === 'Nữ'}
                />
                <label htmlFor="">Nữ</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  onChange={(e) => setGender(e.target.value)}
                  value="Khác"
                  checked={gender === 'Khác'}
                />
                <label htmlFor="">Khác</label>
              </div>
            </div>
            </div>
            <div>
                <label htmlFor="name" className="block font-medium">
                    Email
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-[300px] bg-[#DDEFFC] rounded-md p-2"
                    value={user?.email}
                    onChange={e => {
                        setUser({
                            ...user,
                            email: e.target.value
                        });
                    
                    }}
                />
            </div>
            <div>
                <label htmlFor="name" className="block font-medium">
                    SDT
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-[300px] bg-[#DDEFFC] rounded-md p-2"
                    value={user?.phone_number}
                    onChange={e => {
                        setUser({
                            ...user,
                            phone_number: e.target.value
                        });
                    
                    }}
                />
            </div>
            <div>
                <label htmlFor="name" className="block font-medium">
                    Địa chỉ
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-[300px] bg-[#DDEFFC] rounded-md p-2"
                    value={user?.address}
                    onChange={e => {
                        setUser({
                            ...user,
                            address: e.target.value
                            
                        });
                    
                    }}
                />
            </div>


          </div>
          <div className=' flex-1 text-center   '>
            <div className="relative flex flex-col items-center">
              <img
                src={user?.picture}
                className="rounded-full size-[200px]"
                alt=""
              />
              <div className="absolute -bottom-[10px] bg-red-500 p-1 rounded-full ">
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                />
                <FaPlus size={14} color='#fff' />
              </div>
            </div>

            <button className='bg-[#FF4C4C] text-white font-semibold min-w-[200px] py-2 rounded-lg mt-60 '
            onClick={(e) => {
                e.preventDefault();
                localStorage.setItem('user', JSON.stringify(user));
                toast.success('Cập nhật thông tin thành công');
            }}
            >
                Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
