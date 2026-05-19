import { useState } from "react";
import { Linkedin, Twitter, Link2, Check } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Share</span>
      <a href={tweet} target="_blank" rel="noreferrer noopener" aria-label="Share on Twitter" className="share-btn">
        <Twitter className="h-4 w-4" />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer noopener" aria-label="Share on LinkedIn" className="share-btn">
        <Linkedin className="h-4 w-4" />
      </a>
      <button onClick={copy} aria-label="Copy link" className="share-btn">
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}