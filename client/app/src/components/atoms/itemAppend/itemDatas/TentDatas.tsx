import { MenuItem, TextField } from "@mui/material";
import { FC, useState } from "react";

type categoryNameType = {
  categoryValue: string;
};
const category = [
  "ドームテント",
  "ティピーテント",
  "パップテント",
  "ワンポールテント",
  "ロッジテント",
  "ツールームテント",
];

export const TentDatas: FC<categoryNameType> = (props) => {
  const { categoryValue } = props;
  const [subCategoryValue, setSubCategoryValue] = useState("ドームテント"); // valueをstateで管理
  if (categoryValue === "テント") {
    return (
      <>
        <TextField
          id="subCategory"
          select
          label="選択"
          value={subCategoryValue}
          defaultValue="テント"
          helperText="カテゴリーを選択"
          onChange={(event) => setSubCategoryValue(event.target.value)}
        >
          {category.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="openSize"
          label="サイズ (幅×奥×高) cm"
          defaultValue={"××"}
        />
        <TextField
          required
          id="storageSize"
          label="収納サイズ (幅×奥×高) cm"
          defaultValue={"××"}
        />
        <TextField required id="weight" label="重量 kg" />
        <TextField required id="capacity" label="収容人数" />
        <TextField required id="innerTent" label="インナーテント" />
        <TextField required id="grandSheet" label="グランドシート" />
        <TextField id="accessories" label="その他付属品" />
      </>
    );
  } else {
    return <div></div>;
  }
};
