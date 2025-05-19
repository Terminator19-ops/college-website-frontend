// Function to create interactive calendar
function createInteractiveCalendar(container, calendarData) {
    // Create calendar container
    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'calendar-container';

    // Create month calendar
    const monthCalendar = document.createElement('div');
    monthCalendar.className = 'month-calendar';

    // Add month title
    const monthTitle = document.createElement('h3');
    monthTitle.textContent = `📅 ${calendarData.currentMonth}`;
    monthCalendar.appendChild(monthTitle);

    // Create calendar grid
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';

    // Add weekday headers
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-weekday';
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    });

    // Add blank cells for days before the 1st of the month
    for (let i = 0; i < calendarData.startDay; i++) {
        const blankCell = document.createElement('div');
        calendarGrid.appendChild(blankCell);
    }    // Add date cells (assuming 31 days in the month for simplicity)
    // In a real app, you'd calculate the correct number of days for the month
    const daysInMonth = 31;
      // Get current date to highlight "today"
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' }) + " " + today.getFullYear();
    const isCurrentMonth = calendarData.currentMonth === currentMonth;
    const currentDay = today.getDate();
    
    // If today has an event, automatically show it as selected
    let todayHasEvent = isCurrentMonth && calendarData.daysWithEvents.includes(currentDay);
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        let className = 'calendar-date';
        
        // Add has-event class if this day has an event
        if (calendarData.daysWithEvents.includes(day)) {
            className += ' has-event';
        }
        
        // Add today class if this is the current day
        if (isCurrentMonth && day === currentDay) {
            className += ' today';
        }
        
        dateElement.className = className;
        dateElement.textContent = day;
        dateElement.setAttribute('data-date', `${calendarData.currentMonth} ${day}`);
        calendarGrid.appendChild(dateElement);// Add click event to highlight the corresponding task
        if (calendarData.daysWithEvents.includes(day)) {
            dateElement.addEventListener('click', function() {
                // Remove active class from all dates
                document.querySelectorAll('.calendar-date').forEach(date => {
                    date.classList.remove('clicked');
                });
                
                // Add clicked class to this date
                this.classList.add('clicked');
                
                // Remove active class from all tasks
                document.querySelectorAll('.task-item').forEach(task => {
                    task.classList.remove('active-task');
                });
                
                // Add active class to the corresponding task
                const dateStr = this.getAttribute('data-date');
                const taskElement = document.querySelector(`.task-item[data-date="${dateStr}"]`);
                if (taskElement) {
                    taskElement.classList.add('active-task');
                    taskElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        }
    }

    // Append grid to month calendar
    monthCalendar.appendChild(calendarGrid);
    calendarContainer.appendChild(monthCalendar);

    // Create tasks list
    const tasksList = document.createElement('div');
    tasksList.className = 'tasks-list';

    // Add tasks title
    const tasksTitle = document.createElement('h3');
    tasksTitle.textContent = `📝 Course Activities`;
    tasksList.appendChild(tasksTitle);

    // Add tasks
    calendarData.events.forEach(event => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.setAttribute('data-date', event.date);

        const taskTitle = document.createElement('strong');
        taskTitle.textContent = `📅 ${event.date} - ${event.title}`;
        
        const taskDescription = document.createElement('span');
        taskDescription.textContent = event.description;

        taskItem.appendChild(taskTitle);
        taskItem.appendChild(taskDescription);
        tasksList.appendChild(taskItem);
          // Add click event to highlight the corresponding date
        taskItem.addEventListener('click', function() {
            // Remove active class from all tasks
            document.querySelectorAll('.task-item').forEach(task => {
                task.classList.remove('active-task');
            });
            
            // Add active class to this task
            this.classList.add('active-task');
            
            // Remove clicked class from all dates
            document.querySelectorAll('.calendar-date').forEach(date => {
                date.classList.remove('clicked');
            });
            
            // Find and highlight the corresponding date
            const dateStr = this.getAttribute('data-date');
            const dateElement = document.querySelector(`.calendar-date[data-date="${dateStr}"]`);
            if (dateElement) {
                // Add clicked class to the date
                dateElement.classList.add('clicked');
                
                // Scroll to the date element
                dateElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });    // After adding all elements, check if today has an event and highlight it
    if (todayHasEvent) {
        // Find today's date element and simulate a click
        const todayDateElement = document.querySelector(`.calendar-date.today.has-event`);
        if (todayDateElement) {
            todayDateElement.classList.add('clicked');
            
            // Also highlight the corresponding task
            const todayDateStr = `${calendarData.currentMonth} ${currentDay}`;
            const todayTaskElement = document.querySelector(`.task-item[data-date="${todayDateStr}"]`);
            if (todayTaskElement) {
                todayTaskElement.classList.add('active-task');
                // Scroll to the task after a small delay to ensure DOM is ready
                setTimeout(() => {
                    todayTaskElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        }
    }
    
    calendarContainer.appendChild(tasksList);
    container.appendChild(calendarContainer);
}
