import { LoadingButton } from "@mui/lab";
import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Tags } from "../atoms/itemAppend/Tags";
import { FormEvent } from "react";
import { TextFieldStyles } from "../../styles/ItemAppendPage/TextFieldStyles";
import { TentDatas } from "../atoms/itemAppend/itemDatas/TentDatas";
import { categoryNameList } from "../atoms/itemAppend/SelectNames/CategoryNameList";
import { brandNameList } from "../atoms/itemAppend/SelectNames/BrandNameList";
import { colorTagList } from "../atoms/itemAppend/SelectNames/ColorTagList";
import { itemTagList } from "../atoms/itemAppend/SelectNames/ItemTagList";

const ItemAppendPage = () => {
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
          {categoryNameList.map((option) => (
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
          {brandNameList.map((option) => (
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
