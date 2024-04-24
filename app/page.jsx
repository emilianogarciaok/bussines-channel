import Image from "next/image";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/NavBar";
import { InfoSec } from "@/components/InfoSec";
import { Quote } from "@/components/Quote";
import { Courses } from "@/components/Courses";
import { HeroSec } from "@/components/HeroSec";
import { Review } from "@/components/Review";
import { SocialProof } from "@/components/SocialProof";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoSec />
      <Quote />
      <Courses />
      <HeroSec />
      <Review />
      <SocialProof />
      <TeamSection />
      <Footer />
    </>
  );
}
