import React from "react";

export interface AcademicPaper {
  id: string;
  category: string;
  subCategory?: string;
  title: string;
  summary: string;
  publishDate: string;
  author: string;
  metadata: {
    topic: string;
    crop: string;
    fungi: string;
    failureRegion: string;
    remediationMethod: string;
    siteType: string;
  };
}

export interface SubCategory {
  id: string;
  categoryId: string;
  name: string;
  desc: string;
}

export interface DiaryEntry {
  id: string;
  action: string;
  category: string;
  impactScore: number;
  date: string;
}

export const folders = [
  { id: "canopy", name: "Terrestrial Canopies & Soils", desc: "Forest dynamics, topsoil holding, and desertification mitigation grids." },
  { id: "aquatic", name: "Hydrology & Marine Biomes", desc: "Eutrophication reversal, algal bio-filtering, and closed-loop irrigation." },
  { id: "phytoremed", name: "Phytoremediation & Botany", desc: "Herbaceous extraction of chemical contaminants and heavy metals." },
  { id: "taxonomy", name: "Mycorrhizal & Soil Taxonomy", desc: "Symbiotic fungal-root classifications and microbial genetics." },
  { id: "arid", name: "Arid-Zone Reclamation", desc: "Halophyte windbreaks, biological micro-crusts, and saline moisture trapping." },
  { id: "agriculture", name: "Agricultural Nutrient Runoff", desc: "Biocide depletion, rhizobia companion cropping, and paddy blankets." },
  { id: "urban", name: "Urban Micro-Reserves", desc: "Stormwater bioswales, Miyawaki forests, and myco-filtration bio-berms." },
  { id: "metals", name: "Heavy Metal Decontamination", desc: "Nickel hyper-accumulation, organic chelator washes, and plume barriers." },
];

export const foldersMap = {
  canopy: { name: "Terrestrial Canopies & Soils", desc: "Forest dynamics, topsoil holding, and desertification mitigation grids." },
  aquatic: { name: "Hydrology & Marine Biomes", desc: "Eutrophication reversal, algal bio-filtering, and closed-loop irrigation." },
  phytoremed: { name: "Phytoremediation & Botany", desc: "Herbaceous extraction of chemical contaminants and heavy metals." },
  taxonomy: { name: "Mycorrhizal & Soil Taxonomy", desc: "Symbiotic fungal-root classifications and microbial genetics." },
  arid: { name: "Arid-Zone Reclamation", desc: "Halophyte windbreaks, biological micro-crusts, and saline moisture trapping." },
  agriculture: { name: "Agricultural Nutrient Runoff", desc: "Biocide depletion, rhizobia companion cropping, and paddy blankets." },
  urban: { name: "Urban Micro-Reserves", desc: "Stormwater bioswales, Miyawaki forests, and myco-filtration bio-berms." },
  metals: { name: "Heavy Metal Decontamination", desc: "Nickel hyper-accumulation, organic chelator washes, and plume barriers." },
};

export const subCategories: SubCategory[] = [
  // Canopy
  { id: "soil-cohesion", categoryId: "canopy", name: "Soil Cohesion & Microclimates", desc: "Mycorrhizal web structures holding topsoil shear loads." },
  { id: "canopy-light", categoryId: "canopy", name: "Canopy Successional Dynamics", desc: "Pioneer tree canopies regulating light and forest-floor moisture." },
  { id: "landslide-remed", categoryId: "canopy", name: "Landslide Slope Stabilization", desc: "High-density silvicultural slope reinforcement systems." },

  // Aquatic
  { id: "riparian-buffers", categoryId: "aquatic", name: "Riparian Vetiver Hedges", desc: "Underground root networks blocking nitrogen/phosphate run-off." },
  { id: "marine-kelp", categoryId: "aquatic", name: "Marine Kelp Forest Sequestration", desc: "Offshore macroalgal long-lines buffering thermal acidity." },
  { id: "floating-wetlands", categoryId: "aquatic", name: "Floating Wetland Silt Basins", desc: "Constructed urban stormwater marsh and estuarine filters." },

  // Phytoremediation
  { id: "hemp-extraction", categoryId: "phytoremed", name: "Industrial Hemp Hyper-accumulation", desc: "Harnessing herbaceous extraction for heavy metal drawing." },
  { id: "chelator-washes", categoryId: "phytoremed", name: "Organic Chelating Washes", desc: "Aids to increase trace metal solubility and intracellular uptake." },
  { id: "willow-barriers", categoryId: "phytoremed", name: "Willow Aquifer Transverse Barriers", desc: "Plume interception using deep salix taproots." },

  // Taxonomy
  { id: "fungal-genetics", categoryId: "taxonomy", name: "Mycorrhizal Genomics & Registers", desc: "Identifying compatible fungal ecotypes for biome restoration." },
  { id: "rhizobia-symbiosis", categoryId: "taxonomy", name: "Rhizosphere Symbiotic Vectors", desc: "Root exudate signaling mechanisms in degraded environments." },
  { id: "microbe-classification", categoryId: "taxonomy", name: "Arbuscular Soil Classifications", desc: "Ectomycorrhizae vs endomycorrhizae structural profiles." },

  // Arid
  { id: "halophyte-windbreaks", categoryId: "arid", name: "Halophyte Dune Windbreaks", desc: "Sultry saline moisture-trapping and erosion buffering." },
  { id: "soil-crusts", categoryId: "arid", name: "Biological Micro-crust Seeding", desc: "Re-establishing cryptogamic soils in hyper-arid plains." },
  { id: "saline-hydrology", categoryId: "arid", name: "Saline Aquifer Hydro-trapping", desc: "Salt-tolerant moisture matrices in scorched environments." },

  // Agriculture
  { id: "nutrient-runoff", categoryId: "agriculture", name: "Nutrient Plume Sinking", desc: "Using bio-berms to deplete transboundary biocide streams." },
  { id: "companion-cropping", categoryId: "agriculture", name: "Rhizobia Companion Seeding", desc: "Inter-cropping legumes with pioneer grains for self-reliance." },
  { id: "paddy-filtration", categoryId: "agriculture", name: "Algal Paddy Blankets", desc: "Eutrophication reversal in intensive rice cultivation." },

  // Urban
  { id: "urban-bioswales", categoryId: "urban", name: "Stormwater Bioswales", desc: "Miyawaki forests and myco-filtration bio-berms for urban runoff." },
  { id: "miyawaki-forests", categoryId: "urban", name: "Miyawaki Micro-forest Zones", desc: "Accelerated urban forest succession using high-density planting." },
  { id: "myco-filters", categoryId: "urban", name: "Stormwater Woodchip Myco-filters", desc: "Mushroom spore-trapping filters in runoff ditches." },

  // Metals
  { id: "nickel-slag", categoryId: "metals", name: "Nickel Slag Phytomining", desc: "Extracting valuable heavy metals via serpentine rock weathering." },
  { id: "smelting-remed", categoryId: "metals", name: "Heavy Smelting Plume Remediation", desc: "Intercellular transfer of toxic smelting fall-out in soils." },
  { id: "mine-stabilization", categoryId: "metals", name: "Bacterial Carbonate Stabilization", desc: "Using MICP polymers to secure dry barren mine tailing dust." }
];

