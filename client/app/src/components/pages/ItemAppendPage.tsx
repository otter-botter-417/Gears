import { LoadingButton } from "@mui/lab";
import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Tags } from "../atoms/itemAppend/Tags";
import { FormEvent } from "react";
import { TextFieldStyles } from "../../styles/ItemAppendPage/TextFieldStyles";
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
  ];
  const itemTagList = [
    "軽量",
    "簡単設営",
    "韓国",
    "コンパクト",
    "無骨",
    "煙突穴",
  ];
  const colorTagList = [
    "オリーブ",
    "レッド",
    "ブラック",
    "ホワイト",
    "ベージュ",
    "ブラウン",
  ];
  const [categoryValue, setCategoryValue] = useState(""); // valueをstateで管理
  const [brandValue, setBrandValue] = useState(""); // valueをstateで管理
  const [itemTags, setItemTags] = useState<string[]>([]);
  const [colorTags, setColorTags] = useState<string[]>([]);

  // const itemDatasRegisterApi = {};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 入力欄の文字列を取得
    const itemNames = e.currentTarget.itemName.value;
    const amazonUrl = e.currentTarget.amazonUrl.value;
    const asin = e.currentTarget.asin.value;
    const price = e.currentTarget.price.value;

    console.log(itemNames);
    console.log(amazonUrl);
    console.log(asin);
    console.log(categoryValue);
    console.log(brandValue);
    console.log(price);
    console.log(itemTags);
    console.log(colorTags);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <TextField
          id="itemName"
          required
          label="商品名"
          defaultValue=""
          sx={TextFieldStyles.input}
        />
        <TextField
          id="amazonUrl"
          required
          label="AmazonURL"
          defaultValue=""
          sx={TextFieldStyles.input}
        />
        <TextField
          id="asin"
          required
          label="ASIN"
          defaultValue=""
          sx={TextFieldStyles.input}
        />
        <TextField
          id="Category"
          select
          label="カテゴリー"
          value={categoryValue}
          defaultValue="テント"
          onChange={(event) => setCategoryValue(event.target.value)}
          sx={TextFieldStyles.input}
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
          value={brandValue}
          defaultValue="ogawa (オガワ)"
          onChange={(event) => setBrandValue(event.target.value)}
          sx={TextFieldStyles.input}
        >
          {brand.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="price"
          required
          label="定価"
          sx={TextFieldStyles.input}
        />
        <Tags
          text={"タグ"}
          tagName={itemTags}
          setTagName={setItemTags}
          items={itemTagList}
        />
        <Tags
          text={"カラー"}
          tagName={colorTags}
          setTagName={setColorTags}
          items={colorTagList}
        />
        <TentDatas categoryValue={categoryValue} />

        <LoadingButton
          sx={TextFieldStyles.input}
          fullWidth
          type="submit"
          variant="outlined"
        >
          データ送信
        </LoadingButton>
      </Box>
    </>
  );
};

export default ItemAppendPage;
