import { lazy, Suspense } from "react";
import SkipLink from "./components/SkipLink";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Dev-only design-system review page: open http://localhost:5173/?design-system
// `import.meta.env.DEV` is statically false in production builds, so this
// branch and its lazy chunk are dropped from the deployed bundle.
const DesignSystemPreview = import.meta.env.DEV
  ? lazy(() => import("./dev/DesignSystemPreview"))
  : null;
const showDesignSystem =
  import.meta.env.DEV &&
  new URLSearchParams(window.location.search).has("design-system");

function App() {
  return (
    // Reduced motion is handled globally in index.css (prefers-reduced-motion).
    <>
      {showDesignSystem && DesignSystemPreview ? (
        <Suspense fallback={null}>
          <DesignSystemPreview />
        </Suspense>
      ) : (
        <>
          <SkipLink targetId="main" />
          <Navbar />
          {/* tabIndex -1 lets the skip link move focus here; no ring on the whole page. */}
          <main id="main" tabIndex={-1} className="focus-visible:outline-none focus-visible:shadow-none">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
