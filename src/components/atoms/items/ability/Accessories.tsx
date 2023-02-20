import { FC } from "react";

type accessoriesType = {
  accessories?: Array<string>;
};

export const Accessories: FC<accessoriesType> = (props) => {
  const { accessories } = props;
  return (
    <div>
      <h2>その他付属品</h2>
      {accessories.map((accessoriesArray) => (
        <p>{accessoriesArray}</p>
      ))}
    </div>
  );
};
