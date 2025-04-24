document.addEventListener('DOMContentLoaded', function() {
    // Simulate logout process
    setTimeout(function() {
        // Clear any authentication tokens/cookies
        clearAuthData();
        
        // Hide the loading spinner and show success message
        document.querySelector('.spinner').style.display = 'none';
        document.getElementById('logout-message').style.display = 'none';
        document.getElementById('success-message').classList.remove('hidden');
        
        // Show background image and enhance card appearance when logout is successful
        const backgroundElement = document.getElementById('success-background');
        backgroundElement.classList.remove('hidden');
        setTimeout(() => {
            backgroundElement.classList.add('active');
            document.querySelector('.logout-card').classList.add('success');
        }, 50);
        
    }, 2000); // Show logout animation for 2 seconds
});

function clearAuthData() {
    // Clear localStorage items
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Clear session storage
    sessionStorage.clear();
    
    // Clear cookies (basic approach)
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    // You may need to add specific cookie deletion based on your auth system
    console.log('User logged out successfully');
}