// ===== بيانات المنتجات =====
const products = [
    {
        id: 1,
        name: "مقبض باب خشبي فاخر",
        description: "مقبض عالي الجودة للأبواب الخشبية",
        price: 2500,
        category: "masak",
        image: "images/products/masak1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 2,
        name: "مقبض باب معدني",
        description: "مقبض معدني مقاوم للصدأ",
        price: 1800,
        category: "masak",
        image: "images/products/masak2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 3,
        name: "مقبض درج كلاسيك",
        description: "مقبض أنيق للأدراج والدواليب",
        price: 1200,
        category: "masak",
        image: "images/products/masak3.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 4,
        name: "مفصلة باب خشبي فاخرة",
        description: "مفصلة عالية الجودة للأبواب الخشبية",
        price: 800,
        category: "mafsal",
        image: "images/products/mafsal1.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 5,
        name: "مفصلة معدنية ثقيلة",
        description: "مفصلة قوية تحمل الأبواب الثقيلة",
        price: 1500,
        category: "mafsal",
        image: "images/products/mafsal2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 6,
        name: "مفصلة ذاتية الإغلاق",
        description: "مفصلة ذاتية الإغلاق للأبواب",
        price: 2000,
        category: "mafsal",
        image: "images/products/mafsal3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 7,
        name: "قفل باب أمان",
        description: "قفل أمان عالي الجودة",
        price: 3500,
        category: "lock",
        image: "images/products/lock1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 8,
        name: "قفل درج صغير",
        description: "قفل مخصص للأدراج والدواليب",
        price: 900,
        category: "lock",
        image: "images/products/lock2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 9,
        name: "قفل إلكتروني",
        description: "قفل إلكتروني حديث بالبصمة",
        price: 15000,
        category: "lock",
        image: "images/products/lock3.jpg",
        isNew: true,
        isFavorite: true
    },
    {
        id: 10,
        name: "مزلاج باب",
        description: "مزلاج أمان إضافي للأبواب",
        price: 600,
        category: "other",
        image: "images/products/other1.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 11,
        name: "ستاند باب",
        description: "ستاند لمنع إغلاق الباب",
        price: 400,
        category: "other",
        image: "images/products/other2.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 12,
        name: "نظارة باب",
        description: "نظارة للأبواب الخارجية",
        price: 1200,
        category: "other",
        image: "images/products/other3.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 13,
        name: "مقبض باب زجاجي",
        description: "مقبض مخصص للأبواب الزجاجية",
        price: 3000,
        category: "masak",
        image: "images/products/masak4.jpg",
        isNew: true,
        isFavorite: false
    },
    {
        id: 14,
        name: "مفصلة زاوية",
        description: "مفصلة زاوية للأبواب الثقيلة",
        price: 2200,
        category: "mafsal",
        image: "images/products/mafsal4.jpg",
        isNew: false,
        isFavorite: false
    },
    {
        id: 15,
        name: "قفل خزنة",
        description: "قفل أمان للخزنات والصناديق",
        price: 2500,
        category: "lock",
        image: "images/products/lock4.jpg",
        isNew: false,
        isFavorite: true
    },
    {
        id: 16,
        name: "سلسلة باب",
        description: "سلسلة أمان للأبواب",
        price: 500,
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
});

// ===== عرض المنتجات المميزة (الصفحة الرئيسية) =====
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = products.filter(p => p.isNew || p.isFavorite).slice(0, 4);
    
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
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
    document.getElementById('productsCount').textContent = filtered.length;
    
    // الترقيم
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const paginated = filtered.slice(start, start + productsPerPage);
    
    // عرض المنتجات
    if (paginated.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1;">
                <i class="fas fa-box-open"></i>
                <h3>لا توجد منتجات</h3>
                <p>جرب البحث بكلمات مختلفة</p>
            </div>
        `;
    } else {
        container.innerHTML = paginated.map(product => createProductCard(product)).join('');
    }
    
    // تحديث الترقيم
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages || 1;
}

// ===== إنشاء بطاقة المنتج =====
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/d4af37?text=${encodeURIComponent(product.name)}'">
                ${product.isNew ? '<div class="badge"><i class="fas fa-star"></i> جديد</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price.toLocaleString()} جنيه</div>
                <div class="product-actions">
                    <button class="action-btn ${product.isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="shareProduct(${product.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="order-now-btn" onclick="orderProduct(${product.id})">
                        اطلب الآن <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== ترتيب المنتجات =====
function sortProductsList(list, sortValue) {
    const sorted = [...list];
    switch(sortValue) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
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
    event.target.classList.add('active');
    
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
    }
}

// ===== مشاركة =====
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const text = `شاهد هذا المنتج: ${product.name} - ${product.price} جنيه`;
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: text,
                url: window.location.href
            });
        } else {
            // نسخ للحافظة
            navigator.clipboard.writeText(text).then(() => {
                alert('تم نسخ تفاصيل المنتج!');
            });
        }
    }
}

// ===== الطلب =====
function orderProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const message = `مرحباً، أريد طلب المنتج التالي:\n\n` +
                       `المنتج: ${product.name}\n` +
                       `السعر: ${product.price.toLocaleString()} جنيه\n` +
                       `الوصف: ${product.description}\n\n` +
                       `رقم المنتج: #${product.id}`;
        
        const whatsappUrl = `https://wa.me/249913678918?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // إضافة للسلة
        addToCart(product);
    }
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
    document.getElementById('cartCount').textContent = count;
}

function toggleCart() {
    if (cart.length === 0) {
        alert('السلة فارغة');
        return;
    }
    
    let message = 'محتويات السلة:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `${item.name} - ${item.price.toLocaleString()} جنيه\n`;
        total += item.price * item.quantity;
    });
    
    message += `\nالإجمالي: ${total.toLocaleString()} جنيه`;
    message += `\n\nهل تريد إتمام الطلب؟`;
    
    if (confirm(message)) {
        orderProduct(cart[0].id);
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
    document.getElementById('sidebar').classList.toggle('active');
}

// ===== واتساب =====
function openWhatsApp() {
    window.open('https://wa.me/249913678918', '_blank');
}

// ===== التمرير للمنتجات =====
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== تصفية حسب التصنيف (من الصفحة الرئيسية) =====
function filterByCategory(category) {
    window.location.href = `sind-store.html?category=${category}`;
}

// ===== قراءة بارامترات URL =====
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        currentFilter = category;
        // تحديث الزر النشط
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes(getCategoryName(category))) {
                btn.classList.add('active');
            }
        });
        renderProducts();
    }
});

function getCategoryName(cat) {
    const names = {
        'masak': 'مقابض',
        'mafsal': 'مفصلات',
        'lock': 'أقفال',
        'other': 'أخرى'
    };
    return names[cat] || '';
}

// ===== إغلاق القائمة عند النقر خارجها =====
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (sidebar && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});
