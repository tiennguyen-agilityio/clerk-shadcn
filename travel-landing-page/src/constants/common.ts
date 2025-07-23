export const PAGE_SIZE = 3;

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

export const YEARS = Array.from({ length: 100 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);

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

export const LOCATIONS = [
  {
    text: "Anywhere",
    value: "all",
  },
  {
    text: "Camp Kadolta",
    value: "camp kadolta",
  },
  {
    text: "Mombasa",
    value: "mombasa",
  },
  {
    text: "Suswa Conservancy",
    value: "suswa conservancy",
  },
  {
    text: "Lewa Conservancy",
    value: "lewa conservancy",
  },
  {
    text: "Ol Dubai Campsite",
    value: "ol dubai campsite",
  },
];

export const CATEGORIES = [
  {
    text: "Anywhere",
    value: "all",
  },
  {
    text: "Historic Site",
    value: "historic site",
  },
  {
    text: "Monument",
    value: "monument",
  },
  {
    text: "Archaeological Site",
    value: "archaeological site",
  },
  {
    text: "Marine Reserve",
    value: "marine reserve",
  },
  {
    text: "Notable Building",
    value: "notable building",
  },
  {
    text: "Hot Springs",
    value: "hot springs",
  },
];
