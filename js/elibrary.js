document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar functionality
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

    // Toggle sidebar
    if (btn) {
        btn.onclick = function() {
            sidebar.classList.toggle("active");
            if(sidebar.classList.contains("active")) {
                btn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                btn.classList.replace("bx-menu-alt-right", "bx-menu");
                
                // Close all dropdowns immediately when sidebar collapses
                document.querySelectorAll(".dropdown").forEach(dropdown => {
                    dropdown.classList.remove("open");
                });
            }
        };
    }
    
    // Tooltip functionality
    const sidebarItems = document.querySelectorAll(".sidebar ul li");
        
    sidebarItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!document.querySelector(".sidebar").classList.contains("active")) {
                const tooltip = item.querySelector(".tooltip");
                if (tooltip) {
                    // CSS handles positioning
                }
            }
        });
    });

    // Dropdown functionality
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get parent li element
            const parentLi = this.parentElement;
            
            // Check if it's already open
            const isOpen = parentLi.classList.contains("open");
            
            // Close all other dropdowns first
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== parentLi) {
                    dropdown.classList.remove("open");
                }
            });
            
            // Toggle the clicked dropdown immediately
            if (isOpen) {
                parentLi.classList.remove("open");
            } else {
                parentLi.classList.add("open");
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".dropdown-trigger") && !e.target.closest(".sub-menu")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("open");
            });
        }
    });

    // Sample data for e-library resources
    const resourcesData = [
        {
            id: 1,
            title: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            type: "ebook",
            subject: "cs",
            year: "2009",
            accessed: "2023-04-15",
            iconClass: "bx bxs-book",
            description: "A comprehensive introduction to algorithms and their analysis."
        },
        {
            id: 2,
            title: "Computer Networks: A Systems Approach",
            author: "Larry L. Peterson",
            type: "ebook",
            subject: "cs",
            year: "2011",
            accessed: "2023-04-10",
            iconClass: "bx bxs-book",
            description: "Covers fundamental concepts of computer networking."
        },
        {
            id: 3,
            title: "IEEE Transactions on Software Engineering",
            author: "IEEE",
            type: "journal",
            subject: "cs",
            year: "2023",
            accessed: "2023-04-18",
            iconClass: "bx bx-news",
            description: "Academic journal focusing on software engineering research."
        },
        {
            id: 4,
            title: "Advances in Machine Learning",
            author: "ACM Digital Library",
            type: "journal",
            subject: "cs",
            year: "2022",
            accessed: "2023-04-05",
            iconClass: "bx bx-news",
            description: "Latest advances in machine learning algorithms and applications."
        },
        {
            id: 5,
            title: "Deep Learning for Computer Vision",
            author: "Goodfellow, Bengio, Courville",
            type: "ebook",
            subject: "cs",
            year: "2016",
            accessed: "2023-04-12",
            iconClass: "bx bxs-book",
            description: "Explores deep learning techniques for computer vision tasks."
        },
        {
            id: 6,
            title: "ACM Computing Surveys",
            author: "ACM",
            type: "journal",
            subject: "cs",
            year: "2023",
            accessed: "2023-04-20",
            iconClass: "bx bx-news",
            description: "Comprehensive surveys on various computer science topics."
        },
        {
            id: 7,
            title: "IEEE Xplore Digital Library",
            author: "IEEE",
            type: "database",
            subject: "electronics",
            year: "2023",
            accessed: "2023-04-21",
            iconClass: "bx bx-data",
            description: "Collection of IEEE research papers and standards."
        },
        {
            id: 8,
            title: "ScienceDirect",
            author: "Elsevier",
            type: "database",
            subject: "all",
            year: "2023",
            accessed: "2023-04-19",
            iconClass: "bx bx-data",
            description: "Multi-disciplinary database of scientific research."
        },
        {
            id: 9,
            title: "Introduction to Control Systems",
            author: "Richard Dorf",
            type: "ebook",
            subject: "electronics",
            year: "2017",
            accessed: "2023-04-14",
            iconClass: "bx bxs-book",
            description: "Fundamentals of control systems engineering."
        },
        {
            id: 10,
            title: "Manufacturing Processes",
            author: "J.P. Kaushish",
            type: "ebook",
            subject: "mechanical",
            year: "2010",
            accessed: "2023-04-08",
            iconClass: "bx bxs-book",
            description: "Overview of modern manufacturing processes."
        },
        {
            id: 11,
            title: "Journal of Civil Engineering",
            author: "ASCE",
            type: "journal",
            subject: "civil",
            year: "2022",
            accessed: "2023-04-11",
            iconClass: "bx bx-news",
            description: "Research in civil engineering and infrastructure."
        },
        {
            id: 12,
            title: "Springer Link",
            author: "Springer",
            type: "database",
            subject: "all",
            year: "2023",
            accessed: "2023-04-17",
            iconClass: "bx bx-data",
            description: "Comprehensive database of scientific publications."
        }
    ];

    // User's saved resources (persisted in localStorage)
    let savedResources = loadSavedResources();

    // Function to create resource cards
    function createResourceCards(resources, container) {
        const cardsContainer = document.querySelector(`#${container} .resource-cards`);
        if (!cardsContainer) {
            console.error(`Container #${container} .resource-cards not found`);
            return;
        }
        
        cardsContainer.innerHTML = '';

        if (resources.length === 0) {
            cardsContainer.innerHTML = '<p class="no-data">No resources found</p>';
            return;
        }

        resources.forEach(resource => {
            const card = document.createElement('div');
            card.className = 'resource-card';
            
            // Check if the resource is saved
            const isSaved = savedResources.includes(parseInt(resource.id));
            const saveIconClass = isSaved ? 'bx bxs-bookmark' : 'bx bx-bookmark';
            const saveText = isSaved ? 'Saved' : 'Save';
            
            card.innerHTML = `
                <div class="resource-img">
                    <i class='${resource.iconClass}'></i>
                </div>
                <div class="resource-info">
                    <h3 class="resource-title">${resource.title}</h3>
                    <p class="resource-author">${resource.author}</p>
                    <div class="resource-meta">
                        <span>${resource.year}</span>
                        <span>${getTypeDisplay(resource.type)}</span>
                        <span>${getSubjectDisplay(resource.subject)}</span>
                    </div>
                </div>
                <div class="resource-actions">
                    <button class="action-btn view-btn" data-id="${resource.id}">
                        <i class='bx bx-show'></i> View
                    </button>
                    <button class="action-btn save-btn ${isSaved ? 'saved' : ''}" data-id="${resource.id}">
                        <i class='${saveIconClass}'></i> ${saveText}
                    </button>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

        // Add event listeners to buttons
        const viewButtons = cardsContainer.querySelectorAll('.view-btn');
        const saveButtons = cardsContainer.querySelectorAll('.save-btn');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const resourceId = parseInt(this.getAttribute('data-id'));
                viewResource(resourceId);
            });
        });
        
        saveButtons.forEach(button => {
            button.addEventListener('click', function() {
                const resourceId = parseInt(this.getAttribute('data-id'));
                toggleSaveResource(resourceId, this);
            });
        });
    }

    // Format resource type for display
    function getTypeDisplay(type) {
        switch(type) {
            case 'ebook':
                return 'E-Book';
            case 'journal':
                return 'Journal';
            case 'paper':
                return 'Research Paper';
            case 'database':
                return 'Database';
            default:
                return type.charAt(0).toUpperCase() + type.slice(1);
        }
    }
    
    // Format subject for display
    function getSubjectDisplay(subject) {
        switch(subject) {
            case 'cs':
                return 'Computer Science';
            case 'electronics':
                return 'Electronics';
            case 'mechanical':
                return 'Mechanical Eng.';
            case 'civil':
                return 'Civil Eng.';
            case 'all':
                return 'Multiple Subjects';
            default:
                return subject.charAt(0).toUpperCase() + subject.slice(1);
        }
    }

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.style.display = 'none');
            
            // Show the selected tab content
            const tabId = this.getAttribute('data-tab');
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.style.display = 'block';
                
                // If navigating to saved resources tab, reload the saved resources
                if (tabId === 'savedResources') {
                    displaySavedResources();
                }
            }
        });
    });

    // Filter and search functionality
    const resourceTypeFilter = document.getElementById('resourceTypeFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const searchInput = document.getElementById('searchResources');
    const sortBySelect = document.getElementById('sortByFilter');

    resourceTypeFilter?.addEventListener('change', filterResources);
    subjectFilter?.addEventListener('change', filterResources);
    sortBySelect?.addEventListener('change', filterResources);
    
    searchInput?.addEventListener('input', debounce(filterResources, 300));

    // Debounce function to limit how often the search function runs
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        }
    }

    // Function to filter and display resources
    function filterResources() {
        const typeValue = resourceTypeFilter?.value || 'all';
        const subjectValue = subjectFilter?.value || 'all';
        const searchValue = searchInput?.value.toLowerCase() || '';
        const sortBy = sortBySelect?.value || 'newest';
        
        let filteredResources = resourcesData.filter(resource => {
            // Filter by type
            const typeMatch = typeValue === 'all' || resource.type === typeValue;
            
            // Filter by subject
            const subjectMatch = subjectValue === 'all' || resource.subject === subjectValue;
            
            // Filter by search term
            const searchMatch = 
                resource.title.toLowerCase().includes(searchValue) || 
                resource.author.toLowerCase().includes(searchValue);
            
            return typeMatch && subjectMatch && searchMatch;
        });
        
        // Sort results
        filteredResources = sortResources(filteredResources, sortBy);
        
        // Display the filtered resources
        createResourceCards(filteredResources, 'allResources');
        
        // Update filter count
        const countElement = document.getElementById('resourceCount');
        if (countElement) {
            countElement.textContent = filteredResources.length;
        }
    }
    
    // Sort resources based on selected criterion
    function sortResources(resources, sortBy) {
        switch(sortBy) {
            case 'newest':
                return [...resources].sort((a, b) => parseInt(b.year) - parseInt(a.year));
            case 'oldest':
                return [...resources].sort((a, b) => parseInt(a.year) - parseInt(b.year));
            case 'title':
                return [...resources].sort((a, b) => a.title.localeCompare(b.title));
            case 'author':
                return [...resources].sort((a, b) => a.author.localeCompare(b.author));
            case 'recently_accessed':
                return [...resources].sort((a, b) => new Date(b.accessed) - new Date(a.accessed));
            default:
                return resources;
        }
    }
    
    // Function to view resource details
    function viewResource(id) {
        const resource = resourcesData.find(r => r.id === id);
        if (!resource) {
            showNotification('Resource not found', 'error');
            return;
        }
        
        // Open modal with resource details
        const modal = document.getElementById('resourceModal') || createResourceModal();
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <span class="close-modal">&times;</span>
            <div class="resource-detail">
                <div class="resource-header">
                    <i class='${resource.iconClass} resource-detail-icon'></i>
                    <h2>${resource.title}</h2>
                </div>
                <div class="resource-body">
                    <p><strong>Author:</strong> ${resource.author}</p>
                    <p><strong>Type:</strong> ${getTypeDisplay(resource.type)}</p>
                    <p><strong>Subject:</strong> ${getSubjectDisplay(resource.subject)}</p>
                    <p><strong>Year:</strong> ${resource.year}</p>
                    <p><strong>Last Accessed:</strong> ${formatDate(resource.accessed)}</p>
                    <p><strong>Description:</strong> ${resource.description || 'No description available.'}</p>
                </div>
                <div class="resource-footer">
                    <button class="btn primary-btn">Download</button>
                    <button class="btn secondary-btn toggle-save-btn" data-id="${resource.id}">
                        ${savedResources.includes(id) ? 'Remove from Saved' : 'Save Resource'}
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners to modal buttons
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        
        const toggleSaveBtn = modal.querySelector('.toggle-save-btn');
        toggleSaveBtn.addEventListener('click', function() {
            const resourceId = parseInt(this.getAttribute('data-id'));
            toggleSaveResource(resourceId);
            
            // Update the button text
            this.textContent = savedResources.includes(resourceId) ? 'Remove from Saved' : 'Save Resource';
        });
        
        // Show the modal
        modal.style.display = 'block';
        
        // Update access timestamp
        resource.accessed = new Date().toISOString().split('T')[0];
    }
    
    // Create the modal if it doesn't exist
    function createResourceModal() {
        const modal = document.createElement('div');
        modal.id = 'resourceModal';
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <!-- Content will be dynamically inserted -->
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal when clicking outside of content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        return modal;
    }
    
    // Format date for display
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
    
    // Toggle save/unsave resource
    function toggleSaveResource(id, buttonElement) {
        const index = savedResources.indexOf(id);
        
        if (index === -1) {
            // Save the resource
            savedResources.push(id);
            showNotification('Resource saved successfully!', 'success');
        } else {
            // Unsave the resource
            savedResources.splice(index, 1);
            showNotification('Resource removed from saved items', 'info');
        }
        
        // Update localStorage
        saveSavedResources();
        
        // Update button appearance if a button element was provided
        if (buttonElement) {
            const isSaved = savedResources.includes(id);
            buttonElement.innerHTML = isSaved ? 
                '<i class="bx bxs-bookmark"></i> Saved' : 
                '<i class="bx bx-bookmark"></i> Save';
            
            if (isSaved) {
                buttonElement.classList.add('saved');
            } else {
                buttonElement.classList.remove('saved');
            }
        }
        
        // Refresh saved resources tab if it's currently visible
        if (document.getElementById('savedResources').style.display === 'block') {
            displaySavedResources();
        }
    }
    
    // Save resources to localStorage
    function saveSavedResources() {
        localStorage.setItem('savedResources', JSON.stringify(savedResources));
    }
    
    // Load saved resources from localStorage
    function loadSavedResources() {
        const saved = localStorage.getItem('savedResources');
        return saved ? JSON.parse(saved) : [];
    }
    
    // Display saved resources
    function displaySavedResources() {
        const savedResourcesList = resourcesData.filter(resource => 
            savedResources.includes(resource.id)
        );
        
        createResourceCards(savedResourcesList, 'savedResources');
        
        // Update saved count
        const countElement = document.getElementById('savedCount');
        if (countElement) {
            countElement.textContent = savedResourcesList.length;
        }
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class='bx ${getNotificationIcon(type)}'></i>
                <span>${message}</span>
            </div>
            <button class="close-notification">
                <i class='bx bx-x'></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Add close button functionality
        const closeBtn = notification.querySelector('.close-notification');
        closeBtn.addEventListener('click', () => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // Get appropriate icon for notification type
    function getNotificationIcon(type) {
        switch(type) {
            case 'success':
                return 'bx-check-circle';
            case 'error':
                return 'bx-error-circle';
            case 'warning':
                return 'bx-error';
            case 'info':
            default:
                return 'bx-info-circle';
        }
    }
    
    // Initialize the app
    function initApp() {
        // Show all resources initially
        filterResources();
        
        // Display saved resources
        displaySavedResources();
        
        // Set first tab as active
        const firstTabBtn = document.querySelector('.tab-btn');
        if (firstTabBtn) {
            firstTabBtn.click();
        }
    }
    
    // Start the application
    initApp();
});