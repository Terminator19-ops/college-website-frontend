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

    // Reset button functionality
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            document.getElementById("scholarship-type").selectedIndex = 0;
            document.getElementById("academic-year").selectedIndex = 0;
            document.getElementById("applied-amount").value = "";
            document.getElementById("application-date").value = new Date().toISOString().split('T')[0];
            document.getElementById("document-upload").value = "";
        });
    }
    
    // Apply button functionality
    const applyBtn = document.getElementById("apply-btn");
    if (applyBtn) {
        applyBtn.addEventListener("click", function() {
            const scholarshipType = document.getElementById("scholarship-type").value;
            const academicYear = document.getElementById("academic-year").value;
            const appliedAmount = document.getElementById("applied-amount").value;
            const applicationDate = document.getElementById("application-date").value;
            const documentUpload = document.getElementById("document-upload").value;
            
            // Simple validation
            if (!scholarshipType || !academicYear || !appliedAmount || !applicationDate) {
                alert("Please fill in all required fields.");
                return;
            }
            
            // This would typically involve an AJAX call to submit the form
            // For demo purposes, just show a success message
            alert("Scholarship application submitted successfully!");
            
            // Reset the form
            resetBtn.click();
            
            // Update the table (in a real app, this would be done after server confirmation)
            updateScholarshipTable();
        });
    }
    
    // Function to update scholarship table with demo data
    function updateScholarshipTable() {
        const tableBody = document.getElementById("scholarship-data");
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td>1</td>
                    <td>Merit Scholarship</td>
                    <td>2024-2025</td>
                    <td>50000</td>
                    <td>2024-04-24</td>
                    <td><a href="#"><i class='bx bx-file'></i> View</a></td>
                    <td>Pending</td>
                    <td>-</td>
                </tr>
            `;
            
            // Hide no data message if it exists
            const noDataMsg = document.getElementById("no-data-message");
            if (noDataMsg) {
                noDataMsg.style.display = "none";
            }
        }
    }
});