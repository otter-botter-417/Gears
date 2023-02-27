import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ItemTags from "../atoms/itemAppend/itemDatas/ItemTags";
import { TentDatas } from "../atoms/itemAppend/itemDatas/TentDatas";

const ItemAppendPage = () => {
  const category = [
    "テント",
    "タープ",
    "チェア",
    "テーブル",
    "焚き火台",
    "ランタン、照明",
    "寝袋",
    "マット",
    "コット",
    "調理器具",
    "テントアクセサリー",
    "暖房器具",
    "クーラーボックス",
    "収納",
  ];
  const brand = [
    "ogawa (オガワ)",
    "Coleman (コールマン)",
    "snow peak (スノーピーク)",
    "WIWO",
    "BUNDOK (バンドック)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const [categoryValue, setCategoryValue] = useState("テント"); // valueをstateで管理

  console.log(categoryValue);

  return (
    <>
      <Box>
        <TextField required id="itemName" label="商品名" defaultValue="" />
        <TextField required id="amazonUrl" label="AmazonURL" defaultValue="" />
        <TextField required id="ASIN" label="ASIN" defaultValue="" />
        <TextField
          id="Category"
          select
          label="カテゴリー"
          value={categoryValue}
          defaultValue="テント"
          onChange={(event) => setCategoryValue(event.target.value)}
        >
          {category.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="brand"
          select
          label="メーカーを選択"
          defaultValue="ogawa (オガワ)"
        >
          {brand.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="price" label="定価" />
        <TentDatas categoryValue={categoryValue} />
        <ItemTags />
      </Box>
    </>
  );
};

export default ItemAppendPage;
