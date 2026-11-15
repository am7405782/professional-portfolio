(() => {
  'use strict';

  /* ---------------- Data ---------------- */
  const shot = (slug, n) => `img/${slug}/${n}.jpg`;
  const projects = [
    {
      "slug": "flick",
      "title": "Flick",
      "subtitle": "Live social commerce platform",
      "tint": [
        25,
        0.07
      ],
      "icon": "img/flick/icon.png",
      "shots": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "featured": true,
      "summary": "A live social commerce platform for Egypt and the MENA region. Sellers run live video shows, and buyers add to cart and buy without leaving the stream.",
      "role": "I built the seller’s live-broadcast studio, real-time live chat and moderation, and live-commerce flows across mobile and web, and led the migration of both apps to Clean Architecture.",
      "description": "A live social commerce platform for Egypt and the MENA region: sellers run live video shows and buyers add to cart and buy without leaving the stream. The product is a full ecosystem — Buyer and Seller Flutter apps published on Google Play, a web storefront, a Seller Studio web portal, an admin dashboard and a .NET backend. I built the seller's live-broadcast studio, real-time live chat and moderation, and live-commerce flows across mobile and web, and led the migration of both apps to Clean Architecture.",
      "features": [
        "Live-broadcast studio with Agora RTC on mobile and web: camera/mic switching, video quality control, monitor mode and camera handover between devices",
        "Real-time live chat over SignalR: quoted replies, pinned messages, Q&A answered on stage, hide/restore/delete and viewer blocking",
        "Live-commerce flows: timed flash deals, reordering products mid-stream, live-deal prices on product cards, in-stream restock",
        "Buyer & Seller apps plus web portals with full Arabic/English and RTL support, covered by a Playwright end-to-end regression suite"
      ],
      "technologies": [
        "Flutter",
        "Riverpod",
        "GoRouter",
        "Dio",
        "Agora RTC",
        "SignalR",
        "Clean Architecture",
        "Firebase Crashlytics",
        "Next.js",
        "TypeScript",
        ".NET",
        "Playwright"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.flick.buyer",
      "appStore": "",
      "links": [
        {
          "url": "https://play.google.com/store/apps/details?id=com.flick.seller",
          "icon": "fa-brands fa-google-play",
          "small": "Seller app on",
          "label": "Google Play",
          "badge": "Seller"
        },
        {
          "url": "https://flickliveshop.com",
          "icon": "fa-solid fa-globe",
          "small": "Shop on the",
          "label": "Website",
          "badge": "Web"
        },
        {
          "url": "https://seller.flickliveshop.com",
          "icon": "fa-solid fa-store",
          "small": "Sell on",
          "label": "Seller Studio"
        }
      ]
    },
    {
      "slug": "mawared",
      "title": "Mawared | موارد",
      "subtitle": "HR management and attendance",
      "tint": [
        40,
        0.06
      ],
      "icon": "img/mawared/icon.png",
      "shots": [
        1,
        2,
        3,
        4,
        5
      ],
      "description": "A bilingual (Arabic/English) HR platform in production for a Saudi government agency: a Laravel 12 web dashboard where HR manages employees, attendance, leave, payroll and reports, plus a Flutter employee app for check-in, breaks and requests. I worked mainly on the dashboard and its API — monitoring screens for failed punches, server-side attendance rules, settings and branding, and security fixes across authentication and data access — as well as the app's offline attendance queue that feeds it.",
      "features": [
        "HR monitoring screens: failed punches with payroll filters, clear reason labels, attendance flags, reconciliation and export",
        "Server-side attendance rules: configurable offline punch window with HR review, check-in windows across midnight, break overlap checks, timezone-aware shifts behind a flag",
        "Security hardening: no cross-employee payslip access, company-scoped password reset, token lifetimes and revocation, one password policy, no account enumeration",
        "Settings and branding screens fully translated to Arabic/English, brand colours wired into the theme, and 89 Pest test files covering the API"
      ],
      "technologies": [
        "Laravel 12",
        "PHP",
        "MySQL",
        "Blade",
        "Sanctum",
        "Pest",
        "Flutter",
        "Dart",
        "Dio",
        "Workmanager",
        "Firebase Cloud Messaging",
        "easy_localization"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=cloud.mward.employee",
      "appStore": "https://apps.apple.com/sa/app/mawared-%D9%85%D9%88%D8%A7%D8%B1%D8%AF/id6802676583"
    },
    {
      "slug": "torido",
      "title": "Torido",
      "subtitle": "Shipping and logistics platform",
      "tint": [
        150,
        0.08
      ],
      "icon": "img/torido/icon.png",
      "shots": [1, 2, 3, 4, 5, 6, "web-1", "web-2"],
      "description": "A shipping and logistics platform in Saudi Arabia that connects shippers with transport companies and drivers: the client posts a shipment, carriers send price offers, and the client picks the best one and tracks it live until delivery. The ecosystem includes a client app and a carrier app on the App Store and Google Play, an operations dashboard, and a web portal for transport companies.",
      "features": [
        "Multi-route shipments: one order with several pickup and drop-off points, run in the order the client chooses; the driver can't open the next route until the current one is closed",
        "Tamper-proof delivery: photo and video cargo documentation at pickup, recipient inspection, damage classification with video evidence that can't be skipped and survives an app restart, and an OTP to close the delivery",
        "Carrier fleets: each driver belongs to one company, enforced in the database; drivers move between companies through a transfer request with a deadline and auto-approval, backed by real concurrency tests",
        "Saudi payments and integrations: native Apple Pay on iOS, HyperPay, bank transfer enabled per user, and official transport documents through the Bayan platform",
        "Drivers in their own language: Arabic, English, Hindi, Urdu and Nepali with RTL, plus an in-app switch between test and production without a rebuild",
        "A Next.js web portal for transport companies with the same permissions as the app, on the same API",
        "AI-assisted testing: Claude Code agents with project skills for golden tests, visual verification and a pre-merge review gate; backend end-to-end runs passing 58 of 58; and screen-by-screen parity checks between the web portal and the app in three languages"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Laravel",
        "PHP",
        "Next.js",
        "TypeScript",
        "React Query",
        "Firebase",
        "Google Maps",
        "Apple Pay",
        "HyperPay",
        "Codemagic",
        "Claude Code"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.torido.app",
      "appStore": "https://apps.apple.com/sa/app/torido-%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%D9%88/id1554338202"
    },
    {
      "slug": "torido-naqel",
      "title": "Torido Naqel",
      "subtitle": "Carrier app and company web portal",
      "tint": [
        265,
        0.07
      ],
      "icon": "img/torido-naqel/icon.png",
      "shots": [1, 2, 3, 4, 5, 6, "web-1", "web-2", "web-3", "web-4"],
      "description": "The carrier side of Torido: drivers and transport companies find shipments, send price offers and run each order from pickup to delivery. It ships as a Flutter app on the App Store and Google Play, plus a Next.js web portal where a company manages its fleet, staff and orders.",
      "features": [
        "Pickup to delivery without shortcuts: the driver checks every cargo item at pickup with nothing preset, documents it in photos and video, classifies damage in a step that can't be skipped and reopens after a restart, and closes the delivery with the recipient's OTP",
        "Route by route: each route stays locked until the previous one is done, and the delivery address turns green with directions once the pickup is complete",
        "Company fleets: companies create their own drivers with private documents, add drivers through join requests with no codes, move them between companies with a transfer countdown, and run staff with permissions",
        "Accident reports with evidence, WhatsApp and call shortcuts while a shipment waits for documentation, and PDF attachments at registration",
        "Built for drivers in Saudi Arabia: five languages (Arabic, English, Hindi, Urdu and Nepali) with RTL, and birth dates in Hijri or Gregorian",
        "A company web portal in Next.js 16, React 19 and strict TypeScript that does exactly what the app does on the same API, with signed portal sessions, React Query, next-intl and Vitest tests"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Next.js",
        "React",
        "TypeScript",
        "React Query",
        "next-intl",
        "Tailwind CSS",
        "Vitest",
        "Laravel",
        "Firebase",
        "Google Maps"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.torido.driver",
      "appStore": "https://apps.apple.com/sa/app/torido-naqel-%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%D9%88-%D9%86%D8%A7%D9%82%D9%84/id1554352273"
    },
    {
      "slug": "siwaan",
      "title": "Siwaan | صيوان",
      "subtitle": "Neighbourhood super-app",
      "tint": [
        190,
        0.045
      ],
      "icon": "img/siwaan/icon.png",
      "shots": [2, 3, 1, 4, 5, 6],
      "description": "A super-app for the residents of a residential community: the neighbourhood market (سوق صيوان), local stores and home services, golf-cart rides, urgent alerts, news, a forum and chat between neighbours, backed by a Laravel API and an admin dashboard.",
      "features": [
        "سوق صيوان: one feed for neighbours' listings and residents' own shops and services, with ratings before you buy, quantity limits, offer hours and scheduled work",
        "Wallet and payments: top-ups, checkout, cancellations and refunds on a ledger, with reversals, adjustments and account freezes run from the dashboard",
        "Guest mode behind a feature flag: visitors browse the public shelf, forum and gallery read-only, contact details are masked in every response, and the basket carries over after sign-in",
        "Quick Wash partnership: book laundry from inside Siwaan, with a one-time consent before sharing name and mobile and personal links kept out of logs",
        "Urgent alerts with up to five photos and streamed upload, shown as tray notifications even while the app is open, plus per-kind notification preferences",
        "Fully localized Arabic and English with locale-aware numbers, dates and currency"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "BLoC / Cubit",
        "Dio",
        "Laravel",
        "PHP",
        "MySQL",
        "Firebase",
        "Codemagic"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.siwaan.mobile",
      "appStore": "https://apps.apple.com/eg/app/siwaan/id6749846894"
    },
    {
      "slug": "siwaan-chat",
      "partOf": "siwaan",
      "title": "Siwaan Chat",
      "subtitle": "In-app chat built from scratch",
      "tint": [
        30,
        0.06
      ],
      "icon": "img/siwaan-chat/icon.png",
      "shots": [1, 2, 3, 4, 5, 6, 7],
      "description": "The chat inside Siwaan, rebuilt from scratch to replace the old Firebase chat: direct messages and groups between neighbours, photos and voice notes, product cards from the market and moderation, all on the app's own Laravel API.",
      "features": [
        "Reliable sending: an outbox persists every message, retries by failure type and recovers after the app is killed, so nothing is lost while offline",
        "Media done properly: photo and voice messages with resizing, upload progress and cancel, authorize-then-stream downloads, and one shared voice player with speed control",
        "Groups: roles, member caps, join requests and approvals, discovery, mute and system messages, with push routed to the right group",
        "Real time without heavy sockets: a polling baseline with an optional Firebase signal on top, one content-free signal per change, and bursts coalesced into one refresh",
        "Safety: block, report and delete, nicknames instead of real names in the people picker, and admin moderation of chat reports",
        "Built to scale: unread counts capped at 100, reply quotes that jump to the original, rooms that open at the first unread, and query plans checked against 100k-row tables"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Cubit",
        "Laravel",
        "PHP",
        "MySQL",
        "Firebase Realtime Database",
        "FCM"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.siwaan.mobile",
      "appStore": "https://apps.apple.com/eg/app/siwaan/id6749846894"
    },
    {
      "slug": "siwaan-admin",
      "partOf": "siwaan",
      "title": "Siwaan Admin",
      "subtitle": "Admin and merchant dashboard",
      "privateNote": "A private admin tool for the Siwaan team",
      "tint": [
        60,
        0.05
      ],
      "icon": "img/siwaan-admin/icon.png",
      "shots": [1, 2, 3, 4, "web-1", "web-2", "web-3", "web-4", "web-5"],
      "description": "The web dashboard that runs Siwaan: admins approve merchants, stores and services, moderate the market and chat reports, manage wallets and payments, and publish alerts and content, in Arabic and English and on any screen size.",
      "features": [
        "Redesigned on Siwaan's own sw-* design system, with docked table filters and detail screens that work on desktop and phone",
        "Merchant platform: applications, store and service review queues, document and location checks, and approve, reject and request-changes flows with a full history",
        "Finance: wallets, ledger, payments, refunds, reversals, adjustments and account freezes",
        "One bell for everything that waits on an admin, an admin inbox and browser notifications",
        "Moderation: chat reports, neighbour listings, ratings oversight on every merchant screen, and sponsored ads that open a store or a service"
      ],
      "technologies": [
        "Laravel",
        "PHP",
        "Blade",
        "MySQL",
        "JavaScript",
        "Firebase"
      ],
      "googlePlay": "",
      "appStore": ""
    },
    {
      "slug": "quick-wash",
      "title": "Quick Wash",
      "subtitle": "On-demand laundry service",
      "tint": [
        240,
        0.05
      ],
      "icon": "img/quick-wash/icon.png",
      "shots": [
        2,
        3,
        4,
        1
      ],
      "description": "An app that simplifies laundry service requests with quick pickup and delivery through an intuitive user experience ensuring customer comfort and service quality.",
      "features": [
        "Scheduled laundry pickups",
        "Real-time order status tracking",
        "Secure online payments",
        "Monthly subscription plans"
      ],
      "technologies": [
        "Flutter",
        "Node.js (Backend)",
        "Payment Gateway Integration",
        "Maps SDK"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.quick.wash.user",
      "appStore": "https://apps.apple.com/us/app/الغسيل-السريع/id6504152286"
    },
    {
      "slug": "quick-wash-employee",
      "title": "Quick Wash Employee",
      "subtitle": "Tasks and routes for field staff",
      "tint": [
        250,
        0.055
      ],
      "icon": "img/quick-wash-employee/icon.png",
      "shots": [
        1,
        2,
        3
      ],
      "description": "A dedicated mobile app for Quick Wash employees to manage assigned tasks, track pickup and delivery routes in real-time, and efficiently handle customer requests with optimized workflow management.",
      "features": [
        "Real-time task assignment and notifications",
        "Live location tracking and route optimization",
        "Order history and completion tracking",
        "Customer communication via in-app messaging"
      ],
      "technologies": [
        "Flutter",
        "Firebase Realtime Database",
        "Google Maps SDK",
        "Push Notifications"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.quick.wash.emp",
      "appStore": "https://apps.apple.com/us/app/quick-wash-employee/id6504169031"
    },
    {
      "slug": "hawdaj-kids",
      "title": "Hawdaj Kids",
      "subtitle": "Learning games for kids",
      "tint": [
        350,
        0.05
      ],
      "icon": "img/hawdaj-kids/icon.png",
      "shots": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "description": "A safe educational and entertaining app for kids designed to develop skills through interactive and fun activities while protecting children from online risks.",
      "features": [
        "Interactive educational games",
        "Reward system that motivates kids",
        "Advanced parental controls",
        "Varied, purposeful content"
      ],
      "technologies": [
        "Flutter",
        "SQLite (Offline support)",
        "Audio Player",
        "Animations"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.hawdaj.kids&pcampaignid=web_share",
      "appStore": "https://apps.apple.com/us/app/hawdaj-kids/id6757672211"
    },
    {
      "slug": "hawdaj",
      "title": "Hawdaj",
      "subtitle": "Privacy-focused data platform",
      "tint": [
        305,
        0.06
      ],
      "icon": "img/hawdaj/icon.png",
      "shots": [
        5,
        3,
        4,
        1
      ],
      "description": "An advanced platform focused on data privacy and security with commitment to the highest global protection standards and sensitive data encryption.",
      "features": [
        "End-to-end data encryption",
        "Access permission management",
        "Advanced security alerts",
        "Protected cloud storage"
      ],
      "technologies": [
        "Flutter",
        "Encryption Algorithms",
        "Secure Storage",
        "Firebase Auth"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.hawdaj",
      "appStore": "https://apps.apple.com/us/app/hawdaj/id6752390026"
    },
    {
      "slug": "goal-master",
      "title": "Goal Master",
      "subtitle": "Multi-service community platform",
      "tint": [
        150,
        0.07
      ],
      "icon": "img/goal-master/icon.png",
      "shots": [
        2,
        1,
        3,
        4
      ],
      "description": "Goal Master is an all-in-one community platform that makes local services easy and accessible. Book groceries, food delivery, golf cart rides, and home maintenance services with ease. Stay updated with real-time tracking, community news, forums, and instant notifications. Manage payments securely through the integrated digital wallet and handle complaints or suggestions efficiently. Goal Master simplifies daily life by bringing all essential community services into one user-friendly app.",
      "features": [
        "Digital wallet for top-ups and payments",
        "Home maintenance service requests",
        "Live order tracking",
        "Complaints and suggestions management"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps SDK",
        "REST API",
        "Clean Architecture",
        "Dio",
        "BLoC State Management",
        "Team Collaboration"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.ayoub.goalmaster",
      "appStore": "https://apps.apple.com/us/app/goalmaster-%D8%AC%D9%88%D9%84-%D9%85%D8%A7%D8%B3%D8%AA%D8%B1/id6744951483"
    },
    {
      "slug": "goal-master-admin",
      "title": "Goal Master Admin",
      "subtitle": "Admin app for the community platform",
      "tint": [
        140,
        0.065
      ],
      "icon": "img/goal-master-admin/icon.png",
      "shots": [],
      "description": "Goal Master is an all-in-one community platform that makes local services easy and accessible. Book groceries, food delivery, golf cart rides, and home maintenance services with ease. Stay updated with real-time tracking, community news, forums, and instant notifications. Manage payments securely through the integrated digital wallet and handle complaints or suggestions efficiently. Goal Master simplifies daily life by bringing all essential community services into one user-friendly app.",
      "features": [
        "Digital wallet for top-ups and payments",
        "Home maintenance service requests",
        "Live order tracking",
        "Complaints and suggestions management"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps SDK",
        "REST API",
        "Clean Architecture",
        "Dio",
        "BLoC State Management",
        "Team Collaboration"
      ],
      "googlePlay": "",
      "appStore": "https://apps.apple.com/us/app/goalmasteradmin-%D9%85%D8%AF%D9%8A%D8%B1-%D9%85%D9%84%D8%B9%D8%A8/id6756220348"
    },
    {
      "slug": "mostaqer",
      "title": "Mostaqer | مستقر",
      "subtitle": "Telemedicine and consultations",
      "tint": [
        60,
        0.07
      ],
      "icon": "img/mostaqer/icon.png",
      "shots": [
        1,
        2,
        3,
        4,
        5
      ],
      "description": "An integrated service platform that allows users to easily book medical consultations and healthcare services through a smart and secure app supporting video and voice conversations.",
      "features": [
        "Medical consultation booking",
        "Live video and voice calls",
        "Digital prescription management",
        "Doctor and service ratings"
      ],
      "technologies": [
        "Flutter",
        "Agora SDK",
        "Firebase Cloud Messaging",
        "Websockets",
        "Cubit"
      ],
      "googlePlay": "https://play.google.com/store/apps/details?id=com.mostaqer.app",
      "appStore": "https://apps.apple.com/us/app/mostaqer/id6744868537"
    },
    {
      "slug": "hawary",
      "title": "Al-Hawary",
      "subtitle": "Task and activity management",
      "tint": [
        15,
        0.07
      ],
      "icon": "",
      "shots": [
        2,
        4,
        1,
        3,
        5,
        6
      ],
      "description": "An integrated platform for managing field activities and services with focus on efficiency, ease of use, and team management.",
      "features": [
        "Task assignment to staff",
        "Geolocation tracking",
        "Periodic progress reports",
        "Instant alerts"
      ],
      "technologies": [
        "Flutter",
        "Dart",
        "Firebase Messaging",
        "Geolocator",
        "Dio"
      ],
      "googlePlay": "",
      "appStore": "https://apps.apple.com/us/app/hawary-app/id6761829156"
    },
    {
      "slug": "family",
      "title": "Family",
      "subtitle": "Family communication and planning",
      "tint": [
        140,
        0.05
      ],
      "icon": "",
      "shots": [
        1,
        5,
        2,
        3,
        4,
        6
      ],
      "description": "An app designed to enhance family communication and manage shared tasks and occasions with ease and complete privacy.",
      "features": [
        "Shared family calendar",
        "Household task and request lists",
        "Photo and memory sharing",
        "Family member location sharing"
      ],
      "technologies": [
        "Flutter",
        "Firebase Auth",
        "Cloud Firestore",
        "Google Maps"
      ],
      "googlePlay": "",
      "appStore": ""
    }
  ];
  projects.forEach(p => { p.images = p.shots.map(n => shot(p.slug, n)); });

  /* ---------------- Language (English / Arabic) ---------------- */
  const root0 = document.documentElement;
  let lang = root0.getAttribute('lang') === 'ar' ? 'ar' : 'en';
  const isRTL = () => lang === 'ar';

  const UI = {
    en: {
      live: 'Live', internal: 'Internal', private: 'Private', viewProject: 'View project', caseStudy: 'Open case study',
      shipped: 'shipped', storeBoth: 'Live on App Store & Google Play', storeApple: 'Live on the App Store',
      storePlay: 'Live on Google Play', storeNone: 'Internal build', dlOn: 'Download on the', getOn: 'Get it on',
      privateNote: 'Internal build, not on the public stores', whatItDoes: 'What it does', builtWith: 'Built with',
      nextProject: 'Next project', screens: 'Screens', screen: 'Screen', of: 'of', prevScreen: 'Previous screen',
      nextScreen: 'Next screen', closeProject: 'Close project', appIcon: 'app icon',
      toLight: 'Switch to light theme', toDark: 'Switch to dark theme', openMenu: 'Open menu', closeMenu: 'Close menu',
      copy: 'Copy', copied: 'Copied', pressCopy: 'Press Ctrl+C',
      langLabel: 'ع', langAria: 'عرض الموقع بالعربية', langAttr: 'ar',
      docTitle: 'Ahmed Mohamed | Senior Flutter Developer',
      metaDesc: 'Ahmed Mohamed, Senior Flutter Developer in Cairo. Flutter apps for iOS and Android, live on the App Store and Google Play.'
    },
    ar: {
      live: 'منشور', internal: 'داخلي', private: 'خاص', viewProject: 'عرض المشروع', caseStudy: 'افتح دراسة الحالة',
      shipped: 'تم النشر', storeBoth: 'على App Store وGoogle Play', storeApple: 'منشور على App Store',
      storePlay: 'منشور على Google Play', storeNone: 'نسخة داخلية', dlOn: 'حمّله من', getOn: 'احصل عليه من',
      privateNote: 'نسخة داخلية، غير منشورة على المتاجر العامة', whatItDoes: 'ماذا يقدّم', builtWith: 'التقنيات المستخدمة',
      nextProject: 'المشروع التالي', screens: 'الشاشات', screen: 'الشاشة', of: 'من', prevScreen: 'الشاشة السابقة',
      nextScreen: 'الشاشة التالية', closeProject: 'إغلاق المشروع', appIcon: 'أيقونة التطبيق',
      toLight: 'التبديل إلى الوضع الفاتح', toDark: 'التبديل إلى الوضع الداكن', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة',
      copy: 'نسخ', copied: 'تم النسخ', pressCopy: 'اضغط Ctrl+C',
      langLabel: 'EN', langAria: 'View the site in English', langAttr: 'en',
      docTitle: 'أحمد محمد | مطوّر Flutter أول',
      metaDesc: 'أحمد محمد، مطوّر Flutter أول في القاهرة. تطبيقات Flutter لـ iOS وAndroid منشورة على App Store وGoogle Play.'
    }
  };
  const t = (k) => (UI[lang][k] != null ? UI[lang][k] : UI.en[k]);

  /* Arabic copy for the static page; English stays in the HTML. */
  const AR_STATIC = {
    'skip': 'تخطَّ إلى المحتوى',
    'brand': 'أحمد محمد<span class="brand-dot" aria-hidden="true"></span>',
    'brand.aria': 'أحمد محمد، العودة إلى الأعلى',
    'nav.work': 'أعمالي', 'nav.about': 'عنّي', 'nav.ai': 'الذكاء الاصطناعي', 'nav.toolkit': 'الأدوات', 'nav.contact': 'تواصل',
    'hire': 'وظّفني',
    'status': 'متاح للعمل الحر والوظائف عن بُعد',
    'name.aria': 'أحمد محمد', 'name.first': 'أحمد', 'name.last': 'محمد',
    'role': 'مطوّر <span class="mark" data-sweep>Flutter</span> أول',
    'pitch': 'أبني تطبيقات Flutter لـ iOS وAndroid، مع تركيز على التطبيقات اللحظية والبث المباشر بالفيديو. <span data-count="apps">12</span> منها منشورة على App Store وGoogle Play، وأستخدم وكلاء الذكاء الاصطناعي (Claude Code) لأُسلِّم أسرع عبر الموبايل والويب والباك إند.',
    'fact.years': 'خبرة 4 سنوات', 'fact.arch': 'Clean Architecture وBLoC وRiverpod', 'fact.city': 'القاهرة، مصر',
    'seeWork': 'شاهد أعمالي',
    'notifs.aria': 'تطبيقات نشرتها', 'shelf.aria': 'تطبيقات على المتاجر',
    'shelf.label': '<strong>على المتاجر</strong>تطبيقات بنيتها ونشرتها',
    'work.title': 'أعمال مختارة',
    'work.lede': 'تطبيقات للتجارة المباشرة والموارد البشرية والصحة وشحن البضائع والتعليم والمجتمعات. افتح أي مشروع لترى شاشاته ومميزاته والتقنيات التي بُني بها.',
    'filters.aria': 'تصفية المشاريع',
    'filter.all': 'الكل <span class="count" data-count="all"></span>',
    'filter.live': 'على المتاجر <span class="count" data-count="live"></span>',
    'filter.internal': 'داخلي <span class="count" data-count="internal"></span>',
    'about.title': 'من أول شاشة حتى النشر على المتجر.',
    'about.statement': 'مطوّر Flutter بخبرة 4 سنوات، نشرتُ أكثر من 12 تطبيقًا على Google Play وApp Store في التجارة المباشرة والموارد البشرية والطب عن بُعد والخدمات عند الطلب وشحن البضائع. أتخصص في المنتجات اللحظية: البث المباشر بالفيديو عبر Agora، والدردشة المباشرة عبر SignalR وWebSockets، والمزامنة دون اتصال، على أساس Clean Architecture مع Riverpod وBLoC/Cubit.',
    'about.more': 'أتولّى الميزات من البداية حتى النهاية، من الفكرة إلى النشر على المتجر، وأعمل عبر كامل الـ stack مع بوابات ويب بـ Next.js وأنظمة خلفية بـ Laravel و.NET. أعمل بالكفاءة نفسها منفردًا أو ضمن فريق، وأهتم بكود نظيف ومختبَر وتجارب سريعة وسهلة بالعربية والإنجليزية.',
    'facts.based': 'المقر', 'facts.basedV': 'مصر. متاح للعمل عن بُعد',
    'facts.exp': 'الخبرة', 'facts.expV': '4 سنوات، و<span data-count="apps">12</span> تطبيقًا منشورًا',
    'facts.spec': 'التخصص', 'facts.specV': 'Flutter والتطبيقات اللحظية والبث المباشر',
    'facts.approach': 'المنهجية', 'facts.approachV': 'Clean Architecture وAgile وأفضل الممارسات',
    'pr.impact': 'أثر مُثبت', 'pr.impactP': 'سلّمتُ أكثر من <span data-count="apps">12</span> تطبيقًا في بيئة الإنتاج بمعمارية قابلة للتوسع وأداء قوي.',
    'pr.rt': 'تطبيقات لحظية وبث مباشر', 'pr.rtP': 'بث مباشر عبر Agora، ودردشة لحظية عبر SignalR، ومزامنة دون اتصال على iOS وAndroid.',
    'pr.arch': 'معمارية قابلة للتوسع', 'pr.archP': 'أطبّق Clean Architecture مع Riverpod وBLoC، ومستودعات monorepo معيارية تسهّل الصيانة على المدى الطويل.',
    'pr.lead': 'قيادة ومسؤولية', 'pr.leadP': 'أقود الميزات من البداية حتى النهاية، وأوجّه المطورين، وأرفع معايير جودة الكود.',
    'ai.title': 'هندسة مدعومة بالذكاء الاصطناعي',
    'ai.lede': 'أبعد من Flutter: أبني مع وكلاء الذكاء الاصطناعي عبر الموبايل والويب والباك إند والاختبارات، مع ضوابط تُبقي النتائج صادقة.',
    'ai.1': 'مهارات Claude Code مخصّصة',
    'ai.1p': 'كتبتُ مهارات قابلة لإعادة الاستخدام للوكلاء: Flutter Architect لمراجعة المعمارية وتدقيق Riverpod/BLoC والاختبارات، وFlutter Localization للعربية واتجاه RTL والصيغ السعودية، مع اختبارات تقييم (evals) تقيس أداءها.',
    'ai.2': 'اختبارات شاملة بعدة وكلاء',
    'ai.2p': 'شغّلتُ وكلاء ذكاء اصطناعي بالتوازي عبر 17 سيناريو اختبار شامل على محاكٍ وهاتف حقيقي، في بيئة معزولة لها نسختها الخاصة من قاعدة البيانات وساعة الخادم، ثم راجع وكيل مستقل التقارير مقابل الأدلة.',
    'ai.3': 'قاعدة معرفة مبنية بالذكاء الاصطناعي',
    'ai.3p': 'وثّقتُ بالذكاء الاصطناعي كود نظام موارد بشرية موروث: أكثر من 70 مستندًا تغطي 40 ميزة و68 جدولًا في قاعدة البيانات وواجهة الـ API الكاملة للتطبيق، إلى جانب أدلة تسليم الاختبارات ومسارات التدقيق.',
    'ai.4': 'اختبارات انحدار حيّة بـ Playwright',
    'ai.4p': 'بنيتُ مجموعة اختبارات Playwright تُشغّل مسارات التسوق المباشر على ويب المشتري والبائع، مع لقطات شاشة وسجلات كدليل لكل جولة اختبار ولكل خطأ تم إصلاحه.',
    'ai.5': 'ضوابط، لا تخمين',
    'ai.5p': 'أعمل داخل monorepo قائم على الذكاء الاصطناعي، قواعده الهندسية مكتوبة في CLAUDE.md وتفرضها فحوصات CI وبوابة محلية قبل الدفع، قبل دمج أي تغيير.',
    'ai.6': 'أدوات لتشغيل وكلاء متوازيين',
    'ai.6p': 'بنيتُ طابور مهام على مستوى الجهاز يتيح لعدة جلسات برمجة بالذكاء الاصطناعي مشاركة لابتوب واحد بذاكرة 8GB: تعمل عمليات البناء والاختبارات الثقيلة واحدة تلو الأخرى حسب الأولوية، وتُشارَك خوادم التطوير.',
    'tk.title': 'الأدوات', 'tk.lede': 'اللغات والأنماط والخدمات التي أستخدمها لبناء تطبيقات تبقى سريعة وسهلة الصيانة.',
    'tk.mobile': 'تطوير الموبايل', 'tk.n7': '7 أدوات', 'tk.n6': '6 أدوات', 'tk.n5': '5 أدوات',
    'tk.mobileN': 'كود Flutter واحد لـ iOS وAndroid.', 'tk.expert': 'خبير', 'tk.advanced': 'متقدّم',
    'tk.perf': 'تحسين الأداء', 'tk.integration': 'تكامل',
    'tk.arch': 'المعمارية والتطبيقات اللحظية', 'tk.archN': 'بنية يسهل تعديلها، إلى جانب البث المباشر والدردشة.',
    'tk.modular': 'تصميم معياري', 'tk.state': 'إدارة الحالة', 'tk.quality': 'جودة الكود',
    'tk.backend': 'الباك إند والويب', 'tk.backendN': 'واجهات API والبيانات وبوابات الويب حول التطبيقات.',
    'tk.ai': 'تطوير بمساعدة الذكاء الاصطناعي', 'tk.aiN': 'وكلاء ومهارات وضوابط تسرّع التسليم.',
    'tk.skills': 'مهارات وكلاء مخصّصة', 'tk.multi': 'سير عمل بعدة وكلاء', 'tk.review': 'مراجعة الكود وتدقيقه بالذكاء الاصطناعي',
    'tk.docs': 'توثيق بالذكاء الاصطناعي', 'tk.gates': 'فحوصات CI وبوابات الجودة',
    'tk.tools': 'الأدوات وسير العمل', 'tk.toolsN': 'كيف يُسلَّم العمل ويبقى منظّمًا.', 'tk.testing': 'اختبارات مؤتمتة',
    'contact.aria': 'لديك فكرة تطبيق؟ لنطلقه معًا.',
    'contact.l1': 'لديك فكرة', 'contact.l2': 'تطبيق؟', 'contact.l3': 'لنطلقه معًا.',
    'contact.intro': 'أنا متاح للمشاريع الحرة والوظائف الكاملة عن بُعد. أخبرني بما تبنيه وسأرد عليك سريعًا.',
    'contact.email': 'البريد الإلكتروني', 'copy': 'نسخ',
    'contact.start': 'ابدأ مشروعًا', 'contact.wa': 'راسلني على واتساب', 'contact.phone': 'الهاتف', 'contact.remote': 'عن بُعد حول العالم',
    'footer': '© <span id="year">2026</span> أحمد محمد. مطوّر Flutter في القاهرة.',
    'toTop': 'العودة إلى الأعلى'
  };

  /* Arabic copy for each project (technology names stay in English). */
  const GM_AR_FEATURES = ['محفظة رقمية للشحن والدفع', 'طلب خدمات الصيانة المنزلية', 'تتبّع الطلبات مباشرة', 'إدارة الشكاوى والاقتراحات'];
  const GM_AR_DESC = 'جول ماستر منصة مجتمعية شاملة تجعل الخدمات المحلية سهلة ومتاحة: اطلب البقالة وتوصيل الطعام ورحلات عربات الجولف وخدمات الصيانة المنزلية بسهولة. تابع كل جديد عبر التتبع اللحظي وأخبار المجتمع والمنتديات والإشعارات الفورية، وأدِر مدفوعاتك بأمان عبر المحفظة الرقمية المدمجة، وتعامل مع الشكاوى والاقتراحات بكفاءة.';
  const AR_PROJECTS = {
    'flick': {
      subtitle: 'منصة تجارة اجتماعية بالبث المباشر',
      summary: 'منصة تجارة اجتماعية بالبث المباشر لمصر ومنطقة الشرق الأوسط. يقدّم البائعون عروضًا مباشرة بالفيديو، ويضيف المشترون إلى السلة ويشترون دون مغادرة البث.',
      role: 'بنيتُ استوديو البث المباشر للبائع، والدردشة اللحظية وأدوات الإشراف، ومسارات التجارة المباشرة على الموبايل والويب، وقُدتُ نقل التطبيقين إلى Clean Architecture.',
      description: 'منصة تجارة اجتماعية بالبث المباشر لمصر ومنطقة الشرق الأوسط: يقدّم البائعون عروض فيديو مباشرة، ويضيف المشترون إلى السلة ويشترون دون مغادرة البث. المنتج منظومة كاملة: تطبيقا Flutter للمشتري والبائع منشوران على Google Play، ومتجر ويب، وبوابة Seller Studio، ولوحة إدارة، وباك إند بـ .NET. بنيتُ استوديو البث المباشر للبائع، والدردشة اللحظية وأدوات الإشراف، ومسارات التجارة المباشرة على الموبايل والويب، وقُدتُ نقل التطبيقين إلى Clean Architecture.',
      features: [
        'استوديو بث مباشر بـ Agora RTC على الموبايل والويب: تبديل الكاميرا والميكروفون، والتحكم في جودة الفيديو، ووضع المراقبة، ونقل الكاميرا بين الأجهزة',
        'دردشة لحظية عبر SignalR: الرد مع الاقتباس، والرسائل المثبّتة، وأسئلة وأجوبة تُعرض على الشاشة، والإخفاء والاستعادة والحذف، وحظر المشاهدين',
        'مسارات التجارة المباشرة: عروض فلاش محددة المدة، وإعادة ترتيب المنتجات أثناء البث، وأسعار العرض المباشر على بطاقات المنتجات، وإعادة التخزين من داخل البث',
        'تطبيقا المشتري والبائع وبوابات الويب بدعم كامل للعربية والإنجليزية واتجاه RTL، مع مجموعة اختبارات انحدار شاملة بـ Playwright'
      ],
      links: [
        { small: 'تطبيق البائع على', label: 'Google Play', badge: 'البائع' },
        { small: 'تسوّق عبر', label: 'الموقع', badge: 'ويب' },
        { small: 'بِع عبر', label: 'Seller Studio' }
      ]
    },
    'mawared': {
      title: 'موارد', subtitle: 'إدارة الموارد البشرية والحضور',
      description: 'منصة موارد بشرية ثنائية اللغة (عربي/إنجليزي) تعمل في بيئة الإنتاج لدى جهة حكومية سعودية: لوحة تحكم ويب بـ Laravel 12 تدير منها الموارد البشرية الموظفين والحضور والإجازات والرواتب والتقارير، إلى جانب تطبيق Flutter للموظفين لتسجيل الحضور والاستراحات والطلبات. عملتُ أساسًا على لوحة التحكم وواجهة الـ API الخاصة بها: شاشات متابعة البصمات المتعثّرة، وقواعد الحضور على الخادم، والإعدادات والهوية البصرية، وإصلاحات أمنية في المصادقة والوصول إلى البيانات، إضافةً إلى طابور الحضور دون اتصال في التطبيق الذي يغذّيها.',
      features: [
        'شاشات متابعة للموارد البشرية: البصمات المتعثّرة مع فلاتر الرواتب، وتسميات واضحة للأسباب، وعلامات الحضور، والمطابقة والتصدير',
        'قواعد الحضور على الخادم: نافذة قابلة للضبط لبصمات وضع عدم الاتصال مع مراجعة الموارد البشرية، ونوافذ تسجيل حضور تمتد عبر منتصف الليل، وفحص تداخل الاستراحات، وورديات تراعي المنطقة الزمنية خلف مفتاح تفعيل',
        'تعزيز الأمان: منع اطّلاع موظف على كشف راتب موظف آخر، وإعادة تعيين كلمة المرور ضمن نطاق الشركة، وصلاحية الرموز وإلغاؤها، وسياسة موحّدة لكلمات المرور، ومنع كشف الحسابات المسجّلة',
        'شاشات الإعدادات والهوية البصرية مترجمة بالكامل للعربية والإنجليزية، وألوان العلامة مربوطة بالثيم، و89 ملف اختبار Pest تغطي الـ API'
      ]
    },
    'quick-wash': {
      title: 'الغسيل السريع', subtitle: 'خدمة غسيل عند الطلب',
      description: 'تطبيق يسهّل طلب خدمة الغسيل مع استلام وتوصيل سريع وتجربة استخدام بسيطة تضمن راحة العميل وجودة الخدمة.',
      features: ['جدولة مواعيد استلام الغسيل', 'تتبّع حالة الطلب لحظة بلحظة', 'دفع إلكتروني آمن', 'نظام اشتراكات شهرية']
    },
    'quick-wash-employee': {
      title: 'الغسيل السريع للموظفين', subtitle: 'المهام والمسارات لفريق العمل الميداني',
      description: 'تطبيق مخصّص لموظفي الغسيل السريع لإدارة المهام المسندة، وتتبّع مسارات الاستلام والتوصيل لحظيًا، والتعامل مع طلبات العملاء بكفاءة عبر سير عمل مُحسَّن.',
      features: ['إسناد المهام والإشعارات لحظيًا', 'تتبّع الموقع مباشرة وتحسين المسارات', 'سجل الطلبات وتتبّع الإنجاز', 'التواصل مع العملاء عبر الرسائل داخل التطبيق']
    },
    'hawdaj-kids': {
      title: 'هودج كيدز', subtitle: 'ألعاب تعليمية للأطفال',
      description: 'تطبيق تعليمي وترفيهي آمن للأطفال، مصمَّم لتنمية المهارات عبر أنشطة تفاعلية وممتعة مع حماية الأطفال من مخاطر الإنترنت.',
      features: ['ألعاب تعليمية تفاعلية', 'نظام مكافآت لتحفيز الطفل', 'رقابة أبوية متقدمة', 'محتوى متنوع وهادف']
    },
    'hawdaj': {
      title: 'هودج', subtitle: 'منصة بيانات تركّز على الخصوصية',
      description: 'منصة متقدمة تركّز على خصوصية البيانات وأمانها، مع الالتزام بأعلى معايير الحماية العالمية وتشفير البيانات الحساسة.',
      features: ['تشفير البيانات من الطرفين', 'إدارة صلاحيات الوصول', 'نظام تنبيهات أمني متقدم', 'تخزين سحابي محمي']
    },
    'goal-master': { title: 'جول ماستر', subtitle: 'منصة مجتمعية متعددة الخدمات', description: GM_AR_DESC, features: GM_AR_FEATURES },
    'goal-master-admin': { title: 'جول ماستر - مدير ملعب', subtitle: 'تطبيق الإدارة للمنصة المجتمعية', description: GM_AR_DESC, features: GM_AR_FEATURES },
    'siwaan': {
      title: 'صيوان', subtitle: 'تطبيق الحي الشامل',
      description: 'تطبيق شامل لسكان مجمّع سكني: سوق الحي (سوق صيوان)، والمتاجر والخدمات المنزلية القريبة، ورحلات عربات الجولف، والتنبيهات العاجلة، والأخبار، والمنتدى، والمحادثات بين الجيران، تدعمه واجهة API بـ Laravel ولوحة تحكم.',
      features: [
        'سوق صيوان: صفحة واحدة لإعلانات الجيران ومتاجر السكان وخدماتهم، مع تقييمات قبل الشراء، وحدود للكميات، وساعات للعروض، ومواعيد مجدولة للخدمات',
        'المحفظة والمدفوعات: الشحن والدفع والإلغاء والاسترداد على سجل مالي، مع العكس والتسويات وتجميد الحسابات من لوحة التحكم',
        'وضع الزائر خلف مفتاح تفعيل: يتصفّح الزائر المحتوى العام والمنتدى ومعرض الصور للقراءة فقط، مع إخفاء بيانات التواصل في كل استجابة، وتنتقل سلته معه بعد تسجيل الدخول',
        'شراكة كويك وش: احجز الغسيل من داخل صيوان، مع موافقة واحدة قبل مشاركة الاسم والجوال، وإبعاد الروابط الشخصية عن السجلات',
        'تنبيهات عاجلة بحتى 5 صور ورفع متدفّق، تظهر كإشعار حتى والتطبيق مفتوح، مع تفضيلات للإشعارات حسب نوعها',
        'ترجمة كاملة للعربية والإنجليزية مع أرقام وتواريخ وعملة تتبع لغة المستخدم'
      ]
    },
    'siwaan-chat': {
      title: 'محادثات صيوان', subtitle: 'نظام محادثات مبني من الصفر',
      description: 'المحادثات داخل صيوان، أُعيد بناؤها من الصفر بدل محادثات Firebase القديمة: رسائل مباشرة ومجموعات بين الجيران، وصور ورسائل صوتية، وبطاقات منتجات من السوق، وأدوات إشراف، كلها على واجهة الـ API الخاصة بالتطبيق.',
      features: [
        'إرسال لا يضيع: صندوق صادر يحفظ كل رسالة، ويعيد المحاولة حسب نوع الخطأ، ويستعيد الإرسال حتى لو أُغلق التطبيق، فلا تضيع رسالة دون اتصال',
        'وسائط متقنة: صور ورسائل صوتية مع تصغير الحجم، وشريط تقدّم للرفع وإلغائه، وتحميل بعد التحقق من الصلاحية، ومشغّل صوت واحد بسرعات تشغيل',
        'المجموعات: أدوار، وحد أقصى للأعضاء، وطلبات انضمام وموافقات، واكتشاف المجموعات، وكتم، ورسائل نظام، مع توجيه الإشعارات للمجموعة الصحيحة',
        'لحظية دون اتصالات ثقيلة: استعلام دوري كأساس، مع إشارة Firebase اختيارية فوقه، وإشارة واحدة بلا محتوى لكل تغيير، ودمج الإشارات المتتالية في تحديث واحد',
        'الأمان: الحظر والإبلاغ والحذف، وعرض الأسماء المستعارة بدل الأسماء الحقيقية، وإشراف الإدارة على بلاغات المحادثات',
        'جاهز للتوسع: عدّاد غير المقروء يتوقف عند 100، والاقتباس ينقلك للرسالة الأصلية، والمحادثة تفتح عند أول رسالة غير مقروءة، واستعلامات مُختبرة على جداول بـ 100 ألف صف'
      ]
    },
    'siwaan-admin': {
      title: 'لوحة تحكم صيوان', subtitle: 'لوحة تحكم الإدارة والتجار', privateNote: 'أداة إدارة خاصة بفريق صيوان',
      description: 'لوحة الويب التي تدير صيوان: يعتمد فيها المسؤولون التجار والمتاجر والخدمات، ويشرفون على السوق وبلاغات المحادثات، ويديرون المحافظ والمدفوعات، وينشرون التنبيهات والمحتوى، بالعربية والإنجليزية وعلى أي حجم شاشة.',
      features: [
        'أُعيد تصميمها على نظام تصميم صيوان الخاص (sw-*)، مع فلاتر مثبّتة للجداول وشاشات تفاصيل تعمل على الكمبيوتر والجوال',
        'منصة التجار: طلبات الانضمام، وطوابير مراجعة المتاجر والخدمات، والتحقق من المستندات والمواقع، ومسارات الاعتماد والرفض وطلب التعديل مع سجل كامل',
        'المالية: المحافظ، والسجل المالي، والمدفوعات، والاسترداد، والعكس، والتسويات، وتجميد الحسابات',
        'جرس واحد لكل ما ينتظر قرار المسؤول، وصندوق وارد للإدارة، وإشعارات في المتصفح',
        'الإشراف: بلاغات المحادثات، وإعلانات الجيران، ومتابعة التقييمات في كل شاشة تاجر، وإعلانات ممولة تفتح متجرًا أو خدمة'
      ]
    },
    'mostaqer': {
      title: 'مستقر', subtitle: 'الطب عن بُعد والاستشارات',
      description: 'منصة خدمات متكاملة تتيح حجز الاستشارات الطبية وخدمات الرعاية الصحية بسهولة عبر تطبيق ذكي وآمن يدعم المكالمات المرئية والصوتية.',
      features: ['حجز مواعيد الاستشارات الطبية', 'مكالمات فيديو وصوت مباشرة', 'إدارة الوصفات الطبية الرقمية', 'تقييم الأطباء والخدمات']
    },
    'torido': {
      title: 'توريدو', subtitle: 'تطبيق لشحن البضائع ونقلها',
      description: 'تطبيق في السعودية لشحن البضائع ونقلها، يربط أصحاب الشحنات بشركات النقل والسائقين: يطلب العميل شحنته، ويقدّم الناقلون عروض أسعار، فيختار الأنسب ويتابعها لحظة بلحظة حتى التسليم. تضم المنظومة تطبيقًا للعميل وتطبيقًا للناقل على App Store وGoogle Play، ولوحة تحكم لفريق التشغيل، وبوابة ويب لشركات النقل.',
      features: [
        'شحنة بأكثر من مسار: طلب واحد فيه عدة نقاط تحميل وتسليم، يحدد العميل ترتيب تنفيذها، ولا يفتح السائق المسار التالي قبل إغلاق الحالي',
        'تسليم موثّق لا يمكن التلاعب به: توثيق الحمولة بالصور والفيديو عند الاستلام، وفحص المستلم، وتصنيف للأضرار بأدلة فيديو لا يمكن تخطيه ويعود لو أُعيد تشغيل التطبيق، وإنهاء التسليم برمز OTP',
        'أساطيل شركات النقل: كل سائق تابع لشركة واحدة بقاعدة مفروضة في قاعدة البيانات، ونقل السائق بين الشركات بطلب له مهلة وموافقة تلقائية، مع اختبارات تزامن حقيقية',
        'مدفوعات وتكاملات سعودية: Apple Pay من الواجهة الأصلية في iOS، وHyperPay، وتحويل بنكي يُفعَّل لكل مستخدم على حدة، ومستندات النقل الرسمية عبر منصة بيان',
        'السائق بلغته: 5 لغات (العربية والإنجليزية والهندية والأردية والنيبالية) مع RTL، وتبديل بين بيئة الاختبار والإنتاج من داخل التطبيق دون إعادة بناء',
        'بوابة ويب لشركات النقل بـ Next.js بنفس صلاحيات التطبيق وعلى نفس الـ API',
        'اختبارات بمساعدة الذكاء الاصطناعي: وكلاء Claude Code بمهارات مخصّصة للمشروع لاختبارات Golden والتحقق البصري من الشاشات وبوابة مراجعة قبل الدمج، ودورات اختبار شاملة للباك إند نجحت 58 من 58، ومقارنة بوابة الويب بالتطبيق شاشةً بشاشة بثلاث لغات'
      ]
    },
    'torido-naqel': {
      title: 'توريدو ناقل', subtitle: 'تطبيق الناقل وبوابة شركات النقل',
      description: 'الجانب الخاص بالناقلين في توريدو: يجد السائقون وشركات النقل الشحنات المتاحة، ويقدّمون عروض الأسعار، وينفّذون كل طلب من الاستلام حتى التسليم. متاح كتطبيق Flutter على App Store وGoogle Play، وبوابة ويب بـ Next.js تدير منها الشركة أسطولها وموظفيها وطلباتها.',
      features: [
        'من الاستلام حتى التسليم دون اختصارات: يفحص السائق كل قطعة من الحمولة عند الاستلام دون اختيارات مسبقة، ويوثّقها بالصور والفيديو، ويصنّف الأضرار في خطوة لا يمكن تخطيها وتعود بعد إعادة التشغيل، ثم يُنهي التسليم برمز OTP من المستلم',
        'مسارًا بعد مسار: يبقى كل مسار مغلقًا حتى ينتهي السابق، ويتحوّل عنوان التسليم إلى الأخضر مع الاتجاهات بمجرد إتمام الاستلام',
        'أساطيل الشركات: تضيف الشركة سائقيها بمستنداتهم الخاصة، وتضم سائقين بطلبات انضمام دون أكواد، وتنقلهم بين الشركات بعدّاد للموافقة، وتدير موظفيها بصلاحيات',
        'بلاغات الحوادث بالأدلة، واختصارات واتساب والاتصال أثناء انتظار توثيق الشحنة، ومرفقات PDF عند التسجيل',
        'مصمَّم لسائقي السعودية: 5 لغات (العربية والإنجليزية والهندية والأردية والنيبالية) مع RTL، وتاريخ الميلاد بالهجري أو الميلادي',
        'بوابة ويب للشركات بـ Next.js 16 وReact 19 وTypeScript صارم، تؤدي بالضبط ما يؤديه التطبيق على نفس الـ API، مع جلسات بوابة موقّعة وReact Query وnext-intl واختبارات Vitest'
      ]
    },
    'hawary': {
      title: 'الهواري', subtitle: 'إدارة المهام والأنشطة',
      description: 'منصة متكاملة لإدارة الأنشطة والخدمات الميدانية، تركّز على الكفاءة وسهولة الاستخدام وإدارة الفرق.',
      features: ['إسناد المهام للموظفين', 'تتبّع المواقع الجغرافية', 'تقارير إنجاز دورية', 'تنبيهات فورية']
    },
    'family': {
      subtitle: 'تواصل العائلة وتنظيمها',
      description: 'تطبيق يعزّز التواصل داخل العائلة ويدير المهام والمناسبات المشتركة بسهولة وخصوصية تامة.',
      features: ['تقويم عائلي مشترك', 'قوائم مهام وطلبات منزلية', 'مشاركة الصور والذكريات', 'معرفة مواقع أفراد العائلة']
    }
  };
  const L = (p, field) => {
    const ar = lang === 'ar' && AR_PROJECTS[p.slug];
    return ar && ar[field] != null ? ar[field] : p[field];
  };
  const linksOf = (p) => (p.links || []).map((l, i) => {
    const ar = lang === 'ar' && AR_PROJECTS[p.slug] && AR_PROJECTS[p.slug].links;
    return ar && ar[i] ? Object.assign({}, l, ar[i]) : l;
  });
  const nameOf = (p) => L(p, 'title').split(' | ')[0];

  /* Static text: remember the English HTML once, swap in Arabic on demand. */
  const i18nEls = [...document.querySelectorAll('[data-i18n]')];
  const enHTML = new Map(i18nEls.map(el => [el, el.innerHTML]));
  const ariaEls = [...document.querySelectorAll('[data-i18n-aria]')];
  const enAria = new Map(ariaEls.map(el => [el, el.getAttribute('aria-label')]));
  const applyStatic = () => {
    i18nEls.forEach(el => {
      const v = lang === 'ar' ? AR_STATIC[el.dataset.i18n] : enHTML.get(el);
      if (v != null) el.innerHTML = v;
    });
    ariaEls.forEach(el => {
      const v = lang === 'ar' ? AR_STATIC[el.dataset.i18nAria] : enAria.get(el);
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.title = t('docTitle');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('metaDesc'));
  };
  if (lang === 'ar') applyStatic();

  const isLive = p => Boolean(p.googlePlay || p.appStore);
  const isWebShot = src => /\/web-\d+\.jpg$/.test(src);
  const storeLine = p => p.googlePlay && p.appStore ? t('storeBoth') : p.appStore ? t('storeApple') : p.googlePlay ? t('storePlay') : t('storeNone');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (cls, extra = '') => `<span class="ico ${extra}"><i class="${cls}"></i></span>`;

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionOK = () => !reduceMotion.matches;
  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

  /* ---------------- Counts ---------------- */
  const counts = { all: projects.length, live: projects.filter(isLive).length, internal: projects.filter(p => !isLive(p)).length, apps: projects.filter(p => isLive(p) && !p.partOf).length };
  const fillCounts = () => {
    document.querySelectorAll('[data-count]').forEach(el => { el.textContent = counts[el.dataset.count]; });
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  };
  fillCounts();

  /* ---------------- Shelf marquee ---------------- */
  const shelf = document.getElementById('shelf');
  const renderShelf = () => {
    const shelfItems = projects.filter(p => p.icon && isLive(p) && !p.partOf).map(p => `
    <li class="shelf-item"><img src="${p.icon}" alt="" width="44" height="44" loading="lazy" decoding="async">
      <span><b>${esc(nameOf(p))}</b><small>${p.appStore ? icon('fa-brands fa-apple') : ''}${p.googlePlay ? icon('fa-brands fa-google-play') : ''}${esc(L(p, 'subtitle'))}</small></span></li>`).join('');
    shelf.innerHTML = shelfItems + shelfItems.replace(/<li class="shelf-item"/g, '<li class="shelf-item" aria-hidden="true"');
  };
  renderShelf();

  /* ---------------- Hero notifications ---------------- */
  const notifs = document.getElementById('notifs');
  const notifQueue = projects.filter(p => p.icon && isLive(p) && !p.partOf);
  const notifHTML = (p) => `
    <img class="notif-icon" src="${p.icon}" alt="" width="40" height="40">
    <div class="notif-body">
      <div class="notif-top"><strong>${esc(nameOf(p))}</strong><span>${t('shipped')}</span></div>
      <p class="notif-title">${storeLine(p)}</p>
      <p class="notif-text">${esc(L(p, 'subtitle'))}</p>
    </div>`;
  let notifIndex = 0;
  const pushNotif = (animate) => {
    const p = notifQueue[notifIndex % notifQueue.length];
    notifIndex++;
    const li = document.createElement('li');
    li.className = 'notif';
    li.innerHTML = notifHTML(p);
    notifs.prepend(li);
    [...notifs.children].forEach((el, i) => {
      el.style.setProperty('--i', i);
      if (i > 2) setTimeout(() => el.remove(), 700);
    });
    if (animate && motionOK()) {
      li.animate([
        { transform: 'translateY(-26px) scale(0.94)', opacity: 0, filter: 'blur(6px)' },
        { transform: 'translateY(0) scale(1)', opacity: 1, filter: 'blur(0)' }
      ], { duration: 750, easing: EASE });
    }
  };
  pushNotif(false); pushNotif(false);
  const resetNotifs = () => { notifs.innerHTML = ''; notifIndex = Math.max(0, notifIndex - 2); pushNotif(false); pushNotif(false); };
  let notifTimer = null;
  const startNotifs = () => { if (!notifTimer && motionOK()) notifTimer = setInterval(() => pushNotif(true), 3400); };
  const stopNotifs = () => { clearInterval(notifTimer); notifTimer = null; };
  const heroObserver = new IntersectionObserver(([e]) => { e.isIntersecting && !document.hidden ? startNotifs() : stopNotifs(); });
  document.addEventListener('visibilitychange', () => { document.hidden ? stopNotifs() : startNotifs(); });

  /* ---------------- Work grid ---------------- */
  const grid = document.getElementById('grid');
  const cardMedia = (p) => {
    const imgs = p.images;
    const mini = (src, cls) => `<img class="mini ${cls}" src="${src}" alt="" loading="lazy" decoding="async">`;
    if (!p.icon) return `<div class="card-media is-screens">${mini(imgs[0], 'mini-a')}${mini(imgs[1] || imgs[0], 'mini-b')}${mini(imgs[2] || imgs[0], 'mini-c')}</div>`;
    if (!imgs.length) return `<div class="card-media is-icon"><img class="card-icon" src="${p.icon}" alt="" loading="lazy"></div>`;
    const third = p.featured ? mini(imgs[2] || imgs[0], 'mini-c') : '';
    return `<div class="card-media"><img class="card-icon" src="${p.icon}" alt="" loading="lazy">${mini(imgs[0], 'mini-a')}${mini(imgs[1] || imgs[0], 'mini-b')}${third}</div>`;
  };
  const cardHTML = (p) => {
    const live = isLive(p);
    const seen = [];
    const bits = [];
    const addIcon = (cls, label) => { if (!seen.includes(cls)) { seen.push(cls); bits.push(icon(cls) + '<span class="sr-only">' + esc(label) + '</span>'); } };
    if (p.appStore) addIcon('fa-brands fa-apple', 'App Store');
    if (p.googlePlay) addIcon('fa-brands fa-google-play', 'Google Play');
    linksOf(p).forEach(l => addIcon(l.icon, l.label));
    const stores = live ? bits.join('') : `${icon('fa-solid fa-lock')}<span>${t('private')}</span>`;
    const featuredExtra = p.featured ? `
      <p class="feat-summary">${esc(L(p, 'summary'))}</p>
      <p class="feat-role">${esc(L(p, 'role'))}</p>
      <ul class="chips">${p.technologies.slice(0, 6).map(t => `<li class="chip">${esc(t)}</li>`).join('')}${p.technologies.length > 6 ? `<li class="chip">+${p.technologies.length - 6}</li>` : ''}</ul>` : '';
    return `
      <article class="card${p.featured ? ' is-featured' : ''}" style="--h:${p.tint[0]};--c:${p.tint[1]};--vt:card-${p.slug}" data-slug="${p.slug}">
        ${cardMedia(p)}
        <div class="card-body">
          <div class="card-title">
            <h3><a class="card-link" href="#p-${p.slug}">${esc(L(p, 'title'))}</a></h3>
            <span class="badge${live ? ' is-live' : ''}">${live ? t('live') : t('internal')}</span>
          </div>
          <p class="card-sub">${esc(L(p, 'subtitle'))}</p>
          ${featuredExtra}
          <div class="card-foot">
            <span class="card-stores">${stores}</span>
            <span class="card-more" aria-hidden="true">${p.featured ? t('caseStudy') : t('viewProject')} ${icon('fa-solid fa-arrow-right')}</span>
          </div>
        </div>
      </article>`;
  };
  let currentFilter = 'all';
  const filtered = () => projects.filter(p => currentFilter === 'all' ? true : currentFilter === 'live' ? isLive(p) : !isLive(p));
  const renderGrid = () => { grid.innerHTML = filtered().map(cardHTML).join(''); };
  renderGrid();

  /* Filter pill + view transition */
  const filterWrap = document.getElementById('filters');
  const filterPill = document.getElementById('filter-pill');
  const placePill = (pill, el, instant) => {
    if (!el) { pill.style.opacity = '0'; return; }
    if (instant) pill.style.transition = 'none';
    pill.style.width = el.offsetWidth + 'px';
    pill.style.transform = `translateX(${el.offsetLeft - 4}px)`;
    pill.style.left = '4px';
    pill.style.opacity = '1';
    if (instant) { pill.offsetWidth; pill.style.transition = ''; }
  };
  const activeFilterBtn = () => filterWrap.querySelector('[aria-pressed="true"]');
  filterWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
    filterWrap.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    placePill(filterPill, btn);
    currentFilter = btn.dataset.filter;
    if (document.startViewTransition && motionOK()) {
      root.classList.add('vt-filter');
      const t = document.startViewTransition(renderGrid);
      t.finished.finally(() => root.classList.remove('vt-filter'));
    } else {
      renderGrid();
    }
  });

  /* ---------------- Project sheet ---------------- */
  const sheet = document.getElementById('sheet');
  const sheetScroll = document.getElementById('sheet-scroll');
  let sheetProject = null, slide = 0, lastFocus = null;

  const sheetHTML = (p) => {
    const live = isLive(p);
    const next = projects[(projects.indexOf(p) + 1) % projects.length];
    const hasShots = p.images.length > 0;
    const stage = hasShots ? `
      <div class="phone"><div class="phone-screen"><span class="island" aria-hidden="true"></span><img id="stage-img" src="${p.images[0]}" alt="${esc(L(p, 'title'))}, ${t('screen')} 1 ${t('of')} ${p.images.length}"></div></div>
      ${p.images.length > 1 ? `<div class="stage-nav"><button class="icon-btn" type="button" data-step="-1" aria-label="${t('prevScreen')}">${icon('fa-solid fa-arrow-left')}</button><button class="icon-btn" type="button" data-step="1" aria-label="${t('nextScreen')}">${icon('fa-solid fa-arrow-right')}</button></div>
      <span class="stage-count" id="stage-count">1 / ${p.images.length}</span>` : ''}`
      : `<img class="stage-icon" src="${p.icon}" alt="${esc(L(p, 'title'))}, ${t('appIcon')}">`;
    const stores = live ? `<div class="store-row">
        ${p.appStore ? `<a class="store-btn" href="${p.appStore}" target="_blank" rel="noopener">${icon('fa-brands fa-apple')}<span><small>${t('dlOn')}</small><b>App Store</b></span></a>` : ''}
        ${p.googlePlay ? `<a class="store-btn" href="${p.googlePlay}" target="_blank" rel="noopener">${icon('fa-brands fa-google-play')}<span><small>${t('getOn')}</small><b>Google Play</b></span></a>` : ''}
        ${linksOf(p).map(l => `<a class="store-btn" href="${l.url}" target="_blank" rel="noopener">${icon(l.icon)}<span><small>${esc(l.small)}</small><b>${esc(l.label)}</b></span></a>`).join('')}
      </div>` : `<p class="private-note">${icon('fa-solid fa-lock')} ${esc(L(p, 'privateNote') || t('privateNote'))}</p>`;
    return `
      <header class="sheet-head">
        ${p.icon ? `<img src="${p.icon}" alt="">` : ''}
        <div class="titles"><h2 id="sheet-title">${esc(L(p, 'title'))}</h2><p>${storeLine(p)}</p></div>
        <div class="head-actions">
          <button class="icon-btn" type="button" data-close aria-label="${t('closeProject')}">${icon('fa-solid fa-xmark')}</button>
        </div>
      </header>
      <div class="sheet-body" style="--h:${p.tint[0]};--c:${p.tint[1]}">
        <div class="gallery">
          <div class="stage${hasShots && isWebShot(p.images[0]) ? ' is-web' : ''}">${stage}</div>
          ${p.images.length > 1 ? `<div class="thumbs" role="group" aria-label="${t('screens')}">${p.images.map((src, i) => `<button class="thumb${isWebShot(src) ? ' is-web' : ''}" type="button" data-slide="${i}" aria-label="${t('screen')} ${i + 1}" aria-current="${i === 0}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
        </div>
        <div class="info">
          <div>
            <span class="badge${live ? ' is-live' : ''}">${live ? t('live') : t('internal')}</span>
            <p class="info-title" style="margin-top:14px">${esc(L(p, 'title'))}</p>
            <p class="info-sub">${esc(L(p, 'subtitle'))}</p>
          </div>
          <p class="info-desc" dir="auto">${esc(L(p, 'description'))}</p>
          ${stores}
          <section><h3>${t('whatItDoes')}</h3><ul class="features">${L(p, 'features').map(f => `<li><span class="tick">${icon('fa-solid fa-check')}</span><span dir="auto">${esc(f)}</span></li>`).join('')}</ul></section>
          <section><h3>${t('builtWith')}</h3><ul class="chips">${p.technologies.map(t => `<li class="chip">${esc(t)}</li>`).join('')}</ul></section>
          <button class="next-btn" type="button" data-next="${next.slug}"><span><small>${t('nextProject')}</small><b>${esc(L(next, 'title'))}</b></span>${icon('fa-solid fa-arrow-right')}</button>
        </div>
      </div>`;
  };

  const goTo = (i) => {
    const p = sheetProject;
    if (!p || !p.images.length) return;
    const n = p.images.length;
    const dir = i > slide ? 1 : -1;
    slide = (i + n) % n;
    const img = document.getElementById('stage-img');
    img.src = p.images[slide];
    const stageEl = img.closest('.stage');
    if (stageEl) stageEl.classList.toggle('is-web', isWebShot(p.images[slide]));
    img.alt = `${L(p, 'title')}, ${t('screen')} ${slide + 1} ${t('of')} ${n}`;
    const count = document.getElementById('stage-count');
    if (count) count.textContent = `${slide + 1} / ${n}`;
    sheetScroll.querySelectorAll('.thumb').forEach((t, k) => t.setAttribute('aria-current', String(k === slide)));
    const active = sheetScroll.querySelector(`.thumb[data-slide="${slide}"]`);
    active && active.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: motionOK() ? 'smooth' : 'auto' });
    if (motionOK()) img.animate([{ opacity: 0, transform: `translateX(${dir * (isRTL() ? -18 : 18)}px)` }, { opacity: 1, transform: 'none' }], { duration: 420, easing: EASE });
  };

  const fillSheet = (p) => {
    sheetProject = p; slide = 0;
    sheetScroll.innerHTML = sheetHTML(p);
    sheetScroll.scrollTop = 0;
  };

  const openSheet = (slug) => {
    const p = projects.find(x => x.slug === slug);
    if (!p) return;
    if (sheet.open) {
      fillSheet(p);
      if (motionOK()) sheetScroll.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: EASE });
      sheetScroll.querySelector('[data-close]').focus();
      return;
    }
    lastFocus = document.activeElement;
    fillSheet(p);
    sheet.classList.remove('is-closing');
    sheet.showModal();
    root.classList.add('has-sheet');
    if (motionOK()) sheet.animate([
      { opacity: 0, transform: 'translateY(28px) scale(0.98)' },
      { opacity: 1, transform: 'none' }
    ], { duration: 520, easing: EASE });
  };

  const closeSheet = () => {
    if (!sheet.open) return;
    const done = () => {
      sheet.close();
      sheet.classList.remove('is-closing');
      root.classList.remove('has-sheet');
      if (location.hash.startsWith('#p-')) history.replaceState(null, '', location.pathname + location.search);
      lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
    };
    if (!motionOK()) return done();
    sheet.classList.add('is-closing');
    sheet.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(20px) scale(0.985)' }], { duration: 280, easing: 'cubic-bezier(0.5, 0, 0.75, 0)' }).finished.then(done, done);
  };

  sheet.addEventListener('cancel', (e) => { e.preventDefault(); closeSheet(); });
  sheet.addEventListener('click', (e) => {
    if (e.target === sheet) return closeSheet();
    if (e.target.closest('[data-close]')) return closeSheet();
    const step = e.target.closest('[data-step]');
    if (step) return goTo(slide + Number(step.dataset.step));
    const thumb = e.target.closest('[data-slide]');
    if (thumb) return goTo(Number(thumb.dataset.slide));
    const next = e.target.closest('[data-next]');
    if (next) { history.replaceState(null, '', '#p-' + next.dataset.next); openSheet(next.dataset.next); }
  });
  sheet.addEventListener('keydown', (e) => {
    const fwd = isRTL() ? -1 : 1;
    if (e.key === 'ArrowRight') goTo(slide + fwd);
    if (e.key === 'ArrowLeft') goTo(slide - fwd);
  });
  let touchX = null;
  sheet.addEventListener('pointerdown', (e) => { if (e.target.closest('.stage')) touchX = e.clientX; });
  sheet.addEventListener('pointerup', (e) => {
    if (touchX === null) return;
    const dx = e.clientX - touchX; touchX = null;
    if (Math.abs(dx) > 40) goTo(slide + (dx < 0 ? 1 : -1) * (isRTL() ? -1 : 1));
  });

  const routeHash = () => {
    const h = location.hash;
    if (h.startsWith('#p-')) openSheet(h.slice(3));
    else if (sheet.open) closeSheet();
  };
  window.addEventListener('hashchange', routeHash);

  /* ---------------- Theme ---------------- */
  const themeBtn = document.getElementById('theme-btn');
  const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => root.dataset.theme || (darkMQ.matches ? 'dark' : 'light');
  const labelTheme = () => themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? t('toLight') : t('toDark'));
  labelTheme();
  darkMQ.addEventListener('change', labelTheme);
  themeBtn.addEventListener('click', (e) => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    const apply = () => { root.dataset.theme = next; labelTheme(); try { localStorage.setItem('portfolio-theme', next); } catch (err) {} };
    if (!document.startViewTransition || !motionOK()) return apply();
    const r = themeBtn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(apply);
    t.ready.then(() => {
      root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: EASE, pseudoElement: '::view-transition-new(root)' });
    }).catch(() => {});
  });

  /* ---------------- Nav: scrolled state, active section, menu ---------------- */
  const nav = document.getElementById('nav');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { nav.classList.toggle('is-scrolled', window.scrollY > 24); ticking = false; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navPill = document.getElementById('nav-pill');
  const navLinks = [...document.querySelectorAll('#nav-links a[data-section]')];
  const setActive = (id) => {
    let activeLink = null;
    navLinks.forEach(a => { const on = a.dataset.section === id; a.setAttribute('aria-current', String(on)); if (on) activeLink = a; });
    if (activeLink) placePill(navPill, activeLink.parentElement); else navPill.style.opacity = '0';
  };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['top', 'work', 'about', 'ai', 'toolkit', 'contact'].forEach(id => { const el = document.getElementById(id); el && sectionObserver.observe(el); });

  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu-btn');
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? t('closeMenu') : t('openMenu'));
    menu.hidden = !open;
    root.classList.toggle('has-sheet', open);
    if (open && motionOK()) {
      menu.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, easing: 'ease-out' });
      menu.querySelectorAll('.menu-links li').forEach((li, i) => li.animate([
        { opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }
      ], { duration: 600, delay: 60 + i * 60, easing: EASE, fill: 'backwards' }));
    }
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820 && !menu.hidden) setMenu(false);
    placePill(filterPill, activeFilterBtn(), true);
    const cur = navLinks.find(a => a.getAttribute('aria-current') === 'true');
    if (cur) placePill(navPill, cur.parentElement, true);
  });

  /* ---------------- Copy email ---------------- */
  const copyBtn = document.getElementById('copy-email');
  copyBtn.addEventListener('click', () => {
    const text = document.getElementById('email').textContent.trim();
    const label = copyBtn.querySelector('.copy-label');
    const done = () => {
      copyBtn.classList.add('is-done'); label.textContent = t('copied');
      setTimeout(() => { copyBtn.classList.remove('is-done'); label.textContent = t('copy'); }, 2200);
    };
    const fallback = () => {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('email'));
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
      label.textContent = t('pressCopy');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  });

  /* ---------------- About: split statement into words for the scroll-lit effect ---------------- */
  const statement = document.getElementById('statement');
  const splitStatement = () => {
    if (!statement || !CSS.supports('animation-timeline: view()')) return;
    const words = statement.textContent.split(/(\s+)/);
    statement.innerHTML = words.map(w => /^\s+$/.test(w) ? w : `<span class="w">${esc(w)}</span>`).join('');
  };
  splitStatement();

  /* ---------------- Language switch ---------------- */
  const langBtn = document.getElementById('lang-btn');
  const labelLang = () => {
    if (!langBtn) return;
    langBtn.querySelector('.lang-label').textContent = t('langLabel');
    langBtn.setAttribute('aria-label', t('langAria'));
    langBtn.setAttribute('lang', t('langAttr'));
  };
  labelLang();
  const setLang = (next) => {
    lang = next;
    root.setAttribute('lang', next);
    root.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');
    try { localStorage.setItem('portfolio-lang', next); } catch (err) {}
    applyStatic();
    fillCounts();
    splitStatement();
    renderShelf();
    resetNotifs();
    renderGrid();
    if (sheet.open && sheetProject) fillSheet(sheetProject);
    document.querySelectorAll('.mark[data-sweep]').forEach(m => m.classList.add('is-on'));
    labelTheme(); labelLang();
    menuBtn.setAttribute('aria-label', menuBtn.getAttribute('aria-expanded') === 'true' ? t('closeMenu') : t('openMenu'));
    requestAnimationFrame(() => {
      placePill(filterPill, activeFilterBtn(), true);
      const cur = navLinks.find(a => a.getAttribute('aria-current') === 'true');
      if (cur) placePill(navPill, cur.parentElement, true);
    });
  };
  if (langBtn) langBtn.addEventListener('click', () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    if (!document.startViewTransition || !motionOK()) return setLang(next);
    const vt = document.startViewTransition(() => setLang(next));
    vt.ready.catch(() => {}); vt.finished.catch(() => {}); // aborted when the viewport resizes mid-switch; the switch itself still lands
  });

  /* ---------------- Motion: hero intro + section reveals ---------------- */
  const intro = () => {
    root.classList.remove('intro-pending');
    if (!motionOK() || document.visibilityState === 'hidden') return;
    const play = (el, frames, delay, duration = 900) => el && el.animate(frames, { duration, delay, easing: EASE, fill: 'backwards' });
    const rise = [{ transform: 'translateY(105%)' }, { transform: 'none' }];
    const fadeUp = [{ opacity: 0, transform: 'translateY(16px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }];
    play(nav, [{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], 0, 700);
    play(document.querySelector('.status'), fadeUp, 60, 700);
    document.querySelectorAll('.name .line > span').forEach((el, i) => play(el, rise, 120 + i * 90, 1000));
    play(document.querySelector('.role'), fadeUp, 380, 800);
    play(document.querySelector('.pitch'), fadeUp, 460, 800);
    play(document.querySelector('.facts-inline'), fadeUp, 540, 800);
    play(document.querySelector('.hero-actions'), fadeUp, 620, 800);
    play(document.querySelector('.slab'), [{ opacity: 0, transform: 'rotate(0deg) scale(0.85)' }, { opacity: 1, transform: 'rotate(7deg) scale(1)' }], 260, 1200);
    play(document.querySelector('.hero-visual .phone'), [{ opacity: 0, transform: 'translateY(48px) rotate(-4deg)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], 320, 1100);
    play(notifs, [{ opacity: 0, transform: 'translateY(-16px) scale(0.96)' }, { opacity: 1, transform: 'none' }], 950, 800);
    const sweep = document.querySelector('.role .mark');
    setTimeout(() => sweep && sweep.classList.add('is-on'), 900);
  };
  const startIntro = () => {
    let started = false;
    const go = () => { if (!started) { started = true; intro(); heroObserver.observe(document.querySelector('.hero')); } };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
    setTimeout(go, 500);
  };
  startIntro();
  document.querySelectorAll('.mark[data-sweep]').forEach(m => { if (!motionOK()) m.classList.add('is-on'); });

  // Reveals start from the element's visible resting state: nothing is hidden before its animation runs.
  const revealers = {
    card: (el, i) => {
      el.querySelectorAll('.core-tile, .pill').forEach((t, k) => t.animate([{ opacity: 0, transform: 'translateY(12px) scale(0.92)' }, { opacity: 1, transform: 'none' }], { duration: 650, delay: 280 + k * 55, easing: EASE, fill: 'backwards' }));
      return el.animate([{ opacity: 0, transform: 'translateY(36px) scale(0.98)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: i * 80, easing: EASE, fill: 'backwards' });
    },
    head: (el) => el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 900, easing: EASE, fill: 'backwards' }),
    rise: (el, i) => el.animate([{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }], { duration: 850, delay: (i % 3) * 90, easing: EASE, fill: 'backwards' }),
    principle: (el, i) => el.animate([{ opacity: 0, transform: 'translateX(-16px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: i * 90, easing: EASE, fill: 'backwards' }),
    lines: (el) => el.querySelectorAll('.line > span').forEach((s, i) => s.animate([{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 1000, delay: i * 110, easing: EASE, fill: 'backwards' })),
    shelf: (el) => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, easing: 'ease-out', fill: 'backwards' })
  };
  const revealObserver = new IntersectionObserver((entries) => {
    const batch = entries.filter(e => e.isIntersecting);
    batch.forEach((e, i) => {
      revealObserver.unobserve(e.target);
      if (!motionOK() || document.hidden) return;
      const fn = revealers[e.target.dataset.reveal];
      fn && fn(e.target, i);
    });
  }, { threshold: 0.12 });
  const watch = (sel, kind) => document.querySelectorAll(sel).forEach(el => { el.dataset.reveal = kind; revealObserver.observe(el); });
  const watchCards = () => watch('#grid .card', 'card');
  watch('.section-head, .facts', 'head');
  watch('.tk-panel', 'card');
  watch('.principle', 'principle');
  watch('.ai-head', 'head');
  watch('.ai-item', 'rise');
  watch('.contact-title', 'lines');
  watchCards();

  // Re-watch cards after filtering (no entrance on filter; the view transition handles it).
  const gridObserver = new MutationObserver(() => {
    grid.querySelectorAll('.card:not([data-reveal])').forEach(el => { el.dataset.reveal = 'done'; });
  });
  gridObserver.observe(grid, { childList: true });

  /* Toolkit: spotlight follows the pointer inside each panel */
  document.querySelectorAll('.tk-panel').forEach(panel => panel.addEventListener('pointermove', (e) => {
    const r = panel.getBoundingClientRect();
    panel.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    panel.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  /* Deep link on load */
  if (location.hash.startsWith('#p-')) setTimeout(routeHash, 300);

  /* Initial pills */
  requestAnimationFrame(() => placePill(filterPill, activeFilterBtn(), true));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => placePill(filterPill, activeFilterBtn(), true));

  reduceMotion.addEventListener('change', () => { motionOK() ? startNotifs() : stopNotifs(); });
})();
