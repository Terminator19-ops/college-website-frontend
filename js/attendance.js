document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

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
        item.addEventListener("mouseenter", () => {
            if (!document.querySelector(".sidebar").classList.contains("active")) {
                const tooltip = item.querySelector(".tooltip");
                if (tooltip) {
                    // We'll let CSS handle positioning
                }
            }
        });
    });

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

    document.addEventListener("click", function(e) {
        // Close all dropdowns when clicking outside
        if (!e.target.closest(".dropdown") && !e.target.closest(".dropdown-trigger")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("open");
            });
        }
    });

    // Fix the DOM selector for attendanceContainer
    const semesterSelect = document.getElementById('semester');
    const attendanceContainer = document.querySelector('.attendance-container');
    const noDataMessage = document.getElementById('no-data-message');

    //Loading initial Attendance Details
    updateAttendanceTable(parseInt(semesterSelect.value));

    semesterSelect.addEventListener('change', function() {
        updateAttendanceTable(parseInt(this.value));
    });

    function updateAttendanceTable(semester) {
        // Clear the container first
        while (attendanceContainer && attendanceContainer.childNodes.length > 1) {
            attendanceContainer.removeChild(attendanceContainer.lastChild);
        }
        
        if (noDataMessage) {
            noDataMessage.style.display = "none";
        }

        if(semester === 1){
            // Semester 1 Table
            const table = createSem1Table();
            attendanceContainer.appendChild(table);
        } else if(semester === 2){
            const table = createSem2Table();
            attendanceContainer.appendChild(table);
        }
        else {
            noDataMessage.innerHTML = `<i class="bx bxs-error-circle"></i> Semester ${semester} has not started yet. <br><span class="warning-subtext">Marks will be available when the semester begins.</span>`;
            noDataMessage.style.display = "block";
        }
    }

    function createSem1Table() {
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        const table = document.createElement('table');
        table.className = 'attendance-table';
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Class Code','Subject','Faculty','Total','Present','Duty Leave','Absent','Percentage', 'Medical'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);        
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        
        // Updated data for Semester 1 from the image
        const sem1Data = [
        ['19ENG111','Tech-Com', 'Smita Sail', '5', '5', '0', '0', '100', '0'],
        ['19ENG111','Tech-Com', 'Smita Sail', '25', '21', '0', '4', '84', '0'],
        ['22ADM101','FIH', 'Bhavya Suresh', '28', '24', '0', '4', '85.71', '0'],
        ['22AIE101','PSCP', 'Apurvanand\nSahay', '60', '53', '0', '7', '88.33', '0'],
        ['22AIE102','EOC - 1', 'Praveen Kumar Mishra', '58', '49', '0', '9', '84.48', '0'],
        ['22AVP103','MAOM', 'Manju Khanna', '21', '18', '0', '3', '85.71', '0'],
        ['22MAT110','MOC - 1', 'Kesavulu Naidu V.', '73', '60', '3', '10', '86.3', '0'],
        ['22MAT121','DM', 'K. N. Meera', '62', '51', '2', '9', '85.48', '0'],
        ['22PHY106','CP', 'Vineet Nair', '44', '42', '1', '1', '97.73', '0'],
        ['23ENG101','Tech-Com', 'Smita Sail', '20', '19', '0', '1', '95', '0']
    
        ];
        
        // Create rows and populate with data
        sem1Data.forEach(rowData => {
            const row = document.createElement('tr');
            rowData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                
                // Add class for percentage column to highlight it
                if (cellData <=50 && index === 7) {
                    cell.classList.add('highlight-percentage');
                    cell.classList.add('percentage-cell');
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
        table.className = 'attendance-table';
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Class Code','Subject','Faculty','Total','Present','Duty Leave','Absent','Percentage', 'Medical'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);        
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        
        // Updated data for Semester 1 from the image
        const sem2Data = [
            ['22ADM111','GGI','Tanashree Redji','20','18','0','2','90','0'],
            ['22AIE111','OOP(JAVA)','Sajitha Krishnan','53','43','3','7','86.79','0'],
            ['22AIE112','DSA - 1','Divya KV','57','47','2','8','85.96','0'],
            ['22AIE113','EOC - 2','Niranjan DK','51','41','4','6','88.24','0'],
            ['22AIE114','IEEE','Syama S','46','38','1','7','84.78','0'],
            ['22AIE115','UID','Arya R','51','44','4','3','94.12','0'],
            ['22MAT122','MOC - 2','Kesavulu Naidu V.','58','45','3','10','82.76','0'],
        ];
        
        // Create rows and populate with data
        sem2Data.forEach(rowData => {
            const row = document.createElement('tr');
            rowData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                
                // Add class for percentage column to highlight it
                if (cellData <=50 && index === 7) {
                    cell.classList.add('highlight-percentage');
                    cell.classList.add('percentage-cell');
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
});
