// Portfolio data with categories and file information
const portfolioItems = [
    {
        "filename": [ "tec-doc/data-center/Data Center LinkedIn Post.PNG",
                    "https://www.asahi-america.com/data-centers-part-two-air-cooling-and-liquid-cooling-in-data-centers/",
                    "https://www.asahi-america.com/data-centers-part-one-general-overview-and-modular-design/"],
        "title": "Data Center Marketing",
        "description": "Data centers represent a rapidly growing market segment for Asahi/America. As part of my integrated strategy to strengthen our position in this space, I'm exploring new campaigns to identify what best resonates with our target audience. One key component of this effort involves developing thought leadership articles for our Inner Circle blog.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "https://www.facebook.com/photo.php?fbid=1257989645515352&set=pb.100039129857513.-2207520000&type=3"],
        "title": "Semiconductor Webinar Social Media Promotion",
        "description": "Following SEMICON, a key component of the marketing campaign was to engage customers with targeted product positioning through an educational and technical webinar campaign—delivered when the trade show remained top of mind. I planned, developed, and proofed the webinar that was ultimately presented through GlobalSpec.",
        "category": "Event & Promotional Materials",
    },
    {
        "filename": [ "event/semicon/Dymatrix Mid Temp High Temp Ad August 2024-01.png",
                    "event/semicon/Dymatrix Mid Temp High Temp Ad June July 2024-01.png",
                    "event/semicon/DYMATRIX MID TEMP HIGH TEMP POSTER FINAL.pdf",
                    "event/semicon/Dymatrix_One_Sheet.pdf",
                    "event/semicon/SEMICON 2024 Cover Letter_Leads Follow-Up Physical Mailer.pdf",
                    "event/semicon/SEMICON during-show promotion.PNG",
                    "event/semicon/SEMICON post-show promotion integrated webinar campaign following SEMICON.PNG",
                    "event/semicon/SEMICON pre-show promotion.PNG",
                    "event/semicon/SEMICON West 2024 Email.pdf",
                    "event/semicon/SEMICON West 2024.png",
                    "event/semicon/Semiconductor Manufacturing - GlobalSpec - July 10 2024.pdf",
                    "https://www.globalspec.com/newsletter/ViewIssue?Vol=Vol16Issue7_SemiconductorMfg&Pub=75",
                    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7216505177023856640/",
                    "https://www.facebook.com/reel/1747720149397278"],
        "title": "SEMICON Trade Show Marketing",
        "description": "One of Asahi/America's largest markets is the semiconductor market. Therefore, one of the largest trade shows we participate in every year is SEMICON, a semiconductor manufacturing trade show. This is an example of some of the integrated marketing that I developed for trade shows like SEMICON.",
        "category": "Event & Promotional Materials",
    },
    {
        "filename": [ "digital/social-media/LinkedIn Example Ultra Facility Sponsor.PNG",
                    "digital/social-media/LinkedIn Example Website.PNG",
                    "digital/social-media/LinkedIn Example.PNG",
                    "digital/social-media/LinkedIn ORGANIC Growth Since September 2018.PNG",
                    "digital/social-media/LinkedIn Social Media Post Example.PNG",
                    "https://www.linkedin.com/feed/update/urn:li:ugcPost:7219745255292633091/",
                    "https://www.linkedin.com/feed/update/urn:li:activity:7308550953752776705/",
                    "https://www.linkedin.com/feed/update/urn:li:activity:7266899856814751745/"],
        "title": "Social Media Posts",
        "description": "This is a collection of the content I generated for social media posts.",
        "category": "Digital & Video Content",
    },
    {
        "filename": [ "event/grand-opening/Grand Opening Envelope.PNG",
                    "event/grand-opening/Grand Opening Invite.PNG",
                    "event/grand-opening/Grand Opening Save The Date.PNG",
                    "event/grand-opening/Grand Opening Sign.PNG",
                    "event/grand-opening/Grand Opening Thank You.PNG",
                    "event/grand-opening/PPI Grand Opening - Formal Invite.pdf",
                    "event/grand-opening/PPI Invite - e-vite (794 × 1200 px).png",
                    "event/grand-opening/PPI Save the Date - e-vite (794 × 800 px).png",
                    "event/grand-opening/Save The Date.PNG"],
        "title": "Grand Opening",
        "description": "While at Asahi/America, I had the opportunity to manage multiple events, including the company's largest event: the grand opening of our facility in Louisiana.",
        "category": "Event & Promotional Materials",
    },
    {
        "filename": [ "event/Texas Water 2025 Promo - WWD Magazine.pdf"],
        "title": "Texas Water 2025",
        "description": "This is an example of some of the pre-show marketing promotion we do for the trade shows at Asahi/America. It requires a combination of customer segmentation, A/B testing, and appropiate messaging.",
        "category": "Event & Promotional Materials",
    },
    {
        "filename": [ "marketing-ad/advertisement/AASLSO WEB BANNER AD 2025.png",
                    "marketing-ad/advertisement/Georgia Aquarium Ad - Aqua Vino 2025 (1920 x 1080px).png",
                    "marketing-ad/advertisement/RASTECH 2023 Half Page Ad FINAL.pdf",
                    "marketing-ad/advertisement/RASTECH 2025 Half Page Ad FINAL.pdf",
                    "marketing-ad/advertisement/TPO Quarter Page Ad - September 2025 FINAL-01.png"],
        "title": "Advertisements",
        "description": "These are some examples of advertisements I have created for different digital campaigns.",
        "category": "Marketing & Advertising Materials",
    },
    {
        "filename": [ "marketing-ad/press-releases/Press Release - Asahi America Introduces Series 19 Electric Actuator.pdf",
                    "marketing-ad/press-releases/Press Release - AsahiAmerica Announces Opening of Newly Constructed Fabrication Facility.pdf",
                    "marketing-ad/press-releases/Press Release - AsahiAmerica Announces Partnership with McElroy.pdf"],
        "title": "Press Releases",
        "description": "At Asahi/America, I focused on paid and organic public relations including the placement of press releases.",
        "category": "Marketing & Advertising Materials",
    },
    {
        "filename": [ "tec-doc/Air_Pro_Product_Guide_and_Installation_Manual.pdf"],
        "title": "Air-Pro Product Guide & Installation Manual",
        "description": "This is an example of a technical document I had to put together under the guidance of the technical engineering team.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "tec-doc/Butterfly_Valve_Considerations_Valve_World_October_2022.pdf"],
        "title": "Butterfly Valve Considerations Article",
        "description": "This is an example of an article I worked on with a technical sales manager that was published in a trade magazine.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "tec-doc/Case Study Asahitec Boiler Discharge.pdf"],
        "title": "Asahitec Boiler Discharge Case Study",
        "description": "During my time at Asahi/America, I have put together over 15 different case studies that are used as sales and marketing tools.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "tec-doc/Chemical_Resistance_With_Confidence_September_2023.pdf"],
        "title": "Chemical Resistance with Confidence Article",
        "description": "This is another example of a technical article that I helped worked on with our product management team. I helped brainstorm the idea, outline, and proofread the article. When it was time to publish, I helped pull together applicable charts and images.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "tec-doc/Industrial Piping Catalog.pdf"],
        "title": "Industrial Piping Catalog",
        "description": "This is an example of a catalog I put together with the sales, product management, and engineering teams.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "tec-doc/PFAS & FLUOROPOYLMERS FAQS.pdf",
                    "tec-doc/Understanding the Difference Between PFAS and Fluoropolymers - Asahi_America.pdf"],
        "title": "PFAS & Fluropolymers Technical Marketing Materials",
        "description": "This is an example of some of the highly technical information I had to translate into compelling, audience-focused marketing content that strengthens brand messaging and drives customer engagement.",
        "category": "Technical Documentation",
    },
    {
        "filename": [ "https://www.youtube.com/watch?v=cIh9kUAD9ZE",
                    "https://www.youtube.com/watch?v=-cTHXMGZINo"],
        "title": "Videos",
        "description": "These are examples of videos that I created 100% independently as part of our social media and SEO strategy.",
        "category": "Digital & Video Content",
    },
    {
        "filename": [ "https://link.globalspec.com/view/6245c8ebb30ac019bb18613768e7ea2543a92159e039ef64/b2554d17"],
        "title": "What is Struvite?",
        "description": "This is an example of a marketing campaign I worked on through a third-party vendor, called GlobalSpec. It involves an email campaign that integrates A/B testing and multi-touch points to the segmented audience.",
        "category": "Marketing & Advertising Materials",
    },
    {
        "filename": [ "https://www.linkedin.com/feed/update/urn:li:activity:7257436201589116930/"],
        "title": "Ultra Facility Corporate Sponsorship",
        "description": "At Asahi/America I oversee all company sponsorships and public relations initatives, cultivating industry partnerships, securing media visbility, and strengthening the company's reputation within target markets.",
        "category": "Event & Promotional Materials",
    },
    {
        "filename": [ "https://www.globalspec.com/events/eventdetails?eventId=4527&fbclid=IwY2xjawNaUBxleHRuA2FlbQIxMABicmlkETF1d3EwdFhsNmFJa2UwenR2AR6-ojLYeF_3s5YRPrgyBRx8rUht5PjnUN5CEPp3TF1Nyc5JyK4pmwzXLItAVw_aem_ysj1KK2Rta6_afiZ91zykA"],
        "title": "High Purity Piping Semiconductor Webinar",
        "description": "Following SEMICON, a key component of the marketing campaign was to engage customers with targeted product positioning through educational and technical webinar—delivered when the trade show remained top of mind. I planned, contributed to the development of, and proofed the webinar that was ultimately presented through GlobalSpec.",
        "category": "Event & Promotional Materials",
    }
];

