// ===== جميع أسماء الصور =====
const imageFiles = [
    // الدفعة الأولى
    "Screenshot_20260218-125024_Files من Google.png",
    "Screenshot_20260218-125048_Files من Google.png",
    "Screenshot_20260218-125102_Files من Google.png",
    "Screenshot_20260218-125122_Files من Google.png",
    "Screenshot_20260218-125135_Files من Google.png",
    "Screenshot_20260218-125145_Files من Google.png",
    "Screenshot_20260218-125157_Files من Google.png",
    "Screenshot_20260218-125210_Files من Google.png",
    "Screenshot_20260218-125215_Files من Google.png",
    "Screenshot_20260218-125227_Files من Google.png",
    "Screenshot_20260218-125241_Files من Google.png",
    "Screenshot_20260218-125256_Files من Google.png",
    "Screenshot_20260218-125307_Files من Google.png",
    "Screenshot_20260218-125318_Files من Google.png",
    "Screenshot_20260218-125335_Files من Google.png",
    "Screenshot_20260218-125345_Files من Google.png",
    "Screenshot_20260218-125358_Files من Google.png",
    "Screenshot_20260218-125418_Files من Google.png",
    "Screenshot_20260218-125428_Files من Google.png",
    "Screenshot_20260218-125438_Files من Google.png",
    // الدفعة الثانية
    "Screenshot_20260218-125448_Files من Google.png",
    "Screenshot_20260218-125500_Files من Google.png",
    "Screenshot_20260218-125509_Files من Google.png",
    "Screenshot_20260218-125517_Files من Google.png",
    "Screenshot_20260218-125535_Files من Google.png",
    "Screenshot_20260218-125545_Files من Google.png",
    "Screenshot_20260218-125549_Files من Google.png",
    "Screenshot_20260218-125609_Files من Google.png",
    "Screenshot_20260218-125624_Files من Google.png",
    "Screenshot_20260218-125657_Files من Google.png",
    "Screenshot_20260218-125713_Files من Google.png",
    "Screenshot_20260218-125753_Files من Google.png",
    "Screenshot_20260218-125813_Files من Google.png",
    "Screenshot_20260218-125856_Files من Google.png",
    "Screenshot_20260218-125908_Files من Google.png",
    "Screenshot_20260218-125947_Files من Google.png",
    "Screenshot_20260218-130017_Files من Google.png",
    "Screenshot_20260218-130048_Files من Google.png",
    // الدفعة الثالثة (صور)
    "Screenshot_20260218-200700_صور Google.png",
    "Screenshot_20260218-201538_صور Google.png",
    "Screenshot_20260218-201825_صور Google.png",
    "Screenshot_20260218-201854_صور Google.png",
    "Screenshot_20260218-202008_صور Google.png",
    "Screenshot_20260218-202025_صور Google.png",
    "Screenshot_20260218-202043_صور Google.png",
    "Screenshot_20260218-202101_صور Google.png",
    "Screenshot_20260218-202118_صور Google.png",
    "Screenshot_20260218-202133_صور Google.png",
    "Screenshot_20260218-202147_صور Google.png",
    "Screenshot_20260218-202202_صور Google.png",
    "Screenshot_20260218-202216_صور Google.png",
    "Screenshot_20260218-202228_صور Google.png",
    "Screenshot_20260218-202238_صور Google.png",
    "Screenshot_20260218-202249_صور Google.png",
    "Screenshot_20260218-202258_صور Google.png",
    "Screenshot_20260218-202315_صور Google.png",
    "Screenshot_20260218-202329_صور Google.png",
    "Screenshot_20260218-202342_صور Google.png",
    "Screenshot_20260218-202358_صور Google.png",
    "Screenshot_20260218-202408_صور Google.png",
    "Screenshot_20260218-202438_صور Google.png",
    "Screenshot_20260218-202453_صور Google.png",
    "Screenshot_20260218-202506_صور Google.png",
    "Screenshot_20260218-202648_صور Google.png",
    // الدفعة الرابعة
    "Screenshot_20260218-202731_صور Google.png",
    "Screenshot_20260218-202805_صور Google.png",
    "Screenshot_20260218-202820_صور Google.png",
    "Screenshot_20260218-202901_صور Google.png",
    "Screenshot_20260218-202916_صور Google.png",
    "Screenshot_20260218-202942_صور Google.png",
    "Screenshot_20260218-202959_صور Google.png"
];

// ===== التصنيفات =====
const categories = {
    mafsal: { name: "مفصلات", count: 0 },
    masak_turkey: { name: "مسكات أبواب تركية", count: 0 },
    kawaleen_hadid: { name: "كوالين أبواب حديد", count: 0 },
    smart_lock: { name: "أقفال ذكية بصمة", count: 0 },
    cylinder_keys: { name: "مفاتيح سلندرات", count: 0 },
    kawaleen_khashab: { name: "كوالين أبواب خشب دفن", count: 0 }
};

