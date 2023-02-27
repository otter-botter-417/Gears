import { FC } from "react";
import { Typography } from "@mui/material";
import { ItemDetailText } from "../text/ItemDetailText";

type priceType = {
  price: number;
};

export const Price: FC<priceType> = (props) => {
  const { price } = props;
  return (
    <div>
      <Typography variant={"h5"}>定価</Typography>
      <ItemDetailText text={`¥${price}`}></ItemDetailText>
    </div>
  );
};
