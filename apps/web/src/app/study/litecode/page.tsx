import { NavBar } from "@/components/Landing/NavBar";
import { LiteCode75Header } from "@/components/LiteCodeComponent/LiteCode75Header";
import { TopBarCompOfProblems } from "@/components/LiteCodeComponent/ProblemTable";
import React from "react";

const page = () => {
  return (
    <section>
      <NavBar />
      <LiteCode75Header />
      <TopBarCompOfProblems />
    </section>
  );
};
export default page;
