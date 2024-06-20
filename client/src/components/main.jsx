import React, { useEffect, useState } from "react";
import Table from "./table";
import { Link } from "react-router-dom";
import { getStories } from "@services/story.service";
import { toast } from "react-toastify";

const Main = () => { 

  const [stories, setStories] = useState([]);
  console.log("🚀 ~ Main ~ stories:", stories)

  useEffect(() => {
      const fetchStories = async () => {
      try {
        const res = await   getStories();
        if(res.data.length ===0) {
          toast.info('Danh sách truyện rỗng')
        }else {
          setStories(res.data)
        }
      }catch(error) {
        toast.error(error.response.data.message)
      }
      }

      fetchStories();

  },[])


  return (
    <div className="  bg-gray-200 p-4 h-screen">
      <div className="flex-grow m-16 flex flex-col">
        <div className="flex items-center justify-between my-12">
          <h2 className="text-4xl font-bold">Danh sách truyện</h2>
          <Link to="/admin/add-story">
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              Thêm Truyện
            </button>
          </Link>
        </div>
        <Table stories={stories} setStories={setStories} />
      </div>
    </div>
  );
};

export default Main;
