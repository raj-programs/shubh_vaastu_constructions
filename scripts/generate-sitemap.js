import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "av1ebhcg",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const HOST = "https://shubhvaastuconstructions.com";

async function generate() {
  const sitemap = new SitemapStream({ hostname: HOST });

  sitemap.write({
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  });

  sitemap.write({
    url: "/projects-gallery",
    changefreq: "weekly",
    priority: 0.9,
  });

  const projects = await client.fetch(`
    *[_type == "project"]{
      slug
    }
  `);

  projects.forEach((project) => {
    if (project.slug?.current) {
      sitemap.write({
        url: `/projects/${project.slug.current}`,
        changefreq: "monthly",
        priority: 0.8,
      });
    }
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);

  fs.writeFileSync(
    "./public/sitemap.xml",
    xml.toString()
  );
}

generate();