// Category configuration
const categories = {
    'All': { icon: 'fas fa-th-large', color: '#2E4154' },
    'Technical Documentation': { icon: 'fas fa-file-alt', color: '#5B7C95' },
    'Marketing & Advertising Materials': { icon: 'fas fa-bullhorn', color: '#8FA4B3' },
    'Event & Promotional Materials': { icon: 'fas fa-calendar-alt', color: '#2E4154' },
    'Digital & Video Content': { icon: 'fas fa-video', color: '#5B7C95' }
};

// Global state
let currentFilter = 'All';
let galleryState = null; // To store gallery state when viewing individual items

// DOM elements
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const fileViewer = document.getElementById('fileViewer');
const resumeBtn = document.getElementById('resumeBtn');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderPortfolio();
    initializeModal();
    initializeResumeButton();
});

// Initialize filter buttons
function initializeFilters() {
    const filtersContainer = document.getElementById('filters');
    
    Object.keys(categories).forEach(category => {
        const button = document.createElement('button');
        button.className = `filter-btn ${category === 'All' ? 'active' : ''}`;
        button.setAttribute('data-category', category);
        button.innerHTML = `
            <i class="${categories[category].icon}"></i>
            <span>${category}</span>
        `;
        button.addEventListener('click', () => filterPortfolio(category));
        filtersContainer.appendChild(button);
    });
}

