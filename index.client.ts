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
      raised: "#2a2a37",
      control: "#223249",
      border: "#2a2a37",
      accent: "#658594",
      mutedForeground: "#727169",
      ring: "#54546d",
    },
  });
  return () => {};
}
