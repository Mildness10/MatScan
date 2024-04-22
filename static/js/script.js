/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const image_input = document.querySelector('#image_input');
const image_preview = document.querySelector('#image_preview');

image_input.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image_preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        image_preview.src = ''; 
    }
});



const image_form = document.querySelector('#image_form');
const loadingContainer = document.querySelector('#loading');
const responseContainer = document.querySelector('#response_container');

image_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(image_form);
    
    try {
        // Show loading icon and text
        loadingContainer.style.display = 'block';
        
        const response = await fetch('', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const data = await response.json();
            
            // Clear loading icon and text
            loadingContainer.style.display = 'none';
            
            responseContainer.innerHTML = ''; // Clear the container
            
            // Split the description into words
            const words = data.description.split(' ');
            
            // Display the response word by word
            for (let i = 0; i < words.length; i++) {
                setTimeout(() => {
                    responseContainer.textContent += words[i] + ' ';
                }, i * 50); // Adjust the delay as needed
            }
            
            // Add margin to the response container
            responseContainer.style.margin = '20px 50px'; // Adjust the margin as needed
        } else {
            throw new Error('Failed to process image');
        }
    } catch (error) {
        console.error(error);
    }
});

