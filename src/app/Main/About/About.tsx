'use client'
import Title from "@/app/Component/Title";
import { aboutData } from "@/constant/dataItem";
import Image from "next/image";
import { useState } from "react";

export function About() {
    const [openDetails, setOpenDetails] = useState(false);
    return (
        <section id="about" className="m-10 grid grid-cols-1 md:grid-cols-5 md:items-stretch gap-10">

            {/* 1/5 — фото */}
            <div className="md:col-span-1 flex justify-center">
                <Image
                    priority
                    src="/images/about.jpg"
                    alt="Фото"
                    width={400}
                    height={400}
                    className="w-96 h-96 object-cover"
                />
            </div>

            {/* 2/5 — текст */}
            <div className="md:col-span-2 flex flex-col justify-start gap-6">

                <Title className="text-center md:text-left">Обо мне</Title>

                <h1 className="hidden md:block md:text-5xl">Рассказываю истории<br/>через кадры</h1>

                <p className="text-justify leading-relaxed md:mt-10">
                    Привет! Я Дарья - фотограф с более чем 4-летним опытом. Для меня важно
                    не просто сделать красивый кадр, а поймать настоящие эмоции и сохранить
                    ваши важные моменты в естественной и живой форме.
                </p>

                <div>
                    <button
                        className="uppercase cursor-pointer"
                        type="button"
                        aria-expanded={openDetails}
                        onClick={() => setOpenDetails(prev => !prev)}
                    >
                        Подробнее обо мне
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openDetails
                            ? "max-h-125 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="text-sm text-gray-600">
                        Привет! Я Дарья - фотограф с более чем 4-летним опытом. Для меня важно
                        не просто сделать красивый кадр, а поймать настоящие эмоции и сохранить
                        ваши важные моменты в естественной и живой форме...
                        </p>
                    </div>
                </div>
            </div>

            {/* 2/5 — статистика */}

            <div className="md:col-span-2 flex items-center justify-center md:justify-center">
                <div className="grid grid-cols-3 gap-6 text-center">
                    {aboutData.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <span className="text-3xl md:text-5xl flex items-center gap-1">
                                {item.count}
                                <span className="text-2xl md:text-4xl">+</span>
                            </span>

                            <span className="text-sm md:text-base mt-2">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  );
}