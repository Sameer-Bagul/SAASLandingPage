// Landing Page Content Configuration
// This file contains all hardcoded content extracted from section components

import {
  Sparkles,
  Zap,
  Globe,
  TrendingUp,
  Users,
  BarChart3,
  Check
} from "lucide-react";

// Interfaces
export interface NavigationItem {
  label: string;
  href: string;
}

export interface BentoFeature {
  icon: typeof Sparkles;
  title: string;
  description: string;
  colSpan: string;
  rowSpan: string;
  gradient: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  shape: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface CodeSnippet {
  content: string;
  className: string;
  textColor: string;
  width: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  image: string;
  isBackgroundImage: boolean;
}

export interface NewsArticle {
  title: string;
  description: string;
  date: string;
  previewImage: {
    iconSrc: string;
    frameSrc?: string;
    ellipseSrc?: string;
    lineSrc?: string;
    activitySrc?: string;
    chartSrc?: string;
    groupSrc?: string;
    ellipse26Src?: string;
    ellipse27Src?: string;
    ellipse28Src?: string;
    timeCircleSrc?: string;
  };
}

export interface AppType {
  icon: string;
  width: string;
  height: string;
  label: string;
}

export interface EmailMessage {
  avatar: string;
  name: string;
  email: string;
  date: string;
  content: string;
}

export interface NavigationData {
  pages: string[];
  secondColumn: string[];
  utilityPages: string[];
}

// Content Data
export const landingPageContent = {
  // Navigation
  brandName: "Wyse Reports",
  navigationItems: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
  ] as NavigationItem[],
  signInText: "Sign In",
  getStartedText: "Get Started",

  // Main Content Section
  mainContent: {
    heading: "Powerful AI features to revolutionize your market research",
    description: "From global market analysis to competitor insights, our AI-powered platform delivers comprehensive intelligence at unprecedented speed and value.",
    bentoFeatures: [
      {
        icon: Sparkles,
        title: "AI-Powered Intelligence",
        description: "Advanced machine learning algorithms uncover hidden patterns and predict trends with unprecedented accuracy.",
        colSpan: "col-span-1 md:col-span-3",
        rowSpan: "row-span-2",
        gradient: "from-purple-500/20 to-blue-500/20"
      },
      {
        icon: Zap,
        title: "Lightning Speed",
        description: "Get comprehensive reports in minutes, not weeks.",
        colSpan: "col-span-1 md:col-span-3",
        rowSpan: "row-span-1",
        gradient: "from-blue-500/20 to-cyan-500/20"
      },
      {
        icon: Globe,
        title: "Global Coverage",
        description: "Access data from markets worldwide with detailed regional insights.",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-cyan-500/20 to-emerald-500/20"
      },
      {
        icon: TrendingUp,
        title: "Trend Analysis",
        description: "Stay ahead with predictive analytics and market forecasting.",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-emerald-500/20 to-green-500/20"
      },
      {
        icon: Users,
        title: "Competitor Insights",
        description: "Deep dive into competitor strategies and market positioning.",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        gradient: "from-green-500/20 to-yellow-500/20"
      },
      {
        icon: BarChart3,
        title: "Custom Analytics",
        description: "Tailored dashboards that make complex data easy to understand.",
        colSpan: "col-span-1 md:col-span-4",
        rowSpan: "row-span-1",
        gradient: "from-yellow-500/20 to-orange-500/20"
      },
    ] as BentoFeature[],
  },

  // Feature Highlight Section (Testimonials)
  testimonials: {
    heading: "Trusted by leading businesses",
    description: "See how companies are transforming their market research with AI-powered insights and saving time and money in the process.",
    testimonials: [
      {
        name: "Sarah Chen",
        role: "CEO, TechVentures",
        avatar: "/figmaAssets/avatar.png",
        testimonial:
          "Wyse Reports transformed our market research process. We got comprehensive competitor analysis in under 10 minutes - work that used to take weeks. The AI insights helped us identify a $50M market opportunity.",
        shape: "/figmaAssets/shape.png",
      },
      {
        name: "Michael Rodriguez",
        role: "Product Manager, InnovateCo",
        avatar: "/figmaAssets/avatar-1.png",
        testimonial:
          "The pricing is unbelievable for the quality of insights we get. We've saved over $100K in research costs this year alone, and the AI predictions have been remarkably accurate for our product launches.",
        shape: "/figmaAssets/shape-1.png",
      },
      {
        name: "Emma Thompson",
        role: "Strategy Director, GlobalBrands",
        avatar: "/figmaAssets/avatar-2.png",
        testimonial:
          "Lightning-fast reports with incredible depth. The global market coverage and trend analysis are exactly what we needed to expand into new regions. This platform is a game-changer for strategic planning.",
        shape: "/figmaAssets/shape-2.png",
      },
    ] as Testimonial[],
  },