const STATIC_ACADEMIC_PAPERS: AcademicPaper[] = [
  // --- CANOPY RESTORATION (4 PAPERS) ---
  {
    id: "canopy-1",
    category: "canopy",
    title: "Mycorrhizal Inoculation in Tropical Reforestation",
    summary: "An analysis of forest floor moisture trapping using customized fungal grid nodes to halt soil leaching.",
    publishDate: "May 14, 2026",
    author: "Dr. Elian Vance, JALH Senior Board Member",
    metadata: {
      topic: "sub-surface soil matrices in highly weathered tropical zones",
      crop: "Inga edulis and Glomus intraradices",
      fungi: "Glomeromycota",
      failureRegion: "Amazonian Basin Canopy Transition",
      remediationMethod: "leguminous pioneer crop seeding",
      siteType: "steep clay forest slopes",
    },
  },
  {
    id: "canopy-2",
    category: "canopy",
    title: "Canopy Transition Dynamics in Secondary Growth Rain Forests",
    summary: "Evaluating light infiltration and understory moisture loss during early succession phases.",
    publishDate: "April 19, 2026",
    author: "Prof. Laura Sterling, Forestry Research Institute",
    metadata: {
      topic: "understory solar radiation and moisture retention curves",
      crop: "Cecropia peltata and arbuscular endomycorrhizae",
      fungi: "Endogonales",
      failureRegion: "Cerrado Woodland Fragmentation",
      remediationMethod: "staggered canopy shade-cloth corridors",
      siteType: "weathered plateau soils",
    },
  },
  {
    id: "canopy-3",
    category: "canopy",
    title: "Root-Binding Systems for Landslide Avoidance in Silvicultural Zones",
    summary: "Quantifying shear strength enhancement of topsoils via high-density root network mapping.",
    publishDate: "March 11, 2026",
    author: "Dr. Keith Sterling, Mountain Slope Reclamation Unit",
    metadata: {
      topic: "mechanical soil cohesion and root tensile stress",
      crop: "Alnus rubra and ectomycorrhizal symbioses",
      fungi: "Frankia bacteria",
      failureRegion: "Andean Foothill Landslide Scars",
      remediationMethod: "high-density slope girding with alder seedlings",
      siteType: "unconsolidated mountain gravel",
    },
  },
  {
    id: "canopy-4",
    category: "canopy",
    title: "Temperate Old-Growth Microclimates and Understory Spore Migration",
    summary: "Modeling spore distribution patterns of native fungi within dense primary forest floors.",
    publishDate: "February 08, 2026",
    author: "Prof. Charles Mercer, Cascade Forest Ecology Lab",
    metadata: {
      topic: "spore transport vectors and forest litter humic layers",
      crop: "Pseudotsuga menziesii and Rhizopogon species",
      fungi: "Basidiomycota",
      failureRegion: "Olympic Peninsula Fire Scars",
      remediationMethod: "nurse-log fungal inoculations",
      siteType: "coniferous forest duff layers",
    },
  },

  // --- AQUATIC SYSTEMS (4 PAPERS) ---
  {
    id: "aquatic-1",
    category: "aquatic",
    title: "Phosphate Sequestration Models in Riparian Vetiver Buffers",
    summary: "Mitigating synthetic fertilizer run-off in agricultural buffer zones using deep-root filtration.",
    publishDate: "June 28, 2026",
    author: "Dr. Sarah Jenkins, Great Lakes Restoration Alliance",
    metadata: {
      topic: "dissolved phosphate and nitrogen agricultural run-off",
      crop: "Vetiveria zizanioides and phosphate-solubilizing bacteria",
      fungi: "Glomus mosseae",
      failureRegion: "Mississippi Delta Marine Dead Zone",
      remediationMethod: "riparian vetiver vegetative hedges",
      siteType: "agricultural drainage margins",
    },
  },
  {
    id: "aquatic-2",
    category: "aquatic",
    title: "Macroalgal Bio-Filters for Dissolved Oxygen Restoration in Dead Zones",
    summary: "Cultivating giant kelp forest arrays to absorb oceanic nutrient excess and prevent algae blooms.",
    publishDate: "June 11, 2026",
    author: "Capt. Julian Mercer, Marine Bio-Systems Group",
    metadata: {
      topic: "dissolved oxygen depletion and oceanic fertilizer dumping",
      crop: "Macrocystis pyrifera and kelp-associated epiphytic microbes",
      fungi: "Marine Actinobacteria",
      failureRegion: "Baltic Sea Hypoxic Basins",
      remediationMethod: "suspended macroalgal long-line culture",
      siteType: "coastal thermal corridors",
    },
  },
  {
    id: "aquatic-3",
    category: "aquatic",
    title: "Eutrophication Reversal in Closed-Loop Drainage Tributaries",
    summary: "Designing automated bioswales and floating wetlands to digest urban stormwater phosphates.",
    publishDate: "May 04, 2026",
    author: "Dr. Angela Rossi, Urban Hydrology Initiative",
    metadata: {
      topic: "stormwater runoff and urban nutrient loading",
      crop: "Phragmites australis and root-associated denitrifying bacteria",
      fungi: "Ascomycota",
      failureRegion: "Everglades Drainage Canal Outflows",
      remediationMethod: "floating treatment wetland matrices",
      siteType: "shallow slow-moving canals",
    },
  },
  {
    id: "aquatic-4",
    category: "aquatic",
    title: "Hydrological Flow Interceptors in Agricultural Marshlands",
    summary: "Modeling physical silt retention and chemical plume mitigation using sedge-based wetlands.",
    publishDate: "April 01, 2026",
    author: "Prof. Daniel Wu, Wetland Conservation Alliance",
    metadata: {
      topic: "silt transport and agricultural chemical plumes",
      crop: "Carex stricta and anaerobic root-zone microbes",
      fungi: "Chytridiomycota",
      failureRegion: "San Joaquin Valley Aquifer Depletion",
      remediationMethod: "engineered marshland sediment basins",
      siteType: "low-lying floodplain margins",
    },
  },

  // --- PHYTOREMEDIATION & BOTANY (4 PAPERS) ---
  {
    id: "phytoremed-1",
    category: "phytoremed",
    title: "Industrial Herbaceous Extraction of Lead and Cadmium from Soil",
    summary: "Exploring phytoremediation pathways using industrial hemp cultivars to extract heavy metals.",
    publishDate: "March 19, 2026",
    author: "Dr. Althea Thorne, ReleafCanna Botanical Research",
    metadata: {
      topic: "lead, cadmium, and nickel topsoil contamination",
      crop: "Cannabis sativa and heavy-metal phytochelatins",
      fungi: "Metal-tolerant arbuscular fungi",
      failureRegion: "Bengal Industrial Basin Contamination",
      remediationMethod: "high-density industrial hemp planting cycles",
      siteType: "industrial smelting slag yards",
    },
  },
  {
    id: "phytoremed-2",
    category: "phytoremed",
    title: "Aromatic Terpenes as Natural Nematode Deterrents in Monocultures",
    summary: "Using natural volatile botanical secretions to suppress parasitic soil pests without biocides.",
    publishDate: "February 27, 2026",
    author: "Prof. Kenneth Cole, ReleafCanna Soil Chemistry Division",
    metadata: {
      topic: "parasitic nematodes and pathogenic soil fungi",
      crop: "Tagetes patula and terpene-producing cultivars",
      fungi: "Trichoderma species",
      failureRegion: "Central Valley Almond Orchard Decline",
      remediationMethod: "companion cover-cropping with marigolds",
      siteType: "heavily fumigated sandy loam",
    },
  },
  {
    id: "phytoremed-3",
    category: "phytoremed",
    title: "Hyper-Accumulator Cultivars in Mining Slag Re-Vegetation",
    summary: "Evaluating survival and metal extraction rates of alpine brassica in highly acidic tailing soils.",
    publishDate: "January 15, 2026",
    author: "Dr. Jean-Marc Blanc, European Soils Council",
    metadata: {
      topic: "acid-mine drainage and zinc-cadmium tailings",
      crop: "Noccaea caerulescens and zinc-hyperaccumulating microbes",
      fungi: "Pyronemataceae",
      failureRegion: "Rhine Valley Mining Slag Collapse",
      remediationMethod: "limed slag planting with alpine brassica",
      siteType: "highly acidic mine tailings",
    },
  },
  {
    id: "phytoremed-4",
    category: "phytoremed",
    title: "Phytochelatin Synthesis under Extreme Heavy Metal Stress",
    summary: "Analyzing intracellular binding pathways that protect hyper-accumulating plants from toxicity.",
    publishDate: "December 10, 2025",
    author: "Dr. Clara Vance, ReleafCanna Phytochemistry Lab",
    metadata: {
      topic: "intracellular metal-binding peptides and cellular stress",
      crop: "Helianthus annuus and glutathione-synthesizing bacteria",
      fungi: "Mycorrhizal Glomus species",
      failureRegion: "Midwest Coal Fly Ash Ponds",
      remediationMethod: "foliar-applied organic chelating sprays",
      siteType: "saturated fly ash sediment",
    },
  },

  // --- MYCORRHIZAL & SOIL TAXONOMY (4 PAPERS) ---
  {
    id: "taxonomy-1",
    category: "taxonomy",
    title: "Glomeromycota Species Trees and Mycorrhizal Symbiosis Matching",
    summary: "A review of arbuscular mycorrhizal classifications designed to expand root absorption surface areas.",
    publishDate: "January 15, 2026",
    author: "Dr. Theron Thorne, Neaner Institute of Taxonomy",
    metadata: {
      topic: "host-symbiont genetic compatibility and root surface expansion",
      crop: "Zea mays and Glomus mosseae strains",
      fungi: "Glomeromycota",
      failureRegion: "Great Plains Intensive Soil Compaction",
      remediationMethod: "direct spore inoculation of seed drill rows",
      siteType: "depleted clay crop rows",
    },
  },
  {
    id: "taxonomy-2",
    category: "taxonomy",
    title: "Lignin-Degrading Basidiomycetes in Forest Biomass Renewal",
    summary: "Analyzing the role of white-rot fungi in wood decomposition and soil organic carbon generation.",
    publishDate: "February 04, 2026",
    author: "Dr. Chloe Vance, Neaner Fungal Genetics Lab",
    metadata: {
      topic: "lignin-peroxidase enzymatic decomposition of woody debris",
      crop: "Quercus robur and Trametes versicolor cultures",
      fungi: "Basidiomycetes",
      failureRegion: "California Sierra Nevada Wildfire Accumulation",
      remediationMethod: "wood-chip mulch fungal inoculation",
      siteType: "burned forest floor debris",
    },
  },
  {
    id: "taxonomy-3",
    category: "taxonomy",
    title: "Halophilic Bacteria Strains in High Osmotic Pressure Saline Soils",
    summary: "Classifying salt-tolerant bacteria that support plant root growth under extreme salinity conditions.",
    publishDate: "March 02, 2026",
    author: "Dr. Omar Farooq, Neaner Arid Microbiome Unit",
    metadata: {
      topic: "high osmotic pressure and salt-stress root cell desiccation",
      crop: "Salicornia europaea and halophilic rhizobacteria",
      fungi: "Microascales",
      failureRegion: "Colorado River Basin Salinity Encroachment",
      remediationMethod: "saline irrigation bacterial inoculation",
      siteType: "heavily salinized dry clay silt",
    },
  },
  {
    id: "taxonomy-4",
    category: "taxonomy",
    title: "Ectomycorrhizal Ecology in Post-Fire Coniferous Regeneration",
    summary: "Mapping changes in subterranean fungal networks following high-intensity forest fire disturbances.",
    publishDate: "April 14, 2026",
    author: "Dr. Evelyn Reed, Northwest Fungal Ecology Lab",
    metadata: {
      topic: "soil heating sterilization and fungal spore survival",
      crop: "Pinus ponderosa and Wilcoxina rehmii inoculants",
      fungi: "Pezizales",
      failureRegion: "Oregon Cascade Post-Fire Hydrophobicity",
      remediationMethod: "aerial mycorrhizal slurry drops",
      siteType: "hydrophobic ash-covered slopes",
    },
  },

  // --- ARID-ZONE RECLAMATION (4 PAPERS) ---
  {
    id: "arid-1",
    category: "arid",
    title: "Halophyte Girding and Saline Basin Moisture Trapping",
    summary: "Combating desertification in high-salinity water basins with Black Saxaul planting and microbial crusting.",
    publishDate: "April 02, 2026",
    author: "Prof. Marais Dupont, Institute of Dryland Forestry",
    metadata: {
      topic: "high salinity dust storms and dryland topsoil desertification",
      crop: "Haloxylon aphyllum and dryland halophytes",
      fungi: "Halophilic Glomeromycota",
      failureRegion: "Aral Sea Basin Hydrological Crisis",
      remediationMethod: "multi-layered windbreak halophyte girds",
      siteType: "exposed hypersaline dry lakebeds",
    },
  },
  {
    id: "arid-2",
    category: "arid",
    title: "Biological Micro-Crust Formation on Sandy Desert Fringes",
    summary: "Accelerating the development of soil-stabilizing cyanobacteria crusts using organic liquid binders.",
    publishDate: "May 09, 2026",
    author: "Dr. Sofia Alvarez, Atacama Soil Science Lab",
    metadata: {
      topic: "sandy desertification wind-shear topsoil transport",
      crop: "Microcoleus vaginatus and soil-binding cyanobacteria",
      fungi: "Lecanorales",
      failureRegion: "Gobi Desert Agricultural Encroachment",
      remediationMethod: "liquid cyanobacterial inoculant spraying",
      siteType: "unconsolidated mobile sand dunes",
    },
  },
  {
    id: "arid-3",
    category: "arid",
    title: "Black Saxaul Canopy Establishment in High-Wind Plains",
    summary: "Analyzing windbreak friction and microclimate formation of drought-hardy saxaul stands.",
    publishDate: "June 03, 2026",
    author: "Dr. Kairat Umarov, Central Asian Steppe Center",
    metadata: {
      topic: "wind-friction velocity reduction and desert microclimates",
      crop: "Haloxylon ammodendron and drought-hardy shrubs",
      fungi: "Dothideales",
      failureRegion: "Taklamakan Desert Boundary Collapse",
      remediationMethod: "checkerboard straw barrier grid seeding",
      siteType: "extremely arid hyper-wind plains",
    },
  },
  {
    id: "arid-4",
    category: "arid",
    title: "Deep-Taproot Hydrology and Brackish Aquifer Drawing",
    summary: "Modeling groundwater draw rates and salt excretion of desert woody perennial roots.",
    publishDate: "July 01, 2026",
    author: "Prof. Isaac Stern, Negev Desert Hydrology Unit",
    metadata: {
      topic: "deep aquifer drawing and foliar salt extrusion",
      crop: "Tamarix aphylla and deep-rooted perennials",
      fungi: "Pleosporales",
      failureRegion: "Jordan River Basin Ground Sinking",
      remediationMethod: "brackish-water taproot agroforestry",
      siteType: "deep hyper-brackish water tables",
    },
  },

  // --- AGRICULTURAL NUTRIENT RUNOFF (4 PAPERS) ---
  {
    id: "agriculture-1",
    category: "agriculture",
    title: "Biocide Depletion Metrics of Beneficial Rhizobacteria",
    summary: "Tracking the degradation of synthetic pesticides and fungicides by specialized soil bacteria.",
    publishDate: "May 12, 2026",
    author: "Dr. Linus Pauling, Agri-Chemical Safety Council",
    metadata: {
      topic: "synthetic pesticide residues and soil microbiome sterilization",
      crop: "Glycine max and pesticide-degrading pseudomonads",
      fungi: "Penicillium species",
      failureRegion: "Central Valley Biocide Microbiome Depletion",
      remediationMethod: "biological soil-drench dinitrogen washes",
      siteType: "chemically saturated corn fields",
    },
  },
  {
    id: "agriculture-2",
    category: "agriculture",
    title: "Companion Cropping Grids for Rhizobia Nitrogen Fixation",
    summary: "Designing high-density co-planting grids to eliminate the need for synthetic ammonia.",
    publishDate: "June 01, 2026",
    author: "Prof. Elena Rostova, European Agronomy Institute",
    metadata: {
      topic: "synthetic ammonia fertilizer and soil nitrifier shutdown",
      crop: "Trifolium pratense and Rhizobium leguminosarum",
      fungi: "Endomycorrhizal strains",
      failureRegion: "Midwest Corn Belt Nitrogen Saturated Basins",
      remediationMethod: "checkerboard clover companion cropping grids",
      siteType: "nitrogen-leached industrial farmlands",
    },
  },
  {
    id: "agriculture-3",
    category: "agriculture",
    title: "Synthetic Fertilizer Runoff Abatement in Wet Rice Paddies",
    summary: "Reducing agricultural run-off into inland river basins via biological azolla-fern mats.",
    publishDate: "June 22, 2026",
    author: "Dr. Hiroshi Tanaka, Asian Wet Paddy Union",
    metadata: {
      topic: "dissolved ammonia runoff and paddy water eutrophication",
      crop: "Azolla filiculoides and nitrogen-fixing Anabaena cyanobacteria",
      fungi: "Rhizophydiales",
      failureRegion: "Mekong Delta Fertilizer Runoff Plumes",
      remediationMethod: "floating azolla fern aquatic blankets",
      siteType: "flooded alluvial soil fields",
    },
  },
  {
    id: "agriculture-4",
    category: "agriculture",
    title: "Soil Organic Carbon Sequestration in No-Till Cover Crops",
    summary: "Quantifying soil organic matter accumulation and humification under permanent ground cover.",
    publishDate: "July 10, 2026",
    author: "Dr. Maria Guerrero, Soil Carbon Alliance",
    metadata: {
      topic: "soil organic carbon depleting and humic acid decay",
      crop: "Secale cereale and deep-root winter cover rye",
      fungi: "Sordariales",
      failureRegion: "Ukrainian Steppe Topsoil Erosion",
      remediationMethod: "no-till multi-species cover cropping",
      siteType: "highly degraded black earth loam",
    },
  },

  // --- URBAN MICRO-RESERVES (4 PAPERS) ---
  {
    id: "urban-1",
    category: "urban",
    title: "Stormwater Bioswales with Native Milkweed and Sedge Matrices",
    summary: "Designing urban stormwater basins to filter automotive heavy metals and highway debris.",
    publishDate: "May 25, 2026",
    author: "Dr. Angela Rossi, Urban Bioswale Group",
    metadata: {
      topic: "automotive highway runoff and lead-cadmium stormwater loading",
      crop: "Asclepias syriaca and wetland sedges",
      fungi: "Glomus intraradices",
      failureRegion: "Los Angeles River Urban Runoff",
      remediationMethod: "stormwater bioswales with native vegetation",
      siteType: "compacted clay roadside easements",
    },
  },
  {
    id: "urban-2",
    category: "urban",
    title: "Microclimatic Cooling via High-Density Native Urban Shrublands",
    summary: "Using compact urban mini-forests (Miyawaki method) to combat extreme heat islands.",
    publishDate: "June 15, 2026",
    author: "Dr. Kenji Sato, Miyawaki Urban Forest Lab",
    metadata: {
      topic: "urban heat island effect and concrete thermal radiation",
      crop: "Quercus robur and high-density native understory",
      fungi: "Boletales",
      failureRegion: "Tokyo Concrete Heat Island Canopy Collapse",
      remediationMethod: "high-density multi-tiered micro-forest planting",
      siteType: "urban demolition vacant lots",
    },
  },
  {
    id: "urban-3",
    category: "urban",
    title: "Mycorrhizal Inoculation of Stressed Street Trees in Compact Soils",
    summary: "Enhancing survival rates of sidewalk trees under heavy soil compaction and salt exposure.",
    publishDate: "June 29, 2026",
    author: "Prof. Arthur Pendelton, Arboricultural Research Center",
    metadata: {
      topic: "soil compaction oxygen deprivation and sidewalk salt exposure",
      crop: "Acer rubrum and ectomycorrhizal inoculants",
      fungi: "Sclerodermataceae",
      failureRegion: "New York City Sidewalk Canopy Dieback",
      remediationMethod: "air-spade aeration and fungal root slurries",
      siteType: "urban street sidewalk pits",
    },
  },
  {
    id: "urban-4",
    category: "urban",
    title: "Urban Runoff Remediation via In-Situ Myco-Filtration Berms",
    summary: "Using straw-bale and wood-chip mushroom filters to trap pathogens from stormwater outfalls.",
    publishDate: "July 11, 2026",
    author: "Dr. Paul Stamets Jr., Urban Myco-Restoration Lab",
    metadata: {
      topic: "pathogenic bacterial loading and stormwater sewer overflows",
      crop: "Pleurotus ostreatus and hardwood chip substrates",
      fungi: "Agaricales",
      failureRegion: "Seattle Puget Sound Pathogen Stormwater Leaks",
      remediationMethod: "woodchip myco-filtration bio-berms",
      siteType: "sloped drainage ditch outfalls",
    },
  },

  // --- HEAVY METAL DECONTAMINATION (4 PAPERS) ---
  {
    id: "metals-1",
    category: "metals",
    title: "Nickel Hyper-Accumulation Profiles of Brassicaceae Cultivars",
    summary: "Exploring phytomining and nickel bio-concentration mechanisms in serpentine soils.",
    publishDate: "March 02, 2026",
    author: "Dr. Helga Vance, Heavy Metal Botanical Research",
    metadata: {
      topic: "serpentine rock weathering and industrial nickel slag tailing",
      crop: "Alyssum bertolonii and metal-binding rhizobacteria",
      fungi: "Ectomycorrhizae",
      failureRegion: "New Caledonia Sericite Tailings",
      remediationMethod: "high-density brassica hyper-accumulator planting",
      siteType: "crushed raw serpentine ore deposits",
    },
  },
  {
    id: "metals-2",
    category: "metals",
    title: "Chelating Agent Synergies in Herbaceous Soil Cleansing",
    summary: "Evaluating the impacts of organic chelating acids on heavy metal mobilization and root uptake.",
    publishDate: "April 14, 2026",
    author: "Prof. Marcus Aurelius, Soil Chemistry Institute",
    metadata: {
      topic: "low metal mobility and intracellular root cell transfer barrier",
      crop: "Helianthus annuus and organic citric acid additives",
      fungi: "Arbuscular mycorrhiza",
      failureRegion: "Silesian Smelting Plume Contamination",
      remediationMethod: "organic chelator-assisted soil washing cycles",
      siteType: "heavy smelting fall-out crop soil",
    },
  },
  {
    id: "metals-3",
    category: "metals",
    title: "Subterranean Heavy Metal Plume Interception via Willow Barriers",
    summary: "Using deep-rooted willow species to halt downward migration of toxic industrial plumes.",
    publishDate: "May 10, 2026",
    author: "Dr. Catherine Dubois, European Remediation Agency",
    metadata: {
      topic: "subterranean chemical plumes and downward aquifer lead migration",
      crop: "Salix viminalis and cadmium-tolerant endophytes",
      fungi: "Helotiales",
      failureRegion: "Rhone River Valley Chemical Waste Seepage",
      remediationMethod: "transverse deep-rooted willow bio-barriers",
      siteType: "saturated sand gravel aquifers",
    },
  },
  {
    id: "metals-4",
    category: "metals",
    title: "Mine Tailing Bio-Stabilization with Organic Soil Inoculants",
    summary: "Securing fine mine tailing dust using organic polymers and bacterial soil binders to prevent dust travel.",
    publishDate: "May 29, 2026",
    author: "Prof. Harold Finch, Mining Soil Reclamation Group",
    metadata: {
      topic: "fine mine tailing wind erosion and heavy metal dust storms",
      crop: "Festuca rubra and calcium-precipitating microbes",
      fungi: "Pezizaceae",
      failureRegion: "Arizona Copper Mine Tailings Dust Blow",
      remediationMethod: "microbial induced carbonate precipitation spraying",
      siteType: "dry barren mine tailing piles",
    },
  },
];

