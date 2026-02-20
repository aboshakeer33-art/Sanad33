// ===== بيانات المنتجات (بدون أسعار) =====
const products = [
    {
        id: 1,
        name: "مقبض باب خشبي فاخر",
        description: "مقبض عالي الجودة للأبواب الخشبية بتصميم كلاسيكي أنيق",
        category: "masak",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مقبض+خشبي",
        isNew: true,
        isFavorite: false
    },
    {
        id: 2,
        name: "مقبض باب معدني عصري",
        description: "مقبض معدني مقاوم للصدأ بتصميم عصري",
        category: "masak",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مقبض+معدني",
        isNew: false,
        isFavorite: false
    },
    {
        id: 3,
        name: "مقبض درج كلاسيك",
        description: "مقبض أنيق للأدراج والدواليب بجودة عالية",
        category: "masak",
        image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مقبض+درج",
        isNew: false,
        isFavorite: true
    },
    {
        id: 4,
        name: "مفصلة باب خشبي فاخرة",
        description: "مفصلة عالية الجودة للأبواب الخشبية الثقيلة",
        category: "mafsal",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مفصلة",
        isNew: true,
        isFavorite: false
    },
    {
        id: 5,
        name: "مفصلة معدنية ثقيلة",
        description: "مفصلة قوية تحمل الأبواب الثقيلة بسهولة",
        category: "mafsal",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مفصلة+معدنية",
        isNew: false,
        isFavorite: false
    },
    {
        id: 6,
        name: "مفصلة ذاتية الإغلاق",
        description: "مفصلة ذاتية الإغلاق للأبواب مع خاصية التهدئة",
        category: "mafsal",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مفصلة+ذاتية",
        isNew: true,
        isFavorite: true
    },
    {
        id: 7,
        name: "قفل باب أمان",
        description: "قفل أمان عالي الجودة مع مفاتيح احتياطية",
        category: "lock",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=قفل+أمان",
        isNew: false,
        isFavorite: false
    },
    {
        id: 8,
        name: "قفل درج صغير",
        description: "قفل مخصص للأدراج والدواليب بمفتاح صغير",
        category: "lock",
        image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=قفل+درج",
        isNew: false,
        isFavorite: false
    },
    {
        id: 9,
        name: "قفل إلكتروني ذكي",
        description: "قفل إلكتروني حديث بالبصمة وكلمة المرور",
        category: "lock",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=قفل+ذكي",
        isNew: true,
        isFavorite: true
    },
    {
        id: 10,
        name: "مزلاج باب أمان",
        description: "مزلاج أمان إضافي للأبواب الداخلية والخارجية",
        category: "other",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مزلاج",
        isNew: false,
        isFavorite: false
    },
    {
        id: 11,
        name: "ستاند باب معدني",
        description: "ستاند لمنع إغلاق الباب بقوة الرياح",
        category: "other",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=ستاند",
        isNew: false,
        isFavorite: false
    },
    {
        id: 12,
        name: "نظارة باب عريضة",
        description: "نظارة للأبواب الخارجية بزاوية رؤية واسعة",
        category: "other",
        image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=نظارة",
        isNew: false,
        isFavorite: false
    },
    {
        id: 13,
        name: "مقبض باب زجاجي فاخر",
        description: "مقبض مخصص للأبواب الزجاجية بتصميم مميز",
        category: "masak",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مقبض+زجاجي",
        isNew: true,
        isFavorite: false
    },
    {
        id: 14,
        name: "مفصلة زاوية مخفية",
        description: "مفصلة زاوية مخفية للأبواب الثقيلة",
        category: "mafsal",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=مفصلة+مخفية",
        isNew: false,
        isFavorite: false
    },
    {
        id: 15,
        name: "قفل خزنة إلكتروني",
        description: "قفل أمان إلكتروني للخزنات والصناديق",
        category: "lock",
        image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=قفل+خزنة",
        isNew: false,
        isFavorite: true
    },
    {
        id: 16,
        name: "سلسلة باب أمان",
        description: "سلسلة أمان للأبواب مع قفل صغير",
        category: "other",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
        fallback: "https://via.placeholder.com/400x300/1a1a2e/d4af37?text=سلسلة",
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
    initImageHandlers();
});

