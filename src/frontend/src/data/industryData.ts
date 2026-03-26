export interface Product {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  products: Product[];
}

export interface Segment {
  slug: string;
  title: string;
  icon: string;
  categories: Category[];
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function makeProducts(
  items: { name: string; description: string; image?: string }[],
): Product[] {
  return items.map((p) => ({ ...p, slug: toSlug(p.name) }));
}

export const industryData: Segment[] = [
  {
    slug: "dry-mix-construction-chemicals",
    title: "Dry Mix Construction Chemicals",
    icon: "Layers",
    categories: [
      {
        slug: "tile-adhesives",
        title: "Tile Adhesives",
        description:
          "Cement-based adhesives used for fixing tiles on floors and walls across residential and commercial applications.",
        products: makeProducts([
          {
            name: "C1 – Standard Tile Adhesive",
            description:
              "General purpose adhesive used for installation of ceramic tiles on floors and walls.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/6b57c5eb-4136-4ed0-8f27-d6e4e8754937_7f56a963b625a687bcaae19e55bc2f22_comfyui_1172479b_00001-019d28de-abee-7378-80d7-3e1d1930dd8c-6.png",
          },
          {
            name: "C1T – Non-Slip Tile Adhesive",
            description:
              "Improved vertical slip resistance suitable for wall tile installation.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/3bef1785-87fc-4e43-9945-d2e8a907daa2_e56359963a60b2455ca57e853f93a79a_comfyui_27919a26_00001-019d28de-ab8a-7225-9db7-0d338c559810-2.png",
          },
          {
            name: "C2TE – High Performance Tile Adhesive",
            description:
              "Extended open-time adhesive designed for large format tiles and demanding site conditions.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/4482878d-d925-4fd8-b09b-9affbf361ab2_4b08a3538fcc21355a5274dbd9be7511_comfyui_a9058483_00001-019d28de-abbf-72af-8b5b-4a28e220bec0-5.png",
          },
          {
            name: "C2TES1 – Flexible Tile Adhesive",
            description:
              "High performance adhesive with flexibility suitable for temperature variation and complex substrates.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/be807a83-ab29-49af-837f-a7646f980192_4bbc00628ca81e703e73bd6a030077ee_comfyui_38aa779b_00001-019d28de-ab45-777d-9779-40a7f1a96aae-1.png",
          },
          {
            name: "Glass Mosaic Adhesive",
            description:
              "Flexible, high performance, polymer modified white adhesive used for glass mosaic and glass tiles.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/ee992974-64bb-4b54-a56b-e7d84366f7b3_d4df96a83ba049ef31e7779a3f38f3c2_comfyui_dbffa557_00001-019d28de-ab80-718a-b9ef-5f529395f0da-3.png",
          },
          {
            name: "AAC Block Joint Mortar",
            description:
              "High-strength adhesive for quick and firm laying of AAC blocks with thin joints.",
            // ✏️ TO CHANGE THIS PRODUCT'S IMAGE: Update the path below
            image:
              "/assets/uploads/1ad6ab8d-bd39-4587-9e13-e1ce23661951_ed9f012418ab2a432a6c0bdbd6798cf8_comfyui_21289fab_00001-019d28de-ab3f-7022-be91-5401b5d5aae8-4.png",
          },
        ]),
      },
      {
        slug: "tile-grouts",
        title: "Tile Grouts",
        description:
          "Materials used for filling joints between tiles, providing strength, sealing and aesthetic finish.",
        products: makeProducts([
          {
            name: "Fine Grouts",
            description:
              "Smooth finish grouts suitable for narrow tile joints and aesthetic applications.",
          },
          {
            name: "Sanded Grouts",
            description:
              "Grouts with added sand for wider joints providing better strength and crack resistance.",
          },
          {
            name: "Epoxy Grouts",
            description:
              "High-performance chemical-resistant grouts used in industrial and hygienic environments.",
          },
        ]),
      },
      {
        slug: "skim-coat-wall-putty",
        title: "Skim Coat / Wall Putty",
        description:
          "Surface finishing materials used to smoothen walls and improve paint adhesion.",
        products: makeProducts([
          {
            name: "Coarse Putty",
            description:
              "Base levelling material used to correct uneven wall surfaces.",
          },
          {
            name: "Fine Wall Putty",
            description:
              "Smooth finishing layer applied before painting for superior surface quality.",
          },
          {
            name: "Waterproofing Wall Putty",
            description:
              "Putty with water-resistant properties for exterior and damp-prone areas.",
          },
          {
            name: "Polymer Plaster",
            description:
              "Improved plaster with enhanced bonding and crack resistance.",
          },
          {
            name: "Crack Filler Powder",
            description:
              "Material used to fill minor cracks before surface finishing.",
          },
        ]),
      },
      {
        slug: "repair-mortars",
        title: "Repair Mortars",
        description:
          "Specialized materials used for repair, restoration and strengthening of damaged concrete structures.",
        products: makeProducts([
          {
            name: "Repair & Rehabilitation Systems",
            description:
              "Special mortars used for restoring damaged concrete structures and improving durability.",
          },
          {
            name: "Micro Concrete – Ready-to-use Repair Mortar",
            description:
              "Flowable repair material used for structural repairs and jacketing applications.",
          },
        ]),
      },
    ],
  },
  {
    slug: "waterproofing-systems",
    title: "Waterproofing Systems",
    icon: "Droplets",
    categories: [
      {
        slug: "cementitious-waterproofing",
        title: "Cementitious Waterproofing",
        description:
          "Two-component or single-component systems used for protecting concrete structures from water ingress.",
        products: makeProducts([
          {
            name: "2K Elastomeric Cementitious Waterproofing Coating",
            description:
              "Flexible two-component system for waterproofing of concrete structures.",
          },
          {
            name: "2K High-Flex Waterproofing Coating",
            description:
              "High elasticity coating suitable for areas with movement and stress.",
          },
          {
            name: "Primer for 2K Waterproofing Systems",
            description:
              "Base coat used to improve bonding of waterproofing systems.",
          },
        ]),
      },
      {
        slug: "acrylic-coatings",
        title: "Acrylic Coatings",
        description:
          "Water-based flexible coatings used for waterproofing of walls and terraces.",
        products: makeProducts([
          {
            name: "1K Acrylic Elastomeric Wall Coat",
            description:
              "Flexible coating used for exterior wall waterproofing.",
          },
          {
            name: "1K Fibre-Reinforced Terrace Coat",
            description:
              "Reinforced coating for terrace waterproofing with improved durability.",
          },
        ]),
      },
      {
        slug: "pu-coatings",
        title: "PU Coatings",
        description:
          "Polyurethane-based coatings providing high flexibility and long-term waterproofing performance.",
        products: makeProducts([
          {
            name: "1K PU Waterproofing Coat (Wall & Terrace)",
            description:
              "Polyurethane-based coating providing seamless and durable waterproofing.",
          },
        ]),
      },
      {
        slug: "waterproofing-liquid",
        title: "Waterproofing Liquid",
        description:
          "Liquid additives and coatings used for enhancing water resistance in concrete and plaster systems.",
        products: makeProducts([
          {
            name: "Integral Waterproofing Compound",
            description:
              "Additive used in concrete to reduce water permeability.",
          },
          {
            name: "SBR Latex",
            description:
              "Improves bonding strength and water resistance in cement systems.",
          },
          {
            name: "Premium Latex Waterproofing Agent",
            description:
              "Advanced polymer additive for enhanced durability and adhesion.",
          },
          {
            name: "Acrylic Polymer Waterproofing Solution",
            description:
              "Multi-purpose waterproofing liquid for various applications.",
          },
          {
            name: "Water Repellent",
            description: "Surface treatment to reduce water absorption.",
          },
        ]),
      },
    ],
  },
  {
    slug: "specialty-construction-chemicals",
    title: "Specialty Construction Chemicals",
    icon: "FlaskConical",
    categories: [
      {
        slug: "concrete-admixtures",
        title: "Concrete Admixtures",
        description:
          "Chemical additives used to improve workability, strength and durability of concrete.",
        products: makeProducts([
          {
            name: "High Early Strength Super Plasticiser",
            description: "Improves early strength and workability of concrete.",
          },
          {
            name: "Retarding Plasticiser (RMC Application)",
            description:
              "Delays setting time for better workability in ready-mix concrete.",
          },
          {
            name: "High-performance Plasticiser with Slump Retention",
            description: "Maintains workability for longer duration.",
          },
          {
            name: "PCE-based Retarding Super Plasticiser",
            description:
              "Advanced admixture providing superior flow and strength.",
          },
        ]),
      },
      {
        slug: "industrial-grouts",
        title: "Industrial Grouts",
        description:
          "High-strength grouting materials used for structural applications and equipment foundations.",
        products: makeProducts([
          {
            name: "Non-Shrink Grout",
            description:
              "High-strength cementitious grout used for structural applications.",
          },
          {
            name: "Epoxy Grout",
            description:
              "High-performance grout with chemical resistance and high strength.",
          },
        ]),
      },
      {
        slug: "industrial-flooring",
        title: "Industrial Flooring",
        description:
          "Systems used for strengthening and finishing industrial floors for durability and wear resistance.",
        products: makeProducts([
          {
            name: "Industrial Floor Hardener",
            description:
              "Dry-shake material applied on concrete floors for improved wear resistance.",
          },
          {
            name: "Self-Leveling Mortar",
            description: "Flowable compound used for leveling uneven floors.",
          },
        ]),
      },
      {
        slug: "protective-coatings",
        title: "Protective Coatings",
        description:
          "Special coatings used to protect structures from moisture, chemicals and environmental damage.",
        products: makeProducts([
          {
            name: "Efflorescence-Resistant Waterproof Primer",
            description:
              "Primer that prevents salt deposits and improves coating life.",
          },
          {
            name: "Eco Primer for Wall & Terrace Systems",
            description: "Environment-friendly primer for surface preparation.",
          },
          {
            name: "Fibre-Reinforced Crack Filler Paste",
            description:
              "Paste used for filling cracks and improving durability.",
          },
          {
            name: "Transparent Polymer-based Clear Waterproofing",
            description:
              "Clear coating providing waterproofing without affecting surface appearance.",
          },
        ]),
      },
    ],
  },
];

export function findSegmentBySlug(slug: string): Segment | undefined {
  return industryData.find((s) => s.slug === slug);
}

export function findCategoryBySlug(
  segmentSlug: string,
  categorySlug: string,
): Category | undefined {
  const segment = findSegmentBySlug(segmentSlug);
  return segment?.categories.find((c) => c.slug === categorySlug);
}
