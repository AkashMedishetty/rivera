/**
 * Media manifest — Unsplash photos, free license, verified clean
 * (no third-party brand marks, no religious or cultural product context,
 * no premium-tier images). https://unsplash.com/license
 */

export const photo = {
  // Hero / luxury gifting
  heroGift: "1612195325560-9d241f1e25cc", // macaroon with brown satin ribbon — considered, delicate
  heroHamper: "1625552186152-668cd2f0b707", // gift boxes with pink ribbon + dried roses
  heroPaper: "1759563876829-47c081a2afd9", // black gift box with gold ribbon on yellow
  heroFestive: "1597935258269-c94aca687fbd", // white gift box with red ribbon
  heroWrap: "1672853827236-e2ccf90761a1", // orange wrapped gift with bow

  // Categories
  apparel: "1720514496161-914011a9ee02", // two plain polo shirts (white + blue)
  drinkwareMug: "1622240506921-042a4e71c172", // white ceramic mug
  drinkwareBottle: "1486381950565-e3ada9f1a370", // black thermos flask on wood
  luggageLeather: "1578237493287-8d4d2b03591a", // black leather tote
  luggageBackpack: "1655303219938-3a771279c801", // backpack on grass
  officeStationery: "1471107340929-a87cd0f5b5f3", // fountain pen on spiral notebook — editorial
  officeNotebook: "1761322572550-967ea8c0bfd9", // open notebook
  electronicsHeadphones: "1565209559032-5a73935b73d7", // minimalist speaker on white — no logos
  ecoBamboo: "1589365252845-092198ba5334", // bamboo sticks in ceramic bowl
  ecoToothbrush: "1553691475-f38e4026275b", // bamboo toothbrushes
  hamperChocolate: "1683899800683-f35a8faa561d", // chocolate box on wood
  awardTrophy: "1779696413490-153947f18bae", // golden trophy + blue/purple award
  homewareCandle: "1612179543058-ab74d388e0ce", // white candle in glass holder
  wellnessTowels: "1766727923667-4686db7e9bcb", // folded towels with teal accent
} as const;

export type PhotoKey = keyof typeof photo;

export function unsplash(key: PhotoKey, width = 1600): string {
  const id = photo[key];
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=75&auto=format&fit=crop&ixlib=rb-4.1.0`;
}
