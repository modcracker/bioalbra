import { MetadataRoute } from "next";
import { ACADEMIC_PAPERS, folders, subCategories } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bioalbra.com";

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Categories
  folders.forEach((folder) => {
    sitemapEntries.push({
      url: `${baseUrl}/category/${folder.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Sub-categories
  subCategories.forEach((sub) => {
    sitemapEntries.push({
      url: `${baseUrl}/category/${sub.categoryId}/${sub.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // Academic Papers
  ACADEMIC_PAPERS.forEach((paper) => {
    sitemapEntries.push({
      url: `${baseUrl}/paper/${paper.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
