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

    // Dues data by term/semester
    const duesByTerm = {
        "1": [
            {section: "Broken Cooler", currency: "INR", assigned: "100000", paid: "50000", toPay: "50000", dueDate: "15-08-2025", assignedDate: "01-08-2024"},
            {section: "Mid Sem Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "10-09-2024", assignedDate: "15-08-2024"},
            {section: "Re-Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "30-10-2024", assignedDate: "15-10-2024"},
            {section: "End Sem-Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "03-12-2024", assignedDate: "01-11-2024"}
        ],
        "2": [
            {section: "Mid Sem Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "10-03-2025", assignedDate: "15-02-2025"},
            {section: "Re-Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "04-04-2025", assignedDate: "15-03-2025"},
            {section: "End Sem-Examination Due", currency: "INR", assigned: "5000", paid: "5000", toPay: "0", dueDate: "15-05-2025", assignedDate: "01-04-2025"}
        ],
    };

    // Update the JavaScript to use date ranges instead of term/year

    // Replace due term and academic year event listeners with date range search
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const searchBtn = document.getElementById("search-btn");

    if (startDateInput && endDateInput && searchBtn) {
        // Set default dates if not already set
        if (!startDateInput.value) {
            const today = new Date();
            const startDate = new Date(today.getFullYear(), today.getMonth(), 1); // First day of current month
            startDateInput.value = formatDateForInput(startDate);
        }
        
        if (!endDateInput.value) {
            const today = new Date();
            const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Last day of current month
            endDateInput.value = formatDateForInput(endDate);
        }
        
        // Search button click handler
        searchBtn.addEventListener("click", function() {
            updateDuesTable();
        });
        
        // Initially populate dues for default date range
        updateDuesTable();
    }

    // Helper function to format date for input field
    function formatDateForInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Modified updateDuesTable function to use date range
    function updateDuesTable() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        
        const duesTableBody = document.getElementById("dues-data");
        const totalDueElement = document.getElementById("total-due");
        const noDataMessage = document.getElementById("no-data-message");
        const payNowBtn = document.getElementById("pay-now-btn");
        
        console.log("Elements found:", {
            duesTableBody: !!duesTableBody,
            totalDueElement: !!totalDueElement,
            noDataMessage: !!noDataMessage,
            payNowBtn: !!payNowBtn
        });
        
        if (!duesTableBody || !totalDueElement || !noDataMessage || !payNowBtn) {
            console.error("Required elements not found!");
            return;
        }
        
        duesTableBody.innerHTML = ""; // Clear current dues
        
        let duesToShow = [];
        
        // For each term, check if its date range overlaps with selected date range
        for (const [term, dues] of Object.entries(duesByTerm)) {
            const termStartDate = getTermStartDate(term);
            const termEndDate = getTermEndDate(term);
            
            console.log(`Term ${term} date range:`, termStartDate, termEndDate);
            console.log("Selected date range overlaps:", startDate <= termEndDate && endDate >= termStartDate);
            
            // Check if the selected date range overlaps with this term
            if (startDate <= termEndDate && endDate >= termStartDate) {
                duesToShow = duesToShow.concat(dues);
            }
        }
        
        console.log("Dues to show:", duesToShow.length, duesToShow);
        
        if (duesToShow.length === 0) {
            noDataMessage.style.display = "block";
            payNowBtn.style.display = "none";
            totalDueElement.textContent = "INR 0";
            return;
        } else {
            noDataMessage.style.display = "none";
            payNowBtn.style.display = "block";
        }
        
        let totalDue = 0;
        
        duesToShow.forEach(due => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${due.section}</td>
                <td>${due.currency}</td>
                <td>${due.assigned}</td>
                <td>${due.paid}</td>
                <td>${due.toPay}</td>
                <td>${due.assignedDate}</td>
                <td>${due.dueDate}</td>
            `;
            duesTableBody.appendChild(row);
            
            // Calculate total due
            totalDue += parseInt(due.toPay);
        });
        
        console.log("Total due calculated:", totalDue);
        
        // Update total due amount
        totalDueElement.textContent = `INR ${totalDue}`;
        
        // Enable/disable pay now button based on total due
        if (totalDue > 0) {
            payNowBtn.disabled = false;
            payNowBtn.textContent = "Pay Now";
        } else {
            payNowBtn.disabled = true;
            payNowBtn.textContent = "No Payment Due";
        }
    }

    // Helper function to get term start date
    function getTermStartDate(term) {
        switch(term) {
            case "1": return new Date("2024-08-01");
            case "2": return new Date("2025-01-01");
            case "3": return new Date("2025-06-01");
            default: return new Date("2024-08-01");
        }
    }

    // Helper function to get term end date
    function getTermEndDate(term) {
        switch(term) {
            case "1": return new Date("2024-12-31");
            case "2": return new Date("2025-05-31");
            case "3": return new Date("2025-07-31");
            default: return new Date("2025-07-31");
        }
    }

    // Pay Now button click handler
    const payNowBtn = document.getElementById("pay-now-btn");
    if (payNowBtn) {
        payNowBtn.addEventListener("click", function() {
            // In a real app, this would redirect to a payment gateway
            alert("Redirecting to payment gateway...");
        });
    }
});
