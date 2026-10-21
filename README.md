# August Kanagawa Theme for Paseo

A native, client-only theme plugin adapting **August - Kanagawa (Darker)** from [August Themes for VS Code](https://github.com/inci-august/august-themes).

## Install

Requires Paseo 0.12.x. Install directly from GitHub:

```sh
paseo plugin install https://github.com/ivolnistov/paseo-theme-august-kanagawa.git
```

Alternatively, clone the repository and install from its directory:

```sh
paseo plugin install "$PWD"
```

Enable plugins for that host in **Settings → Plugins** if needed, then select **August - Kanagawa (Darker)** in **Settings → Appearance**. For a directory installation, keep that directory in place while the plugin is in use. Development dependencies are not needed to install or run the plugin.

Remove with:

```sh
paseo plugin remove august-kanagawa
```

## Palette

| Paseo color | Hex | VS Code source |
| --- | --- | --- |
| Background | `#16161e` | `editor.background` |
| Foreground | `#dcd7ba` | `editor.foreground` |
| Raised surfaces | `#2a2a37` | `editorSuggestWidget.background` |
| Controls | `#223249` | `editor.selectionBackground` |
| Borders | `#2a2a37` | `editorHoverWidget.border` |
| Accent | `#658594` | `tab.activeBorderTop` |
| Muted text | `#727169` | `editorInlayHint.foreground` |
| Focus ring | `#54546d` | `editorLineNumber.foreground` |

Paseo derives interface, terminal, diff and status colors from the semantic palette. Code highlighting has a separate Appearance setting. This is a palette adaptation; it does not reproduce all VS Code token colors or user overrides. It does not patch the app or contribute server code.

## Matching VS Code typography

In Settings → Appearance, set Code font to `JetBrains Mono, SauceCodePro Nerd Font Mono, monospace` and Code size to `14` px. These are local app preferences, not settings changed by the plugin. Paseo uses one code size for code, diffs and terminal output; the source VS Code setup uses 14 px for code and 11 px for its terminal.

## Development

```sh
npm ci --ignore-scripts --legacy-peer-deps
npm run typecheck
```

## License and attribution

MIT; see [LICENSE](LICENSE). You may modify and publish this plugin, including on GitHub, while preserving the license and copyright notices.

The palette comes from August Themes **2.8.0**, [`themes/august-kanagawa-darker.json`](https://github.com/inci-august/august-themes/blob/master/themes/august-kanagawa-darker.json). Its package declares MIT and its bundled license contains `Copyright (c) 2018 Sarah Drasner`; that notice is preserved here. August's Kanagawa palette is based on [rebelot/kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim), also MIT. This is an independent adaptation, not an official Paseo or August Themes release.