// ===== توزيع الصور على التصنيفات (عدل حسب رغبتك) =====
const distribution = [
    { cat: "mafsal", count: 12 },
    { cat: "masak_turkey", count: 12 },
    { cat: "kawaleen_hadid", count: 12 },
    { cat: "smart_lock", count: 12 },
    { cat: "cylinder_keys", count: 12 },
    { cat: "kawaleen_khashab", count: 10 }
];

// ===== إنشاء بيانات المنتجات =====
let products = [];
let imageIndex = 0;

distribution.forEach(group => {
    const catKey = group.cat;
    const catInfo = categories[catKey];
    
    for (let i = 0; i < group.count && imageIndex < imageFiles.length; i++) {
        products.push({
            id: products.length + 1,
            name: `${catInfo.name} ${i + 1}`,
            description: `منتج عالي الجودة من قسم ${catInfo.name}`,
            category: catKey,
            categoryName: catInfo.name,
            image: `images/${imageFiles[imageIndex]}`,
            isNew: i < 2,
            isFavorite: i === 0
        });
        
        imageIndex++;
        catInfo.count++;
    }
});

// ===== المتغيرات =====
let currentFilter = 'all';
let currentPage = 1;
const perPage = 8;

// ===== التحميل =====
document.addEventListener('DOMContentLoaded', function() {
    console.log(`✅ تم تحميل ${products.length} منتج`);
    renderProducts();
    renderCategories();
});

// ===== عرض المنتجات =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    let filtered = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    const countEl = document.getElementById('productsCount');
    if (countEl) countEl.textContent = filtered.length;
    
    const totalPages = Math.ceil(filtered.length / perPage);
    const start = (currentPage - 1) * perPage;
    const items = filtered.slice(start, start + perPage);
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #888;">
                <i class="fas fa-box-open" style="font-size: 4rem; color: #d4af37; margin-bottom: 20px; display: block;"></i>
                <h3>لا توجد منتجات في هذا القسم</h3>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = items.map(p => `
        <div class="product-card" data-id="${p.id}" style="background: #12121a; border-radius: 16px; overflow: hidden; border: 1px solid rgba(212,175,55,0.2); opacity: 0; transform: translateY(20px); transition: all 0.5s ease;">
            <div onclick="openGallery('${encodeURIComponent(p.image)}', '${p.name}')" style="position: relative; height: 250px; overflow: hidden; cursor: pointer; background: linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%);">
                <img src="${p.image}" alt="${p.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:#d4af37;flex-direction:column;\\'><i class=\\'fas fa-image\\' style=\\'font-size:3rem;margin-bottom:10px;\\'></i><span>${p.name}</span></div>'">
                
                ${p.isNew ? '<span style="position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #d4af37, #b8941f); color: #000; padding: 6px 18px; border-radius: 25px; font-size: 0.85rem; font-weight: bold; box-shadow: 0 4px 15px rgba(212,175,55,0.3);"><i class="fas fa-star" style="margin-left: 5px;"></i>جديد</span>' : ''}
                
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: all 0.3s; backdrop-filter: blur(2px);">
                    <i class="fas fa-search-plus" style="color: #d4af37; font-size: 3rem; margin-bottom: 10px;"></i>
                    <span style="color: #d4af37; font-size: 1rem; font-weight: 600;">اضغط للتكبير</span>
                </div>
            </div>
            
            <div style="padding: 25px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                    <span style="background: rgba(212,175,55,0.1); color: #d4af37; padding: 4px 12px; border-radius: 15px; font-size: 0.75rem; border: 1px solid rgba(212,175,55,0.3);">${p.categoryName}</span>
                    ${p.isFavorite ? '<i class="fas fa-heart" style="color: #e74c3c;"></i>' : ''}
                </div>
                
                <h3 style="color: #fff; margin-bottom: 10px; font-size: 1.2rem; font-weight: 700;">${p.name}</h3>
                <p style="color: #888; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">${p.description}</p>
                
                <button onclick="requestPrice(${p.id})" style="width: 100%; background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #0a0a0f; border: none; padding: 15px; border-radius: 12px; font-weight: 700; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(212,175,55,0.2);">
                    <span>اطلب السعر</span>
                    <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    setTimeout(() => {
        grid.querySelectorAll('.product-card').forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 100);
        });
    }, 50);
    
    const curPage = document.getElementById('currentPage');
    const totPage = document.getElementById('totalPages');
    if (curPage) curPage.textContent = currentPage;
    if (totPage) totPage.textContent = totalPages || 1;
}

// ===== عرض التصنيفات =====
function renderCategories() {
    const container = document.querySelector('.categories-grid');
    if (!container) return;
    
    let html = `
        <div class="category-card" onclick="filterProducts('all')" data-category="all" style="cursor: pointer; padding: 30px; text-align: center; background: #12121a; border-radius: 20px; border: 2px solid transparent; transition: all 0.3s;">
            <div style="width: 70px; height: 70px; background: rgba(212,175,55,0.1); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 1.8rem; color: #d4af37; border: 2px solid rgba(212,175,55,0.3);">
                <i class="fas fa-th-large"></i>
            </div>
            <h3 style="font-size: 1.1rem; color: #fff;">جميع المنتجات</h3>
            <span style="color: #888; font-size: 0.9rem;">${products.length} منتج</span>
        </div>
    `;
    
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        const count = products.filter(p => p.category === key).length;
        
        html += `
            <div class="category-card" onclick="filterProducts('${key}')" data-category="${key}" style="cursor: pointer; padding: 30px; text-align: center; background: #12121a; border-radius: 20px; border: 2px solid transparent; transition: all 0.3s;">
                <div style="width: 70px; height: 70px; background: rgba(212,175,55,0.1); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-size: 1.8rem; color: #d4af37; border: 2px solid rgba(212,175,55,0.3);">
                    <i class="fas fa-box"></i>
                </div>
                <h3 style="font-size: 1.1rem; color: #fff;">${cat.name}</h3>
                <span style="color: #888; font-size: 0.9rem;">${count} منتج</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ===== فتح معرض الصور =====
function openGallery(encodedSrc, name) {
    const src = decodeURIComponent(encodedSrc);
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.3s;';
    
    modal.innerHTML = `
        <div onclick="closeGallery()" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
        
        <div style="position: relative; max-width: 90%; max-height: 90%; text-align: center; transform: scale(0.9); opacity: 0; transition: all 0.3s;" id="modalContent">
            <button onclick="closeGallery()" style="position: absolute; top: -50px; right: 0; background: linear-gradient(135deg, #d4af37, #b8941f); border: none; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; color: #0a0a0f; font-weight: bold; transition: all 0.3s; z-index: 10;">
                <i class="fas fa-times"></i>
            </button>
            
            <img src="${src}" alt="${name}" style="max-width: 100%; max-height: 80vh; border-radius: 15px; border: 3px solid #d4af37; box-shadow: 0 25px 60px rgba(0,0,0,0.8);" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            
            <div style="display: none; width: 400px; height: 300px; background: linear-gradient(135deg, #1a1a2e, #0f0f23); border-radius: 15px; align-items: center; justify-content: center; flex-direction: column; color: #d4af37; border: 2px solid rgba(212,175,55,0.3);">
                <i class="fas fa-image" style="font-size: 4rem; margin-bottom: 15px;"></i>
                <span>الصورة غير متوفرة</span>
            </div>
            
            <p style="color: #d4af37; margin-top: 20px; font-size: 1.4rem; font-weight: 700; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${name}</p>
            
            <button onclick="requestPriceByName('${name}')" style="margin-top: 15px; background: linear-gradient(135deg, #25d366, #128c7e); color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 10px;">
                <i class="fab fa-whatsapp"></i>
                اطلب السعر
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        const content = document.getElementById('modalContent');
        if (content) {
            content.style.transform = 'scale(1)';
            content.style.opacity = '1';
        }
    }, 10);
}

// ===== إغلاق المعرض =====
function closeGallery() {
    const modal = document.querySelector('div[style*="z-index: 9999"]');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== طلب السعر =====
function requestPrice(id) {
    const p = products.find(x => x.id === id);
    if (p) {
        const msg = `مرحباً سند ستور 👋\n\nأرغب في معرفة سعر:\n🏷️ ${p.name}\n📂 القسم: ${p.categoryName}\n\nيرجى إرسال السعر والتوفر`;
        window.open(`https://wa.me/249913678918?text=${encodeURIComponent(msg)}`, '_blank');
    }
}

