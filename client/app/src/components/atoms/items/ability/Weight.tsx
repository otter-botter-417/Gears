import { FC } from "react";
import { ItemDataText } from "../../text/ItemDataText";

type WeightType = {
  weight: number;
};

export const Weight: FC<WeightType> = (props) => {
  const { weight } = props;
  return (
    <div>
      <ItemDataText text={"重量"} />
      <p>{weight}kg</p>
    </div>
  );
};
