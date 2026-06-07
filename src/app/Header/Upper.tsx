import { FaBars, FaTimes } from "react-icons/fa";
import { socials } from "@/constant/navSocial";
import Navigation from "./Navigation";

import { Dispatch, SetStateAction } from "react";

interface UpperProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
}

export function Upper({ openMenu, setOpenMenu }: UpperProps) {
    return <section className="flex gap-4 items-center justify-between m-4 
        md:mx-14 md:my-6">
        <h1 
            className="
                text-md font-medium
                md:text-2xl
            "
        >
            Дарья Шпица
        </h1>

        <Navigation className="
            hidden items-center gap-8 uppercase font-normal text-sm
            md:flex md:text-md
        "/>
        <div className="flex items-center gap-2 text-2xl">
            {socials.map((Icon, index) => (
                <a key={index} href="#">
                    <Icon />
                </a>
            ))}
            {/* Бургер */}
            <button
                className="md:hidden pl-4"
                onClick={() => setOpenMenu(prev => !prev)}
            >
                {openMenu ? <FaTimes /> : <FaBars />}
            </button>
        </div>   
    </section>
}
