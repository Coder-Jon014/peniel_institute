"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "About Peniel Institute",
    content: "Peniel Institute was established in 2017 as an institute for continuing education and professional development. Our Aim, to develop and empower learners to become effective and transformational leaders enabling them to lead and manage their own business or enterprise, or lead and manage within a business organization.",
    imageSrc: "https://utfs.io/f/a592ac10-cf3b-4431-a5a5-5d164a61d361-12kfn7.jpg",
    imageAlt: "Portrait of a smiling dark-skinned girl wearing a warm sweater with her arms crossed over chest, woman wears glasses and gold earrings, her hair is braided, a business meeting in office in background"
  },
  {
    id: 2,
    title: "Our Vision",
    content: "Our vision is to build the capacity within our local community by developing the confidence, knowledge and skills of our people that will enable them to define their own realities and achieve their goals.",
    imageSrc: "https://utfs.io/f/f50261ce-48fe-4660-aa61-b3c07799f2a5-e3stow.jpg",
    imageAlt: "Students collaborating"
  },
  {
    id: 3,
    title: "Our Mission",
    content: "Our mission is to develop quality industry and professionally recognized training programmes, tutoring, and coaching that will build self-confidence and motivate our adult learners to acquire the knowledge and skills needed to aspire to become great leaders of their own or that of others' businesses or organizations, thus contributing to local and national development.",
    imageSrc: "https://utfs.io/f/45a91c1e-a172-4e6d-bb15-3fcdb5035230-p9pnot.jpg",
    imageAlt: "Graduation ceremony"
  },
  {
    id: 4,
    title: "Our Objective",
    content: "To deliver quality training using multiple methods and strategies to equip learners with the knowledge, skills and competencies required to become effective managers in their areas of expertise.",
    imageSrc: "https://utfs.io/f/932fe016-c1a3-4303-91e6-98baef4c191a-rx5plx.jpg",
    imageAlt: "Training session"
  }
];

const AboutSections: React.FC = () => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className="aspect-[4/3]">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-[80vh] w-[80vw] max-w-3xl max-h-[600px] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <Image
      src={card.imageSrc}
      alt={card.imageAlt}
      layout="fill"
      objectFit="cover"
      className="transition duration-200"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        <h2 className="text-2xl font-bold text-white mb-2">{selected?.title}</h2>
        <p className="text-gray-200">{selected?.content}</p>
      </motion.div>
    </div>
  );
};

export default AboutSections;