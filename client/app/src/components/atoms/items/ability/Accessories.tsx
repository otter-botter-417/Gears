import { FC } from "react";
import { ItemDataText } from "../../text/ItemDataText";

type accessoriesType = {
  accessories?: Array<string>;
};

export const Accessories: FC<accessoriesType> = (props) => {
  const { accessories } = props;
  if (!accessories) {
    return <div></div>;
  } else {
    return (
      <div>
        <ItemDataText text={"その他付属品"} />
        {accessories.map((accessoriesArray) => (
          <p>{accessoriesArray}</p>
        ))}
      </div>
    );
  }
};
