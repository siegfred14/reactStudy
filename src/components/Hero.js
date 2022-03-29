// Error Boundary is a class component that implements when one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary
// The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown
// and the componentDidCatch method is used to log the error information

import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
}

export default Hero;
