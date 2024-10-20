import { discover, men, women, jersey, shoe, short } from "../src/assets";

export const SHOP_DATA = [
  {
    title: "Mens",
    items: [],
  },
  {
    title: "Women",
    items: [],
  },
  {
    title: "Shoes",
    items: [],
  },
  {
    title: "Jersey",
    items: [],
  },
  {
    title: "Casual",
    items: [],
  },
];

export const CATEGORIES = [
  {
    id: 1,
    title: "We Are Hexashop",
    image: discover,
    route: "shop",
  },
  {
    id: 2,
    title: "Men",
    image: men,
    route: "shop/men",
  },
  {
    id: 3,
    title: "women",
    image: women,
    route: "shop/women",
  },
  {
    id: 4,
    title: "shoes",
    image: shoe,
    route: "shop/shoes",
  },
  {
    id: 5,
    title: "Casual",
    image: short,
    route: "shop/casual",
  },
  {
    id: 6,
    title: "Jersey",
    image: jersey,
    route: "shop/jersey",
  },
];
