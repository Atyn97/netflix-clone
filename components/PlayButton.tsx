import { useRouter } from "next/router";
import React from "react";

import { BsPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push(`/watch/${movieId}`)}
        className="
            flex
            flex-row
            items-center 
          bg-white
          text-black
            text-[10px] sm:text-lg md:text-xl
            font-semibold
            rounded-md
            px-4 md:px-5
            py-1 md:py-2
            hover:bg-neutral-300
            
            "
      >
        <BsPlayFill className="mr-1" size={25} /> Play
      </button>
    </div>
  );
};

export default PlayButton;
