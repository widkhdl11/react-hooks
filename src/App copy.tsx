import { FC, useState } from "react";
import StatePractice from "./components/StatePractice";
import EffectPractice from "./components/EffectPractice";

//type Color = "bg-purple-500" | "bg-blue-500" | "bg-pink-500";

const App: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onClickView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {isVisible && <EffectPractice />}
      <button
        onClick={onClickView}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-8"
      >
        {isVisible ? "Hide" : "View"}
      </button>
    </div>
  );
};

export default App;
