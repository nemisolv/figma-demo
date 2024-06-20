import React from "react";

const Upload = () => {
  return (
    <div
      className="w-3/6  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-be mb-11"
      style={{ width: 920,  backgroundColor: "#D9D9D9" }}
    >
      <label
        htmlFor="email"
        className="block text-2xl font-medium text-gray-900 dark:text-black"
      >
        Ảnh bìa
      </label>
      <div className="flex items-center justify-center w-full mt-9">
        <label
          style={{ width: 150, height: 200 }}
          htmlFor="dropzone-file"
          className="ml-2 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center ">
            <img
              src="https://gamek.mediacdn.vn/133514250583805952/2022/11/5/photo-6-16675562029442139900239-1667630383932-16676303841561657948359.jpg"
              alt=""
            />
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      
    </div>
  );
};

export default Upload;
