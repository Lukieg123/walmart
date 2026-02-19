const HeroSection = () => {
  return (
    <section className="gradient-background py-10 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-slide-up">
          Claim Your <span className="text-primary">Walmart</span> Gift Card
        </h1>
        <p className="text-muted-foreground text-base animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Complete a few simple steps and receive a gift card reward worth up to{" "}
          <span className="font-bold text-foreground underline">$500</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
