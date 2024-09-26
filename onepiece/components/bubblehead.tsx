import Image from "next/image";
import { players as gamePlayers } from "../seeds/players";

const Bubblehead = ({ image }: { image: any }) => {
  return (
    <div
      className={`w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center mr-2 overflow-hidden`}
    >
      <Image src={image} className="w-[100px] h-[100px]" alt="player" />
    </div>
  );
};

export default Bubblehead;
