import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ACADEMIC_PAPERS, foldersMap, getPaperContent, subCategories } from "@/lib/data";
import { 
  ArrowLeft, 
  BookOpen, 
  Calendar, 
  User, 
  MapPin, 
  Tag, 
  Compass, 
  AlertTriangle,
  ChevronRight,
  Database
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ACADEMIC_PAPERS.map((paper) => ({ id: paper.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const paper = ACADEMIC_PAPERS.find((p) => p.id === resolvedParams.id);
  if (!paper) {
    return {
      title: "Research Paper Not Found | BioAlbra Consortium",
    };
  }

  const category = foldersMap[paper.category as keyof typeof foldersMap];
  const titleText = `${paper.title} | BioAlbra Research Database`;
  const descText = `${paper.summary} Author: ${paper.author}. Explore scientific data on ${paper.metadata.topic}.`;

  return {
    title: titleText,
    description: descText,
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.bioalbra.com/paper/${paper.id}`,
      type: "article",
      siteName: "BioAlbra Consortium",
      publishedTime: paper.publishDate,
      authors: [paper.author],
      images: [
        {
          url: "https://picsum.photos/seed/bioalbra/1200/630",
          width: 1200,
          height: 630,
          alt: `${paper.title} - Academic Research Paper`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: descText,
      images: ["https://picsum.photos/seed/bioalbra/1200/630"],
    },
  };
}

export default async function PaperPage({ params }: Props) {
  const resolvedParams = await params;
  const paper = ACADEMIC_PAPERS.find((p) => p.id === resolvedParams.id);
  if (!paper) {
    notFound();
  }

  const categoryId = paper.category;
  const category = foldersMap[categoryId as keyof typeof foldersMap];

  // Get related papers in the same category
  const relatedPapers = ACADEMIC_PAPERS.filter(
    (p) => p.category === categoryId && p.id !== paper.id
  );

  const subCategory = paper.subCategory
    ? subCategories.find((s) => s.id === paper.subCategory && s.categoryId === categoryId)
    : undefined;

  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "BioAlbra Home",
      "item": "https://www.bioalbra.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": category ? category.name : categoryId,
      "item": `https://www.bioalbra.com/category/${categoryId}`,
    },
  ];

  if (subCategory) {
    itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": subCategory.name,
      "item": `https://www.bioalbra.com/category/${categoryId}/${subCategory.id}`,
    });
  }

  itemListElement.push({
    "@type": "ListItem",
    "position": subCategory ? 4 : 3,
    "name": paper.title,
    "item": `https://www.bioalbra.com/paper/${paper.id}`,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Banner / Breadcrumb Nav */}
      <nav className="border-b border-stone-200/80 bg-white sticky top-0 z-10 shadow-sm" id="paper-navigation">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-stone-500 text-xs sm:text-sm">
            <Link 
              href="/" 
              className="hover:text-emerald-800 transition-colors font-medium flex items-center"
              id="back-home-crumb"
            >
              BioAlbra Home
            </Link>
            <ChevronRight className="w-3 shrink-0 text-stone-400" />
            <Link 
              href={`/category/${categoryId}`} 
              className="hover:text-emerald-800 transition-colors font-medium truncate max-w-[150px] sm:max-w-xs"
              id="category-crumb"
            >
              {category ? category.name : categoryId}
            </Link>
            <ChevronRight className="w-3 shrink-0 text-stone-400 hidden sm:block" />
            <span className="text-stone-400 font-normal truncate max-w-[150px] hidden sm:block">
              {paper.id}
            </span>
          </div>

          <Link
            href={`/category/${categoryId}`}
            className="text-stone-600 hover:text-stone-900 text-xs font-semibold flex items-center space-x-1.5 border border-stone-200 rounded-lg px-2.5 py-1.5 hover:bg-stone-50 transition-colors bg-white shadow-sm shrink-0"
            id="back-button-link"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Category View</span>
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8" id="paper-main-content">
        <article className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header metadata */}
          <header className="space-y-4" id="paper-header">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-50 rounded-full uppercase border border-emerald-100">
                {category ? category.name : categoryId}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {paper.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3.5xl font-serif font-semibold text-stone-900 tracking-tight leading-tight" id="paper-title">
              {paper.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 pt-2 border-t border-stone-100 font-medium">
              <div className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-emerald-700" />
                <span>{paper.author}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-stone-400" />
                <span>Published: {paper.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Database className="w-4 h-4 text-stone-400" />
                <span>Peer-Reviewed Status: Verified</span>
              </div>
            </div>
          </header>

          {/* Abstract callout */}
          <section className="p-5 sm:p-6 bg-[#fbfbf9] rounded-xl border-l-4 border-emerald-600 space-y-2" id="paper-abstract-section">
            <h2 className="text-xs font-semibold tracking-wider text-emerald-800 uppercase flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Abstract Summary</span>
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed font-sans italic">
              &ldquo;{paper.summary}&rdquo;
            </p>
          </section>

          {/* Technical Metadata Matrix */}
          <section className="space-y-4" id="paper-technical-matrix">
            <h2 className="text-sm font-semibold tracking-wider text-stone-500 uppercase">
              Scientific Classification & Parameters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <Tag className="w-3 h-3 text-stone-400" />
                  <span>Sub-surface Topic</span>
                </span>
                <span className="text-sm font-semibold text-stone-800 mt-1 capitalize leading-snug">
                  {paper.metadata.topic}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-emerald-600" />
                  <span>Restorative Crops / Flora</span>
                </span>
                <span className="text-sm font-semibold text-emerald-900 mt-1 capitalize leading-snug">
                  {paper.metadata.crop}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <Database className="w-3 h-3 text-emerald-600" />
                  <span>Fungal / Microbial Lineage</span>
                </span>
                <span className="text-sm font-semibold text-emerald-900 mt-1 capitalize leading-snug">
                  {paper.metadata.fungi}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                  <span>Primary Failure Region</span>
                </span>
                <span className="text-sm font-semibold text-amber-950 mt-1 capitalize leading-snug">
                  {paper.metadata.failureRegion}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-stone-400" />
                  <span>Remediation Method</span>
                </span>
                <span className="text-sm font-semibold text-stone-800 mt-1 capitalize leading-snug">
                  {paper.metadata.remediationMethod}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-stone-200/60 bg-stone-50/50 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>Siting Topology</span>
                </span>
                <span className="text-sm font-semibold text-stone-800 mt-1 capitalize leading-snug">
                  {paper.metadata.siteType}
                </span>
              </div>
            </div>
          </section>

          {/* Interactive Simulator Redirect Callout */}
          <div className="p-4 sm:p-5 rounded-xl border border-emerald-200/60 bg-emerald-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-emerald-900 flex items-center space-x-1.5">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>Simulation Sandbox Ready</span>
              </h3>
              <p className="text-xs text-emerald-800/80 leading-relaxed max-w-xl">
                This academic report includes telemetry formulas that are modeled live in our interactive system database. Click to load these remediation variables.
              </p>
            </div>
            <Link
              href={`/category/${categoryId}`}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-850 hover:bg-emerald-900 transition-colors rounded-lg shadow-sm shrink-0 whitespace-nowrap"
            >
              Initialize Simulator Node &rarr;
            </Link>
          </div>

          {/* Paper Content Sections */}
          <div className="border-t border-stone-100 pt-6 space-y-8" id="paper-content-chapters">
            <div className="space-y-3">
              <h2 className="text-lg font-serif font-semibold text-stone-900">
                1.0 Research Scope & Abstract
              </h2>
              {getPaperContent(categoryId, paper, "abstract")}
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif font-semibold text-stone-900">
                2.0 Rhizosphere & Symbiotic Dynamics
              </h2>
              {getPaperContent(categoryId, paper, "dynamics")}
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif font-semibold text-stone-900">
                3.0 Degradation Records & Failures
              </h2>
              {getPaperContent(categoryId, paper, "failures")}
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-serif font-semibold text-stone-900">
                4.0 Spatial Siting & Topology Sizing
              </h2>
              {getPaperContent(categoryId, paper, "siting")}
            </div>
          </div>

          {/* Footer of report */}
          <footer className="border-t border-stone-200 pt-6 text-center text-xs text-stone-400 font-mono">
            BIOALBRA ARCHIVAL RECORD &bull; CLASSIFICATION ID: {paper.id} &bull; CONTI-MATRIX MODEL V4
          </footer>
        </article>

        {/* RELATED PAPERS - Deep Crawl Interlinking Mesh! */}
        <section className="mt-12 space-y-4" id="related-papers-section">
          <h2 className="text-base sm:text-lg font-serif font-semibold text-stone-900 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-emerald-800" />
            <span>More Research in {category ? category.name : categoryId}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPapers.slice(0, 3).map((relPaper) => (
              <Link
                key={relPaper.id}
                href={`/paper/${relPaper.id}`}
                className="group p-5 bg-white border border-stone-200/80 rounded-xl hover:border-emerald-600 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-3"
                id={`related-paper-link-${relPaper.id}`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">
                    {relPaper.id}
                  </span>
                  <h3 className="text-sm font-semibold text-stone-850 group-hover:text-emerald-900 leading-snug transition-colors line-clamp-2">
                    {relPaper.title}
                  </h3>
                </div>
                <div className="flex items-center text-xs text-emerald-800 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Read Full Study</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
