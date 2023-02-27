import { FC } from "react";
import { sizeType } from "../../../types/sizeType";
import { ItemDataText } from "../text/ItemDataText";
import { ItemDetailText } from "../text/ItemDetailText";

export const OpenSize: FC<sizeType> = (props) => {
  const { size } = props;
  return (
    <div>
      <ItemDataText text={"サイズ (幅×奥行き×高さ)"} />
      <ItemDetailText text={`${size.wide}x${size.depth}x${size.high}cm`} />
    </div>
  );
};
