export const portfolioImages = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: `/images/portfolio/${i + 1}.jpg`,
}));

export const desktopLayout = [
  { id: 1, className: "col-start-1 col-end-2 row-start-4 row-end-7" },
  { id: 2, className: "col-start-2 col-end-3 row-start-3 row-end-7" },
  { id: 3, className: "col-start-3 col-end-4 row-start-1 row-end-7" },
  { id: 4, className: "col-start-4 col-end-5 row-start-1 row-end-5" },
  { id: 5, className: "col-start-4 col-end-5 row-start-5 row-end-7" },
  { id: 6, className: "col-start-5 col-end-6 row-start-1 row-end-3" },
  { id: 7, className: "col-start-5 col-end-6 row-start-3 row-end-7" },
];