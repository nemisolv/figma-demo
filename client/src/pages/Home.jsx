import StoryItem from '@components/shared/StoryItem';
import { formatDateToNow } from '@utils/formatDateToNow';

const fakeStories = [
  {
    id: 1,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
  {
    id: 2,
    title: 'Âm quan minh thế',
    thumbnail:
      'https://i.pinimg.com/564x/b8/68/5a/b8685a93b8a61da125f84afc104ce072.jpg',
  },
];

const fakeStories2 = [
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: false,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: false,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: false,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Âm quan minh thế',
    hot: true,
    completed: true,
    tags: ['Hành động', 'Huyền huyễn'],
    chap: 200,
    createdAt: new Date(),
  },
];

function Home() {
  return (
    <div className="">
      <h1 className="mb-2  font-semibold text-2xl uppercase">Truyện hot </h1>
      <div className="grid grid-cols-9 gap-4 px-8">
        {fakeStories.map((story) => (
          <StoryItem story={story} key={story.id} />
        ))}
      </div>

      {/* truyen moi cap nhat */}
      <div className="flex justify-between gap-10">
        <div className="left flex-1">
          <h1 className="mb-2  font-semibold text-2xl uppercase mt-4">
            Truyện mới cập nhật{' '}
          </h1>
          <div>
            <div className="left">
              {fakeStories2.length === 0 ? (
                <p className="text-center text-2xl">Không có truyện nào</p>
              ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right font-medium">
                    {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead> */}
                    <tbody>
                      {fakeStories2.map((story) => (
                        <tr
                          key={story.id}
                          className="even:bg-white  odd:bg-gray-200  dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="flex gap-2 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {story.title}{' '}
                            {story.completed && (
                              <span className="text-green">Full</span>
                            )}
                            {story.hot && (
                              <span className="text-red-600">Hot</span>
                            )}
                          </th>
                          <td className="px-6 py-4">{story.tags.join(', ')}</td>
                          <td className="px-6 py-4">{`Chương ${story.chap}`}</td>
                          <td className="px-6 py-4">
                            {formatDateToNow(new Date(story.createdAt))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

              
          </div>
        </div>
        <div className="right">
          <h1 className="mb-2  font-semibold text-2xl uppercase mt-4">
            Truyện đang đọc
          </h1>
          <div>
            <div className="left">
              {fakeStories2.length === 0 ? (
                <p className="text-center text-2xl">Không có truyện nào</p>
              ) : (
                <div
                  className="relative overflow-x-auto shadow-md sm:rounded-lg"
                  style={{ maxHeight: 'calc(3em * 5)', overflowY: 'auto' }}
                >
                  <table className="w-full text-sm text-left rtl:text-right font-medium">
                    {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead> */}
                    <tbody>
                      {fakeStories2.slice(0, 10).map((story) => (
                        <tr
                          key={story.id}
                          className="even:bg-white  odd:bg-gray-200  dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="flex gap-2 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {story.title}{' '}
                            {story.completed && (
                              <span className="text-green">Full</span>
                            )}
                            {story.hot && (
                              <span className="text-red-600">Hot</span>
                            )}
                          </th>
                          <td className="px-6 py-4">
                            Đọc tiếp {`C${story.chap}`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="contact mt-4">
             <div>
                  <h2 className="font-medium text-lg">Liên hệ</h2>
                  <p>Số điện thoại: 289289283223</p>
                  <p>Email: email@gmail.com</p>
             </div>
             <div>
                  <h2 className="font-medium text-lg">Theo dõi chúng tôi</h2>
                 <div className='flex gap-3 items-center mt-4'>
                      <img className='w-[40px] h-[40px] object-contain' src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />
                      <img className='w-[40px] h-[40px] object-contain' src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-App-Rec.png" alt="" />
                      <img className='w-[40px] h-[40px] object-contain' src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                 </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
