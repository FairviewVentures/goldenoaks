import { address, email, footer, phoneNumber } from "@/config";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 px-4 py-8 md:flex-row md:gap-2 md:px-16">
      <address className="text-center not-italic md:text-left">
        {address}
        <br />
        <a href={`tel:${phoneNumber}`} className="underline hover:no-underline">
          {phoneNumber}
        </a>{" "}
        |{" "}
        <a href={`mailto:${email}`} className="underline hover:no-underline">
          {email}
        </a>
      </address>
      <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        {footer.map((item, index) => (
          <li key={index}>
            {item.url.startsWith("mailto:") ? (
              <a href={item.url} className="underline hover:no-underline">
                {item.name}
              </a>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {item.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
