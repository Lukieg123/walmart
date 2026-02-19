const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-border">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          This is a promotional offer. By participating, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
          <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          Walmart is not a sponsor of this promotion.
        </p>
        <p className="text-[11px] text-muted-foreground mt-2">© 2024 GiftCard Rewards. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
