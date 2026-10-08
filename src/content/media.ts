import type { ImageAsset } from "@/types/media";

// Single source of truth for every image in /public/images.
// Dimensions are the real pixel sizes measured when the assets were processed (see docs/assets.md).

export const brandImages = {
  logoPrimary: {
    src: "/images/brand/logo-primary.png",
    alt: "Crystal Kizor",
    width: 770,
    height: 348,
  },
  logoHorizontal: {
    src: "/images/brand/logo-horizontal.png",
    alt: "Crystal Kizor",
    width: 539,
    height: 48,
  },
  logoMonogram: {
    src: "/images/brand/logo-monogram.png",
    alt: "Crystal Kizor",
    width: 207,
    height: 165,
  },
  logoSignature: {
    src: "/images/brand/logo-signature.png",
    alt: "Crystal Kizor signature",
    width: 410,
    height: 137,
  },
} as const satisfies Record<string, ImageAsset>;

export const portraitImages = {
  standingStudio: {
    src: "/images/portraits/standing-studio.webp",
    alt: "Crystal Kizor leaning on a stone worktable in her studio, in front of a wall of project drawings and photographs",
    width: 1024,
    height: 1536,
  },
  armsCrossedMoodboard: {
    src: "/images/portraits/arms-crossed-moodboard.webp",
    alt: "Crystal Kizor in a brown blazer with arms folded, in front of a moodboard of material samples and site plans",
    width: 1374,
    height: 1145,
  },
  podcastMicrophone: {
    src: "/images/portraits/podcast-microphone.webp",
    alt: "Crystal Kizor at her desk speaking into a podcast microphone, surrounded by books and material samples",
    width: 1374,
    height: 1145,
  },
  editorialArmchair: {
    src: "/images/portraits/editorial-armchair.webp",
    alt: "Crystal Kizor seated in a leather armchair beside a large potted tree",
    width: 1373,
    height: 1145,
  },
  deskWhiteShirt: {
    src: "/images/portraits/desk-white-shirt.webp",
    alt: "Crystal Kizor at her desk in a white shirt, chin resting on her hand, with stone samples and plans in front of her",
    width: 1374,
    height: 1145,
  },
  deskBrownShirt: {
    src: "/images/portraits/desk-brown-shirt.webp",
    alt: "Crystal Kizor at her desk in a brown shirt, with a laptop, stone samples and floor plans around her",
    width: 1374,
    height: 1145,
  },
} as const satisfies Record<string, ImageAsset>;

export const projectImages = {
  natureHome: {
    frontTreeShade: {
      src: "/images/projects/nature-home/front-tree-shade.webp",
      alt: "Front courtyard of Nature Home, shaded by a mature tree with autumn-coloured leaves",
      width: 804,
      height: 1080,
    },
    cantileverShade: {
      src: "/images/projects/nature-home/cantilever-shade.webp",
      alt: "Covered terrace at Nature Home, where a deep cantilevered roof shades the walkway and seating",
      width: 809,
      height: 1080,
    },
    backGarden: {
      src: "/images/projects/nature-home/back-garden.webp",
      alt: "Back garden at Nature Home, with paving slabs set into grass beside the house",
      width: 795,
      height: 1062,
    },
    slattedDivider: {
      src: "/images/projects/nature-home/slatted-divider.webp",
      alt: "Seating nook framed by a full-height timber slat divider",
      width: 809,
      height: 1078,
    },
    familySittingRoom: {
      src: "/images/projects/nature-home/family-sitting-room.webp",
      alt: "Bright family sitting room with tall windows, louvred shutters and cream sofas",
      width: 950,
      height: 1440,
    },
    study: {
      src: "/images/projects/nature-home/study.webp",
      alt: "Timber-panelled study with a desk and built-in shelving beside a balcony window",
      width: 1022,
      height: 1363,
    },
  },
  natureHome2: {
    gardenExterior: {
      src: "/images/projects/nature-home-2/garden-exterior.webp",
      alt: "Low, earth-toned house opening onto a garden through a wide shaded veranda",
      width: 1024,
      height: 1024,
    },
    courtyardBedroom: {
      src: "/images/projects/nature-home-2/courtyard-bedroom.webp",
      alt: "Bedroom with earth walls opening onto a planted courtyard and pool",
      width: 980,
      height: 1080,
    },
    kitchen: {
      src: "/images/projects/nature-home-2/kitchen.webp",
      alt: "Timber kitchen beneath an open lattice roof, looking out to the garden",
      width: 890,
      height: 1080,
    },
    dining: {
      src: "/images/projects/nature-home-2/dining.webp",
      alt: "Dining room whose full-height glazing slides open onto a garden deck",
      width: 867,
      height: 1080,
    },
  },
  communityCentre: {
    courtyardTree: {
      src: "/images/projects/community-centre/courtyard-tree.webp",
      alt: "People gathered beneath a large tree in a circular courtyard, framed by a timber-ribbed roof",
      width: 1920,
      height: 2400,
    },
    exterior: {
      src: "/images/projects/community-centre/exterior.webp",
      alt: "Brick community centre with a broad overhanging roof, set among trees, with people gathered outside",
      width: 2400,
      height: 1798,
    },
    screenGallery: {
      src: "/images/projects/community-centre/screen-gallery.webp",
      alt: "Curved gallery where perforated brick screens cast patterns of light across the floor",
      width: 1921,
      height: 2400,
    },
    amphitheatre: {
      src: "/images/projects/community-centre/amphitheatre.webp",
      alt: "Tiered seating inside a round hall with a timber roof and small square windows",
      width: 2326,
      height: 2326,
    },
    corridor: {
      src: "/images/projects/community-centre/corridor.webp",
      alt: "Shaded corridor lined with timber louvred doors, where people sit and talk",
      width: 1800,
      height: 2400,
    },
  },
} as const satisfies Record<string, Record<string, ImageAsset>>;
