import { TentAbilitys } from "../../molecules/ability/TentAbilitys";
import { ItemNameWithImage } from "../../molecules/ItemNameWithImage";
import { tentAbilityType } from "../../types/tentAbilityType";
import { FC } from "react";

export const TentPage: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  return (
    <div className="App">
      <ItemNameWithImage
        itemName={tentAbility.itemName}
        brandName={tentAbility.brandName}
      />
      <TentAbilitys tentAbility={tentAbility} />
    </div>
  );
};
