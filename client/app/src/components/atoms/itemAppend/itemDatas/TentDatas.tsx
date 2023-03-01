import { MenuItem, TextField } from "@mui/material";
import { FC, useState } from "react";
import { TextFieldStyles } from "../../../../styles/ItemAppendPage/TextFieldStyles";

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
          sx={TextFieldStyles.input}
          onChange={(event) => setSubCategoryValue(event.target.value)}
        >
          {category.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="openSize"
          label="サイズ (幅×奥×高) cm"
          required
          defaultValue={"××"}
          sx={TextFieldStyles.input}
        />
        <TextField
          id="storageSize"
          label="収納サイズ (幅×奥×高) cm"
          required
          defaultValue={"××"}
          sx={TextFieldStyles.input}
        />
        <TextField
          id="weight"
          label="重量 kg"
          required
          sx={TextFieldStyles.input}
        />
        <TextField
          id="capacity"
          label="収容人数"
          required
          sx={TextFieldStyles.input}
        />
        <TextField
          id="innerTent"
          label="インナーテント"
          required
          sx={TextFieldStyles.input}
        />
        <TextField
          id="grandSheet"
          label="グランドシート"
          required
          sx={TextFieldStyles.input}
        />
        <TextField
          id="accessories"
          label="その他付属品"
          sx={TextFieldStyles.input}
        />
      </>
    );
  } else {
    return <div></div>;
  }
};
