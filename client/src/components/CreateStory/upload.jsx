import { useState } from "react";

const Upload = (
{
  storyInfo,
  setStoryInfo,

}

) => {

  // const [thumbnail, setThumbnail] = useState(null);

  const handleDisplayImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          // setThumbnail(reader.result);
          setStoryInfo({ ...storyInfo, thumbnail: reader.result });

        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div
      className="w-3/6  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-be mb-11"
      style={{ width: 920, backgroundColor: "#D9D9D9" }}
    >
      <label
        htmlFor="email"
        className="block text-2xl font-medium text-gray-900 dark:text-black"
      >
        Ảnh bìa
      </label>
        <div className="flex items-center justify-center w-full mt-9">
     {
      !storyInfo?.thumbnail ? (
        <label
          style={{ width: 150, height: 200 }}
          htmlFor="dropzone-file"
          className="ml-2 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          </div>
          <input id="dropzone-file" type="file" className="hidden" name="thumbnail"
          onChange={(e) =>handleDisplayImage(e)}
          
           />
        </label>
      ) : (
        <div className="flex items-center justify-center  w-[150px] h-[200px]">
          <img
            src={storyInfo?.thumbnail ? storyInfo?.thumbnail : ""} 
            alt="thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>)
     }
      </div>

     
      

      {/* <label
        htmlFor="email"
        className="block text-2xl font-medium text-gray-900 dark:text-black mt-5 "
      >
        Ảnh truyện
      </label>
      <div className="flex items-center justify-center w-full mt-3">
        <label
          style={{ width: 150, height: 200 }}
          htmlFor="dropzone-file"
          className="ml-2 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Tải ảnh lên</span>
              </p>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div> */}
    </div>
  );
};

export default Upload;
