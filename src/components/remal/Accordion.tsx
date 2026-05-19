import { useState, type ReactNode } from "react";

export type AccordionItem = {
  title: string;
  content: ReactNode;
  meta?: string;
};

export function Accordion({ items, defaultOpen = -1 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`accordion-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="accordion-trigger"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-5">
                {item.meta && (
                  <span className="text-[11px] uppercase tracking-[0.3em] text-clay">{item.meta}</span>
                )}
                <span className="font-serif text-xl sm:text-2xl md:text-3xl">{item.title}</span>
              </span>
              <span className="accordion-icon" aria-hidden />
            </button>
            <div className="accordion-content">
              <div>
                <div className="accordion-inner max-w-2xl text-sm leading-relaxed sm:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}