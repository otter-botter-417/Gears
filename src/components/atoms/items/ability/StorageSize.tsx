import { FC } from "react";
import { sizeType } from "../../types/sizeType";

export const StorageSize: FC<sizeType> = (props) => {
  const { size } = props;
  return (
    <div>
      <h2>収納サイズ (幅×奥行き×高さ)</h2>
      <p>
        {size.wide}x{size.depth}x{size.high}cm
      </p>
    </div>
  );
};
