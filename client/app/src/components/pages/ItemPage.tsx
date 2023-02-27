import React from "react";
import { TentAbilitys } from "../molecules/ability/TentAbilitys";
import { FC } from "react";
import { tentAbilityType } from "../types/tentAbilityType";
import { ItemNameWithImage } from "../molecules/ItemNameWithImage";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

export const ItemPage: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  const matches: boolean = useMediaQuery("(min-width:577px)");

  if (matches) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ItemNameWithImage
          itemName={tentAbility.itemName}
          brandName={tentAbility.brandName}
          matches={matches}
        />
        <TentAbilitys tentAbility={tentAbility} />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <ItemNameWithImage
          itemName={tentAbility.itemName}
          brandName={tentAbility.brandName}
          matches={matches}
        />
        <TentAbilitys tentAbility={tentAbility} />
      </Box>
    );
  }
};
