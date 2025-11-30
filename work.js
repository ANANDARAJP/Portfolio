// ================= NAVBAR SECTION SWITCHING =================

// Select the menu toggle button and the menu container
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggle the menu visibility when the toggle button is clicked
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show'); // Adds or removes 'show' class to display/hide menu
});

// Select all navbar links and content sections
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');

/**
 * Show the section corresponding to targetId and hide all other sections.
 * Scrolls smoothly to the top of the target section.
 */
function showSection(targetId) {
    // Loop through all sections to toggle 'active' class
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active'); // Show this section
        } else {
            section.classList.remove('active'); // Hide other sections
        }
    });

    // Scroll the page smoothly to the section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop, // Position of the section
            behavior: 'smooth' // Smooth scroll effect
        });
    }
}

// Add click event listener to each navbar link
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor navigation

        const target = link.dataset.target; // Get the target section ID from data attribute
        if (target) {
            showSection(target); // Display the selected section
        }
    });
});


// ================= THEME TOGGLE =================

// Select the theme toggle button and the icon element
const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("themeIcon");
const root = document.documentElement; // Root element to apply theme classes

// Function to apply a given theme
function applyTheme(theme) {
    if (theme === "dark") {
        root.classList.add("dark-mode"); // Apply dark mode
        if (icon) icon.textContent = "light_mode"; // Change icon to sun
    } else {
        root.classList.remove("dark-mode"); // Remove dark mode
        if (icon) icon.textContent = "dark_mode"; // Change icon to moon
    }
}

// Load saved theme from localStorage when page loads
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
}

// Toggle theme on button click
if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = root.classList.toggle("dark-mode"); // Toggle dark mode class
        if (isDark) {
            if (icon) icon.textContent = "light_mode"; // Show sun icon
            localStorage.setItem("theme", "dark"); // Save dark mode preference
        } else {
            if (icon) icon.textContent = "dark_mode"; // Show moon icon
            localStorage.setItem("theme", "light"); // Save light mode preference
        }
    });
}


// ================= SMOOTH SCROLL FOR ANCHOR LINKS =================

// Select all anchor links that start with '#' for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== "#") { // Ignore links with only '#'
            e.preventDefault(); // Prevent default jump to anchor

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target section
            }
        }
    });
});
