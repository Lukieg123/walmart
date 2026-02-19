import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-3 bg-background border-b border-border">
      <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 px-4">
        <Sparkles className="w-7 h-7 text-accent" />
        <span className="text-3xl font-bold text-primary tracking-tight">Walmart</span>
      </div>
    </header>
  );
};

export default Header;
