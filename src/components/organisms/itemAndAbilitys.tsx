import { FC } from "react";

export const ItemAndAbilitys: FC<tentAbilityType> = (props) => {
  const { tentAbility } = props;
  return (
    <div className="App">
      <TentAbilitys tentAbility={tentAbility} />
    </div>
  );
};
