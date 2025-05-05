document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    
    // Toggle sidebar
    if (btn) {
        btn.onclick = function() {
            sidebar.classList.toggle("active");
            refreshCourseLayout();
        };
    }
    
    // Dropdown functionality for sidebar
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

    // Course data by semester
    const coursesBySemester = {
        "1": [
            {code: "22ADM101", name: "Foundations of Indian Heritage", credits: "4", professor: "Dr. Smita Sail", slot: "B"},
            {code: "22AIE101", name: "Problem Solving & C Programming", credits: "3", professor: "Dr. Sajitha Krishnan", slot: "H"},
            {code: "22AIE102", name: "Elements of Computing System", credits: "3", professor: "Dr. Rajesh Kumar", slot: "J"},
            {code: "22AVP103", name: "Mastery Over Mind", credits: "4", professor: "Dr. Tanashree Redji", slot: "K"},
            {code: "22MAT110", name: "Mathematics for Computing", credits: "2", professor: "Dr. Sunil Mathew", slot: "L"},
            {code: "22MAT121", name: "Discrete Mathematics", credits: "3", professor: "Dr. Priya Mehta", slot: "M"},
            {code: "22PHY106", name: "Computational Physics", credits: "3", professor: "Dr. Arun Sharma", slot: "P"},
            {code: "19ENG111", name: "Technical Communication", credits: "3", professor: "Dr. Meera Krishnan", slot: "T"},
            {code: "22BIO101", name: "Biology for Engineers", credits: "2", professor: "Dr. Kavita Reddy", slot: "D"},
            {code: "22SOC101", name: "Sociology and Ethics", credits: "2", professor: "Dr. Rahul Singh", slot: "F"},
            {code: "22PHY101", name: "Physics Lab", credits: "1", professor: "Dr. Vikram Bose", slot: "S"},
            {code: "22CHE101", name: "Chemistry for Computing", credits: "2", professor: "Dr. Ananya Das", slot: "R"}
        ],
        "2": [
            {code: "22ADM111", name: "Glimpses of Glorious India", credits: "3", professor: "Dr. Tanashree Redji", slot: "E"},
            {code: "22AIE111", name: "Object Oriented Programming in JAVA", credits: "4", professor: "Dr. Sajitha Krishnan", slot: "A"},
            {code: "22AIE112", name: "Data Structures & Algorithm 1", credits: "3", professor: "Dr. Suresh Iyer", slot: "F"},
            {code: "22AIE113", name: "Elements of Computing - 2", credits: "3", professor: "Dr. Vikram Bose", slot: "C"},
            {code: "22AIE114", name: "Introduction to Electrical and Electronics Engineering", credits: "3", professor: "Dr. Arun Sharma", slot: "D"},
            {code: "22AIE115", name: "User Interface Design", credits: "3", professor: "Dr. Priya Mehta", slot: "G"},
            {code: "22MAT122", name: "Mathematics for Computing 2", credits: "3", professor: "Dr. Sunil Mathew", slot: "B"}
        ],
        "3": [
            {code: "23AIE201", name: "Data Structures & Algorithms 2", credits: "4", professor: "Dr. Rajesh Kumar", slot: "A"},
            {code: "23AIE202", name: "Database Systems", credits: "3", professor: "Dr. Anjali Menon", slot: "B"},
            {code: "23AIE203", name: "Computer Networks", credits: "4", professor: "Dr. Karthik Raja", slot: "C"},
            {code: "23AIE204", name: "Operating Systems", credits: "3", professor: "Dr. Suresh Iyer", slot: "D"},
            {code: "23AIE205", name: "Web Technologies", credits: "3", professor: "Dr. Priya Mehta", slot: "E"},
            {code: "23AIE206", name: "Software Engineering", credits: "3", professor: "Dr. Deepak Sharma", slot: "F"},
            {code: "23AIE207", name: "Machine Learning Fundamentals", credits: "3", professor: "Dr. Sameer Khan", slot: "G"}
        ]
    };
    
    // Menu options for course cards
    const courseMenuOptions = [
        { name: "Home", icon: "bx-home" },
        { name: "Syllabus", icon: "bx-file" },
        { name: "Lessons", icon: "bx-book-open" },
        { name: "Calendar", icon: "bx-calendar" },
        { name: "Announcements", icon: "bx-broadcast" },
        { name: "Resources", icon: "bx-folder" },
        { name: "Forums", icon: "bx-message-square-dots" },
        { name: "Assignments", icon: "bx-task" },
        { name: "Tests & Quizzes", icon: "bx-notepad" },
        { name: "Wiki", icon: "bx-world" },
        { name: "Site Info", icon: "bx-info-circle" },
        { name: "Polls", icon: "bx-poll" },
        { name: "Messages", icon: "bx-envelope" }
    ];

    // Get the semester select element
    const semesterSelect = document.getElementById('semester-select');
    
    // Initialize with default semester
    loadCourses(semesterSelect.value);
    
    // Add event listener for semester change
    semesterSelect.addEventListener('change', function() {
        loadCourses(this.value);
    });
    
    // Function to load courses based on selected semester
    function loadCourses(semester) {
        const courseContainer = document.getElementById('courseContainer');
        courseContainer.innerHTML = ''; // Clear existing courses
        
        const courses = coursesBySemester[semester] || [];
        
        if (courses.length === 0) {
            courseContainer.innerHTML = '<div class="no-courses-message">No courses available for this semester.</div>';
            return;
        }
        
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            courseContainer.appendChild(courseCard);
        });
    }
    
    // Function to create a course card
    function createCourseCard(course) {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.setAttribute('data-course-code', course.code);
        
        // Create card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'course-header';
        
        const courseTitle = document.createElement('h3');
        courseTitle.textContent = `${course.code}: ${course.name}`;
        
        const courseDetails = document.createElement('div');
        courseDetails.className = 'course-details';
        courseDetails.innerHTML = `
            <p><i class='bx bx-credit-card'></i> Credits: ${course.credits}</p>
            <p><i class='bx bx-user'></i> Professor: ${course.professor}</p>
            <p><i class='bx bx-time-five'></i> Slot: ${course.slot}</p>
        `;
        
        cardHeader.appendChild(courseTitle);
        cardHeader.appendChild(courseDetails);
        
        // Create dropdown menu
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="bx bx-chevron-down"></i>';
        
        const menuContainer = document.createElement('div');
        menuContainer.className = 'course-menu-container';
        
        const menuList = document.createElement('ul');
        menuList.className = 'course-menu';
        
        courseMenuOptions.forEach(option => {
            const menuItem = document.createElement('li');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `<i class='bx ${option.icon}'></i> ${option.name}`;
            
            menuItem.addEventListener('click', function() {
                navigateToCourseSection(course.code, option.name);
            });
            
            menuList.appendChild(menuItem);
        });
        
        menuContainer.appendChild(menuList);
        
        // Toggle menu visibility on click
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            menuContainer.classList.toggle('show');
        });
        
        // Add all elements to card
        card.appendChild(cardHeader);
        card.appendChild(menuToggle);
        card.appendChild(menuContainer);
        
        return card;
    }
    
    // Function to handle menu item clicks
    function navigateToCourseSection(courseCode, section) {
        console.log(`Navigating to ${section} for course ${courseCode}`);
        // In a real application, this would navigate to the appropriate page or section
    }
    
    // Function to adjust course layout when sidebar toggles
    function refreshCourseLayout() {
        // This will be called when the sidebar state changes
        const courseCards = document.querySelectorAll('.course-card');
        
        // You can add any specific adjustments needed when the sidebar changes
        courseCards.forEach(card => {
            // Refresh any layout-dependent elements in the card
        });
    }
});