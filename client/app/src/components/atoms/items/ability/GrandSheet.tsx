import { FC } from "react";
import { ItemDataText } from "../../text/ItemDataText";

type grandSheetType = {
  grandSheet: string;
};

export const GrandSheet: FC<grandSheetType> = (props) => {
  const { grandSheet } = props;
  return (
    <div>
      <ItemDataText text={"グランドシート"} />
      <p>{grandSheet}</p>
    </div>
  );
};
