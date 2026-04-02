// Navbar Scroll Effect
const nav = document.querySelector('.navbar');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (nav) {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Reveal Animations on Scroll (Performance Optimized via IntersectionObserver)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('active');

            // Special handling for skills-group staggered cards
            if (el.classList.contains('skills-group')) {
                const cards = el.querySelectorAll('.skill-card');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.1}s`;
                    setTimeout(() => card.classList.add('active'), 50);
                });
            }
            // Stop observing once animated
            observer.unobserve(el);
        }
    });
}, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
});

const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal:not(.active), .scroll-reveal:not(.active)');
    elements.forEach(el => revealObserver.observe(el));
};

// Initialize once
revealOnScroll();

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
        googlePlay: "https://play.google.com/store/apps/details?id=com.quick.wash.emp",
        appStore: "https://apps.apple.com/us/app/quick-wash-employee/id6504169031"
    },
    {
        title: "Hawdaj Kids",
        subtitle: "Educational & Fun Kids App",
        image: "image_project/hawadaj_kids/logo.png",
        images: ["image_project/hawadaj_kids/1.jpeg", "image_project/hawadaj_kids/2.jpeg", "image_project/hawadaj_kids/3.jpeg", "image_project/hawadaj_kids/4.jpeg", "image_project/hawadaj_kids/5.jpeg", "image_project/hawadaj_kids/6.jpeg"],
        description: "A safe educational and entertaining app for kids designed to develop skills through interactive and fun activities while protecting children from online risks.",
        features: ["ألعاب تعليمية تفاعلية", "نظام مكافآت لتحفيز الطفل", "رقابة أبوية متقدمة", "محتوى متنوع وهادف"],
        technologies: ["Flutter", "SQLite (Offline support)", "Audio Player", "Animations"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj.kids&pcampaignid=web_share",
        appStore: "https://apps.apple.com/us/app/hawdaj-kids/id6757672211"
    },
    {
        title: "Hawdaj ",
        subtitle: "Privacy-Focused Data Platform",
        image: "image_project/hawdaj_image/Screenshot 2026-03-29 at 1.00.49 AM.png",
        images: ["image_project/hawdaj_image/1.jpeg", "image_project/hawdaj_image/2.jpeg", "image_project/hawdaj_image/3.jpeg", "image_project/hawdaj_image/4.jpeg", "image_project/hawdaj_image/5.jpeg"],
        description: "An advanced platform focused on data privacy and security with commitment to the highest global protection standards and sensitive data encryption.",
        features: ["تشفير البيانات من الطرفين", "إدارة صلاحيات الوصول", "نظام تنبيهات أمني متقدم", "تخزين سحابي محمي"],
        technologies: ["Flutter", "Encryption Algorithms", "Secure Storage", "Firebase Auth"],
        googlePlay: "https://play.google.com/store/apps/details?id=com.hawdaj",
        appStore: "https://apps.apple.com/us/app/hawdaj/id6752390026"
    },
    {
        title: "Goal Master", subtitle: "Multi-Service Community Platform",
        image: "image_project/goal_master/logo.png",
        images: ["image_project/goal_master/logo.png", "image_project/goal_master/Screenshot 2026-03-29 at 12.15.19 AM.png", "image_project/goal_master/Screenshot 2026-03-29 at 12.15.38 AM.png", "image_project/goal_master/Screenshot 2026-03-29 at 12.16.20 AM.png", "image_project/goal_master/Screenshot 2026-03-29 at 12.15.51 AM.png"],
        description: "Goal Master is an all-in-one community platform that makes local services easy and accessible. Book groceries, food delivery, golf cart rides, and home maintenance services with ease. Stay updated with real-time tracking, community news, forums, and instant notifications. Manage payments securely through the integrated digital wallet and handle complaints or suggestions efficiently. Goal Master simplifies daily life by bringing all essential community services into one user-friendly app.",
        features: ["نظام محفظة رقمية للشحن والدفع", "طلب خدمات الصيانة المنزلية", "نظام تتبع الطلبات المباشر", "إدارة الشكاوى والاقتراحات"],
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "REST API", 'Clean Architecture', 'Dio', 'BLoC State Management', 'Team Collaboration'],
        googlePlay: "https://play.google.com/store/apps/details?id=com.ayoub.goalmaster",
        appStore: "https://apps.apple.com/us/app/goalmaster-%D8%AC%D9%88%D9%84-%D9%85%D8%A7%D8%B3%D8%AA%D8%B1/id6744951483"
    },
    {
        title: "Goal Master Admin", subtitle: "Multi-Service Community Platform",
        image: "image_project/goal_master/logo_admin.png",
        images: ["image_project/goal_master/logo_admin.png",],
        description: "Goal Master is an all-in-one community platform that makes local services easy and accessible. Book groceries, food delivery, golf cart rides, and home maintenance services with ease. Stay updated with real-time tracking, community news, forums, and instant notifications. Manage payments securely through the integrated digital wallet and handle complaints or suggestions efficiently. Goal Master simplifies daily life by bringing all essential community services into one user-friendly app.",
        features: ["نظام محفظة رقمية للشحن والدفع", "طلب خدمات الصيانة المنزلية", "نظام تتبع الطلبات المباشر", "إدارة الشكاوى والاقتراحات"],
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "REST API", 'Clean Architecture', 'Dio', 'BLoC State Management', 'Team Collaboration'],
        googlePlay: '',
        appStore: "https://apps.apple.com/us/app/goalmasteradmin-%D9%85%D8%AF%D9%8A%D8%B1-%D9%85%D9%84%D8%B9%D8%A8/id6756220348",
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


const openModal = (project) => {
    const modal = document.createElement('div');
    modal.className = 'project-modal';

    const hasPlay = !!project.googlePlay;
    const hasApp = !!project.appStore;
    const isLive = hasPlay || hasApp;

    const featureIcons = ['fa-bolt', 'fa-shield-halved', 'fa-rocket', 'fa-chart-line', 'fa-bell', 'fa-lock', 'fa-globe', 'fa-star'];
    const currentIndex = projects.indexOf(project);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    modal.innerHTML = `
        <div class="modal-content">
            <!-- ═══ IMMERSIVE BG ═══ -->
            <div class="md-bg-glass" style="background-image: url('${project.image}')"></div>

            <!-- ═══ MINI HEADER ═══ -->
            <nav class="modal-nav">
                <div class="modal-nav-left">
                    <button class="close-modal" aria-label="Back">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back</span>
                    </button>
                    <div class="modal-status-pill ${isLive ? 'live' : 'internal'}">
                        <span class="status-dot"></span>
                        ${isLive ? 'Released' : 'Development'}
                    </div>
                </div>
                
                <div class="modal-nav-center">
                    <span class="modal-nav-title">${project.title}</span>
                </div>

                <div class="modal-nav-right">
                    <div class="nav-actions">
                        ${hasPlay ? `<a href="${project.googlePlay}" target="_blank" class="nav-action-btn" title="Flash Play"><i class="fa-brands fa-google-play"></i></a>` : ''}
                        ${hasApp ? `<a href="${project.appStore}" target="_blank" class="nav-action-btn" title="App Store"><i class="fa-brands fa-apple"></i></a>` : ''}
                        <button class="nav-action-btn share-btn" title="Share Project"><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>
            </nav>

            <div class="modal-scroll-area">
                <!-- ═══ HEADER SECTION ═══ -->
                <header class="md-header-v2">
                    <div class="md-header-container">
                        <div class="md-header-info">
                            <span class="md-category-tag">${project.subtitle}</span>
                            <h1 class="md-title-v2">${project.title}</h1>
                            <p class="md-tagline">${project.subtitle} solutions for modern users.</p>
                            
                            <div class="md-cta-row">
                                ${hasPlay ? `
                                <a href="${project.googlePlay}" target="_blank" class="cta-store-btn play">
                                    <i class="fa-brands fa-google-play"></i>
                                    <div class="btn-text">
                                        <small>Get it on</small>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>` : ''}
                                ${hasApp ? `
                                <a href="${project.appStore}" target="_blank" class="cta-store-btn apple">
                                    <i class="fa-brands fa-apple"></i>
                                    <div class="btn-text">
                                        <small>Download on</small>
                                        <strong>App Store</strong>
                                    </div>
                                </a>` : ''}
                                ${!isLive ? `
                                <div class="internal-badge-v2">
                                    <i class="fa-solid fa-building-shield"></i>
                                    <span>Enterprise Solution</span>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                </header>

                <div class="md-content-grid">
                    <!-- GALLERY COLUMN -->
                    <aside class="md-sidebar">
                        <div class="md-mockup-wrap">
                            <div class="phone-frame-v2">
                                <div class="phone-speaker"></div>
                                <div class="phone-screen-v2">
                                    <img src="${project.image}" alt="${project.title}" id="modal-main-img" class="main-display-img">
                                </div>
                            </div>
                        </div>

                        <div class="md-thumbnails-v2">
                            ${project.images.slice(0, 6).map((img, i) => `
                                <div class="thumb-card ${i === 0 ? 'active' : ''}" onclick="switchModalImage(this, '${img}')">
                                    <img src="${img}" alt="Preview ${i + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </aside>

                    <!-- INFO COLUMN -->
                    <main class="md-main-info">
                        <!-- OVERVIEW -->
                        <section class="info-block">
                            <h3 class="block-label"><i class="fa-solid fa-circle-info"></i> Project Overview</h3>
                            <p class="block-desc" dir="auto">${project.description}</p>
                        </section>

                        <!-- TECH STACK -->
                        <section class="info-block">
                            <h3 class="block-label"><i class="fa-solid fa-layer-group"></i> Core Technologies</h3>
                            <div class="tech-grid-v2">
                                ${(project.technologies || []).map(tech => `
                                    <div class="tech-card-v2">
                                        <div class="tech-icon-v2">
                                            <i class="fa-solid fa-microchip"></i>
                                        </div>
                                        <span class="tech-name-v2">${tech}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </section>

                        <!-- FEATURES -->
                        <section class="info-block">
                            <h3 class="block-label"><i class="fa-solid fa-wand-magic-sparkles"></i> Experience & Features</h3>
                            <div class="features-list-v2">
                                ${(project.features || []).map((f, i) => `
                                    <div class="feature-item-v2">
                                        <div class="feature-marker">${String(i + 1).padStart(2, '0')}</div>
                                        <div class="feature-content-v2">
                                            <i class="fa-solid ${featureIcons[i % featureIcons.length]}"></i>
                                            <p dir="auto">${f}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>

                        <!-- META DETAILS -->
                        <section class="info-block meta-section">
                            <div class="meta-grid-v2">
                                <div class="meta-item-v2">
                                    <span class="meta-label">Platforms</span>
                                    <span class="meta-value">iOS & Android</span>
                                </div>
                                <div class="meta-item-v2">
                                    <span class="meta-label">Architecture</span>
                                    <span class="meta-value">Clean / BLoC</span>
                                </div>
                                <div class="meta-item-v2">
                                    <span class="meta-label">Timeline</span>
                                    <span class="meta-value">2023 - 2024</span>
                                </div>
                                <div class="meta-item-v2">
                                    <span class="meta-label">Role</span>
                                    <span class="meta-value">Lead Developer</span>
                                </div>
                            </div>
                        </section>

                        <!-- NEXT PROJECT NAV -->
                        <div class="next-project-card" onclick="window.projectClick(${projects.indexOf(nextProject)})">
                            <div class="next-label">Next Project <i class="fa-solid fa-arrow-right"></i></div>
                            <div class="next-title">${nextProject.title}</div>
                            <div class="next-subtitle">${nextProject.subtitle}</div>
                        </div>
                    </main>
                </div>

                <footer class="md-footer-v2">
                    <p>&copy; 2026 Crafted with Passion by Ahmed Mohamed</p>
                </footer>
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
        mainImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'scale(1)';
        }, 260);
        document.querySelectorAll('.md-thumb').forEach(t => t.classList.remove('md-thumb--active'));
        container.classList.add('md-thumb--active');
    };

    modal.querySelector('.close-modal').onclick = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 600);
    };

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => modal.remove(), 600);
        }
    });
};

