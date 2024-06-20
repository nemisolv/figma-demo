import React from "react";
import InputInfo from "./InputInfo";
import InputDesc from "./InputDesc";
import Upload from "./upload";

const Inputs = ({ storyInfo, setStoryInfo, storyDesc, setStoryDesc }) => {
  return (
    <div className="mt-10 mx-80 flex flex-row justify-between">
      <div className="w-full">
        <InputInfo storyInfo={storyInfo} setStoryInfo={setStoryInfo} />
        <InputDesc storyDesc={storyDesc} setStoryDesc={setStoryDesc} />
      </div>
      <Upload />
    </div>
  );
};

export default Inputs;
