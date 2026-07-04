import React from "react";
import { Metadata } from "next";
import Home from "../../../page";
import { notFound } from "next/navigation";
import { foldersMap, subCategories } from "@/lib/data";

interface Props {
  params: Promise<{ id: string; subId: string }>;
}

export async function generateStaticParams() {
  return subCategories.map((sub) => ({
    id: sub.categoryId,
    subId: sub.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { id, subId } = resolvedParams;
  const category = foldersMap[id as keyof typeof foldersMap];
  const subCategory = subCategories.find((s) => s.id === subId && s.categoryId === id);
  if (!category || !subCategory) {
    return {
      title: "Sub-category Not Found | BioAlbra Consortium",
    };
  }

  const titleText = `${subCategory.name} | ${category.name} Research`;
  const descText = `${subCategory.desc} Under category ${category.name}. Explore deep scholarly peer-reviewed papers on BioAlbra.`;

  return {
    title: titleText,
    description: descText,
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.bioalbra.com/category/${id}/${subId}`,
      type: "website",
      siteName: "BioAlbra Consortium",
      images: [
        {
          url: "https://picsum.photos/seed/bioalbra/1200/630",
          width: 1200,
          height: 630,
          alt: `${subCategory.name} - BioAlbra Ecological Repositories`,
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

export default async function SubCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { id, subId } = resolvedParams;
  const category = foldersMap[id as keyof typeof foldersMap];
  const subCategory = subCategories.find((s) => s.id === subId && s.categoryId === id);
  if (!category || !subCategory) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BioAlbra Home",
        "item": "https://www.bioalbra.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.name,
        "item": `https://www.bioalbra.com/category/${id}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": subCategory.name,
        "item": `https://www.bioalbra.com/category/${id}/${subId}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home initialFolder={id} initialSubcategory={subId} />;
    </>
  );
}
