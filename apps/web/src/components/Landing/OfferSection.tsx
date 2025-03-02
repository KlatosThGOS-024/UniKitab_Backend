import React from "react";

const Company = () => {
  return (
    <div className="py-[21px] flex-shrink flex px-5 bg-[#c5c7c9] w-full">
      <div className="  mx-auto  w-[1200px] ">
        <ul className="flex items-center justify-center flex-shrink max-md:gap-[18px] gap-[64px]">
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/yahoo-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/nas-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/inc-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/ent-min.png"
            />
          </li>{" "}
          <li>
            <img
              className="w-[126px]"
              src="https://www.studypool.com/img/mediaLogos/huff-min.png"
            />
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};
const subjects = [
  {
    name: "Javascript",
    imgSrc: "https://www.studypool.com/img/splashPage/subjects/programming.png",
  },
  {
    name: "Music Theory",
    imgSrc:
      "https://www.studypool.com/img/splashPage/subjects/music-theory-new.jpg",
  },
  {
    name: "Linear algebra",
    imgSrc:
      "https://www.studypool.com/img/splashPage/subjects/linear-algebra-new.jpg",
  },
  {
    name: "Rocket Science",
    imgSrc:
      "https://www.studypool.com/img/splashPage/subjects/rocket-science-new.jpg",
  },
];
const tutoringSteps = [
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/question.png",
    title: "Find Past Year Papers",
    description:
      "Search and access previous year question papers in PDF format for various subjects.",
  },
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/explain.png",
    title: "Ask AI for Answers",
    description:
      "Get instant AI-generated answers and explanations for any question from the PYQs.",
  },
  {
    imgSrc: "https://www.studypool.com/img/howItWorks/connect.png",
    title: "Discuss with Peers & Experts",
    description:
      "Engage in discussions with other students and tutors to understand concepts better.",
  },
];
const Secsubjects = [
  {
    imgSrc: "https://www.studypool.com/img/icons/topNavbar/mat.png",
    subject: "Mathematics",
  },
  { imgSrc: "path-to-image/science.png", subject: "Science" },
  { imgSrc: "path-to-image/business.png", subject: "Business" },
  { imgSrc: "path-to-image/programming.png", subject: "Programming" },
  { imgSrc: "path-to-image/humanities.png", subject: "Humanities" },
  { imgSrc: "path-to-image/writing.png", subject: "Writing" },
];

const FeaturedSubjects = ({ sub }: { sub: any }) => {
  return (
    <div>
      <div className="flex items-center max-md:grid grid-cols-2 max-md:px-3 flex- gap-[21px]">
        {subjects.map((value, index) => {
          return (
            <div className=" border-[1px] shadow-lg flex-1 rounded-lg">
              <img
                src={value.imgSrc}
                className="rounded-b-none w-full rounded-lg"
              />
              <div
                className=" bg-white ml-3 
              text-[21px] font-[400] text-black"
              >
                <span>{value.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SecondFeaturedSubjects = () => {
  return (
    <div className=" w-full">
      <div className="  grid grid-cols-3 w-full justify-items-center gap-y-[68px] max-lg:grid-cols-2">
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/mat.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            {" "}
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>
            <span>MathMatics</span>
          </div>
        </div>{" "}
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/sci.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            {" "}
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>
            <span>Science</span>
          </div>
        </div>{" "}
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/bus.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            {" "}
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>
            <span>Business</span>
          </div>
        </div>{" "}
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/pro.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            {" "}
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>
            <span>Programming</span>
          </div>
        </div>{" "}
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/hum.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>

            <span>Humanities</span>
          </div>
        </div>{" "}
        <div className="flex items-center  flex-col">
          <img
            src="https://www.studypool.com/img/icons/topNavbar/wri.png"
            className="rounded-b-none  rounded-lg"
          />
          <div
            className=" text-center 
              text-[18px] font-[400] text-black"
          >
            {" "}
            <div className="w-12 h-1 mx-auto  bg-[#1AB9F4] my-1"></div>
            <span>Writing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  feature,
}: {
  feature: {
    imgSrc: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <div>
      <div className="flex flex-col items-center text-center gap-4">
        {" "}
        <img className="w-[48px] h-[48px]" src={feature.imgSrc} />{" "}
        <h2 className="text-[#000080c6]">{feature.title}</h2>
        <p className="text-[18px] text-gray-500 max-md:w-[500px] break-words ">
          {feature.description}
        </p>
      </div>{" "}
    </div>
  );
};

export const OfferSection = () => {
  return (
    <section className="">
      <Company />
      <div className="w-[1200px] max-lg:w-[700px] max-md:w-[600px] mx-auto z-30">
        <div
          className=" w-full
         mx-auto mt-[28px]"
        >
          {" "}
          <h2 className="text-[24px]  text-[#000080] text-center my-[64px]">
            How Q&A Tutoring Works
          </h2>
          <div className="flex max-md:flex-col max-lg:gap-[21px]">
            {tutoringSteps.map((value, index) => {
              return <FeatureCard key={index} feature={value} />;
            })}
          </div>
        </div>
        <div className=" w-full mt-[96px]">
          {" "}
          <h2
            className="text-[24px]  text-[#000080]
           text-center my-[64px]"
          >
            Featured Subjects
          </h2>
          <div className="flex gap-5">
            <FeaturedSubjects sub={subjects} />
          </div>
        </div>{" "}
        <div className=" w-full mt-[96px]">
          {" "}
          <div className="flex gap-5">
            <SecondFeaturedSubjects />
          </div>
        </div>
      </div>
    </section>
  );
};
