import { deleteStory } from '@services/story.service';
import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const Table = ({ stories, setStories }) => {
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

  // const handleDelete = async (id) => {
  //   // try {
  //   //   await deleteStory(id);
  //   //   stories = stories.filter((story) => (story.id !== id));
  //   //   setStories(stories)
  //   //   toast.success('Delete story successfully!');
  //   // } catch (error) {
  //   //   toast.error('Could not delete story');
  //   // }
  // };

  const handleEdit = (id) => {};

  const handleSuccessToastClose = () => {};

  const handleEditSuccess = () => {};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    

      <table className="w-full text-sm text-left text-gray-700 bg-white">
        <thead className="text-xs uppercase bg-gray-100 text-gray-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên
            </th>
            <th scope="col" className="px-6 py-3">
              Tác Giả
            </th>
            <th scope="col" className="px-6 py-3">
              Tình Trạng
            </th>
            <th scope="col" className="px-6 py-3">
              Thể Loại
            </th>
            <th scope="col" className="px-6 py-3">
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story) => (
            <tr key={story.id} className="border-b bg-white hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                {story.name}
              </th>
              <td className="px-6 py-4">{story.author}</td>
              <td className="px-6 py-4">{story.status}</td>
              <td className="px-6 py-4">{story.genre}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-500 hover:text-blue-700 mx-2"
                  onClick={() => {
                  navigate(`/admin/edit-story/${story.id}`)
                  }}
                >
                  <MdEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 mx-2"
                  onClick={() => handleDelete(story.id)}
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
            await  deleteStory(idRef.current);
              setStories(stories.filter((story) => story.id !== idRef.current));

              closeModal();
              toast.success('Xóa truyện thành công!');
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

export default Table;
