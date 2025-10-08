// Portfolio data with categories and file information
const portfolioItems = [
    {
        filename: '_External_ _TEST_ Kristin Got Struvite Problems_ Here_s the Fix_.msg',
        title: 'Struvite Email Campaign',
        description: 'This is an example of an email campaign that integrates A/B testing and multi-touch points to the segmented audience.',
        category: 'Marketing & Advertising Materials',
        type: 'msg'
    },
    {
        filename: 'AASLSO WEB BANNER AD 2025.png',
        title: 'AALSO Web Banner Ad',
        description: 'This is an example of a web banner ad I created for a specific market segment.',
        category: 'Marketing & Advertising Materials',
        type: 'image'
    },
    {
        filename: 'Air_Pro_Product_Guide_and_Installation_Manual.pdf',
        title: 'Air-Pro Product Guide & Installation Manual',
        description: 'This is an example of a technical document I had to put together under the guidance of the technical engineering team.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'Butterfly_Valve_Considerations_Valve_World_October_2022.pdf',
        title: 'Butterfly Valve Considerations Article',
        description: 'This is an example of an article I worked on with a technical sales manager that was published in a trade magazine.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'Case Study Asahitec Boiler Discharge.pdf',
        title: 'Asahitec Boiler Discharge Case Study',
        description: 'During my time at Asahi/America, I have put together over 15 different case studies that are used as sales and marketing tools.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'Chemical_Resistance_With_Confidence_September_2023.pdf',
        title: 'Chemical Resistance with Confidence Article',
        description: 'This is another example of a technical article that I helped worked on with our product management team. I helped brainstorm the idea, outline, and proofread the article. When it was time to publish, I helped pull together applicable charts and images.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'Facebook Post Example.url',
        title: 'Facebook Post Example',
        description: 'Social media marketing example - click to view the Facebook post on the platform.',
        category: 'Digital & Video Content',
        type: 'url'
    },
    {
        filename: 'Grand Opening Envelope.PNG',
        title: 'Grand Opening Envelope Design',
        description: 'This is an example of an envelope I designed for a large grand opening event I planned and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Grand Opening Invite.PNG',
        title: 'Grand Opening Invitation',
        description: 'This is an example of an invitation I designed for a large grand opening event I planned and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Grand Opening Save The Date.PNG',
        title: 'Grand Opening Save the Date',
        description: 'This is an example of a save the date I designed for a large grand opening event I planned and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Grand Opening Sign.PNG',
        title: 'Grand Opening Sign',
        description: 'This is an example of a sign I designed for a large grand opening event I planned and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Grand Opening Thank You.PNG',
        title: 'Grand Opening Thank You Card',
        description: 'This is an example of a thank you card I designed for a large grand opening event I planned and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Industrial Piping Catalog.pdf',
        title: 'Industrial Piping Catalog',
        description: 'This is an example of a catalog I put together with the sales, product management, and engineering teams.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'J-Switch Logo.png',
        title: 'J-Switch Product Logo',
        description: 'This is an example of a logo I created while I was at Asahi/America.',
        category: 'Marketing & Advertising Materials',
        type: 'image'
    },
    {
        filename: 'LinkedIn ORGANIC Growth Since September 2018.PNG',
        title: 'LinkedIn Growth Analytics',
        description: 'This is an example of the organic LinkedIn company page growth I have contributed to since September 2018 using targeted content and engagement strategies.',
        category: 'Digital & Video Content',
        type: 'image'
    },
    {
        filename: 'LinkedIn Social Media Post Example.PNG',
        title: 'LinkedIn Social Media Post',
        description: 'This is an example of a social media post I created to feature one of our products.',
        category: 'Digital & Video Content',
        type: 'image'
    },
    {
        filename: 'Manifold Machine Video.url',
        title: 'Manifold Machine Video',
        description: 'This is an example of a video I independently created to showcase our new manifold machine. This video has been directly attributed to sales. Click to view on YouTube.',
        category: 'Digital & Video Content',
        type: 'url'
    },
    {
        filename: 'MAV Launch Video.url',
        title: 'Series 19 MAV Launch Video',
        description: 'This is a video that I outsourced through a video agency. I wrote and directed the entire storyboard for the video. We used the video as part of an integrated campaign for a new product launch.',
        category: 'Digital & Video Content',
        type: 'url'
    },
    {
        filename: 'PFAS & FLUOROPOYLMERS FAQS.pdf',
        title: 'PFAS & Fluoropolymers Flyer',
        description: 'This is a flyer that I created 100% independently as part of a integrated campaign focused on PFAs and fluoropolymer concerns.',
        category: 'Technical Documentation',
        type: 'pdf'
    },
    {
        filename: 'PPI Grand Opening - Formal Invite.pdf',
        title: 'PPI Grand Opening Formal Invitation',
        description: 'Besides managing Asahi/America`s annual trade show program, I have had the opportunity to execute a few internal events. The biggest event our company has ever had, was the grand opening of our Louisiana factory. This took months of planning and coordinating with multiple stakeholders. These are examples of the coordinated branding that went into the event.',
        category: 'Event & Promotional Materials',
        type: 'pdf'
    },
    {
        filename: 'PPI Invite - e-vite (794 × 1200 px).png',
        title: 'PPI Digital Invitation',
        description: 'This is an example of a digital invitation I designed for a multi-stakeholder grand opening event that I coordinated and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'PPI Save the Date - e-vite (794 × 800 px).png',
        title: 'PPI Digital Save the Date',
        description: 'This is an example of a digital save the date I designed for a multi-stakeholder grand opening event that I coordinated and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Save The Date.PNG',
        title: 'Save The Date Design',
        description: 'This is an example of a save the date I designed for a multi-stakeholder grand opening event that I coordinated and executed.',
        category: 'Event & Promotional Materials',
        type: 'image'
    },
    {
        filename: 'Texas Water 2025 Promo - WWD Magazine.pdf',
        title: 'Texas Water Trade Show (Pre-Show) Email Campaign',
        description: 'This is an example of some of the pre-show marketing efforts that we do to promote engagement at the trade shows our company participates in.',
        category: 'Event & Promotional Materials',
        type: 'pdf'
    },
    {
        filename: 'TPO Quarter Page Ad - September 2025 FINAL-01.png',
        title: 'TPO Magazine Advertisement',
        description: 'This is one example of a digital and print advertisement that I bought and created for a trade magazine.',
        category: 'Marketing & Advertising Materials',
        type: 'image'
    },
    {
        filename: 'Type-21 SST Ball Valve Video.url',
        title: 'Type-21 SST Ball Valve Video',
        description: 'This is another example of a video that I created 100% independently without a video editor or third party. Click to watch video on YouTube.',
        category: 'Digital & Video Content',
        type: 'url'
    },
    {
        filename: 'Understanding the Difference Between PFAS and Fluoropolymers - Asahi_America.pdf',
        title: 'Inner Circle Article: Understanding the Difference Between PFAS and Fluoropolymers',
        description: 'The Inner Circle is a project that I spearheaded at Asahi/America. It is a thought leadership blog that is dedicated to the engineering community. It is technically-oriented rather than sales-oriented to appeal to engineers.',
        type: 'pdf'
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

// DOM elements
let currentFilter = 'All';
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const fileViewer = document.getElementById('fileViewer');
const downloadBtn = document.getElementById('downloadBtn');
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
    
    const icon = getFileIcon(item.type);
    
    div.innerHTML = `
        <div class="portfolio-card" onclick="openFileModal('${item.filename}', '${item.title}', '${item.description}')">
            <div class="portfolio-icon">
                <i class="${icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <div class="portfolio-category">${item.category}</div>
        </div>
    `;
    
    return div;
}

// Get appropriate icon for file type
function getFileIcon(type) {
    const iconMap = {
        'pdf': 'fas fa-file-pdf',
        'image': 'fas fa-image',
        'msg': 'fas fa-envelope',
        'url': 'fas fa-external-link-alt',
        'default': 'fas fa-file'
    };
    return iconMap[type] || iconMap['default'];
}

// Open file modal
function openFileModal(filename, title, description) {
    const filePath = `Portfolio Examples/${filename}`;
    
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Set up download button
    downloadBtn.onclick = () => downloadFile(filePath, filename);
    
    // Load file content
    loadFileContent(filePath, filename);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Load file content in modal
function loadFileContent(filePath, filename) {
    fileViewer.innerHTML = '';
    
    const extension = filename.split('.').pop().toLowerCase();
    
    try {
        if (extension === 'pdf') {
            const embed = document.createElement('embed');
            embed.src = filePath;
            embed.type = 'application/pdf';
            embed.style.width = '100%';
            embed.style.height = '100%';
            fileViewer.appendChild(embed);
        } 
        else if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
            const img = document.createElement('img');
            img.src = filePath;
            img.alt = filename;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.style.objectFit = 'contain';
            fileViewer.appendChild(img);
        }
        else if (extension === 'url') {
            showUrlPreview(filename);
        }  
        else if (extension === 'msg') {
            showEmailPreview(filename);
        }
        else {
            showFilePreview(filename, extension);
        }
    } catch (error) {
        showError('Error loading file: ' + error.message);
    }
}

// Show external link interface
function showExternalLink(url, filename) {
    let linkType = 'External Content';
    let icon = 'fas fa-external-link-alt';
    let description = 'This content is hosted externally.';
    
    // Determine the type of external link
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
                <i class="${icon}"></i>
                <h3>${linkType}</h3>
                <p>${description} Click the button below to open it in a new tab.</p>
                <div class="link-preview">
                    <small>${url}</small>
                </div>
                <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                    <i class="${icon}"></i>
                    Open ${linkType}
                </button>
            </div>
        </div>
    `;
}

// Show email preview
function showEmailPreview(filename) {
    fileViewer.innerHTML = `
        <div class="email-preview">
            <div class="email-content">
                <i class="fas fa-envelope"></i>
                <h3>Email Campaign File</h3>
                <p>This is an Outlook email message file (.msg) containing an example of a targeted email campaign with A/B testing and multi-touch points.</p>
                <p><small>Download the file to view the complete email campaign in your email application.</small></p>
                <button class="btn btn-primary" onclick="downloadFile('Portfolio Examples/${filename}', '${filename}')">
                    <i class="fas fa-download"></i>
                    Download Email Campaign
                </button>
            </div>
        </div>
    `;
}

// Show URL preview and handle redirection
function showUrlPreview(filename) {
    // Since we can't use fetch() for local files due to CORS restrictions,
    // we'll use a predefined mapping for known .url files
    const urlMappings = {
        'Facebook Post Example.url': 'https://www.facebook.com/reel/1747720149397278',
        'Manifold Machine Video.url': 'https://www.youtube.com/watch?v=cIh9kUAD9ZE',
        'MAV Launch Video.url': 'https://www.youtube.com/watch?v=-cTHXMGZINo',
        'Type-21 SST Ball Valve Video.url': 'https://www.youtube.com/watch?v=e2GKIQjKxC0'
    };
    
    // Try to get the URL from our mapping
    const url = urlMappings[filename];
    
    if (url) {
        // Try to create an enhanced preview based on the URL type
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            showYouTubePreview(url, filename);
        } else if (url.includes('facebook.com')) {
            showFacebookPreview(url, filename);
        } else {
            showExternalLink(url, filename);
        }
    } else {
        // Fallback: show generic external link interface with file input option
        showUrlFileInput(filename);
    }
}

// Show YouTube video preview with embedded player
function showYouTubePreview(url, filename) {
    let videoId = '';
    
    // Extract video ID from various YouTube URL formats
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1].split('?')[0];
    }
    
    if (videoId) {
        fileViewer.innerHTML = `
            <div class="video-preview">
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        style="width: 100%; height: 400px; min-height: 300px;">
                    </iframe>
                </div>
                <div class="video-actions" style="margin-top: 15px;">
                    <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                        <i class="fab fa-youtube"></i>
                        Watch on YouTube
                    </button>
                </div>
            </div>
        `;
    } else {
        showExternalLink(url, filename);
    }
}

// Show Facebook content preview with link preview
function showFacebookPreview(url, filename) {
    let contentType = 'Facebook Post';
    let icon = 'fab fa-facebook';
    
    // Determine specific Facebook content type
    if (url.includes('/reel/')) {
        contentType = 'Facebook Reel';
        icon = 'fab fa-facebook';
    } else if (url.includes('/video/')) {
        contentType = 'Facebook Video';
        icon = 'fab fa-facebook';
    } else if (url.includes('/photo/')) {
        contentType = 'Facebook Photo';
        icon = 'fab fa-facebook';
    }
    
    fileViewer.innerHTML = `
        <div class="social-preview">
            <div class="social-content">
                <i class="${icon}"></i>
                <h3>${contentType}</h3>
                <p>This is a ${contentType.toLowerCase()} showcasing marketing content and engagement strategies.</p>
                <div class="link-preview">
                    <small>📱 ${url}</small>
                </div>
                <div class="social-actions" style="margin-top: 20px;">
                    <button class="btn btn-primary" onclick="window.open('${url}', '_blank')">
                        <i class="${icon}"></i>
                        View on Facebook
                    </button>
                </div>
                <div class="preview-note" style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <small><i class="fas fa-info-circle"></i> Click the button above to view this content directly on Facebook. You may need to log in to Facebook to view the full content.</small>
                </div>
            </div>
        </div>
    `;
}

// Show generic file preview
function showFilePreview(filename, extension) {
    fileViewer.innerHTML = `
        <div class="file-preview">
            <div class="file-content">
                <i class="fas fa-file"></i>
                <h3>File Preview</h3>
                <p>This ${extension.toUpperCase()} file can be downloaded for viewing.</p>
                <button class="btn btn-primary" onclick="downloadFile('Portfolio Examples/${filename}', '${filename}')">
                    <i class="fas fa-download"></i>
                    Click here to view content
                </button>
            </div>
        </div>
    `;
}

// Show URL file input interface when we don't have the URL mapping
function showUrlFileInput(filename) {
    fileViewer.innerHTML = `
        <div class="url-file-interface">
            <div class="url-content">
                <i class="fas fa-external-link-alt"></i>
                <h3>External Content Link</h3>
                <p>This .url file contains a link to external content. Since we're running in a local environment, 
                   we need to handle this file specially.</p>
                <div class="url-actions" style="margin-top: 20px;">
                    <button class="btn btn-primary" onclick="downloadFile('Portfolio Examples/${filename}', '${filename}')">
                        <i class="fas fa-download"></i>
                        Download URL File
                    </button>
                </div>
                <div class="url-note" style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <small><i class="fas fa-info-circle"></i> Download the .url file and double-click it to open the external content in your default browser.</small>
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
    const resumePath = 'Resume_McLeod_2025_RLP.pdf';
    
    modalTitle.textContent = 'Kristin McLeod - Professional Resume';
    modalDescription.textContent = 'Comprehensive professional resume showcasing experience in technical marketing, communications, and project management within the industrial engineering sector.';
    
    // Set up download button for resume
    downloadBtn.onclick = () => downloadFile(resumePath, 'Resume_McLeod_2025_RLP.pdf');
    
    // Load resume PDF
    fileViewer.innerHTML = '';
    const embed = document.createElement('embed');
    embed.src = resumePath;
    embed.type = 'application/pdf';
    embed.style.width = '100%';
    embed.style.height = '100%';
    fileViewer.appendChild(embed);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
