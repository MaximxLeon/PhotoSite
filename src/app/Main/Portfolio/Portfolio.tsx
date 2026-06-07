'use client';

import Title from "@/app/Component/Title";
import { PortfolioImage } from "@/app/utils/portfolioImage";
import { desktopLayout, portfolioImages } from "@/constant/desktopLayout";
import Image from "next/image";

export function Portfolio() {
  return (
    <section id="portfolio" className="m-10">

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-5 grid-rows-6 gap-4 h-150">

        {/* TEXT BLOCK */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 font-light">
          <Title>Портфолио</Title>

          <h1 className="mt-6 text-5xl">
            Моменты, которые<br />
            говорят сами за себя
          </h1>

          <button className="mt-6 text-xl">
            Смотреть все работы
          </button>
        </div>

        {/* IMAGES */}
        {desktopLayout.map((item, index) => (
          <div key={item.id} className={`${item.className} hover:scale-110 transition-transform duration-600`}>
            <PortfolioImage src={portfolioImages[index].src} />
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <Title className="text-center">Портфолио</Title>

        <div className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          -mx-4 px-4 mt-6
        ">
          {portfolioImages.map((img) => (
            <div
              key={img.id}
              className="min-w-[80%] snap-center shrink-0"
            >
              <Image
                src={img.src}
                alt="Фото портфолио"
                width={500}
                height={600}
                className="w-full h-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}