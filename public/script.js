const API_DATA = {
    "Downloader": [
        {
            method: "GET",
            title: "YouTube Downloader",
            status: "online",
            description: "API untuk mendownload video atau shorts dari YouTube.",
            endpoint: "/api/ytdl?url=&format="
        },
        {
            method: "GET",
            title: "Twitter Downloader",
            status: "online",
            description: "API untuk mendownload video atau gambar dari Twitter.",
            endpoint: "/api/twitterdl?url="
        },
        {
            method: "GET",
            title: "Instagram Downloader",
            status: "online",
            description: "API untuk mendownload video atau gambar dari Instagram.",
            endpoint: "/api/igdl?url="
        },
        {
            method: "GET",
            title: "Facebook Downloader",
            status: "online",
            description: "API untuk mendownload video dari Facebook.",
            endpoint: "/api/fbdl?url="
        },
        {
            method: "GET",
            title: "TikTok Downloader",
            status: "online",
            description: "API untuk mendownload video dari TikTok.",
            endpoint: "/api/ttdl?url="
        },
        {
            method: "GET",
            title: "GitHub Cloning",
            status: "online",
            description: "Cloning repositori dari GitHub.",
            endpoint: "/api/gitclone?url="
        }
    ],
    "Search": [
        {
            method: "GET",
            title: "GitHub Stalk",
            status: "online",
            description: "API untuk melihat profil GitHub pengguna.",
            endpoint: "/api/githubstalk?username="
        },
        {
            method: "GET",
            title: "Search Groups",
            status: "online",
            description: "API untuk mencari grup WhatsApp berdasarkan kata kunci.",
            endpoint: "/api/searchgroups?q="
        },
        {
            method: "GET",
            title: "TikTok Search",
            status: "online",
            description: "API untuk mencari video dari TikTok berdasarkan query.",
            endpoint: "/api/ttsearch?q="
        },
        {
            method: "GET",
            title: "YouTube Search",
            status: "online",
            description: "API untuk mencari video dari YouTube berdasarkan kata kunci atau query.",
            endpoint: "/api/ytsearch?q="
        },
        {
            method: "GET",
            title: "NPM Search",
            status: "online",
            description: "Mencari package/module/library yang tersedia berdasarkan query(q) kamu.",
            endpoint: "/api/npmsearch?q="
        },
        {
            method: "GET",
            title: "Pinterest",
            status: "online",
            description: "Mencari gambar di Pinterest berdasarkan query (q) kamu.",
            endpoint: "/api/pinterest?q="
        }
    ],
    "AI": [
        {
            method: "GET",
            title: "LLaMA 3.3 70B Versatile",
            status: "online",
            description: "API untuk mengakses model LLaMA 3.3 70B yang serbaguna.",
            endpoint: "/api/llama-3.3-70b-versatile?content="
        },
        {
            method: "GET",
            title: "Gemini AI",
            status: "online",
            description: "API untuk mengakses AI model Gemini yang serbaguna.",
            endpoint: "/api/gemini?text="
        },
        {
            method: "GET",
            title: "Txt2Img",
            status: "online",
            description: "API untuk membuat gambar dari AI dengan style yang banyak.",
            endpoint: "/api/txt2img?prompt=&style="
        }
    ],
    "Tools": [
        {
            method: "GET",
            title: "Screenshot Web",
            status: "online",
            description: "API untuk screenshot website dengan mudah.",
            endpoint: "/api/ssweb?url="
        },
        {
            method: "GET",
            title: "Translate",
            status: "online",
            description: "API untuk translate bahasa apapun menjadi yang kamu inginkan.",
            endpoint: "/api/translate?text=&to="
        },
        {
            method: "GET",
            title: "Nulis",
            status: "online",
            description: "Membuat gambar buku beserta tulisan berdasarkan dari query text kamu.",
            endpoint: "/api/nulis?text="
        },
        {
            method: "GET",
            title: "Cuaca",
            status: "online",
            description: "Mendapatkan informasi Cuaca semua kota di dunia berdasarkan query kota.",
            endpoint: "/api/cuaca?kota="
        },
        {
            method: "GET",
            title: "QR Code Generator",
            status: "online",
            description: "Membuat QR secara otomatis dengan gampang.",
            endpoint: "/api/qrcodegenerator?text="
        },
        {
            method: "GET",
            title: "Credit Card Generator",
            status: "online",
            description: "Fake generator Credit Card hanya untuk Fun",
            endpoint: "/api/vcc?type=&count="
        }
    ],
    "Fun": [
        {
            method: "GET",
            title: "Cek Khodam",
            status: "online",
            description: "Permainan seru yang menunjukkan khodam seseorang berdasarkan nama.",
            endpoint: "/api/cekkhodam?nama="
        },
        {
            method: "GET",
            title: "Tahu Kah Kamu?",
            status: "online",
            description: "Permainan seru yang menunjukkan fakta2 random yang mungkin belom kamu ketahui.",
            endpoint: "/api/tahukahkamu"
        }
    ],
    "Sticker": [
        {
            method: "GET",
            title: "Brat Image",
            status: "online",
            description: "Mengubah text kamu menjadi gambar brat.",
            endpoint: "/api/brat?text="
        },
        {
            method: "POST",
            title: "Quoted Chat",
            status: "offline",
            description: "Membuat gambar dengan desain quoted chat yang bisa kamu custom nama, color, foto profile, dan lainnya.",
            endpoint: "/api/qc"
        }
    ],
    "Berita": [
        {
            method: "GET",
            title: "Detik News",
            status: "online",
            description: "Mendapatkan informasi berita terbaru dari Detik News.",
            endpoint: "/api/detiknews"
        },
        { 
            method: "GET",
            title: "Kompas",
            status: "online",
            description: "Mendapatkan informasi berita terbaru dari Kompas",
            endpoint: "/api/kompasnews"
        }
    ]      
};

