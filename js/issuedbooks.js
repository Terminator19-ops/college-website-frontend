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

    // Sample data for issued books - updated to use 15 days rather than a month
    const issuedBooks = [
        {
            id: 1,
            name: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            category: "Computer Science",
            issueDate: "2023-03-10",
            dueDate: "2023-03-25", // 15 days from issue date
            status: "normal"
        },
        {
            id: 2,
            name: "Design Patterns",
            author: "Erich Gamma",
            category: "Computer Science",
            issueDate: "2025-03-15",
            dueDate: "2025-03-30", // 15 days from issue date
            status: "normal"
        },
        {
            id: 3,
            name: "Clean Code",
            author: "Robert C. Martin",
            category: "Computer Science",
            issueDate: "2025-04-01",
            dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            status: "due-soon"
        },
        {
            id: 4,
            name: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            category: "Computer Science",
            issueDate: "2025-03-05",
            dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            status: "overdue"
        },
        {
            id: 5,
            name: "Artificial Intelligence: A Modern Approach",
            author: "Stuart Russell",
            category: "Computer Science",
            issueDate: "2025-04-05",
            dueDate: "2025-04-20", // 15 days from issue date
            status: "normal"
        }
    ];

    // Function to populate the table
    function populateTable(books) {
        const tableBody = document.querySelector('#issuedBooksTable tbody');
        tableBody.innerHTML = '';

        if (books.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="7" class="no-data">No books found</td>`;
            tableBody.appendChild(row);
            return;
        }

        books.forEach(book => {
            const row = document.createElement('tr');
            
            // Calculate status text
            let statusText;
            if (book.status === 'normal') {
                statusText = 'Normal';
            } else if (book.status === 'due-soon') {
                statusText = 'Due Soon';
            } else {
                statusText = 'Overdue';
            }
            
            // Conditionally create renew button based on status
            let renewButtonHTML = '';
            if (book.status === 'due-soon') {
                renewButtonHTML = `
                    <button class="action-btn renew-btn" data-id="${book.id}">
                        <i class='bx bx-refresh'></i> Renew
                    </button>
                `;
            } else if (book.status === 'overdue') {
                renewButtonHTML = `
                    <button class="action-btn renew-btn disabled" data-id="${book.id}" data-status="overdue">
                        <i class='bx bx-refresh'></i> Renew
                    </button>
                `;
            } else {
                renewButtonHTML = `
                    <button class="action-btn renew-btn disabled" data-id="${book.id}" data-status="normal">
                        <i class='bx bx-refresh'></i> Renew
                    </button>
                `;
            }
            
            row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${formatDate(book.issueDate)}</td>
                <td>${formatDate(book.dueDate)}</td>
                <td class="status ${book.status}">${statusText}</td>
                <td>
                    ${renewButtonHTML}
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Add event listeners to renew buttons
        const renewButtons = document.querySelectorAll('.renew-btn');
        renewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const bookId = this.getAttribute('data-id');
                const status = this.getAttribute('data-status');
                
                if (status === 'overdue') {
                    alert("You need to pay the fine first before renewing this book.");
                    return;
                } else if (status === 'normal') {
                    alert("It's too soon to renew. use your 15 days issue period wisely.");
                    return;
                }
                
                openRenewModal(bookId);
            });
        });
    }

    // Format date for display
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    // Filter functionality
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchBooks');
    const refreshBtn = document.getElementById('refreshBtn');

    statusFilter.addEventListener('change', filterBooks);
    searchInput.addEventListener('input', filterBooks);
    refreshBtn.addEventListener('click', function() {
        statusFilter.value = 'all';
        searchInput.value = '';
        filterBooks();
    });

    function filterBooks() {
        const statusValue = statusFilter.value;
        const searchValue = searchInput.value.toLowerCase();

        let filteredBooks = issuedBooks;

        // Filter by status
        if (statusValue !== 'all') {
            filteredBooks = filteredBooks.filter(book => book.status === statusValue);
        }

        // Filter by search
        if (searchValue) {
            filteredBooks = filteredBooks.filter(book => 
                book.name.toLowerCase().includes(searchValue) || 
                book.author.toLowerCase().includes(searchValue) ||
                book.category.toLowerCase().includes(searchValue)
            );
        }

        populateTable(filteredBooks);
    }

    // Modal functionality
    const modal = document.getElementById('renewModal');
    const closeBtn = document.querySelector('.close');
    const confirmRenewBtn = document.getElementById('confirmRenew');
    const cancelRenewBtn = document.getElementById('cancelRenew');
    let currentBookId;

    function openRenewModal(bookId) {
        currentBookId = bookId;
        const book = issuedBooks.find(b => b.id == bookId);
        
        document.getElementById('renewBookName').textContent = book.name;
        document.getElementById('currentDueDate').textContent = formatDate(book.dueDate);
        
        // Calculate new due date (add 15 days)
        const currentDueDate = new Date(book.dueDate);
        const newDueDate = new Date(currentDueDate);
        newDueDate.setDate(newDueDate.getDate() + 15);
        
        document.getElementById('newDueDate').textContent = formatDate(newDueDate.toISOString().split('T')[0]);
        
        modal.style.display = 'flex';
    }

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    confirmRenewBtn.addEventListener('click', function() {
        renewBook(currentBookId);
        modal.style.display = 'none';
    });

    cancelRenewBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function renewBook(bookId) {
        // Find the book to renew
        const bookIndex = issuedBooks.findIndex(b => b.id == bookId);
        if (bookIndex !== -1) {
            // Calculate new due date (add 15 days)
            const currentDueDate = new Date(issuedBooks[bookIndex].dueDate);
            const newDueDate = new Date(currentDueDate);
            newDueDate.setDate(newDueDate.getDate() + 15);
            
            // Update book data
            issuedBooks[bookIndex].dueDate = newDueDate.toISOString().split('T')[0];
            issuedBooks[bookIndex].status = 'normal';
            
            // Update table
            filterBooks();
            
            // Show success message
            alert(`Book "${issuedBooks[bookIndex].name}" has been renewed successfully for 15 more days.`);
        }
    }

    // Initial table population
    populateTable(issuedBooks);
});