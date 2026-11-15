
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
  Image,
  Tag,
  Instagram,
  Store,
  WandSparkles,
  Gem,
  Zap,
  Handshake,
  MapPin,
  ChevronDown,
  Utensils,
  Palette
} from "lucide-react";

const WA_NUMBER = "919118883200";

// WhatsApp enquiry link with a professional pre-filled message
function whatsappLink(message = "") {
  const formalMessage = `Hello EASYGo Creative Design Studio,

I visited your website and would like to enquire about your design services.

${message ? `My enquiry: ${message}` : "Please share your design services, available packages, pricing, and delivery timelines."}

Kindly guide me through the next steps.

Thank you.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formalMessage)}`;
}

const services = [
  {
    icon: Utensils,
    title: "Menu Designs",
    sub: "Restaurant & Café Menus",
    tag: "Food & beverage"
  },
  {
    icon: Image,
    title: "Banners & Posters",
    sub: "Promotions & Offers",
    tag: "Print design"
  },
  {
    icon: Tag,
    title: "Branding",
    sub: "Logo & Identity",
    tag: "Brand identity"
  },
  {
    icon: Instagram,
    title: "Social Media Designs",
    sub: "Posts & Stories",
    tag: "Digital creatives"
  },
  {
    icon: Store,
    title: "Shop Displays",
    sub: "Indoor & Outdoor",
    tag: "Retail design"
  },
  {
    icon: WandSparkles,
    title: "Custom Designs",
    sub: "Any Idea, We Create!",
    tag: "Made to order"
  }
];

const portfolio = [
  {
    image: "/images/portfolio-menu.jpg",
    title: "The Royal Bite",
    type: "Restaurant menu"
  },
  {
    image: "/images/portfolio-birthday.jpg",
    title: "Birthday Celebration",
    type: "Event creative"
  },
  {
    image: "/images/portfolio-sale.jpg",
    title: "Big Sale",
    type: "Retail promotion"
  },
  {
    image: "/images/portfolio-bakery.jpg",
    title: "The Bakery",
    type: "Brand collateral"
  },
  {
    image: "/images/portfolio-food.jpg",
    title: "Good Food, Good Mood",
    type: "Food promotion"
  }
];

const templates = [
  {
    name: "Premium Food Menu",
    category: "Menus",
    price: "From ₹499",
    image: "/images/portfolio-menu.jpg"
  },
  {
    name: "Café Special Offer",
    category: "Posters",
    price: "From ₹299",
    image: "/images/hero-showcase.jpg"
  },
  {
    name: "Birthday Celebration",
    category: "Social Media",
    price: "From ₹249",
    image: "/images/portfolio-birthday.jpg"
  },
  {
    name: "Grand Opening",
    category: "Posters",
    price: "From ₹299",
    image: "/images/portfolio-bakery.jpg"
  },
  {
    name: "Big Sale Creative",
    category: "Social Media",
    price: "From ₹249",
    image: "/images/portfolio-sale.jpg"
  },
  {
    name: "Bakery Menu Style",
    category: "Menus",
    price: "From ₹499",
    image: "/images/portfolio-food.jpg"
  }
];

