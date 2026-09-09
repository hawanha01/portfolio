import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Hamza — Senior Software Engineer",
    short_name: "Muhammad Hamza",
    description: "Portfolio of Muhammad Hamza, Senior Software Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }]
  };
}
