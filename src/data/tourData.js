import manali from "../public/images/manali.jpg";
import kasol from "../public/images/malana.jpg";
import solang from "../public/images/solang.jpg";
import spiti from "../public/images/spiti.jpg";
import leh from "../public/images/shimla.jpg";

export const tours = [
  // =========================================================
  // 1. MANALI ADVENTURE TOUR
  // =========================================================
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
      "Explore Manali's famous local attractions, enjoy adventure activities in Solang Valley and discover Kullu & Naggar. Atal Tunnel, Sissu, Koksar, Gramphu and Rohtang Pass can be added depending on weather conditions.",

    stay: "Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Manali Local Sightseeing",

        description:
          "After breakfast, visit Hadimba Temple, Mall Road, Van Vihar, Buddhist Monastery and Vashishth Temple.",

        places: [
          "Hadimba Temple",
          "Mall Road",
          "Van Vihar",
          "Buddhist Monastery",
          "Vashishth Temple",
        ],
      },

      {
        day: "02",
        title: "Solang Valley Adventure",

        description:
          "Enjoy Solang Valley and adventure activities including zipline, rocket jump, horse ride, yak ride and ATV bike ride. Snow activities depend on the weather.",

        places: [
          "Solang Valley",
          "Zipline",
          "Rocket Jump",
          "Horse Ride",
          "Yak Ride",
          "ATV Bike Ride",
        ],
      },

      {
        day: "03",
        title: "Kullu & Naggar Tour",

        description:
          "Explore Kullu and Naggar with paragliding, river rafting, shawl factory, dry fruit shopping, Vaishno Temple, waterfall and Naggar Castle.",

        places: [
          "Kullu",
          "Naggar",
          "Paragliding",
          "River Rafting",
          "Shawl Factory",
          "Dry Fruit",
          "Vaishno Temple",
          "Waterfall",
          "Naggar Castle",
        ],
      },

      {
        day: "04",
        title: "Departure",

        description:
          "Check out from the hotel and continue your return journey.",

        places: ["Manali"],
      },
    ],

    optionalPlaces: [
      "Atal Tunnel",
      "Sissu",
      "Koksar",
      "Gramphu",
      "Rohtang Pass",
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Sightseeing tours",
      "Experienced driver",
      "Local sightseeing",
      "Travel assistance",
    ],
  },

  // =========================================================
  // 2. SOLANG VALLEY ADVENTURE
  // =========================================================
  {
    id: 2,
    slug: "solang-valley-adventure",

    image: solang,

    title: "Solang Valley Adventure",
    location: "Solang Valley, Himachal Pradesh",

    rating: 4.9,
    reviews: 100,

    price: "₹4,999",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "02 Nights / 03 Days",

    description:
      "Enjoy an adventure-filled Manali getaway with Solang Valley, thrilling activities and beautiful Himalayan views. Snow activities depend on the weather.",

    stay: "Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Arrival in Manali",

        description:
          "Arrive in Manali, check in to your hotel and enjoy a relaxing evening around Mall Road.",

        places: ["Manali", "Mall Road"],
      },

      {
        day: "02",
        title: "Solang Valley Adventure",

        description:
          "Spend the day in Solang Valley enjoying zipline, rocket jump, horse ride, yak ride and ATV bike ride. Seasonal snow activities are subject to weather conditions.",

        places: [
          "Solang Valley",
          "Zipline",
          "Rocket Jump",
          "Horse Ride",
          "Yak Ride",
          "ATV Bike Ride",
          "Snow Activities",
        ],
      },

      {
        day: "03",
        title: "Departure",

        description:
          "Enjoy breakfast and check out from the hotel for your return journey.",

        places: ["Manali", "Solang Valley"],
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Solang Valley sightseeing",
      "Experienced driver",
      "Travel assistance",
    ],
  },

  // =========================================================
  // 3. ROHTANG PASS ADVENTURE
  // =========================================================
  {
    id: 3,
    slug: "rohtang-pass-adventure",

    image: manali,

    title: "Rohtang Pass Adventure",
    location: "Rohtang Pass, Himachal Pradesh",

    rating: 4.9,
    reviews: 95,

    price: "₹5,999",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "02 Nights / 03 Days",

    description:
      "Experience the spectacular mountain landscapes around Rohtang Pass with Solang Valley, Atal Tunnel and Sissu. Sightseeing is subject to weather and road conditions.",

    stay: "Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Arrival in Manali",

        description:
          "Arrive in Manali, check in to your hotel and spend the evening exploring Mall Road.",

        places: ["Manali", "Mall Road"],
      },

      {
        day: "02",
        title: "Rohtang Pass Adventure",

        description:
          "Explore the high mountain route towards Rohtang Pass with scenic stops at Atal Tunnel and Sissu, depending on weather and road conditions.",

        places: ["Rohtang Pass", "Atal Tunnel", "Sissu", "Koksar", "Gramphu"],
      },

      {
        day: "03",
        title: "Departure",

        description:
          "Enjoy breakfast and check out from the hotel for your return journey.",

        places: ["Manali"],
      },
    ],

    optionalPlaces: ["Atal Tunnel", "Sissu", "Koksar", "Gramphu"],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Rohtang sightseeing",
      "Experienced driver",
      "Travel assistance",
    ],
  },

  // =========================================================
  // 4. KASOL & MANIKARAN TOUR
  // =========================================================
  {
    id: 4,
    slug: "kasol-manikaran",

    image: kasol,

    title: "Kasol & Manikaran Tour",
    location: "Kasol, Himachal Pradesh",

    rating: 4.8,
    reviews: 95,

    price: "₹6,800",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "03 Nights / 04 Days",

    description:
      "Explore Kasol and Manikaran with beautiful Parvati Valley views, Kasol Market, Nature Park, adventure activities, Vaishno Temple, Manikaran Gurudwara, Shiv Temple and natural hot springs.",

    stay: "Hotel / Camp Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Kasol Sightseeing",

        description:
          "Explore Kasol Market, Nature Park and enjoy the beautiful surroundings of the Parvati Valley.",

        places: ["Kasol Market", "Nature Park", "Parvati Valley"],
      },

      {
        day: "02",
        title: "Kasol Adventure",

        description:
          "Enjoy adventure activities including paragliding and river rafting, along with visits to a shawl factory, dry fruit shops and Vaishno Temple.",

        places: [
          "Paragliding",
          "River Rafting",
          "Shawl Factory",
          "Dry Fruit",
          "Vaishno Temple",
        ],
      },

      {
        day: "03",
        title: "Manikaran Sightseeing",

        description:
          "Visit the famous Manikaran Gurudwara, Shiv Temple and natural hot springs.",

        places: ["Manikaran Gurudwara", "Shiv Temple", "Hot Spring Water"],
      },

      {
        day: "04",
        title: "Departure",

        description: "Check out from the hotel and begin your return journey.",

        places: ["Kasol", "Manikaran", "Parvati Valley"],
      },
    ],

    inclusions: [
      "Hotel / camp accommodation",
      "Daily breakfast",
      "Private transportation",
      "Kasol sightseeing",
      "Manikaran visit",
      "Experienced driver",
      "Travel assistance",
    ],
  },

  // =========================================================
  // 5. SPITI VALLEY ADVENTURE
  // =========================================================
  {
    id: 5,
    slug: "spiti-valley-adventure",

    image: spiti,

    title: "Spiti Valley Adventure",
    location: "Spiti Valley, Himachal Pradesh",

    rating: 4.9,
    reviews: 75,

    price: "₹12,500",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "06 Nights / 07 Days",

    description:
      "Embark on an unforgettable Himalayan road trip through Spiti Valley, ancient monasteries, high mountain passes, remote villages and breathtaking landscapes.",

    stay: "Hotel / Homestay Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Shimla",

        description:
          "Begin your Himalayan adventure from Chandigarh and drive towards Shimla.",

        places: ["Chandigarh", "Shimla", "The Ridge"],
      },

      {
        day: "02",
        title: "Shimla — Narkanda — Kalpa",

        description:
          "Drive through beautiful Himalayan landscapes towards Kalpa, enjoying mountain views and traditional villages along the way.",

        places: ["Narkanda", "Rampur", "Kalpa"],
      },

      {
        day: "03",
        title: "Kalpa — Nako — Tabo",

        description:
          "Continue towards Spiti Valley and explore Nako and Tabo with its ancient monastery.",

        places: ["Nako", "Tabo", "Tabo Monastery"],
      },

      {
        day: "04",
        title: "Tabo — Dhankar — Kaza",

        description:
          "Explore Dhankar Monastery and Lake before continuing towards Kaza.",

        places: ["Dhankar", "Dhankar Lake", "Kaza"],
      },

      {
        day: "05",
        title: "Kaza — Key — Kibber",

        description:
          "Explore the spectacular villages around Kaza including Key Monastery, Kibber and Chicham Bridge.",

        places: ["Key Monastery", "Kibber", "Chicham Bridge"],
      },

      {
        day: "06",
        title: "Kaza — Chandratal",

        description:
          "Travel towards Chandratal through the dramatic landscapes of the high Himalayas.",

        places: ["Chandratal", "Kunzum Pass", "Mountain Valleys"],
      },

      {
        day: "07",
        title: "Chandratal — Manali",

        description:
          "Complete your Himalayan adventure with a scenic drive towards Manali.",

        places: ["Chandratal", "Rohtang Region", "Manali"],
      },
    ],

    inclusions: [
      "Hotel / homestay accommodation",
      "Daily breakfast",
      "Private transportation",
      "Spiti Valley sightseeing",
      "Monastery visits",
      "Experienced mountain driver",
      "Pickup and drop",
      "Travel assistance",
    ],
  },

  // =========================================================
  // 6. LEH LADAKH EXPLORER
  // =========================================================
  {
    id: 6,
    slug: "leh-ladakh-explorer",

    image: leh,

    title: "Leh Ladakh Explorer",
    location: "Leh, Ladakh",

    rating: 4.9,
    reviews: 85,

    price: "₹18,999",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "06 Nights / 07 Days",

    description:
      "Experience the spectacular landscapes of Ladakh with Leh, Nubra Valley, Pangong Lake, Khardung La and beautiful Himalayan monasteries.",

    stay: "Hotel / Camp Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Arrival in Leh",

        description:
          "Arrive in Leh, check in to your hotel and relax while enjoying the beautiful Himalayan surroundings.",

        places: ["Leh", "Leh Market"],
      },

      {
        day: "02",
        title: "Leh Local Sightseeing",

        description:
          "Explore the famous attractions around Leh including monasteries, palaces and beautiful viewpoints.",

        places: ["Shanti Stupa", "Leh Palace", "Thiksey Monastery"],
      },

      {
        day: "03",
        title: "Leh — Nubra Valley",

        description:
          "Travel towards Nubra Valley through the spectacular mountain route and enjoy the unique Himalayan landscapes.",

        places: ["Khardung La", "Nubra Valley", "Diskit Monastery"],
      },

      {
        day: "04",
        title: "Nubra Valley",

        description:
          "Explore Nubra Valley and enjoy the beautiful mountain landscapes and local attractions.",

        places: ["Diskit", "Hunder", "Nubra Valley"],
      },

      {
        day: "05",
        title: "Nubra — Pangong Lake",

        description:
          "Continue your journey towards the breathtaking Pangong Lake surrounded by spectacular Himalayan landscapes.",

        places: ["Pangong Lake", "Mountain Views"],
      },

      {
        day: "06",
        title: "Pangong — Leh",

        description:
          "Enjoy the scenic journey back towards Leh through the beautiful mountain roads.",

        places: ["Pangong Lake", "Chang La", "Leh"],
      },

      {
        day: "07",
        title: "Departure",

        description:
          "Enjoy breakfast and check out from the hotel for your return journey.",

        places: ["Leh"],
      },
    ],

    inclusions: [
      "Hotel / camp accommodation",
      "Daily breakfast",
      "Private transportation",
      "Leh sightseeing",
      "Nubra Valley excursion",
      "Pangong Lake excursion",
      "Experienced mountain driver",
      "Travel assistance",
    ],
  },
];
