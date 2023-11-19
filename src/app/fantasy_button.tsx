import React from "react";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });

const FantasyButton = ({ onClick, children }) => {
  return (
    <button
      className={`${tangerine.className} text-4xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-10 py-4 rounded-full shadow-md hover:drop-shadow-xl hover:saturate-150	 transition duration-200 ease-in-out font-fantasy`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FantasyButton;