// Filter portfolio items
function filterPortfolio(category) {
    currentFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });
    
    // Re-render portfolio with filter
    renderPortfolio();
}

// Render portfolio items
function renderPortfolio() {
    const portfolioContainer = document.getElementById('portfolio');
    portfolioContainer.innerHTML = '';
    
    const filteredItems = currentFilter === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === currentFilter);
    
    filteredItems.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item, index);
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Create portfolio item element
function createPortfolioItem(item, index) {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.style.animationDelay = `${index * 0.1}s`;
    
    const icon = getFileIcon(item);
    
    // Handle both single files and arrays of files
    const filenames = Array.isArray(item.filename) ? item.filename : [item.filename];
    const itemData = {
        filenames: filenames,
        title: item.title,
        description: item.description,
        category: item.category
    };
    
    div.innerHTML = `
        <div class="portfolio-card">
            <div class="portfolio-icon">
                <i class="${icon}"></i>
                ${filenames.length > 1 ? `<span class="file-count">${filenames.length}</span>` : ''}
            </div>
            <h3>${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <div class="portfolio-category">${item.category}</div>
        </div>
    `;
    
    // Add click event listener
    div.querySelector('.portfolio-card').addEventListener('click', () => {
        openFileModal(itemData);
    });
    
    return div;
}

// Get appropriate icon for file type
function getFileIcon(item) {
    const filenames = Array.isArray(item.filename) ? item.filename : [item.filename];
    
    // Determine the type based on files
    if (filenames.length > 1) {
        return 'fas fa-images'; // Multiple files icon
    }
    
    const filename = filenames[0];
    
    if (filename.startsWith('http')) {
        if (filename.includes('youtube')) return 'fab fa-youtube';
        if (filename.includes('facebook')) return 'fab fa-facebook';
        if (filename.includes('linkedin')) return 'fab fa-linkedin';
        return 'fas fa-external-link-alt';
    }
    
    const extension = filename.split('.').pop().toLowerCase();
    const iconMap = {
        'pdf': 'fas fa-file-pdf',
        'png': 'fas fa-image',
        'jpg': 'fas fa-image',
        'jpeg': 'fas fa-image',
        'gif': 'fas fa-image'
    };
    
    return iconMap[extension] || 'fas fa-file';
}

