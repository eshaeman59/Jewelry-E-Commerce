import auroraRing from "../assets/images/aurora-ring.jpg";
import lunaRing from "../assets/images/luna-ring.jpg";
import celesteHaloRing from "../assets/images/celeste-halo-ring.jpg";
import seraphinaGoldRing from "../assets/images/seraphina-gold-ring.jpg";
import opalGraceRing from "../assets/images/opal-grace-ring.jpg";
import amaraSolitaireRing from "../assets/images/amara-solitaire-ring.jpg";
import celesteBracelet from "../assets/images/celeste-bracelet.jpg";
import elanBracelet from "../assets/images/elan-bracelet.jpg";
import aureliaChainBracelet from "../assets/images/aurelia-chain-bracelet.jpg";
import pearlEssenceBracelet from "../assets/images/pearl-essence-bracelet.jpg";
import serenaCharmBracelet from "../assets/images/serena-charm-bracelet.jpg";
import valentinaCuffBracelet from "../assets/images/valentina-cuff-bracelet.jpg";
import solaraPendant from "../assets/images/solara-pendant.jpg";
import pearlPendant from "../assets/images/pearl-pendant.jpg";
import aureliaHeartPendant from "../assets/images/aurelia-heart-pendant.jpg";
import serenePearlPendant from "../assets/images/serene-pearl-pendant.jpg";
import amaraTeardropPendant from "../assets/images/amara-teardrop-pendant.jpg";
import celestiaStarPendant from "../assets/images/celestia-star-pendant.jpg";
import eleganceSet from "../assets/images/elegance-set.jpg";
import goldenSet from "../assets/images/golden-set.jpg";
import royalPearlSet from "../assets/images/royal-pearl-set.jpg";
import aureliaLuxeSet from "../assets/images/aurelia-luxe-set.jpg";
import seraphinaCrystalSet from "../assets/images/seraphina-crystal-set.jpg";
import celesteSignatureSet from "../assets/images/celeste-signature-set.jpg";
import isabellaDiamondRing from "../assets/images/isabella-diamond-ring.jpg";
import elaraRoseGoldRing from "../assets/images/elara-rose-gold-ring.jpg";
import isabellaPearlBracelet from "../assets/images/isabella-pearl-bracelet.jpg";
import elaraGoldChainBracelet from "../assets/images/elara-gold-chain-bracelet.jpg";
import isabellaMoonPendant from "../assets/images/isabella-moon-pendant.jpg";
import elaraPearlPendant from "../assets/images/elara-pearl-pendant.jpg";
import isabellaRoyalSet from "../assets/images/isabella-royal-set.jpg";
import elaraPearlCollection from "../assets/images/elara-pearl-collection.jpg";

const products = [
  {
    id: 1,
    name: "Aurora Ring",
    category: "Rings",
    price: 45,
    image: auroraRing,
  },
  {
    id: 2,
    name: "Luna Ring",
    category: "Rings",
    price: 50,
    image: lunaRing,
  },
  {
    id: 3,
    name: "Celeste Halo Ring",
    category: "Rings",
    price: 58,
    image: celesteHaloRing,
  },
  {
    id: 4,
    name: "Seraphina Gold Ring",
    category: "Rings",
    price: 72,
    image: seraphinaGoldRing,
  },
  {
    id: 5,
    name: "Opal Grace Ring",
    category: "Rings",
    price: 68,
    image: opalGraceRing,
  },
  {
    id: 6,
    name: "Amara Solitaire Ring",
    category: "Rings",
    price: 78,
    image: amaraSolitaireRing,
  },

  {
    id: 7,
    name: "Celeste Bracelet",
    category: "Bracelets",
    price: 55,
    image: celesteBracelet,
  },
  {
    id: 8,
    name: "Élan Bracelet",
    category: "Bracelets",
    price: 60,
    image: elanBracelet,
  },
  {
    id: 9,
    name: "Aurelia Chain Bracelet",
    category: "Bracelets",
    price: 65,
    image: aureliaChainBracelet,
  },
  {
    id: 10,
    name: "Pearl Essence Bracelet",
    category: "Bracelets",
    price: 72,
    image: pearlEssenceBracelet,
  },
  {
    id: 11,
    name: "Serena Charm Bracelet",
    category: "Bracelets",
    price: 69,
    image: serenaCharmBracelet,
  },
  {
    id: 12,
    name: "Valentina Cuff Bracelet",
    category: "Bracelets",
    price: 82,
    image: valentinaCuffBracelet,
  },

  {
    id: 13,
    name: "Solara Pendant",
    category: "Pendants",
    price: 65,
    image: solaraPendant,
  },
  {
    id: 14,
    name: "Pearl Drop Pendant",
    category: "Pendants",
    price: 70,
    image: pearlPendant,
  },
  {
    id: 15,
    name: "Aurelia Heart Pendant",
    category: "Pendants",
    price: 74,
    image: aureliaHeartPendant,
  },
  {
    id: 16,
    name: "Serene Pearl Pendant",
    category: "Pendants",
    price: 79,
    image: serenePearlPendant,
  },
  {
    id: 17,
    name: "Amara Teardrop Pendant",
    category: "Pendants",
    price: 85,
    image: amaraTeardropPendant,
  },
  {
    id: 18,
    name: "Celestia Star Pendant",
    category: "Pendants",
    price: 88,
    image: celestiaStarPendant,
  },

  {
    id: 19,
    name: "Mini Elegance Set",
    category: "Jewelry Sets",
    price: 85,
    image: eleganceSet,
  },
  {
    id: 20,
    name: "Golden Touch Set",
    category: "Jewelry Sets",
    price: 95,
    image: goldenSet,
  },
  {
    id: 21,
    name: "Royal Pearl Set",
    category: "Jewelry Sets",
    price: 105,
    image: royalPearlSet,
  },
  {
    id: 22,
    name: "Aurelia Luxe Set",
    category: "Jewelry Sets",
    price: 120,
    image: aureliaLuxeSet,
  },
  {
    id: 23,
    name: "Seraphina Crystal Set",
    category: "Jewelry Sets",
    price: 135,
    image: seraphinaCrystalSet,
  },
  {
    id: 24,
    name: "Celeste Signature Set",
    category: "Jewelry Sets",
    price: 145,
    image: celesteSignatureSet,
  },

  {
    id: 25,
    name: "Isabella Diamond Ring", category: "Rings",
    price: 85,
    image: isabellaDiamondRing,
  },
  {
    id: 26,
    name: "Elara Rose Gold Ring", category: "Rings",
    price: 92,
    image: elaraRoseGoldRing,
  },

  {
    id: 27,
    name: "Isabella Pearl Bracelet", category: "Bracelets",
    price: 78,
    image: isabellaPearlBracelet,
  },
  {
    id: 28,
    name: "Elara Gold Chain Bracelet", category: "Bracelets",
    price: 88, image: elaraGoldChainBracelet,
  },


  {
    id: 29,
    name: "Isabella Moon Pendant", category: "Pendants",
    price: 82,
    image: isabellaMoonPendant,
  },
  {
    id: 30,
    name: "Elara Pearl Pendant", category: "Pendants",
    price: 86,
    image: elaraPearlPendant,
  },
  {
    id: 31,
    name: "Isabella Royal Set",
    category: "Jewelry Sets",
    price: 125, image: isabellaRoyalSet,
  },
  {
    id: 32,
    name: "Elara Pearl Collection", category: "Jewelry Sets",
    price: 140,
    image: elaraPearlCollection,
  },


];

export default products;