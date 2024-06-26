import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function StoryByChapterItem({ story }) {
  const { title, chap, hot, completed, thumbnail, id, description } = story;

  return (
    <div className="w-full bg-[#EBEBEB] text-[#333] min-h-[40px]">
      <div className='flex items-center gap-3'>
        <img
          src={thumbnail}
          alt=""
          className="w-[200px] h-[80px] object-cover"
        />
       <div className='flex items-center justify-stretch flex-1  '>
            <div className=''>
              <div className="flex   gap-3  flex-col">
                <div className="flex   gap-3">
                    <h2 className='flex items-center gap-2 '>
                      <FaBook /> <span>{title}</span>
                    </h2>
                    <span
                      className={`${completed ? 'text-green-600 font-medium' : ''}`}
                    >
                      {completed ? 'Full' : ''}
                    </span>
                    <span
                      className={`${hot ? 'text-red-600 font-medium' : ''}`}
                    >
                      {hot ? 'Hot' : ''}
                    </span>
                </div>
                <p>{description.slice(0,100).concat('...')}</p>
              </div>
            </div>
            <div className=' text-center block flex-1 '>
                <Link to={`/stories/${id}/chapters/${chap}`} className="text-blue-500 hover:underline block"
                
                >
                    Chương {chap}
                </Link>
    
            </div>
       </div>
      </div>
    </div>
  );
}


export default StoryByChapterItem;
