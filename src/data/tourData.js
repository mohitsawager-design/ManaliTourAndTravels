import manali from "../public/images/manali.jpg";
import kasol from "../public/images/malana.jpg";
import shimla from "../public/images/shimla.jpg";

export const tours = [
  {
    id: 1,
    slug: "manali-adventure",

    image: manali,

    title: "Manali Adventure Tour",
    location: "Manali, Himachal Pradesh",

    rating: 4.9,
    reviews: 120,

    price: "₹5,500",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "03 Nights / 04 Days",

    description:
      "Experience the breathtaking beauty of Manali with snow-covered mountains, peaceful valleys, adventure activities and beautiful local attractions.",

    stay: "Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Manali",
        description:
          "On arrival at Chandigarh Airport / Railway Station, meet our representative and drive towards Manali. En-route enjoy sightseeing at Sunder Nagar Lake, Pandoh Dam, Hanogi Temple and Vaishno Devi Temple.",
        places: ["Sunder Nagar", "Pandoh Dam", "Hanogi Temple"],
      },
      {
        day: "02",
        title: "Manali — Local Sightseeing",
        description:
          "After breakfast, explore the beautiful attractions of Manali including Hadimba Temple, Club House, Tibetan Monastery, Van Vihar, Manu Temple and Vashisht. Evening visit to the famous Mall Road.",
        places: ["Hadimba Temple", "Mall Road", "Vashisht"],
      },
      {
        day: "03",
        title: "Manali — Solang Valley",
        description:
          "After breakfast proceed for a full day sightseeing excursion to Solang Valley, Nehru Kund, Kothi Village and Him Valley. Enjoy optional adventure activities depending on the season.",
        places: ["Solang Valley", "Cable Car", "Snow Activities"],
      },
      {
        day: "04",
        title: "Manali — Chandigarh",
        description:
          "After breakfast check out from the hotel. On the way, visit Kullu Market, Kullu Valley, River Rafting and Shawl Factory before continuing towards Chandigarh.",
        places: ["Kullu Market", "River Rafting"],
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Sightseeing tours",
      "Experienced driver",
      "Airport / railway pickup",
      "Local sightseeing",
      "Travel assistance",
    ],
  },

  {
    id: 2,
    slug: "kasol-tosh",

    image: kasol,

    title: "Kasol & Tosh Tour",
    location: "Kasol, Himachal Pradesh",

    rating: 4.8,
    reviews: 95,

    price: "₹6,800",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "04 Nights / 05 Days",

    description:
      "Explore the peaceful Parvati Valley with the charming villages of Kasol and Tosh, beautiful mountain views, riverside cafés and unforgettable Himalayan experiences.",

    stay: "Hotel / Camp Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Kasol",
        description:
          "Arrive at Chandigarh and begin your scenic journey towards Kasol through the beautiful Himalayan roads. Check in at your accommodation and enjoy a relaxing evening.",
        places: ["Chandigarh", "Parvati Valley", "Kasol"],
      },
      {
        day: "02",
        title: "Kasol Local Sightseeing",
        description:
          "After breakfast, explore Kasol village, the Parvati River and nearby attractions. Spend your evening enjoying the peaceful riverside atmosphere.",
        places: ["Kasol Market", "Parvati River", "Chalal Village"],
      },
      {
        day: "03",
        title: "Kasol — Tosh",
        description:
          "Travel towards Tosh village and enjoy spectacular Himalayan scenery. Explore the village and surrounding mountain trails.",
        places: ["Tosh Village", "Tosh Valley", "Mountain Views"],
      },
      {
        day: "04",
        title: "Tosh — Manikaran",
        description:
          "Visit the famous Manikaran Sahib and hot springs before returning towards Kasol.",
        places: ["Manikaran Sahib", "Hot Springs", "Parvati Valley"],
      },
      {
        day: "05",
        title: "Kasol — Chandigarh",
        description:
          "After breakfast, check out and begin your return journey towards Chandigarh with beautiful memories of the Parvati Valley.",
        places: ["Kasol", "Kullu Valley", "Chandigarh"],
      },
    ],

    inclusions: [
      "Hotel / camp accommodation",
      "Daily breakfast",
      "Private transportation",
      "Kasol sightseeing",
      "Tosh excursion",
      "Manikaran visit",
      "Experienced driver",
      "Travel assistance",
    ],
  },

  {
    id: 3,
    slug: "shimla-escape",

    image: shimla,

    title: "Shimla Escape",
    location: "Shimla, Himachal Pradesh",

    rating: 5.0,
    reviews: 85,

    price: "₹7,200",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "04 Nights / 04 Days",

    description:
      "Discover the colonial charm of Shimla with beautiful mountain views, peaceful valleys, famous landmarks and unforgettable Himalayan experiences.",

    stay: "Premium Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Shimla",
        description:
          "Arrive at Chandigarh and drive towards Shimla. Enjoy the scenic mountain roads before checking into your hotel.",
        places: ["Chandigarh", "Shimla", "Mall Road"],
      },
      {
        day: "02",
        title: "Shimla Local Sightseeing",
        description:
          "Explore the famous attractions of Shimla including the Ridge, Mall Road, Christ Church and Jakhu Temple.",
        places: ["The Ridge", "Mall Road", "Jakhu Temple"],
      },
      {
        day: "03",
        title: "Kufri Excursion",
        description:
          "Enjoy a full day excursion to Kufri and nearby Himalayan attractions.",
        places: ["Kufri", "Green Valley", "Himalayan Nature Park"],
      },
      {
        day: "04",
        title: "Shimla — Chandigarh",
        description:
          "After breakfast, check out from the hotel and begin your return journey towards Chandigarh.",
        places: ["Shimla", "Kufri", "Chandigarh"],
      },
    ],

    inclusions: [
      "Premium hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Shimla sightseeing",
      "Kufri excursion",
      "Experienced driver",
      "Pickup and drop",
      "Travel assistance",
    ],
  },
];