const filters = ["All", "Menus", "Posters", "Social Media"];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="EASYGo home">
      <span className="brand-mark">
        <Palette size={27} strokeWidth={1.8} />
      </span>

      <span>
        <strong>
          EASY<span>Go</span>
        </strong>
        <small>CREATIVE DESIGN STUDIO</small>
      </span>
    </a>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const shown =
    filter === "All"
      ? templates
      : templates.filter((t) => t.category === filter);

  const closeMenu = () => setMobileOpen(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="header">
        <div className="nav-wrap">
          <Brand />

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

          <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
            <a className="active" href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#services" onClick={closeMenu}>
              Services <ChevronDown size={14} />
            </a>

            <a href="#portfolio" onClick={closeMenu}>
              Portfolio <ChevronDown size={14} />
            </a>

            <a href="#templates" onClick={closeMenu}>
              Templates
            </a>

            <a href="#about" onClick={closeMenu}>
              About Us
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            className="nav-cta"
            href={whatsappLink(
              "I would like to discuss a design project. Please guide me."
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />

        <div className="hero-content">
          <div className="eyebrow">
            <i /> Design <b>•</b> Brand <b>•</b> Grow
          </div>

          <h1>
            Your Ideas.
            <br />
            <em>Our Creativity.</em>
          </h1>

          <p>
            Premium Design Solutions for Cafés, Restaurants,
            <br className="desktop" />
            Shops & More in <strong>Lucknow.</strong>
          </p>

          <div className="hero-actions">
            <a className="btn btn-orange" href="#templates">
              Explore Templates <ArrowRight size={18} />
            </a>

            <a className="btn btn-outline" href="#portfolio">
              <span className="play">▶</span>
              Watch Our Work
            </a>
          </div>

          <div className="hero-note">
            Let's Design
            <br />
            Something Amazing!
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>Creative ideas.</span>
          <span>Thoughtful design.</span>
          <span>Made for your business.</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-strip" id="services">
        {services.map(({ icon: Icon, title, sub }) => (
          <a className="service-item" href="#contact" key={title}>
            <Icon size={29} strokeWidth={1.7} />
            <strong>{title}</strong>
            <small>{sub}</small>
          </a>
        ))}
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section section-pad" id="portfolio">
        <div className="portfolio-intro">
          <div className="section-kicker">
            <i /> Our Portfolio
          </div>

          <h2>
            A Glimpse of
            <br />
            <em>Our Work</em>
          </h2>

          <p>Beautiful designs. Real impact.</p>

          <a className="btn btn-outline small" href="#templates">
            View All Templates <ArrowRight size={15} />
          </a>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <button
              className="portfolio-card"
              key={item.title}
              onClick={() => setSelected(item)}
            >
              <img src={item.image} alt={item.title} />

              <span>
                <b>{item.title}</b>
                <small>{item.type}</small>
              </span>

              <i>
                <ArrowUpRight size={19} />
              </i>
            </button>
          ))}
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="templates-section section-pad" id="templates">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <i /> Ready-to-customize designs
            </div>

            <h2>
              Explore Our <em>Templates</em>
            </h2>

            <p>Choose a design you love. We'll make it yours.</p>
          </div>

          <div className="filter-row">
            {filters.map((f) => (
              <button
                className={filter === f ? "filter active" : "filter"}
                onClick={() => setFilter(f)}
                key={f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="template-grid">
          {shown.map((t) => (
            <article className="template-card" key={t.name}>
              <button
                className="template-image"
                onClick={() => setSelected(t)}
              >
                <img src={t.image} alt={t.name} />
                <span>
                  Quick preview <ArrowUpRight size={15} />
                </span>
              </button>

              <div className="template-info">
                <div>
                  <h3>{t.name}</h3>
                  <small>{t.category}</small>
                </div>

                <b>{t.price}</b>
              </div>

              <a
                href={whatsappLink(
                  `I am interested in "${t.name}" (${t.category}), listed at ${t.price}. Please share more details.`
                )}
                target="_blank"
                rel="noreferrer"
                className="template-order"
              >
                Order this design <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-band" id="about">
        <div className="about-copy">
          <div className="section-kicker">
            <i /> Why EASYGo
          </div>

          <h2>
            Good design makes
            <br />
            <em>you stand out.</em>
          </h2>

          <p>
            We help local businesses look their best with creative,
            thoughtful and affordable design solutions. From your first
            menu to a complete brand identity, let's build something
            people remember.
          </p>

          <a className="btn btn-orange" href="#contact">
            Let's Work Together <ArrowRight size={17} />
          </a>
        </div>

        <div className="promise-list">
          <div>
            <Gem />
            <span>
              <b>Premium Quality</b>
              <small>Designs made with care</small>
            </span>
          </div>

          <div>
            <Zap />
            <span>
              <b>Fast Turnaround</b>
              <small>Quick and clear communication</small>
            </span>
          </div>

          <div>
            <Handshake />
            <span>
              <b>Affordable Packages</b>
              <small>Options for every business</small>
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-pad" id="contact">
        <div>
          <div className="section-kicker">
            <i /> Start a project
          </div>

          <h2>
            Let's grow your brand
            <br />
            <em>together.</em>
          </h2>

          <p>
            Have an idea? Tell us what you need. We'll help bring it to life.
          </p>
        </div>

        <div className="contact-card">
          <MapPin />

          <div>
            <b>Proudly serving Lucknow</b>
            <small>Working with cafés, restaurants, shops & more.</small>
          </div>

          <a
            className="btn btn-orange"
            href={whatsappLink(
              "I would like to request a free design consultation. Please contact me with further details."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Get a Free Consultation <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Brand />

        <span>
          © {new Date().getFullYear()} EASYGo Creative Design Studio.
          All rights reserved.
        </span>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} />
          Let's talk
        </a>
      </footer>

      {/* IMAGE PREVIEW MODAL */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="preview-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close preview"
            >
              <X />
            </button>

            <img
              src={selected.image}
              alt={selected.name || selected.title}
            />

            <div className="modal-caption">
              <div>
                <h3>{selected.name || selected.title}</h3>
                <p>{selected.category || selected.type}</p>
              </div>

              <a
                className="btn btn-orange"
                href={whatsappLink(
                  `I would like to enquire about ordering or customizing "${selected.name || selected.title}". Please share the details.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                Enquire now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
