August Kanagawa Theme adds **August - Kanagawa (Darker)** to Paseo's app themes. It adapts the August Themes palette for VS Code, with a near-black background, warm off-white text and muted blue accents.

Requires Paseo 0.12.x with plugins enabled on the host. Select the theme under Settings → Appearance. It sets dark app surfaces, warm primary and secondary text, blue accents, and the terminal background and foreground.

Code highlighting remains controlled by the separate Highlight theme setting. The plugin cannot supply Kanagawa syntax colors, terminal ANSI colors or custom diff/status colors through Paseo 0.12's native theme API. Font family and size are also separate app preferences and are not changed by the plugin. This is an interface-palette adaptation rather than a complete VS Code color-theme port.

The plugin only registers a color palette. It does not read files, start processes, make network requests or require accounts, credentials or additional software.
