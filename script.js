const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Only run if the button exists
if (themeToggleButton) {
    // Set correct button text on load
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Toggle Light Mode';
    } else {
        themeToggleButton.textContent = 'Toggle Dark Mode';
    }

    // Toggle theme on click
    themeToggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Toggle Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = 'Toggle Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
}