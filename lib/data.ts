// ═══════════════════════════════════════════════════════════════
//  THRIVE — SITE DATA CONFIG
//  Edit this file to update content across the entire site.
// ═══════════════════════════════════════════════════════════════

// ── Brand ────────────────────────────────────────────────────────
export const BRAND = {
    name: "Thrive",
    tagline: "Glucose Monitoring Reimagined.",
    description: "A noninvasive CGM solution, powered by AI.",
    email: "hello@thrive.health",
    founded: "2024",
  };
  
  // ── Navigation ───────────────────────────────────────────────────
  export const NAV_LINKS = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Accuracy", href: "/accuracy" },
    { label: "Pricing", href: "/pricing" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
  ];
  
  // ── Hero ─────────────────────────────────────────────────────────
  export const HERO = {
    badge: "AI-Powered Health Platform",
    headline: ["Glucose", "Monitoring", "Reimagined."],
    subtext:
      "Thrive gives you continuous, noninvasive glucose insights powered by AI — so you can live healthier without the needles.",
    cta_primary: { label: "Get Early Access", href: "/contact" },
    cta_secondary: { label: "Learn More", href: "/learn-more" },
  };
  
  // ── Stats ────────────────────────────────────────────────────────
  export const STATS = [
    { value: 98, suffix: "%", label: "Accuracy vs fingerprick" },
    { value: 50, suffix: "K+", label: "Beta users tracked" },
    { value: 24, suffix: "/7", label: "Real-time monitoring" },
    { value: 0, suffix: " needles", label: "Zero invasive steps" },
  ];
  
  // ── Partner Logos (scrolling marquee) ────────────────────────────
  export const PARTNERS = [
    { name: "Memorial Hermann", logo: null },
    { name: "Junior Achievement", logo: null },
    { name: "Houston Methodist", logo: null },
    { name: "Texas Medical Center", logo: null },
    { name: "Rice University", logo: null },
    { name: "UT Health", logo: null },
    { name: "Baylor College of Medicine", logo: null },
    { name: "HEB", logo: null },
  ];
  
  // ── Services / Features ──────────────────────────────────────────
  export const FEATURES = [
    {
      icon: "Activity",
      title: "Continuous Glucose Tracking",
      description:
        "Real-time glucose readings updated every minute. No calibration required. See trends before they become problems.",
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
        "Personalized alerts for highs, lows, and unusual trends. Integrates seamlessly with Apple Health and Google Fit.",
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
        "Our sensor uses advanced near-infrared spectroscopy combined with machine learning to measure interstitial fluid glucose through the skin. The medical-grade adhesive is hypoallergenic and water-resistant.",
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
        "Our proprietary LSTM model trains on your data from day one. By day 3, it understands your personal baselines. By day 7, it predicts spikes before they happen.",
    },
  ];
  
  // ── Pricing Plans ────────────────────────────────────────────────
  export const PRICING = [
    {
      name: "Basic",
      price: 29,
      period: "/ month",
      description: "Perfect for individuals starting their glucose journey.",
      features: [
        "1 sensor per month (14-day wear)",
        "Real-time glucose readings",
        "Basic trend charts",
        "iOS & Android app",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: 59,
      period: "/ month",
      description: "For health-focused individuals who want the full picture.",
      features: [
        "2 sensors per month",
        "AI-powered insights & predictions",
        "Meal & activity logging",
        "Smart notifications",
        "Apple Health / Google Fit sync",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Clinical",
      price: 99,
      period: "/ month",
      description: "For healthcare providers and high-need patients.",
      features: [
        "4 sensors per month",
        "Provider dashboard",
        "EHR export (HL7 / FHIR)",
        "HIPAA-compliant data storage",
        "Dedicated account manager",
        "Custom alert thresholds",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];
  
  // ── Team ─────────────────────────────────────────────────────────
  export const TEAM = [
    {
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      bio: "Alex brings 10 years of digital health experience, previously leading product at a top-tier CGM company. Passionate about making health data accessible to everyone.",
      image: null, // Replace with: "/team/alex.jpg"
      socials: {
        linkedin: "https://linkedin.com",
        twitter: null,
        instagram: null,
        youtube: null,
        discord: null,
        github: null,
      },
    },
    {
      name: "Dr. Maya Chen",
      role: "Co-Founder & Chief Medical Officer",
      bio: "Board-certified endocrinologist with a PhD in biosensor technology from MIT. Maya ensures Thrive meets the highest clinical standards.",
      image: null,
      socials: {
        linkedin: "https://linkedin.com",
        twitter: null,
        instagram: null,
        youtube: null,
        discord: null,
        github: null,
      },
    },
    {
      name: "Jordan Okafor",
      role: "Head of AI & Machine Learning",
      bio: "Former Google Brain researcher specializing in time-series prediction. Built the core glucose prediction engine that powers Thrive's insights.",
      image: null,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: null,
        instagram: null,
        youtube: null,
        discord: null,
      },
    },
    {
      name: "Sam Torres",
      role: "Head of Design",
      bio: "Award-winning product designer who previously shaped UX at Apple Health. Sam obsesses over making complex health data feel simple and beautiful.",
      image: null,
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: null,
        youtube: null,
        discord: null,
        github: null,
      },
    },
    {
      name: "Priya Nair",
      role: "Head of Hardware Engineering",
      bio: "Electrical engineer with 8 patents in wearable biosensors. Priya leads the team that miniaturized our near-infrared sensor to the size of a quarter.",
      image: null,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: null,
        instagram: null,
        youtube: null,
        discord: null,
      },
    },
    {
      name: "Chris Walton",
      role: "Community & Growth",
      bio: "Built thriving health communities for two successful startups. Chris connects users, clinicians, and advocates to grow the Thrive ecosystem.",
      image: null,
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        discord: "https://discord.com",
        twitter: null,
        github: null,
      },
    },
  ];
  
  // ── Integrations ─────────────────────────────────────────────────
  export const INTEGRATIONS = [
    {
      category: "Health Platforms",
      items: [
        { name: "Apple Health", icon: "Heart", description: "Sync all glucose data automatically." },
        { name: "Google Fit", icon: "Activity", description: "Two-way fitness and glucose sync." },
        { name: "Samsung Health", icon: "Smartphone", description: "Full sensor data integration." },
      ],
    },
    {
      category: "Clinical & EHR",
      items: [
        { name: "Epic", icon: "FileText", description: "HL7 FHIR export to Epic MyChart." },
        { name: "Cerner", icon: "FileText", description: "Seamless clinical data handoff." },
        { name: "Athena Health", icon: "FileText", description: "Direct EHR integration." },
      ],
    },
    {
      category: "Fitness & Nutrition",
      items: [
        { name: "MyFitnessPal", icon: "Utensils", description: "Auto-correlate meals with glucose." },
        { name: "Strava", icon: "Zap", description: "See how workouts affect your levels." },
        { name: "Garmin Connect", icon: "Watch", description: "Wearable data cross-analysis." },
      ],
    },
  ];
  
  // ── Accuracy Claims ───────────────────────────────────────────────
  export const ACCURACY = {
    headline: "Clinical-grade accuracy. Zero needles.",
    subtext:
      "Thrive has been validated in independent studies against ISO 15197:2015 standards — the gold standard for glucose monitoring accuracy.",
    mard: 8.2,
    studies: 3,
    participants: 420,
    metrics: [
      { label: "Mean Absolute Relative Difference (MARD)", value: "8.2%", note: "vs 9% CGM industry standard" },
      { label: "% Readings in Zone A (Clarke Error Grid)", value: "96.4%", note: "Clinically accurate zone" },
      { label: "% Readings in Zone A+B", value: "99.8%", note: "Safe for clinical decisions" },
      { label: "Lag vs blood glucose", value: "< 3 min", note: "Interstitial fluid lag" },
    ],
  };
  
  // ── Blog Posts ────────────────────────────────────────────────────
  export const BLOG_POSTS = [
    {
      slug: "noninvasive-cgm-technology",
      title: "How Noninvasive CGM Technology Actually Works",
      excerpt:
        "A deep dive into the near-infrared spectroscopy that powers Thrive's sensor — and why it took a decade to miniaturize.",
      date: "March 15, 2025",
      category: "Technology",
      readTime: "7 min read",
      author: "Dr. Maya Chen",
    },
    {
      slug: "glucose-and-performance",
      title: "What Elite Athletes Know About Glucose That You Don't",
      excerpt:
        "Glucose management isn't just for diabetics. Here's how professional sports teams are using CGM data to optimize training.",
      date: "February 28, 2025",
      category: "Performance",
      readTime: "5 min read",
      author: "Jordan Okafor",
    },
    {
      slug: "ai-glucose-prediction",
      title: "Predicting a Glucose Spike 30 Minutes Before It Happens",
      excerpt:
        "Our ML team explains the LSTM architecture behind Thrive's prediction engine and how it learns your unique biology.",
      date: "February 10, 2025",
      category: "AI & Science",
      readTime: "9 min read",
      author: "Jordan Okafor",
    },
    {
      slug: "hipaa-health-apps",
      title: "Why Most Health Apps Aren't HIPAA Compliant — And How Thrive Is",
      excerpt:
        "A plain-English guide to HIPAA compliance in consumer health technology and the certifications that actually matter.",
      date: "January 22, 2025",
      category: "Privacy & Compliance",
      readTime: "6 min read",
      author: "Alex Rivera",
    },
  ];
  
  // ── Press ─────────────────────────────────────────────────────────
  export const PRESS_MENTIONS = [
    {
      outlet: "TechCrunch",
      headline: "Thrive raises $4.2M seed to build noninvasive glucose monitor",
      date: "March 2025",
      url: "#",
    },
    {
      outlet: "Forbes Health",
      headline: "10 Health Tech Startups to Watch in 2025",
      date: "January 2025",
      url: "#",
    },
    {
      outlet: "Houston Chronicle",
      headline: "Houston startup Thrive is tackling diabetes without needles",
      date: "December 2024",
      url: "#",
    },
    {
      outlet: "MedCity News",
      headline: "Noninvasive CGM startup Thrive partners with Texas Medical Center",
      date: "November 2024",
      url: "#",
    },
  ];