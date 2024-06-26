import InputDesc from '@components/EditStory/InputDesc';
import InputInfo from '@components/EditStory/InputInfo';
import Upload from '@components/EditStory/upload';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoryById, updateStory } from '@services/story.service';
import { toast } from 'react-toastify';

const EditStory = () => {
  const { id } = useParams();
  const stories = [];
  const navigate = useNavigate();
  const [storyInfo, setStoryInfo] = useState({});
  const [storyDesc, setStoryDesc] = useState({});
  const [story, setStory] = useState(null);
  const [error, setError] = useState(''); // State lưu thông báo lỗi

  console.log('🚀 ~ EditStory ~ story:', story);

  useEffect(() => {
    const fetchStoryById = async () => {
      try {
        const res = await getStoryById(id);
        setStory(res.data);
        setStoryInfo({
          name: res.data.name,
          summary: res.data.summary,
          content: res.data.content,
        });
        setStoryDesc({
          author: res.data.author,
          chap: res.data.chap,
          genre: res.data.genre,
          status: res.data.status,
        });
      } catch (error) {
        console.log('🚀 ~ fetchStoryById ~ error:', error);
        toast.error('Could not find any story with id: ', id);
      }
    };
    fetchStoryById();
  }, [id]);

  const handleSubmit = async () => {
    if (
      !storyInfo.name ||
      !storyInfo.summary ||
      !storyDesc.author ||
      !storyDesc.chap ||
      !storyInfo.content
    ) {
      setError('Vui lòng điền đầy đủ thông tin trước khi thêm!');
      return;
    }

    const updatedStory = {
      id: parseInt(id),
      ...storyInfo,
      ...storyDesc,
    };
    console.log("🚀 ~ handleSubmit ~ updatedStory:", updatedStory)

    try {
      await updateStory(id,updatedStory);
      toast.success('Cập nhật truyện thành công!');
      navigate('/admin/stories');
    } catch (error) {
      toast.error(error.response.data.messsage);
    }

  };

  return (
    <div className="mt-10  flex flex-row justify-between mx-10">
      <div className="w-full">
        <InputInfo storyInfo={storyInfo} setStoryInfo={setStoryInfo} />
        <InputDesc storyDesc={storyDesc} setStoryDesc={setStoryDesc} />
      </div>
      <div>
        <Upload
          storyInfo={storyInfo}
          setStoryInfo={setStoryInfo}
          storyDesc={storyDesc}
          setStoryDesc={setStoryDesc}
        />
        {/* content */}

        <div>
          <label
            htmlFor="content"
            className="block text-2xl font-medium text-gray-900 dark:text-black"
          >
            Nội dung
          </label>
          <textarea
            name=""
            id="content"
            className="w-full h-96 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-be mb-11"
            onChange={(e) =>
              setStoryInfo({ ...storyInfo, content: e.target.value })
            }
            value={storyInfo.content}
          ></textarea>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
        <div
          className="flex justify-end"
          style={{ transform: 'translate(0,60px)' }}
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
    </div>
  );
};

export default EditStory;