function createApiItem(api) {
    const apiItem = document.createElement('div');
    apiItem.className = 'api-item';

    const apiHeader = document.createElement('div');
    apiHeader.className = 'api-header';

    const apiMethod = document.createElement('span');
    apiMethod.className = 'api-method';
    apiMethod.textContent = api.method;

    const apiTitle = document.createElement('span');
    apiTitle.className = 'api-title';
    apiTitle.textContent = api.title;

    const apiStatusBadge = document.createElement('span');
    apiStatusBadge.className = `api-status-badge ${api.status}`;
    apiStatusBadge.textContent = api.status.toUpperCase();

    apiHeader.appendChild(apiMethod);
    apiHeader.appendChild(apiTitle);
    apiHeader.appendChild(apiStatusBadge);

    const apiDescription = document.createElement('div');
    apiDescription.className = 'api-description';
    apiDescription.style.display = 'none';

    const apiDescriptionText = document.createElement('p');
    apiDescriptionText.textContent = api.description;

    const apiEndpoint = document.createElement('div');
    apiEndpoint.className = 'api-endpoint';
    apiEndpoint.textContent = `Endpoint: ${api.endpoint}`;

    const apiButton = document.createElement('button');
    apiButton.textContent = 'Akses Endpoint';
    apiButton.onclick = () => window.location.href = api.endpoint;

    apiDescription.appendChild(apiDescriptionText);
    apiDescription.appendChild(apiEndpoint);
    apiDescription.appendChild(apiButton);

    apiItem.appendChild(apiHeader);
    apiItem.appendChild(apiDescription);

    return apiItem;
}

function setupToggleDescriptions() {
    const apiHeaders = document.querySelectorAll('.api-header');

    apiHeaders.forEach(header => {
        header.addEventListener('click', function () {
            document.querySelectorAll('.api-description').forEach(desc => {
                desc.style.display = "none";
            });

            const description = this.nextElementSibling;
            if (description.style.display === "none" || !description.style.display) {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });
}

function loadApiData() {
    const apiCategoriesContainer = document.getElementById('api-categories');

    for (const category in API_DATA) {
        const apiCategory = document.createElement('div');
        apiCategory.className = 'api-category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;

        const apiList = document.createElement('div');
        apiList.className = 'api-list';

        API_DATA[category].forEach(api => {
            const apiItem = createApiItem(api);
            apiList.appendChild(apiItem);
        });

        apiCategory.appendChild(categoryTitle);
        apiCategory.appendChild(apiList);
        apiCategoriesContainer.appendChild(apiCategory);
    }

    setupToggleDescriptions();
}

document.addEventListener('DOMContentLoaded', loadApiData);

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light-theme';
body.className = savedTheme;
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    localStorage.setItem('theme', body.className);
    updateThemeIcon();
});

function updateThemeIcon() {
    if (body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const apiGrid = document.getElementById('api-categories');
let apiData = []; // Will be populated from your existing data

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredApis = apiData.filter(api => 
        api.title.toLowerCase().includes(searchTerm) ||
        api.description.toLowerCase().includes(searchTerm) ||
        api.category.toLowerCase().includes(searchTerm)
    );
    renderApis(filteredApis);
});

function renderApis(apis) {
    apiGrid.innerHTML = apis.map(api => `
        <div class="api-card">
            <span class="api-method method-${api.method.toLowerCase()}">${api.method}</span>
            <span class="api-status status-${api.status}">${api.status}</span>
            <h3>${api.title}</h3>
            <p>${api.description}</p>
            <div class="api-endpoint">
                <code>${api.endpoint}</code>
            </div>
            <button onclick="tryEndpoint('${api.endpoint}')" class="try-btn">
                Try it
            </button>
        </div>
    `).join('');
}

// Load initial data
fetch('/api/data')
    .then(res => res.json())
    .then(data => {
        apiData = data;
        renderApis(data);
    });

// Theme handling
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Search and filter functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const apiList = document.getElementById('apiList');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        renderFilteredApis(searchTerm);
    });
}