// Open file modal
function openFileModal(itemData) {
    const { filenames, title, description } = itemData;
    
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Clear any previous gallery state
    galleryState = null;
    removeBreadcrumb();
    
    if (filenames.length > 1) {
        // Multiple files - show gallery
        showGalleryView(filenames, title, description);
    } else {
        // Single file - show directly
        showSingleFile(filenames[0]);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show gallery view for multiple files
function showGalleryView(filenames, title, description) {
    fileViewer.innerHTML = '';
    
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery-container';
    
    const galleryGrid = document.createElement('div');
    galleryGrid.className = 'gallery-grid';
    
    filenames.forEach((filename, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        if (filename.startsWith('http')) {
            // Handle URLs
            galleryItem.innerHTML = createUrlGalleryItem(filename);
            galleryItem.addEventListener('click', () => openFromGallery(filename, filenames, title, description));
        } else {
            const extension = filename.split('.').pop().toLowerCase();
            
            if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
                // Handle images
                galleryItem.innerHTML = createImageGalleryItem(filename);
                galleryItem.addEventListener('click', () => openImageLightbox(filename));
            } else if (extension === 'pdf') {
                // Handle PDFs
                galleryItem.innerHTML = createPdfGalleryItem(filename);
                galleryItem.addEventListener('click', () => openFromGallery(filename, filenames, title, description));
            } else {
                // Handle other file types
                galleryItem.innerHTML = createFileGalleryItem(filename);
                galleryItem.addEventListener('click', () => downloadFile(`content/${filename}`, filename));
            }
        }
        
        galleryGrid.appendChild(galleryItem);
    });
    
    galleryContainer.appendChild(galleryGrid);
    fileViewer.appendChild(galleryContainer);
}

// Create URL gallery item HTML
function createUrlGalleryItem(url) {
    let icon = 'fas fa-external-link-alt';
    let type = 'External Link';
    
    if (url.includes('youtube')) {
        icon = 'fab fa-youtube';
        type = 'YouTube Video';
    } else if (url.includes('facebook')) {
        icon = 'fab fa-facebook';
        type = 'Facebook Content';
    } else if (url.includes('linkedin')) {
        icon = 'fab fa-linkedin';
        type = 'LinkedIn Post';
    }
    
    return `
        <div class="gallery-url-item">
            <div class="url-icon">
                <i class="${icon}"></i>
            </div>
            <div class="url-title">${type}</div>
            <div class="url-preview">${url.length > 50 ? url.substring(0, 50) + '...' : url}</div>
        </div>
    `;
}

// Create image gallery item HTML
function createImageGalleryItem(filename) {
    return `
        <div class="gallery-image-item">
            <img src="content/${filename}" alt="${filename}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `;
}

// Create PDF gallery item HTML
function createPdfGalleryItem(filename) {
    const displayName = filename.split('/').pop().replace(/\.[^/.]+$/, "");
    return `
        <div class="gallery-pdf-item">
            <div class="pdf-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="pdf-title">${displayName}</div>
            <div class="pdf-subtitle">Click to view PDF</div>
        </div>
    `;
}

// Create file gallery item HTML
function createFileGalleryItem(filename) {
    const displayName = filename.split('/').pop();
    return `
        <div class="gallery-file-item">
            <div class="file-icon">
                <i class="fas fa-file"></i>
            </div>
            <div class="file-title">${displayName}</div>
            <div class="file-subtitle">Click to download</div>
        </div>
    `;
}

// Open file from gallery view
function openFromGallery(filename, originalFilenames, originalTitle, originalDescription) {
    // Store gallery state for back navigation
    galleryState = {
        filenames: originalFilenames,
        title: originalTitle,
        description: originalDescription
    };
    
    // Update modal title for individual file
    const displayName = filename.startsWith('http') ? 'External Content' : filename.split('/').pop();
    modalTitle.textContent = displayName;
    modalDescription.textContent = '';
    
    // Show breadcrumb
    showBreadcrumb(originalTitle);
    
    // Show the individual file
    showSingleFile(filename);
}

// Show breadcrumb navigation
function showBreadcrumb(galleryTitle) {
    removeBreadcrumb(); // Remove any existing breadcrumb
    
    const breadcrumb = document.createElement('button');
    breadcrumb.className = 'back-to-gallery-btn';
    breadcrumb.innerHTML = '←';
    breadcrumb.onclick = returnToGallery;
    
    const modalActions = document.querySelector('.modal-actions');
    modalActions.insertBefore(breadcrumb, modalActions.firstChild);
}

// Remove breadcrumb navigation
function removeBreadcrumb() {
    const breadcrumb = document.querySelector('.back-to-gallery-btn');
    if (breadcrumb) {
        breadcrumb.remove();
    }
}

// Return to gallery view
function returnToGallery() {
    if (galleryState) {
        modalTitle.textContent = galleryState.title;
        modalDescription.textContent = galleryState.description;
        showGalleryView(galleryState.filenames, galleryState.title, galleryState.description);
        removeBreadcrumb();
        galleryState = null;
    }
}

// Show single file content
function showSingleFile(filename) {
    fileViewer.innerHTML = '';
    
    if (filename.startsWith('http')) {
        // Handle URLs
        if (filename.includes('youtube.com') || filename.includes('youtu.be')) {
            showYouTubeEmbed(filename);
        } else if (filename.includes('facebook.com')) {
            showFacebookEmbed(filename);
        }else if (filename.includes('linkedin.com')) {
            showLinkedInEmbed(filename);
        }else {
            showExternalLink(filename);
        }
        return;
    }
    
    const filePath = `content/${filename}`;
    const extension = filename.split('.').pop().toLowerCase();
    
    try {
        if (extension === 'pdf') {
            showPdfEmbed(filePath, filename);
        } else if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
            showImageEmbed(filePath, filename);
        } else {
            showFileDownload(filePath, filename);
        }
    } catch (error) {
        console.error('Error loading file:', error);
        showError('Error loading file: ' + error.message);
    }
}

