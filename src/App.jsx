import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SecondHome from "./App"; // ⚠️ یہ بھی غلط لگ رہا ہے کیونکہ یہ App کو دوبارہ import کر رہا ہے، اس سے loop بن جائے گا

// Pages / Components for Routes
import Hero from "./pages/Hero";
import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Design from "./pages/Design";
import ClothooCraft from "./pages/ClothooCraft";
import Questions from "./pages/Questions";
import StoryBehind from "./pages/StoryBehind";
import Clothoo from "./pages/Clothoo";
import CraftingQuality from "./pages/CraftingQuality";
import CustomerReviews from "./pages/CustomerReviews";
import AlllProducts from "./product/AlllProducts";
import NotFound from "./pages/NotFound";

const App = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsBannerVisible(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bannerHeight = 40; // Banner height in px
  const navbarHeight = 64; // Navbar height in px
  const mainContentMarginTop = isBannerVisible
    ? bannerHeight + navbarHeight
    : navbarHeight;

  return (
    <>
      {isBannerVisible && <Banner />}
      <Navbar
        isBannerVisible={isBannerVisible}
        bannerHeight={bannerHeight}
        navbarHeight={navbarHeight}
      />

      <main
        style={{ marginTop: mainContentMarginTop, overflowX: "hidden" }}
        className="px-4"
      >
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                {/* yahan <app /> hata do */}
                {/* <SecondHome /> bhi na rakho, warna App infinite loop karega */}
                <Hero />
                <BestSeller />
                <CustomerReviews />
                <Categories />
                <Design />
                <Clothoo />
                <CraftingQuality />
                <Questions />
                <StoryBehind />
                <ClothooCraft />
              </>
            }
          />

          {/* Product details page */}
          <Route path="/product/:slug" element={<AlllProducts />} />

          {/* Baaki pages ke routes */}
          <Route path="/best-seller" element={<BestSeller />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/design" element={<Design />} />
          <Route path="/clothoo" element={<Clothoo />} />
          <Route path="/crafting-quality" element={<CraftingQuality />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/story-behind" element={<StoryBehind />} />
          <Route path="/clothoo-craft" element={<ClothooCraft />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
