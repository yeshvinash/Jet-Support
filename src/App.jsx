import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "swiper/css";
import "./App.css";
import { Footer, Header } from "./components";
import {
  Branding,
  DevOps,
  Home,
  MobileApp,
  QualityAssurance,
  UXUIDesign,
  Website,
  IosAppDevelopment,
  AndroidAppDevelopment,
  FlutterAppDevelopment,
  NodeMongoAppDevelopement,
  WordpressAppDevelopement,
  ShopifyAppDevelopement,
  LaravelAppDevelopement,
  DatingAppDevelopment,
  PropertyAppDevelopment,
  FinanceAppDevelopment,
  FoodAppDevelopment,
  HealthCareAppDevelopment,
  AutomationAppDevelopment,
  ContactForm,
  OurWork,
  AboutUs,
  OurTeam,
  OurClients,
  Testimonials,
  Blog,
  OurProcess,
  TechStack,
  Styleguide,
} from "./pages";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/mobile-apps" element={<MobileApp />} />
          <Route path="/services/website" element={<Website />} />
          <Route path="/services/dev-ops" element={<DevOps />} />
          <Route
            path="/services/quality-assurance"
            element={<QualityAssurance />}
          />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/expertise/design/branding" element={<Branding />} />
          <Route
            path="/expertise/design/uxui-design"
            element={<UXUIDesign />}
          />
          <Route
            path="/expertise/technology/ios-app-development"
            element={<IosAppDevelopment />}
          />
          <Route
            path="/expertise/technology/android-app-development"
            element={<AndroidAppDevelopment />}
          />
          <Route
            path="/expertise/technology/flutter-app-development"
            element={<FlutterAppDevelopment />}
          />
          <Route
            path="/expertise/technology/node-mongo-app-development"
            element={<NodeMongoAppDevelopement />}
          />
          <Route
            path="/expertise/technology/wordpress-app-development"
            element={<WordpressAppDevelopement />}
          />
          <Route
            path="/expertise/technology/shopify-app-development"
            element={<ShopifyAppDevelopement />}
          />
          <Route
            path="/expertise/technology/laravel-app-development"
            element={<LaravelAppDevelopement />}
          />
          <Route
            path="/expertise/industry/dating-app-development"
            element={<DatingAppDevelopment />}
          />
          <Route
            path="/expertise/industry/property-app-development"
            element={<PropertyAppDevelopment />}
          />
          <Route
            path="/expertise/industry/finance-app-development"
            element={<FinanceAppDevelopment />}
          />
          <Route
            path="/expertise/industry/food-app-development"
            element={<FoodAppDevelopment />}
          />
          <Route
            path="/expertise/industry/healthcare-app-development"
            element={<HealthCareAppDevelopment />}
          />
          <Route
            path="/expertise/industry/automation-app-development"
            element={<AutomationAppDevelopment />}
          />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/about-us/about" element={<AboutUs />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/our-clients" element={<OurClients />} />
          <Route path="/about-us/testimonials" element={<Testimonials />} />
          <Route path="/about-us/blog" element={<Blog />} />
          <Route path="/about-us/our-process" element={<OurProcess />} />
          <Route path="/about-us/tech-stack" element={<TechStack />} />
          <Route path="/style" element={<Styleguide />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
