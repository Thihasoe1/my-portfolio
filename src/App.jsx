import { lazy, Suspense } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./components/About";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (showDesignSystem && DesignSystemPreview) {
    return (
      <MotionConfig reducedMotion="user">
        <Suspense fallback={null}>
          <DesignSystemPreview />
        </Suspense>
      </MotionConfig>
    );
  }

  return (
    // reducedMotion="user" disables Framer transform/layout animations when the
    // OS "reduce motion" setting is on; CSS animations are handled in index.css.
    <MotionConfig reducedMotion="user">
      <div
        data-surface="dark"
        className="relative scroll-smooth bg-slate-950 text-slate-50 min-h-screen selection:bg-brand-500 selection:text-white"
      >
        {/* Global Animated Background Orbs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-500 origin-left z-50"
          style={{ scaleX }}
        />

        <div className="relative z-10 font-sans">
          <Navbar />
          <main>
            <Hero />
            <AboutPage />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