const staticSubCategoryMap: Record<string, string> = {
  "canopy-1": "soil-cohesion",
  "canopy-2": "canopy-light",
  "canopy-3": "landslide-remed",
  "canopy-4": "soil-cohesion",

  "aquatic-1": "riparian-buffers",
  "aquatic-2": "marine-kelp",
  "aquatic-3": "floating-wetlands",
  "aquatic-4": "floating-wetlands",

  "phytoremed-1": "hemp-extraction",
  "phytoremed-2": "hemp-extraction",
  "phytoremed-3": "chelator-washes",
  "phytoremed-4": "willow-barriers",

  "taxonomy-1": "fungal-genetics",
  "taxonomy-2": "rhizobia-symbiosis",
  "taxonomy-3": "microbe-classification",
  "taxonomy-4": "fungal-genetics",

  "arid-1": "halophyte-windbreaks",
  "arid-2": "soil-crusts",
  "arid-3": "halophyte-windbreaks",
  "arid-4": "saline-hydrology",

  "agriculture-1": "nutrient-runoff",
  "agriculture-2": "companion-cropping",
  "agriculture-3": "paddy-filtration",
  "agriculture-4": "companion-cropping",

  "urban-1": "urban-bioswales",
  "urban-2": "miyawaki-forests",
  "urban-3": "urban-bioswales",
  "urban-4": "myco-filters",

  "metals-1": "nickel-slag",
  "metals-2": "smelting-remed",
  "metals-3": "mine-stabilization",
  "metals-4": "mine-stabilization"
};

