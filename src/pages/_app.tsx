import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
