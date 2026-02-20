// ===== بيانات المنتجات =====
const products = [
    { id: 1, name: "مقبض باب خشبي فاخر", description: "مقبض عالي الجودة للأبواب الخشبية", category: "masak", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", isNew: true, isFavorite: false },
    { id: 2, name: "مقبض باب معدني عصري", description: "مقبض معدني مقاوم للصدأ", category: "masak", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", isNew: false, isFavorite: false },
    { id: 3, name: "مقبض درج كلاسيك", description: "مقبض أنيق للأدراج والدواليب", category: "masak", image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400", isNew: false, isFavorite: true },
    { id: 4, name: "مفصلة باب خشبي فاخرة", description: "مفصلة عالية الجودة للأبواب", category: "mafsal", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400", isNew: true, isFavorite: false },
    { id: 5, name: "مفصلة معدنية ثقيلة", description: "مفصلة قوية للأبواب الثقيلة", category: "mafsal", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", isNew: false, isFavorite: false },
    { id: 6, name: "مفصلة ذاتية الإغلاق", description: "مفصلة ذاتية الإغلاق للأبواب", category: "mafsal", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", isNew: true, isFavorite: true },
    { id: 7, name: "قفل باب أمان", description: "قفل أمان عالي الجودة", category: "lock", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", isNew: false, isFavorite: false },
    { id: 8, name: "قفل درج صغير", description: "قفل مخصص للأدراج", category: "lock", image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400", isNew: false, isFavorite: false },
    { id: 9, name: "قفل إلكتروني ذكي", description: "قفل إلكتروني بالبصمة", category: "lock", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", isNew: true, isFavorite: true },
    { id: 10, name: "مزلاج باب أمان", description: "مزلاج أمان إضافي", category: "other", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400", isNew: false, isFavorite: false },
    { id: 11, name: "ستاند باب معدني", description: "ستاند لمنع إغلاق الباب", category: "other", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", isNew: false, isFavorite: false },
    { id: 12, name: "نظارة باب عريضة", description: "نظارة للأبواب الخارجية", category: "other", image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400", isNew: false, isFavorite: false },
    { id: 13, name: "مقبض باب زجاجي فاخر", description: "مقبض مخصص للأبواب الزجاجية", category: "masak", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", isNew: true, isFavorite: false },
    { id: 14, name: "مفصلة زاوية مخفية", description: "مفصلة مخفية للأبواب", category: "mafsal", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", isNew: false, isFavorite: false },
    { id: 15, name: "قفل خزنة إلكتروني", description: "قفل أمان للخزنات", category: "lock", image: "https://images.unsplash.com/photo-1558618047-f4b511d0e435?w=400", isNew: false, isFavorite: true },
    { id: 16, name: "سلسلة باب أمان", description: "سلسلة أمان للأبواب", category: "other", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400", isNew: false, isFavorite: false }
];

let currentFilter = 'all';
let currentPage = 1;
const productsPerPage = 8;

// ===== عند تحميل الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ JavaScript شغال!');
    renderProducts();
    
    // تأثيرات الظهور
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 100);
        });
    }, 100);
});

// ===== عرض المنتجات =====
function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) {
        console.error('❌ ما لقيت productsGrid');
        return;
    }
    
    let filtered = products;
    
    // تصفية
    if (currentFilter !== 'all') {
        filtered = products.filter(p => p.category === currentFilter);
    }
    
    // تحديث العداد
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = filtered.length;
    
    // ترقيم
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const paginated = filtered.slice(start, start + productsPerPage);
    
    // عرض
    if (paginated.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-box-open" style="font-size: 4rem; color: #d4af37; margin-bottom: 20px;"></i>
                <h3>لا توجد منتجات</h3>
            </div>
        `;
    } else {
        container.innerHTML = paginated.map(product => `
            <div class="product-card" data-id="${product.id}" style="opacity: 0; transform: translateY(20px); transition: all 0.5s ease; background: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212,175,55,0.2);">
                <div class="product-image" style="position: relative; height: 220px; overflow: hidden;">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/d4af37?text=${encodeURIComponent(product.name)}'">
                    ${product.isNew ? '<div style="position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #d4af37, #b8941f); color: #0a0a0f; padding: 6px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold;"><i class="fas fa-star"></i> جديد</div>' : ''}
                </div>
                <div style="padding: 25px;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: #fff;">${product.name}</h3>
                    <p style="color: #888; font-size: 0.9rem; margin-bottom: 20px; line-height: 1.6;">${product.description}</p>
                    <button onclick="requestPrice(${product.id})" style="width: 100%; background: linear-gradient(135deg, #d4af37, #b8941f); color: #0a0a0f; border: none; padding: 14px; border-radius: 12px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <span>اطلب السعر</span>
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // تحديث الترقيم
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    if (currentPageEl) currentPageEl.textContent = currentPage;
    if (totalPagesEl) totalPagesEl.textContent = totalPages || 1;
}

// ===== طلب السعر =====
function requestPrice(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const message = `مرحباً سند ستور، أرغب في معرفة سعر: ${product.name}`;
        window.open(`https://wa.me/249913678918?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// ===== تصفية =====
function filterProducts(category) {
    currentFilter = category;
    currentPage = 1;
    renderProducts();
}

// ===== تغيير الصفحة =====
function changePage(direction) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderProducts();
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
