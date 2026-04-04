// ═══════════════════════════════════════════════════════════════
//  THRIVE — SITE DATA CONFIG
//  Edit this file to update content across the entire site.
// ═══════════════════════════════════════════════════════════════

// ── Brand ────────────────────────────────────────────────────────
export const BRAND = {
    name: "Thrive",
    tagline: "Glucose Monitoring Reimagined.",
    description: "A noninvasive CGM solution, powered by AI.",
    email: "patel.omtx@gmail.com",
    founded: "2024",
  };
  
  // ── Navigation ───────────────────────────────────────────────────
  export const NAV_LINKS = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Accuracy", href: "/accuracy" },
    { label: "Pricing", href: "/pricing" },
    { label: "Team", href: "/team" },
  ];
  
  // ── Hero ─────────────────────────────────────────────────────────
  export const HERO = {
    badge: "AI-Powered Health Platform",
    headline: ["Glucose", "Monitoring", "Reimagined."],
    subtext:
      "Thrive gives you continuous, noninvasive glucose insights powered by AI so you can live healthier without the needles.",
    cta_primary: { label: "Get Early Access", href: "/contact" },
    cta_secondary: { label: "Learn More", href: "/learn-more" },
  };
  
  // ── Stats ────────────────────────────────────────────────────────
  export const STATS = [
    { value: 85, suffix: "%", label: "Accuracy vs fingerprick" },
    { value: 20, suffix: "+", label: "Beta testers" },
    { value: 24, suffix: "/7", label: "Real-time monitoring" },
    { value: 0, suffix: " needles", label: "Zero invasive steps" },
  ];
  
  // ── Partner Logos (scrolling marquee) ────────────────────────────
  export const PARTNERS = [
    // Add names later
    // { name: "Junior Achievement", logo: null },
  ];
  
  // ── Services / Features ──────────────────────────────────────────
  export const FEATURES = [
    {
      icon: "Activity",
      title: "Continuous Glucose Tracking",
      description:
        "Real-time glucose readings updated every minute. Predicted readings for up to 4 hours. See trends before they become problems.",
      href: "/how-it-works",
    },
    {
      icon: "Brain",
      title: "AI-Powered Insights",
      description:
        "Our model learns your unique patterns and predicts spikes up to 30 minutes in advance, giving you time to act.",
      href: "/accuracy",
    },
    {
      icon: "Bell",
      title: "Smart Notifications",
      description:
        "Personalized alerts for highs, lows, and unusual trends. Integrates seamlessly with the smartphone app.",
      href: "/integrations",
    },
    {
      icon: "Utensils",
      title: "Meal & Activity Logging",
      description:
        "Log food with AI-assisted label scanning. See how every meal and workout shapes your glucose response.",
      href: "/how-it-works",
    },
  ];
  
  // ── How It Works Steps ───────────────────────────────────────────
  export const HOW_IT_WORKS = [
    {
      step: "01",
      title: "Wear the Sensor",
      body: "Apply the thin, adhesive Thrive sensor to your upper arm in seconds. No needles, no pain. It lasts up to 14 days.",
      stat: "< 5 sec to apply",
      detail:
        "Our sensor uses advanced several physiological signals combined with machine learning to measure glucose levels through the skin. There is no adhesive or needles.",
    },
    {
      step: "02",
      title: "Connect the App",
      body: "Open Thrive on iOS or Android and pair via Bluetooth. Your first glucose reading appears within moments.",
      stat: "iOS & Android",
      detail:
        "Bluetooth Low Energy (BLE 5.0) provides a stable, low-power connection up to 30 feet. The app auto-syncs every 60 seconds and stores 90 days of local history.",
    },
    {
      step: "03",
      title: "Understand Your Data",
      body: "AI surfaces trends, explains spikes, and builds a personalized glucose roadmap unique to your biology.",
      stat: "Personalized in 3 days",
      detail:
        "Our proprietary model trains on your data from day one. By day 3, it understands your personal baselines. By day 7, it predicts spikes before they happen.",
    },
  ];
  
  // ── Pricing Plans ────────────────────────────────────────────────
  export const PRICING = [
    {
      name: "Free",
      price: 0,
      period: "/ month",
      description: "Perfect for individuals starting their glucose journey.",
      features: [
        "Real-time glucose readings",
        "Basic trend charts",
        "iOS & Android app",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Plus",
      price: 25,
      period: "/ month",
      description: "For health-focused individuals who want the full picture.",
      features: [
        "1 free sensor replacement",
        "Personalized AI insights & Predictions",
        "EHR export (HL7 / FHIR)",
        "Meal & activity logging",
        "Smart notifications",
        "Priority support"
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Pro",
      price: 50,
      period: "/ month",
      description: "For patients working with healthcare providers and high-need patients.",
      features: [
        "Everything in Plus",
        "2 free sensor replacements",
        "Healthcare software integration",
        "The newest, most advanced models we have"
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
  ];
  

  // ── Integrations ─────────────────────────────────────────────────
  export const INTEGRATIONS = [
    {
      category: "Health Platforms",
      items: [
        { name: "None Yet", icon: "Heart", description: "Coming soon..." },
      ],
    },
    {
      category: "Clinical & EHR",
      items: [
        { name: "None Yet", icon: "FileText", description: "Coming soon..." },
      ],
    },
    {
      category: "Fitness & Nutrition",
      items: [
        { name: "None Yet", icon: "Utensils", description: "Coming soon..." },
      ],
    },
  ];
  
  // ── Accuracy Claims ───────────────────────────────────────────────
  export const ACCURACY = {
    headline: "Approaching clinical-grade accuracy. Zero needles.",
    subtext:
      "Thrive is under testing with beta users and currently has up to 85% accuracy, we will approach medical-grade soon.",
    mard: 15,
    studies: 1,
    participants: 20,
    metrics: [
      { label: "Mean Absolute Relative Difference (MARD)", value: "15%", note: "soon to drop to 9% CGM industry standard" },
      { label: "Lag vs blood glucose", value: "< 15 min", note: "Interstitial fluid lag" },
    ],
  };
  
  // ── Blog Posts ────────────────────────────────────────────────────
  export const BLOG_POSTS = [
    // Placeholder Blog for now
    /* {
      slug: "noninvasive-cgm-technology",
      title: "How Noninvasive CGM Technology Actually Works",
      excerpt:
        "A deep dive into the near-infrared spectroscopy that powers Thrive's sensor — and why it took a decade to miniaturize.",
      date: "March 15, 2025",
      category: "Technology",
      readTime: "7 min read",
      author: "Dr. Maya Chen",
    }, */
  
  ];
  
  // ── Press ─────────────────────────────────────────────────────────
  export const PRESS_MENTIONS = [
    // Placeholder Press for now
    /*
    {
      outlet: "TechCrunch",
      headline: "Thrive raises $4.2M seed to build noninvasive glucose monitor",
      date: "March 2025",
      url: "#",
    },
    */
  ];