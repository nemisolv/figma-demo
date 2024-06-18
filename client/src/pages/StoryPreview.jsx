import { getPreviewStoryById } from '@services/story.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import Button from '@components/Button';


function StoryPreview() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    getPreviewStoryById(id)
      .then((res) => {
        console.log(res.data);
        setStory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

    return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex mt-[100px] gap-10   ">
        <img src={story?.thumbnail} alt="" className="w-[360px] h-[600px] object-cover rounded-lg " />
        <div className='flex flex-col gap-3'>
          <h2 className='font-semibold text-2xl'>{story?.title}</h2>
          <p>Tác giả: {story?.author}</p>
          <p>Ngày phát hành: {new Date(story?.createdAt).toUTCString()}</p>
          <p>Chương: {story?.chap}</p>

          <button className='flex items-center'>
          <CiSquarePlus size={24}/>
            Đánh dấu truyện đã đọc
          </button>

          <Button primary to={`/stories/preview-chapter/${story?.id}`} className='rounded-2xl border border-slate-500'>Đọc truyện</Button>


        </div>
      </div>
          <div className=' mt-[20px] divider h-[1px] bg-slate-300 w-full'></div>
          <p>Thám Tử Lừng Danh Conan được mua bản quyền và được cập nhật phát sóng mới nhất trên ứng dụng giải trí POPS. Đây là bộ phim hoạt hình chuyển thể từ truyện tranh hấp dẫn nhất: Thám Tử Lừng Danh Conan của tác giả Aoyama Gosho. Phim Conan kể về thần đồng 17 tuổi Shinichi Kudo - còn được biết đến với biệt danh “Cứu tinh của Sở Cảnh sát Nhật Bản” - người thường xuyên giúp lực lượng cảnh sát giải quyết các vụ án phức tạp.</p>
    </div>
  );
}

export default StoryPreview;
