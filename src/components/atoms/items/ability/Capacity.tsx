import { FC } from "react";

type capacityType = {
  capacity: number;
};

export const Capacity: FC<capacityType> = (props) => {
  const { capacity } = props;
  return (
    <div>
      <h2>収容人数</h2>
      <p>{capacity}人</p>
    </div>
  );
};
