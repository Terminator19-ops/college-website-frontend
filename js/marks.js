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
    
    // Semester selection functionality
    const semesterSelect = document.getElementById('semester');
    const gradesContainer = document.querySelector('.grades-container');
    const noDataMessage = document.getElementById('no-data-message');
    
    // Load initial semester data
    updateMarksTable(semesterSelect.value);
    
    // Add event listener for semester change
    semesterSelect.addEventListener('change', function() {
        updateMarksTable(this.value);
    });
    
    function updateMarksTable(semester) {
        // Clear previous content
        while (gradesContainer.childNodes.length > 1) {
            gradesContainer.removeChild(gradesContainer.lastChild);
        }
        
        // Hide no data message by default
        noDataMessage.style.display = 'none';
        
        if (semester === '1') {
            // Semester 1 Table
            const table = createSem1Table();
            gradesContainer.appendChild(table);
        } else if (semester === '2') {
            // Semester 2 Table
            const table = createSem2Table();
            gradesContainer.appendChild(table);
        } else {
            // Show "Semester not started" message for semesters 3-8
            noDataMessage.innerHTML = `<i class='bx bx-error-circle'></i> Semester ${semester} has not started yet. <br><span class="warning-subtext">Marks will be available when the semester begins.</span>`;
            noDataMessage.style.display = 'block';
        }
    }
    
    function createSem1Table() {
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        
        const table = document.createElement('table');
        table.className = 'grades-table compact-table';
        
        // Table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        // Using shorter header titles to save space
        const headers = ['Exam', 'Period', 'Type', '19ENG111', '22PHY106', '22MAT121', '22MAT110', '22AVP103', '22AIE102', '22AIE101', '22ADM101'];
        
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Table body (same data but table will be styled more compactly)
        const tbody = document.createElement('tbody');
        
        // Data for semester 1
        const sem1Data = [
            ['Assignment 1', '2024-25', 'Regular', '12.5', '10.0', '', '', 'NP', '2.0', '', ''],
            ['Assignment 2', '2024-25', 'Regular', '4.5', '', '', '', '', '7.0', '', ''],
            ['Assignment 3', '2024-25', 'Regular', 'NP', '', '', '', '', '8.0', '', '13.0'],
            ['Lab Eval 1', '2024-25', 'Regular', '', '', '8.5', '11.5', '', '', '10.0', ''],
            ['Lab Eval 2', '2024-25', 'Regular', '', '', '9.0', '12.5', '', '', '3.0', ''],
            ['Lab Eval 3', '2024-25', 'Regular', '', '', '4.5', '', '', '', '11.0', ''],
            ['Midterm', '2024-25', 'Regular', 'NP', '23.0', '26.5', '38.5', '', '26.0', '17.5', '35.5'],
            ['Quiz 1', '2024-25', 'Regular', '', '3.0', '7.5', '6.5', '', '18.0', '5.0', '4.0'],
            ['Quiz 2', '2024-25', 'Regular', '', '9.0', '6.5', '10.0', '', '3.0', '6.5', ''],
            ['Quiz 3', '2024-25', 'Regular', '', '3.0', '', '', '', '', '', ''],
            ['Quiz 4', '2024-25', 'Regular', '', '5.5', '', '', '', '', '', ''],
            ['Yoga', '2024-25', 'Regular', '', '', '', '', '', '', '', '8.5']
        ];
        
        sem1Data.forEach(rowData => {
            const row = document.createElement('tr');
            
            rowData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                
                // Highlight NP cells with a class instead of inline style
                if (cellData === 'NP') {
                    cell.classList.add('highlight-np');
                }
                
                row.appendChild(cell);
            });
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        
        console.log("Table structure:", table);
        
        return tableContainer;
    }
    
    function createSem2Table() {
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        
        const table = document.createElement('table');
        table.className = 'grades-table';
        
        // Table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Exam Name', 'Academic Period', 'Exam Type', '22MAT122', '22AIE115', '22AIE114', '22AIE113', '22AIE112', '22AIE111', '22ADM111'];
        
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Table body
        const tbody = document.createElement('tbody');
        
        // Data for semester 2 (different from semester 1)
        const sem2Data = [
            ['Assignment 1', '2024-2025', 'Regular', '8.5', '7.0', '9.0', '10.0', '8.0', '7.5', '9.0'],
            ['Assignment 2', '2024-2025', 'Regular', '9.5', '8.0', '7.5', '9.0', '9.0', '8.0', '8.5'],
            ['Lab Evaluation 1', '2024-2025', 'Regular', '', '7.5', '', '11.0', '12.0', '9.5', '10.0'],
            ['Lab Evaluation 2', '2024-2025', 'Regular', '', '8.0', '', '12.5', '11.5', '10.0', '9.5'],
            ['Midterm exam', '2024-2025', 'Regular', '22.0', '20.5', '26.0', '28.0', '24.5', '22.0', '25.0'],
            ['Mini Project', '2024-2025', 'Regular', '', '', '', '15.0', '14.0', '13.5', ''],
            ['Quiz 1', '2024-2025', 'Regular', '4.5', '3.5', '4.0', '4.5', '4.0', '3.5', '4.0'],
            ['Quiz 2', '2024-2025', 'Regular', '3.5', '4.0', '3.5', '4.0', '3.5', '4.0', '3.5'],
            ['Final Project', '2024-2025', 'Regular', '', '', '', '18.0', '19.0', '17.5', '18.5']
        ];
        
        sem2Data.forEach(rowData => {
            const row = document.createElement('tr');
            
            rowData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        
        return tableContainer;
    }
});