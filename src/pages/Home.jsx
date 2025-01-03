import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cover from "../images/cover.png";
import forwardL from "../images/forwardL.svg";
import forwardR from "../images/forwardR.svg";
import daily from "../images/daily.png";
import folk from "../images/folk.png";
import pop from "../images/pop.png";
import daily4 from "../images/daily4.png";
import daily5 from "../images/daily5.png";
import shohruh from "../images/shohruh.jpg";
import abror from "../images/abror.jpg";
import elyor from "../images/elyor.jpg";
import repper from "../images/repper.jpg";

function Home() {
  const [seeAllCards, setSeeAllCards] = useState(false);
  const [seeAllCards1, setSeeAllCards1] = useState(false);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Chill Mix",
      description: "Julia Wolf, Khalid, ayokay and more",
      image: cover,
    },
    {
      id: 2,
      title: "Pop Mix",
      description: "Hey Violet, VÉRITÉ, Timeflies and more",
      image: pop,
    },
    {
      id: 3,
      title: "Pheelz Mix",
      description: "WizKid, Asake, Tiwa Savage and more",
      image: daily4,
    },
    {
      id: 4,
      title: "Indie Mix",
      description: "Joywave, The xx, The Neighbourhood and...",
      image: daily5,
    },
    {
      id: 5,
      title: "Shohruh Ergashev",
      image: shohruh,
      description: "pop va estrada musiqalari yo‘nalishida ijod qiladi ",
    },
    {
      id: 6,
      title: "Abror Dostov",
      description: "uni musiqa olamida ajralib turadigan san'atkorlardan",
      image: abror,
    },
    {
      id: 7,
      title: "elyor meliboyev",
      description: "uning ijodi turli yoshdagi tinglovchilarni o‘ziga tortadi.",
      image: elyor,
    },
    {
      id: 8,
      title: "Shohruh",
      description: "ritmik uslubi va jonli ifodasi bilan ajralib turadi",
      image: repper,
    },
  ];

  const cards1 = [
    {
      id: 1,
      title: "Jazz Vibes",
      description: "Miles Davis, John Coltrane, and more",
      image: cover,
    },
    {
      id: 2,
      title: "Rock Classics",
      description: "The Beatles, Queen, Pink Floyd and more",
      image: pop,
    },
    {
      id: 3,
      title: "Electronic Beats",
      description: "Daft Punk, The Chemical Brothers, Justice and more",
      image: daily4,
    },
    {
      id: 4,
      title: "Hip Hop Hits",
      description: "Kendrick Lamar, J. Cole, Travis Scott and more",
      image: daily5,
    },
    {
      id: 5,
      title: "Ariana Grande",
      image: shohruh,
      description: "A pop icon known for her powerful voice and hits.",
    },
    {
      id: 6,
      title: "Billie Eilish",
      description: "A genre-defying artist with a unique sound.",
      image: abror,
    },
    {
      id: 7,
      title: "The Weeknd",
      description: "R&B and pop superstar with global hits.",
      image: elyor,
    },
    {
      id: 8,
      title: "Kendrick Lamar",
      description:
        "Renowned rapper and lyricist with social-conscious messages.",
      image: repper,
    },
  ];

  const visibleCards = seeAllCards ? cards : cards.slice(0, 4);
  const visibleCards1 = seeAllCards1 ? cards1 : cards1.slice(0, 4);

  const handleCardClick = (id) => {
    navigate(`/playlist/${id}`);
  };

  const renderCard = (card) => (
    <div
      key={card.id}
      className="bg-stone-900 p-4 rounded-lg cursor-pointer transition transform hover:scale-105"
      onClick={() => handleCardClick(card.id)}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold text-white">{card.title}</h3>
      <p className="text-gray-400 text-sm">{card.description}</p>
    </div>
  );

  return (
    <div>
      <div className="bg-custom-linear h-[50vh] px-[25px] flex flex-col justify-center">
        <div className="flex gap-4 pt-5 mb-[30px] ">
          <img
            src={forwardL}
            alt="forward left"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
          <img
            src={forwardR}
            alt="forward right"
            className="cursor-pointer w-[30px] hover:scale-105"
          />
        </div>
        <h2 className="text-white font-medium text-4xl">Good afternoon</h2>

        <div className="flex gap-[24px] mt-6 ">
          <div className="space-y-2">
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img
                src={cover}
                alt="Chill Mix"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Chill Mix</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img
                src={daily}
                alt="Daily Mix 1"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 1</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img
                src={folk}
                alt="Folk & Acoustic Mix"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Folk & Acoustic Mix</h2>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img src={pop} alt="Pop Mix" className="w-[60px] rounded-md" />
              <h2 className="text-white font-medium">Pop Mix</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img
                src={daily5}
                alt="Daily Mix 5"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 5</h2>
            </div>
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-20 w-[420px] rounded-md mb-2 cursor-pointer">
              <img
                src={daily4}
                alt="Daily Mix 4"
                className="w-[60px] rounded-md"
              />
              <h2 className="text-white font-medium">Daily Mix 4</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-950 h-full px-[25px] pt-6">
        <div className="flex justify-between">
          <h2 className="text-white text-xl font-medium">Your top mixes</h2>
          <p
            onClick={() => setSeeAllCards(!seeAllCards)}
            className="text-gray-300 hover:underline cursor-pointer"
          >
            {seeAllCards ? "Hide More" : "SEE ALL"}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {visibleCards.map(renderCard)}
        </div>
      </div>

      <div className="bg-stone-950 h-[100vh] px-[25px] pt-6">
        <div className="flex justify-between">
          <h2 className="text-white text-xl font-medium">Other mixes</h2>
          <p
            onClick={() => setSeeAllCards1(!seeAllCards1)}
            className="text-gray-300 hover:underline cursor-pointer"
          >
            {seeAllCards1 ? "Hide More" : "SEE ALL"}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {visibleCards1.map(renderCard)}
        </div>
      </div>
    </div>
  );
}

export default Home;
