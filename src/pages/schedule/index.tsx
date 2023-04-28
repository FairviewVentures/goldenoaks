import { type NextPage } from "next";
import Head from "next/head";
import ScheduleForm from "~/components/ScheduleForm";

const Schedule: NextPage = () => (
  <>
    <Head>
      <title>Schedule - Golden Oaks Apartments</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page" lang="en">
      <div className="mx-auto my-4 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:flex-row">
        <div className="flex w-full flex-col gap-4">
          <h1 className="heading">Visit Golden Oaks</h1>
          <p className="font-serif text-base-content">
            Please complete the below form and we will contact you very shortly.
          </p>
          <p className="font-serif text-base-content">
            1000 El Centro Street South Pasadena, CA 91030
          </p>
          <p className="heading2">(626) 799-4164</p>
          <p className="font-serif text-base-content">Monday-Friday: 9am-5pm</p>
          <p className="font-serif text-base-content">Saturday: 9am-2pm</p>
          <p className="font-serif text-base-content">
            Sunday: By appointment only.
          </p>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26426.682888407366!2d-118.17374660300719!3d34.1121632577215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c48ae837519f%3A0x5227e01b81d8c55f!2sS%20Pasadena%2C%20CA%2091030!5e0!3m2!1sen!2sus!4v1682203766286!5m2!1sen!2sus"
            className="h-full w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:flex-row">
        <ScheduleForm />
      </div>
    </main>
  </>
);

export default Schedule;
