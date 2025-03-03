import { NavBar } from "@/components/Landing/NavBar";
import { Navigation } from "@/components/Landing/Navigation";
import { BookSection } from "@/components/Study/BookSection";

const page = () => {
  return (
    <section>
      <NavBar />
      <Navigation />
      <BookSection />
    </section>
  );
};
export default page;
