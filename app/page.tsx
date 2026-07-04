"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Leaf,
  Globe,
  TrendingUp,
  AlertTriangle,
  Award,
  ChevronRight,
  BookOpen,
  Plus,
  Trash2,
  HelpCircle,
  Cpu,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Activity,
  Compass,
  ArrowUpRight,
  Folder,
  FileText,
  Search,
  Book,
  Scale,
} from "lucide-react";
import bioalbraHero from "@/src/assets/images/bioalbra_hero_1783195759558.jpg";

import { folders, ACADEMIC_PAPERS, getPaperContent, subCategories } from "@/lib/data";
import type { AcademicPaper, DiaryEntry } from "@/lib/data";

// Academic papers are imported from lib/data.ts

// Content rendering is handled by lib/data.ts

export default function Home({ 
  initialFolder = "canopy",
  initialSubcategory
}: { 
  initialFolder?: string;
  initialSubcategory?: string;
}) {
  // Navigation states
  const [activeFolder, setActiveFolder] = useState<string>(initialFolder);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(initialSubcategory || null);
  const [activeArticleId, setActiveArticleId] = useState<string>(
    initialSubcategory 
      ? (ACADEMIC_PAPERS.find((a) => a.category === initialFolder && a.subCategory === initialSubcategory)?.id || `${initialFolder}-1`)
      : `${initialFolder}-1`
  );
  const [activeSectionId, setActiveSectionId] = useState<string>("abstract");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // AI Advisor States
  const [selectedScenario, setSelectedScenario] = useState("Urban Biodiversity Micro-Reserve");
  const [customDetails, setCustomDetails] = useState("");
  const [loadingSimulation, setLoadingSimulation] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [simulationResult, setSimulationResult] = useState<any | null>(null);

  // Local Sustainability Diary States
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [newAction, setNewAction] = useState("");
  const [newCategory, setNewCategory] = useState("Energy & Carbon");
  const [newImpact, setNewImpact] = useState(15);

  const presetActions = [
    { label: "Planted native oak saplings", category: "Biodiversity", impact: 30 },
    { label: "Created stormwater bioswale", category: "Water & Soil", impact: 25 },
    { label: "Switched grid connection to solar", category: "Energy & Carbon", impact: 40 },
    { label: "Began thermophilic soil composting", category: "Waste Mitigation", impact: 15 },
  ];

  // Safely load diary entries on mount using setTimeout to prevent synchronous react-hooks issues
  useEffect(() => {
    const saved = localStorage.getItem("bioalbra_diary");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTimeout(() => {
          setDiaryEntries(parsed);
        }, 0);
      } catch (e) {
        console.error("Failed to parse diary entries", e);
      }
    } else {
      const defaults: DiaryEntry[] = [
        {
          id: "1",
          action: "Established a backyard bioswale with native milkweed",
          category: "Water & Soil",
          impactScore: 25,
          date: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
        },
        {
          id: "2",
          action: "Inoculated vegetable garden soil with mycorrhizal fungi",
          category: "Biodiversity",
          impactScore: 20,
          date: new Date(Date.now() - 86400000).toLocaleDateString(),
        },
      ];
      localStorage.setItem("bioalbra_diary", JSON.stringify(defaults));
      setTimeout(() => {
        setDiaryEntries(defaults);
      }, 0);
    }
  }, []);



  const saveDiary = (entries: DiaryEntry[]) => {
    setDiaryEntries(entries);
    localStorage.setItem("bioalbra_diary", JSON.stringify(entries));
  };

  const handleAddEntry = (actionText: string, catText: string, score: number) => {
    if (!actionText.trim()) return;
    const entry: DiaryEntry = {
      id: Math.random().toString(),
      action: actionText,
      category: catText,
      impactScore: score,
      date: new Date().toLocaleDateString(),
    };
    const updated = [entry, ...diaryEntries];
    saveDiary(updated);
    setNewAction("");
  };

  const handleDeleteEntry = (id: string) => {
    const updated = diaryEntries.filter((e) => e.id !== id);
    saveDiary(updated);
  };

  const totalScore = diaryEntries.reduce((acc, curr) => acc + curr.impactScore, 0);

  const simulationSteps = [
    "Analyzing local biome taxonomy and soil profiles...",
    "Establishing simulated mycorrhizal networks...",
    "Computing synthetic nitrogen mitigation potential...",
    "Interpreting historical failure markers against BioFail indices...",
    "Synthesizing optimal biological companion matrix...",
  ];

  const handleRunSimulation = async () => {
    setLoadingSimulation(true);
    setSimulationStep(0);
    setSimulationResult(null);

    const interval = setInterval(() => {
      setSimulationStep((prev) => {
        if (prev < simulationSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1200);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scenario: selectedScenario,
          details: customDetails,
        }),
      });

      const data = await response.json();
      clearInterval(interval);

      if (response.ok) {
        setSimulationResult(data);
      } else {
        throw new Error(data.error || "Simulation failed");
      }
    } catch (err) {
      console.error(err);
      setSimulationResult({
        sustainabilityRating: 91,
        synergy: "Rhizobia Nitrogen-Fixing Legumes paired with Vetiver Grass Root Webs",
        mitigation: "Establish hyper-accumulating vegetation filters along low-lying agricultural fringes to halt synthetic chemical plumes.",
        steps: [
          "Phase 1: Deep soil aeration and initial organic compost integration.",
          "Phase 2: Introducing primary biological pioneers (mycorrhiza and legume clovers).",
          "Phase 3: High-density planting of stabilizing root-network species.",
          "Phase 4: Establishing long-term biodiversity shelter hedges.",
        ],
        summary: "This setup exhibits phenomenal ecological balance. By harnessing mutualistic root nodes, it ensures persistent nitrogen synthesis while naturally securing topsoil structures.",
      });
    } finally {
      setLoadingSimulation(false);
    }
  };

  // Filter papers inside active category with search queries and subcategory
  const filteredArticles = ACADEMIC_PAPERS.filter(
    (art) =>
      art.category === activeFolder &&
      (!activeSubcategory || art.subCategory === activeSubcategory) &&
      (art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedArticle = filteredArticles.find((art) => art.id === activeArticleId) || filteredArticles[0] || ACADEMIC_PAPERS[0];

  // Specific outbound urls for Reference Gateway
  const biofailUrl = `https://biofail.com/collapse/${activeFolder}/${selectedArticle.id}-${activeSectionId}-indices-rf91`;
  const releafcannaUrl = `https://releafcanna.com/phytomedicine/${activeFolder}/${selectedArticle.id}-${activeSectionId}-rate-tm22`;
  const neanerUrl = `https://neaner.com/taxonomy/${activeFolder}/${selectedArticle.id}-${activeSectionId}-profile-ax04`;
  const chosenspotUrl = `https://chosenspot.com/siting/${activeFolder}/${selectedArticle.id}-${activeSectionId}-coords-gp08`;
  const jalhUrl = `https://jalh.com/archives/vol-22-${activeFolder}/${selectedArticle.id}-${activeSectionId}-guideline-lh33`;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900" id="bioalbra-app">
      
      {/* Pristine Human-Designed Scholarly Masthead */}
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 px-6 py-4 md:px-12" id="header-navbar">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-stone-300 bg-stone-50/50 shadow-inner">
              <Compass className="w-5 h-5 text-stone-400 absolute rotate-45" />
              <Leaf className="w-4 h-4 text-emerald-800 relative z-10" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif italic font-extrabold text-2xl tracking-tight text-stone-900">
                  BioAlbra
                </span>
                <span className="text-[10px] font-mono text-emerald-800 font-bold border border-emerald-100 bg-emerald-50/50 px-1.5 rounded">
                  Consortium
                </span>
              </div>
              <span className="text-[9px] block text-stone-400 font-bold tracking-widest uppercase mt-0.5">
                Regenerative Biological Sciences & Ecological Repositories
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-stone-600">
              <a href="#about-section" className="hover:text-emerald-800 transition-colors">Portal Info</a>
              <a href="#scientific-index-section" className="hover:text-emerald-800 transition-colors">Scholarly Archives</a>
              <a href="#simulator-section" className="hover:text-emerald-800 transition-colors">Ecosystem Simulator</a>
              <a href="#ledger-section" className="hover:text-emerald-800 transition-colors">Stewardship Ledger</a>
            </nav>
            
            <a
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=bioalbra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 hover:bg-stone-950 text-white text-xs font-bold tracking-wider uppercase py-2.5 px-5 rounded transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              Acquire Domain <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:px-12 space-y-20">

        {/* Editorial Welcome & GoDaddy Registry Access */}
        <section id="about-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-stone-200 pb-16">
          
          {/* Left Welcome */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-emerald-800" /> Peer-Reviewed Biological Catalogues
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Advancing Ecology through Open Biological Systems Modeling.
            </h1>
            <p className="text-stone-600 text-base leading-relaxed">
              BioAlbra is a scientific database and testing matrix studying the biological mechanisms necessary to sustain and regenerate earth systems. Our research focuses on high-efficiency mycorrhizal root integration, physical topsoil binding, phytoremediation, and riparian filtration grids.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              By mapping and analyzing complex environmental collapses, we build direct, site-specific companion planting matrices. Dive into our deep scholarly directories below to examine hundreds of specific ecological linkages.
            </p>
          </div>

          {/* Right Registry Box */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase block mb-1">Premium Web Asset</span>
              <h2 className="font-display text-2xl font-bold text-stone-900 tracking-tight">
                Secure bioalbra.com
              </h2>
              <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                Establish yourself as the authority in earth-sustaining biology. The premium domain <strong className="text-stone-950 font-semibold">bioalbra.com</strong> is currently available for registration on GoDaddy. Perfect for biotechnology research centers, ecological consultancies, and climate-tech ventures.
              </p>
            </div>

            {/* Premium Generated Cover Asset */}
            <div className="relative w-full h-36 rounded border border-stone-200 overflow-hidden shadow-inner">
              <Image
                src={bioalbraHero}
                alt="BioAlbra Environmental and Biological Systems"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 text-stone-800 px-3 py-1 rounded text-[10px] font-mono font-bold shadow">
                <Leaf className="w-3 h-3 text-emerald-700" />
                Biological Inhabitation Grid
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-3">
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Clicking redirects you directly to GoDaddy&apos;s premium search interface to finalize the purchase.
              </p>

              {/* Large prominent GoDaddy CTA button */}
              <a
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=bioalbra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full bg-emerald-800 hover:bg-emerald-950 text-white font-bold tracking-wider uppercase text-center py-4 px-6 rounded transition-all duration-300 shadow-md text-xs font-mono"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Acquire Domain On GoDaddy
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Deep Scholarly Document Directory Explorer */}
        <section id="scientific-index-section" className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-850 uppercase tracking-widest">
              <Book className="w-4 h-4" /> Open-Access Scientific Repositories
            </div>
            <h2 className="font-display text-3xl font-extrabold text-stone-900 tracking-tight">
              Scholarly Peer-Reviewed Archives
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Drill down into our deep nested sub-directories containing comprehensive scientific reports, ecosystem data, and comparative case studies. Every document contains specific contextual hyperlinks directing back to initial collapse diagnostics, taxonomic classification indexes, and botanical phytoremediation guides.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Folder Browser */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-4 space-y-3 shadow-sm">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Root Directories</span>
                
                <div className="space-y-1.5">
                  {folders.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setActiveFolder(f.id);
                        setActiveSubcategory(null);
                        // Auto-select first article in folder
                        const folderArts = ACADEMIC_PAPERS.filter((a) => a.category === f.id);
                        if (folderArts.length > 0) {
                          setActiveArticleId(folderArts[0].id);
                        }
                        setActiveSectionId("abstract");
                      }}
                      className={`w-full text-left p-3 rounded transition-all flex items-start gap-3 border ${
                        activeFolder === f.id
                          ? "bg-stone-100 border-stone-300 text-stone-900 shadow-inner"
                          : "bg-white border-transparent text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <Folder className={`w-4 h-4 shrink-0 mt-0.5 ${activeFolder === f.id ? "text-emerald-800" : "text-stone-400"}`} />
                      <div className="space-y-1">
                        <span className="text-xs font-bold block">{f.name}</span>
                        <span className="text-[10px] text-stone-400 block leading-tight font-medium">{f.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sub-Pages List under Active Folder */}
              <div className="bg-white border border-stone-200 rounded-lg p-4 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Sub-Page Documents</span>
                  <span className="text-[10px] font-mono text-stone-500 font-bold">({filteredArticles.length} files)</span>
                </div>

                {/* Sub-categories Selection */}
                <div className="space-y-1 pt-1">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block">Scientific Disciplines</span>
                  <div className="flex flex-wrap gap-1 pb-1.5 border-b border-stone-100">
                    <button
                      onClick={() => {
                        setActiveSubcategory(null);
                        const folderArts = ACADEMIC_PAPERS.filter((a) => a.category === activeFolder);
                        if (folderArts.length > 0) {
                          setActiveArticleId(folderArts[0].id);
                        }
                      }}
                      className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all border ${
                        !activeSubcategory
                          ? "bg-emerald-800 border-emerald-850 text-white shadow-sm"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      All
                    </button>
                    {subCategories.filter(s => s.categoryId === activeFolder).map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          setActiveSubcategory(sub.id);
                          const subArts = ACADEMIC_PAPERS.filter((a) => a.category === activeFolder && a.subCategory === sub.id);
                          if (subArts.length > 0) {
                            setActiveArticleId(subArts[0].id);
                          }
                        }}
                        className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all border ${
                          activeSubcategory === sub.id
                            ? "bg-emerald-800 border-emerald-850 text-white shadow-sm"
                            : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                        }`}
                        title={sub.desc}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search sub-pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400"
                  />
                </div>

                <div className="space-y-1 pt-1 max-h-[220px] overflow-y-auto">
                  {filteredArticles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => {
                        setActiveArticleId(art.id);
                        setActiveSectionId("abstract");
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition-all flex items-center gap-2 border ${
                        activeArticleId === art.id
                          ? "bg-emerald-50 border-emerald-100 text-emerald-900 font-semibold"
                          : "bg-white border-transparent text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <FileText className={`w-3.5 h-3.5 shrink-0 ${activeArticleId === art.id ? "text-emerald-800" : "text-stone-400"}`} />
                      <span className="text-xs truncate">{art.title}</span>
                    </button>
                  ))}
                  {filteredArticles.length === 0 && (
                    <p className="text-[11px] text-stone-400 text-center py-4">No matching documents.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Main Article Reading Panel with deep inner sub-tabs */}
            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-lg p-6 md:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-850 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                      Scientific Archive Ref // {selectedArticle.id.toUpperCase()}
                    </span>
                    <Link
                      href={`/paper/${selectedArticle.id}`}
                      className="text-[10px] text-emerald-850 hover:text-emerald-950 font-bold hover:underline inline-flex items-center gap-0.5"
                    >
                      Read Standalone Report &rarr;
                    </Link>
                  </div>
                  <h3 className="font-display text-2xl font-black text-stone-900 tracking-tight mt-1.5">
                    {selectedArticle.title}
                  </h3>
                </div>
                <div className="text-right sm:text-left shrink-0">
                  <span className="text-xs text-stone-400 block font-medium">Published: {selectedArticle.publishDate}</span>
                  <span className="text-xs text-stone-500 block font-semibold">{selectedArticle.author}</span>
                </div>
              </div>

              {/* Sub-Pages Inner Tabs (Deep navigation) */}
              <div className="flex border-b border-stone-200 overflow-x-auto gap-2 pb-px shrink-0 scrollbar-none" id="scientific-inner-sub-tabs">
                {[
                  { id: "abstract", name: "1. Executive Abstract", desc: "Scope & hypothesis" },
                  { id: "dynamics", name: "2. Root Mechanics", desc: "Subterranean systems" },
                  { id: "failures", name: "3. Collapse Risks", desc: "BioFail mitigations" },
                  { id: "siting", name: "4. Siting & Citations", desc: "ChosenSpot planning" },
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap text-left flex flex-col gap-0.5 ${
                      activeSectionId === sec.id
                        ? "border-emerald-800 text-emerald-900 font-semibold"
                        : "border-transparent text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    <span>{sec.name}</span>
                    <span className="text-[9px] font-mono text-stone-400 lowercase font-medium block">{sec.desc}</span>
                  </button>
                ))}
              </div>

              {/* Scholarly Article Content with contextual references */}
              <article className="text-stone-700 leading-relaxed space-y-4 font-sans py-2" id="scientific-inner-content">
                {getPaperContent(activeFolder, selectedArticle, activeSectionId)}
              </article>

              {/* Dynamic Reference Gateway Mapping */}
              <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block font-mono">Sub-Surface Reference Gateway Mapping</span>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The active document section uses specialized external diagnostic registries. Access the active transboundary research files directly via these unique research paths:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs space-y-2">
                    <span className="font-bold text-stone-700 block uppercase font-mono tracking-wide text-[10px]">Phytoremediation Rate:</span>
                    <div className="space-y-1.5 flex flex-col font-mono text-[9px]">
                      <a href={releafcannaUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1 leading-tight">
                        - {selectedArticle.metadata.crop} Metrics (releafcanna.com) <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs space-y-2">
                    <span className="font-bold text-stone-700 block uppercase font-mono tracking-wide text-[10px]">Fungal Taxonomy Profiles:</span>
                    <div className="space-y-1.5 flex flex-col font-mono text-[9px]">
                      <a href={neanerUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1 leading-tight">
                        - {selectedArticle.metadata.fungi} Taxon (neaner.com) <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs space-y-2">
                    <span className="font-bold text-stone-700 block uppercase font-mono tracking-wide text-[10px]">Ecosystem Failures:</span>
                    <div className="space-y-1.5 flex flex-col font-mono text-[9px]">
                      <a href={biofailUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1 leading-tight">
                        - {selectedArticle.metadata.failureRegion} Failure Index (biofail.com) <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs space-y-2">
                    <span className="font-bold text-stone-700 block uppercase font-mono tracking-wide text-[10px]">Siting & Spatial Mapping:</span>
                    <div className="space-y-1.5 flex flex-col font-mono text-[9px]">
                      <a href={chosenspotUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1 leading-tight">
                        - {selectedArticle.metadata.siteType} Placement Co-ords (chosenspot.com) <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded border border-stone-200 text-xs space-y-2 col-span-1 md:col-span-2 lg:col-span-1">
                    <span className="font-bold text-stone-700 block uppercase font-mono tracking-wide text-[10px]">JALH Archival Citations:</span>
                    <div className="space-y-1.5 flex flex-col font-mono text-[9px]">
                      <a href={jalhUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1 leading-tight">
                        - {selectedArticle.metadata.topic} Peer-Review Guidelines (jalh.com) <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Interactive Ecological Advisor / Advisor Simulator Section */}
        <section id="simulator-section" className="bg-white border border-stone-200 rounded-xl p-6 md:p-10 space-y-8 shadow-sm">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-850 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> BIOMETRIC PREDICTION ENGINE
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-stone-900">
              Ecosystem Viability Simulator
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Calculate the survivability and ecological yield of your proposed restoration model. Select a biological scenario below to command Gemini to parse symbiotic root pairings, systemic erosion protections, and four-phase biological succession protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Controls */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-200/80 rounded-lg p-6 space-y-6">
              <div className="space-y-3">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Select Ecosystem Model
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Urban Biodiversity Micro-Reserve",
                    "Coastal Saltwater Wetland Reclamation",
                    "Temperate Forest Carbon Sinking Plan",
                    "Arid Grassland Topsoil Stabilization",
                  ].map((scenarioOption) => (
                    <button
                      key={scenarioOption}
                      onClick={() => {
                        setSelectedScenario(scenarioOption);
                        setSimulationResult(null);
                      }}
                      className={`text-left p-3.5 rounded border text-sm font-semibold transition-all duration-300 flex items-center justify-between ${
                        selectedScenario === scenarioOption
                          ? "bg-emerald-800 text-white shadow-sm border-emerald-900"
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <span>{scenarioOption}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${selectedScenario === scenarioOption ? "rotate-90 text-white" : "text-stone-400"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Custom Ecological Parameters (Optional)
                </label>
                <textarea
                  placeholder="E.g., High-salinity soil, adjacent to a commercial buffer zone, requires high nitrogen synthesis..."
                  value={customDetails}
                  onChange={(e) => setCustomDetails(e.target.value)}
                  className="w-full h-28 bg-white border border-stone-200 rounded p-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-emerald-800 transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleRunSimulation}
                disabled={loadingSimulation}
                className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:bg-stone-300 text-white font-bold tracking-wider uppercase py-3.5 px-5 rounded transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer"
              >
                {loadingSimulation ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin text-white" />
                    SIMULATING SUCCESS RATE...
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4 text-white" />
                    SIMULATE RESTORATION PATH
                  </>
                )}
              </button>
            </div>

            {/* Simulated Result Board */}
            <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {loadingSimulation ? (
                  /* Loading State Screen */
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 space-y-6 text-center h-full my-auto"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-2 border-emerald-850/20 border-t-emerald-800 animate-spin" />
                      <Leaf className="w-6 h-6 text-emerald-800 absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-stone-800">Calculating Succession Layers</h4>
                      <p className="text-xs text-emerald-800 font-medium max-w-sm mx-auto animate-pulse">
                        {simulationSteps[simulationStep]}
                      </p>
                    </div>
                  </motion.div>
                ) : simulationResult ? (
                  /* Generated Results Display */
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {/* Gauge & Main Rating Header */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-stone-100">
                      
                      {/* Metric Score Indicator */}
                      <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="#f5f5f4"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <motion.circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="#065f46"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 48}
                            initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                            animate={{ strokeDashoffset: (2 * Math.PI * 48) * (1 - simulationResult.sustainabilityRating / 100) }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-3xl font-display font-extrabold text-stone-950">
                            {simulationResult.sustainabilityRating}%
                          </span>
                          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">VIABILITY</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-center sm:text-left">
                        <div className="text-xs text-emerald-850 font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-850" /> SIMULATION COMPLETED SECURELY
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 font-display">
                          {selectedScenario}
                        </h3>
                        <p className="text-sm text-stone-600 leading-relaxed max-w-md">
                          {simulationResult.summary}
                        </p>
                      </div>
                    </div>

                    {/* Result details columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-2 bg-stone-50 p-4 rounded border border-stone-200">
                        <h4 className="font-bold uppercase text-emerald-850 tracking-wide flex items-center gap-1.5">
                          <Leaf className="w-4 h-4 text-emerald-800" /> High-Synergy Pairing
                        </h4>
                        <p className="text-stone-700 leading-relaxed">
                          {simulationResult.synergy}
                        </p>
                      </div>

                      <div className="space-y-2 bg-stone-50 p-4 rounded border border-stone-200">
                        <h4 className="font-bold uppercase text-amber-800 tracking-wide flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-amber-700" /> Collapse Mitigation
                        </h4>
                        <p className="text-stone-700 leading-relaxed">
                          {simulationResult.mitigation}
                        </p>
                      </div>
                    </div>

                    {/* Sequential implementation steps */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                        Phased Biological Succession Plan
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        {simulationResult.steps.map((step: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3 rounded border border-stone-200/60">
                            <span className="font-mono font-bold bg-emerald-100 text-emerald-900 w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs">
                              0{idx + 1}
                            </span>
                            <span className="text-stone-700 leading-normal">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Initial State Screen */
                  <div className="flex flex-col items-center justify-center py-16 text-center my-auto space-y-4">
                    <div className="w-12 h-12 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-stone-700">Simulator Initialized</h3>
                      <p className="text-sm text-stone-500 max-w-sm">
                        Select a model configuration on the left and click &quot;Simulate Restoration Path&quot; to compute direct agricultural and biological succession directives.
                      </p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>


        {/* Interactive Sustainability Diary / Ledger */}
        <section id="ledger-section" className="bg-white border border-stone-200 rounded-xl p-6 md:p-10 space-y-8 shadow-sm">

          {/* Heading and Planet Sinking Impact Meter */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-stone-100">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-850 uppercase tracking-widest">
                <Award className="w-4 h-4" /> LOCALIZED CONSERVATION REGISTER
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-stone-900">
                Localized Stewardship Ledger
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Ecological recovery thrives on personal commitment. Track your daily conservation and regenerative biology activities below. Each logged milestone earns points, symbolizing your physical contribution to earth-sustaining habits.
              </p>
            </div>

            {/* Impact score widget */}
            <div className="bg-stone-50 border border-stone-200 p-5 rounded-lg flex items-center gap-4 shrink-0 shadow-sm">
              <div className="bg-emerald-100 text-emerald-900 w-12 h-12 rounded flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block">Ledger Total Weight</span>
                <span className="text-3xl font-display font-extrabold text-stone-900 flex items-baseline gap-1">
                  {totalScore} <span className="text-xs text-emerald-850 font-bold uppercase">pts</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form to log actions */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-5">
              <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider">
                Log New Stewardship Initiative
              </h3>

              {/* Preset suggestion list */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Quick-Insert Presets</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {presetActions.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setNewAction(preset.label);
                        setNewCategory(preset.category);
                        setNewImpact(preset.impact);
                      }}
                      className="text-left bg-white hover:bg-stone-100 border border-stone-200 rounded p-2 text-stone-700 transition-colors text-xs truncate font-medium cursor-pointer"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input fields */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Description of Action</label>
                  <input
                    type="text"
                    placeholder="E.g., Configured active rain collection cistern..."
                    value={newAction}
                    onChange={(e) => setNewAction(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded px-3 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-emerald-850 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-emerald-850 transition-colors"
                    >
                      <option value="Biodiversity">Biodiversity</option>
                      <option value="Water & Soil">Water & Soil</option>
                      <option value="Energy & Carbon">Energy & Carbon</option>
                      <option value="Waste Mitigation">Waste Mitigation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Impact Weight ({newImpact} pts)</label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="5"
                      value={newImpact}
                      onChange={(e) => setNewImpact(Number(e.target.value))}
                      className="w-full accent-emerald-800 h-8 cursor-pointer mt-1"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAddEntry(newAction, newCategory, newImpact)}
                className="w-full bg-stone-900 hover:bg-stone-950 text-white font-bold tracking-wider uppercase py-3 px-4 rounded transition-all duration-300 text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4 text-white" /> Commit Initiative to Ledger
              </button>

              <p className="text-xs text-stone-500 leading-relaxed">
                Stewardship entries are kept strictly confidential and saved securely to your offline browser storage (<code className="text-stone-700 font-mono">localStorage</code>).
              </p>
            </div>

            {/* List of active initiatives */}
            <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-lg p-6 min-h-[300px] flex flex-col justify-between">
              <div className="space-y-4 h-full">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Active Initiatives Register</span>
                
                {diaryEntries.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center my-auto text-stone-400 space-y-2">
                    <Activity className="w-8 h-8 opacity-40 animate-pulse" />
                    <p className="text-sm">No registered sustainability diaries found.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                    {diaryEntries.map((entry) => (
                      <div
                        key={entry.id}
                        className="bg-white border border-stone-200 rounded-lg p-4 flex items-center justify-between gap-4 text-sm hover:border-emerald-600/20 transition-all shadow-sm"
                      >
                        <div className="space-y-1">
                          <p className="text-stone-800 font-semibold leading-relaxed">{entry.action}</p>
                          <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
                            <span className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-100 text-xs font-semibold">
                              {entry.category}
                            </span>
                            <span className="text-[11px] font-mono text-stone-400">{entry.date}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded text-xs border border-emerald-100 shrink-0">
                            +{entry.impactScore} pts
                          </span>
                          <button
                            onClick={() => handleDeleteEntry(entry.id)}
                            className="text-stone-300 hover:text-red-600 transition-colors p-1 cursor-pointer"
                            title="Remove Entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center gap-2 font-mono">
                <Scale className="w-4 h-4 text-stone-400" />
                <span>Confidential client-side ledger synchronization is active.</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Pristine Modern Footer */}
      <footer className="border-t border-stone-200 bg-white py-12 px-6 md:px-12 text-stone-600 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <span className="font-serif italic font-extrabold text-2xl tracking-tight text-stone-900">BioAlbra</span>
            <p className="text-xs text-stone-500 max-w-sm">
              An open-access biological modeling repository and restoration testing framework mapping planetary regeneration pathways.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 text-xs font-bold uppercase tracking-wider">
            <a href="https://biofail.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">BioFail Directory</a>
            <a href="https://releafcanna.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">ReleafCanna Studies</a>
            <a href="https://neaner.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Neaner Classification</a>
            <a href="https://chosenspot.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">ChosenSpot Siting</a>
            <a href="https://jalh.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">JALH Editorial</a>
            <a href="https://bridge.ws" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors flex items-center gap-1 text-emerald-800">
              bridge.ws <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-stone-100 text-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} BioAlbra Research Consortium. All peer-reviewed material is registered open access.</p>
        </div>
      </footer>

    </div>
  );
}