const renderProjects = (filter = 'all') => {
    const projectsGrid = document.querySelector('#projects-grid');
    const countEl = document.querySelector('#projects-count');
    if (!projectsGrid) return;

    const filtered = projects.filter(p => {
        if (filter === 'published') return p.googlePlay || p.appStore;
        if (filter === 'internal') return !p.googlePlay && !p.appStore;
        return true;
    });

    if (countEl) {
        countEl.textContent = `${filtered.length} Project${filtered.length !== 1 ? 's' : ''}`;
    }

    projectsGrid.innerHTML = filtered.map((project, index) => {
        const hasPlay = !!project.googlePlay;
        const hasApp = !!project.appStore;
        const originalIndex = projects.indexOf(project);

        return `
    <div class="project-card scroll-reveal" onclick="window.projectClick(${originalIndex})" style="animation-delay: ${index * 0.07}s">
        <div class="project-img-container">
            <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
            <div class="project-card-type">${project.subtitle.split(' ').slice(0, 2).join(' ')}</div>
            <div class="project-number">${String(index + 1).padStart(2, '0')}</div>
            <div class="project-img-stores">
                ${hasPlay ? `<a href="${project.googlePlay}" target="_blank" class="store-badge" onclick="event.stopPropagation()"><i class="fa-brands fa-google-play"></i> Play</a>` : ''}
                ${hasApp ? `<a href="${project.appStore}" target="_blank" class="store-badge" onclick="event.stopPropagation()"><i class="fa-brands fa-apple"></i> Store</a>` : ''}
                ${(!hasPlay && !hasApp) ? `<span class="store-badge" style="pointer-events:none"><i class="fa-solid fa-lock"></i> Internal</span>` : ''}
            </div>
        </div>
        <div class="project-info">
            <div class="project-info-header">
                <div>
                    <h3>${project.title}</h3>
                    <div class="project-subtitle-tag">${project.subtitle}</div>
                </div>
            </div>
            <p dir="auto" class="project-desc">${project.description}</p>
            <div class="project-tech-row">
                ${(project.technologies || []).slice(0, 4).map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
                ${project.technologies && project.technologies.length > 4 ? `<span class="tech-chip">+${project.technologies.length - 4}</span>` : ''}
            </div>
            <div class="project-card-footer">
                <div class="project-stores">
                    ${hasPlay ? `<i class="fa-brands fa-google-play" title="Google Play"></i>` : ''}
                    ${hasApp ? `<i class="fa-brands fa-apple" title="App Store"></i>` : ''}
                </div>
                <span class="learn-more">View Details <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    </div>
    `;
    }).join('');

    // Re-trigger scroll reveal for newly added cards
    setTimeout(revealOnScroll, 50);

    // Global click handler
    window.projectClick = (index) => {
        openModal(projects[index]);
    };
};

// Filter buttons logic
const initFilters = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            const projectsGrid = document.querySelector('#projects-grid');
            if (projectsGrid) {
                projectsGrid.style.opacity = '0';
                projectsGrid.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    renderProjects(filter);
                    projectsGrid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    projectsGrid.style.opacity = '1';
                    projectsGrid.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    });
};

// Initialize everything on load
window.addEventListener('load', () => {
    renderProjects();
    initFilters();
    setTimeout(revealOnScroll, 100);
});