// Show PDF embed
function showPdfEmbed(filePath, filename) {
    const embed = document.createElement('embed');
    embed.src = filePath;
    embed.type = 'application/pdf';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.border = 'none';
    
    embed.onload = function() {
        console.log('PDF loaded successfully:', filePath);
    };
    
    embed.onerror = function() {
        console.error('Failed to load PDF:', filePath);
        fileViewer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Unable to Load PDF</h3>
                <p>The PDF file could not be loaded in the browser. Please try downloading it instead.</p>
                <button class="btn btn-primary" onclick="downloadFile('${filePath}', '${filename}')">
                    <i class="fas fa-download"></i>
                    Download PDF
                </button>
            </div>
        `;
    };
    
    fileViewer.appendChild(embed);
}

// Show image embed
function showImageEmbed(filePath, filename) {
    const img = document.createElement('img');
    img.src = filePath;
    img.alt = filename;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    
    img.onerror = function() {
        showError('Error loading image: ' + filename);
    };
    
    fileViewer.appendChild(img);
}

// Show file download interface
function showFileDownload(filePath, filename) {
    const extension = filename.split('.').pop().toUpperCase();
    fileViewer.innerHTML = `
        <div class="file-preview">
            <div class="file-content">
                <i class="fas fa-file"></i>
                <h3>File Preview</h3>
                <p>This ${extension} file can be downloaded for viewing.</p>
                <button class="btn btn-primary" onclick="downloadFile('${filePath}', '${filename}')">
                    <i class="fas fa-download"></i>
                    Download File
                </button>
            </div>
        </div>
    `;
}

// Open image lightbox (for gallery images)
function openImageLightbox(filename) {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
        <div class="image-modal">
            <span class="close-image" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="content/${filename}" alt="${filename}">
        </div>
    `;
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
    
    document.body.appendChild(overlay);
}

// Show YouTube embed
function showYouTubeEmbed(url) {
    let videoId = extractYouTubeVideoId(url);
    
    if (videoId) {
        fileViewer.innerHTML = `
            <div class="video-embed-container">
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-actions">
                    <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                        <i class="fab fa-youtube"></i>
                        Watch on YouTube
                    </button>
                </div>
            </div>
        `;
    } else {
        showExternalLink(url);
    }
}

// Extract YouTube video ID from various URL formats
function extractYouTubeVideoId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return match[1];
        }
    }
    
    return null;
}

