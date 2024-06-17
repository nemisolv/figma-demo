import { useNavigate } from "react-router-dom";

function StoryItem({ story }) {
  const { title, thumbnail, name, id } = story;
  const navigate = useNavigate();

  return (
    <div className="m relative h-full hover:invert-[12%] cursor-pointer" onClick={() => navigate(`/stories/${id}`)} >
      <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
      <div className="">
          <h4 className="text-white font-medium  text-center absolute  bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] p-3  bottom-0 w-full  ">
            {title}
          </h4>
      </div>
    </div>
  );
}

export default StoryItem;
