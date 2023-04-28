import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Accessibility: NextPage = () => (
  <>
    <Head>
      <title>Accessibility - Golden Oaks Apartments</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page" lang="en">
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:p-16">
        <h1 className="heading">Accessibility Statement</h1>
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-primary md:text-4xl">
            Commitment to Digital Accessibility
          </h2>
          <p className="font-serif text-base-content">
            Our mission at Golden Oaks is to make a more accessible web space
            for our team, our clients, and our visitors. One in four adults in
            the United States has a disability that impacts their ability to
            interact with the online world. At{" "}
            <Link href={"https://goldenoaks.biz/"} className="underline">
              GoldenOaks.biz
            </Link>
            , we strive to ensure that everything we create or add to our
            website is usable by people of all abilities.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-primary md:text-4xl">
            Accessibility on Golden Oaks
          </h2>
          <p className="font-serif text-base-content">
            We have structured our website to allow those of all abilities to
            easily and quickly find the information they need.
          </p>
          <h3 className="heading2">Ongoing Efforts to Ensure Accessibility</h3>
          <p className="font-serif text-base-content">
            Our site follows{" "}
            <Link href="https://www.w3.org/TR/WCAG20/" className="underline">
              Web Content Accessibility Guidelines (WCAG) version 2.1 Level AA
              Success Criteria (and where possible Level AAA)
            </Link>{" "}
            and the latest{" "}
            <Link href="https://www.access-board.gov/ict/">
              ICT Refresh (Section 508) guidelines
            </Link>{" "}
            as they apply to the web as our primary goal. These guidelines
            include internationally agreed-upon standards and ICT Refresh
            Compliance Criteria that cover a wide range of recommendations and
            best practices for making content more accessible and{" "}
            <Link href="https://www.ada.gov/">ADA Compliant</Link>. As new
            content and pages are created for our website. We apply these
            guidelines to all our designs, code, and content as new content and
            pages are created for our website. Testing of our website is
            performed by accessibility experts using industry-standard tools
            such as AXE Accessibility , WAVE, NVDA Screen Reader , Colour
            Contrast Analyser (CCA) , additional browser extensions like
            HeadingsMap (verify page content structure) , keyboard-only
            navigation techniques, and Flesch-Kincaid readability tests.
          </p>
          <p className="font-serif text-base-content">
            Testing of our website is performed by accessibility experts using
            industry-standard tools such as{" "}
            <Link href="https://axe.deque.com/plans?amp%3Butm_campaign=upgrade_top&amp%3Butm_medium=referral&utm_source=chrome_browser_extension">
              AXE Accessibility
            </Link>
            , <Link href="https://wave.webaim.org/">WAVE</Link>,{" "}
            <Link href="https://www.nvaccess.org/">NVDA Screen Reader</Link> ,
            <Link href="https://www.tpgi.com/color-contrast-checker/">
              Colour Contrast Analyser (CCA)
            </Link>{" "}
            , additional browser extensions like{" "}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/headingsmap/">
              HeadingsMap (verify page content structure){" "}
            </Link>{" "}
            , keyboard-only navigation techniques, and Flesch-Kincaid
            readability tests.
          </p>
          <h3 className="heading2">Accessibility Features On Golden Oaks</h3>
          <p className="font-serif text-base-content">
            The following is a list of components and functions meant to improve
            our site&apos;s accessibility:
          </p>
          <ul className="flex list-disc flex-col gap-2 font-serif text-base-content md:translate-x-8">
            <li>
              Golden Oaks design has incorporated a mobile-responsive version of
              its content.
            </li>
            <li>
              We have selected colors for color contrast and meet AA
              requirements, even for small text.
            </li>
            <li>
              Navigational aids are provided throughout our website. Skip
              navigation links have been incorporated to enable smooth keyboard
              navigation and to bypass repeated content.
            </li>
            <li>The language of our website is declared in the header.</li>
            <li>
              {" "}
              All images and other non-text elements are appropriately marked up
              to either reflect their purely decorative purpose or share
              informative content in their alternative text attributes.
            </li>
            <li>
              Landmark and heading markups indicate expected navigation, section
              containers, headings, lists, and buttons in a more understandable
              and skimmable way for all users, regardless of device.
            </li>
            <li>
              Forms are associated with labels or applicable Accessible Rich
              Internet Applications (ARIA) and include appropriate instructions
              on filling in form controls, with clearly understandable error
              states.
            </li>
            <li>
              (ARIA) screen-reader only text is present when links, buttons,
              icons, or images need additional context to understand their
              meaning.
            </li>
            <li>
              Warning text (readable by screen-readers) is displayed when links
              open in a new tab or window wherever possible.
            </li>
          </ul>
          <h3 className="heading2">Accessibility Support Contact</h3>
          <p className="font-serif text-base-content">
            We welcome comments, questions, and feedback on our website. If you
            notice anything that doesn&apos;t work for you or your assistive
            technology, please let us know. We will do our best to assist you
            and resolve issues. Email us at{" "}
            <Link href="mailto:goldenoak122@sbcglobal.net?subject=Accessibility%20Feedback">
              goldenoak122@sbcglobal.net
            </Link>
          </p>
          <h3 className="heading2">Certification of Compliance</h3>
          <p className="font-serif text-base-content">
            This website, Golden Oaks Website, located at
            https://www.goldenoaks.biz/, has been tested for and remediated to
            the latest WCAG 2.1 and ICT Refresh Standards. This was intended to
            provide an enhanced user experience, and although extensive, this
            shouldn&apos;t be considered as an exhaustive list for improving
            accessibility and user experience. As the website gets more traffic,
            it is highly recommended to collect feedback from users to discover
            additional pain points, usability issues, and future improvements.
          </p>
          <p className="font-semibold">Scope</p>
          <p className="font-serif text-base-content">
            The focus of this Audit and Remediation is based on testing
            compliance with WCAG 2.1 criteria, Section 508 Refresh, ADA
            Compliance, and overall accessibility of the website to users with
            disabilities and their Assistive Technology (AT).
          </p>
          <p className="font-semibold">Method</p>
          <p className="font-serif text-base-content">
            The site pages were tested with Color and Evaluation tools, multiple
            browsers, and a screen reader against WCAG 2.1 criteria, ADA
            Compliance, and Section 508 Refresh Standards. This includes both
            automated and manual procedures.
          </p>
          <p className="font-semibold">Result</p>
          <p className="font-serif text-base-content">
            Overall, the website is within ADA compliance and WCAG 2.1 Level AA
            Standards as of this date, November 2021, by an ADA Compliance
            Expert,{" "}
            <Link href="https://www.linkedin.com/in/matthew-dempsey-b6781952/">
              Matthew Dempsey
            </Link>
          </p>
          <Image
            width={50}
            height={50}
            className="mx-auto h-[50px] w-[50px]"
            alt="logo"
            src={"/ada.png"}
          />
        </div>
      </div>
    </main>
  </>
);

export default Accessibility;
