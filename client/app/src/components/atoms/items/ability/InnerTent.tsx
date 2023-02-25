import { FC } from "react";
import { ItemDataText } from "../../text/ItemDataText";

type innerTentType = {
  innerTent: string;
};

export const InnerTent: FC<innerTentType> = (props) => {
  const { innerTent } = props;
  return (
    <div>
      <ItemDataText text={"インナーテント"} />
      <p>{innerTent}</p>
    </div>
  );
};
