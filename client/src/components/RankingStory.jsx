function RankingStory() {
  return (
    <div>
      <h1 className="uppercase text-black text-2xl font-semibold">
        Truyện hót
      </h1>

      <div className="flex justify-between mb-6">
        <button className="bg-black hover:opacity-90 text-white font-bold py-2 px-4 rounded">
          Ngày{' '}
        </button>
        <button className="bg-transparent border-black border  font-bold py-2 px-4 rounded">
          Tháng{' '}
        </button>
        <button className="bg-black hover:opacity-90 text-white font-bold py-2 px-4 rounded">
          Năm{' '}
        </button>
      </div>
      <div>
        {Array(10)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={`px-4 py-2 flex items-center gap-3 hover:bg-slate-300 cursor-pointer   ${
                index % 2 === 0 ? 'bg-slate-200 ' : ''
              }`}
            >
              <span className="border rounded-full w-[26px] h-[26px] flex-center border-black">
                {index}
              </span>{' '}
              <span>Đấu la đại lục</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RankingStory;
