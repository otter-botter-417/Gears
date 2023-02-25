import { FC } from "react";
import { BrandName } from "../atoms/items/BrandName";
import { ItemName } from "../atoms/items/ItemName";
import { Button, Grid, Box } from "@mui/material";
import image from "../../images/hoz-st.jpg";

type itemNameAndBrandType = {
  itemName: string;
  brandName: string;
};

export const ItemNameWithImage: FC<itemNameAndBrandType> = (props) => {
  const { itemName, brandName } = props;
  console.log(props);
  return (
    <div>
      <ItemName itemName={itemName} />
      <BrandName brandName={brandName} />
      <img height={800} width={800} src={image} alt="Logo" />
    </div>
  );
};
