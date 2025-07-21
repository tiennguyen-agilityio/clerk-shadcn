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

export const STATISTICS_BY_SERVICES = [
  {
    title: "Camping Locations",
    value: "68+",
  },
  {
    title: "Hotels",
    value: "102+",
  },
  {
    title: "Activities",
    value: "84+",
  },
  {
    title: "Equipment Providers",
    value: "35+",
  },
];
