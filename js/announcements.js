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
            
            // Toggle the clicked dropdown
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

    // Sample announcements data
    const announcements = [
        {
            id: 1,
            title: "End Semester Examination Schedule",
            content: "End Semester Examinations for the current semester will begin on May 1, 2025. The detailed schedule has been uploaded to the examination portal. Please ensure all course registrations and fee payments are complete before April 15, 2025 to avoid any issues.",
            date: "2025-04-01",
            course: "All Courses",
            courseCode: "ALL",
            type: "examination",
            isUrgent: true,
            isUnread: true,
            attachments: [
                { name: "Exam_Schedule.pdf", url: "#" },
                { name: "Exam_Guidelines.pdf", url: "#" }
            ]
        },
        {
            id: 2,
            title: "Introduction to Programming - Assignment 3 Due Date Extended",
            content: "Due to the technical issues with the submission portal, the deadline for Assignment 3 has been extended to April 10, 2025. Please ensure you submit your work before the new deadline. The assignment requires implementing a binary search tree and its operations in Python.",
            date: "2025-04-03",
            course: "Introduction to Programming",
            courseCode: "CSE101",
            type: "academic",
            isUrgent: false,
            isUnread: true,
            attachments: [
                { name: "Assignment_Details.pdf", url: "#" }
            ]
        },
        {
            id: 3,
            title: "Campus Placement Drive - Amazon",
            content: "Amazon will be conducting a campus placement drive on April 15, 2025. Eligible students from Computer Science, Electronics, and Electrical Engineering departments can register through the placement portal. The minimum CGPA requirement is 7.5.",
            date: "2025-04-02",
            course: "All Courses",
            courseCode: "ALL",
            type: "placement",
            isUrgent: true,
            isUnread: false,
            attachments: [
                { name: "Amazon_JD.pdf", url: "#" },
                { name: "Registration_Process.pdf", url: "#" }
            ]
        },
        {
            id: 4,
            title: "Technical Symposium - TechnoVision 2025",
            content: "The annual technical symposium, TechnoVision 2025, will be held from April 20-22, 2025. Various events including coding competitions, paper presentations, and workshops have been planned. Register before April 15 to avail early bird discounts.",
            date: "2025-03-25",
            course: "All Courses",
            courseCode: "ALL",
            type: "event",
            isUrgent: false,
            isUnread: false,
            attachments: [
                { name: "Event_Brochure.pdf", url: "#" }
            ]
        },
        {
            id: 5,
            title: "Linear Algebra - Mid-Term Test Announcement",
            content: "The mid-term test for Linear Algebra will be conducted on April 12, 2025, from 10:00 AM to 12:00 PM. The test will cover all topics taught until April 5. Please bring your university ID cards and necessary stationery.",
            date: "2025-04-05",
            course: "Linear Algebra",
            courseCode: "MAT201",
            type: "examination",
            isUrgent: false,
            isUnread: true,
            attachments: []
        },
        {
            id: 6,
            title: "Quantum Mechanics - Lecture Rescheduled",
            content: "The Quantum Mechanics lecture scheduled for April 8, 2025 has been rescheduled to April 9, 2025 from 2:00 PM to 4:00 PM in Hall 302 due to faculty commitments. Students are requested to make a note of this change. The topics to be covered remain the same as mentioned in the course outline.",
            date: "2025-04-06",
            course: "Quantum Mechanics",
            courseCode: "PHY301",
            type: "academic",
            isUrgent: false,
            isUnread: true,
            attachments: []
        },
        {
            id: 7,
            title: "Guest Lecture by Dr. Jane Smith from MIT",
            content: "We're pleased to announce that Dr. Jane Smith, Professor of Computer Science at MIT, will be delivering a guest lecture on 'Advances in Quantum Computing' on April 18, 2025 from 10:00 AM to 12:00 PM in the Main Auditorium. Attendance is mandatory for all Computer Science and Physics students. Others are welcome to attend subject to availability of seats.",
            date: "2025-04-04",
            course: "All Courses",
            courseCode: "ALL",
            type: "academic",
            isUrgent: false,
            isUnread: true,
            attachments: [
                { name: "Speaker_Profile.pdf", url: "#" }
            ]
        },
        {
            id: 8,
            title: "Technical Writing - Term Paper Guidelines",
            content: "The guidelines for the Technical Writing term paper have been updated. The word limit has been increased to 3000 words and the submission deadline extended to May 5, 2025. Please refer to the attached document for detailed formatting requirements and grading criteria. For any clarifications, contact your course instructor.",
            date: "2025-04-03",
            course: "Technical Writing",
            courseCode: "ENG202",
            type: "academic",
            isUrgent: false,
            isUnread: false,
            attachments: [
                { name: "Term_Paper_Guidelines.pdf", url: "#" }
            ]
        },
        {
            id: 9,
            title: "Campus Internet Maintenance",
            content: "The campus WiFi network will be undergoing maintenance on Sunday, April 13, 2025 from 2:00 AM to 6:00 AM. During this period, internet services across the campus will be unavailable. This is part of our scheduled network infrastructure upgrade. We apologize for any inconvenience caused.",
            date: "2025-04-08",
            course: "All Courses",
            courseCode: "ALL",
            type: "event",
            isUrgent: false,
            isUnread: true,
            attachments: []
        },
        {
            id: 10,
            title: "Microsoft Recruitment Drive - Pre-placement Talk",
            content: "Microsoft will be conducting a pre-placement talk on April 20, 2025 from 5:00 PM to 6:30 PM in the College Auditorium. Students with a CGPA of 8.0 and above from Computer Science, Electronics, and Information Technology departments are eligible to attend. Please bring your university ID card for entry.",
            date: "2025-04-10",
            course: "All Courses",
            courseCode: "ALL",
            type: "placement",
            isUrgent: true,
            isUnread: true,
            attachments: [
                { name: "Microsoft_Profile.pdf", url: "#" },
                { name: "Eligibility_Criteria.pdf", url: "#" }
            ]
        },
        {
            id: 11,
            title: "Fee Payment Reminder - Final Notice",
            content: "This is a final reminder for students who have not paid their semester fees. The deadline for payment is April 15, 2025. Students who fail to pay by the deadline will not be allowed to sit for the end semester examinations. For any fee-related queries, please contact the Accounts Office.",
            date: "2025-04-08",
            course: "All Courses",
            courseCode: "ALL",
            type: "academic",
            isUrgent: true,
            isUnread: true,
            attachments: []
        },
        {
            id: 12,
            title: "Cultural Club - Annual Fest Auditions",
            content: "Auditions for the Annual Cultural Fest 'Rhythms 2025' will begin on April 25, 2025. Students interested in participating in music, dance, drama, or literary events can register online through the student portal or in person at the Cultural Club office between 4:00 PM and 6:00 PM on weekdays.",
            date: "2025-04-12",
            course: "All Courses",
            courseCode: "ALL",
            type: "event",
            isUrgent: false,
            isUnread: false,
            attachments: [
                { name: "Event_Categories.pdf", url: "#" },
                { name: "Audition_Schedule.pdf", url: "#" }
            ]
        },
        {
            id: 13,
            title: "Introduction to Programming - Mock Test Portal Open",
            content: "The mock test portal for Introduction to Programming is now open and will remain accessible until April 20, 2025. Students are encouraged to attempt the mock tests to prepare for the final examination. Each mock test consists of 25 multiple-choice questions and has a time limit of 30 minutes.",
            date: "2025-04-10",
            course: "Introduction to Programming",
            courseCode: "CSE101",
            type: "examination",
            isUrgent: false,
            isUnread: false,
            attachments: []
        },
        {
            id: 14,
            title: "Library Extended Hours During Exam Period",
            content: "The university library will extend its operating hours during the examination period from April 25 to May 15, 2025. The library will be open from 7:00 AM to 12:00 AM on weekdays and 8:00 AM to 10:00 PM on weekends. The extended hours are to provide students with additional study space and resources during exams.",
            date: "2025-04-15",
            course: "All Courses",
            courseCode: "ALL",
            type: "academic",
            isUrgent: false,
            isUnread: true,
            attachments: [
                { name: "Library_Schedule.pdf", url: "#" }
            ]
        },
        {
            id: 15,
            title: "Google Cloud Workshop - Registration Open",
            content: "The Computer Science Department is organizing a two-day workshop on Google Cloud Platform on April 22-23, 2025. The workshop will cover GCP fundamentals, compute services, storage solutions, and machine learning APIs. Participants will receive a certificate of completion. Registration is open until April 18, 2025.",
            date: "2025-04-14",
            course: "All Courses",
            courseCode: "ALL",
            type: "event",
            isUrgent: false,
            isUnread: true,
            attachments: [
                { name: "Workshop_Details.pdf", url: "#" },
                { name: "Registration_Link.pdf", url: "#" }
            ]
        }
    ];

    // Filter elements
    const typeFilter = document.getElementById("announcement-type");
    const courseFilter = document.getElementById("course-filter");
    const dateFilter = document.getElementById("date-filter");
    const searchBtn = document.getElementById("search-btn");
    const announcementsContainer = document.getElementById("announcements-list");
    const noAnnouncementsMessage = document.getElementById("no-announcements-message");
    
    // Load saved filters from localStorage
    function loadSavedFilters() {
        if (localStorage.getItem('announcementFilters')) {
            const savedFilters = JSON.parse(localStorage.getItem('announcementFilters'));
            
            if (typeFilter && savedFilters.type) {
                typeFilter.value = savedFilters.type;
            }
            
            if (courseFilter && savedFilters.course) {
                courseFilter.value = savedFilters.course;
            }
            
            if (dateFilter && savedFilters.date) {
                dateFilter.value = savedFilters.date;
            }
        }
    }
    
    // Save current filters to localStorage
    function saveFilters() {
        const currentFilters = {
            type: typeFilter.value,
            course: courseFilter.value,
            date: dateFilter.value
        };
        
        localStorage.setItem('announcementFilters', JSON.stringify(currentFilters));
    }
    
    // Apply filters and update announcements list
    function updateAnnouncements() {
        // Save current filters
        saveFilters();
        
        // Update filter indicators
        updateFilterIndicators();
        
        // Get filter values
        const typeValue = typeFilter.value;
        const courseValue = courseFilter.value;
        const dateValue = dateFilter.value;
        
        // Filter announcements based on selected values
        let filteredAnnouncements = announcements.filter(announcement => {
            // Type filter
            if (typeValue !== 'all' && announcement.type !== typeValue) {
                return false;
            }
            
            // Course filter
            if (courseValue !== 'all' && announcement.courseCode !== courseValue && announcement.courseCode !== 'ALL') {
                return false;
            }
            
            // Date filter
            if (dateValue !== 'all') {
                const announcementDate = new Date(announcement.date);
                const today = new Date();
                
                switch(dateValue) {
                    case 'today':
                        if (announcementDate.toDateString() !== today.toDateString()) {
                            return false;
                        }
                        break;
                    case 'week':
                        const weekAgo = new Date();
                        weekAgo.setDate(today.getDate() - 7);
                        if (announcementDate < weekAgo) {
                            return false;
                        }
                        break;
                    case 'month':
                        const monthAgo = new Date();
                        monthAgo.setMonth(today.getMonth() - 1);
                        if (announcementDate < monthAgo) {
                            return false;
                        }
                        break;
                    case 'semester':
                        const semesterStart = new Date('2025-01-01');
                        if (announcementDate < semesterStart) {
                            return false;
                        }
                        break;
                }
            }
            
            return true;
        });
        
        // Clear current announcements
        announcementsContainer.innerHTML = '';
        
        // Show message if no announcements match filters
        if (filteredAnnouncements.length === 0) {
            noAnnouncementsMessage.style.display = 'block';
            return;
        } else {
            noAnnouncementsMessage.style.display = 'none';
        }
        
        // Sort announcements: urgent first, then by date (newest first)
        filteredAnnouncements.sort((a, b) => {
            if (a.isUrgent !== b.isUrgent) {
                return a.isUrgent ? -1 : 1;
            }
            return new Date(b.date) - new Date(a.date);
        });
        
        // Render filtered announcements
        filteredAnnouncements.forEach(announcement => {
            const card = document.createElement('div');
            card.className = `announcement-card ${announcement.isUnread ? 'unread' : ''}`;
            
            // Format date
            const announcementDate = new Date(announcement.date);
            const formattedDate = announcementDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
            
            // Urgent badge
            let urgentBadge = '';
            if (announcement.isUrgent) {
                urgentBadge = '<div class="urgent-badge">URGENT</div>';
            }
            
            card.innerHTML = `
                ${urgentBadge}
                <div class="announcement-header">
                    <h3 class="announcement-title">${announcement.title}</h3>
                </div>
                <div class="announcement-tag tag-${announcement.type}">${announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}</div>
                <div class="announcement-meta">
                    <div class="announcement-date">
                        <i class='bx bx-calendar'></i> ${formattedDate}
                    </div>
                    <div class="announcement-course">
                        <i class='bx bx-book-open'></i> ${announcement.course}
                    </div>
                </div>
                <div class="announcement-content">
                    ${announcement.content}
                </div>
                <div class="announcement-footer">
                    <div class="announcement-attachments">
                        ${announcement.attachments.map(attachment => `
                            <a href="${attachment.url}" class="attachment-link">
                                <i class='bx bx-file'></i> ${attachment.name}
                            </a>
                        `).join('')}
                    </div>
                    <div class="announcement-actions">
                        ${announcement.isUnread ? 
                            `<button class="action-button mark-read" data-id="${announcement.id}">
                                <i class='bx bx-check'></i> Mark as Read
                            </button>` : 
                            `<button class="action-button mark-read" data-id="${announcement.id}" disabled>
                                <i class='bx bx-check-double'></i> Read
                            </button>`
                        }
                        <button class="action-button bookmark" data-id="${announcement.id}">
                            <i class='bx bx-bookmark'></i> Save
                        </button>
                    </div>
                </div>
            `;
            
            announcementsContainer.appendChild(card);
        });
        
        // Add event listeners to mark as read buttons
        document.querySelectorAll('.mark-read:not([disabled])').forEach(button => {
            button.addEventListener('click', function() {
                const announcementId = parseInt(this.getAttribute('data-id'));
                const index = announcements.findIndex(a => a.id === announcementId);
                if (index !== -1) {
                    announcements[index].isUnread = false;
                    // Find the parent card and remove the unread class
                    const card = this.closest('.announcement-card');
                    if (card) {
                        card.classList.remove('unread');
                    }
                    this.innerHTML = '<i class="bx bx-check-double"></i> Read';
                    this.disabled = true;
                }
            });
        });
        
        // Add event listeners to bookmark buttons
        document.querySelectorAll('.bookmark').forEach(button => {
            button.addEventListener('click', function() {
                const announcementId = parseInt(this.getAttribute('data-id'));
                // Toggle bookmark status
                this.innerHTML = this.innerHTML.includes('bx-bookmark') ? 
                    '<i class="bx bxs-bookmark"></i> Saved' : 
                    '<i class="bx bx-bookmark"></i> Save';
            });
        });
        
        // Update counter
        updateAnnouncementCounter(filteredAnnouncements.length);
    }
    
    // Update filter indicators to show which filters are active
    function updateFilterIndicators() {
        // Reset all indicators first
        document.querySelectorAll('.filter-label').forEach(label => {
            label.classList.remove('active-filter');
        });
        
        // Check which filters are active and update indicators
        if (typeFilter.value !== 'all') {
            typeFilter.previousElementSibling.classList.add('active-filter');
        }
        
        if (courseFilter.value !== 'all') {
            courseFilter.previousElementSibling.classList.add('active-filter');
        }
        
        if (dateFilter.value !== 'all') {
            dateFilter.previousElementSibling.classList.add('active-filter');
        }
    }
    
    // Update announcement counter
    function updateAnnouncementCounter(count) {
        const counterElem = document.getElementById('announcement-counter');
        if (counterElem) {
            counterElem.textContent = `Showing ${count} announcement${count !== 1 ? 's' : ''}`;
        }
    }
    
    // Reset all filters
    function resetFilters() {
        if (typeFilter) typeFilter.value = 'all';
        if (courseFilter) courseFilter.value = 'all';
        if (dateFilter) dateFilter.value = 'all';
        
        // Clear localStorage
        localStorage.removeItem('announcementFilters');
        
        // Update UI
        updateAnnouncements();
    }

    // Initialize the announcements list
    if (typeFilter && courseFilter && dateFilter) {
        // Load saved filters
        loadSavedFilters();
        
        // Add event listeners for filter changes
        typeFilter.addEventListener('change', updateAnnouncements);
        courseFilter.addEventListener('change', updateAnnouncements);
        dateFilter.addEventListener('change', updateAnnouncements);
        
        // Keep the search button for accessibility
        if (searchBtn) {
            searchBtn.addEventListener('click', updateAnnouncements);
        }
        
        // Add reset button functionality
        const resetBtn = document.getElementById('reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetFilters);
        }
        
        // Initial load of announcements
        updateAnnouncements();
    }
});