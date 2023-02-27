import { ItemNameWithImage } from "../molecules/itemPage/ItemNameWithImage";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { CategorySelecter } from "../organisms/itemPage/CategorySelecter";

export const ItemPage = () => {
  //ブレークポイントの設定　デフォルトで横並び　577px以下で上下並び
  const matches: boolean = useMediaQuery("(min-width:577px)");
  //APIがないので商品情報を仮定
  const itemDatas = {
    category: "テント",
    itemName: "HOZ-ST",
    brandName: "ogawa",
    price: 55000,
    itemAbility: {
      openSize: {
        wide: 255,
        depth: 245,
        high: 120,
      },
      storageSize: {
        wide: 52,
        depth: 20,
        high: 18,
      },
      weight: 3.34,
      capacity: 2,
      innerTent: "付属",
      grandSheet: "なし",
      accessories: ["張り綱1.5m4本", "アルミピン12本"],
    },
  };
  //横並びのときの記述
  if (matches) {
    return (
      <Box
        sx={{
          padding: 5,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* 商品名　メーカー　画像の表示 */}
        <ItemNameWithImage
          itemName={itemDatas.itemName}
          brandName={itemDatas.brandName}
          matches={matches}
        />
        {/* カテゴリー毎の情報ページを表示するためのコンポーネント */}
        <CategorySelecter itemDatas={itemDatas} />
      </Box>
    );
  } else {
    //縦並びのときの記述
    return (
      <Box
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        {/* 商品名　メーカー　画像の表示 */}
        <ItemNameWithImage
          itemName={itemDatas.itemName}
          brandName={itemDatas.brandName}
          matches={matches}
        />
        {/* カテゴリー毎の情報ページを表示するためのコンポーネント */}
        <CategorySelecter itemDatas={itemDatas} />
      </Box>
    );
  }
};
