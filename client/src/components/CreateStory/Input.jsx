
import Upload from './upload';
import InputInfo from '@components/CreateStory/InputInfo';
import InputDesc from '@components/CreateStory/InputDesc';

const Inputs = ({ storyInfo, setStoryInfo, storyDesc, setStoryDesc }) => {
  return (
    <div className="mt-10  flex flex-row justify-between">
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

        <div >
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

        <div></div>
      </div>
    </div>
  );
};

export default Inputs;
