import { FC } from "react";

type WeightType = {
  weight: number;
};

export const Weight: FC<WeightType> = (props) => {
  const { weight } = props;
  return (
    <div>
      <h2>重量</h2>
      <p>{weight}kg</p>
    </div>
  );
};
