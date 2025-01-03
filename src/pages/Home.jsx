import React, { useState } from "react";
import cover from "../images/cover.png";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";

function Home() {
  const [seeAll, setSeeAll] = useState(false);
  const cards = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" },
    { id: 6, title: "Card 6", description: "Description 6" },
    { id: 7, title: "Card 7", description: "Description 7" },
    { id: 8, title: "Card 8", description: "Description 8" },
  ];

  const visibleCards = seeAll ? cards : cards.slice(0, 4);

  return (
    <div>
      {/* Header */}
      <div className="bg-custom-linear h-[50vh] px-[25px]">
        <div className="flex gap-4 pt-5 mb-[50px]">
          <img
            src={forwardL}
            alt="forward image"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
          <img
            src={forwardR}
            alt="forward image"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
        </div>
        <h2 className="text-white font-medium text-4xl">Good afternoon</h2>
        {/* Featured Content */}
        <div className="flex gap-[32px] mt-5">
          {[...Array(2)].map((_, idx) => (
            <div key={idx}>
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-3 cursor-pointer"
                >
                  <img src={cover} alt="Cover Image" className="w-[60px]" />
                  <h2 className="text-white font-medium">Chill Mix</h2>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-stone-950 h-[100vh] px-[25px] pt-8">
        <div className="flex justify-between">
          <h2 className="text-white text-xl font-medium">Your top mixes</h2>
          <p
            onClick={() => setSeeAll(!seeAll)}
            className="text-gray-300 hover:underline cursor-pointer"
          >
            {seeAll ? "Hide More" : "SEE ALL"}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {visibleCards.map((card) => (
            <div key={card.id} className="bg-stone-900 p-4 rounded-md">
              <img src={cover} alt={card.title} className="w-full" />
              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
