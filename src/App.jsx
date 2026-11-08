import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
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
    // reducedMotion="user" disables Framer transform/layout animations when the
    // OS "reduce motion" setting is on; CSS animations are handled in index.css.
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  );
}

export default App;
