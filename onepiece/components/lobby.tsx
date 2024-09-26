"use client";
import React, { useState } from "react";
import Bubblehead from "./bubblehead";
import { players as gamePlayers } from "../seeds/players";

const Lobby = () => {
  const [players, setPlayers] = useState(["", "", "", ""]);

  const handleStartGame = () => {
    // Implement game start logic here
    console.log("Starting game with players:", players);
  };

  return (
    <div className="flex justify-center max-h-screen ">
      <div className="bg-white bg-opacity-90 rounded-lg p-12 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Find the One Piece
        </h2>
        er
        {gamePlayers.map((player, _) => (
          <div key={player.name} className="flex items-center mb-4">
            <Bubblehead image={player.image} />
            <button className=" bg-red-500 flex-grow border rounded px-3 py-2 text-white text-xl">
              {player.name}
            </button>
          </div>
        ))}
        {/* Start Game Button */}
        <button
          className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600 transition duration-300"
          onClick={handleStartGame}
        >
          Start Game
        </button>
        <div className="mt-6 text-sm text-gray-600">
          <p className="font-semibold mb-2">KEYBOARD CONTROLS</p>
          <p>
            <span className="bg-gray-200 px-2 py-1 rounded">Space</span> for
            dice &nbsp;
            <span className="bg-gray-200 px-2 py-1 rounded">1</span>&nbsp;
            <span className="bg-gray-200 px-2 py-1 rounded">2</span>&nbsp;
            <span className="bg-gray-200 px-2 py-1 rounded">3</span>&nbsp;
            <span className="bg-gray-200 px-2 py-1 rounded">4</span> for players
          </p>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          Developed By Nomolos and Frankie Power/&nbsp;
          <a href="#" className="text-blue-500 hover:underline">
            #add a twitter link or sumtn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
