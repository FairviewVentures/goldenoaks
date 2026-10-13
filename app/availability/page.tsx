import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Availability",
};

const listings =
  "https://fairviewventure.appfolio.com/listings?1724333299482&filters%5Bproperty_list%5D=Golden%20Oaks%20Apartments&theme_color=%23676767&filters%5Border_by%5D=bedrooms";

export default function Page() {
  return (
    <section className="mx-auto my-8 max-w-screen-xl px-4 md:px-16">
      <h1 className="heading">Availability</h1>
      <p className="mt-4">
        Current listings are shown below.{" "}
        <a href={listings} target="_blank" rel="noopener" className="underline">
          Open the listings in a new tab
        </a>
        .
      </p>
      <iframe
        src={listings}
        title="Available apartments at Golden Oaks Apartments"
        className="mt-6 h-[75vh] min-h-[600px] w-full border-0"
      ></iframe>
    </section>
  );
}
