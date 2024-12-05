import SubPageHero from "@/components/SubPageHero";
import Contact from "@/components/Contact";

const Page = () => {
  return (
    <div>
      <SubPageHero
        title="Contact"
        image_url="/images/contact/contact-banner2.jpg"
      />
      <div className="form-container py-20 px-5 xl:px-10 flex justify-center items-center bg-customDarkGray">
        <Contact/>
      </div>
    </div>
  );
};

export default Page;
