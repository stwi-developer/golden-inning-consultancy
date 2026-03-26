import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSnapshot from "./components/ExperienceSnapshot";
import Footer from "./components/Footer";
import GlobalConsultancy from "./components/GlobalConsultancy";
import Hero from "./components/Hero";
import IndustrySegments from "./components/IndustrySegments";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import Videos from "./components/Videos";
import CategoryPage from "./pages/CategoryPage";
import IndustrySegmentsPage from "./pages/IndustrySegmentsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustStrip />
        <section id="about">
          <About />
        </section>
        <ExperienceSnapshot />
        <section id="services">
          <Services />
        </section>
        <section id="industry-segments">
          <IndustrySegments />
        </section>
        <section id="videos">
          <Videos />
        </section>
        <section id="global">
          <GlobalConsultancy />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const industrySegmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industry-segments",
  component: IndustrySegmentsPage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industry-segments/$segmentSlug",
  component: CategoryPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industry-segments/$segmentSlug/$categorySlug",
  component: ProductDetailPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  industrySegmentsRoute,
  categoryRoute,
  productDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
