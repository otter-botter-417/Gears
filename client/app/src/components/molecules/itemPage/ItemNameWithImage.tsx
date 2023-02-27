import { FC } from "react";
import { BrandName } from "../../atoms/itemPage/BrandName";
import { ItemName } from "../../atoms/itemPage/ItemName";
import { Box } from "@mui/material";
import image from "../../../images/hoz-st.jpg";
import { useWindowSize } from "../../atoms/hooks/useWindowSize";

type itemNameAndBrandType = {
  itemName: string;
  brandName: string;
  matches: boolean;
};

//商品名　メーカー　画像を表示するコンポーネント
export const ItemNameWithImage: FC<itemNameAndBrandType> = (props) => {
  const { itemName, brandName, matches } = props;
  //ウィンドウサイズによってwidthの数値を変えてレスポンシブ処理
  const [width] = useWindowSize();
  let widthSize: number;
  //横画面時はウィンドウの50% 縦表示時は90%
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
        {/* 商品名　メーカー　を表示 */}
        <BrandName brandName={brandName} />
        <ItemName itemName={itemName} />
      </Box>
      {/* 商品画像とクリックでアマゾンへのリンク */}
      <a
        target="_blank"
        href="https://www.amazon.co.jp/dp/B09QZ26BZM/?coliid=IIFLIGL2QEF5M"
        rel="noopener noreferrer"
      >
        {/* レスポンシブ画像 */}
        <img height={widthSize} src={image} alt="Logo" />
      </a>
    </div>
  );
};
