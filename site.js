/* SMA Consulting — capability website. Precompiled from site.jsx (React.createElement). Do not edit by hand. */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   SMA Consulting — capability website (UI kit recreation)
   Self-contained: reuses design-system CSS classes from
   styles.css. Mounts <Site/>. window globals only.
   ============================================================ */
const {
  useState,
  useEffect,
  useRef
} = React;
const D = window.SMA_DATA;
const ASSETS = "assets";

/* ---- small inline icons (Lucide-weight, 2px stroke) ---- */
const Svg = p => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: "1em",
  height: "1em"
}, p));
const IconArrow = () => /*#__PURE__*/React.createElement(Svg, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const IconArrowUR = () => /*#__PURE__*/React.createElement(Svg, null, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M8 7h9v9"
}));
const IconCheck = () => /*#__PURE__*/React.createElement(Svg, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const IconMail = () => /*#__PURE__*/React.createElement(Svg, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const IconDot = () => /*#__PURE__*/React.createElement(Svg, {
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4",
  fill: "currentColor",
  stroke: "none"
}));

/* ================= NAV ================= */
const NAV = [["Capability", "capability"], ["Principals", "principals"], ["Podcast", "podcast"], ["Delivery", "delivery"], ["Impact", "impact"]];
function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: "-45% 0px -50% 0px"
    });
    NAV.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav__logo",
    onClick: e => go(e, "top")
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-mark.png`,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "SMA ", /*#__PURE__*/React.createElement("strong", null, "Consulting"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, NAV.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    onClick: e => go(e, id),
    className: active === id ? "is-active" : ""
  }, label))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "sma-btn sma-btn--accent sma-btn--sm",
    onClick: e => go(e, "contact")
  }, "Speak to a principal")));
}

/* ================= HERO ================= */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__motif",
    src: `${ASSETS}/logo-mark-white.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sma-container hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow sma-eyebrow--on-ink"
  }, "SMA Consulting \u2014 Your Change Partner"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Strategic advisors.", /*#__PURE__*/React.createElement("br", null), "Your critical friend."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "A consortium of senior independent consultants delivering high-impact strategic advisory, operational excellence and technical leadership across public and private sector frameworks."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#delivery",
    className: "sma-btn sma-btn--accent sma-btn--lg",
    onClick: e => {
      e.preventDefault();
      document.getElementById("delivery").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Our active frameworks ", /*#__PURE__*/React.createElement(IconArrow, null)), /*#__PURE__*/React.createElement("a", {
    href: "#principals",
    className: "sma-btn sma-btn--secondary sma-btn--on-ink sma-btn--lg",
    onClick: e => {
      e.preventDefault();
      document.getElementById("principals").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Meet the principals")), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, [["£21m", "verified savings delivered"], ["620", "jobs safeguarded"], ["16,000", "staff transformed"], ["8", "active framework partners"]].map(([f, l]) => /*#__PURE__*/React.createElement("div", {
    className: "sma-stat sma-stat--on-ink",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-stat__figure"
  }, f), /*#__PURE__*/React.createElement("div", {
    className: "sma-stat__label"
  }, l))))));
}

/* ================= VALUE PROP ================= */
function ValueProp() {
  return /*#__PURE__*/React.createElement("section", {
    className: "vp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container vp__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow"
  }, "The consortium"), /*#__PURE__*/React.createElement("p", {
    className: "vp__text"
  }, "SMA Consulting is a ", /*#__PURE__*/React.createElement("strong", null, "unified team of strategic advisors"), " for our clients. We combine deep institutional governance, board-level strategy and rigorous operational standards \u2014 building capability at every level, alongside you."), /*#__PURE__*/React.createElement("ul", {
    className: "vp__values"
  }, ["Approachable", "Agile", "Flexible", "Principle-led", "Transparent", "Honest"].map(v => /*#__PURE__*/React.createElement("li", {
    key: v,
    className: "vp__value"
  }, v)))));
}

/* ================= PILLARS ================= */
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "capability"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-section-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow"
  }, "Our capability"), /*#__PURE__*/React.createElement("h2", null, "Five integrated service pillars"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "Technically robust and culturally sustainable. Each pillar is delivered through the entity that owns the expertise.")), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, D.pillars.map(p => /*#__PURE__*/React.createElement("article", {
    className: "sma-pillar",
    key: p.no
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-pillar__no"
  }, p.no), /*#__PURE__*/React.createElement("h3", {
    className: "sma-pillar__title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "sma-pillar__entity"
  }, p.entity), /*#__PURE__*/React.createElement("p", {
    className: "pillar__blurb"
  }, p.blurb)), /*#__PURE__*/React.createElement("ul", {
    className: "sma-pillar__list"
  }, p.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it))))), /*#__PURE__*/React.createElement("article", {
    className: "pillar-cta"
  }, /*#__PURE__*/React.createElement("p", null, "Not sure where your challenge sits?"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "sma-btn sma-btn--on-ink sma-btn--secondary",
    onClick: e => {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "Discuss a project ", /*#__PURE__*/React.createElement(IconArrow, null))))));
}

