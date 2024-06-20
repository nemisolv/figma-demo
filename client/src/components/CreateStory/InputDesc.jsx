// InputDesc.js
import React from "react";

const InputDesc = ({ storyDesc, setStoryDesc }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoryDesc((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="w-5/12  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-be mb-11"
      style={{ paddingBottom: 60, width: 540, backgroundColor: "#D9D9D9" }}
    >
      <form className="space-y-6">
        <label
          htmlFor="author"
          className="block text-2xl font-medium text-gray-900 dark:text-black"
        >
          Mô tả chi tiết
        </label>
        <div className="flex-between">
        <div>
            <label
              htmlFor="author"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
            >
              Tác giả
            </label>
            <input
              type="text"
              name="author"
              className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              placeholder="Nhập tên tác giả"
              value={storyDesc.author}
              onChange={handleChange}
              required
            />
        </div>
        <div>
            <label
              htmlFor="chapter"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
            >
              Số chương
            </label>
            <input
              type="number"
              name="chap"
              className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              placeholder=''
              value={storyDesc.chap}
              onChange={handleChange}
              required
            />
        </div>
        </div>
        <div>
          <label
            htmlFor="genre"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Thể loại
          </label>
          <select
            name="genre"
            className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
            value={storyDesc.genre}
            onChange={handleChange}
            required
          >
            <option value="Thiếu nhi">Thiếu nhi</option>
            <option value="Kinh dị">Kinh dị</option>
            <option value="Hài hước">Hài hước</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Tình trạng
          </label>
          <select
            name="status"
            className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
            value={storyDesc.status}
            onChange={handleChange}
            required
          >
            <option value="Hoàn thành">Hoàn thành</option>
            <option value="Đang cập nhật">Đang cập nhật</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default InputDesc;
