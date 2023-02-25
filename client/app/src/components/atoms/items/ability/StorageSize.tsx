import { FC } from "react";
import { sizeType } from "../../../types/sizeType";
import { ItemDataText } from "../../text/ItemDataText";

export const StorageSize: FC<sizeType> = (props) => {
  const { size } = props;
  return (
    <div>
      <ItemDataText text={"収納サイズ (幅×奥行き×高さ)"} />
      <p>
        {size.wide}x{size.depth}x{size.high}cm
      </p>
    </div>
  );
};
