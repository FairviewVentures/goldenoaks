import Link from "next/link";
import { address, email, footer, phoneNumber } from "@/config";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 px-4 py-8 md:flex-row md:gap-2 md:px-16">
      <p className="text-center md:text-left">
        {address}
        <br />
        {phoneNumber} | {email}
      </p>
      <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        {footer.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              target="_blank"
              referrerPolicy="no-referrer"
              className="underline hover:no-underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
