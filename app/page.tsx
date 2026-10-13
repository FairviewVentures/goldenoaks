import Caro from "@/components/Caro";
import Floorplans from "@/components/Floorplans";
import Image from "next/image";
import { address, email, phoneNumber, photos } from "@/config";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen">
        <Image
          src={"/assets/landing.webp"}
          alt="Downtown Pasadena"
          loading="lazy"
          className="absolute left-0 top-0 z-0 aspect-auto h-full max-h-screen w-full object-cover brightness-[60%]"
          width={1600}
          height={900}
        />
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 px-8 text-white md:items-center md:px-4">
          <h1 className="h1 drop-shadow-xl">Luxury Living in South Pasadena</h1>
          <p className="text-xl drop-shadow-xl">
            The hub of a thriving community is at your fingertips
          </p>
          <a
            href={"#contact"}
            className="flex w-max items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-neutral-900 shadow drop-shadow-xl transition-colors hover:bg-neutral-100 disabled:opacity-50"
          >
            <span>Schedule a visit</span>
            <svg
              viewBox="0 0 17 9"
              className="aspect-square h-4 w-auto fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8536 4.85355C17.0488 4.65829 17.0488 4.34171 16.8536 4.14645L13.6716 0.964466C13.4763 0.769204 13.1597 0.769204 12.9645 0.964466C12.7692 1.15973 12.7692 1.47631 12.9645 1.67157L15.7929 4.5L12.9645 7.32843C12.7692 7.52369 12.7692 7.84027 12.9645 8.03553C13.1597 8.2308 13.4763 8.2308 13.6716 8.03553L16.8536 4.85355ZM0.5 5H16.5V4H0.5V5Z"
                fill="#101010"
              />
            </svg>
          </a>
        </div>
      </section>
      <section className="mx-auto flex max-w-screen-xl flex-col p-8 px-4 md:px-16">
        <div className="flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex flex-col gap-8">
            <h2 className="sr-only">About our community</h2>
            <p>
              Golden Oaks Apartments is perfectly situated in downtown South
              Pasadena. The Los Angeles night life is just a short train ride
              away, yet South Pasadena boasts a charming small-town feel and a
              top rated school district. Dining, popular shops, a famed library,
              and a bustling farmer&apos;s market are mere steps from the
              community, along with the Metro Gold Line, which can take you far
              and wide. The city of South Pasadena has an overall walk score of
              96.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="whitespace-nowrap">Walk Score</h3>
            <span className="text-4xl text-blue-900">96</span>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-screen-xl items-start justify-between gap-8 p-8 px-4 md:px-16">
        <div className="flex w-full flex-col gap-2">
          <h2 className="h2">1 Bedroom</h2>
          <p>Up to 735 sq. ft.</p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <h2 className="h2">2 Bedroom</h2>
          <p>Up to 906 sq. ft.</p>
        </div>
      </section>
      <section className="mx-auto my-16 max-w-screen-xl">
        <Caro photos={photos} />
      </section>
      <section className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-8">
        <h2 className="h2">Floorplans</h2>
        <div className="w-full">
          <Floorplans />
        </div>
      </section>
      <section className="mx-auto my-16 flex max-w-screen-xl flex-col gap-16 px-4 md:px-16">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="h2">Map</h2>
          <h3>1000 El Centro St, South Pasadena</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13600.393805279511!2d-118.1665478513214!3d34.11295585516861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c48a29012853%3A0xcf7e99b4e1311b26!2s1000%20El%20Centro%20St%2C%20S%20Pasadena%2C%20CA%2091030!5e0!3m2!1sen!2sus!4v1697213897815!5m2!1sen!2sus"
          width="600"
          height="450"
          title="Map of Golden Oaks Apartments"
          loading="lazy"
          className="w-full md:h-[640px]"
        ></iframe>
      </section>
      <section className="flex flex-col items-center justify-center gap-8 bg-blue-900 py-16 text-white">
        <div className="flex flex-col gap-4 md:items-center">
          <h2 className="text-3xl md:text-center md:text-4xl">Get in touch</h2>
        </div>
        <div
          id="contact"
          className="flex flex-col items-center gap-2 px-4 text-center text-lg"
        >
          <a href={`tel:${phoneNumber}`} className="underline">
            {phoneNumber}
          </a>
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          <p>{address}</p>
        </div>
      </section>
    </>
  );
}