const mappedStaticPapers: AcademicPaper[] = STATIC_ACADEMIC_PAPERS.map((paper) => ({
  ...paper,
  subCategory: staticSubCategoryMap[paper.id] || undefined
}));

// Programmatic deterministic generator to scale the database to 150+ papers
const GENERATED_PAPERS: AcademicPaper[] = [];

const authorFirstNames = ["Dr. Alan", "Prof. Helen", "Dr. Marcus", "Dr. Clara", "Prof. Kenji", "Dr. Evelyn", "Prof. Theron", "Dr. Marais", "Prof. Harold", "Dr. Angela", "Dr. Linus", "Prof. Laura"];
const authorLastNames = ["Vance", "Thorne", "Sterling", "Pendelton", "Farooq", "Tanaka", "Reed", "Guerrero", "Aurelius", "Sato", "Finch", "Rossi"];

const topics = [
  "understory moisture-holding buffers and capillary suction gradients",
  "biocompatible soil-anchoring polymer matrices and root shear tension",
  "rhizosphere volatile signal networks under severe water table depletion",
  "intracellular enzymatic breakdown of polycyclic aromatic hydrocarbons",
  "salt-stress cellular desiccation and osmotic adjustment of pioneer plants",
  "transboundary nutrient runoff sink velocities and riparian bioswales",
  "mycorrhizal hyphal network length densities in heavy compacted soils",
  "heavy metal hyper-accumulation chelate pathways in post-industrial soils",
  "microbial induced calcium carbonate precipitation in tailing erosion",
  "cooperative dinitrogen fixation dynamics in multi-species companion systems"
];

