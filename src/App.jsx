import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrescriptionPage from "./pages/PrescriptionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
// import BlogPage from "./pages/BlogPage";
// import BlogPost from "./pages/BlogPost";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ReturnsPage from "./pages/ReturnsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import AccountPage from "./pages/AccountPage";
import WishlistPage from "./pages/WishlistPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./context/CartContext";
import BrandPage from "./pages/BrandPage";
import ScrollToTop from "./components/reuse/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/prescription" element={<PrescriptionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/brand" element={<BrandPage/>}/>
              {/* <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPost />} /> */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
