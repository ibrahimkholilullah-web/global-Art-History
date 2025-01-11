import React from "react";
import CountUp from "react-countup";
import { FaImage, FaSmile, FaAward, FaPalette } from "react-icons/fa";

const StatusSection = () => {
  const stats = [
    {
      icon: <FaImage className="text-[#D98855] text-5xl mb-2" />,
      value: 245,
      title: "EXHIBITIONS",
      subtitle: "Has Been Held",
    },
    {
      icon: <FaSmile className="text-[#D98855] text-5xl mb-2" />,
      value: 93,
      title: "VISITORS",
      subtitle: "In Last Year",
    },
    {
      icon: <FaAward className="text-[#D98855] text-5xl mb-2" />,
      value: 106,
      title: "AWARDS",
      subtitle: "Have Received",
    },
    {
      icon: <FaPalette className="text-[#D98855] text-5xl mb-2" />,
      value: 15,
      title: "COLLECTIONS",
      subtitle: "Of Art & Designs",
    },
  ];

  return (
    <div className="bg-[#302E2F] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {stat.icon}
            <h2 className="text-4xl font-bold mt-2">
              <CountUp end={stat.value} duration={2.5} />
            </h2>
            <p className="font-semibold uppercase">{stat.title}</p>
            <p className="text-sm">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
