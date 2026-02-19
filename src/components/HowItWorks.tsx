const steps = [
  { step: 1, text: 'Click on "CLAIM NOW" below' },
  { step: 2, text: "Enter your email and basic information" },
  { step: 3, text: "Complete 3–5 recommended deals" },
  { step: 4, text: "Claim reward in your email" },
];

const HowItWorks = () => {
  return (
    <section className="pt-0 pb-0 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center mb-5">
          How To Claim Your Gift Card
        </h2>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-border rounded-xl px-5 py-4 bg-card animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">{s.step}</span>
              </div>
              <span className="text-foreground text-sm font-medium">{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
