import manali from "../public/images/manali.jpg";
import kasol from "../public/images/malana.jpg";
import shimla from "../public/images/shimla.jpg";
import dharmshala from "../public/images/dharmshala.jpg";
import dalhousie from "../public/images/dalhousie.jpg";
import spiti from "../public/images/spiti.jpg";

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
  {
    id: 4,
    slug: "dharamshala-mcleodganj",

    image: dharmshala,

    title: "Dharamshala & McLeod Ganj Tour",
    location: "Dharamshala, Himachal Pradesh",

    rating: 4.9,
    reviews: 110,

    price: "₹6,500",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "03 Nights / 04 Days",

    description:
      "Discover the peaceful beauty of Dharamshala and McLeod Ganj with stunning Himalayan views, Tibetan culture, monasteries, waterfalls and beautiful mountain landscapes.",

    stay: "Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Dharamshala",
        description:
          "Arrive at Chandigarh and begin your scenic journey towards Dharamshala. Check into your hotel and spend the evening relaxing amidst the beautiful Dhauladhar mountains.",
        places: ["Dharamshala", "Dhauladhar Mountains", "Local Market"],
      },
      {
        day: "02",
        title: "Dharamshala — McLeod Ganj",
        description:
          "After breakfast explore McLeod Ganj and visit the famous Dalai Lama Temple, Tibetan Monastery and Bhagsu Waterfall.",
        places: ["McLeod Ganj", "Dalai Lama Temple", "Bhagsu Waterfall"],
      },
      {
        day: "03",
        title: "Dharamshala Local Sightseeing",
        description:
          "Explore the beautiful attractions around Dharamshala including Dharamshala Stadium, Kangra Art Museum and nearby viewpoints.",
        places: [
          "Dharamshala Stadium",
          "Kangra Art Museum",
          "Mountain Viewpoints",
        ],
      },
      {
        day: "04",
        title: "Dharamshala — Chandigarh",
        description:
          "After breakfast check out from the hotel and begin your return journey towards Chandigarh with beautiful memories of the Himalayas.",
        places: ["Dharamshala", "Kangra Valley", "Chandigarh"],
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Dharamshala sightseeing",
      "McLeod Ganj excursion",
      "Experienced driver",
      "Pickup and drop",
      "Travel assistance",
    ],
  },

  {
    id: 5,
    slug: "dalhousie-khajjiar",

    image: dalhousie,

    title: "Dalhousie & Khajjiar Tour",
    location: "Dalhousie, Himachal Pradesh",

    rating: 4.8,
    reviews: 90,

    price: "₹7,500",
    priceText: "per person",

    group: "Group Tour Minimum (4 Pax.)",
    travelers: "4+ People",
    duration: "04 Nights / 05 Days",

    description:
      "Experience the colonial charm of Dalhousie and the breathtaking beauty of Khajjiar, surrounded by dense forests, green meadows and spectacular Himalayan views.",

    stay: "Premium Hotel Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Dalhousie",
        description:
          "Depart from Chandigarh and drive towards the beautiful hill station of Dalhousie. Check into your hotel and relax.",
        places: ["Chandigarh", "Dalhousie", "Hill Views"],
      },
      {
        day: "02",
        title: "Dalhousie Local Sightseeing",
        description:
          "Explore the colonial architecture and famous attractions of Dalhousie including Gandhi Chowk, Subhash Baoli and St. John's Church.",
        places: ["Gandhi Chowk", "Subhash Baoli", "St. John's Church"],
      },
      {
        day: "03",
        title: "Khajjiar Excursion",
        description:
          "Enjoy a full-day excursion to Khajjiar, often known for its beautiful green meadows and spectacular Himalayan surroundings.",
        places: ["Khajjiar", "Khajji Nag Temple", "Himalayan Views"],
      },
      {
        day: "04",
        title: "Chamba Valley",
        description:
          "Explore the beautiful Chamba Valley and experience the local culture, temples and traditional Himalayan surroundings.",
        places: ["Chamba", "Chamba Temple", "Ravi River"],
      },
      {
        day: "05",
        title: "Dalhousie — Chandigarh",
        description:
          "After breakfast check out from the hotel and begin your return journey towards Chandigarh.",
        places: ["Dalhousie", "Kangra Valley", "Chandigarh"],
      },
    ],

    inclusions: [
      "Premium hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Dalhousie sightseeing",
      "Khajjiar excursion",
      "Chamba Valley visit",
      "Experienced driver",
      "Travel assistance",
    ],
  },

  {
    id: 6,
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
      "Embark on an unforgettable Himalayan road trip through the spectacular Spiti Valley, ancient monasteries, high mountain passes, remote villages and breathtaking landscapes.",

    stay: "Hotel / Homestay Included",
    meals: "Breakfast",

    itinerary: [
      {
        day: "01",
        title: "Chandigarh — Shimla",
        description:
          "Begin your Himalayan adventure from Chandigarh and drive towards Shimla. Check into your hotel and prepare for the journey ahead.",
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
          "Continue towards the cold desert landscape of Spiti Valley and visit the ancient villages and monasteries around Tabo.",
        places: ["Nako", "Tabo", "Tabo Monastery"],
      },
      {
        day: "04",
        title: "Tabo — Dhankar — Kaza",
        description:
          "Explore Dhankar Monastery and Lake before continuing towards Kaza, the heart of Spiti Valley.",
        places: ["Dhankar", "Dhankar Lake", "Kaza"],
      },
      {
        day: "05",
        title: "Kaza — Key — Kibber",
        description:
          "Explore the spectacular villages around Kaza including Key Monastery and Kibber with panoramic views of the Spiti Valley.",
        places: ["Key Monastery", "Kibber", "Chicham Bridge"],
      },
      {
        day: "06",
        title: "Kaza — Chandratal",
        description:
          "Travel towards the breathtaking Chandratal region and enjoy the dramatic landscapes of the high Himalayas.",
        places: ["Chandratal", "Kunzum Pass", "Mountain Valleys"],
      },
      {
        day: "07",
        title: "Chandratal — Manali",
        description:
          "Complete your Himalayan adventure with a scenic drive towards Manali through the famous Rohtang region.",
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
];
