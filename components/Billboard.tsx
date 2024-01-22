import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="
        w-full
        h-[56.25vw]
        object-cover
        brightness-[60%]"
        autoPlay
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="
        text-white
        text-xl
        md:text-5xl
        h-full 
        w-[90%]
        md:w-[80%]
        lg:w-[50%]
        lg:text-6xl
        font-bold
        drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p
          className="
              text-white
              text-[10px]
              sm:text-sm
              md:text-md
              lg:text-lg
              mt-3
              md:mt-8
              w-[80%]
              md:w-[70%]
              lg:w-[50%]
              drop-shadow-xl
              "
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="   
            flex
            flex-row
            items-center 
          bg-zinc-500
            bg-opacity-80
          text-white
            text-[10px] sm:text-lg md:text-xl
            font-semibold
            rounded-md
            px-4 md:px-5
            py-1 md:py-2
            hover:bg-opacity-60
            transition
          "
          >
            <AiOutlineInfoCircle className="mr-1 mt-1" size={25} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
