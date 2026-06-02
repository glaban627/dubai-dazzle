import kitchen1 from "@/assets/bwn/kitchen1.jpg.asset.json";
import kitchen2 from "@/assets/bwn/kitchen2.jpg.asset.json";
import kitchenLiving from "@/assets/bwn/kitchen-living.jpg.asset.json";
import restaurant from "@/assets/bwn/restaurant.jpg.asset.json";
import living1 from "@/assets/bwn/living1.jpg.asset.json";
import living2 from "@/assets/bwn/living2.jpg.asset.json";
import flooring from "@/assets/bwn/flooring.jpg.asset.json";
import exhibition from "@/assets/bwn/exhibition.jpg.asset.json";
import lazyboy from "@/assets/bwn/lazyboy.jpg.asset.json";
import huawei from "@/assets/bwn/huawei.jpg.asset.json";
import reception from "@/assets/bwn/reception.jpg.asset.json";
import sofa from "@/assets/bwn/sofa.jpg.asset.json";
import workshop from "@/assets/bwn/workshop.jpg.asset.json";
import contactBg from "@/assets/bwn/contact-bg.jpg.asset.json";

export const IMG = {
  kitchen1: kitchen1.url,
  kitchen2: kitchen2.url,
  kitchenLiving: kitchenLiving.url,
  restaurant: restaurant.url,
  living1: living1.url,
  living2: living2.url,
  flooring: flooring.url,
  exhibition: exhibition.url,
  lazyboy: lazyboy.url,
  huawei: huawei.url,
  reception: reception.url,
  sofa: sofa.url,
  workshop: workshop.url,
  contactBg: contactBg.url,
};

export const PORTFOLIO = [
  { id: "kitchen-1", title: "Modern Grey Kitchen", category: "Kitchen", img: IMG.kitchen2 },
  { id: "kitchen-2", title: "Wood & Red Living Kitchen", category: "Kitchen", img: IMG.kitchenLiving },
  { id: "kitchen-3", title: "Luxury Villa Kitchen", category: "Kitchen", img: IMG.kitchen1 },
  { id: "restaurant", title: "Wood Panel Restaurant", category: "Restaurant", img: IMG.restaurant },
  { id: "living-1", title: "Cinematic Living Room", category: "Living Room", img: IMG.living1 },
  { id: "living-2", title: "Bespoke Lounge", category: "Living Room", img: IMG.living2 },
  { id: "flooring", title: "Hardwood Flooring Suite", category: "Flooring", img: IMG.flooring },
  { id: "exhibition", title: "Joe & The Juice — Concierge", category: "Exhibition", img: IMG.exhibition },
  { id: "lazyboy", title: "Lazy Boy Showroom", category: "Exhibition", img: IMG.lazyboy },
  { id: "huawei", title: "Huawei Experience", category: "Exhibition", img: IMG.huawei },
  { id: "reception", title: "King Koil Reception", category: "Reception", img: IMG.reception },
  { id: "sofa", title: "Wooden Lounge Suite", category: "Furniture", img: IMG.sofa },
];