/* ================= PRINCIPALS ================= */
function Principals() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "principals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-section-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow"
  }, "The principals"), /*#__PURE__*/React.createElement("h2", null, "Senior consultants. The principals are the product."), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "Every engagement is led by a named principal and delivered through their established entity \u2014 board-level experience you can put a face and a track record to.")), /*#__PURE__*/React.createElement("div", {
    className: "principals"
  }, D.principals.map(m => /*#__PURE__*/React.createElement("article", {
    className: "sma-principal",
    key: m.initials
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__photo",
    style: {
      backgroundImage: `url(${ASSETS}/principals/${m.photo}.png)`
    },
    role: "img",
    "aria-label": m.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__name"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__entity"
  }, m.entity), /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__focus"
  }, m.focus), /*#__PURE__*/React.createElement("div", {
    className: "sma-principal__cred"
  }, m.cred)))))));
}

/* ================= PODCAST ================= */
function Podcast() {
  const pc = D.podcast;
  const byPhoto = Object.fromEntries(D.principals.map(p => [p.photo, p]));
  const [playing, setPlaying] = useState(null);
  return /*#__PURE__*/React.createElement("section", {
    className: "section podcast",
    id: "podcast"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "podcast__intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "podcast__lead"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow sma-eyebrow--on-ink"
  }, "Insights \u2014 in our own words"), /*#__PURE__*/React.createElement("h2", {
    className: "podcast__show"
  }, pc.show), /*#__PURE__*/React.createElement("p", {
    className: "podcast__blurb"
  }, pc.blurb), /*#__PURE__*/React.createElement("div", {
    className: "podcast__hosts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "podcast__faces"
  }, pc.hosts.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "podcast__face",
    style: {
      backgroundImage: `url(${ASSETS}/principals/${h}.png)`
    },
    title: byPhoto[h] ? byPhoto[h].name : h
  }))), /*#__PURE__*/React.createElement("div", {
    className: "podcast__hostmeta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "podcast__with"
  }, "With ", pc.hosts.map(h => byPhoto[h].name.replace("Dr. ", "").split(" ")[0]).join(", ").replace(/, ([^,]*)$/, " & $1")), /*#__PURE__*/React.createElement("span", {
    className: "podcast__status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", pc.status)))), /*#__PURE__*/React.createElement("div", {
    className: "podcast__episodes"
  }, pc.episodes.map(ep => {
    const isPlaying = playing === ep.no;
    return /*#__PURE__*/React.createElement("article", {
      className: "ep" + (isPlaying ? " ep--playing" : ""),
      key: ep.no
    }, /*#__PURE__*/React.createElement("div", {
      className: "ep__top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ep__no"
    }, ep.no), /*#__PURE__*/React.createElement("span", {
      className: "ep__len"
    }, ep.length)), /*#__PURE__*/React.createElement("h3", {
      className: "ep__title"
    }, ep.title), /*#__PURE__*/React.createElement("p", {
      className: "ep__sub"
    }, ep.sub), /*#__PURE__*/React.createElement("blockquote", {
      className: "ep__quote"
    }, ep.quote), ep.youtubeId ? /*#__PURE__*/React.createElement("div", {
      className: "ep__video"
    }, isPlaying ? /*#__PURE__*/React.createElement("iframe", {
      src: "https://www.youtube.com/embed/" + ep.youtubeId + "?autoplay=1",
      title: ep.title,
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true
    }) : /*#__PURE__*/React.createElement("button", {
      className: "ep__thumb",
      onClick: () => setPlaying(ep.no),
      "aria-label": "Watch " + ep.title
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://img.youtube.com/vi/" + ep.youtubeId + "/maxresdefault.jpg",
      alt: ep.title,
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ep__play-btn"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 72 72",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "64",
      height: "64"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "36",
      fill: "rgba(0,0,0,0.55)"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "29,22 54,36 29,50",
      fill: "white"
    }))))) : null, /*#__PURE__*/React.createElement("div", {
      className: "ep__foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ep__topics"
    }, ep.topics.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "ep__topic"
    }, t))), ep.youtubeId ? /*#__PURE__*/React.createElement("a", {
      href: "https://youtu.be/" + ep.youtubeId,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "ep__yt-link"
    }, "Watch on YouTube \u2197") : /*#__PURE__*/React.createElement("span", {
      className: "ep__soon"
    }, "Coming soon")));
  })))));
}

