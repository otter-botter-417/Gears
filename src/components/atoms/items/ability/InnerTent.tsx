import { FC } from "react";

type innerTentType = {
  innerTent: string;
};

export const InnerTent: FC<innerTentType> = (props) => {
  const { innerTent } = props;
  return (
    <div>
      <h2>インナーテントp</h2>
      <p>{innerTent}</p>
    </div>
  );
};
