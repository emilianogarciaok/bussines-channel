import Image from "next/image";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/NavBar";
import { InfoSec } from "@/components/InfoSec";
import { Quote } from "@/components/Quote";
import { Courses } from "@/components/Courses";
import { HeroSec } from "@/components/HeroSec";
import { Review } from "@/components/Review";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/reusable/TeamSelection/TeamSection";

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