function renderFilteredApis(searchTerm = '', selectedCategory = '') {
    const apiList = document.getElementById('apiList');
    apiList.innerHTML = '';

    Object.entries(API_DATA).forEach(([category, apis]) => {
        // Jika ada kategori yang dipilih dan tidak cocok, skip
        if (selectedCategory && selectedCategory !== 'all' && category !== selectedCategory) {
            return;
        }

        // Filter berdasarkan search term
        const filteredApis = apis.filter(api => 
            api.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            api.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredApis.length > 0) {
            filteredApis.forEach(api => {
                apiList.appendChild(createApiCard(api, category));
            });
        }
    });
}

function createApiCard(api, category) {
    const card = document.createElement('div');
    card.className = 'api-card';
    
    card.innerHTML = `
        <div class="api-header">
            <span class="api-method method-${api.method.toLowerCase()}">${api.method}</span>
            <span class="api-status status-${api.status}" 
                  title="${api.status === 'online' ? 'API Siap Digunakan' : 'API Sedang Maintenance'}">${api.status}</span>
        </div>
        <h3 class="api-title">${api.title}</h3>
        <p class="api-description">${api.description}</p>
        <code class="endpoint">${api.endpoint}</code>
        <button onclick="tryApi('${api.endpoint}', '${api.method}')" class="try-btn">
            Try it <i class="fas fa-arrow-right"></i>
        </button>
    `;
    
    return card;
}

// Tambahkan fungsi untuk toggle kategori
function initCategoryToggle() {
    const toggleBtn = document.getElementById('toggleCategories');
    const categoriesWrapper = document.getElementById('categories');
    
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('collapsed');
        categoriesWrapper.classList.toggle('collapsed');
    });
}

// Fungsi untuk menampilkan semua API
function showAllApis() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const allCategory = document.querySelector('[data-category="all"]');
    allCategory.classList.add('active');
    
    renderFilteredApis('', 'all');
}

// Update fungsi inisialisasi kategori
function initCategories() {
    const categoriesDiv = document.getElementById('categories');
    
    // Pastikan "Semua API" selalu ada dan berfungsi
    const allCategory = document.querySelector('[data-category="all"]');
    allCategory.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        allCategory.classList.add('active');
        renderFilteredApis('', 'all');
    });
    
    // Tambahkan kategori lainnya
    Object.keys(API_DATA).forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `
            <div class="category-info">
                <i class="fas fa-${getCategoryIcon(category)}"></i>
                <span>${category}</span>
            </div>
            <span class="count">${API_DATA[category].length}</span>
        `;
        
        categoryItem.addEventListener('click', () => {
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            categoryItem.classList.add('active');
            renderFilteredApis('', category); // Passing category sebagai selectedCategory
        });
        
        categoriesDiv.appendChild(categoryItem);
    });
}

// Helper function untuk icon kategori
function getCategoryIcon(category) {
    const icons = {
        Downloader: 'download',
        Search: 'search',
        AI: 'robot',
        Tools: 'tools',
        Fun: 'smile',
        Sticker: 'image',
        Berita: 'newspaper'
    };
    return icons[category] || 'cube';
}

// Fungsi untuk update counter online di header
function updateHeaderOnlineCount() {
    const onlineCount = Object.values(API_DATA)
        .flat()
        .filter(api => api.status === 'online')
        .length;
    
    // Update counter di header
    const headerCounter = document.querySelector('.api-count span');
    if (headerCounter) {
        headerCounter.textContent = onlineCount;
    }
}

// Update inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSearch();
    initCategories();
    initCategoryToggle();
    renderFilteredApis('');
    updateHeaderOnlineCount();
});
