import Inputs from "@components/CreateStory/Input";
import { addStory } from "@services/story.service";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddStory = () => {
  const [storyInfo, setStoryInfo] = useState({ name: "", summary: "" });
  const [storyDesc, setStoryDesc] = useState({
    author: "",
    chap: 0,
    genre: "Thiếu nhi",
    status: "Hoàn thành",
  });
 
  const [error, setError] = useState(""); // State lưu thông báo lỗi

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Kiểm tra xem các trường input đã được nhập đầy đủ chưa
    if (!storyInfo.name || !storyInfo.summary || !storyDesc.author || !storyDesc.chap) {
      setError("Vui lòng điền đầy đủ thông tin trước khi thêm!");
      return;
    }

    const newStory = {
      ...storyInfo,
      ...storyDesc,
          };
    console.log(newStory);

   

    await addStory(newStory);
    toast.success('Thêm truyện thành công')

    navigate("/admin");
  };

  return (
    <div >
      <div className="flex justify-center items-center  bg-slate-200 h-20 ">
        <h2 className="text-black text-4xl font-bold">Thêm truyện</h2>
      </div>

     <div className="mx-[60px]">
        <Inputs
          storyInfo={storyInfo}
          setStoryInfo={setStoryInfo}
          storyDesc={storyDesc}
          setStoryDesc={setStoryDesc}
        />
     </div>
      {/* Hiển thị thông báo lỗi nếu có */}
      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
      <div
        className="flex justify-end"
        style={{ transform: "translate(-60px, -100px)" }}
      >
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => navigate('/admin')}
        >
          Hủy
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Thêm
        </button>
      </div>
    </div>
  );
};

export default AddStory;
