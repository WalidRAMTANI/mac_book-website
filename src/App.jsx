import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ProductViewer from '../components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from '../components/Showcase';
import Performance from '../components/Performance';
import Features from '../components/Features';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
gsap.registerPlugin(ScrollTrigger);
/**
 * Root application component that composes the main top-level layout.
 *
 * Renders the primary layout container with the navigation bar, hero section,
 * product viewer, and showcase in order.
 * @returns {JSX.Element} The root JSX element containing NavBar, Hero, ProductViewer, and Showcase.
 */
function App() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Highlights/>
      <Footer />
    </main>
  )
}

export default App