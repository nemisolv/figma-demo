const stories = [
  {
    id: '1',
    title: 'Truyện code dạo',
    thumbnail:
      'https://i.pinimg.com/474x/a5/0a/56/a50a56e5cb68ce29b49c9132d4417272.jpg',
  },
  {
    id: '2',
    title: 'Dạ chào m.n ạ. Biết là hơi lạc đề nhưng mong ad duyệt bài ❤ ',
    thumbnail:
      'https://i.pinimg.com/474x/a5/0a/56/a50a56e5cb68ce29b49c9132d4417272.jpg',
  },
  {
    id: '3',
    title: 'Jujutsu kaisen',
    thumbnail:
      'https://i.pinimg.com/474x/a5/0a/56/a50a56e5cb68ce29b49c9132d4417272.jpg',
  },
];

function SearchResult({ searchValue }) {
  return (
    <div className="bg-white rounded-lg p-2 w-[500px]">
      <div>
        {/* <h2 className="text-2xl font-semibold">Kết quả tìm kiếm</h2> */}
        <div className="flex flex-col gap-2 ">
          {stories.map((story) => (
            <div key={story.id} className="flex items-center gap-3 hover:bg-slate-100 cursor-pointer">
              <img
                src={story.thumbnail}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div>
                <h3 className="text-sm text-[#333]">{story.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
