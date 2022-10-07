import { Hero, Agency } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 458, height: 850 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  image: { src: "/img/video.png", alt: "video", width: 329, height: 525 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  cards: [
    {
      header: "Brief",
      paragraph: (
        <p style={{ margin: 0, padding: 0 }}>
          Complete <b>brief writing or simple guidance </b>
          on what to include, we've got you covered.
        </p>
      ),
      icon: { src: "/img/brief-icon.png", alt: "", width: 45, height: 45 },
    },
    {
      header: "Search",
      paragraph: (
        <p style={{ margin: 0, padding: 0 }}>
          In-depth agency search covering;
          <b>criteria matching</b>, door knocking and due-dilligence vetting.
        </p>
      ),
      icon: { src: "/img/pitch-icon.png", alt: "", width: 45, height: 45 },
    },
    {
      header: "Pitch",
      paragraph: (
        <p style={{ margin: 0, padding: 0, fontFamily: "Poppins" }}>
          Comprehensive <b>pitch management</b>, including comms, diary
          management and pitch hosting.
        </p>
      ),
      icon: { src: "/img/search-icon.png", alt: "", width: 45, height: 45 },
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapisgoogleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Agency {...agencyProps} />
      </div>
    </>
  );
}
