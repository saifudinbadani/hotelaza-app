import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Atrium Buffet",
    description: "Whether it's a hearty breakfast to start your day, a sumptuous long lunch or an indulgent dinner, Atrium has a generous and delicious buffet dining experience for every outing.",
    price: "850",
    discountedPrice: "800",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    title: "Camaje Bistro",
    description: "Customers are blindfolded for the duration of the meal. Without the ability to see, customers' sense of smell, texture, and sound truly come alive.",
    price: "575",
    discountedPrice: "500",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    title: "Degustation",
    description: "This is a very intimate dining experience in which the chefs cook directly in front of you at an open kitchen.",
    price: "410",
    discountedPrice: "370",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    title: "Jekyll and Hyde Club",
    description: "This spooky restaurant features eccentric explorers and mad scientists that run about while you enjoy one of the weirdest dining experiences you will probably ever have.",
    price: "635",
    discountedPrice: "590",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    title: "Dominique Ansel Kitchen",
    description: "The most unique part of Dominique Ansel Kitchen is their ultra-exclusive dessert-tasting experience called Unlimited Possibilities, or UP for short.",
    price: "380",
    discountedPrice: "350",
    categoryName: "dining",
  },
  {
    _id: uuid(),
    title: "The Caviar Essential Facial",
    description: "A thorough eye and face massage will leave your face lifted and firmer than before, while your arms are treated to a caviar-infused treatment.",
    location: "Sydney",
    price: "900",
    discountedPrice: "865",
    categoryName: "spa",
  },
  {
    _id: uuid(),
    title: "Spirit Of Sound",
    description: "Exclusive to Gwinganna Lifestyle Retreat, it uses a fusion of massage techniques, including Kahuna bodywork and heated Basalt stones.",
    location: "Gold Coast",
    price: "1155",
    discountedPrice: "1050",
    categoryName: "spa",
  },
  {
    _id: uuid(),
    title: "Cellular Hydrating Facial",
    description: "Along with a deep cleanse, exfoliation and hydration, the treatment includes a surprisingly soothing ice facial massage.",
    location: "Melbourne",
    price: "400",
    discountedPrice: "380",
    categoryName: "spa",
  },
  {
    _id: uuid(),
    title: "Signature Himalayan Massage",
    description: "The Himalayan Hot Stone Massage, is billed as a rebalance for your body and mind, harnessing the power of heated natural salt stone crystals.",
    location: "Sydney",
    price: "290",
    discountedPrice: "290",
    categoryName: "spa",
  },
  {
    _id: uuid(),
    title: "Whitsunday Escape",
    description: "Capture the essence of the Whitsundays with a signature Whitsunday Escape treatment at one of the reef's most exclusive resorts, qualia.",
    location: "Great Barrier Reef",
    price: "1355",
    discountedPrice: "1300",
    categoryName: "spa",
  },
  {
    _id: uuid(),
    title: "Kakadu's Ancient Secrets",
    description: "Start and end in Darwin! With the Active Adventure tour Kakadu's Ancient Secrets (5 Days).",
    location: "Darwin",
    price: "2326",
    discountedPrice: "2100",
    categoryName: "holiday",
  },
  {
    _id: uuid(),
    title: "Northern Territory Explorer",
    description: "You have a 11 days tour package taking you through Darwin, Australia and 8 other destinations in Australia.",
    location: "Darwin",
    price: "4858",
    discountedPrice: "4750",
    categoryName: "holiday",
  },
  {
    _id: uuid(),
    title: "Coral Coaster Tour",
    description: "You have a 6 days tour package taking you through Perth, Australia and 9 other destinations in Australia.",
    location: "Perth",
    price: "1255",
    discountedPrice: "1200",
    categoryName: "holiday",
  },
  {
    _id: uuid(),
    title: "Uluru & Kings Canyon Adventure",
    description: "You have a 4 days tour package taking you through Yulara, Australia and 2 other destinations in Australia.",
    location: "Yulara",
    price: "1595",
    discountedPrice: "1530",
    categoryName: "holiday",
  },
  {
    _id: uuid(),
    title: "Tassie's East Coast Highlights",
    description: "You have a 5 days tour package taking you through Launceston, Australia and 3 other destinations in Australia.",
    location: "Launceston",
    price: "1977",
    discountedPrice: "1977",
    categoryName: "holiday",
  },
  {
    _id: uuid(),
    title: "Sweet Escape",
    description: "Treat the family an extraordinary resort experience. Spend the afternoon by our expansive infinity pool with its panoramic views.",
    location: "Perth",
    price: "989",
    discountedPrice: "970",
    categoryName: "rooms",
  },
  {
    _id: uuid(),
    title: "Love Always",
    description: "Float away in a spacious, superbly appointed suite with personalised Frette 1860 bathrobes and chilled Champagne to toast the moment.",
    location: "Perth",
    price: "1749",
    discountedPrice: "1710",
    categoryName: "rooms",
  },
  {
    _id: uuid(),
    title: "Your Sanctuary",
    description: "A journey of pure escapism awaits.",
    location: "Perth",
    price: "1109",
    discountedPrice: "1080",
    categoryName: "rooms",
  },
  {
    _id: uuid(),
    title: "Stay A While",
    description: "Three nights in an elegant, open plan Deluxe King room and daily buffet breakfast, allows you all the time in the world to do whatever you desire.",
    location: "Perth",
    price: "2967",
    discountedPrice: "2932",
    categoryName: "rooms",
  },
  {
    _id: uuid(),
    title: "Live. Love. Metropol.",
    description: "Take in the spectacular views from the comfort of your upgraded guest room and enjoy a bottle of sparkling wine.",
    location: "Perth",
    price: "898",
    discountedPrice: "856",
    categoryName: "rooms",
  },
];
