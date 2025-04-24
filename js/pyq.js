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

    // Sample data for previous year questions
    const pyqData = [
        {
            id: 1,
            courseCode: "19CSE101",
            courseName: "Programming in C",
            year: "2022",
            examType: "endsem",
            semester: "Even",
            pdfUrl: "#"
        },
        {
            id: 2,
            courseCode: "19CSE101",
            courseName: "Programming in C",
            year: "2022",
            examType: "midsem",
            semester: "Even",
            pdfUrl: "#"
        },
        {
            id: 3,
            courseCode: "19CSE102",
            courseName: "Object Oriented Programming",
            year: "2022",
            examType: "endsem",
            semester: "Odd",
            pdfUrl: "#"
        },
        {
            id: 4,
            courseCode: "19CSE103",
            courseName: "Data Structures",
            year: "2021",
            examType: "endsem",
            semester: "Even",
            pdfUrl: "#"
        },
        {
            id: 5,
            courseCode: "19CSE201",
            courseName: "Algorithms",
            year: "2021",
            examType: "midsem",
            semester: "Odd",
            pdfUrl: "#"
        },
        {
            id: 6,
            courseCode: "19CSE302",
            courseName: "Database Management Systems",
            year: "2023",
            examType: "midsem",
            semester: "Even",
            pdfUrl: "#"
        },
        {
            id: 7,
            courseCode: "19CSE304",
            courseName: "Operating Systems",
            year: "2023",
            examType: "quiz",
            semester: "Odd",
            pdfUrl: "#"
        },
        {
            id: 8,
            courseCode: "19CSE101",
            courseName: "Programming in C",
            year: "2023",
            examType: "supplementary",
            semester: "Odd",
            pdfUrl: "#"
        }
    ];

    // Function to populate the table
    function populateTable(data) {
        const tableBody = document.querySelector('#pyqTable tbody');
        tableBody.innerHTML = '';

        if (data.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="6" class="no-data">No question papers found</td>`;
            tableBody.appendChild(row);
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Format exam type for display
            let examTypeDisplay;
            switch(item.examType) {
                case 'midsem':
                    examTypeDisplay = 'Mid Semester';
                    break;
                case 'endsem':
                    examTypeDisplay = 'End Semester';
                    break;
                case 'quiz':
                    examTypeDisplay = 'Quiz';
                    break;
                case 'supplementary':
                    examTypeDisplay = 'Supplementary';
                    break;
                default:
                    examTypeDisplay = item.examType;
            }
            
            row.innerHTML = `
                <td>${item.courseCode}</td>
                <td>${item.courseName}</td>
                <td>${item.year}</td>
                <td>${examTypeDisplay}</td>
                <td>${item.semester}</td>
                <td>
                    <button class="action-btn view-btn" data-id="${item.id}">
                        <i class='bx bx-show'></i> View
                    </button>
                    <button class="action-btn download-btn" data-id="${item.id}">
                        <i class='bx bx-download'></i> Download
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Add event listeners to action buttons
        const viewButtons = document.querySelectorAll('.view-btn');
        const downloadButtons = document.querySelectorAll('.download-btn');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                viewPYQ(itemId);
            });
        });
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                downloadPYQ(itemId);
            });
        });
    }

    // Filter functionality
    const courseFilter = document.getElementById('courseFilter');
    const yearFilter = document.getElementById('yearFilter');
    const examTypeFilter = document.getElementById('examTypeFilter');
    const searchInput = document.getElementById('searchPYQ');
    const refreshBtn = document.getElementById('refreshBtn');

    courseFilter.addEventListener('change', filterPYQ);
    yearFilter.addEventListener('change', filterPYQ);
    examTypeFilter.addEventListener('change', filterPYQ);
    searchInput.addEventListener('input', filterPYQ);
    refreshBtn.addEventListener('click', function() {
        courseFilter.value = 'all';
        yearFilter.value = 'all';
        examTypeFilter.value = 'all';
        searchInput.value = '';
        filterPYQ();
    });

    function filterPYQ() {
        const courseValue = courseFilter.value;
        const yearValue = yearFilter.value;
        const examTypeValue = examTypeFilter.value;
        const searchValue = searchInput.value.toLowerCase();

        let filteredData = pyqData;

        // Filter by course
        if (courseValue !== 'all') {
            filteredData = filteredData.filter(item => item.courseCode === courseValue);
        }

        // Filter by year
        if (yearValue !== 'all') {
            filteredData = filteredData.filter(item => item.year === yearValue);
        }

        // Filter by exam type
        if (examTypeValue !== 'all') {
            filteredData = filteredData.filter(item => item.examType === examTypeValue);
        }

        // Filter by search
        if (searchValue) {
            filteredData = filteredData.filter(item => 
                item.courseCode.toLowerCase().includes(searchValue) || 
                item.courseName.toLowerCase().includes(searchValue)
            );
        }

        populateTable(filteredData);
    }

    // Function to view a PYQ
    function viewPYQ(id) {
        const item = pyqData.find(pyq => pyq.id == id);
        if (item) {
            alert(`Opening ${item.courseCode} - ${item.courseName} (${item.year} ${item.examType}) in a new tab`);
            // In a real app, this would open the PDF in a new tab
            // window.open(item.pdfUrl, '_blank');
        }
    }

    // Function to download a PYQ
    function downloadPYQ(id) {
        const item = pyqData.find(pyq => pyq.id == id);
        if (item) {
            alert(`Downloading ${item.courseCode} - ${item.courseName} (${item.year} ${item.examType})`);
            // In a real app, this would trigger a download
            // window.location.href = item.pdfUrl;
        }
    }

    // Contribute form submission
    const contributeForm = document.getElementById('contributeForm');
    
    contributeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const course = document.getElementById('course').value;
        const year = document.getElementById('year').value;
        const examType = document.getElementById('examType').value;
        const semester = document.getElementById('semester').value;
        const file = document.getElementById('questionPaper').files[0];
        
        // Validation would happen here
        
        // Show success message
        alert(`Thank you for contributing the question paper for ${course} (${year} ${examType}). It will be reviewed and published soon.`);
        
        // Reset form
        contributeForm.reset();
    });

    // Initial table population
    populateTable(pyqData);
});