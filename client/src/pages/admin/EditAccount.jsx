import InputDesc from '@components/EditStory/InputDesc';
import InputInfo from '@components/EditStory/InputInfo';
import Upload from '@components/EditStory/upload';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoryById, updateStory } from '@services/story.service';
import { toast } from 'react-toastify';
import { getAccountById } from '@services/account.service';
import { FaPlus } from 'react-icons/fa';

const EditAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  //   const [updateAccount, setUpdateAccount] = useState(
  //     {
  //     first_name: '',
  //     age: 0,
  //     address: '',
  //     gender: '',
  //   }
  // );

  const [gender, setGender] = useState('');
  const [error, setError] = useState(''); // State lưu thông báo lỗi
  

  useEffect(() => {
    const fetchAccById = async () => {
      try {
        const res = await getAccountById(id);
        setAccount(res.data);
      } catch (error) {
        console.log('🚀 ~ fetchStoryById ~ error:', error);
        toast.error('Không thể cập nhật thông tin tài khoản');
      }
    };
    fetchAccById();
  }, [id]);

  const handleSubmit = async () => {
    // if (2 > 1 ) {
    //   setError('Vui lòng điền đầy đủ thông tin trước khi thêm!');
    //   return;
    // }

    const updatedStory = {
      id: parseInt(id),
    };
    console.log('🚀 ~ handleSubmit ~ updatedStory:', updatedStory);

    try {
      await updateStory(id, updatedStory);
      toast.success('Cập nhật tài khoản thành công!');
      navigate('/admin/accounts');
    } catch (error) {
      toast.error(error.response.data.messsage);
    }
  };

  return (
    <div className="mt-10  flex flex-row justify-between mx-10 bg-gray-200 min-h-[200px]">
      <div className="w-full py-8 px-4">
        <h2 className="text-center text-2xl font-medium">Cập nhật tài khoản</h2>

        <div className="relative flex flex-col items-center">
          <img
            src={account?.picture}
            className="rounded-full size-[40px]"
            alt=""
          />
          <div className="absolute -bottom-[10px] bg-red-500 p-1 rounded-full ">
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
            <FaPlus size={10} />
          </div>
        </div>

        <div className="my-6 w-full">
          <div className="flex items-center justify-between gap-10 w-full">
            <div className="w-[80%] flex">
              <label htmlFor="" className="min-w-[60px]">
                Họ tên
              </label>
              <input
                type="text"
                className="w-full border border-slate-400 rounded-lg py-1 px-2"
                value={account?.first_name}
                onChange={(e) =>
                  setAccount({
                    ...account,
                    first_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="" className="min-w-[40px] ">
                Tuổi
              </label>
              <input
                type="text"
                className="w-[80px] border border-slate-400 rounded-lg py-1 px-2"
                value={account?.age}
                onChange={(e) =>
                  setAccount({ ...account, age: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex mt-6">
            <label htmlFor="" className="min-w-[60px] ">
              Địa chỉ
            </label>
            <textarea
              type="text"
              className="w-full border border-slate-400 rounded-lg py-1 px-2 resize-none h-20"
              value={account?.address}
              onChange={(e) =>
                setAccount({ ...account, address: e.target.value })
              }
            />
          </div>

          <div className=" mt-6">
            <label htmlFor="" className="block ">
              Giới tính
            </label>

            <div className='ml-[60px] flex items-center gap-28'>
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
        </div>

        <div>
          {/* content */}

          {/* Hiển thị thông báo lỗi nếu có */}
          {error && (
            <div className="text-red-500 mt-2 text-center">{error}</div>
          )}
          <div
            className="flex justify-end mt-5"
            // style={{ transform: 'translate(0,60px)' }}
          >
         
            <button
              type="button"
              onClick={handleSubmit}
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Lưu
            </button>
            <button
              type="button"
              className="text-white  bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-700 "
              onClick={() => navigate('/admin/accounts')}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
