//creating layout and importing

import styles from "./style";

import {
  Logo,
  Navbar,
  Business,
  Clients,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      {/* Logo and Navigation */}
      <div className={`top ${styles.paddingX} ${styles.flexCenter}`}>
        <div>
          <Logo />
        </div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Misc. Content */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Testimonials />
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
