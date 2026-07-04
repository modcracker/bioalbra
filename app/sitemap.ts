import { MetadataRoute } from "next";
import { ACADEMIC_PAPERS, folders, subCategories } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bioalbra.com";

  // Category URLs
  const categoryUrls = folders.map((folder) => ({
    url: `${baseUrl}/category/${folder.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Sub-category URLs
  const subCategoryUrls = subCategories.map((sub) => ({
    url: `${baseUrl}/category/${sub.categoryId}/${sub.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Academic Paper Details URLs
  const paperUrls = ACADEMIC_PAPERS.map((paper) => ({
    url: `${baseUrl}/paper/${paper.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...categoryUrls,
    ...subCategoryUrls,
    ...paperUrls,
  ];
}