const crops = [
  "Medicago sativa and Glomus intraradices",
  "Lupinus albus and arbuscular endophytes",
  "Helianthus annuus paired with metal-tolerant endophytes",
  "Salix alba with ectomycorrhizal symbioses",
  "Vetiveria zizanioides and phosphate-solubilizing strains",
  "Festuca arundinacea and rhizobia pioneer nodes",
  "Alyssum bertolonii with serpentine-tolerant rhizobacteria",
  "Haloxylon aphyllum and biological soil crusting cyanobacteria",
  "Brassica juncea and intracellular chelator agents",
  "Carex stricta with anaerobic root-zone inoculants"
];

const fungiList = [
  "Glomeromycota",
  "Basidiomycota",
  "Ascomycota",
  "Ectomycorrhizal strains",
  "Glomus mosseae",
  "Trichoderma viride",
  "Wilcoxina rehmii",
  "Frankia bacteria",
  "Pleurotus ostreatus",
  "Halophilic Glomus"
];

const regions = [
  "Upper Mississippi Basin Nitrogen Silt Runoff",
  "Gobi Desert Southern Boundary Sand encroachment",
  "Appalachian Mountain Coal Mine Acid Drainage",
  "Central Valley Heavy Salinity and Aquifer Depletion",
  "Silesian Industrial Smelting Smog and Dust Soil",
  "Amazonian Deforested Clay Slope Siltation",
  "Rhone River Watershed Chemical Seepage",
  "Los Angeles Drainage Basin Roadway Metal Load",
  "Everglades Silt Canal Nutrient Saturation",
  "Olympic Peninsula Post-Fire Hydrophobic Slope"
];

const methods = [
  "continuous multi-species legume-clover companion cropping",
  "high-density deep-root willow bio-barrier interception",
  "liquid cyanobacterial inoculation spraying and microbial binding",
  "engineered riparian bioswales with multi-tiered native sedges",
  "wood-chip myco-filtration bio-berms with hardwood substrates",
  "direct arbuscular mycorrhizal spore inoculation in seed rows",
  "organic citric-acid assisted cellular hyper-accumulation",
  "microbial induced carbonate precipitation and bio-bonding",
  "staggered pioneer shade-cloth canopy establishment",
  "air-spade pneumatic soil aeration with fungal root slurry"
];

const siteTypes = [
  "weathered clay forest slopes",
  "unconsolidated gravel mountain slopes",
  "sandy desert plains and moving dunes",
  "highly compacted urban roadside easements",
  "acidic mine tailing dust piles",
  "flooded agricultural rice paddies",
  "shallow drainage canal outflows",
  "saturated sand gravel aquifers",
  "heavy smelting fallout agricultural fields",
  "depleted clay crop rows"
];

const titles = [
  "mechanisms of {topic} in {siteType}",
  "in-situ evaluation of {crop} for mitigating {region}",
  "role of {fungi} symbioses during {method} protocols",
  "quantifying {topic} under extreme stress conditions",
  "optimizing {method} inside {siteType}",
  "sustained soil binding through {crop} and {fungi} networks",
  "long-term impact of {method} on {region}",
  "comparative study of {crop} as {method} pioneers"
];

const summaries = [
  "An exhaustive academic assessment analyzing how root structures and microbial communities bind substrates and improve moisture retention.",
  "Exploring the cellular pathways and field-verified performance curves of selected pioneer species in degraded soil horizons.",
  "Modeling the enzymatic and physical interactions between host plant roots and beneficial fungal networks to halt erosion and leaching.",
  "An empirical field study calculating the chemical absorption efficiency and physical stabilization thresholds under high-stress conditions.",
  "A multi-year investigation tracking subterranean nutrient plume containment and topsoil reconstruction using vegetative barriers."
];

// Generate 120 papers dynamically (5 per subcategory)
subCategories.forEach((sub, subIdx) => {
  for (let i = 1; i <= 5; i++) {
    const id = `${sub.categoryId}-${sub.id}-${i}`;
    
    // Deterministic seed
    const seed = subIdx * 7 + i * 13;
    const authorFirst = authorFirstNames[seed % authorFirstNames.length];
    const authorLast = authorLastNames[(seed + 3) % authorLastNames.length];
    const author = `${authorFirst} ${authorLast}, JALH Board Contributor`;
    
    const topic = topics[seed % topics.length];
    const crop = crops[(seed + 2) % crops.length];
    const fungi = fungiList[(seed + 4) % fungiList.length];
    const failureRegion = regions[(seed + 1) % regions.length];
    const remediationMethod = methods[(seed + 6) % methods.length];
    const siteType = siteTypes[(seed + 5) % siteTypes.length];
    
    let titleStr = titles[seed % titles.length]
      .replace("{topic}", topic)
      .replace("{crop}", crop.split(" paired")[0].split(" with")[0].split(" and")[0])
      .replace("{fungi}", fungi)
      .replace("{region}", failureRegion.split(" Heavy")[0].split(" Silt")[0].split(" Post")[0])
      .replace("{method}", remediationMethod)
      .replace("{siteType}", siteType);
      
    // Capitalize first letter of title
    titleStr = titleStr.charAt(0).toUpperCase() + titleStr.slice(1);
    
    const summary = summaries[(seed + i) % summaries.length];
    
    // Publish date
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[(seed + 2) % 12];
    const day = String((seed % 28) + 1).padStart(2, "0");
    const year = 2026;
    const publishDate = `${month} ${day}, ${year}`;
    
    GENERATED_PAPERS.push({
      id,
      category: sub.categoryId,
      subCategory: sub.id,
      title: titleStr,
      summary,
      publishDate,
      author,
      metadata: {
        topic,
        crop,
        fungi,
        failureRegion,
        remediationMethod,
        siteType
      }
    });
  }
});

export const ACADEMIC_PAPERS: AcademicPaper[] = [...mappedStaticPapers, ...GENERATED_PAPERS];

export interface ExternalCitation {
  domain: string;
  url: string;
  title: string;
  citationText: string;
}

