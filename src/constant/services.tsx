import { IconType } from "react-icons";
import {
  FaRing,
  FaPortrait,
  FaBriefcase,
  FaNewspaper,
} from "react-icons/fa";
import { ReactNode } from "react";

export interface ServiceItem {
  id: number;
  icon: IconType;
  title: string;
  description: ReactNode;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: FaRing,
    title: "Свадебная съёмка",
    description: (
      <>
        Полный день рядом с вами,
        <br />
        чтобы сохранить каждый важный момент.
      </>
    ),
  },
  {
    id: 2,
    icon: FaPortrait,
    title: "Портретная съёмка",
    description: (
      <>
        Индивидуальные, семейные и love-story
        <br />
        съёмки в студии или на природе.
      </>
    ),
  },
  {
    id: 3,
    icon: FaBriefcase,
    title: "Коммерческая съёмка",
    description: (
      <>
        Фотосъёмка для брендов, контента,
        <br />
        каталогов и рекламных кампаний.
      </>
    ),
  },
  {
    id: 4,
    icon: FaNewspaper,
    title: "Репортажная съёмка",
    description: (
      <>
        Мероприятия, вечеринки, презентации
        <br />
        и корпоративные события.
      </>
    ),
  },
];