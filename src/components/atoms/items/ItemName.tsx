import { FC } from "react";

type itemNameType = {
  itemName: string;
};

export const ItemName: FC<itemNameType> = (props) => {
  const { itemName } = props;
  return (
    <div>
      <h1>{itemName}</h1>
    </div>
  );
};
