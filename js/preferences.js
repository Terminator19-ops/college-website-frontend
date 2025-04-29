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
                // Fix: Changed from bx-menu to bx-menu-alt-right
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
    
    // Preferences specific functionality
    
    // Add colored section classes
    addSectionClasses();
    
    // Save Button Functionality
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Add loading state
            saveButton.innerText = "Saving...";
            saveButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(function() {
                // Collect all preferences
                const preferences = {
                    notifications: {
                        announcements: document.querySelector('input[name="announcements"]:checked')?.value,
                        assignments: document.querySelector('input[name="assignments"]:checked')?.value,
                        resources: document.querySelector('input[name="resources"]:checked')?.value,
                        email: document.querySelector('input[name="email"]:checked')?.value,
                        syllabus: document.querySelector('input[name="syllabus"]:checked')?.value,
                        tests: document.querySelector('input[name="tests"]:checked')?.value
                    },
                    timezone: document.querySelector('#timezone').value,
                    language: document.querySelector('#language').value,
                    siteDisplay: document.querySelector('input[name="show-desc"]:checked')?.value,
                    favoriteSites: Array.from(document.querySelectorAll('input[name="favorite-sites"]:checked')).map(el => el.value),
                    editorMode: document.querySelector('input[name="editor-mode"]:checked')?.value
                };
                
                // Here you would typically send this data to a server
                console.log('Saving preferences:', preferences);
                
                // Show saved confirmation
                showSaveSuccess();
                
                // Reset button state
                saveButton.innerText = "Save Preferences";
                saveButton.disabled = false;
            }, 1000);
        });
    }
    
    // Reset Button Functionality
    const resetButton = document.querySelector('.reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset all preferences to default values?')) {
                // Add loading state
                resetButton.innerText = "Resetting...";
                resetButton.disabled = true;
                
                setTimeout(function() {
                    // Reset radio buttons to defaults
                    document.querySelectorAll('input[value="daily"]').forEach(radio => {
                        radio.checked = true;
                    });
                    
                    document.querySelector('#assignments-send').checked = true;
                    document.querySelector('#show-desc-yes').checked = true;
                    document.querySelector('#editor-auto').checked = true;
                    
                    // Reset timezone and language
                    document.querySelector('#timezone').value = 'GMT+0';
                    document.querySelector('#language').value = 'en';
                    
                    // Reset favorite sites (check only first 5 odd semester courses)
                    document.querySelectorAll('input[name="favorite-sites"]').forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    
                    for (let i = 1; i <= 5; i++) {
                        const checkbox = document.querySelector(`#odd-subject${i}`);
                        if (checkbox) checkbox.checked = true;
                    }
                    
                    // Show success message
                    showResetSuccess();
                    
                    // Reset button state
                    resetButton.innerText = "Reset to Defaults";
                    resetButton.disabled = false;
                }, 800);
            }
        });
    }
    
    // Function to show save success message
    function showSaveSuccess() {
        // Check if message element exists
        let successMessage = document.querySelector('.save-success');
        
        // If not, create it
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'save-success';
            const buttonContainer = document.querySelector('.button-container');
            buttonContainer.parentNode.insertBefore(successMessage, buttonContainer);
        }
        
        // Set message and show
        successMessage.textContent = 'Your preferences have been saved successfully!';
        successMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    // Function to show reset success message
    function showResetSuccess() {
        // Check if message element exists
        let successMessage = document.querySelector('.save-success');
        
        // If not, create it
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'save-success';
            const buttonContainer = document.querySelector('.button-container');
            buttonContainer.parentNode.insertBefore(successMessage, buttonContainer);
        }
        
        // Set message and show
        successMessage.textContent = 'Your preferences have been reset to default values.';
        successMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    // Add section-specific classes for styling
    function addSectionClasses() {
        const sectionBoxes = document.querySelectorAll('.section-box');
        
        sectionBoxes.forEach((box, index) => {
            const heading = box.querySelector('h2');
            if (heading) {
                const headingText = heading.textContent.toLowerCase();
                
                if (headingText.includes('notification')) {
                    box.classList.add('notification-box');
                } else if (headingText.includes('time zone')) {
                    box.classList.add('timezone-box');
                } else if (headingText.includes('language')) {
                    box.classList.add('language-box');
                } else if (headingText.includes('sites')) {
                    box.classList.add('sites-box');
                } else if (headingText.includes('editor')) {
                    box.classList.add('editor-box');
                }
            }
        });
    }
});