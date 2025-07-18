export const DAYS = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const YEARS = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

export const EXPERIENCES = [
  {
    title: "Top Camping Sites",
    label: "CHECK OUT",
  },
  {
    title: "Top National Parks",
    label: "CHECK OUT",
  },
  {
    title: "Top Weekend Gate-aways",
    label: "CHECK OUT",
  },
];
