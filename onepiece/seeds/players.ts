import Franky from "../components/StrawHats/Franky.png";
import Luffy from "../components/StrawHats/luffy.png";
import Sanji from "../components/StrawHats/sanji.png";
import Zoro from "../components/StrawHats/zoro.png";

interface Player {
  name: string;
  image: any;
  details: string;
  color: string;
}

export const players: Player[] = [
  {
    name: "Frankie",
    image: Franky,
    details: "lorem ipsum",
    color: "bg-white",
  },
  {
    name: "Sanji",
    image: Luffy,
    details: "lorem ipsum",
    color: "bg-yellow-500",
  },
  {
    name: "Zoro",
    image: Sanji,
    details: "lorem ipsum",
    color: "bg-green-500",
  },
  {
    name: "Luffy",
    image: Zoro,
    details: "lorem ipsum",
    color: "bg-white",
  },
];
