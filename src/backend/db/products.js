import { v4 as uuid } from "uuid";
import { diningImages, holidayImages, roomImages, spaImages } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
// export const products2 = [[
//   {
//       _id: "c484f708-9e3c-41f7-a60d-a7f5ac457a81",
//       "title": "Atrium Buffet",
//       "description": "Whether it's a hearty breakfast to start your day, a sumptuous long lunch or an indulgent dinner, Atrium has a generous and delicious buffet dining experience for every outing.",
//       "img": "/static/media/atriumBuffet.9094721d60aeb24aa29a.jpeg",
//       "price": 850,
//       "discountedPrice": 800,
//       "categoryName": "dining",
//       "starRating": 4,
//       "itemQty": 1,
//       "id": "1"
//   },
//   {
//       _id: "5e76b7c2-7d3a-4195-a78f-2da35dbf0cf1",
//       "title": "Camaje Bistro",
//       "description": "Customers are blindfolded for the duration of the meal. Without the ability to see, customers' sense of smell, texture, and sound truly come alive.",
//       "img": "/static/media/camajeBistro.bda0f5b455ffc06ac6ef.jpeg",
//       "price": 575,
//       "discountedPrice": 500,
//       "categoryName": "dining",
//       "starRating": 3,
//       "itemQty": 1,
//       "id": "2"
//   },
//   {
//       _id: "8d522888-995b-46ee-a262-d2caa654a34a",
//       "title": "Degustation",
//       "description": "This is a very intimate dining experience in which the chefs cook directly in front of you at an open kitchen.",
//       "img": "/static/media/degustations.42321226677c0cd5cab0.jpeg",
//       "price": 410,
//       "discountedPrice": 370,
//       "categoryName": "dining",
//       "starRating": 2,
//       "itemQty": 1,
//       "id": "3"
//   },
//   {
//       _id: "a0d564e9-91fc-401d-b7e5-cee91d6e56a3",
//       "title": "Jekyll and Hyde Club",
//       "description": "This spooky restaurant features eccentric explorers and mad scientists that run about while you enjoy one of the weirdest dining experiences you will probably ever have.",
//       "img": "/static/media/jekyllAndHydeClub.ae78686d77ea99a52c96.jpeg",
//       "price": 635,
//       "discountedPrice": 590,
//       "categoryName": "dining",
//       "starRating": 1,
//       "itemQty": 1,
//       "id": "4"
//   },
//   {
//       _id: "99520b33-b81d-4a62-9b57-cdef78a947cd",
//       "title": "Dominique Ansel Kitchen",
//       "description": "The most unique part of Dominique Ansel Kitchen is their ultra-exclusive dessert-tasting experience called Unlimited Possibilities, or UP for short.",
//       "img": "/static/media/dominiqueAnselKitchen.0341198f2f46ee1d730f.jpg",
//       "price": 380,
//       "discountedPrice": 350,
//       "categoryName": "dining",
//       "starRating": 5,
//       "itemQty": 1,
//       "id": "5"
//   },
//   {
//       _id: "e1b405a8-6d37-4f66-ae8a-efee6e31d6ad",
//       "title": "The Caviar Essential Facial",
//       "description": "A thorough eye and face massage will leave your face lifted and firmer than before, while your arms are treated to a caviar-infused treatment.",
//       "location": "Sydney",
//       "img": "/static/media/theCaviarEssentialFacial.2b52d06da18c54d6e093.jpeg",
//       "price": 900,
//       "discountedPrice": 865,
//       "categoryName": "spa",
//       "starRating": 5,
//       "itemQty": 1,
//       "id": "6"
//   },
//   {
//       _id: "9a0e3b0c-97e9-40d9-9dfe-8c0da676e8f0",
//       "title": "Spirit Of Sound",
//       "description": "Exclusive to Gwinganna Lifestyle Retreat, it uses a fusion of massage techniques, including Kahuna bodywork and heated Basalt stones.",
//       "location": "Gold Coast",
//       "img": "/static/media/spiritOfSound.303c8f7896b2f26630b7.jpeg",
//       "price": 1155,
//       "discountedPrice": 1050,
//       "categoryName": "spa",
//       "starRating": 4,
//       "itemQty": 1,
//       "id": "7"
//   },
//   {
//       _id: "569c65bd-1116-4ef3-9ef6-49c6b930c924",
//       "title": "Cellular Hydrating Facial",
//       "description": "Along with a deep cleanse, exfoliation and hydration, the treatment includes a surprisingly soothing ice facial massage.",
//       "location": "Melbourne",
//       "img": "/static/media/cellularHydratingFacial.56eed8a346d5a072e63e.jpeg",
//       "price": 400,
//       "discountedPrice": 380,
//       "categoryName": "spa",
//       "starRating": 3,
//       "itemQty": 1,
//       "id": "8"
//   },
//   {
//       _id: "ab3f2532-ce5d-44e1-9479-e92296a9cc06",
//       "title": "Signature Himalayan Massage",
//       "description": "The Himalayan Hot Stone Massage, is billed as a rebalance for your body and mind, harnessing the power of heated natural salt stone crystals.",
//       "location": "Sydney",
//       "img": "/static/media/signatureHimalayanMassage.b0307433bf50888ab20a.jpeg",
//       "price": 290,
//       "discountedPrice": 290,
//       "categoryName": "spa",
//       "starRating": 2,
//       "itemQty": 1,
//       "id": "9"
//   },
//   {
//       _id: "7dd21e6e-b5dc-4871-9f75-270381f3ac1b",
//       "title": "Whitsunday Escape",
//       "description": "Capture the essence of the Whitsundays with a signature Whitsunday Escape treatment at one of the reef's most exclusive resorts, qualia.",
//       "location": "Great Barrier Reef",
//       "img": "/static/media/whitSundayEscape.fb75bfb7f2abda703d09.jpg",
//       "price": 1355,
//       "discountedPrice": 1300,
//       "categoryName": "spa",
//       "starRating": 1,
//       "itemQty": 1,
//       "id": "10"
//   },
//   {
//       _id: "aa819b7e-79fd-4b7b-8e8c-7b6ff78e0a74",
//       "title": "Kakadu's Ancient Secrets",
//       "description": "Start and end in Darwin! With the Active Adventure tour Kakadu's Ancient Secrets (5 Days).",
//       "location": "Darwin",
//       "img": "/static/media/kakaduAncientSecrets.e5c39ee247e60de4b5e2.jpeg",
//       "price": 2326,
//       "discountedPrice": 2100,
//       "categoryName": "holiday",
//       "starRating": 5,
//       "itemQty": 1,
//       "id": "11"
//   },
//   {
//       _id: "0d2eff47-7369-4924-a20d-3f056b379874",
//       "title": "Northern Territory Explorer",
//       "description": "You have a 11 days tour package taking you through Darwin, Australia and 8 other destinations in Australia.",
//       "location": "Darwin",
//       "img": "/static/media/northernTerritoryExplorer.5f7ebac316671ddb3ed1.jpeg",
//       "price": 4858,
//       "discountedPrice": 4750,
//       "categoryName": "holiday",
//       "starRating": 4,
//       "itemQty": 1,
//       "id": "12"
//   },
//   {
//       _id: "c270498e-c9ad-4047-acfa-0b5efaa10fff",
//       "title": "Coral Coaster Tour",
//       "description": "You have a 6 days tour package taking you through Perth, Australia and 9 other destinations in Australia.",
//       "location": "Perth",
//       "img": "/static/media/coralCoasterTour.111740653eb19641402d.jpeg",
//       "price": 1255,
//       "discountedPrice": 1200,
//       "categoryName": "holiday",
//       "starRating": 3,
//       "itemQty": 1,
//       "id": "13"
//   },
//   {
//       _id: "faaa5b5e-2fdd-4928-8269-449e7515941b",
//       "title": "Uluru & Kings Canyon Adventure",
//       "description": "You have a 4 days tour package taking you through Yulara, Australia and 2 other destinations in Australia.",
//       "location": "Yulara",
//       "img": "/static/media/uluruAndKingCanyon.89f1be39c6344ebebe58.jpeg",
//       "price": 1595,
//       "discountedPrice": 1530,
//       "categoryName": "holiday",
//       "starRating": 2,
//       "itemQty": 1,
//       "id": "14"
//   },
//   {
//       _id: "6de2b488-4be8-42c0-bf7a-8bb8568acb8d",
//       "title": "Tassie's East Coast Highlights",
//       "description": "You have a 5 days tour package taking you through Launceston, Australia and 3 other destinations in Australia.",
//       "location": "Launceston",
//       "img": "/static/media/tassieEastCoastHighlights.5d40feac506bc54f6d11.jpeg",
//       "price": 1977,
//       "discountedPrice": 1977,
//       "categoryName": "holiday",
//       "starRating": 1,
//       "itemQty": 1,
//       "id": "15"
//   },
//   {
//       _id: "4cc0977b-c9ef-4811-a784-3cd83dc7b33a",
//       "title": "Sweet Escape",
//       "description": "Treat the family an extraordinary resort experience. Spend the afternoon by our expansive infinity pool with its panoramic views.",
//       "location": "Perth",
//       "img": "/static/media/sweetEscape.f55a4388b5a4782c789e.jpg",
//       "price": 989,
//       "discountedPrice": 970,
//       "categoryName": "rooms",
//       "starRating": 3,
//       "itemQty": 1,
//       "id": "16"
//   },
//   {
//       _id: "93f67092-445b-406c-b993-8d1911fa256a",
//       "title": "Love Always",
//       "description": "Float away in a spacious, superbly appointed suite with personalised Frette 1860 bathrobes and chilled Champagne to toast the moment.",
//       "location": "Perth",
//       "img": "/static/media/loveAlways.e521e725858d5bc2bf93.jpg",
//       "price": 1749,
//       "discountedPrice": 1710,
//       "categoryName": "rooms",
//       "starRating": 4,
//       "itemQty": 1,
//       "id": "17"
//   },
//   {
//       _id: "2f77c32c-8cb7-4e7a-a2b2-bd9e5a4a957a",
//       "title": "Your Sanctuary",
//       "description": "A journey of pure escapism awaits.",
//       "location": "Perth",
//       "img": "/static/media/yourSanctuary.fbf2ef6f66e41748ac75.jpg",
//       "price": 1109,
//       "discountedPrice": 1080,
//       "categoryName": "rooms",
//       "starRating": 4,
//       "itemQty": 1,
//       "id": "18"
//   },
//   {
//       _id: "640ada46-bd58-4b22-a5f9-a2eddbd43896",
//       "title": "Stay A While",
//       "description": "Three nights in an elegant, open plan Deluxe King room and daily buffet breakfast, allows you all the time in the world to do whatever you desire.",
//       "location": "Perth",
//       "img": "/static/media/stayAWhile.b7d3e89b58aceee04a3c.jpg",
//       "price": 2967,
//       "discountedPrice": 2932,
//       "categoryName": "rooms",
//       "starRating": 5,
//       "itemQty": 1,
//       "id": "19"
//   },
//   {
//       _id: "9326280d-331e-4ff3-8bd2-42a5e6b0fea3",
//       "title": "Live. Love. Metropol.",
//       "description": "Take in the spectacular views from the comfort of your upgraded guest room and enjoy a bottle of sparkling wine.",
//       "location": "Perth",
//       "img": "/static/media/liveLoveMetropol.a0efe13c5d4929faacb6.jpg",
//       "price": 898,
//       "discountedPrice": 856,
//       "categoryName": "rooms",
//       "starRating": 2,
//       "itemQty": 1,
//       "id": "20"
//   }
// ]]
export const products = [
  {
    _id: uuid(),
    title: "Atrium Buffet",
    description: "Whether it's a hearty breakfast to start your day, a sumptuous long lunch or an indulgent dinner, Atrium has a generous and delicious buffet dining experience for every outing.",
    img: diningImages.atriumBuffet,
    price: 850,
    discountedPrice: 800,
    categoryName: "dining",
    starRating: 4,
    itemQty: 1
    
  },
  {
    _id: uuid(),
    title: "Camaje Bistro",
    description: "Customers are blindfolded for the duration of the meal. Without the ability to see, customers' sense of smell, texture, and sound truly come alive.",
    img: diningImages.camajeBistro,
    price: 575,
    discountedPrice: 500,
    categoryName: "dining",
    starRating: 3,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Degustation",
    description: "This is a very intimate dining experience in which the chefs cook directly in front of you at an open kitchen.",
    img: diningImages.degustations,
    price: 410,
    discountedPrice: 370,
    categoryName: "dining",
    starRating: 2,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Jekyll and Hyde Club",
    description: "This spooky restaurant features eccentric explorers and mad scientists that run about while you enjoy one of the weirdest dining experiences you will probably ever have.",
    img: diningImages.jekyllAndHydeClub,
    price: 635,
    discountedPrice: 590,
    categoryName: "dining",
    starRating: 1,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Dominique Ansel Kitchen",
    description: "The most unique part of Dominique Ansel Kitchen is their ultra-exclusive dessert-tasting experience called Unlimited Possibilities, or UP for short.",
    img: diningImages.dominiqueAnselKitchen,
    price: 380,
    discountedPrice: 350,
    categoryName: "dining",
    starRating: 5,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "The Caviar Essential Facial",
    description: "A thorough eye and face massage will leave your face lifted and firmer than before, while your arms are treated to a caviar-infused treatment.",
    location: "Sydney",
    img: spaImages.theCaviarEssentialFacial,
    price: 900,
    discountedPrice: 865,
    categoryName: "spa",
    starRating: 5,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Spirit Of Sound",
    description: "Exclusive to Gwinganna Lifestyle Retreat, it uses a fusion of massage techniques, including Kahuna bodywork and heated Basalt stones.",
    location: "Gold Coast",
    img: spaImages.spiritOfSound,
    price: 1155,
    discountedPrice: 1050,
    categoryName: "spa",
    starRating: 4,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Cellular Hydrating Facial",
    description: "Along with a deep cleanse, exfoliation and hydration, the treatment includes a surprisingly soothing ice facial massage.",
    location: "Melbourne",
    img: spaImages.cellularHydratingFacial,
    price: 400,
    discountedPrice: 380,
    categoryName: "spa",
    starRating: 3,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Signature Himalayan Massage",
    description: "The Himalayan Hot Stone Massage, is billed as a rebalance for your body and mind, harnessing the power of heated natural salt stone crystals.",
    location: "Sydney",
    img: spaImages.signatureHimalayanMassage,
    price: 290,
    discountedPrice: 290,
    categoryName: "spa",
    starRating: 2,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Whitsunday Escape",
    description: "Capture the essence of the Whitsundays with a signature Whitsunday Escape treatment at one of the reef's most exclusive resorts, qualia.",
    location: "Great Barrier Reef",
    img: spaImages.whitSundayEscape,
    price: 1355,
    discountedPrice: 1300,
    categoryName: "spa",
    starRating: 1,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Kakadu's Ancient Secrets",
    description: "Start and end in Darwin! With the Active Adventure tour Kakadu's Ancient Secrets (5 Days).",
    location: "Darwin",
    img: holidayImages.kakaduAncientSecrets,
    price: 2326,
    discountedPrice: 2100,
    categoryName: "holiday",
    starRating: 5,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Northern Territory Explorer",
    description: "You have a 11 days tour package taking you through Darwin, Australia and 8 other destinations in Australia.",
    location: "Darwin",
    img: holidayImages.northernTerritoryExplorer,
    price: 4858,
    discountedPrice: 4750,
    categoryName: "holiday",
    starRating: 4,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Coral Coaster Tour",
    description: "You have a 6 days tour package taking you through Perth, Australia and 9 other destinations in Australia.",
    location: "Perth",
    img: holidayImages.coralCoasterTour,
    price: 1255,
    discountedPrice: 1200,
    categoryName: "holiday",
    starRating: 3,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Uluru & Kings Canyon Adventure",
    description: "You have a 4 days tour package taking you through Yulara, Australia and 2 other destinations in Australia.",
    location: "Yulara",
    img: holidayImages.uluruAndKingCanyon,
    price: 1595,
    discountedPrice: 1530,
    categoryName: "holiday",
    starRating: 2,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Tassie's East Coast Highlights",
    description: "You have a 5 days tour package taking you through Launceston, Australia and 3 other destinations in Australia.",
    location: "Launceston",
    img: holidayImages.tassieEastCoastHighlights,
    price: 1977,
    discountedPrice: 1977,
    categoryName: "holiday",
    starRating: 1,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Sweet Escape",
    description: "Treat the family an extraordinary resort experience. Spend the afternoon by our expansive infinity pool with its panoramic views.",
    location: "Perth",
    img: roomImages.sweetEscape,
    price: 989,
    discountedPrice: 970,
    categoryName: "rooms",
    starRating: 3,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Love Always",
    description: "Float away in a spacious, superbly appointed suite with personalised Frette 1860 bathrobes and chilled Champagne to toast the moment.",
    location: "Perth",
    img: roomImages.loveAlways,
    price: 1749,
    discountedPrice: 1710,
    categoryName: "rooms",
    starRating: 4,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Your Sanctuary",
    description: "A journey of pure escapism awaits.",
    location: "Perth",
    img: roomImages.yourSanctuary,
    price: 1109,
    discountedPrice: 1080,
    categoryName: "rooms",
    starRating: 4,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Stay A While",
    description: "Three nights in an elegant, open plan Deluxe King room and daily buffet breakfast, allows you all the time in the world to do whatever you desire.",
    location: "Perth",
    img: roomImages.stayAWhile,
    price: 2967,
    discountedPrice: 2932,
    categoryName: "rooms",
    starRating: 5,
    itemQty: 1
  },
  {
    _id: uuid(),
    title: "Live. Love. Metropol.",
    description: "Take in the spectacular views from the comfort of your upgraded guest room and enjoy a bottle of sparkling wine.",
    location: "Perth",
    img: roomImages.liveLoveMetropol,
    price: 898,
    discountedPrice: 856,
    categoryName: "rooms",
    starRating: 2,
    itemQty: 1
  },
];