// ===== معالجة الصور =====
function initImageHandlers() {
    // معالجة أخطاء الصور تلقائياً
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            const productId = e.target.closest('.product-card')?.dataset.id;
            if (productId) {
                const product = products.find(p => p.id == productId);
                if (product && product.fallback) {
                    e.target.src = product.fallback;
                }
            }
        }
    }, true);
}

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
    
    // تأخير بسيط عشان الأنيميشن
    setTimeout(() => {
        container.querySelectorAll('.product-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
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
        <div class="product-card" data-id="${product.id}" style="opacity: 0; transform: translateY(20px); transition: all 0.5s ease;">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onerror="this.src='${product.fallback}'"
                     loading="lazy">
                ${product.isNew ? '<div class="badge"><i class="fas fa-star"></i> جديد</div>' : ''}
                <div class="product-overlay">
                    <button class="quick-view" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-eye"></i> عرض التفاصيل
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-request">
                    <button class="action-btn ${product.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})" title="المفضلة">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="shareProduct(${product.id})" title="مشاركة">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="request-btn shine" onclick="requestPrice(${product.id})">
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
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onerror="this.src='${product.fallback}'">
            </div>
            <div class="modal-info">
                ${product.isNew ? '<span class="modal-badge"><i class="fas fa-star"></i> منتج جديد</span>' : ''}
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>
                <div class="modal-features">
                    <div class="feature-tag"><i class="fas fa-check-circle"></i> جودة عالية</div>
                    <div class="feature-tag"><i class="fas fa-check-circle"></i> ضمان سنة</div>
                    <div class="feature-tag"><i class="fas fa-check-circle"></i> توصيل سريع</div>
                    <div class="feature-tag"><i class="fas fa-check-circle"></i> تركيب مجاني</div>
                </div>
                <div class="modal-actions">
                    <button class="modal-cta" onclick="requestPrice(${product.id}); closeModal();">
                        <i class="fab fa-whatsapp"></i>
                        اطلب السعر الآن
                    </button>
                    <button class="modal-favorite ${product.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}); this.classList.toggle('active')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
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

// ===== طلب السعر =====
function requestPrice(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const message = `مرحباً سند ستور 👋

أرغب في الاستفسار عن سعر المنتج التالي:

🏷️ *المنتج:* ${product.name}
📝 *الوصف:* ${product.description}
🔢 *رقم المنتج:* #${product.id}

يرجى إرسال السعر والتوفر`;

        const whatsappUrl = `https://wa.me/249913678918?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // إضافة للسلة (للإحصاء)
        addToCart(product);
    }
}

// ===== ترتيب المنتجات =====
function sortProductsList(list, sortValue) {
    const sorted = [...list];
    switch(sortValue) {
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'popular':
            return sorted.sort((a, b) => (b.isFavorite - a.isFavorite));
        default:
            return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    }
}

// ===== البحث =====
function searchProducts() {
    currentPage = 1;
    renderProducts();
}

// ===== ترتيب =====
function sortProducts() {
    renderProducts();
}

// ===== تصفية =====
function filterProducts(category) {
    currentFilter = category;
    currentPage = 1;
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderProducts();
}

// ===== تغيير الصفحة =====
function changePage(direction) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===== المفضلة =====
function toggleFavorite(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.isFavorite = !product.isFavorite;
        renderProducts();
        renderFeaturedProducts();
        
        // تأثير بصري
        const btn = document.querySelector(`[data-id="${productId}"] .action-btn:first-child`);
        if (btn) {
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
        }
    }
}

// ===== مشاركة =====
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const text = `شاهد هذا المنتج من سند ستور: ${product.name}`;
        const url = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: text,
                url: url
            });
        } else {
            // نسخ للحافظة
            const fullText = `${text}\n${url}`;
            navigator.clipboard.writeText(fullText).then(() => {
                showNotification('تم نسخ رابط المنتج!');
            });
        }
    }
}

// ===== إشعار =====
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ===== السلة =====
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (!existing) {
        cart.push({ ...product, quantity: 1 });
        saveCart();
        updateCartCount();
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = count;
        cartCount.style.animation = 'none';
        setTimeout(() => cartCount.style.animation = 'bounce 0.5s', 10);
    }
}

function toggleCart() {
    if (cart.length === 0) {
        showNotification('السلة فارغة');
        return;
    }
    
    let message = '🛒 محتويات السلة:\n\n';
    cart.forEach(item => {
        message += `• ${item.name}\n`;
    });
    message += `\nهل تريد طلب أسعار هذه المنتجات؟`;
    
    if (confirm(message)) {
        const productIds = cart.map(item => item.id).join(',');
        requestPrice(cart[0].id);
    }
}

function saveCart() {
    localStorage.setItem('sindCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('sindCart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

// ===== القائمة الجانبية =====
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    
    // إغلاق عند النقر خارجها
    if (sidebar.classList.contains('active')) {
        setTimeout(() => {
            document.addEventListener('click', closeSidebarOutside);
        }, 100);
    }
}

function closeSidebarOutside(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        document.removeEventListener('click', closeSidebarOutside);
    }
}

// ===== واتساب =====
function openWhatsApp() {
    const message = 'مرحباً سند ستور، أرغب في الاستفسار عن المنتجات';
    window.open(`https://wa.me/249913678918?text=${encodeURIComponent(message)}`, '_blank');
}

// ===== التمرير للمنتجات =====
function scrollToProducts() {
    const products = document.getElementById('products');
    if (products) {
        products.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== تصفية حسب التصنيف =====
function filterByCategory(category) {
    window.location.href = `sind-store.html?category=${category}`;
}

// ===== قراءة بارامترات URL =====
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        currentFilter = category;
        renderProducts();
        
        // تحديث الزر النشط
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
    }
});

// ===== إغلاق النافذة بالـ ESC =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
