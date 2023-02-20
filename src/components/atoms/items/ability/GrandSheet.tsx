import { FC } from "react";

type grandSheetType = {
  grandSheet: string;
};

export const GrandSheet: FC<grandSheetType> = (props) => {
  const { grandSheet } = props;
  return (
    <div>
      <h2>グランドシート</h2>
      <p>{grandSheet}</p>
    </div>
  );
};