// Show Facebook embed
function showFacebookEmbed(url) {
    let contentType = 'Facebook Content';
    
    if (url.includes('/reel/')) {
        contentType = 'Facebook Reel';
    } else if (url.includes('/video/')) {
        contentType = 'Facebook Video';
    } else if (url.includes('/photo/')) {
        contentType = 'Facebook Photo';
    }
    
    fileViewer.innerHTML = `
        <div class="social-embed-container">
            <div class="facebook-embed-wrapper">
                <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&width=500&show_text=true&height=750&appId" 
                    width="500" 
                    height="750" 
                    style="border:none;overflow:hidden" 
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
            <div class="social-actions">
                <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                    <i class="fab fa-facebook"></i>
                    View on Facebook
                </button>
            </div>
        </div>
    `;
}

// Show LinkedIn embed
function showLinkedInEmbed(url) {
    let contentType = 'LinkedIn Content';
    let embedUrl = '';
   
    if (url.includes('/posts/')) {
        contentType = 'LinkedIn Post';
        // Extract the post URN from the URL
        const postMatch = url.match(/\/posts\/([^/?]+)/);
        if (postMatch) {
            embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:share:${postMatch[1]}`;
        }
    } else if (url.includes('/pulse/')) {
        contentType = 'LinkedIn Article';
        embedUrl = url;
    } else if (url.includes('/feed/update/urn:li:')) {
        contentType = 'LinkedIn Update';
        // Extract the URN from the URL
        const urnMatch = url.match(/(urn:li:[^/?]+)/);
        if (urnMatch) {
            embedUrl = `https://www.linkedin.com/embed/feed/update/${urnMatch[1]}`;
        }
    } else if (url.includes('/video/')) {
        contentType = 'LinkedIn Video';
        embedUrl = url;
    } else {
        // Try to use the URL directly for embedding
        embedUrl = `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(url)}`;
    }
   
    fileViewer.innerHTML = `
        <div class="social-embed-container">
            <div class="linkedin-embed-wrapper">
                <iframe
                    src="${embedUrl}"
                    width="550"
                    height="750"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
            <div class="social-actions">
                <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                    <i class="fab fa-linkedin"></i>
                    View on LinkedIn
                </button>
            </div>
        </div>
    `;
}

// Show external link interface
function showExternalLink(url) {
    let linkType = 'External Content';
    let icon = 'fas fa-external-link-alt';
    let description = 'This content is hosted externally.';
    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        linkType = 'YouTube Video';
        icon = 'fab fa-youtube';
        description = 'Watch this video on YouTube.';
    } else if (url.includes('facebook.com')) {
        linkType = 'Facebook Post';
        icon = 'fab fa-facebook';
        description = 'View this post on Facebook.';
    } else if (url.includes('linkedin.com')) {
        linkType = 'LinkedIn Content';
        icon = 'fab fa-linkedin';
        description = 'View this content on LinkedIn.';
    }
    
    fileViewer.innerHTML = `
        <div class="external-link-container">
            <div class="external-link-content">
                <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                    <i class="${icon}"></i>
                    Open ${linkType}
                </button>
                <div class="link-preview">
                    <small>${url}</small>
                </div>
            </div>
        </div>
    `;
}

// Show error message
function showError(message) {
    fileViewer.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Unable to Load File</h3>
            <p>${message}</p>
        </div>
    `;
}

// Download file function
function downloadFile(filePath, filename) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize modal functionality
function initializeModal() {
    // Close modal when clicking close button
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    fileViewer.innerHTML = '';
    
    // Clear gallery state
    galleryState = null;
    removeBreadcrumb();
    
    // Remove any image overlays that might be open
    document.querySelectorAll('.image-overlay').forEach(overlay => overlay.remove());
}

// Initialize resume button
function initializeResumeButton() {
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            openResumeModal();
        });
    }
}

// Open resume in modal
function openResumeModal() {
    const resumePath = 'Resume_McLeod_2025.pdf';
    
    // modalTitle.textContent = 'Kristin McLeod - Professional Resume';
    // modalDescription.textContent = 'Comprehensive professional resume showcasing experience in technical marketing, communications, and project management within the industrial engineering sector.';
    
    // Clear any gallery state
    galleryState = null;
    removeBreadcrumb();
    
    // Load resume PDF
    showPdfEmbed(resumePath, 'Resume_McLeod_2025_RLP.pdf');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Make returnToGallery function globally accessible for onclick handler
window.returnToGallery = returnToGallery;
