import { FC, useEffect, useState } from "react";

const EffectPractice: FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`카운트가 증가 했습니다.! ${count}`);

    return () => {
      console.log("컴포넌트가 종료되었습니다.");
    };
  }, [count]);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default EffectPractice;
