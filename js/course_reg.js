const MAX_COURSES = 12;
const MAX_CREDITS = 38;

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

    // Toggle sidebar
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

    // Course data by semester
    const coursesBySemester = {
        "1": [
            {code: "22ADM101", name: "Foundations of Indian Heritage", pattern: "Core", credits: "4", slot: "B"},
            {code: "22AIE101", name: "Problem Solving & C Programming", pattern: "Core", credits: "3", slot: "H"},
            {code: "22AIE102", name: "Elements of Computing System", pattern: "Core", credits: "3", slot: "J"},
            {code: "22AVP103", name: "Mastery Over Mind", pattern: "Core", credits: "4", slot: "K"},
            {code: "22MAT110", name: "Mathematics for Computing", pattern: "Elective", credits: "2", slot: "L"},
            {code: "22MAT121", name: "Discrete Maths", pattern: "Core", credits: "3", slot: "M"},
            {code: "22PHY106", name: "Computational Physics", pattern: "Core", credits: "3", slot: "P"},
            {code: "19ENG111", name: "Technical Communication", pattern: "Core", credits: "3", slot: "T"}
        ],
        "2": [
            {code: "22ADM111", name: "Glimpses of Glorius India", pattern: "Core", credits: "3", slot: "E"},
            {code: "22AIE111", name: "Object Oriented prohramming in JAVA", pattern: "Core", credits: "4", slot: "A"},
            {code: "22AIE112", name: "Data Structures & Algorithm 1", pattern: "Core", credits: "3", slot: "F"},
            {code: "22AIE113", name: "Elements of Computing - 2", pattern: "Core", credits: "3", slot: "C"},
            {code: "22AIE114", name: "Introduction to Electrical and Electronics Engineering", pattern: "Core", credits: "3", slot: "D"},
            {code: "22AIE115", name: "User Interface Design", pattern: "Core", credits: "3", slot: "G"}
        ]
    };

    // Update offered courses based on semester selection
    const semesterSelect = document.getElementById("semester");
    semesterSelect.addEventListener("change", function() {
        updateOfferedCourses(this.value);
    });

    // Initially populate offered courses for semester 1
    updateOfferedCourses("1");

    function updateOfferedCourses(semester) {
        const offeredCoursesTable = document.querySelector(".offered-courses tbody");
        offeredCoursesTable.innerHTML = ""; // Clear current offerings
        
        const courses = coursesBySemester[semester] || [];
        
        courses.forEach(course => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox" name="${course.code}"></td>
                <td>${course.code}</td>
                <td>${course.name}</td>
                <td>${course.pattern}</td>
                <td>${course.credits}</td>
                <td>${course.slot}</td>
            `;
            offeredCoursesTable.appendChild(row);
        });
    }

    // Add course transfer functionality
    const transferToRegisteredBtn = document.querySelector(".table-navigation button:first-child");
    const transferToOfferedBtn = document.querySelector(".table-navigation button:last-child");
    
    transferToRegisteredBtn.addEventListener("click", function() {
        // Transfer from offered to registered courses
        const selectedCheckboxes = document.querySelectorAll(".offered-courses tbody input[type='checkbox']:checked");
        
        if (selectedCheckboxes.length === 0) {
            alert("Please select at least one course to register.");
            return;
        }

        // Get count of currently registered courses and credits
        const currentRegisteredCount = document.querySelectorAll(".registered-courses tbody tr").length;
        let currentCredits = calculateTotalCredits();
        
        // Calculate how many more can be added
        const availableSlots = MAX_COURSES - currentRegisteredCount;
        
        // Check if adding the selected courses would exceed the course limit
        if (selectedCheckboxes.length > availableSlots) {
            alert(`You can only register a maximum of ${MAX_COURSES} courses. You currently have ${currentRegisteredCount} courses registered and can add ${availableSlots} more.`);
            return;
        }
        
        // Calculate total credits after addition
        let additionalCredits = 0;
        selectedCheckboxes.forEach(checkbox => {
            const row = checkbox.closest("tr");
            additionalCredits += parseFloat(row.querySelector("td:nth-child(5)").textContent);
        });
        
        // Check if adding would exceed credit limit
        if (currentCredits + additionalCredits > MAX_CREDITS) {
            alert(`Adding these courses would exceed the maximum allowed credits (${MAX_CREDITS}). Current: ${currentCredits}, Additional: ${additionalCredits}`);
            return;
        }
        
        selectedCheckboxes.forEach(checkbox => {
            const row = checkbox.closest("tr");
            const courseCode = row.querySelector("td:nth-child(2)").textContent;
            const credits = row.querySelector("td:nth-child(5)").textContent;
            const slot = row.querySelector("td:nth-child(6)").textContent;
            
            // Create new row in registered courses
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><input type="checkbox" name="${courseCode}"></td>
                <td>${courseCode}</td>
                <td>Regular</td>
                <td>${credits}</td>
                <td>${slot}</td>
            `;
            
            document.querySelector(".registered-courses tbody").appendChild(newRow);
            
            // Remove row from offered courses
            row.remove();
        });
        
        updateCreditCount();
        updateCourseCount();
    });
    
    transferToOfferedBtn.addEventListener("click", function() {
        // Transfer from registered to offered courses
        const selectedCheckboxes = document.querySelectorAll(".registered-courses tbody input[type='checkbox']:checked");
        
        if (selectedCheckboxes.length === 0) {
            alert("Please select at least one course to remove from registration.");
            return;
        }
        
        const currentSemester = semesterSelect.value;
        const currentCourses = coursesBySemester[currentSemester];
        
        selectedCheckboxes.forEach(checkbox => {
            const row = checkbox.closest("tr");
            const courseCode = row.querySelector("td:nth-child(2)").textContent;
            
            // Check if the course belongs to the current semester
            const courseDetails = currentCourses.find(course => course.code === courseCode);
            
            if (courseDetails) {
                // Course belongs to currently selected semester, move back to offered courses
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td><input type="checkbox" name="${courseDetails.code}"></td>
                    <td>${courseDetails.code}</td>
                    <td>${courseDetails.name}</td>
                    <td>${courseDetails.pattern}</td>
                    <td>${courseDetails.credits}</td>
                    <td>${courseDetails.slot}</td>
                `;
                
                document.querySelector(".offered-courses tbody").appendChild(newRow);
            }
            // If course doesn't belong to current semester, it stays hidden
            
            // Remove row from registered courses
            row.remove();
        });
        
        updateCreditCount();
        updateCourseCount();
    });
    
    // Helper function to update credit count
    function updateCreditCount() {
        let totalCredits = 0;
        const creditCells = document.querySelectorAll(".registered-courses tbody td:nth-child(4)");
        
        creditCells.forEach(cell => {
            totalCredits += parseFloat(cell.textContent);
        });
        
        // Update the total credits value in the UI
        const creditInfoElement = document.querySelector(".credits-info .info-group:first-child .info-value");
        if (creditInfoElement) {
            creditInfoElement.textContent = totalCredits.toFixed(1);
        }
        
        // Add max credits to UI if not already there
        const maxCreditsElement = document.querySelector(".credits-info .info-group:nth-child(2) .info-value");
        if (maxCreditsElement) {
            maxCreditsElement.textContent = MAX_CREDITS;
        }
        
        // Update the credit progress bar
        updateCreditProgressBar(totalCredits);
        
        return totalCredits;
    }

    // Add this new function for credit progress bar
    function updateCreditProgressBar(currentCredits) {
        let creditProgressBar = document.querySelector(".credit-progress-bar");
        
        if (!creditProgressBar) {
            creditProgressBar = document.createElement("div");
            creditProgressBar.className = "credit-progress-bar";
            
            const creditsInfo = document.querySelector(".credits-info");
            creditsInfo.appendChild(creditProgressBar);
        }
        
        const percentage = (currentCredits / MAX_CREDITS) * 100;
        creditProgressBar.style.width = `${Math.min(percentage, 100)}%`;
        
        // Visual indicator for approaching/exceeding limit
        if (currentCredits > MAX_CREDITS) {
            creditProgressBar.classList.add("limit-exceeded");
        } else if (currentCredits > MAX_CREDITS * 0.8) {
            creditProgressBar.classList.add("limit-approaching");
            creditProgressBar.classList.remove("limit-exceeded");
        } else {
            creditProgressBar.classList.remove("limit-approaching", "limit-exceeded");
        }
    }

    // Helper function to calculate total credits
    function calculateTotalCredits() {
        let totalCredits = 0;
        const creditCells = document.querySelectorAll(".registered-courses tbody td:nth-child(4)");
        
        creditCells.forEach(cell => {
            totalCredits += parseFloat(cell.textContent);
        });
        
        return totalCredits;
    }

    // Add a new function to update and display the course count
    function updateCourseCount() {
        const registeredCount = document.querySelectorAll(".registered-courses tbody tr").length;
        const remainingSlots = MAX_COURSES - registeredCount;
        
        // Check if the count display element exists, if not create it
        let countDisplay = document.querySelector(".course-count-display");
        
        if (!countDisplay) {
            countDisplay = document.createElement("div");
            countDisplay.className = "course-count-display";
            
            // Add it after the credits info section
            const creditsInfo = document.querySelector(".credits-info");
            creditsInfo.parentNode.insertBefore(countDisplay, creditsInfo.nextSibling);
        }
        
        // Update the content
        countDisplay.innerHTML = `
            <div class="info-row">
                <div class="info-group">
                    <label>Registered Courses</label>
                    <div class="info-value">${registeredCount} / ${MAX_COURSES}</div>
                </div>
                <div class="info-group">
                    <label>Available Slots</label>
                    <div class="info-value">${remainingSlots}</div>
                </div>
            </div>
        `;
        
        // Set the progress bar value (normalized to 12 courses)
        countDisplay.style.setProperty('--course-count', registeredCount);
        
        // Visual indicator for reaching the limit
        if (registeredCount >= MAX_COURSES) {
            countDisplay.classList.add("limit-reached");
        } else {
            countDisplay.classList.remove("limit-reached");
        }
    }

    // Add registration type and stream warning functionality
    const regTypeSelect = document.getElementById("regType");
    const streamSelect = document.getElementById("stream");

    regTypeSelect.addEventListener("change", checkRegistrationType);
    streamSelect.addEventListener("change", checkStreamType);

    function checkRegistrationType() {
        const regType = regTypeSelect.value;
        const offeredCoursesSection = document.querySelector(".offered-courses");
        const warningMsg = document.querySelector(".reg-type-warning") || createWarningElement("reg-type-warning");
        
        if (regType !== "Regular") {
            offeredCoursesSection.classList.add("hidden");
            warningMsg.textContent = `No courses available for "${regType}" registration type.`;
            warningMsg.style.display = "block";
        } else {
            offeredCoursesSection.classList.remove("hidden");
            warningMsg.style.display = "none";
            // Refresh the courses based on current semester
            updateOfferedCourses(document.getElementById("semester").value);
        }
    }

    function checkStreamType() {
        const stream = streamSelect.value;
        const offeredCoursesSection = document.querySelector(".offered-courses");
        const warningMsg = document.querySelector(".stream-warning") || createWarningElement("stream-warning");
        
        if (stream === "Minor" || stream === "Elective") {
            offeredCoursesSection.classList.add("hidden");
            warningMsg.textContent = `No courses available for "${stream}" stream.`;
            warningMsg.style.display = "block";
        } else {
            offeredCoursesSection.classList.remove("hidden");
            warningMsg.style.display = "none";
            // Only refresh if reg type is Regular
            if (regTypeSelect.value === "Regular") {
                updateOfferedCourses(document.getElementById("semester").value);
            }
        }
    }

    function createWarningElement(className) {
        const warning = document.createElement("div");
        warning.className = `warning-message ${className}`;
        const offeredCoursesSection = document.querySelector(".offered-courses");
        offeredCoursesSection.parentNode.insertBefore(warning, offeredCoursesSection);
        return warning;
    }

    // Run initial checks
    checkRegistrationType();
    checkStreamType();

    // Call this function on initial page load
    updateCreditCount();
    updateCourseCount();
});