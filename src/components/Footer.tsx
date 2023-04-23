import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full gap-2">
        <Link href="https://www.instagram.com/goldenoaksliving/"></Link>
        <Link href="https://www.facebook.com/GoldenOaksSouthPasadena/"></Link>
        <Link href="https://www.yelp.com/biz/golden-oaks-apartments-south-pasadena"></Link>
        <Link href="mailto:goldenoak122@sbcglobal.net"></Link>
      </div>
    </footer>
  );
};

export default Footer;
