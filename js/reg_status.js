document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    let semesterSelect = document.getElementById("semester");
    let showStatusBtn = document.getElementById("showStatusBtn");
    let registrationStatus = document.getElementById("registrationStatus");
    let courseTableBody = document.getElementById("courseTableBody");

    // Course data organized by semester
    const coursesBySemester = {
        "1": [
            { code: "21AIE101", name: "Introduction to Programming", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "21MAT101", name: "Mathematics for Computing 1", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "21PHY101", name: "Engineering Physics", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "21ENG101", name: "Technical English", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "21CHE101", name: "Engineering Chemistry", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" }
        ],
        "2": [
            { code: "22ADM111", name: "Glimpses of Glorious India", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22AIE111", name: "Object Oriented Programming in Java", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22AIE112", name: "Data Structures & Algorithms 1", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22AIE113", name: "Elements of Computing Systems - 2", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22AIE114", name: "Introduction to Electrical and Electronics Engineering", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22AIE115", name: "User Interface Design", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" },
            { code: "22MAT122", name: "Mathematics for Computing 2", studentEnd: "Y", deptEnd: "Y", financialEnd: "N", registrarEnd: "Y", addToClass: "yes" }
        ],
        "3": [
            { code: "23AIE201", name: "Data Structures & Algorithms 2", studentEnd: "Y", deptEnd: "Y", financialEnd: "Y", registrarEnd: "Y", addToClass: "yes" },
            { code: "23AIE202", name: "Database Management Systems", studentEnd: "Y", deptEnd: "Y", financialEnd: "Y", registrarEnd: "Y", addToClass: "yes" },
            { code: "23AIE203", name: "Computer Architecture", studentEnd: "Y", deptEnd: "Y", financialEnd: "Y", registrarEnd: "Y", addToClass: "yes" },
            { code: "23AIE204", name: "Artificial Intelligence Fundamentals", studentEnd: "Y", deptEnd: "Y", financialEnd: "Y", registrarEnd: "Y", addToClass: "yes" },
            { code: "23AIE205", name: "Operating Systems", studentEnd: "Y", deptEnd: "Y", financialEnd: "Y", registrarEnd: "Y", addToClass: "yes" }
        ],
        "4": [
            { code: "24AIE211", name: "Computer Networks", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "24AIE212", name: "Machine Learning", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "24AIE213", name: "Web Development", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "24AIE214", name: "Deep Learning", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "24AIE215", name: "Software Engineering", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" }
        ],
        "5": [
            { code: "25AIE301", name: "Cloud Computing", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "25AIE302", name: "Big Data Analytics", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "25AIE303", name: "Computer Vision", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "25AIE304", name: "Natural Language Processing", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" }
        ],
        "6": [
            { code: "26AIE311", name: "Internet of Things", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "26AIE312", name: "Mobile App Development", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "26AIE313", name: "Cybersecurity", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "26AIE314", name: "Blockchain Technology", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" }
        ],
        "7": [
            { code: "27AIE401", name: "Project Phase 1", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "27AIE402", name: "Industrial Internship", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" }
        ],
        "8": [
            { code: "28AIE411", name: "Project Phase 2", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" },
            { code: "28AIE412", name: "Comprehensive Viva", studentEnd: "N", deptEnd: "N", financialEnd: "N", registrarEnd: "N", addToClass: "no" }
        ]
    };

    // Function to load courses based on selected semester
    function loadCourses(semester) {
        // Clear existing table content
        courseTableBody.innerHTML = '';
        
        const courses = coursesBySemester[semester];
        
        if (courses && courses.length > 0) {
            // Add courses to the table
            courses.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${course.code}:${course.name}</td>
                    <td>${course.studentEnd}</td>
                    <td>${course.deptEnd}</td>
                    <td>${course.financialEnd}</td>
                    <td>${course.registrarEnd}</td>
                    <td>${course.addToClass}</td>
                `;
                courseTableBody.appendChild(row);
            });
        } else {
            // If no courses are available for this semester
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" class="no-courses">No courses available for Semester ${semester}</td>
            `;
            courseTableBody.appendChild(row);
        }
    }

    // Handle click on Show Registration Status button
    showStatusBtn.addEventListener("click", function() {
        const selectedSemester = semesterSelect.value;
        
        // Show loading animation
        registrationStatus.style.display = "block";
        courseTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;"><div class="loading-spinner"></div><p>Loading courses...</p></td></tr>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            loadCourses(selectedSemester);
            
            // Scroll to the results after loading
            registrationStatus.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    });

    // Change courses when semester changes
    semesterSelect.addEventListener("change", function() {
        // If the registration status is already shown, update the courses
        if (registrationStatus.style.display === "block") {
            const selectedSemester = semesterSelect.value;
            loadCourses(selectedSemester);
        }
    });

    // Toggle sidebar with improved handling
    btn.onclick = function() {
        sidebar.classList.toggle("active");
        document.body.classList.toggle("sidebar-expanded");
        
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
    
    // Tooltip functionality
    const sidebarItems = document.querySelectorAll(".sidebar ul li");
        
    sidebarItems.forEach(item => {
        // We'll let CSS handle the positioning using transform:translateY
        item.addEventListener("mouseenter", () => {
            // Just ensure tooltips only show when sidebar is collapsed
            if (!document.querySelector(".sidebar").classList.contains("active")) {
                const tooltip = item.querySelector(".tooltip");
                if (tooltip) {
                    tooltip.style.opacity = '1';
                }
            }
        });

        item.addEventListener("mouseleave", () => {
            const tooltip = item.querySelector(".tooltip");
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });

    // Improved dropdown functionality for smoother animations
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            
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
            
            // Toggle the clicked dropdown immediately for better responsiveness
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