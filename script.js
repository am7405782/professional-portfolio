// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal, .scroll-reveal');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');

            // Special handling for skills-group staggered cards
            if (el.classList.contains('skills-group')) {
                const cards = el.querySelectorAll('.skill-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.1}s`;
                    setTimeout(() => card.classList.add('active'), 50);
                });
            }
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Theme Management System
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

// Initialize theme from storage
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeIcon) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');

        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    });
}

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
const projects = [
    {
        title: "Quick Wash",
        subtitle: "On-Demand Laundry Service",
        image: "image_project/Quick/logo.png",
        images: ["image_project/Quick/logo.png", "image_project/Quick/2.jpeg", "image_project/Quick/3.jpeg", "image_project/Quick/4.jpeg", "image_project/Quick/5.jpeg"],
        description: "An app that simplifies laundry service requests with quick pickup and delivery through an intuitive user experience ensuring customer comfort and service quality.",
        features: ["جدولة مواعيد استلام الغسيل", "تتبع حالة الطلب لحظة بلحظة", "دفع إلكتروني آمن", "نظام اشتراكات شهرية"],
        technologies: ["Flutter", "Node.js (Backend)", "Payment Gateway Integration", "Maps SDK"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.quick.wash.user",
        appStore: "https://apps.apple.com/us/app/الغسيل-السريع/id6504152286"
    },
    {
        title: "Quick Wash Employee",
        subtitle: "Employee Management & Task Tracking",
        image: "image_project/quick_emp/Screenshot 2026-03-29 at 12.30.32 AM.png",
        images: ["image_project/quick_emp/Screenshot 2026-03-29 at 12.31.33 AM.png", "image_project/quick_emp/Screenshot 2026-03-29 at 12.31.37 AM.png", "image_project/quick_emp/Screenshot 2026-03-29 at 12.31.41 AM.png",],
        description: "A dedicated mobile app for Quick Wash employees to manage assigned tasks, track pickup and delivery routes in real-time, and efficiently handle customer requests with optimized workflow management.",
        features: ["Real-time task assignment and notifications", "Live location tracking and route optimization", "Order history and completion tracking", "Customer communication via in-app messaging"],
        technologies: ["Flutter", "Firebase Realtime Database", "Google Maps SDK", "Push Notifications"],
        googlePlay: "",
        appStore: "https://apps.apple.com/us/app/quick-wash-employee/id6504169031"
    },
    {
        title: "Hawdaj Kids",
        subtitle: "Educational & Fun Kids App",
        image: "image_project/hawadaj_kids/1.jpeg",
        images: ["image_project/hawadaj_kids/1.jpeg", "image_project/hawadaj_kids/2.jpeg", "image_project/hawadaj_kids/3.jpeg", "image_project/hawadaj_kids/4.jpeg", "image_project/hawadaj_kids/5.jpeg", "image_project/hawadaj_kids/6.jpeg"],
        description: "A safe educational and entertaining app for kids designed to develop skills through interactive and fun activities while protecting children from online risks.",
        features: ["ألعاب تعليمية تفاعلية", "نظام مكافآت لتحفيز الطفل", "رقابة أبوية متقدمة", "محتوى متنوع وهادف"],
        technologies: ["Flutter", "SQLite (Offline support)", "Audio Player", "Animations"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj.kids&pcampaignid=web_share",
        appStore: "https://apps.apple.com/us/app/hawdaj-kids/id6757672211"
    },
    {
        title: "Siwaan | سيوان",
        subtitle: "Multi-Service Community Platform",
        image: "image_project/siwaan/1.jpeg",
        images: ["image_project/siwaan/1.jpeg", "image_project/siwaan/2.jpeg", "image_project/siwaan/3.jpeg", "image_project/siwaan/4.jpeg", "image_project/siwaan/5.jpeg", "image_project/siwaan/6.jpeg"],
        description: "A comprehensive community platform designed to connect residents and provide essential services. Features a marketplace for grocery and food delivery from local vendors, golf cart transportation services for easy neighborhood mobility, and professional repair services for home maintenance needs. Users can interact through integrated chat and messaging, browse local news and ads, view community galleries, participate in forums, and book various services. Includes secure user wallet payments, community complaint management system, and instant notifications. Siwaan aims to improve community living standards by bringing all essential services and social interactions into one easy-to-use mobile app.",
        features: ["نظام محفظة رقمية للشحن والدفع", "طلب خدمات الصيانة المنزلية", "نظام تتبع الطلبات المباشر", "إدارة الشكاوى والاقتراحات"],
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "REST API", 'Clean Architecture', 'Dio', 'BLoC State Management', 'Team Collaboration'],
        googlePlay: "https://play.google.com/store/apps/details?id=com.siwaan.mobile",
        appStore: "https://apps.apple.com/eg/app/siwaan/id6749846894"
    },
    {
        title: "Mostaqer | مستقر",
        subtitle: "Telemedicine & Consultations Platform",
        image: "image_project/avc/1.jpeg",
        images: ["image_project/avc/1.jpeg", "image_project/avc/2.jpeg", "image_project/avc/3.jpeg", "image_project/avc/4.jpeg", "image_project/avc/5.jpeg"],
        description: "An integrated service platform that allows users to easily book medical consultations and healthcare services through a smart and secure app supporting video and voice conversations.",
        features: ["حجز مواعيد الاستشارات الطبية", "محادثات فيديو وصوت مباشرة", "إدارة الوصفات الطبية الرقمية", "نظام تقييم الأطباء والخدمات"],
        technologies: ["Flutter", "Agora SDK", "Firebase Cloud Messaging", "Websockets", "Cubit"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.mostaqer.app",
        appStore: "https://apps.apple.com/us/app/mostaqer/id6744868537"
    },
    {
        title: "Hawdaj ",
        subtitle: "Privacy-Focused Data Platform",
        image: "project1.png",
        images: ["image_project/hawdaj_image/1.jpeg", "image_project/hawdaj_image/2.jpeg", "image_project/hawdaj_image/3.jpeg", "image_project/hawdaj_image/4.jpeg", "image_project/hawdaj_image/5.jpeg"],
        description: "An advanced platform focused on data privacy and security with commitment to the highest global protection standards and sensitive data encryption.",
        features: ["تشفير البيانات من الطرفين", "إدارة صلاحيات الوصول", "نظام تنبيهات أمني متقدم", "تخزين سحابي محمي"],
        technologies: ["Flutter", "Encryption Algorithms", "Secure Storage", "Firebase Auth"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj",
        appStore: "https://apps.apple.com/us/app/hawdaj/id6752390026"
    },
    {
        title: "Torido ",
        subtitle: "Light Transport Logistics App",
        image: "project_torido.png",
        images: ["project_torido.png", "image_project/torido/Screenshot_1770725122.png", "image_project/torido/Screenshot_1770725124.png", "image_project/torido/Screenshot_1770725136.png", "image_project/torido/Screenshot_1770725140.png", "image_project/torido/Screenshot_1770725150.png"],
        description: "An app that connects customers with light transportation service providers to get the best rates easily and ensure shipments arrive quickly.",
        features: ["نظام تقديم عروض الأسعار", "تحديد الموقع الدقيق للتحميل والتفريغ", "دردشة داخل التطبيق", "سجل كامل للرحلات"],
        technologies: ["Flutter", "Google Maps Platform", "Firebase Realtime Database", "Bloc"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.torido.app",
        appStore: "https://apps.apple.com/eg/app/torido-توريدو/id1554338202"
    },

    {
        title: "Al-Hawary ",
        subtitle: "Task & Activity Management",
        image: "image_project/hawary/Screenshot_1770723299.png",
        images: ["image_project/hawary/Screenshot_1770723299.png", "image_project/hawary/Screenshot_1770724157.png", "image_project/hawary/Screenshot_1770724162.png", "image_project/hawary/Screenshot_1770724167.png", "image_project/hawary/Screenshot_1770724171.png", "image_project/hawary/Screenshot_1770724175.png"],
        description: "An integrated platform for managing field activities and services with focus on efficiency, ease of use, and team management.",
        features: ["إسناد المهام للموظفين", "تتبع المواقع الجغرافية", "تقارير إنجاز دورية", "نظام تنبيهات فورية"],
        technologies: ["Flutter", "Dart", "Firebase Messaging", "Geolocator", "Dio"],
        googlePlay: "",
        appStore: ""
    },
    {
        title: "Family ",
        subtitle: "Family Communication & Planning",
        image: "image_project/family/Screenshot_1770726456.png",
        images: ["image_project/family/Screenshot_1770726456.png", "image_project/family/Screenshot_1770726459.png", "image_project/family/Screenshot_1770726482.png", "image_project/family/Screenshot_1770726494.png", "image_project/family/Screenshot_1770726502.png", "image_project/family/Screenshot_1770726513.png"],
        description: "An app designed to enhance family communication and manage shared tasks and occasions with ease and complete privacy.",
        features: ["تقويم عائلي مشترك", "قوائم مهام وطلبات منزلية", "مشاركة الصور والذكريات", "تحديد مواقع أفراد العائلة"],
        technologies: ["Flutter", "Firebase Auth", "Cloud Firestore", "Google Maps"],
        googlePlay: "",
        appStore: ""
    },
    {
        title: "AVC",
        subtitle: "Operations & Service Solutions",
        image: "image_project/avc/1.jpeg",
        images: ["image_project/avc/1.jpeg", "image_project/avc/2.jpeg", "image_project/avc/3.jpeg", "image_project/avc/4.jpeg", "image_project/avc/5.jpeg", "image_project/avc/6.jpeg"],
        description: "Advanced technical solutions for managing operations and delivering high-quality professional services aimed at simplifying administrative procedures.",
        features: ["إدارة سير العمل الرقمي", "تحليل البيانات والتقارير", "دعم فني مباشر", "إدارة المستخدمين والصلاحيات"],
        technologies: ["Flutter", "REST API", "JSON Serialization", "Cubit"],
        googlePlay: "",
        appStore: ""
    },

];

// const projects = [
//     {
//         title: "Quick Wash ",
//         subtitle: "On-Demand Laundry Service",
//         image: "image_project/Quick/logo.png",
//         images: ["image_project/Quick/logo.png", "image_project/Quick/2.jpeg", "image_project/Quick/3.jpeg", "image_project/Quick/4.jpeg", "image_project/Quick/5.jpeg"],
//         description: "تطبيق يسهّل طلب خدمات الغسيل والاستلام والتوصيل بسرعة وكفاءة عبر تجربة مستخدم بسيطة تضمن راحة العميل وجودة الخدمة.",
//         features: ["جدولة مواعيد استلام الغسيل", "تتبع حالة الطلب لحظة بلحظة", "دفع إلكتروني آمن", "نظام اشتراكات شهرية"],
//         technologies: ["Flutter", "Node.js (Backend)", "Payment Gateway Integration", "Maps SDK"],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.quick.wash.user",
//         appStore: "https://apps.apple.com/us/app/الغسيل-السريع/id6504152286"
//     },
//     {
//         title: "Hawdaj Kids",
//         subtitle: "Educational & Fun Kids App",
//         image: "image_project/hawadaj_kids/1.jpeg",
//         images: ["image_project/hawadaj_kids/1.jpeg", "image_project/hawadaj_kids/2.jpeg", "image_project/hawadaj_kids/3.jpeg", "image_project/hawadaj_kids/4.jpeg", "image_project/hawadaj_kids/5.jpeg", "image_project/hawadaj_kids/6.jpeg"],
//         description: "تطبيق تعليمي وترفيهي آمن للأطفال يهدف إلى تنمية المهارات بأسلوب تفاعلي وممتع بعيداً عن المخاطر الإلكترونية.",
//         features: ["ألعاب تعليمية تفاعلية", "نظام مكافآت لتحفيز الطفل", "رقابة أبوية متقدمة", "محتوى متنوع وهادف"],
//         technologies: ["Flutter", "SQLite (Offline support)", "Audio Player", "Animations"],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj.kids&pcampaignid=web_share",
//         appStore: "https://apps.apple.com/us/app/hawdaj-kids/id6757672211"
//     },
//     {
//         title: "Siwaan | سيوان",
//         subtitle: "Multi-Service Community Platform",
//         image: "image_project/siwaan/1.jpeg",
//         images: ["image_project/siwaan/1.jpeg", "image_project/siwaan/2.jpeg", "image_project/siwaan/3.jpeg", "image_project/siwaan/4.jpeg", "image_project/siwaan/5.jpeg", "image_project/siwaan/6.jpeg"],
//         description: 'سيوان منصة مجتمعية شاملة مصممة لربط السكان وتوفير الخدمات الأساسية. يتميز التطبيق بسوق لتوصيل المواد الغذائية والبقالة من البائعين المحليين، وخدمات نقل عربات الجولف لتسهيل التنقل داخل المناطق السكنية، وخدمات إصلاح احترافية لتلبية احتياجات صيانة المنازل. يمكن للمستخدمين التفاعل مع مجتمعهم من خلال ميزات الدردشة والمراسلة المتكاملة، وتصفح الأخبار والإعلانات المحلية، ومشاهدة معارض المجتمع، والمشاركة في المنتديات، وحجز خدمات متنوعة. تتضمن المنصة محفظة المستخدم للدفع الآمن، ونظام إدارة الشكاوى لقضايا المجتمع، وإشعارات فورية للبقاء على اطلاع دائم. يهدف سيوان إلى تحسين مستوى المعيشة في المجتمع من خلال جمع جميع الخدمات الأساسية والتفاعلات الاجتماعية في تطبيق جوال واحد سهل الاستخدام، مما يُسهّل على السكان التواصل مع الشركات المحلية والجيران وإدارة احتياجاتهم اليومية بكفاءة.',
//         features: ["نظام محفظة رقمية للشحن والدفع", "طلب خدمات الصيانة المنزلية", "نظام تتبع الطلبات المباشر", "إدارة الشكاوى والاقتراحات"],
//         technologies: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "REST API", 'Clean Architecture', 'Dio', 'BLoC State Management', 'Team Collaboration'],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.siwaan.mobile",
//         appStore: "https://apps.apple.com/eg/app/siwaan/id6749846894"
//     },
//     {
//         title: "Mostaqer | مستقر",
//         subtitle: "Telemedicine & Consultations Platform",
//         image: "image_project/avc/1.jpeg",
//         images: ["image_project/avc/1.jpeg", "image_project/avc/2.jpeg", "image_project/avc/3.jpeg", "image_project/avc/4.jpeg", "image_project/avc/5.jpeg"],
//         description: "منصة خدمات متكاملة تتيح للمستخدمين حجز الاستشارات والخدمات الطبية بسهولة عبر تطبيق ذكي وآمن يدعم المحادثات المرئية والصوتية.",
//         features: ["حجز مواعيد الاستشارات الطبية", "محادثات فيديو وصوت مباشرة", "إدارة الوصفات الطبية الرقمية", "نظام تقييم الأطباء والخدمات"],
//         technologies: ["Flutter", "Agora SDK", "Firebase Cloud Messaging", "Websockets", "Cubit"],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.mostaqer.app",
//         appStore: "https://apps.apple.com/us/app/mostaqer/id6744868537"
//     },
//     {
//         title: "Hawdaj ",
//         subtitle: "Privacy-Focused Data Platform",
//         image: "project1.png",
//         images: ["image_project/hawdaj_image/1.jpeg", "image_project/hawdaj_image/2.jpeg", "image_project/hawdaj_image/3.jpeg", "image_project/hawdaj_image/4.jpeg", "image_project/hawdaj_image/5.jpeg"],
//         description: "منصة متقدمة تركز على خصوصية وأمان البيانات مع الالتزام بأعلى معايير الحماية العالمية وتشفير البيانات الحساسة.",
//         features: ["تشفير البيانات من الطرفين", "إدارة صلاحيات الوصول", "نظام تنبيهات أمني متقدم", "تخزين سحابي محمي"],
//         technologies: ["Flutter", "Encryption Algorithms", "Secure Storage", "Firebase Auth"],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj",
//         appStore: "https://apps.apple.com/us/app/hawdaj/id6752390026"
//     },
//     {
//         title: "Torido ",
//         subtitle: "Light Transport Logistics App",
//         image: "project_torido.png",
//         images: ["project_torido.png", "image_project/torido/Screenshot_1770725122.png", "image_project/torido/Screenshot_1770725124.png", "image_project/torido/Screenshot_1770725136.png", "image_project/torido/Screenshot_1770725140.png", "image_project/torido/Screenshot_1770725150.png"],
//         description: "تطبيق يربط العملاء بمقدمي خدمات النقل الخفيف للحصول على أفضل تسعيرة بسهولة وضمان وصول الشحنات في أسرع وقت.",
//         features: ["نظام تقديم عروض الأسعار", "تحديد الموقع الدقيق للتحميل والتفريغ", "دردشة داخل التطبيق", "سجل كامل للرحلات"],
//         technologies: ["Flutter", "Google Maps Platform", "Firebase Realtime Database", "Bloc"],
//         googlePlay: "https://play.google.com/store/apps/details?id=com.torido.app",
//         appStore: "https://apps.apple.com/eg/app/torido-توريدو/id1554338202"
//     },

//     {
//         title: "Al-Hawary ",
//         subtitle: "Task & Activity Management",
//         image: "image_project/hawary/Screenshot_1770723299.png",
//         images: ["image_project/hawary/Screenshot_1770723299.png", "image_project/hawary/Screenshot_1770724157.png", "image_project/hawary/Screenshot_1770724162.png", "image_project/hawary/Screenshot_1770724167.png", "image_project/hawary/Screenshot_1770724171.png", "image_project/hawary/Screenshot_1770724175.png"],
//         description: "منصة متكاملة لإدارة الأنشطة والخدمات الميدانية مع التركيز على الكفاءة وسهولة الاستخدام وإدارة فرق العمل.",
//         features: ["إسناد المهام للموظفين", "تتبع المواقع الجغرافية", "تقارير إنجاز دورية", "نظام تنبيهات فورية"],
//         technologies: ["Flutter", "Dart", "Firebase Messaging", "Geolocator", "Dio"],
//         googlePlay: "",
//         appStore: ""
//     },
//     {
//         title: "Family ",
//         subtitle: "Family Communication & Planning",
//         image: "image_project/family/Screenshot_1770726456.png",
//         images: ["image_project/family/Screenshot_1770726456.png", "image_project/family/Screenshot_1770726459.png", "image_project/family/Screenshot_1770726482.png", "image_project/family/Screenshot_1770726494.png", "image_project/family/Screenshot_1770726502.png", "image_project/family/Screenshot_1770726513.png"],
//         description: "تطبيق مصمم لتعزيز التواصل العائلي وإدارة المهام والمناسبات المشتركة بكل سهولة وخصوصية تامة.",
//         features: ["تقويم عائلي مشترك", "قوائم مهام وطلبات منزلية", "مشاركة الصور والذكريات", "تحديد مواقع أفراد العائلة"],
//         technologies: ["Flutter", "Firebase Auth", "Cloud Firestore", "Google Maps"],
//         googlePlay: "",
//         appStore: ""
//     },
//     {
//         title: "AVC",
//         subtitle: "Operations & Service Solutions",
//         image: "image_project/avc/1.jpeg",
//         images: ["image_project/avc/1.jpeg", "image_project/avc/2.jpeg", "image_project/avc/3.jpeg", "image_project/avc/4.jpeg", "image_project/avc/5.jpeg", "image_project/avc/6.jpeg"],
//         description: "حلول تقنية متقدمة لإدارة العمليات وتقديم الخدمات بجودة عالية واحترافية تهدف لتبسيط الإجراءات الإدارية.",
//         features: ["إدارة سير العمل الرقمي", "تحليل البيانات والتقارير", "دعم فني مباشر", "إدارة المستخدمين والصلاحيات"],
//         technologies: ["Flutter", "REST API", "JSON Serialization", "Cubit"],
//         googlePlay: "",
//         appStore: ""
//     },

// ];

const openModal = (project) => {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-bg-immersive" style="background-image: url('${project.image}')"></div>
        <div class="modal-content">
            <nav class="modal-nav">
                <button class="close-modal" aria-label="Back to Portfolio">
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>Back to Portfolio</span>
                </button>
            </nav>

            <div class="modal-scroll-area">
                <header class="modal-hero">
                    <div class="project-cat-badge">${project.subtitle.split(' ')[0]} Engineering</div>
                    <h2 class="project-display-title">${project.title}</h2>
                    <p class="project-brief-summary">${project.subtitle} — A high-performance enterprise solution built for 2026.</p>
                    
                    <div class="hero-cta-group">
                        ${project.googlePlay ? `
                            <a href="${project.googlePlay}" target="_blank" class="luxury-btn btn-playstore">
                                <i class="fa-brands fa-google-play"></i> <span>Play Store</span>
                            </a>
                        ` : ''}
                        ${project.appStore ? `
                            <a href="${project.appStore}" target="_blank" class="luxury-btn btn-appstore">
                                <i class="fa-brands fa-apple"></i> <span>App Store</span>
                            </a>
                        ` : ''}
                    </div>
                </header>

                <section class="premium-gallery">
                    <div class="main-viewer-frame">
                        <img src="${project.image}" alt="Primary Display" id="modal-main-img">
                    </div>
                    <div class="thumb-navigator">
                        ${project.images.slice(0, 6).map((img, i) => `
                            <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchModalImage(this, '${img}')">
                                <img src="${img}" alt="Angle ${i + 1}">
                            </div>
                        `).join('')}
                    </div>
                </section>

                <div class="modal-showcase-grid">
                    <div class="showcase-content">
                        <article class="showcase-block">
                            <h4 class="block-title">Vision & Strategy</h4>
                            <p dir="auto" class="showcase-text">${project.description}</p>
                        </article>

                        <article class="showcase-block">
                            <h4 class="block-title">Core Architecture Features</h4>
                            <div class="feature-grid-v2">
                                ${(project.features || []).map(f => `
                                    <div class="feature-pill-v2">
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>${f}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </article>
                    </div>

                    <aside class="showcase-sidebar">
                        <div class="sidebar-card">
                            <h4 class="block-title">Stack Architecture</h4>
                            <div class="stack-tags">
                                ${(project.technologies || []).map(t => `<span class="stack-tag">${t}</span>`).join('')}
                            </div>
                        </div>

                        <div class="sidebar-card">
                            <h4 class="block-title">Project Insights</h4>
                            <ul class="specs-list">
                                <li><span>Lead Engineer</span> <strong>Ahmed Mohamed</strong></li>
                                <li><span>Platform</span> <strong>Hybrid Mobile</strong></li>
                                <li><span>Status</span> <strong>Production Ready</strong></li>
                                <li><span>Industry</span> <strong>${project.subtitle.split(' ')[0]} Technology</strong></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);

    window.switchModalImage = (container, src) => {
        const mainImg = document.getElementById('modal-main-img');
        mainImg.style.opacity = '0';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1)';
        }, 300);
        document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        container.classList.add('active');
    };

    modal.querySelector('.close-modal').onclick = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 600);
    };
};

const renderProjects = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card scroll-reveal" onclick="window.projectClick(${index})">
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-card-type">${project.subtitle.split(' ')[0]} App</div>
                <div class="project-card-tags">
                    ${(project.technologies || []).slice(0, 3).map(tech => `<span class="tag-chip">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p dir="auto" class="project-desc">${project.description}</p>
                <div class="project-card-footer">
                    <div class="project-stores">
                        ${project.googlePlay ? `<i class="fa-brands fa-google-play"></i>` : ''}
                        ${project.appStore ? `<i class="fa-brands fa-apple"></i>` : ''}
                    </div>
                    <span class="learn-more">Details <i class="fa-solid fa-chevron-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');

    // Global click handler
    window.projectClick = (index) => {
        openModal(projects[index]);
    };
};

// Initialize everything on load
window.addEventListener('load', () => {
    renderProjects();
    setTimeout(revealOnScroll, 100);
});