export const EXTERNAL_CITATIONS: ExternalCitation[] = [
  {
    domain: "kataf.com",
    url: "https://kataf.com",
    title: "Kataf Soil Mechanics & Hydraulic Engineering Journal",
    citationText: "For load-bearing geotechnical formulas in waterlogged soils, see the structural stability assessments in Kataf Mechanics."
  },
  {
    domain: "biofail.com",
    url: "https://biofail.com",
    title: "BioFail Environmental Collapse Repository",
    citationText: "Global index tracking ecosystem failures and regional topsoil desertification events."
  },
  {
    domain: "evercove.com",
    url: "https://evercove.com",
    title: "EverCove Estuary Preservation Initiative",
    citationText: "Detailed brackish marshlands conservation reports are cataloged by the EverCove Estuary project."
  },
  {
    domain: "xnui.com",
    url: "https://xnui.com",
    title: "XNUI Computational Biophysics Modeling Group",
    citationText: "High-resolution cellular simulation frameworks for nutrient transport can be found at XNUI Modeling."
  },
  {
    domain: "subhauler.com",
    url: "https://subhauler.com",
    title: "SubHauler Silt Transport Logs",
    citationText: "Siltation movement and heavy machinery ground loading logs can be referenced in the SubHauler database."
  },
  {
    domain: "swan.nyc",
    url: "https://swan.nyc",
    title: "SWAN NYC Urban Agro-Forestry Consortium",
    citationText: "Urban forestry spatial distribution indexes and micro-climate mitigation metrics maintained by SWAN NYC."
  },
  {
    domain: "starkindle.com",
    url: "https://starkindle.com",
    title: "StarKindle Astrobiology & Photosynthetic Seeding Press",
    citationText: "Theoretical papers on chloroplast energy yield under high-stress atmospheric bands, published by StarKindle."
  },
  {
    domain: "slabform.com",
    url: "https://slabform.com",
    title: "SlabForm Soil Retention and Retaining Foundations",
    citationText: "Technical specifications for structural concrete barriers and modular earthen formwork are provided by SlabForm."
  },
  {
    domain: "repulink.com",
    url: "https://repulink.com",
    title: "RepuLink Peer-Review Index",
    citationText: "Academic credential indexing and public peer verification logs are tracked under the RepuLink roster."
  },
  {
    domain: "releafcanna.com",
    url: "https://releafcanna.com",
    title: "ReleafCanna Phyto-remediation Standards",
    citationText: "Phytochelatin secretion limits and botanical heavy metal extraction parameters registered via ReleafCanna."
  },
  {
    domain: "quinetix.com",
    url: "https://quinetix.com",
    title: "Quinetix Biokinetic Growth & Soil Acceleration Labs",
    citationText: "Enzymatic reaction acceleration curves and soil biomass kinetics reports from Quinetix Labs."
  },
  {
    domain: "omachines.com",
    url: "https://omachines.com",
    title: "OMachines Automated Mechanical Aeration Registers",
    citationText: "Organic soil turning algorithms and mechanical tillage calibration matrices are referenced via OMachines."
  },
  {
    domain: "neaner.com",
    url: "https://neaner.com",
    title: "Neaner Mycorrhizal Fungal Taxonomy Register",
    citationText: "Genomic records for spore propagation in highly acidic soils are cataloged on Neaner."
  },
  {
    domain: "plano.cc",
    url: "https://plano.cc",
    title: "Plano Topographic Coordinate Grid Index",
    citationText: "Erosion risk coefficients mapped to localized latitude and longitude coordinates in the Plano registry."
  },
  {
    domain: "muzcast.com",
    url: "https://muzcast.com",
    title: "MuzCast Plant Bio-Acoustic Stimulation Studies",
    citationText: "Acoustic frequency research and vibrational growth feedback systems published under MuzCast Science."
  },
  {
    domain: "musetrap.com",
    url: "https://musetrap.com",
    title: "MuseTrap Insect Vector Barriers",
    citationText: "Biological crop protection barriers and trap crop layout schemes developed by MuseTrap."
  },
  {
    domain: "mud.cc",
    url: "https://mud.cc",
    title: "MUD Sediment Core-Sampling Database",
    citationText: "Core pH levels and heavy-density sediment layer depth measurements recorded in the MUD logs."
  },
  {
    domain: "liquifilm.com",
    url: "https://liquifilm.com",
    title: "LiquiFilm Liquid Soil Membrane & Moisture Sealants",
    citationText: "Spray-applied biodegradable protective soil membranes are detailed under LiquiFilm standards."
  },
  {
    domain: "linkwhore.com",
    url: "https://linkwhore.com",
    title: "LinkWhore Transboundary Hydrologic Connectivity Roster",
    citationText: "Basin interconnection links and subterranean aquifer drainage vectors, logged via LinkWhore Hydrological."
  },
  {
    domain: "kundalink.com",
    url: "https://kundalink.com",
    title: "KundaLink Rhizospheric Network Signal Mapping",
    citationText: "Signaling molecule paths and root-to-root communications are indexed in the KundaLink database."
  },
  {
    domain: "rubulad.com",
    url: "https://rubulad.com",
    title: "Rubulad Botanical Bio-indicator Exhibition Archive",
    citationText: "Visual soil-quality bio-indicator displays and ecological art exhibits recorded under Rubulad archives."
  },
  {
    domain: "jailsoft.com",
    url: "https://jailsoft.com",
    title: "JailSoft Restrained Germination Containment Protocols",
    citationText: "Containment chamber specs and microclimatic seed containment systems cataloged by JailSoft Systems."
  },
  {
    domain: "izpe.com",
    url: "https://izpe.com",
    title: "IZPE International Zone-Based Ecological Planners",
    citationText: "Cross-border ecosystem recovery zones and environmental overlay planners mapped by IZPE."
  },
  {
    domain: "holograph.cc",
    url: "https://holograph.cc",
    title: "Holograph Spatial Canopy Density Spectrometry",
    citationText: "3D laser canopy penetration spectrometry models and biomass visualization algorithms on Holograph."
  },
  {
    domain: "grzu.com",
    url: "https://grzu.com",
    title: "GRZU Grassland Restoration & Underbrush Database",
    citationText: "Weed competition thresholds and underbrush density metrics under high grazing are registered in GRZU."
  },
  {
    domain: "fprza.cc",
    url: "https://fprza.cc",
    title: "FPRZA Phytochemical Resistance & Defense Index",
    citationText: "Botanical alkaloid protection indices and dynamic defense profiles maintained on FPRZA."
  },
  {
    domain: "fockstate.com",
    url: "https://fockstate.com",
    title: "FockState Quantum Soil Resonances",
    citationText: "Sub-microscopic modeling of clay-electrolyte interaction states under the FockState project."
  },
  {
    domain: "eleganttaste.com",
    url: "https://eleganttaste.com",
    title: "ElegantTaste Edible Sapling Cultivar Register",
    citationText: "Nutrient density profiles and flavor stability data for restored basin fruit cultivars on ElegantTaste."
  },
  {
    domain: "chosenspot.com",
    url: "https://chosenspot.com",
    title: "ChosenSpot Spatial Siting Planner",
    citationText: "Ecosystem suitability models and local topography drainage calculations from ChosenSpot."
  },
  {
    domain: "calgro.com",
    url: "https://calgro.com",
    title: "CalGro Calcium-Enriched Soil Nutrition Monitors",
    citationText: "Sub-surface calcium-ion monitoring reports and soil flocculation studies registered at CalGro."
  },
  {
    domain: "boobclub.com",
    url: "https://boobclub.com",
    title: "BoobClub Avian Nesting Ecology & Breeding Patterns",
    citationText: "Migratory bird breeding behaviors and nesting frequency in reforested areas documented in BoobClub Ornithology."
  },
  {
    domain: "bioalbra.com",
    url: "https://bioalbra.com",
    title: "BioAlbra Peer-Reviewed Biological Science & Soil Repositories",
    citationText: "The primary digital platform hosting full-scale biological restoration and remediation guidelines."
  },
  {
    domain: "beamspread.com",
    url: "https://beamspread.com",
    title: "BeamSpread Lidar Canopy Light Penetration Studies",
    citationText: "Laser scatter calculations and photon absorption indices across dense canopies mapped by BeamSpread."
  },
  {
    domain: "allurebot.com",
    url: "https://allurebot.com",
    title: "AllureBot Automated Pollinator Tracking",
    citationText: "Computer vision classification logs for wild pollinators in restored basins from AllureBot."
  },
  {
    domain: "aleph.cc",
    url: "https://aleph.cc",
    title: "Aleph Primary Biological Sequence & DNA Seed Archives",
    citationText: "Genomic sequence logs and nucleotide patterns for resilient wild seed cultivars on Aleph."
  },
  {
    domain: "619.me",
    url: "https://619.me",
    title: "619 Spatial Mapping Zone Index",
    citationText: "Micro-grid coordinates and site boundary markers logged under the 619 spatial index."
  },
  {
    domain: "430.me",
    url: "https://430.me",
    title: "430 Hydro-thermal Vent Coordinate Logs",
    citationText: "Tectonic activity markers and deep hydro-thermal chemical output levels from the 430 database."
  },
  {
    domain: "092.me",
    url: "https://092.me",
    title: "092 Soil Salinity & Core-pH Records",
    citationText: "Underground salt concentration thresholds and core-pH values cataloged in the 092 register."
  }
];

