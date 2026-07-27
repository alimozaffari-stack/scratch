# Scratch

<img src="docs/app-icon.png" alt="Scratch" width="128" height="128" style="border-radius: 22px; margin-bottom: 8px;">

Scratch is an independently maintained, offline-first desktop Markdown application for Windows, macOS, and Linux. It stores managed notes as plain Markdown files that remain under your control.

**This repository is the authoritative source and release location for this edition of Scratch.** It is a separate project from the original upstream application; its releases, support, and roadmap are maintained here.

[Releases](https://github.com/alimozaffari-stack/scratch/releases) · [Source code](https://github.com/alimozaffari-stack/scratch)

## Current release: v0.11.2

Version 0.11.2 corrects how Scratch opens Markdown documents from the operating system and creates new managed notes.

- **Open a managed note reliably:** double-clicking a Markdown file already inside Scratch’s configured notes folder selects it in the main Scratch window, including when Scratch is starting.
- **One main window:** double-clicking, using **Open with**, dragging in, or otherwise opening an external `.md` or `.markdown` file opens it in the main Scratch window. Scratch does not create a second viewer window.
- **Keep the original location:** external files are read from and saved back to their original path. Scratch does not silently import or duplicate them in the notes sidebar.
- **Create a new managed note consistently:** `Ctrl+N` / `Cmd+N` and the sidebar `+` both create and open a new managed note. The external file remains unchanged.
- **Import only by choice:** the direct-file view still provides an explicit **Save to notes folder** action when you want to create a managed copy.
- **No tabs yet:** Scratch currently displays one document at a time in the main window. Tabbed documents are not part of this release.
- **Manual downloads:** installers are published on this repository’s GitHub Releases page. In-app automatic updating is not enabled for this edition.

The release workflow builds desktop packages for Windows, macOS, and Linux when the corresponding GitHub Actions jobs complete successfully.

## What Scratch does

- Creates and manages Markdown notes in a folder you choose; create a new note with `Ctrl+N` on Windows or `Cmd+N` on macOS.
- Provides rich-text editing that saves as Markdown, plus a raw Markdown source mode.
- Opens external Markdown files without taking ownership of them.
- Supports folders, search, syntax highlighting, Mermaid diagrams, KaTeX math, wikilinks, slash commands, focus mode, themes, typography settings, RTL text, and optional Git integration.
- Can work with local AI command-line tools and detects external changes to open files.
- Runs locally: it does not require a cloud account or internet connection for normal note editing.

## Installation

Download the installer or package for your platform from the [Releases page](https://github.com/alimozaffari-stack/scratch/releases).

### Windows

1. Download the current Windows `.exe` installer.
2. Close any running Scratch windows.
3. Run the installer, then open Scratch or double-click a Markdown file.

Windows installs WebView2 automatically if it is not already available.

### macOS and Linux

Download the available package for your platform from the [Releases page](https://github.com/alimozaffari-stack/scratch/releases) and follow the normal platform installation steps.

### From source

**Prerequisites:** Node.js 18+ and Rust 1.70+.

```bash
git clone https://github.com/alimozaffari-stack/scratch.git
cd scratch
npm install
npm run tauri dev      # Development
npm run tauri build    # Production build
```

## Essential shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl/Cmd+N` | New managed note |
| `Ctrl/Cmd+D` | Duplicate managed note |
| `Ctrl/Cmd+P` | Command palette |
| `Ctrl/Cmd+F` | Find in the current document |
| `Ctrl/Cmd+Shift+M` | Toggle Markdown source mode |
| `Ctrl/Cmd+Shift+Enter` | Toggle focus mode |
| `Ctrl/Cmd+Shift+F` | Search managed notes |
| `Ctrl/Cmd+R` | Reload the current document from disk |
| `Ctrl/Cmd+,` | Open settings |
| `Ctrl/Cmd+\\` | Toggle sidebar |

## Built with

[Tauri](https://tauri.app/) · [React](https://react.dev/) · [TipTap](https://tiptap.dev/) · [Tailwind CSS](https://tailwindcss.com/) · [Tantivy](https://github.com/quickwit-oss/tantivy)

## Upstream acknowledgement

This project was originally derived from [Scratch by Eric Li](https://github.com/erictli/scratch). We thank Eric Li and the upstream contributors for the source application on which this independently maintained edition is based.

This repository is not affiliated with, endorsed by, or supported by the upstream project. Please use this repository for this edition’s releases and issues. The upstream project’s README identifies its licence as MIT; applicable upstream copyright and licence notices remain in effect.

## License

MIT
