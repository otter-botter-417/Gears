import { FC } from "react";

type brandNameType = {
  brandName: string;
};

export const BrandName: FC<brandNameType> = (props) => {
  const { brandName } = props;
  return (
    <div>
      <h2>{brandName}</h2>
    </div>
  );
};