function requestPriceByName(name) {
    const msg = `مرحباً سند ستور 👋\n\nأرغب في معرفة سعر: ${name}\n\nيرجى إرسال السعر والتوفر`;
    window.open(`https://wa.me/249913678918?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== التصفية =====
function filterProducts(cat) {
    currentFilter = cat;
    currentPage = 1;
    renderProducts();
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.border = card.dataset.category === cat 
            ? '2px solid #d4af37' 
            : '2px solid transparent';
    });
}

// ===== تغيير صفحة =====
function changePage(dir) {
    const total = Math.ceil(products.length / perPage);
    const newPage = currentPage + dir;
    if (newPage >= 1 && newPage <= total) {
        currentPage = newPage;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===== باقي الدوال =====
function searchProducts() { currentPage = 1; renderProducts(); }
function sortProducts() { renderProducts(); }
function openWhatsApp() { window.open('https://wa.me/249913678918', '_blank'); }
function toggleMenu() { 
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

// ===== إغلاق بالـ ESC =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGallery();
});
// دالة تلقائية تضيف المسار الصحيح للصور
function fixImagePaths() {
    const baseUrl = 'https://yourdomain.com/'; // غيره للرابط بتاعك
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        const src = img.getAttribute('data-src');
        img.src = baseUrl + src;
    });
}

// في الـ HTML استخدم:
// <img data-src="images/product.jpg" alt="منتج">
// ضيف ده في ملف script.js
const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/اسمك/المستودع/main/';

function loadImage(imgName) {
    return IMAGE_BASE_URL + imgName;
}

// استخدمه كده:
// <img id="myImg">
// document.getElementById('myImg').src = loadImage('images/product1.jpg');
