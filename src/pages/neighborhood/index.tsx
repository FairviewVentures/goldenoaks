import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LocalBusiness from "~/components/Neighborhood/LocalBusiness";

const localBusinesses = [
  {
    name: "bistro de la gare",
    description:
      "One of LA’s celebrated restaurants, Bistro de la Gare is known for its farm-to-table French-Italian cuisine. Fresh ingredients, organic food, & local produce have made this relaxing spot an OpenTable Diner's Choice Award Winner since 2017.",
    website: "https://bistrodelagare.com/",
  },
  {
    name: "south pasadena public library & senior center",
    description:
      "This historic library is a wonderful resource located just across the street, giving Golden Oaks residents a place to browse 340,000+ items and seniors the chance to socialize and enjoy community events.",
    website:
      "https://www.southpasadenaca.gov/government/departments/library/about-the-library",
  },
  {
    name: "kaldi coffee & tea",
    description:
      "Also just across the street from Golden Oaks is what everyone affectionately refers to as “Kaldi.” Exposed brick & plenty of outside seating make this coffee shop the perfect place to catch up with friends or with work.",
    website: "",
  },
  {
    name: "arroyo seco golf course",
    description:
      "Just down the street, Arroyo Seco is an 18 hole par 3 course that also offers a lighted driving range, practice area, and mini-golf - fun for the entire family!",
    website: "http://www.arroyosecogc.com/",
  },
  {
    name: "the norton simon museum",
    description:
      "Just over two miles away, and known internationally as one of the most remarkable private art collections ever assembled. Enjoy European art from the Renaissance to the 20th century, and both South & Southeast Asian art that spans 2,000 years. ",
    website: "https://www.nortonsimon.org/",
  },
  {
    name: "heirloom bakery & cafe",
    description:
      "Heirloom Bakery is a bruncher’s delight and offers a killer red velvet cupcake as well as their famous take on a Hostess cupcake! Fresh, delicious brunch and lunch in a casual atmosphere right around the corner from Golden Oaks. ",
    website: "",
  },
  {
    name: "radhika modern indian",
    description:
      "Around the corner from Golden Oaks is Radhika, which known for its delicious Indian food in a fun atmosphere. Complete with a wine lounge, the Radha Room, Radhika is easily as enjoyable when dining in or for takeout.",
    website: "https://radhikarestaurant.com/",
  },
  {
    name: "Mike & Anne’s Restaurant & Bar",
    description:
      "Another local culinary delight located just steps from Golden Oaks… Mike and Anne’s is a stylish spot for breakfast, lunch, dinner, drinks, or a lovely weekend brunch. Delicious American fare with plenty of indoor and outdoor seating as well as a low-key bar.",
    website: "https://www.mikeandannes.com/",
  },
];

const Neighborhood: NextPage = () => (
  <>
    <Head>
      <title>Neighborhood - Golden Oaks Apartments</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page">
      <Image
        src={"/neighborhood_banner.jpg"}
        width={1600}
        height={900}
        alt="neighborhood banner"
        className="w-full"
      />

      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:flex-row">
        <p className="font-serif text-lg text-base-content">
          Located in South Pasadena&apos;s contemporary Mission District, an
          all-American neighborhood with an array of dining, boutiques, & a
          library, residents of Golden Oaks South Pasadena are nestled in an
          idyllic part of a quiet and safe community known for it&apos;s charm.
          Tranquil and green, this area of South Pasadena comes to life every
          Thursday when the local farmers&apos; market sets up shop steps
          outside of Golden Oaks. Also just a few steps away is the Metro Gold
          Line, perfect for those commuting to Downtown LA or wanting to explore
          other parts of the greater Los Angeles area.
        </p>
      </div>
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:grid md:grid-cols-2">
        {localBusinesses.map((business, index) => (
          <div key={index}>
            <LocalBusiness {...business} />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Neighborhood;
