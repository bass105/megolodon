import { useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { IntroSequence } from "@/components/IntroSequence";
import { PortfolioHome } from "@/components/PortfolioHome";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={PortfolioHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <Toaster />
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      {!showIntro && <Router />}
    </>
  );
}

export default App;
