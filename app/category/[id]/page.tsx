import { Metadata } from "next";
import Home from "../../page";
import { notFound } from "next/navigation";
import { foldersMap } from "@/lib/data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(foldersMap).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const category = foldersMap[id as keyof typeof foldersMap];
  if (!category) {
    return {
      title: "Category Not Found | BioAlbra Consortium",
    };
  }

  const titleText = `${category.name} | BioAlbra Consortium`;
  const descText = `${category.desc} Explore peer-reviewed academic papers and ecological models on BioAlbra.`;

  return {
    title: titleText,
    description: descText,
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.bioalbra.com/category/${id}`,
      type: "website",
      siteName: "BioAlbra Consortium",
      images: [
        {
          url: "https://picsum.photos/seed/bioalbra/1200/630",
          width: 1200,
          height: 630,
          alt: `${category.name} - BioAlbra Ecological Repositories`,
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

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const category = foldersMap[id as keyof typeof foldersMap];
  if (!category) {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home initialFolder={id} />
    </>
  );
}