  // Pricing Section
  pricing: {
    heading: "Unbeatable pricing for every business",
    description: "Access professional-grade market research at a fraction of traditional costs. Choose the plan that fits your needs.",
    plans: [
      {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "Perfect for startups and small businesses exploring market opportunities",
        features: [
          "5 market reports per month",
          "Basic AI analytics",
          "Global market data",
          "Email support",
          "Export to PDF",
          "7-day free trial"
        ],
        cta: "Start Free Trial",
        highlighted: false
      },
      {
        name: "Professional",
        price: "$149",
        period: "/month",
        description: "Ideal for growing businesses needing comprehensive market intelligence",
        features: [
          "25 market reports per month",
          "Advanced AI analytics",
          "Global & local market data",
          "Competitor analysis",
          "Priority support",
          "Custom report templates",
          "API access",
          "Team collaboration"
        ],
        cta: "Get Started",
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations requiring unlimited insights and premium support",
        features: [
          "Unlimited market reports",
          "AI-powered predictions",
          "Dedicated account manager",
          "White-label reports",
          "24/7 premium support",
          "Advanced API access",
          "Custom integrations",
          "Training & onboarding"
        ],
        cta: "Contact Sales",
        highlighted: false
      }
    ] as PricingPlan[],
    footerText: "All plans include: Secure data encryption • 99.9% uptime guarantee • Cancel anytime",
  },

  // Client Testimonials Section
  clientTestimonials: {
    heading: "Transparent, audited, & open source",
    description: "Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.",
    browseAllFeatureText: "Browse all feature",
    codeSnippets: [
      {
        content: "// recoverySigningPublicKey is the public key component of the keypair used\n// to sign SSS shards. Upon share re-combination, spliterati verifies attached\n// signatures of each shard to confirm that the shard is correct.",
        className: "absolute top-[233px] left-[98px]",
        textColor: "text-[#4c8776]",
        width: "w-[361px]",
      },
      {
        content: "const salt = srp.generateSalt();\nconst masterSecret = await createKeyFromSecret(password, salt);\n\nconst verifierPrivateKey = await createSRPKey(password, salt);\nconst verifier = srp.deriveVerifier(verifierPrivateKey);",
        className: "absolute top-[13px] left-[15px]",
        textColor: "text-neutralwhite-200",
        width: "w-fit",
      },
    ] as CodeSnippet[],
    featureCards: [
      {
        title: "Product Mail",
        description: "Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
        image: "/figmaAssets/mask-group-1.png",
        isBackgroundImage: true,
      },
      {
        title: "Product UI",
        description: "Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.",
        image: "/figmaAssets/image-wrapper-1.png",
        isBackgroundImage: false,
      },
    ] as FeatureCard[],
  },

