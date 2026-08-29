import meta from "../../../pages/_meta.tsx";
import events_meta from "../../../pages/events/_meta.tsx";
import people_meta from "../../../pages/people/_meta.tsx";
import research_meta from "../../../pages/research/_meta.tsx";
import technology_meta from "../../../pages/technology/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "awards",
  route: "/awards",
  frontMatter: {
    "title": "CENIT Awards and Honors",
    "date": "2026/07/13"
  }
}, {
  name: "contact",
  route: "/contact",
  frontMatter: {
    "title": "Contact CENIT",
    "date": "2026/07/13"
  }
}, {
  name: "events",
  route: "/events",
  children: [{
    data: events_meta
  }, {
    name: "community",
    route: "/events/community",
    frontMatter: {
      "title": "Community Engagements",
      "image": "/events/community.png",
      "date": "2026/08/25"
    }
  }, {
    name: "talk",
    route: "/events/talk",
    frontMatter: {
      "title": "Talks",
      "image": "/events/talk.png",
      "date": "2026/08/25"
    }
  }]
}, {
  name: "events",
  route: "/events",
  frontMatter: {
    "title": "CENIT EVENTs",
    "date": "2026/08/25"
  }
}, {
  name: "gallery",
  route: "/gallery",
  frontMatter: {
    "title": "CENIT Gallery",
    "date": "2026/07/13"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "CENIT Home",
    "date": "2026/07/13"
  }
}, {
  name: "patents",
  route: "/patents",
  frontMatter: {
    "title": "CENIT Patents",
    "date": "2026/07/13"
  }
}, {
  name: "people",
  route: "/people",
  children: [{
    data: people_meta
  }, {
    name: "abdulaziz_ali_alhamodi",
    route: "/people/abdulaziz_ali_alhamodi",
    frontMatter: {
      "title": "Abdulaziz Ali Alhamodi",
      "image": "/people/a1.png",
      "role": "Assistant Professor\nUniversity of Tabuk",
      "category": "C5_32",
      "date": "2026/08/08",
      "linkedin": "http://www.linkedin.com/in/abdulazaz-albalawi"
    }
  }, {
    name: "admin",
    route: "/people/admin",
    frontMatter: {
      "title": "TBD",
      "image": "/people/",
      "role": "Administrative Assistant",
      "category": "C3_10",
      "date": "2026/07/13"
    }
  }, {
    name: "charles_hsieh_2",
    route: "/people/charles_hsieh_2",
    frontMatter: {
      "title": "Charles Hsieh",
      "image": "/people/ch1.jpg",
      "role": "Undergraduate Student\nUniversity of Toronto",
      "category": "C6_100",
      "date": "2026/07/13",
      "linkedin": "https://ca.linkedin.com/in/charles-hsieh-856682239",
      "google_scholar": "https://scholar.google.com/citations?user=V3XptIcAAAAJ&hl=en&oi=ao",
      "github": "https://github.com/1hsiehcha",
      "website": "https://1hsiehcha.github.io/personal-website/"
    }
  }, {
    name: "charles_hsieh",
    route: "/people/charles_hsieh",
    frontMatter: {
      "title": "Charles Hsieh",
      "image": "/people/ch1.jpg",
      "role": "Master Student\nUniversity of Toronto",
      "category": "C4_300",
      "date": "2026/07/13",
      "linkedin": "https://ca.linkedin.com/in/charles-hsieh-856682239",
      "google_scholar": "https://scholar.google.com/citations?user=V3XptIcAAAAJ&hl=en&oi=ao",
      "github": "https://github.com/1hsiehcha",
      "website": "https://1hsiehcha.github.io/personal-website/"
    }
  }, {
    name: "christophe_diot",
    route: "/people/christophe_diot",
    frontMatter: {
      "title": "Christophe Diot",
      "image": "/people/c2.jpg",
      "role": "ACM Fellow",
      "category": "C2_20",
      "date": "2026/08/28",
      "google_scholar": "https://scholar.google.com/citations?user=wtMGHCQAAAAJ&hl=en"
    }
  }, {
    name: "ebube_itanyi",
    route: "/people/ebube_itanyi",
    frontMatter: {
      "title": "Ebube Itanyi",
      "image": "/people/e2.jpg",
      "role": "Undergraduate Student\nUniversity of Toronto",
      "category": "C4_410",
      "date": "2026/08/29",
      "linkedin": "https://www.linkedin.com/in/ebubechukwu-itanyi-8b839a275/"
    }
  }, {
    name: "ersin_uzun",
    route: "/people/ersin_uzun",
    frontMatter: {
      "title": "Ersin Uzun",
      "image": "/people/e1.jpeg",
      "role": "Professor\nRochester Institute of Technology",
      "category": "C5_11",
      "date": "2026/08/06",
      "linkedin": "https://www.linkedin.com/in/ersinuzun/",
      "google_scholar": "https://scholar.google.com/citations?user=-sf4IhMAAAAJ&amp;hl=en",
      "website": "https://www.rit.edu/directory/exugci-ersin-uzun"
    }
  }, {
    name: "folake_oyewole",
    route: "/people/folake_oyewole",
    frontMatter: {
      "title": "Folake Oyewole",
      "image": "/people/f1.jpg",
      "role": "Senior Research Analyst\nUniversity of Toronto",
      "category": "C3_1",
      "date": "2026/08/29",
      "linkedin": "https://www.linkedin.com/in/folakeoyewole/"
    }
  }, {
    name: "jj_garcia-luna-aceves",
    route: "/people/jj_garcia-luna-aceves",
    frontMatter: {
      "title": "JJ Garcia-Luna-Aceves",
      "image": "/people/j1.jpg",
      "role": "Principal Investigator\nUniversity of Toronto",
      "category": "C1_10",
      "date": "2026/07/13",
      "linkedin": "https://ca.linkedin.com/in/j-j-garcia-luna-aceves-9a53a339",
      "website": "https://www.ece.utoronto.ca/people/garcia-luna-aceves-j-j/",
      "google_scholar": "https://scholar.google.com/citations?user=wLtmXGQAAAAJ&hl=en"
    }
  }, {
    name: "joao_galdino",
    route: "/people/joao_galdino",
    frontMatter: {
      "title": "Joao Paulo Pinto Galdino Marques",
      "image": "/people/j2.jpg",
      "role": "PhD Student\nUniversity of Toronto",
      "category": "C4_110",
      "date": "2026/07/13",
      "linkedin": "www.linkedin.com/in/joaoppgmarques",
      "google_scholar": "https://scholar.google.ca/citations?user=nRDXN1oAAAAJ&hl=en&oi=ao"
    }
  }, {
    name: "jorg_liebeherr",
    route: "/people/jorg_liebeherr",
    frontMatter: {
      "title": "Jorg Liebeherr",
      "image": "/people/j3.jpg",
      "role": "Professor\nUniversity of Toronto",
      "category": "C1_30",
      "date": "2026/07/13",
      "website": "https://www.comm.toronto.edu/~jorg/",
      "google_scholar": "https://scholar.google.com/citations?user=8WrYVG8AAAAJ&hl=en"
    }
  }, {
    name: "justin_yearwood",
    route: "/people/justin_yearwood",
    frontMatter: {
      "title": "Justin Yearwood",
      "image": "/people/j4.jpg",
      "role": "Research Analyst\nUniversity of Toronto",
      "category": "C4_400",
      "date": "2026/08/29",
      "linkedin": "https://www.linkedin.com/in/justin-yearwood-39779122a/"
    }
  }, {
    name: "katia_obraczka",
    route: "/people/katia_obraczka",
    frontMatter: {
      "title": "Katia Obraczka",
      "image": "/people/k1.png",
      "role": "Professor\nUC Santa Cruz",
      "category": "C2_10",
      "date": "2026/08/01",
      "google_scholar": "https://scholar.google.com/citations?user=xALG_EMAAAAJ&hl=en",
      "website": "https://inrg.engineering.ucsc.edu/"
    }
  }, {
    name: "lindsay_montgomery",
    route: "/people/lindsay_montgomery",
    frontMatter: {
      "title": "Lindsay M. Montgomery",
      "image": "/people/l1.jpg",
      "role": "Associate Professor\nUniversity of Toronto",
      "category": "C1_40",
      "date": "2026/07/13",
      "website": "https://www.lindsay-montgomery.com/",
      "linkedin": "https://ca.linkedin.com/in/lindsay-montgomery-38329b344"
    }
  }, {
    name: "lucas_immanuel_nickel_2",
    route: "/people/lucas_immanuel_nickel_2",
    frontMatter: {
      "title": "Lucas Immanuel Nickel",
      "image": "/people/l2.jpg",
      "role": "PhD Student\nUniversity of Applied Sciences Fulda",
      "category": "C4_210",
      "date": "2026/07/13",
      "linkedin": "https://de.linkedin.com/in/lucas-immanuel-nickel",
      "github": null
    }
  }, {
    name: "lucas_immanuel_nickel",
    route: "/people/lucas_immanuel_nickel",
    frontMatter: {
      "title": "Lucas Immanuel Nickel",
      "image": "/people/l2.jpg",
      "role": "Visiting Master Student\nUniversity of Applied Sciences Fulda",
      "category": "C6_10",
      "date": "2026/07/13",
      "linkedin": "https://de.linkedin.com/in/lucas-immanuel-nickel",
      "github": null
    }
  }, {
    name: "mackenzie_campbell",
    route: "/people/mackenzie_campbell",
    frontMatter: {
      "title": "MacKenzie Campbell ",
      "image": "/people/m8.jpg",
      "role": "Research Analyst\nUniversity of Toronto",
      "category": "C6_1",
      "date": "2026/08/29",
      "linkedin": "https://www.linkedin.com/in/c-mackenzie-campbell-73a64a122/"
    }
  }, {
    name: "marcelo_m_carvalho",
    route: "/people/marcelo_m_carvalho",
    frontMatter: {
      "title": "Marcelo M. Carvalho",
      "image": "/people/m6.jpeg",
      "role": "Assistant Professor\nTexas State University",
      "category": "C5_31",
      "date": "2026/08/04",
      "linkedin": "https://www.linkedin.com/in/marcelo-carvalho-1161041/",
      "google_scholar": "https://scholar.google.com/citations?user=CXOLCqEAAAAJ&hl=en",
      "website": "https://faculty.txst.edu/profile/2416001"
    }
  }, {
    name: "mehdi_attaran",
    route: "/people/mehdi_attaran",
    frontMatter: {
      "title": "Mahdi Attaran",
      "image": "/people/m1.jpg",
      "role": "PhD Student\nUniversity of Toronto",
      "category": "C4_120",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/mahdiattaran",
      "github": null
    }
  }, {
    name: "michela_meo",
    route: "/people/michela_meo",
    frontMatter: {
      "title": "Michela Meo",
      "image": "/people/m2.jpg",
      "role": "Professor\nPolitecnico di Torino",
      "category": "C5_10",
      "date": "2026/07/13",
      "google_scholar": "https://scholar.google.ca/citations?hl=en&user=NbZRnAEAAAAJ",
      "github": null,
      "website": "https://www.polito.it/en/staff?p=michela.meo"
    }
  }, {
    name: "mohamed_ghanem",
    route: "/people/mohamed_ghanem",
    frontMatter: {
      "title": "Mohamed Chahine Ghanem",
      "image": "/people/m3.png",
      "role": "Associate Professor\nKeele University",
      "category": "C5_30",
      "date": "2026/07/13",
      "linkedin": "https://uk.linkedin.com/in/mohamed-chahine-ghanem-phd-cissp-sfhea-3665b010a",
      "google_scholar": "https://scholar.google.co.uk/citations?user=gT0iu6IAAAAJ&hl=en",
      "github": null
    }
  }, {
    name: "mohammad_sabramooz",
    route: "/people/mohammad_sabramooz",
    frontMatter: {
      "title": "Mohammad Sabramooz",
      "image": "/people/m4.jpg",
      "role": "PhD Student\nUniversity of Toronto",
      "category": "C4_130",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/mohammadreza-sabramooz-b31297139/",
      "google_scholar": "https://scholar.google.ca/citations?user=nuiHB1MAAAAJ&hl=en",
      "github": "https://github.com/Msabramooz"
    }
  }, {
    name: "morteza_moghaddassian",
    route: "/people/morteza_moghaddassian",
    frontMatter: {
      "title": "Morteza Moghaddassian",
      "image": "/people/m5.jpg",
      "role": "Senior Research Associate\nUniversity of Toronto",
      "category": "C1_20",
      "date": "2026/07/13",
      "linkedin": "https://ca.linkedin.com/in/moghaddassian",
      "google_scholar": null
    }
  }, {
    name: "mostafa_ammar",
    route: "/people/mostafa_ammar",
    frontMatter: {
      "title": "Mostafa Ammar",
      "image": "/people/m7.png",
      "role": "Professor\nGeorgia Institute of Technology",
      "category": "C2_1",
      "date": "2026/08/27",
      "google_scholar": "https://scholar.google.com/citations?user=OT79Y9UAAAAJ&hl=en",
      "website": "https://www.cc.gatech.edu/people/mostafa-ammar"
    }
  }, {
    name: "neha_sohail",
    route: "/people/neha_sohail",
    frontMatter: {
      "title": "Neha Sohail",
      "image": "/people/n1.jpg",
      "role": "Research Analyst\nUniversity of Toronto",
      "category": "C6_200",
      "date": "2026/08/29",
      "linkedin": "https://www.linkedin.com/in/neha-sohail/ "
    }
  }, {
    name: "philip_asare",
    route: "/people/philip_asare",
    frontMatter: {
      "title": "Philip Asare",
      "image": "/people/p1.png",
      "role": "Assitant Professor, Teaching Stream\nUniversity of Toronto",
      "category": "C1_50",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/philipasare/"
    }
  }, {
    name: "rider_foley",
    route: "/people/rider_foley",
    frontMatter: {
      "title": "Rider W. Foley",
      "image": "/people/r2.jpg",
      "role": "Professor\nUniversity of Virginia",
      "category": "C2_30",
      "date": "2026/08/28",
      "google_scholar": "https://scholar.google.com/citations?user=BYQG8dEAAAAJ&hl=en",
      "website": "https://engineering.virginia.edu/faculty/rider-w-foley"
    }
  }, {
    name: "rolando_menchaca-mendez",
    route: "/people/rolando_menchaca-mendez",
    frontMatter: {
      "title": "Rolando Menchaca-Méndez",
      "image": "/people/r1.jpeg",
      "role": "Professor\nNational Polytechnic Institute (CIC-IPN)",
      "category": "C5_12",
      "date": "2026/08/01",
      "linkedin": "https://www.linkedin.com/in/rolando-menchaca-mendez-90683011/",
      "website": "https://www.cic.ipn.mx/views/investigation/rolando-menchaca-mendez.php"
    }
  }, {
    name: "sardana_nikolaeva",
    route: "/people/sardana_nikolaeva",
    frontMatter: {
      "title": "Sardana Nikolaeva",
      "image": "/people/s1.jpg",
      "role": "Post-Doctoral Fellow\nUniversity of Toronto",
      "category": "C4_10",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/sardana-nikolaeva-0274b517/",
      "google_scholar": "https://scholar.google.ca/citations?user=IRoHN3MAAAAJ&hl=en",
      "website": "https://www.ziibiinglab.org/our-people"
    }
  }, {
    name: "sebastian_rieger",
    route: "/people/sebastian_rieger",
    frontMatter: {
      "title": "Sebastian Rieger",
      "image": "/people/s2.jpg",
      "role": "Professor\nUniversity of Applied Sciences Fulda",
      "category": "C5_20",
      "date": "2026/07/13",
      "linkedin": "https://de.linkedin.com/in/sebastian-rieger-5ab689a7",
      "google_scholar": "https://scholar.google.com/citations?user=-hlIJsAAAAAJ&hl=de",
      "github": null,
      "website": "https://mmnet.informatik.hs-fulda.de"
    }
  }, {
    name: "sheideh_homayon",
    route: "/people/sheideh_homayon",
    frontMatter: {
      "title": "Sheideh Homayoun",
      "image": "/people/s3.png",
      "role": "PhD Candidate\nUniversity of California at Santa Cruz",
      "category": "C4_100",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/sheideh-homayon-700632118/",
      "google_scholar": "https://scholar.google.com/citations?user=Yin_5EIAAAAJ&hl=en"
    }
  }, {
    name: "tailai_song",
    route: "/people/tailai_song",
    frontMatter: {
      "title": "Tailai Song",
      "image": "/people/t1.jpg",
      "role": "Post-Doctoral Fellow\nPolitecnico di Torino",
      "category": "C5_40",
      "date": "2026/07/13",
      "linkedin": "https://www.linkedin.com/in/tailai-song-8349b2239",
      "google_scholar": "https://scholar.google.com/citations?user=XACF17oAAAAJ"
    }
  }]
}, {
  name: "people",
  route: "/people",
  frontMatter: {
    "title": "CENIT People",
    "date": "2026/07/13"
  }
}, {
  name: "position",
  route: "/position",
  frontMatter: {
    "title": "Join CENIT",
    "date": "2026/07/13"
  }
}, {
  name: "publication",
  route: "/publication",
  frontMatter: {
    "title": "CENIT Publications",
    "date": "2026/07/13"
  }
}, {
  name: "research",
  route: "/research",
  children: [{
    data: research_meta
  }, {
    name: "intent_oriented_networking",
    route: "/research/intent_oriented_networking",
    frontMatter: {
      "title": "Intent-Oriented Networking",
      "image": "/research/ion.png",
      "date": "2026/07/13"
    }
  }, {
    name: "just_digital_infrastructure",
    route: "/research/just_digital_infrastructure",
    frontMatter: {
      "title": "Just & Equitable Digital Infrastructure",
      "image": "/research/jedi.png",
      "date": "2026/07/13"
    }
  }, {
    name: "manifest_based_transport_services",
    route: "/research/manifest_based_transport_services",
    frontMatter: {
      "title": "Manifest-based Internet Transport Services",
      "image": "/research/mints.png",
      "date": "2026/07/13"
    }
  }, {
    name: "wise_adhoc",
    route: "/research/wise_adhoc",
    frontMatter: {
      "title": "Self-reliant Wise Ad-hoc Networking",
      "image": "/research/swan.png",
      "date": "2026/07/13"
    }
  }]
}, {
  name: "research",
  route: "/research",
  frontMatter: {
    "title": "CENIT Research Thrusts",
    "date": "2026/07/13"
  }
}, {
  name: "technology",
  route: "/technology",
  children: [{
    data: technology_meta
  }, {
    name: "computing",
    route: "/technology/computing",
    frontMatter: {
      "title": "Computing Resources",
      "image": "/technology/compute.png",
      "date": "2026/08/24"
    }
  }, {
    name: "router",
    route: "/technology/router",
    frontMatter: {
      "title": "OBGP Router",
      "image": "/technology/obgp.png",
      "date": "2026/07/13"
    }
  }]
}, {
  name: "technology",
  route: "/technology",
  frontMatter: {
    "title": "CENIT Technologies",
    "date": "2026/08/24"
  }
}];