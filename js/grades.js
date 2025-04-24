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

    // Grade data by semester
    const gradesBySemester = {
        "1": [
            {sem: "1", courseCode: "22ADM101", courseName: "Foundations of Indian Heritage", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B+"},
            {sem: "1", courseCode: "22AIE101", courseName: "Problem Solving & C Programming", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B+"},
            {sem: "1", courseCode: "22AIE102", courseName: "Elements of Computing Systems 1", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B"},
            {sem: "1", courseCode: "22AVP103", courseName: "Mastery Over Mind", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B"},
            {sem: "1", courseCode: "22MAT110", courseName: "Mathematics for Computing 1", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "A"},
            {sem: "1", courseCode: "22PHY106", courseName: "Computational Physics", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "A"},
            {sem: "1", courseCode: "22MAT121", courseName: "Discrete Mathematics", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B+"},
            {sem: "1", courseCode: "19ENG111", courseName: "Technical Communication", academicTerm: "2024-2025 Odd Semester", type: "Regular", grade: "B+"}
        ],
        "2": [
            {sem: "2", courseCode: "22ADM111", courseName: "Glimpses of Glorious India", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "A"},
            {sem: "2", courseCode: "22AIE111", courseName: "Object Oriented Programming in JAVA", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "B+"},
            {sem: "2", courseCode: "22AIE112", courseName: "Data Structures & Algorithm 1", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "A-"},
            {sem: "2", courseCode: "22AIE113", courseName: "Elements of Computing - 2", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "B"},
            {sem: "2", courseCode: "22AIE114", courseName: "Introduction to Electrical and Electronics Engineering", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "B+"},
            {sem: "2", courseCode: "22AIE115", courseName: "User Interface Design", academicTerm: "2024-2025 Even Semester", type: "Regular", grade: "A"}
        ]
    };

    // SGPA values by semester
    const sgpaBySemester = {
        "1": "8.08",
        "2": "8.21"
    };

    // Update grades based on semester selection
    const semesterSelect = document.getElementById("semester");
    if (semesterSelect) {
        semesterSelect.addEventListener("change", function() {
            updateGradesTable(this.value);
        });

        // Initially populate grades for semester 1
        updateGradesTable("1");
    }

    function updateGradesTable(semester) {
        const gradesTableBody = document.getElementById("grades-data");
        const sgpaValue = document.getElementById("sgpa-value");
        const noDataMessage = document.getElementById("no-data-message");
        
        if (!gradesTableBody || !sgpaValue || !noDataMessage) return;
        
        gradesTableBody.innerHTML = ""; // Clear current grades
        
        const grades = gradesBySemester[semester] || [];
        
        if (grades.length === 0) {
            noDataMessage.style.display = "block";
            sgpaValue.textContent = "-";
            return;
        } else {
            noDataMessage.style.display = "none";
        }
        
        grades.forEach(course => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${course.sem}</td>
                <td>${course.courseCode}</td>
                <td>${course.courseName}</td>
                <td>${course.academicTerm}</td>
                <td>${course.type}</td>
                <td>${course.grade}</td>
            `;
            gradesTableBody.appendChild(row);
        });
        
        sgpaValue.textContent = sgpaBySemester[semester] || "-";
    }
});