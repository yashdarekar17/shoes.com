import { Product } from "./Product";
import { Product1 } from "./productcarts/Product1";
import { Product2 } from "./productcarts/Product2";
import { Product3 } from "./productcarts/Product3";
import { Product4 } from "./productcarts/Product4";

export const AllProducts = [
  ...Product,
  ...Product1,
  ...Product2,
  ...Product3,
  ...Product4,
];
