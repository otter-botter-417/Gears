import { brandNameList } from "../../atoms/itemAppend/SelectNames/BrandNameList";
import { categoryNameList } from "../../atoms/itemAppend/SelectNames/CategoryNameList";
import { colorTagList } from "../../atoms/itemAppend/SelectNames/ColorTagList";
import { itemTagList } from "../../atoms/itemAppend/SelectNames/ItemTagList";

export const SelectNames = () => {
  const selectNames = {
    category: categoryNameList,
    brand: brandNameList,
    itemTag: itemTagList,
    colorTag: colorTagList,
  };
  return selectNames;
};
