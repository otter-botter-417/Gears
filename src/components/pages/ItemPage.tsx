import { TentAbilitys } from "../molecules/ability/TentAbilitys";
import { FC } from "react";
import { tentAbilityType } from "../types/tentAbilityType";
import { ItemNameWithImage } from "../molecules/ItemNameWithImage";
import Box from "@mui/material/Box";

export const ItemPage: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1
      }}
    >
      <ItemNameWithImage
        itemName={tentAbility.itemName}
        brandName={tentAbility.brandName}
      />
      <TentAbilitys tentAbility={tentAbility} />
    </Box>
  );
};
