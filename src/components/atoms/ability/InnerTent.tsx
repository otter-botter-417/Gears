import { FC } from "react";

type innerTentType = {
  innerTent: string;
};

export const InnerTent: FC<innerTentType> = (props) => {
  const { innerTent } = props;
  console.log(innerTent);
  return (
    <div>
      <h2>インナーテント</h2>
      <p>{innerTent}</p>
    </div>
  );
};