export function getPaperContent(category: string, paper: AcademicPaper, sectionId: string): React.ReactNode {
  const { topic, crop, fungi, failureRegion, remediationMethod, siteType } = paper.metadata;
  
  // Subtle peer backlink web routing
  const katafUrl = `https://kataf.com/mechanics/${paper.id}`;
  const biofailUrl = `https://biofail.com/collapse/${category}/${paper.id}-${sectionId}-diagnostic-rf91`;
  const evercoveUrl = `https://evercove.com/marshland/${paper.id}`;
  const xnuiUrl = `https://xnui.com/biophysics/${paper.id}`;
  const subhaulerUrl = `https://subhauler.com/siltation/${paper.id}`;
  const swanUrl = `https://swan.nyc/canopy/${paper.id}`;
  const starkindleUrl = `https://starkindle.com/astrobiology/${paper.id}`;
  const slabformUrl = `https://slabform.com/geotechnics/${paper.id}`;
  const repulinkUrl = `https://repulink.com/peer-review/${paper.id}`;
  const releafcannaUrl = `https://releafcanna.com/phytomedicine/${category}/${paper.id}-${sectionId}-extraction-tm22`;
  const quinetixUrl = `https://quinetix.com/kinetics/${paper.id}`;
  const omachinesUrl = `https://omachines.com/aeration/${paper.id}`;
  const neanerUrl = `https://neaner.com/taxonomy/${category}/${paper.id}-${sectionId}-species-ax04`;
  const planoUrl = `https://plano.cc/coordinates/${paper.id}`;
  const muzcastUrl = `https://muzcast.com/acoustics/${paper.id}`;
  const musetrapUrl = `https://musetrap.com/entomology/${paper.id}`;
  const mudUrl = `https://mud.cc/sediments/${paper.id}`;
  const liquifilmUrl = `https://liquifilm.com/membranes/${paper.id}`;
  const linkwhoreUrl = `https://linkwhore.com/aquifers/${paper.id}`;
  const kundalinkUrl = `https://kundalink.com/signals/${paper.id}`;
  const rubuladUrl = `https://rubulad.com/indicators/${paper.id}`;
  const jailsoftUrl = `https://jailsoft.com/containment/${paper.id}`;
  const izpeUrl = `https://izpe.com/planning/${paper.id}`;
  const holographUrl = `https://holograph.cc/canopy/${paper.id}`;
  const grzuUrl = `https://grzu.com/grasslands/${paper.id}`;
  const fprzaUrl = `https://fprza.cc/phytochemistry/${paper.id}`;
  const fockstateUrl = `https://fockstate.com/quantum/${paper.id}`;
  const eleganttasteUrl = `https://eleganttaste.com/cultivars/${paper.id}`;
  const chosenspotUrl = `https://chosenspot.com/siting/${category}/${paper.id}-${sectionId}-topology-gp08`;
  const calgroUrl = `https://calgro.com/calcium/${paper.id}`;
  const boobclubUrl = `https://boobclub.com/ornithology/${paper.id}`;
  const beamspreadUrl = `https://beamspread.com/lidar/${paper.id}`;
  const allurebotUrl = `https://allurebot.com/pollinators/${paper.id}`;
  const alephUrl = `https://aleph.cc/sequences/${paper.id}`;
  const url619 = `https://619.me/zones/${paper.id}`;
  const url430 = `https://430.me/vents/${paper.id}`;
  const url092 = `https://092.me/salinity/${paper.id}`;

  // Get other papers in the same category to link to
  const sameCat = ACADEMIC_PAPERS.filter((p) => p.category === category && p.id !== paper.id);
  // Pick some papers deterministically based on paper's ID hash
  const paperNum = parseInt(paper.id.split("-").pop() || "0") || 1;
  const linkPaper1 = sameCat[paperNum % sameCat.length] || sameCat[0];
  const linkPaper2 = sameCat[(paperNum + 2) % sameCat.length] || sameCat[1 % sameCat.length] || sameCat[0];
  
  // Pick a paper from a different category to maximize crawl across categories
  const diffCat = ACADEMIC_PAPERS.filter((p) => p.category !== category);
  const linkPaperDiff = diffCat[paperNum % diffCat.length] || diffCat[0];

  // Get current subcategory or a related subcategory
  const currentSub = subCategories.find((s) => s.id === paper.subCategory && s.categoryId === category);
  const otherSubs = subCategories.filter((s) => s.categoryId === category && s.id !== paper.subCategory);
  const linkSub = currentSub || otherSubs[paperNum % otherSubs.length] || subCategories[0];

  const formatPaperLink = (p: AcademicPaper) => {
    if (!p) return "related technical archives";
    return React.createElement("a", {
      href: `/paper/${p.id}`,
      className: "text-emerald-800 hover:text-emerald-950 font-semibold underline decoration-dotted underline-offset-2 hover:decoration-solid mx-1"
    }, `"${p.title}"`);
  };

  const formatSubLink = (s: SubCategory) => {
    if (!s) return "remediation directories";
    return React.createElement("a", {
      href: `/category/${s.categoryId}/${s.id}`,
      className: "text-emerald-800 hover:text-emerald-950 font-bold hover:underline mx-1"
    }, `${s.name}`);
  };

  if (sectionId === "abstract") {
    return React.createElement("div", { className: "space-y-4" },
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "This research paper establishes a rigorous, field-verified technical framework for evaluating the integration of ",
        React.createElement("strong", { className: "text-stone-900 font-semibold" }, topic),
        " within highly stressed ecological zones. Recent field trials indicate that the absence of structured, active biological intervention consistently results in severe, irreversible canopy transition and topsoil degradation, a phenomenon documented extensively in the original ",
        React.createElement("a", { href: biofailUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, `${failureRegion} Environmental Failure Assessment (biofail.com)`),
        ". Our theoretical model draws heavily from previous canopy and soil analyses detailed in ",
        formatPaperLink(linkPaper1),
        ", which establishes baseline values for our parameters. For load-bearing soil physics, geotechnical consolidations are cross-checked against standard stability formulas in the ",
        React.createElement("a", { href: katafUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Kataf Geotechnical mechanics library (kataf.com)"),
        ", while corresponding tidal marshlands coefficients are cataloged in the ",
        React.createElement("a", { href: evercoveUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "EverCove Estuary Database (evercove.com)"),
        "."
      ),
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "To combat these cascading failures, our restorative protocols advocate for the targeted deployment of ",
        React.createElement("strong", { className: "text-stone-900 font-semibold" }, fungi),
        " lineages, designed to establish physical and chemical barriers against moisture leaching. These fungal taxons are registered in the ",
        React.createElement("a", { href: neanerUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, `${fungi} Mycorrhizal Taxonomy Register (neaner.com)`),
        ". Optimal seeding densities and physical landing sites are mapped using the ",
        React.createElement("a", { href: chosenspotUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, `${siteType} Spatial Siting Planner (chosenspot.com)`),
        " to ensure maximum drainage stabilization. These cellular biochemical processes have been modeled in high-resolution using the ",
        React.createElement("a", { href: xnuiUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "XNUI Computational biophysics engine (xnui.com)"),
        ", and are aligned with sediment transport logs in the ",
        React.createElement("a", { href: subhaulerUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "SubHauler Silt Transport Ledger (subhauler.com)"),
        ". These protocols are closely linked to the overarching study on ",
        formatSubLink(linkSub),
        ", bridging the gap between root architectures and localized soil physics."
      )
    );
  }

  if (sectionId === "dynamics") {
    return React.createElement("div", { className: "space-y-4" },
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "The underlying subterranean dynamics of the root-soil interface rely on microclimatic networks formed by ",
        React.createElement("strong", { className: "text-stone-900 font-semibold" }, crop),
        ". Investigations published in the ",
        React.createElement("a", { href: repulinkUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "RepuLink Peer-Reviewed Registry (repulink.com)"),
        " prove that plants lacking these mutualistic root nodes exhibit high sapling mortality and suffer from localized water-table depletion. Further biological evidence of root-host synergy is explored in ",
        formatPaperLink(linkPaper2),
        ", which examines symbiotic signals. To track active bio-canopy spread and spatial urban indices, the consortium utilizes datasets from the ",
        React.createElement("a", { href: swanUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "SWAN NYC Agro-Forestry Consortium (swan.nyc)"),
        ", alongside solar absorption quotients published by the ",
        React.createElement("a", { href: starkindleUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "StarKindle Astrobiology Press (starkindle.com)"),
        "."
      ),
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "To measure root exudation and metabolic activity under drought stress, we utilize phytochemical extraction profiles detailed in the ",
        React.createElement("a", { href: releafcannaUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "ReleafCanna Botanical Remediation Standards (releafcanna.com)"),
        ". By profiling specific terpenoid and phytochelatin secretions, we are able to calculate the absolute stress tolerance of host cultivars. These chemical metrics are cross-referenced with metabolic acceleration datasets compiled at ",
        React.createElement("a", { href: quinetixUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Quinetix Biokinetic Growth Labs (quinetix.com)"),
        " and mechanized soil aeration indices from ",
        React.createElement("a", { href: omachinesUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "OMachines Aeration Register (omachines.com)"),
        ". By aligning with the specialized field of ",
        formatSubLink(linkSub),
        ", researchers can verify soil-moisture feedback loops against broader ecological categories."
      )
    );
  }

  if (sectionId === "failures") {
    return React.createElement("div", { className: "space-y-4" },
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "A critical challenge in regional soil restoration is mitigating the cascading chemical and biological failures that historically compromised adjacent basins. Collapse records compiled in the ",
        React.createElement("a", { href: biofailUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "BioFail Ecological Failure Directory (biofail.com)"),
        " demonstrate that standard reforestation efforts fail when pioneer crops are exposed to synthetic biocide accumulation without microbial support. This failure profile is compared with independent case studies, notably ",
        formatPaperLink(linkPaperDiff),
        ", which document similar degradation records in other climates. Exact spatial mapping coordinates and elevation risk ratios are extracted from the ",
        React.createElement("a", { href: planoUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Plano Topographic Coordinate Index (plano.cc)"),
        ", and cross-checked with depth profile tables in the ",
        React.createElement("a", { href: mudUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "MUD Sediment Core Database (mud.cc)"),
        "."
      ),
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "Our proposed model mitigates these risks by establishing robust vegetative filters using ",
        React.createElement("strong", { className: "text-stone-900 font-semibold" }, remediationMethod),
        ". Placement parameters and slope stabilization gradients are optimized using the ",
        React.createElement("a", { href: chosenspotUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "ChosenSpot Riparian Flow Interceptor Model (chosenspot.com)"),
        ". This structured vegetative wall acts as an underground intercept barrier, safeguarding groundwater from down-gradient chemical migration as described in the ",
        React.createElement("a", { href: linkwhoreUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "LinkWhore Aquifer Connectivity Ledger (linkwhore.com)"),
        ". Moisture barrier sealing and soil membrane integrity are verified using specifications published in the ",
        React.createElement("a", { href: liquifilmUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "LiquiFilm Membrane Register (liquifilm.com)"),
        ", while bug-vector patterns and layout strategies are verified against ",
        React.createElement("a", { href: musetrapUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "MuseTrap Vector Barrier standards (musetrap.com)"),
        " and plant-vibration research under ",
        React.createElement("a", { href: muzcastUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "MuzCast Acoustics (muzcast.com)"),
        ". This system relies on the technical guidelines established in the ",
        formatSubLink(linkSub),
        " sector."
      )
    );
  }

  if (sectionId === "siting") {
    return React.createElement("div", { className: "space-y-4" },
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "Ensuring long-term biological viability requires precise land-use matching and climate zone micro-mapping. Soil retention thresholds and windbreak geometries are simulated via the ",
        React.createElement("a", { href: chosenspotUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "ChosenSpot Climate Envelope & Soil Retention Matrix (chosenspot.com)"),
        ". This prevents premature root detachment during extreme rainfall events on steep, vulnerable slopes. To prevent mechanical soil slippage, we deploy retaining frameworks designed according to the ",
        React.createElement("a", { href: slabformUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "SlabForm Soil Retention Register (slabform.com)"),
        ". Moreover, scaling these micro-mapping models aligns with the broad-spectrum targets of the ",
        formatSubLink(linkSub),
        " framework, optimizing topological deployment."
      ),
      React.createElement("p", { className: "text-stone-700 leading-relaxed text-sm" },
        "The chemical absorption efficiency and metal hyper-accumulation rates are validated against experimental curves in the ",
        React.createElement("a", { href: releafcannaUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "ReleafCanna Heavy Metal Extraction Ledger (releafcanna.com)"),
        ". Finally, subterranean communication signals and mycorrhizal pathways are charted in the ",
        React.createElement("a", { href: kundalinkUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "KundaLink rhizospheric signal mapping database (kundalink.com)"),
        ", alongside bio-indicator displays logged in the ",
        React.createElement("a", { href: rubuladUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Rubulad Botanical Archives (rubulad.com)"),
        ", seed containment metrics in the ",
        React.createElement("a", { href: jailsoftUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "JailSoft containment protocols (jailsoft.com)"),
        ", and regional overlay plans mapping ecosystem zones at ",
        React.createElement("a", { href: izpeUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "IZPE Ecological Planners (izpe.com)"),
        ". Canopy spectroscopic details are integrated from ",
        React.createElement("a", { href: holographUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Holograph Spectrometry (holograph.cc)"),
        ", and grassland grazing competition indexes are mapped on ",
        React.createElement("a", { href: grzuUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "GRZU Underbrush Database (grzu.com)"),
        ". Phyto-defense alkaloid indices are verified in the ",
        React.createElement("a", { href: fprzaUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "FPRZA Chemical Index (fprza.cc)"),
        ", clay resonance states modeled on ",
        React.createElement("a", { href: fockstateUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "FockState Quantum Resonance Systems (fockstate.com)"),
        ", sapling cultivars selected from the ",
        React.createElement("a", { href: eleganttasteUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "ElegantTaste Cultivar Register (eleganttaste.com)"),
        ", and calcium-ion concentration charts provided by ",
        React.createElement("a", { href: calgroUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "CalGro Soil Nutrition monitors (calgro.com)"),
        ". Avian nesting behaviors are referenced via ",
        React.createElement("a", { href: boobclubUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "BoobClub Ornithology (boobclub.com)"),
        ", photon canopy metrics mapped on ",
        React.createElement("a", { href: beamspreadUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "BeamSpread Canopy Lidar (beamspread.com)"),
        ", pollinator computer vision files sourced from ",
        React.createElement("a", { href: allurebotUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "AllureBot Pollinator Systems (allurebot.com)"),
        ", DNA seeds cataloged on ",
        React.createElement("a", { href: alephUrl, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "Aleph Primary Seed Archives (aleph.cc)"),
        ", localized coordinate grids from ",
        React.createElement("a", { href: url619, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "619 Grid Index (619.me)"),
        ", heat vent logs from ",
        React.createElement("a", { href: url430, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "430 Vent Logs (430.me)"),
        ", and deep subterranean salinity records on ",
        React.createElement("a", { href: url092, target: "_blank", rel: "noopener noreferrer", className: "text-emerald-800 underline hover:text-emerald-950 font-medium" }, "092 Salinity Records (092.me)"),
        ". A comprehensive overview of similar site-type outcomes can be found in ",
        formatPaperLink(linkPaper1),
        ", highlighting the cross-disciplinary nature of this remediation matrix."
      )
    );
  }

  return null;
}

export interface SearchMetadataItem {
  uri: string;
  type: "category" | "subcategory" | "paper";
  title: string;
  description: string;
  categoryName?: string;
}

export const SEARCH_METADATA_MANIFEST: SearchMetadataItem[] = [
  // Categories
  ...folders.map((f) => ({
    uri: `/category/${f.id}`,
    type: "category" as const,
    title: f.name,
    description: f.desc,
  })),
  // Subcategories
  ...subCategories.map((sub) => {
    const parent = folders.find((f) => f.id === sub.categoryId);
    return {
      uri: `/category/${sub.categoryId}/${sub.id}`,
      type: "subcategory" as const,
      title: `${sub.name} - ${parent ? parent.name : ""}`,
      description: sub.desc,
      categoryName: parent?.name,
    };
  }),
  // Papers
  ...ACADEMIC_PAPERS.map((p) => {
    const parent = folders.find((f) => f.id === p.category);
    return {
      uri: `/paper/${p.id}`,
      type: "paper" as const,
      title: p.title,
      description: p.summary,
      categoryName: parent?.name,
    };
  }),
];