  // Product Showcase Section
  productShowcase: {
    heading: "Product in the news",
    browseAllNewsText: "Browse all news",
    newsArticles: [
      {
        title: "Product Mail is taking on Gmail by betting on privacy",
        description: "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
        date: "February 8, 2023",
        previewImage: {
          iconSrc: "/figmaAssets/icon-1.png",
          frameSrc: "/figmaAssets/frame-39.svg",
          ellipseSrc: "/figmaAssets/ellipse-23.png",
          lineSrc: "/figmaAssets/line-30.svg",
          activitySrc: "/figmaAssets/activity.svg",
        },
      },
      {
        title: "Wants You To Sign Out Of Google Workspace Forever",
        description: "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
        date: "February 8, 2023",
        previewImage: {
          iconSrc: "/figmaAssets/group-64.png",
          lineSrc: "/figmaAssets/line-31.svg",
          chartSrc: "/figmaAssets/chart.svg",
          groupSrc: "/figmaAssets/group-65.png",
        },
      },
      {
        title: "The Best Email Encryption Services for 2023",
        description: "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
        date: "February 8, 2023",
        previewImage: {
          iconSrc: "/figmaAssets/group-64-1.png",
          ellipse26Src: "/figmaAssets/ellipse-26.svg",
          ellipse27Src: "/figmaAssets/ellipse-27.svg",
          ellipse28Src: "/figmaAssets/ellipse-28.svg",
          groupSrc: "/figmaAssets/group-76.png",
          timeCircleSrc: "/figmaAssets/time-circle.svg",
        },
      },
    ] as NewsArticle[],
  },

  // Overview Section
  overview: {
    heading: "AI-Powered Market Research in Minutes",
    description: "Get lightning-fast, comprehensive market research reports with unbeatable pricing. Our AI analyzes global markets, industry trends, and competitor insights to deliver actionable intelligence for your business decisions.",
    startFreeTrialText: "Start Free Trial",
    viewPricingText: "View Pricing",
    youtubeUrl: "https://www.youtube.com/embed/Z8E3g-C5324",
    youtubeTitle: "Wyse Reports Introduction",
  },

  // Analytics Dashboard Section
  analyticsDashboard: {
    heading: "Ready to revolutionize your market research?",
    description: "Join thousands of businesses using Wyse Reports to make smarter decisions with AI-powered market intelligence. Start your free trial today.",
    startFreeTrialText: "Start Free Trial",
    scheduleDemoText: "Schedule a Demo",
  },

  // Footer Section
  footer: {
    brandName: "Wyse Reports",
    newsletterHeading: "Get market insights in your inbox",
    subscribeText: "Subscribe",
    navigationData: {
      pages: [
        "Home",
        "Features",
        "Pricing",
        "How It Works",
        "Case Studies",
        "Resources",
        "Blog",
      ],
      secondColumn: [
        "About Us",
        "Contact",
        "Careers",
        "Request Demo",
        "Login",
        "Sign Up",
      ],
      utilityPages: [
        "Privacy Policy",
        "Terms of Service",
        "Documentation",
        "API Access",
        "Support",
      ],
    } as NavigationData,
    copyrightText: "© 2024 Wyse Reports. All rights reserved. AI-Powered Market Research Platform.",
  },

  // Content Wrapper Section
  contentWrapper: {
    heading: "Essential apps that protect your",
    appTypes: [
      {
        icon: "/figmaAssets/icon-4.svg",
        width: "w-[42.67px]",
        height: "h-[30px]",
        label: "Email,",
      },
      {
        icon: "/figmaAssets/icon-9.svg",
        width: "w-[31.28px]",
        height: "h-[30px]",
        label: "Events,",
      },
      {
        icon: "/figmaAssets/icon-6.svg",
        width: "w-[37.94px]",
        height: "h-[30px]",
        label: "Files,",
      },
      {
        icon: "/figmaAssets/icon-3.svg",
        width: "w-[22.85px]",
        height: "h-[30px]",
        label: "Documents",
      },
    ] as AppType[],
    emailMessages: [
      {
        avatar: "/figmaAssets/rectangle-17.png",
        name: "R. Baynham",
        email: "tranthuy.nute@gmail.com",
        date: "Feb 8, 2023",
        content: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus.",
      },
      {
        avatar: "/figmaAssets/rectangle-17-1.png",
        name: "Cooper Kristin",
        email: "tranthuy.nute@gmail.com",
        date: "Feb 8, 2023",
        content: "Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus.",
      },
    ] as EmailMessage[],
    encryptedInboxHeading: "End-to-end encrypted inbox and messages",
    encryptedInboxDescription: "Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.",
    learnMoreText: "Learn More",
    mobileAppsHeading: "Mobile applications",
    mobileAppsDescription: "Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue",
    uploadShareHeading: "Upload, share, and preview any file",
    uploadShareDescription: "Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.",
    getStartedText: "Get a Started",
    browseAllFeatureText: "Browse all feature",
  },
};