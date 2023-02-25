import { FC } from "react";
import { TentAbilitys } from "../molecules/ability/TentAbilitys";
import { tentAbilityType } from "../types/tentAbilityType";

export const ItemAndAbilitys: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  return (
    <div className="App">
      <TentAbilitys tentAbility={tentAbility} />
    </div>
  );
};
