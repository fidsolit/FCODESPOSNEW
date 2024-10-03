"use client";
import TopAgentsChart from "../../components/TopAgentsChart";

const TopAgent = () => {
  // Sample data for agents
  const agents = [
    {
      name: "Angelica Ancajas",
      performance: 90,
      image: "/images/agents/angelica.jpg",
    },
    {
      name: "Charles ",
      performance: 85,
      image: "/images/agents/angel pardillo.jpg",
    },
    {
      name: "Marylen Dagohoy",
      performance: 75,
      image: "/images/agents/angel pardillo.jpg",
    },
    {
      name: "Jonafe Ababa",
      performance: 60,
      image: "/images/agents/angel pardillo.jpg",
    },
    {
      name: "FLoramer Pardillo",
      performance: 95,
      image: "/images/agent/-e.png",
    },
    {
      name: "Carlowe Valencia",
      performance: 94,
      image: "/images/agent/-e.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Top Performing Agents
        </h1>
        <div className="flex justify-center">
          <TopAgentsChart agents={agents} />
        </div>
      </div>
    </div>
  );
};

export default TopAgent;
