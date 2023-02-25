import { FC } from "react";

type priceType = {
  price: number;
};

export const Price: FC<priceType> = (props) => {
  const { price } = props;
  return (
    <div>
      <h2>定価</h2>
      {/* <br/> */}
      <p>¥{price}</p>
    </div>
  );
};
