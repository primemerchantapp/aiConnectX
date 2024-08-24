import hljs from "highlight.js";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Copy01Icon, Tick01Icon } from "@/components/ui/icons";
import { Tooltip } from "@/components/ui/tooltip";
import { useClipboard } from "@/lib/hooks";
import { cn } from "@/lib/utils/clsx";
import { mono } from "../../app/fonts";

export type codeBlockProps = {
  lang?: string;
  code?: string;
};

export const CodeBlock = ({ lang, code }: codeBlockProps) => {
  const ref = useRef<HTMLElement>(null);
  const { copy, showCopied } = useClipboard();
  const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";

  useEffect(() => {
    if (ref?.current && code) {
      const highlightedCode = hljs.highlight(language, code).value;
      ref.current.innerHTML = highlightedCode;
    }
  }, [code, language]);

  return (
    <div
      className={cn(
        "not-prose w-full flex-shrink-0 overflow-hidden rounded-lg border border-zinc-500/15 bg-zinc-25/20 text-zinc-800 dark:border-white/5 dark:bg-black/20 dark:text-white",
      )}
    >
      <div className="flex w-full items-center justify-between border-b border-zinc-200/20 bg-zinc-25 py-1.5 pl-2 pr-1.5 dark:border-white/5 dark:bg-black/20">
        <p className="px-2 text-xs text-zinc-500">{language}</p>
        <Tooltip content={showCopied ? "Copied!" : "Copy"}>
          <Button
            variant="ghost"
            size="xs"
            rounded="default"
            onClick={() => {
              code && copy(code);
            }}
          >
            {showCopied ? (
              <Tick01Icon size={14} variant="stroke" strokeWidth="2" />
            ) : (
              <Copy01Icon size={14} variant="stroke" strokeWidth="2" />
            )}
            Copy Code
          </Button>
        </Tooltip>
      </div>
      <pre className="w-full px-6 py-2">
        <code
          style={mono.style}
          className={`hljs language-${language} inline-block w-full overflow-x-auto whitespace-pre-wrap break-words pr-[100%] text-[0.85rem] tracking-wide`}
          ref={ref}
        ></code>
      </pre>
    </div>
  );
};