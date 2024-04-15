import Image from "next/image";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/NavBar";
import { InfoSec } from "@/components/InfoSec";
import { Quote } from "@/components/Quote";
import { Courses } from "@/components/Courses";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoSec />
      <Quote />
      <Courses />
    </>
  );
}
