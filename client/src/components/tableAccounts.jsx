import { deleteStory } from '@services/story.service';
import React, { useRef } from 'react';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { deleteAccount } from '@services/account.service';
import { toast } from 'react-toastify';


const TableAccounts = ({ accounts, setAccounts }) => {
  
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const idRef = useRef(null);
  let subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);

  }
  const handleDelete = async (id) => {
    openModal();
    idRef.current = id;
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 bg-white">
        <thead className="text-xs uppercase bg-gray-100 text-gray-600">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Tên
            </th>
            <th scope="col" className="px-6 py-3">
              Tuổi
            </th>
            <th scope="col" className="px-6 py-3">
              Địa chỉ
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.email} className="border-b bg-white hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input type="checkbox" name="" id="" />
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                {acc.first_name + ' ' + acc.last_name}
              </th>

              <td className="px-6 py-4">{acc.age || 21}</td>
              <td className="px-6 py-4">{acc.address}</td>
              <td className="px-6 py-4">{acc.phone_number}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-500 hover:text-blue-700 mx-2"
                  onClick={() => {
                    navigate(`/admin/edit-account/${acc.id}`);
                  }}
                >
                  <MdEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 mx-2"
                  onClick={() => handleDelete(acc.id)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
     <div className='flex-between'>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Xác nhận</h2>
          <button onClick={closeModal}><FaTimes />
</button>
     </div>
        <p className='text-sm'>
          Bạn có chắc chắn muốn xóa tài khoản này không?
        </p>

        <div className='flex justify-end mt-3'>
          <button
            onClick={async() => {
            await  deleteAccount(idRef.current);
              setAccounts(accounts.filter((acc) => acc.id !== idRef.current));

              closeModal();
              toast.success('Xóa tài khoản thành công');
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2"
          >
            Xóa
          </button>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Hủy
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TableAccounts;
