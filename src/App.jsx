// App.js — Slaek House Luxury Fashion Landing Page
// Stack: React + Tailwind CSS
// Google Sheet JSON endpoint: Replace SHEET_URL below with your published Google Sheet JSON URL

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// To connect your Google Sheet:
// 1. In Google Sheets: File → Share → Publish to web → CSV format → Publish
// 2. Get the Sheet ID from your URL: docs.google.com/spreadsheets/d/SHEET_ID/...
// 3. Replace SHEET_ID below. Your sheet columns should be:
//    name | price | description | image | category
//    category must be either "Custom Tailoring" or "Handcrafted Shoes"

const SHEET_ID = "11KxoJvcnjyTbe03Z264WrCngGDBMZeAWu-92InU3-40"; // ← Replace this
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`;

const TABS = ["Custom Tailoring", "Handcrafted Shoes"];

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/slaek_fashion_house",
  whatsapp: "https://wa.me/2348086405238",
  tiktok: "https://tiktok.com/@slaekhouse",
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img src="./public/logo.png" className="w-20 h-20"/>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Collection", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 hover:opacity-60 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-white transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "#B8962E" }}
          >
            Book a Fitting
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px w-6 transition-all duration-300 ${
                scrolled ? "bg-black" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">
          {["Collection", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.25em] uppercase font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-5 py-3 text-xs tracking-[0.2em] uppercase font-semibold text-white"
            style={{ backgroundColor: "#B8962E" }}
          >
            Book a Fitting
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)",
      }}
    >
      {/* Subtle gold diagonal accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #B8962E 0px, #B8962E 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Gold corner ornaments */}
      <div
        className="absolute top-24 left-10 w-16 h-16 border-t border-l opacity-40"
        style={{ borderColor: "#B8962E" }}
      />
      <div
        className="absolute bottom-16 right-10 w-16 h-16 border-b border-r opacity-40"
        style={{ borderColor: "#B8962E" }}
      />

      <div className="relative z-10 text-center item-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.5em] uppercase mb-8 font-medium"
          style={{ color: "#B8962E" }}
        >
          Est. Kaduna · Nigeria
        </p>

        {/* Brand Name */}
        <div className="div flex justify-center">  <img src="./public/logo2.png" className="w-60 py-5   h-60"/></div>
    

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16" style={{ backgroundColor: "#B8962E" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: "#B8962E" }} />
          <div className="h-px w-16" style={{ backgroundColor: "#B8962E" }} />
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4 font-light tracking-wide">
          Where precision meets passion. Every stitch, every sole — crafted by hand for those
          who demand nothing less than extraordinary.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto mb-12 tracking-wide">
          Bespoke tailoring and handcrafted footwear, made-to-measure for the discerning individual.
          Your vision. Our craft. A legacy of elegance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#collection"
            className="px-10 py-4 text-xs tracking-[0.3em] uppercase font-semibold text-black transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#B8962E" }}
          >
            Explore Collection
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-xs tracking-[0.3em] uppercase font-semibold text-white border transition-all duration-300 hover:bg-white hover:text-black"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            Book a Fitting
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-white animate-pulse" />
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Decorative Block */}
        <div className="relative">
          <div
            className="w-full aspect-square"
            style={{
              background: "linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)",
            }}
          ><img src="./public/shoe.jpg"/>
            <div
              className="absolute inset-6 border opacity-20"
              style={{ borderColor: "#B8962E" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-8xl font-bold text-white opacity-10 tracking-widest"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                SH
              </span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="h-px w-full opacity-30" style={{ backgroundColor: "#B8962E" }} />
              <p className="text-white text-xs tracking-[0.4em] uppercase opacity-50 mt-4">
                Crafted with Intention
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 border"
            style={{ borderColor: "#B8962E" }}
          />
          
        </div>

        {/* Right: Text */}
        <div>
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "#B8962E" }}
          >
            Our Story
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Art of <br />
            <span className="font-light italic">Handcraft</span>
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
            <p>
              Slaek House was born from a singular obsession: that clothing and footwear
              should feel as remarkable as the people who wear them. Founded in Kaduna, our
              atelier blends West African craftsmanship with contemporary luxury design.
            </p>
            <p>
              Every piece that leaves our hands is made-to-measure — cut, sewn, and finished
              by master artisans who treat each order as a personal statement of identity.
              From bespoke suits to handlasted leather shoes, we honour the slow craft.
            </p>
            <p>
              At Slaek House, luxury is not a price tag. It is the quiet confidence of
              wearing something built entirely for you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
            {[
              { num: "500+", label: "Pieces Crafted" },
              { num: "100%", label: "Bespoke" },
              { num: "5★", label: "Client Rating" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#B8962E", fontFamily: "'Playfair Display', serif" }}
                >
                  {num}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCT COLLECTION ───────────────────────────────────────────────────────
function Collection({ products, loading, error }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filtered = products.filter((p) => p.category === activeTab);

  return (
    <section id="collection" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "#B8962E" }}
          >
            The Collection
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Made for You
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "#B8962E" }} />
            <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#B8962E" }} />
            <div className="h-px w-12" style={{ backgroundColor: "#B8962E" }} />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex border border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 bg-white hover:text-gray-900"
                }`}
                style={
                  activeTab === tab ? { backgroundColor: "#111" } : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div
              className="inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: "#B8962E", borderTopColor: "transparent" }}
            />
            <p className="text-gray-400 text-xs tracking-widest uppercase mt-4">
              Loading Collection…
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm mb-2">Could not load products.</p>
            <p className="text-gray-300 text-xs">
              Please check your Google Sheet URL configuration.
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400 text-sm tracking-widest uppercase">
                No items in this category yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.name + i} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#0a0a0a" }} className="pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl font-bold text-white tracking-[0.2em] uppercase mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SLAEK
            </h3>
            <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "#B8962E" }}>
              House
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Bespoke tailoring and handcrafted footwear for the modern African leader.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">Navigate</p>
            <ul className="space-y-3">
              {["Custom Tailoring", "Handcrafted Shoes", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-500 text-sm hover:text-white transition-colors duration-200 tracking-wide"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">Get In Touch</p>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 mb-8"
            >
              <span style={{ color: "#25D366" }}>●</span> WhatsApp: +234 808 640 5238
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-widest">
            © {new Date().getFullYear()} SLAEK HOUSE. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#B8962E" }}>
            Crafted in Kaduna · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Fetch products from Google Sheet via opensheet proxy
    // if (SHEET_ID === "11KxoJvcnjyTbe03Z264WrCngGDBMZeAWu-92InU3-40") {
    //   // Demo data when Sheet ID not configured
    //   setProducts([
    //     { name: "Lagos Power Suit", price: "₦185,000", description: "Three-piece bespoke wool suit, fully lined with hand-finished buttonholes.", image: "", category: "Custom Tailoring" },
    //     { name: "Agbada Royale", price: "₦220,000", description: "Contemporary embroidered Agbada, made with premium Aso-Oke fabric.", image: "", category: "Custom Tailoring" },
    //     { name: "The Executive Blazer", price: "₦95,000", description: "Single-breasted Italian-cut blazer tailored to your exact measurements.", image: "", category: "Custom Tailoring" },
    //     { name: "Oxford Brogues No. 1", price: "₦75,000", description: "Full-grain calf leather, hand-stitched Goodyear welt construction.", image: "", category: "Handcrafted Shoes" },
    //     { name: "Chelsea Boot Elite", price: "₦68,000", description: "Sleek pull-on boot in suede with a hand-polished leather sole.", image: "", category: "Handcrafted Shoes" },
    //     { name: "The Lagos Loafer", price: "₦55,000", description: "Penny loafer with Nigerian Ankara lining, hand-burnished finish.", image: "", category: "Handcrafted Shoes" },
    //   ]);
    //   setLoading(false);
    //   return;
    // }

    fetch(SHEET_URL)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Collection products={products} loading={loading} error={error} />
      <Footer />
    </div>
  );
}
