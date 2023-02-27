import { FC } from "react";
import { TentAbilitys } from "../molecules/ability/TentAbilitys";
import { tentAbilityType } from "../types/tentAbilityType";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";

export const ItemAndAbilitys: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  return (
    <div className="App">
      <StarBorderPurple500SharpIcon />
      <TentAbilitys tentAbility={tentAbility} />
    </div>
  );
};
