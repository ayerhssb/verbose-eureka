import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const meta = {
  description:
    "Shreya Bharti is a full-stack developer based in Ranchi, Jharkhand, India. She is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Shreya Bharti",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/shreya-bharti-og.png`,
  siteName: "Shreya Bharti",
  imageAlt: "Shreya Bharti portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Shreya Bharti - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Shreya.bharti.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};


export default Home;
