import { deleteStory } from '@services/story.service';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Table = ({ stories, setStories }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await deleteStory(id);
      stories = stories.filter((story) => (story.id !== id));
      setStories(stories)
      toast.success('Delete story successfully!');
    } catch (error) {
      toast.error('Could not delete story');
    }
  };

  const handleEdit = (id) => {};

  const handleSuccessToastClose = () => {};

  const handleEditSuccess = () => {};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Thông báo thành công */}
      {/* {showSuccessToast && (
        <div
          id="toast-success"
          className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">
            Item moved successfully.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={handleSuccessToastClose}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )} */}

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
    </div>
  );
};

export default Table;
