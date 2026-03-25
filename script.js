const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Toggle Light Mode';
        } else {
            themeToggleButton.textContent = 'Toggle Dark Mode';
        }
    });
}