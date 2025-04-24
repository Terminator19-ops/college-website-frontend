document.addEventListener("DOMContentLoaded", function() {
    // Sidebar functionality
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

    // Toggle sidebar with improved handling
    if (btn && sidebar) {
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

    // Sample fee data structure - in a real application, this would come from a backend
    const feeData = {
        '1': [
            { section: 'Tuition Fee Y-1', currency: 'INR', assigned: 350000, paid: 350000, due: 0, dueDate: '2024-12-31' },
            { section: 'Hostel Fee Y-1', currency: 'INR', assigned: 50000, paid: 50000, due: 0, dueDate: '2024-12-31' },
            { section: 'Mess Fee Y-1', currency: 'INR', assigned: 50000, paid: 50000, due: 0, dueDate: '2024-12-31' },
            { section: 'Caution Deposit', currency: 'INR', assigned: 25000, paid: 25000, due: 0, dueDate: '2023-12-31' }
        ],
        '2': [
            { section: 'Tuition Fee Y-1 (S2)', currency: 'INR', assigned: 350000, paid: 350000, due: 0, dueDate: '2025-05-31' },
            { section: 'Hostel Fee Y-1 (S2)', currency: 'INR', assigned: 50000, paid: 0, due: 50000, dueDate: '2025-05-31' }
        ],
        '3': [
            { section: 'Tuition Fee Y-2 (S1)', currency: 'INR', assigned: 375000, paid: 0, due: 375000, dueDate: '2025-12-31' }
        ],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': []
    };

    // Fee term change handler
    const feeTermSelect = document.getElementById('fee-term');
    const academicYearSelect = document.getElementById('academic-year');
    const feesTable = document.getElementById('fees-table');
    const noDataMessage = document.getElementById('no-data-message');
    const totalDueElement = document.getElementById('total-due');
    const payNowBtn = document.getElementById('pay-now-btn');
    
    // Function to update fee data when semester changes
    function updateFeeData() {
        const selectedTerm = feeTermSelect.value;
        const feesData = feeData[selectedTerm] || [];
        const feesDataBody = document.getElementById('fees-data');
        
        // Clear existing data
        feesDataBody.innerHTML = '';
        
        if (feesData.length === 0) {
            feesTable.style.display = 'none';
            noDataMessage.style.display = 'block';
            payNowBtn.style.display = 'none';
            totalDueElement.textContent = 'INR 0';
            return;
        }
        
        feesTable.style.display = 'table';
        noDataMessage.style.display = 'none';
        
        let totalDue = 0;
        
        // Populate fee data
        feesData.forEach(fee => {
            const row = document.createElement('tr');
            
            // Format amounts with commas
            const formattedAssigned = fee.assigned.toLocaleString('en-IN');
            const formattedPaid = fee.paid.toLocaleString('en-IN');
            const formattedDue = fee.due.toLocaleString('en-IN');
            
            totalDue += fee.due;
            
            row.innerHTML = `
                <td>${fee.section}</td>
                <td>${fee.currency}</td>
                <td>${formattedAssigned}</td>
                <td>${formattedPaid}</td>
                <td class="${fee.due > 0 ? 'amount-due' : 'zero-amount'}">${formattedDue}</td>
                <td>${fee.dueDate}</td>
            `;
            
            feesDataBody.appendChild(row);
        });
        
        // Update total due amount
        totalDueElement.textContent = `INR ${totalDue.toLocaleString('en-IN')}`;
        
        // Show/hide pay button based on due amount
        payNowBtn.style.display = totalDue > 0 ? 'block' : 'none';
    }
    
    // Initialize pay now button click handler
    if (payNowBtn) {
        payNowBtn.addEventListener('click', function() {
            alert('Redirecting to payment gateway...');
            // In a real application, this would redirect to a payment gateway or payment page
        });
    }
    
    // Add event listeners for dropdown changes
    if (feeTermSelect) {
        feeTermSelect.addEventListener('change', updateFeeData);
    }
    
    if (academicYearSelect) {
        academicYearSelect.addEventListener('change', updateFeeData);
    }
    
    // Initialize the view with default values
    updateFeeData();
});