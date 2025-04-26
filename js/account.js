document.addEventListener("DOMContentLoaded", function() {
    // Sidebar toggle functionality
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

    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-nav a');
    const tabContents = document.querySelectorAll('.tab');

    // Initialize tabs - show the active tab only
    function initializeTabs() {
        // Hide all tabs except the active one
        tabContents.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Get active tab link
        const activeTabLink = document.querySelector('.tab-item.active a');
        if (activeTabLink) {
            const targetId = activeTabLink.getAttribute('href');
            const targetTab = document.querySelector(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        } else if (tabContents[0]) {
            // If no active tab, show the first one
            tabContents[0].classList.add('active');
            if (tabLinks[0]) {
                tabLinks[0].parentElement.classList.add('active');
            }
        }
    }

    // Set up tab click events
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and links
            tabLinks.forEach(l => l.parentElement.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked link
            this.parentElement.classList.add('active');
            
            // Show corresponding tab content
            const targetId = this.getAttribute('href');
            const targetTab = document.querySelector(targetId);
            if (targetTab) {
                targetTab.classList.add('active');
                
                // Scroll to tab content with smooth behavior
                targetTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Initialize tabs on page load
    initializeTabs();

    // Handle hash changes for direct linking to tabs
    function handleHashChange() {
        const hash = window.location.hash;
        if (hash) {
            const targetLink = document.querySelector(`.tab-nav a[href="${hash}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    }

    // Check for hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
});