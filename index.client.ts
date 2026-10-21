import type { PluginClientContext } from "@getpaseo/plugin/client";

// Palette adapted from inci-august/august-themes 2.8.0 (MIT).
// Source: themes/august-kanagawa-darker.json. See LICENSE and README.md.
export default function contribute(client: PluginClientContext) {
  client.addTheme({
    id: "kanagawa-darker",
    name: "August - Kanagawa (Darker)",
    appearance: "dark",
    colors: {
      background: "#16161e",
      foreground: "#dcd7ba",
      // Paseo also uses raised for the workspace, and control for ordinary inputs.
      // VS Code's suggestion/selection colors would brighten these whole surfaces.
      raised: "#16161e",
      control: "#16161e",
      border: "#ffffff12",
      accent: "#658594",
      mutedForeground: "#dcd7ba",
      // This also colors extra-muted text and terminal bright black; keep it opaque.
      ring: "#54546d",
    },
  });
  return () => {};
}
