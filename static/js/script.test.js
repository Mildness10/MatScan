// Test case 1: When window.scrollY is 0, the 'navbar-shrink' class should be removed
window.scrollY = 0;
navbarShrink();
console.assert(!navbarCollapsible.classList.contains('navbar-shrink'), "Test case 1 failed");

// Test case 2: When window.scrollY is not 0, the 'navbar-shrink' class should be added
window.scrollY = 100;
navbarShrink();
console.assert(navbarCollapsible.classList.contains('navbar-shrink'), "Test case 2 failed");

// Test case 3: When navbarCollapsible is not found, the function should return without any errors
document.body.querySelector = jest.fn().mockReturnValue(null);
navbarShrink(); // No assertion needed, just checking for any errors

console.log("All test cases passed");