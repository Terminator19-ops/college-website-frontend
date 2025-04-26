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

    // Course feedback specific functionality
    
    // Course data with instructors
    const courseData = {
        "19CSE301": { name: "Database Management Systems", instructor: "Dr. Rajesh Kumar" },
        "19CSE302": { name: "Operating Systems", instructor: "Dr. Sunita Patel" },
        "19CSE303": { name: "Computer Networks", instructor: "Prof. Arun Sharma" },
        "19CSE304": { name: "Web Technologies", instructor: "Dr. Priya Mehta" },
        "19CSE305": { name: "Software Engineering", instructor: "Prof. Suresh Iyer" }
    };
    
    // Elements
    const courseSelect = document.getElementById("course-select");
    const instructorName = document.getElementById("instructor-name");
    const feedbackStatus = document.getElementById("feedback-status");
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackSubmitted = document.getElementById("feedback-submitted");
    const submitButton = document.getElementById("submit-feedback");
    
    // Star rating elements
    const starRatings = document.querySelectorAll(".star-rating");
    
    // Handle course selection change
    if (courseSelect) {
        courseSelect.addEventListener("change", function() {
            const selectedCourse = this.value;
            
            if (selectedCourse) {
                instructorName.value = courseData[selectedCourse].instructor;
                feedbackStatus.style.display = "none";
                feedbackForm.style.display = "block";
                
                // Clear any previous ratings
                clearRatings();
            } else {
                instructorName.value = "";
                feedbackStatus.style.display = "block";
                feedbackForm.style.display = "none";
            }
        });
    }
    
    // Star rating functionality
    starRatings.forEach(ratingContainer => {
        const stars = ratingContainer.querySelectorAll("i");
        const hiddenInput = ratingContainer.querySelector(".rating-value");
        
        stars.forEach(star => {
            // Handle click on star
            star.addEventListener("click", function() {
                const rating = this.getAttribute("data-rating");
                setRating(stars, hiddenInput, rating);
            });
            
            // Handle hover effect
            star.addEventListener("mouseenter", function() {
                const rating = this.getAttribute("data-rating");
                highlightStars(stars, rating);
            });
            
            star.addEventListener("mouseleave", function() {
                const currentRating = hiddenInput.value;
                resetStars(stars);
                if (currentRating > 0) {
                    highlightStars(stars, currentRating, true);
                }
            });
        });
    });
    
    // Set rating
    function setRating(stars, input, rating) {
        input.value = rating;
        resetStars(stars);
        highlightStars(stars, rating, true);
        
        // Check if all ratings are complete to enable submit button
        checkFormCompletion();
    }
    
    // Highlight stars
    function highlightStars(stars, rating, permanent = false) {
        stars.forEach(star => {
            const starRating = star.getAttribute("data-rating");
            if (starRating <= rating) {
                star.classList.remove("bx-star");
                star.classList.add("bxs-star");
            }
        });
    }
    
    // Reset stars display
    function resetStars(stars) {
        stars.forEach(star => {
            star.classList.remove("bxs-star");
            star.classList.add("bx-star");
        });
    }
    
    // Clear all ratings
    function clearRatings() {
        const allStars = document.querySelectorAll(".star-rating i");
        const allInputs = document.querySelectorAll(".rating-value");
        
        allStars.forEach(star => {
            star.classList.remove("bxs-star");
            star.classList.add("bx-star");
        });
        
        allInputs.forEach(input => {
            input.value = "0";
        });
        
        // Clear textareas
        document.querySelectorAll("textarea").forEach(textarea => {
            textarea.value = "";
        });
        
        // Reset anonymous checkbox
        document.getElementById("anonymous-checkbox").checked = false;
        
        // Disable submit button
        submitButton.disabled = true;
    }
    
    // Check if all required fields are filled
    function checkFormCompletion() {
        // Check if all star ratings have been selected
        const ratingInputs = document.querySelectorAll(".rating-value");
        let allRatingsComplete = true;
        
        ratingInputs.forEach(input => {
            if (input.value === "0") {
                allRatingsComplete = false;
            }
        });
        
        submitButton.disabled = !allRatingsComplete;
    }
    
    // Handle form submission
    if (submitButton) {
        submitButton.addEventListener("click", function() {
            // In a real app, this would send data to the server
            
            // For demo purposes, we'll just show the success message
            feedbackForm.style.display = "none";
            feedbackSubmitted.style.display = "block";
            
            // Clear selection
            courseSelect.value = "";
            instructorName.value = "";
            
            // After 3 seconds, reset the form
            setTimeout(() => {
                feedbackSubmitted.style.display = "none";
                feedbackStatus.style.display = "block";
                clearRatings();
            }, 3000);
        });
    }
});