import { FC } from "react";
import { BrandName } from "../atoms/items/BrandName";
import { ItemName } from "../atoms/items/ItemName";
import { Box } from "@mui/material";
import image from "../../images/hoz-st.jpg";
import { useWindowSize } from "../hooks/useWindowSize";

type itemNameAndBrandType = {
  itemName: string;
  brandName: string;
  matches: boolean;
};

export const ItemNameWithImage: FC<itemNameAndBrandType> = (props) => {
  const { itemName, brandName, matches } = props;
  const [width] = useWindowSize();
  let widthSize: number;
  if (matches) {
    widthSize = width * 0.5;
  } else {
    widthSize = width * 0.9;
  }

  return (
    <div style={{ width: "60%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <BrandName brandName={brandName} />
        <ItemName itemName={itemName} />
      </Box>
      <a
        target="_blank"
        href="https://www.amazon.co.jp/dp/B09QZ26BZM/?coliid=IIFLIGL2QEF5M"
        rel="noopener noreferrer"
      >
        <img height={widthSize} src={image} alt="Logo" />
      </a>
    </div>
  );
};
