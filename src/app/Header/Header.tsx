'use client'
import "./Header.css";
import { useState } from "react";
import Navigation from "./Navigation";
import { Upper } from "./Upper";
import Link from "next/link";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <header className="bg">
            {/* Заголовки */}
            <Upper openMenu={openMenu} setOpenMenu={setOpenMenu}/>

            {/* Мобильное меню */}
            <section className="md:hidden mt-8 overflow-hidden">
                <Navigation className={`
                    flex flex-col items-center gap-2 uppercase font-normal text-md
                    transition-all duration-500
                    ${openMenu
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}/>
            </section>

            {/* Блок с описанием */}
            <section className="flex flex-col md:flex-row items-start justify-between">
                {/* Левая колонка */}
                <div className="flex flex-col gap-6 my-16 p-10 md:w-1/2 md:px-40 md:pt-40">
                    <div>
                        <h2 className="text-3xl font-normal leading-tight text-center md:text-left md:text-6xl md:text-nowrap">
                            Фотография,<br />
                            которая сохраняет<br />
                            эмоции навсегда
                        </h2>
    
                        <h3 className="text-lg font-light mt-4 text-center md:text-left md:text-2xl md:text-nowrap">
                            Свадебная, портретная и коммерческая<br />
                            съёмка в авторском стиле
                        </h3>
                    </div>

                    {/* Кнопки */}
                    <div className="flex flex-col gap-3 text-sm md:flex-row md:gap-6 md:w-full">
                        <Link href="#portfolio" className="text-center cursor-pointer border px-6 py-2 uppercase md:flex-1 md:px-8 md:py-3 md:text-nowrap">
                            Смотреть портфолио
                        </Link>

                        <Link href="#contacts" className="text-center cursor-pointer px-6 py-2 uppercase bg-[#b4947a] text-white md:flex-1 md:px-8 md:py-3 text-nowrap">
                            Записаться на съёмку
                        </Link>
                    </div>

                </div>

            </section>
        </header>
    )
}
