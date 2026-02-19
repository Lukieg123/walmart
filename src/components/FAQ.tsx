import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long do the deals take?",
    a: "Most deals take just a few minutes to complete. Some may require a free trial signup or a small purchase.",
  },
  {
    q: "What are deals?",
    a: "Deals are sponsored offers from partner brands. They can include free trial signups, app downloads, or small purchases.",
  },
  {
    q: "How many deals do I have to do?",
    a: "You need to complete 3–5 deals to qualify for your gift card reward.",
  },
  {
    q: "When will I receive my reward?",
    a: "Once you complete the required deals, your gift card will be sent to your email within 24–48 hours.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-6 pb-10 px-4 bg-muted/40">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center mb-5">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
