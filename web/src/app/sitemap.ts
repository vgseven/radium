import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://radium.vgseven.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://radium.vgseven.com/products",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
