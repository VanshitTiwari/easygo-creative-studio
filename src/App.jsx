
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

${message ? `My enquiry: ${message}` : "Please share details about your custom design services and how we can get started."}

Kindly guide me through the next steps.

Thank you.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formalMessage)}`;
}

const services = [
  {
    icon: Utensils,
    title: "Menu Designs",
    sub: "Restaurant & Café Menus",
    tag: "Custom menu design"
  },
  {
    icon: Image,
    title: "Banners & Posters",
    sub: "Promotions & Offers",
    tag: "Custom print design"
  },
  {
    icon: Tag,
    title: "Branding",
    sub: "Logo & Identity",
    tag: "Brand identity design"
  },
  {
    icon: Instagram,
    title: "Social Media Designs",
    sub: "Posts & Stories",
    tag: "Social media creatives"
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
    sub: "Original Designs from Scratch",
    tag: "Made for your idea"
  }
];

const portfolio = [
  {
    image: "/images/portfolio-menu.jpg",
    title: "The Royal Bite",
    type: "Restaurant menu design"
  },
  {
    image: "/images/portfolio-birthday.jpg",
    title: "Birthday Celebration",
    type: "Event creative design"
  },
  {
    image: "/images/portfolio-sale.jpg",
    title: "Big Sale",
    type: "Retail promotional design"
  },
  {
    image: "/images/portfolio-bakery.jpg",
    title: "The Bakery",
    type: "Brand collateral design"
  },
  {
    image: "/images/portfolio-food.jpg",
    title: "Good Food, Good Mood",
    type: "Food promotional design"
  }
];

const templates = [
  {
    name: "Premium Food Menu",
    category: "Menus",
    image: "/images/portfolio-menu.jpg"
  },
  {
    name: "Café Special Offer",
    category: "Posters",
    image: "/images/hero-showcase.jpg"
  },
  {
    name: "Birthday Celebration",
    category: "Social Media",
    image: "/images/portfolio-birthday.jpg"
  },
  {
    name: "Grand Opening",
    category: "Posters",
    image: "/images/portfolio-bakery.jpg"
  },
  {
    name: "Big Sale Creative",
    category: "Social Media",
    image: "/images/portfolio-sale.jpg"
  },
  {
    name: "Bakery Menu Style",
    category: "Menus",
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
              Design Ideas
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
              "I would like to discuss a custom design project. Please guide me."
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
            Custom graphic design for cafés, restaurants, shops
            <br className="desktop" />
            and growing businesses in <strong>Lucknow.</strong>
            <br />
            Original designs, thoughtfully created from scratch.
          </p>

          <div className="hero-actions">
            <a className="btn btn-orange" href="#portfolio">
              Explore Our Designs <ArrowRight size={18} />
            </a>

            <a className="btn btn-outline" href="#contact">
              <span className="play">▶</span>
              Start a Project
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
            Creative Ideas.
            <br />
            <em>Custom Made.</em>
          </h2>

          <p>
            Explore examples of our creative work. Every new project is
            designed from scratch to match the client's brand, idea and needs.
          </p>

          <a className="btn btn-outline small" href="#contact">
            Discuss Your Project <ArrowRight size={15} />
          </a>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <button
              className="portfolio-card"
              key={item.title}
              onClick={() => setSelected(item)}
              aria-label={`Preview ${item.title}`}
            >
              <img src={item.image} alt={`${item.title} - ${item.type}`} />

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

      {/* DESIGN IDEAS */}
      <section className="templates-section section-pad" id="templates">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <i /> Design Inspiration
            </div>

            <h2>
              Explore Design <em>Ideas</em>
            </h2>

            <p>
              These examples give you an idea of our work. Your design will
              be created from scratch and tailored to your requirements.
            </p>
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
                aria-label={`Preview ${t.name}`}
              >
                <img src={t.image} alt={`${t.name} design example`} />
                <span>
                  Quick preview <ArrowUpRight size={15} />
                </span>
              </button>

              <div className="template-info">
                <div>
                  <h3>{t.name}</h3>
                  <small>{t.category} design inspiration</small>
                </div>

                <b>Custom Quote</b>
              </div>

              <a
                href={whatsappLink(
                  `I liked the "${t.name}" (${t.category}) design example on your website. I would like to discuss creating an original design from scratch for my business. Please share the details and quotation.`
                )}
                target="_blank"
                rel="noreferrer"
                className="template-order"
              >
                Create My Custom Design <ArrowRight size={15} />
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
            Your vision.
            <br />
            <em>Our original design.</em>
          </h2>

          <p>
            EASYGo Creative Design Studio is a custom graphic design studio
            serving businesses in Lucknow. We create original designs from
            scratch—not just edits of ready-made templates. From restaurant
            menus and promotional posters to social media creatives and
            brand identities, every design is shaped around your idea,
            business and audience.
          </p>

          <a className="btn btn-orange" href="#contact">
            Let's Work Together <ArrowRight size={17} />
          </a>
        </div>

        <div className="promise-list">
          <div>
            <Gem />
            <span>
              <b>Original Creative Work</b>
              <small>Custom designs created from scratch</small>
            </span>
          </div>

          <div>
            <Zap />
            <span>
              <b>Clear Communication</b>
              <small>A smooth process from idea to design</small>
            </span>
          </div>

          <div>
            <Handshake />
            <span>
              <b>Designed Around You</b>
              <small>Creative solutions for your business needs</small>
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
            Have an idea?
            <br />
            <em>Let's create it.</em>
          </h2>

          <p>
            Looking for a custom poster designer, restaurant menu designer
            or branding design service in Lucknow? Tell us about your idea.
            We'll work with you to create an original design from scratch.
          </p>
        </div>

        <div className="contact-card">
          <MapPin />

          <div>
            <b>Custom Graphic Design in Lucknow</b>
            <small>
              Serving cafés, restaurants, shops and growing local businesses.
            </small>
          </div>

          <a
            className="btn btn-orange"
            href={whatsappLink(
              "I would like to discuss a custom design project in Lucknow. I need an original design created from scratch. Please guide me through the process and quotation."
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

        <a href={whatsappLink()} target="_blank" rel="noreferrer">
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
            aria-label="Design preview"
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
                  `I liked the "${selected.name || selected.title}" design example. I would like to discuss creating a custom design from scratch for my business. Please share the details and quotation.`
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
