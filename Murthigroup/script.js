/* ==========================================================================
   MURTHI GROUP - INTERACTIVE JAVASCRIPT LOGIC
   Featuring Bilingual Switcher (EN/FR), Quote Calculator, & Form Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const quoteModal = document.getElementById('quoteModal');
  const closeQuoteModal = document.getElementById('closeQuoteModal');
  const openQuoteBtns = document.querySelectorAll('.open-quote-btn');
  const contactForm = document.getElementById('contactForm');
  const modalQuoteForm = document.getElementById('modalQuoteForm');
  const toastContainer = document.getElementById('toastContainer');

  // --- Sticky Header on Scroll ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Toggle ---
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // --- Modal Controller ---
  const openModal = (productName = '') => {
    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (productName) {
      const productSelect = document.getElementById('quoteProduct');
      if (productSelect) {
        productSelect.value = productName;
      }
    }
  };

  const closeModal = () => {
    quoteModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || '';
      openModal(product);
    });
  });

  if (closeQuoteModal) {
    closeQuoteModal.addEventListener('click', closeModal);
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  // --- Toast Notification System ---
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--gold-primary); font-size: 1.2rem;"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // --- Form Handling ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      showToast(`Thank you, ${name}! Your inquiry has been sent. Our team will contact you shortly.`);
      contactForm.reset();
    });
  }

  if (modalQuoteForm) {
    modalQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(`Quote request submitted! We will send detailed wholesale pricing to your email.`);
      modalQuoteForm.reset();
      closeModal();
    });
  }

  // --- Bilingual Language Switcher (EN / FR) ---
  const langBtns = document.querySelectorAll('.lang-btn');
  
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_products: "Our Products",
      nav_why: "Why Us",
      nav_services: "Services",
      nav_contact: "Contact",
      btn_get_quote: "Get a Quote",
      hero_pill: "🌾 Premier Importer Serving Madagascar",
      hero_title: "Murthi Group – Trusted Import Partner for <span>Madagascar</span>",
      hero_subtitle: "Over 12 Years of Excellence in International Trade.",
      hero_desc: "Murthi Group is a trusted importer serving the Madagascar market with over 12 years of experience in international trade. We specialize in supplying high-quality Rice, Sugar, and Maida (Farine) while building long-term partnerships through honesty, reliability, and exceptional service.",
      btn_contact: "Contact Us",
      btn_about: "About Us",
      about_badge: "Years of Trust",
      about_title: "Welcome to Murthi Group",
      about_p1: "Welcome to Murthi Group, a trusted name in international trading. For more than 12 years, we have been committed to delivering premium-quality food products to customers in Madagascar. Our focus on integrity, quality assurance, and timely delivery has made us a reliable partner in global trade.",
      about_p2: "We believe that successful business is built on trust, consistency, and long-term relationships. Our experienced team ensures that every shipment meets the highest standards of quality and customer satisfaction.",
      prod_title: "Our Premium Commodities",
      prod_desc: "Sourced from world-class producers and delivered reliably across Madagascar.",
      prod_rice_desc: "High-quality rice sourced from trusted suppliers. Suitable for wholesale and bulk imports.",
      prod_sugar_desc: "Premium refined sugar with consistent quality. Reliable bulk supply for commercial needs.",
      prod_flour_desc: "High-quality wheat flour (Farine/Maida). Ideal for bakeries, food manufacturers, and distributors.",
      why_title: "Why Choose Murthi Group?",
      why_desc: "The competitive edge that makes us Madagascar's preferred import partner.",
      serv_title: "Our Core Services",
      serv_desc: "End-to-end global supply chain and commodity import solutions.",
      contact_title: "Get in Touch with Our Trade Experts",
      contact_desc: "Ready to order bulk commodities or discuss trade partnerships? Reach out today."
    },
    fr: {
      nav_home: "Accueil",
      nav_about: "À Propos",
      nav_products: "Nos Produits",
      nav_why: "Pourquoi Nous",
      nav_services: "Services",
      nav_contact: "Contact",
      btn_get_quote: "Demander un Devis",
      hero_pill: "🌾 Importateur Principal au Service de Madagascar",
      hero_title: "Murthi Group – Partenaire d'Importation de Confiance pour <span>Madagascar</span>",
      hero_subtitle: "Plus de 12 ans d'excellence dans le commerce international.",
      hero_desc: "Murthi Group est un importateur de confiance au service du marché malgache avec plus de 12 ans d'expérience dans le commerce international. Nous sommes spécialisés dans la fourniture de riz, sucre et farine (Maida) de haute qualité tout en bâtissant des partenariats durables.",
      btn_contact: "Contactez-nous",
      btn_about: "À Propos de Nous",
      about_badge: "Ans de Confiance",
      about_title: "Bienvenue chez Murthi Group",
      about_p1: "Bienvenue chez Murthi Group, un nom de confiance dans le commerce international. Depuis plus de 12 ans, nous nous engageons à fournir des produits alimentaires de qualité supérieure à nos clients à Madagascar.",
      about_p2: "Nous croyons qu'une entreprise florissante repose sur la confiance, la régularité et des relations à long terme. Notre équipe expérimentée veille à ce que chaque expédition réponde aux normes les plus élevées.",
      prod_title: "Nos Produits de Premier Choix",
      prod_desc: "Provenant de producteurs mondiaux de premier ordre et livrés de manière fiable à Madagascar.",
      prod_rice_desc: "Riz de haute qualité provenant de fournisseurs certifiés. Idéal pour l'importation en gros.",
      prod_sugar_desc: "Sucre raffiné de qualité supérieure et constante. Approvisionnement fiable pour les besoins commerciaux.",
      prod_flour_desc: "Farine de blé de haute qualité (Farine/Maida). Idéale pour les boulangeries et fabricants alimentaires.",
      why_title: "Pourquoi Choisir Murthi Group ?",
      why_desc: "L'avantage concurrentiel qui fait de nous le partenaire privilégié à Madagascar.",
      serv_title: "Nos Services Principaux",
      serv_desc: "Solutions complètes de chaîne d'approvisionnement globale et d'importation de marchandises.",
      contact_title: "Contactez Nos Experts en Commerce",
      contact_desc: "Prêt à commander des marchandises en gros ou à discuter de partenariats commerciaux ?"
    }
  };

  const setLanguage = (lang) => {
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  };

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
