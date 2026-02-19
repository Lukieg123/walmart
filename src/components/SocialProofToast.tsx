import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const names = [
  { name: "Sarah from Texas", amount: "$750" },
  { name: "Marcus from Florida", amount: "$500" },
  { name: "Jessica from California", amount: "$500" },
  { name: "David from New York", amount: "$750" },
  { name: "Maria from Arizona", amount: "$500" },
];

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;

    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % names.length);
        setVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(cycleTimer);
  }, [visible, dismissed]);

  if (dismissed || !visible) return null;

  const person = names[current];

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-toast-in">
      <div className="bg-card border border-border rounded-xl shadow-card-hover px-4 py-3 flex items-start gap-3 max-w-xs">
        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">{person.name}</p>
          <p className="text-xs text-muted-foreground">
            just claimed a {person.amount} Walmart gift card
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5">A few moments ago</p>
        </div>
        <button onClick={() => setDismissed(true)} className="text-muted-foreground hover:text-foreground">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;
