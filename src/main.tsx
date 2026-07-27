import "./lib/tauri-mock";
import React from "react";
import ReactDOM from "react-dom/client";
import { invoke } from "@tauri-apps/api/core";
import "katex/dist/katex.min.css";
import App from "./App";
import { PreviewApp } from "./components/preview/PreviewApp";
import { ThemeProvider } from "./context/ThemeContext";
import { TooltipProvider, Toaster } from "./components/ui";
import "./App.css";

function Root() {
  const [previewFilePath, setPreviewFilePath] = React.useState<
    string | null | undefined
  >(undefined);

  React.useEffect(() => {
    let cancelled = false;

    invoke<string | null>("get_preview_file_path")
      .then((path) => {
        if (!cancelled) setPreviewFilePath(path);
      })
      .catch((error) => {
        console.error("Failed to resolve preview file path:", error);
        if (!cancelled) setPreviewFilePath(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (previewFilePath === undefined) {
    return <div className="h-full bg-bg" />;
  }

  if (!previewFilePath) return <App />;

  return (
    <ThemeProvider>
      <Toaster />
      <TooltipProvider>
        <PreviewApp filePath={previewFilePath} />
      </TooltipProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
