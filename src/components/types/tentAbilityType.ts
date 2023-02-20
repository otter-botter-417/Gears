export type tentAbilityType = {
  tentAbility: {
    itemName: string;
    brandName: string;
    price: number;
    openSize: {
      wide: number;
      depth: number;
      high: number;
    };
    storageSize: {
      wide: number;
      depth: number;
      high: number;
    };
    weight: number;
    capacity: number;
    innerTent: string;
    grandSheet: string;
    accessories: Array<string>;
  };
};
