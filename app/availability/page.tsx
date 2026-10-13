"use client";

export default function Page() {
  return (
    <>
      <section className="relative mx-auto min-h-screen max-w-screen-xl">
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            src="https://fairviewventure.appfolio.com/listings?1724333299482&filters%5Bproperty_list%5D=Golden%20Oaks%20Apartments&theme_color=%23676767&filters%5Border_by%5D=bedrooms"
            width="100%"
            height="700"
          ></iframe>
        </div>
      </section>
    </>
  );
}
