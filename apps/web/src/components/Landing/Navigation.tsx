"use client";
import { FaBorderAll } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { useState } from "react";
const allSub = [
  "Business",
  "Humanities",
  "Mathematics",
  "Programming",
  "Science",
  "Writing",
  "Health & Medical",
  "Economics",
  "Engineering",
  "Computer Science",
  "Law",
  "Foreign Languages",
];
const softwareEngineerSub = [
  "Mathematics",
  "Programming",
  "Computer Science",
  "Engineering",
  "Science",
  "Algorithms",
  "Data Structures",
  "Software Design",
  "Operating Systems",
  "Database Management",
  "Cybersecurity",
  "Cloud Computing",
];
const networkEngineerSub = [
  "Mathematics",
  "Engineering",
  "Computer Science",
  "Networking",
  "Network Security",
  "Telecommunications",
  "Routing & Switching",
  "Wireless Communication",
  "Cloud Networking",
  "Network Protocols",
  "Internet of Things (IoT)",
  "Cybersecurity",
];

const HoveredSubjects = ({
  Subjects,
  prefix,
}: {
  Subjects: string[];
  prefix: string;
}) => {
  return (
    <div>
      <ul>
        {Subjects.map((sub, index) => {
          const key = `${prefix}-${index}-${sub}`;

          return (
            <li
              key={`${prefix}-${index}-${sub}`}
              className="flex cursor-pointer items-center justify-between gap-x-[64px] my-2 hover:text-[#33BFFA] flex-nowrap"
            >
              <span className="">{sub}</span>
              <FaChevronRight />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export const Navigation = () => {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const handleModal = (modalNumber: number) => {
    switch (modalNumber) {
      case 1:
        setShowModalTwo(false);
        setShowModalThree(false);
        break;
      case 2:
        setShowModalOne(false);
        setShowModalThree(false);
        break;
      case 3:
        setShowModalOne(false);
        setShowModalTwo(false);
        break;
      default:
        setShowModalOne(false);
        setShowModalTwo(false);
        setShowModalThree(false);
    }
  };

  return (
    <section className="max-lg:hidden block  border-[1px] border-x-0 border-b-0">
      <div>
        <ul className="flex items-center relative px-3 justify-between py-3 -orange-400 mx-auto w-[1280px]">
          <li
            onClick={() => {
              setShowModalOne(!showModalOne);

              handleModal(1);
            }}
            className="flex relative group items-center cursor-pointer gap-2"
          >
            <FaBorderAll />
            <span className="text-[18px] cursor-pointer group-hover:text-[#69D4F3]">
              All Subjects
            </span>
            <FaChevronDown />
            {showModalOne && (
              <div className="absolute z-40 px-4 py-1 rounded-lg bg-white top-[38px] ">
                {" "}
                <HoveredSubjects Subjects={allSub} prefix="allSub" />
              </div>
            )}
          </li>
          <li
            onClick={() => {
              setShowModalTwo(!showModalTwo);

              handleModal(2);
            }}
            className="flex relative items-center cursor-pointer group gap-2"
          >
            <SiBmcsoftware />
            <span className="text-[18px] cursor-pointer group-hover:text-[#69D4F3]">
              Software Engineering
            </span>
            <FaChevronDown />
            {showModalTwo && (
              <div className="absolute z-40 px-4 py-1 rounded-lg bg-white top-[38px] ">
                {" "}
                <HoveredSubjects
                  Subjects={softwareEngineerSub}
                  prefix="softwareEngineerSub"
                />
              </div>
            )}
          </li>
          <li
            onClick={() => {
              setShowModalThree(!showModalThree);

              handleModal(3);
            }}
            className="flex group relative items-center gap-2"
          >
            <FaNetworkWired />
            <span className="text-[18px] group-hover:text-[#69D4F3]">
              Network Engineering
            </span>
            <FaChevronDown />
            {showModalThree && (
              <div className="absolute z-40 px-4 py-1 rounded-lg bg-white top-[38px] ">
                {" "}
                <HoveredSubjects
                  prefix="networkEngineerSub"
                  Subjects={networkEngineerSub}
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};
