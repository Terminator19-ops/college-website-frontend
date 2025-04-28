document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

    // Toggle sidebar with improved handling
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

    const sidebarItems = document.querySelectorAll(".sidebar ul li");
    
    sidebarItems.forEach(item => {
        // We'll let CSS handle the positioning using transform:translateY
        // No need for manual positioning calculations
        item.addEventListener("mouseenter", () => {
            // Just ensure tooltips only show when sidebar is collapsed
            if (!document.querySelector(".sidebar").classList.contains("active")) {
                const tooltip = item.querySelector(".tooltip");
                if (tooltip) {
                    // We'll let CSS handle positioning
                }
            }
        });
    });

    // Improved dropdown functionality for smoother animations
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
});

// Add to home.js

// Import the announcements from announcements.js
// This is a simplified approach - in a production environment you might use modules or a backend API
function displayRecentAnnouncements() {
    // Get reference to announcements box
    const announcementsBox = document.querySelector('.announcements-box');
    if (!announcementsBox) return;
    
    // Clear existing announcements except the heading
    const heading = announcementsBox.querySelector('h3');
    announcementsBox.innerHTML = '';
    announcementsBox.appendChild(heading);
    
    // Get recent announcements from announcements array (first 3)
    // In a real app, this would come from an API or shared data source
    const recentAnnouncements = window.announcements ? 
        window.announcements.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3) :
        [
            {
                title: "End Semester Examination Schedule",
                content: "End Semester Examinations for the current semester will begin on May 1, 2025.",
                date: "2025-04-01"
            },
            {
                title: "Campus Placement Drive - Amazon",
                content: "Amazon will be conducting a campus placement drive on April 15, 2025.",
                date: "2025-04-02"
            },
            {
                title: "Fee Payment Reminder - Final Notice",
                content: "This is a final reminder for students who have not paid their semester fees.",
                date: "2025-04-08"
            }
        ];
    
    // Create announcement elements
    recentAnnouncements.forEach(announcement => {
        const announcementDiv = document.createElement('div');
        announcementDiv.className = 'announcement';
        
        // Format date
        const formattedDate = new Date(announcement.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        announcementDiv.innerHTML = `
            <a href="announcements.html" class="announcement-title">
                <h4>${announcement.title}</h4>
            </a>
            <p class="announcement-date">${formattedDate}</p>
            <p>${announcement.content.substring(0, 100)}${announcement.content.length > 100 ? '...' : ''}</p>
        `;
        
        announcementsBox.appendChild(announcementDiv);
    });
    
    // Add "View All" button
    const viewAllContainer = document.createElement('div');
    viewAllContainer.className = 'view-all-container';
    viewAllContainer.innerHTML = `
        <a href="announcements.html" class="view-all-btn">
            <i class='bx bx-right-arrow-alt'></i> View All Announcements
        </a>
    `;
    
    announcementsBox.appendChild(viewAllContainer);
}

// Call this function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Initialize announcements
    displayRecentAnnouncements();
});