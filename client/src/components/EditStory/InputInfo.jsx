import React from "react";

const InputInfo = ({ storyInfo, setStoryInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoryInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="w-5/12  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-be mb-11"
      style={{ paddingBottom: 60, width: 540, backgroundColor: "#D9D9D9" }}
    >
      <form className="space-y-6">
        <label
          htmlFor="name"
          className="block text-2xl font-medium text-gray-900 dark:text-black"
        >
          Thông tin truyện
        </label>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Tên truyện
          </label>
          <input
            type="text"
            name="name"
            className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
            placeholder="Nhập tên truyện"
            value={storyInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="summary"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Tóm tắt truyện
          </label>
          <textarea
            name="summary"
            className="bg-white border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
            value={storyInfo.summary}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default InputInfo;
