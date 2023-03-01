//商品API内の型情報

export type itemDatas = {
  itemDatas: {
    category: string;
    itemName: string;
    brandName: string;
    price: number;
    itemAbility?: {
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
};
