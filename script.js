// ===== بيانات المنتجات - صورك المحلية =====
const products = [
    {
        id: 1,
        name: "مقبض باب خشبي فاخر",
        description: "مقبض عالي الجودة للأبواب الخشبية",
        category: "masak",
        image: "images/products/masak1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 2,
        name: "مقبض باب معدني عصري",
        description: "مقبض معدني مقاوم للصدأ",
        category: "masak",
        image: "images/products/masak2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 3,
        name: "مقبض درج كلاسيك",
        description: "مقبض أنيق للأدراج والدواليب",
        category: "masak",
        image: "images/products/masak3.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 4,
        name: "مقبض باب زجاجي",
        description: "مقبض مخصص للأبواب الزجاجية",
        category: "masak",
        image: "images/products/masak4.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 5,
        name: "مفصلة باب خشبي فاخرة",
        description: "مفصلة عالية الجودة للأبواب",
        category: "mafsal",
        image: "images/products/mafsal1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 6,
        name: "مفصلة معدنية ثقيلة",
        description: "مفصلة قوية للأبواب الثقيلة",
        category: "mafsal",
        image: "images/products/mafsal2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 7,
        name: "مفصلة ذاتية الإغلاق",
        description: "مفصلة ذاتية الإغلاق للأبواب",
        category: "mafsal",
        image: "images/products/mafsal3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 8,
        name: "مفصلة زاوية مخفية",
        description: "مفصلة مخفية للأبواب",
        category: "mafsal",
        image: "images/products/mafsal4.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 9,
        name: "قفل باب أمان",
        description: "قفل أمان عالي الجودة",
        category: "lock",
        image: "images/products/lock1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 10,
        name: "قفل درج صغير",
        description: "قفل مخصص للأدراج",
        category: "lock",
        image: "images/products/lock2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 11,
        name: "قفل إلكتروني ذكي",
        description: "قفل إلكتروني بالبصمة",
        category: "lock",
        image: "images/products/lock3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 12,
        name: "قفل خزنة إلكتروني",
        description: "قفل أمان للخزنات",
        category: "lock",
        image: "images/products/lock4.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 13,
        name: "مزلاج باب أمان",
        description: "مزلاج أمان إضافي",
        category: "other",
        image: "images/products/other1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 14,
        name: "ستاند باب معدني",
        description: "ستاند لمنع إغلاق الباب",
        category: "other",
        image: "images/products/other2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 15,
        name: "نظارة باب عريضة",
        description: "نظارة للأبواب الخارجية",
        category: "other",
        image: "images/products/other3.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 16,
        name: "سلسلة باب أمان",
        description: "سلسلة أمان للأبواب",
        category: "other",
        image: "images/products/other4.jpg",
        isNew: false,
        isFavorite: false
    }
];

// ===== المتغيرات =====
let currentFilter = 'all';
let currentPage = 1;
const productsPerPage = 8;

// ===== عند التحميل =====
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initGallery();
});

// ===== عرض المنتجات =====
function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    let filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    
    // تحديث العداد
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = filtered.length;
    
    // ترقيم
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const paginated = filtered.slice(start, start + productsPerPage);
    
    if (paginated.length === 0) {
        container.innerHTML = '<div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px; color: #888;"><i class="fas fa-box-open" style="font-size: 4rem; color: #d4af37; margin-bottom: 20px; display: block;"></i>لا توجد منتجات</div>';
        return;
    }
    
    container.innerHTML = paginated.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image" onclick="openGallery(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="image-fallback" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%); align-items: center; justify-content: center; color: #d4af37; font-size: 1.2rem; text-align: center; padding: 20px;">
                    <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                    ${product.name}
                </div>
                ${product.isNew ? '<div class="badge"><i class="fas fa-star"></i> جديد</div>' : ''}
                <div class="image-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>اضغط للتكبير</span>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="request-btn" onclick="requestPrice(${product.id})">
                    <span>اطلب السعر</span>
                    <i class="fab fa-whatsapp"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // تحديث الترقيم
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    if (currentPageEl) currentPageEl.textContent = currentPage;
    if (totalPagesEl) totalPagesEl.textContent = totalPages || 1;
}

// ===== فتح معرض الصور =====
function openGallery(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const gallery = document.createElement('div');
    gallery.className = 'product-gallery';
    gallery.innerHTML = `
        <div class="gallery-overlay" onclick="closeGallery()"></div>
        <div class="gallery-content">
            <button class="gallery-close" onclick="closeGallery()">
                <i class="fas fa-times"></i>
            </button>
            <div class="gallery-main">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'color: #d4af37; font-size: 1.5rem;\\'><i class=\\'fas fa-image\\' style=\\'font-size: 4rem; margin-bottom: 20px;\\'></i><br>${product.name}</div>'">
            </div>
            <div class="gallery-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <button class="gallery-cta" onclick="requestPrice(${product.id})">
                    <i class="fab fa-whatsapp"></i>
                    اطلب السعر الآن
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(gallery);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => gallery.querySelector('.gallery-content').classList.add('active'), 10);
}

// ===== إغلاق المعرض =====
function closeGallery() {
    const gallery = document.querySelector('.product-gallery');
    if (gallery) {
        gallery.querySelector('.gallery-content').classList.remove('active');
        setTimeout(() => {
            gallery.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== طلب السعر =====
function requestPrice(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const message = `مرحباً سند ستور، أرغب في معرفة سعر: ${product.name}`;
        window.open(`https://wa.me/249913678918?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ===== التصفية =====
function filterProducts(category) {
    currentFilter = category;
    currentPage = 1;
    renderProducts();
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) btn.classList.add('active');
    });
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

// ===== البحث =====
function searchProducts() {
    currentPage = 1;
    renderProducts();
}

// ===== ترتيب =====
function sortProducts() {
    renderProducts();
}

// ===== واتساب =====
function openWhatsApp() {
    window.open('https://wa.me/249913678918', '_blank');
}

// ===== القائمة =====
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

// ===== إغلاق بالESC =====
function initGallery() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeGallery();
    });
}
