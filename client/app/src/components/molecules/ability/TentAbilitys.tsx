import { FC } from "react";

import { OpenSize } from "../../atoms/items/ability/OpenSize";
import { StorageSize } from "../../atoms/items/ability/StorageSize";
import { Weight } from "../../atoms/items/ability/Weight";
import { Capacity } from "../../atoms/items/ability/Capacity";
import { Price } from "../../atoms/items/ability/Price";
import { InnerTent } from "../../atoms/items/ability/InnerTent";
import { GrandSheet } from "../../atoms/items/ability/GrandSheet";
import { Accessories } from "../../atoms/items/ability/Accessories";
import { tentAbilityType } from "../../types/tentAbilityType";
import { Box } from "@mui/material";
import { HeartIcon } from "../../atoms/button/HeartIconButton";
import { ShareIconButton } from "../../atoms/button/ShareIconButton";

export const TentAbilitys: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;

  return (
    <Box>
      {/* いいねアイコン */}
      <HeartIcon />
      <ShareIconButton
        url={
          "https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner"
        }
        title={tentAbility.itemName}
      />

      {/* テント各種データ */}
      <Price price={tentAbility.price} />
      <OpenSize size={tentAbility.openSize} />
      <StorageSize size={tentAbility.storageSize} />
      <Weight weight={tentAbility.weight} />
      <Capacity capacity={tentAbility.capacity} />
      <InnerTent innerTent={tentAbility.innerTent} />
      <GrandSheet grandSheet={tentAbility.grandSheet} />
      <Accessories accessories={tentAbility.accessories} />
    </Box>
  );
};
