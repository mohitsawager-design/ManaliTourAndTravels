import { FaMapMarkerAlt } from "react-icons/fa";
import manali from "../public/images/manali.jpg";
import kasol from "../public/images/malana.jpg";
import shimla from "../public/images/shimla.jpg";
import solang from "../public/images/solang.jpg";
import spiti from "../public/images/spiti.jpg";
import dharamshala from "../public/images/dharmshala.jpg";
const destinations = [
  {
    id: 1,
    name: "Manali",
    image: manali,
  },
  {
    id: 2,
    name: "Shimla",
    image: shimla,
  },
  {
    id: 3,
    name: "Kasol",
    image: kasol,
  },
  {
    id: 4,
    name: "Spiti Valley",
    image: spiti,
  },
  {
    id: 5,
    name: "Dharamshala",
    image: dharamshala,
  },
  {
    id: 6,
    name: "Solang Valley",
    image: solang,
  },
];

const PopularDestinations = () => {
  return (
    <section id="popularDestinations" className="bg-aliceblue py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Popular Destinations
          </span>
          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Explore Beautiful Places
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Visit the most loved destinations in Himachal Pradesh and create
            unforgettable memories.
          </p>
        </div>
        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="group relative h-80 overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-white">
                  <FaMapMarkerAlt className="text-red-400" />
                  <h3 className="text-3xl font-bold">{place.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
