import { NavBar } from "@/components/Landing/NavBar";
import { UploadPdf } from "@/components/Pdf/UploadPdf";
import withAuth from "@/security/ProtectedRoute";

const page = () => {
  return (
    <section>
      <NavBar />
      <UploadPdf />
    </section>
  );
};

// Wrap the component to protect it
export default page;
