import { getPreviewStoryById } from '@services/story.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Accordion from '@components/Accordion';
import RankingStory from '@components/RankingStory';
import { FaHome } from "react-icons/fa";


function StoryPreviewChapter() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    getPreviewStoryById(id)
      .then((res) => {
        setStory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <nav className='flex items-center gap-1'><FaHome color='blue' size={20} />
       Truyện / {!story?.title? "Truyền kì mạn lục": ""}</nav>
      <div className="flex justify-between gap-6">
        <div className="parent-left flex-1">
          <div>
            <div className="left">
              <h2 className="uppercase text-2xl font-semibold">
                Thông tin truyện
              </h2>
              <div>
                <img
                  src={story?.thumbnail}
                  alt=""
                  className="w-[260px] h-[500px] object-cover rounded-md"
                />
                <div className="story-info mt-4">
                  <h4>Tác giả: {story?.author}</h4>
                  <p>Thể loại: {story?.tags.join(', ')}</p>
                  <p>Nguồn: tamlinh247</p>
                  <p>
                    Trạng thái: {story?.completed ? 'Hoàn thành' : 'Đang ra'}
                  </p>
                </div>
              </div>
            </div>

            <div className="right">
              <h1 className="uppercase text-3xl font-semibold">
                {story?.title}
              </h1>
              <div className="my-3 divider h-[1px] bg-slate-600 w-full"></div>

              <div>
                <h4 className="mt-2 mb-6">Dịch giả: {story?.translator}</h4>

                <p>{story?.description}</p>

                <div>
                  <h3 className="underline font-semibold text-2xl">
                    Các chương mới nhất
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {/* {story?.chapters.map((chapter) => (
                                    <div className="border border-slate-300 p-2 rounded-md">
                                        <h4>{chapter.title}</h4>
                                        <p>{chapter.createdAt}</p>
                                    </div>
                                ))} */}
                    <li>Chương 99</li>
                    <li>Chương 98</li>
                    <li>Chương 97</li>
                  </ul>
                </div>

                <div>
                  <h3 className="uppercase underline font-semibold text-2xl">
                    Danh sách chương
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {/* {story?.chapters.map((chapter) => (
                                    <div className="border border-slate-300 p-2 rounded-md">
                                        <h4>{chapter.title}</h4>
                                        <p>{chapter.createdAt}</p>
                                    </div>
                                ))} */}
                    <li>Chương 1</li>
                    <li>Chương 2</li>
                    <li>Chương 3</li>
                    <li>Chương 4</li>
                    <li>Chươn 5</li>
                  </ul>
                </div>
              </div>

              <div className="flex-center  ">
                <button className="p-3  text-white bg-black">
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  1
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  2
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  3
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  4
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  5
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  ...
                </button>
                <button className="py-2 px-4 odd:text-white even:bg-[#F5D9FF] odd:bg-black">
                  10
                </button>
                <button className="p-3  px-4 text-white bg-black">
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="cmt-section">
            <h2 className="uppercase text-2xl  ">Bình luận</h2>
            <span>12 bình luận</span>

            <div>
              <div className="flex justify-end gap-2 my-2">
                <button className=" px-4 py-2 rounded-md">Sắp xếp theo</button>
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  Cũ nhất
                </button>
              </div>
              <div className="w-full">
                <textarea
                  className="w-full h-24 border border-slate-300 rounded-md p-2  resize-none"
                  placeholder="Viết bình luận"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-right min-w-[300px] flex flex-col ">
        <div>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Accordion key={index} index={index} />
              ))}
        </div>
        <div className=' flex-1 mt-[200px] '>
          {
            <RankingStory />
          }
        </div>
        </div>

      </div>
    </div>
  );
}

export default StoryPreviewChapter;
