// ===== بيانات المنتجات (بدون أسعار) =====
const products = [
    {
        id: 1,
        name: "مقبض باب خشبي فاخر",
        description: "مقبض عالي الجودة للأبواب الخشبية بتصميم كلاسيكي أنيق",
        category: "masak",
        image: "images/products/masak1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 2,
        name: "مقبض باب معدني عصري",
        description: "مقبض معدني مقاوم للصدأ بتصميم عصري",
        category: "masak",
        image: "images/products/masak2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 3,
        name: "مقبض درج كلاسيك",
        description: "مقبض أنيق للأدراج والدواليب بجودة عالية",
        category: "masak",
        image: "images/products/masak3.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 4,
        name: "مفصلة باب خشبي فاخرة",
        description: "مفصلة عالية الجودة للأبواب الخشبية الثقيلة",
        category: "mafsal",
        image: "images/products/mafsal1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 5,
        name: "مفصلة معدنية ثقيلة",
        description: "مفصلة قوية تحمل الأبواب الثقيلة بسهولة",
        category: "mafsal",
        image: "images/products/mafsal2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 6,
        name: "مفصلة ذاتية الإغلاق",
        description: "مفصلة ذاتية الإغلاق للأبواب مع خاصية التهدئة",
        category: "mafsal",
        image: "images/products/mafsal3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 7,
        name: "قفل باب أمان",
        description: "قفل أمان عالي الجودة مع مفاتيح احتياطية",
        category: "lock",
        image: "images/products/lock1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 8,
        name: "قفل درج صغير",
        description: "قفل مخصص للأدراج والدواليب بمفتاح صغير",
        category: "lock",
        image: "images/products/lock2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 9,
        name: "قفل إلكتروني ذكي",
        description: "قفل إلكتروني حديث بالبصمة وكلمة المرور",
        category: "lock",
        image: "images/products/lock3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 10,
        name: "مزلاج باب أمان",
        description: "مزلاج أمان إضافي للأبواب الداخلية والخارجية",
        category: "other",
        image: "images/products/other1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 11,
        name: "ستاند باب معدني",
        description: "ستاند لمنع إغلاق الباب بقوة الرياح",
        category: "other",
        image: "images/products/other2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 12,
        name: "نظارة باب عريضة",
        description: "نظارة للأبواب الخارجية بزاوية رؤية واسعة",
        category: "other",
        image: "images/products/other3.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 13,
        name: "مقبض باب زجاجي فاخر",
        description: "مقبض مخصص للأبواب الزجاجية بتصميم مميز",
        category: "masak",
        image: "images/products/masak4.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 14,
        name: "مفصلة زاوية م concealed",
        description: "مفصلة زاوية مخفية للأبواب الثقيلة",
        category: "mafsal",
        image: "images/products/mafsal4.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 15,
        name: "قفل خزنة إلكتروني",
        description: "قفل أمان إلكتروني للخزنات والصناديق",
        category: "lock",
        image: "images/products/lock4.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 16,
        name: "سلسلة باب أمان",
        description: "سلسلة أمان للأبواب مع قفل صغير",
        category: "other",
        image: "images/products/other4.jpg",
        isNew: false,
        isFavorite: false
    }
];

// ===== المتغيرات العامة =====
let cart = [];
let currentFilter = 'all';
let currentPage = 1;
const productsPerPage = 8;

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    renderFeaturedProducts();
    renderProducts();
    updateCartCount();
    initParticles();
    initScrollEffects();
});

// ===== تأثير الجسيمات =====
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ===== تأثيرات التمرير =====
function initScrollEffects() {
    const header = document.querySelector('.luxury-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // تأثير الظهور التدريجي للعناصر
        const elements = document.querySelectorAll('.feature-card, .product-card, .category-card');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
}

// ===== عرض المنتجات المميزة =====
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = products.filter(p => p.isNew || p.isFavorite).slice(0, 4);
    
    container.innerHTML = featured.map(product => createLuxuryProductCard(product)).join('');
}

// ===== عرض المنتجات (صفحة المتجر) =====
function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    let filtered = products;
    
    // تصفية حسب التصنيف
    if (currentFilter !== 'all') {
        if (currentFilter === 'favorite') {
            filtered = products.filter(p => p.isFavorite);
        } else {
            filtered = products.filter(p => p.category === currentFilter);
        }
    }
    
    // البحث
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // الترتيب
    const sortValue = document.getElementById('sortSelect')?.value || 'name';
    filtered = sortProductsList(filtered, sortValue);
    
    // تحديث العداد
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = filtered.length;
    
    // الترقيم
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const paginated = filtered.slice(start, start + productsPerPage);
    
    // عرض المنتجات
    if (paginated.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <i class="fas fa-box-open"></i>
                <h3>لا توجد منتجات</h3>
                <p>جرب البحث بكلمات مختلفة أو تصفح التصنيفات</p>
            </div>
        `;
    } else {
        container.innerHTML = paginated.map(product => createLuxuryProductCard(product)).join('');
    }
    
    // تحديث الترقيم
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    if (currentPageEl) currentPageEl.textContent = currentPage;
    if (totalPagesEl) totalPagesEl.textContent = totalPages || 1;
}

// ===== إنشاء بطاقة المنتج الفاخرة (بدون سعر) =====
function createLuxuryProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/d4af37?text=${encodeURIComponent(product.name)}'">
                ${product.isNew ? '<div class="badge"><i class="fas fa-star"></i> جديد</div>' : ''}
                <div class="product-overlay">
                    <button class="quick-view" onclick="showProductDetails(${product.id})">
                        عرض التفاصيل
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-request">
                    <button class="action-btn ${product.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="shareProduct(${product.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="request-btn" onclick="requestPrice(${product.id})">
                        <span>اطلب السعر</span>
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== عرض تفاصيل المنتج =====
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // إنشاء نافذة منبثقة فاخرة
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content luxury-modal">
            <button class="modal-close" onclick="closeModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x400/1a1a2e/d4af37?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="modal-info">
                ${product.isNew ? '<span class="modal-badge">جديد</span>' : ''}
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>
                <div class="modal-features">
                    <div class="feature-tag"><i class="fas fa-check"></i> جودة عالية</div>
                    <div class="feature-tag"><i class="fas fa-check"></i> ضمان سنة</div>
                    <div class="feature-tag"><i class="fas fa-check"></i> توصيل سريع</div>
                </div>
                <button class="modal-cta" onclick="requestPrice(${product.id}); closeModal();">
                    <i class="fab fa-whatsapp"></i>
                    اطلب السعر الآن
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // أنيميشن الظهور
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('active');
    }, 10);
}

// ===== إغلاق النافذة المنبثقة =====
function closeModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.querySelector('.modal-content').classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== طلب السعر (بدل الطلب المباشر) =====
function requestPrice(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const message = `مرحباً سند ستور،\n\n` +
                       `أرغب في الاستفسار عن سعر المنتج التالي:\n\n` +
                       `🏷️ *المنتج:* ${product.name}\n` +
                      
