import type { Item } from "./types.ts";

export const ITEMS: Item[] = [
  {
    id: "itm_001",
    title: "Cordless Drill (18V)",
    category: "power-tools",
    description: "Solid drill, two batteries, works for most home jobs.",
    photoUrls: [
      "https://imgs.search.brave.com/Td1v36l_rsRB2jwGXohKJ_itds4Fsz5NG39iFoDFrHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzUxLzMzLzE2/LzM2MF9GXzE0NTEz/MzE2MTVfYmxRU1Fs/TlE2TElaVmJtdDJi/TmhqbUlLQkZNdmZx/NGYuanBn",
    ],
    price: { amountCents: 5000, period: "day" },
    owner: {
      id: "usr_a",
      displayName: "Naledi",
      rating: 4.8,
      ratingCount: 24,
      joinedISO: "2025-02-11",
    },
    distanceKm: 1.2,
    status: "available",
    postedISO: "2026-06-20",
  },
  {
    id: "itm_002",
    title: "Extension Ladder (3m)",
    category: "outdoor",
    description: "Aluminium, light, fits in a hatchback.",
    photoUrls: [
      "https://t4.ftcdn.net/jpg/20/95/57/87/240_F_2095578741_e01n1YgrZ8J7VHZqad2D0rDNvAT25evj.jpg",
    ],
    price: { amountCents: 0, period: "day" },
    owner: {
      id: "usr_b",
      displayName: "Sipho",
      rating: null,
      ratingCount: 0,
      joinedISO: "2026-06-18",
    },
    distanceKm: null,
    status: "available",
    postedISO: "2026-06-25",
  },
  {
    id: "itm_003",
    title: "Pressure Washer",
    category: "outdoor",
    description: "Great for driveways and walls. Bring your own hose.",
    photoUrls: [
      "https://imgs.search.brave.com/yvs8lWnsOdCjQ_YVntvxfUNFfVeXpSf6E6BoTmWsTRQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaG9w/am9lLmNvbS9jZG4v/c2hvcC9maWxlcy9T/UFgxMDAtR09fSGVy/b19TSi5qcGc_dj0x/Nzc4Nzc5MTMyJndp/ZHRoPTMwMDA",
    ],
    price: { amountCents: 12000, period: "day" },
    owner: {
      id: "usr_c",
      displayName: "Fatima",
      rating: 4.2,
      ratingCount: 6,
      joinedISO: "2025-11-02",
    },
    distanceKm: 4.7,
    status: "paused",
    postedISO: "2026-05-30",
  },
  {
    id: "itm_004",
    title: "Stand Mixer",
    category: "kitchen",
    description: "For big baking days. Comes with whisk + dough hook.",
    photoUrls: [
      "https://imgs.search.brave.com/wLSHEyx7IZICUvnbZ8ozdtAuQ2If5BGBubYsn3JEDsw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxscmVjaXBlcy5j/b20vdGhtYi9mOUo0/c0dKa1dGZm51Vm1q/cmhydWRKNFBWb3c9/L2ZpdC1pbi8xNTAw/eDI2NjYvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCk6Zm9y/bWF0KHdlYnApL2Fs/ci1zdGFuZC1taXhl/cnMtYWxsc3RhcnMt/bWF5LTI0LXRlc3Qt/aGFtaWx0b24tYmVh/Y2gtZWxlY3RyaWMt/cmFtb25hLWNydXot/cGV0ZXJzLTEtYjM4/ZWZmNTZjMTY2NDYw/ZmFhOTI3N2Q3ZTZj/YmE5NDguanBlZw",
    ],
    price: { amountCents: 8000, period: "day" },
    owner: {
      id: "usr_d",
      displayName: "Grace",
      rating: 5.0,
      ratingCount: 2,
      joinedISO: "2026-01-19",
    },
    distanceKm: 0.6,
    status: "available",
    postedISO: "2026-06-28",
  },
  {
    id: "itm_005",
    title: "Folding Tables (x4)",
    category: "party",
    description: "Set of four trestle tables. Good for events.",
    photoUrls: [
      "https://imgs.search.brave.com/bJVP_lBqJwoBszkLRqxSx6rh0yyyLCYL2FHOvXIr5-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MzM1Mjk5Ny9waG90/by9mb2xkaW5nLXRh/YmxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1feEptU0Vw/c0Y2VGVZem5OeG96/QzBfd3lEVHYzYkp1/VFRtMTZFYk1lYTgw/PQ",
    ],
    price: { amountCents: 15000, period: "day" },
    owner: {
      id: "usr_e",
      displayName: "Themba",
      rating: 3.9,
      ratingCount: 11,
      joinedISO: "2024-09-14",
    },
    distanceKm: 8.1,
    status: "available",
    postedISO: "2026-06-15",
  },
  {
    id: "itm_006",
    title: "Lawn Mower (petrol)",
    category: "garden",
    description: "Self-propelled. A bit loud but cuts fast.",
    photoUrls: [
      "https://imgs.search.brave.com/uT8Mhw10nyJD1_al5hC43ewgU6Pqk9P24f_XpGJIrAk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/MjcwODI1L3Bob3Rv/L21vd2VyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1xcjQy/eTNuc2ZCdkdrRk1p/eFVyd1B6T05wSkh6/Q18tNHc3MDc4Umpa/aW5ZPQ",
      "https://imgs.search.brave.com/JUhsime7lbJgGl8uF2HSNFbImt0YCSQXOjz5mycfR7w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFlYm5QcDdqQUwu/anBn",
    ],
    price: null,
    owner: {
      id: "usr_f",
      displayName: "Anele",
      rating: 4.5,
      ratingCount: 18,
      joinedISO: "2025-07-07",
    },
    distanceKm: 2.9,
    status: "available",
    postedISO: "2026-06-22",
  },
  {
    id: "itm_007",
    title: "Tile Cutter",
    category: "hand-tools",
    description: "Manual tile cutter, up to 600mm.",
    photoUrls: [
      "https://imgs.search.brave.com/T-_g2X9dhZnfr_XGlWrHw9GkYZ_jn0G8J_JVzI3nFqk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFtU1Radzl3Wkwu/anBn",
    ],
    price: { amountCents: 3000, period: "day" },
    owner: {
      id: "usr_c",
      displayName: "Fatima",
      rating: 4.2,
      ratingCount: 6,
      joinedISO: "2025-11-02",
    },
    distanceKm: 4.7,
    status: "available",
    postedISO: "2026-06-11",
  },
  {
    id: "itm_008",
    title: "Gazebo (3x3m)",
    category: "party",
    description: "Pop-up gazebo, white. One pole has tape on it, still fine.",
    photoUrls: [
      "https://imgs.search.brave.com/d_nM62mX27Abv1NQo3ygbrUnaiD-_vqcumocZVSix4g/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFzdGVydGVudC5j/b20vYXNzZXRzL3pl/bHRlL2dyb2Vzc2Vu/LzN4My8xMDkvaW1h/Z2UtdGh1bWJfXzEw/OV9fb2dJbWFnZS9m/YWx0cGF2aWxsb24t/M3gzLW1hc3RlcnRl/bnQuMGVmZDE0YjAu/anBn",
    ],
    price: { amountCents: 0, period: "day" },
    owner: {
      id: "usr_e",
      displayName: "Themba",
      rating: 3.9,
      ratingCount: 11,
      joinedISO: "2024-09-14",
    },
    distanceKm: null,
    status: "removed",
    postedISO: "2026-04-02",
  },
];

/**
 * A fake async loader so you can practise typing data you don't
 * control yet.
 */
export function fetchItems(): Promise<Item[]> {
  return new Promise((resolve) => setTimeout(() => resolve(ITEMS), 400));
}