/* ================= PROVEN DELIVERY ================= */
function Delivery() {
  const f = D.frameworks;
  return /*#__PURE__*/React.createElement("section", {
    className: "section delivery",
    id: "delivery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-section-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow sma-eyebrow--on-ink"
  }, "Proven delivery"), /*#__PURE__*/React.createElement("h2", null, "An active, winning consortium"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub section-sub--ink"
  }, "We hold and currently deliver on multiple framework lots \u2014 a single source across disciplines, not a single service.")), /*#__PURE__*/React.createElement("div", {
    className: "delivery__lots"
  }, f.lots.map(l => /*#__PURE__*/React.createElement("span", {
    className: "lot",
    key: l
  }, /*#__PURE__*/React.createElement(IconCheck, null), " ", l))), /*#__PURE__*/React.createElement("div", {
    className: "delivery__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "delivery__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "delivery__label"
  }, "Councils"), /*#__PURE__*/React.createElement("ul", null, f.councils.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement(IconDot, null), " ", c)))), /*#__PURE__*/React.createElement("div", {
    className: "delivery__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "delivery__label"
  }, "Colleges"), /*#__PURE__*/React.createElement("ul", null, f.colleges.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement(IconDot, null), " ", c)))))));
}

/* ================= IMPACT ================= */
const CATS = ["All", "Strategy", "Technical", "Operational", "Leadership", "Innovation"];
function Impact() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? D.impact : D.impact.filter(i => i.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "impact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-section-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow"
  }, "Impact & track record"), /*#__PURE__*/React.createElement("h2", null, "Measurable change, anonymised by sector"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub"
  }, "From multi-million-pound efficiency to large-scale cultural shifts. The numbers are the proof.")), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "filter" + (cat === c ? " is-active" : ""),
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "impact"
  }, list.map(i => /*#__PURE__*/React.createElement("article", {
    className: "impact__card",
    key: i.sector + i.body.slice(0, 12)
  }, /*#__PURE__*/React.createElement("div", {
    className: "impact__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sma-badge sma-badge--outline"
  }, i.cat), i.kpi && /*#__PURE__*/React.createElement("span", {
    className: "impact__kpi"
  }, i.kpi)), /*#__PURE__*/React.createElement("h3", {
    className: "impact__sector"
  }, i.sector), /*#__PURE__*/React.createElement("p", {
    className: "impact__body"
  }, i.body))))));
}

/* ================= CONTACT ================= */
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container contact__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sma-eyebrow sma-eyebrow--on-ink"
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", {
    className: "contact__title"
  }, "Discuss a project with a principal."), /*#__PURE__*/React.createElement("p", {
    className: "contact__lead"
  }, "Tell us the friction you\u2019re facing. We\u2019ll point you to the principal who has already solved it."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:sma@pantheos.co.uk",
    className: "sma-btn sma-btn--accent sma-btn--lg"
  }, /*#__PURE__*/React.createElement(IconMail, null), " sma@pantheos.co.uk")), /*#__PURE__*/React.createElement("div", {
    className: "contact__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement("span", null, "Direct enquiry"), /*#__PURE__*/React.createElement("strong", null, "sma@pantheos.co.uk")), /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement("span", null, "Web"), /*#__PURE__*/React.createElement("strong", null, "sma-consulting.co.uk")), /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement("span", null, "Engagement"), /*#__PURE__*/React.createElement("strong", null, "Diagnostic \u2192 Strategic design \u2192 Handover")))));
}

/* ================= FOOTER ================= */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sma-container footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-lockup-white.png`,
    alt: "SMA Consulting"
  }), /*#__PURE__*/React.createElement("p", null, "A consortium of senior independent consultants. Your change partner \u2014 your critical friend.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__found"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__label"
  }, "Entity foundations"), /*#__PURE__*/React.createElement("div", {
    className: "footer__chips"
  }, D.foundations.map(e => /*#__PURE__*/React.createElement("span", {
    key: e
  }, e))))), /*#__PURE__*/React.createElement("div", {
    className: "sma-container footer__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " SMA Consulting"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:sma@pantheos.co.uk"
  }, "sma@pantheos.co.uk ", /*#__PURE__*/React.createElement(IconArrowUR, null))));
}
function Site() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ValueProp, null), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Principals, null), /*#__PURE__*/React.createElement(Podcast, null), /*#__PURE__*/React.createElement(Delivery, null), /*#__PURE__*/React.createElement(Impact, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Site, null));