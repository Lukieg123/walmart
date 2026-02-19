import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-6 px-4">
      <div className="max-w-lg mx-auto text-center">
        <Button variant="hero" size="xl" className="w-full max-w-lg text-lg font-bold uppercase tracking-wide" asChild>
          <a href="https://trkfy.org/aff_c?offer_id=1377&aff_id=165987&source=Lukieg" target="_blank" rel="noopener noreferrer">
            Claim Now
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-3 italic">
          Join thousands of satisfied customers
        </p>
      </div>
    </section>
  );
};

export default CTASection;
