import { FC, useState } from "react";

//type Color = "bg-purple-500" | "bg-blue-500" | "bg-pink-500";

enum Color {
  Purple = "bg-purple-500",
  Blue = "bg-blue-500",
  Pink = "bg-pink-500",
}

const StatePractice: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isRed, setIsRed] = useState<boolean>(true);
  //const [color, setColor] = useState<string>("bg-purple-500"); string 적용
  //const [color, setColor] = useState<Color>("bg-purple-500"); type 적용
  const [color, setColor] = useState<Color>(Color.Purple);

  const onClickCount = () => {
    return setCount(count + 1);
  };

  const onClickRed = () => {
    return setIsRed(!isRed);
  };

  // const onClickPurple = () => {
  //   return setColor(Color.Purple);
  // };
  // const onClickBlue = () => {
  //   return setColor(Color.Blue);
  // };
  // const onClickPink = () => {
  //   return setColor(Color.Pink);
  // };

  const onClickColor = (color: Color) => () => {
    return setColor(color);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        onClick={onClickCount}
        className="bg-blue-500 text-white w-12 h-12 rounded-full mt-8"
      >
        +
      </button>

      <div
        className={`mt-16 w-24 h-24 ${isRed ? "bg-red-500" : "bg-green-500"}`}
      ></div>
      <button
        onClick={onClickRed}
        className="bg-blue-500 text-white w-12 h-12 rounded-full mt-8"
      >
        R
      </button>

      <div className={`mt-16 w-24 h-24 ${color}`}></div>
      <div>
        <button
          onClick={onClickColor(Color.Purple)}
          className="bg-purple-500 text-white w-12 h-12 rounded-full mt-8"
        >
          P
        </button>
        <button
          onClick={onClickColor(Color.Blue)}
          className="ml-4 bg-blue-500 text-white w-12 h-12 rounded-full mt-8"
        >
          B
        </button>
        <button
          onClick={onClickColor(Color.Pink)}
          className="ml-4 bg-pink-500 text-white w-12 h-12 rounded-full mt-8"
        >
          P
        </button>
      </div>
    </div>
  );
};

export default StatePractice;
