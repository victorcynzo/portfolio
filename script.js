// Function to show content based on the clicked tab
function showContent(contentId, clickedElement) { // Takes the ID of the content section to display and the clicked element
    // Get all content sections on the page
    const contentSections = document.querySelectorAll('.content-section'); // Selects all elements with 'content-section' class
    
    // Hide all content sections by removing 'active' class
    contentSections.forEach(section => { // Loops through each content section
        section.classList.remove('active'); // Removes the 'active' class to hide the section
    });
    
    // Get all tab elements
    const tabs = document.querySelectorAll('.tab'); // Selects all elements with 'tab' class
    
    // Remove active class from all tabs
    tabs.forEach(tab => { // Loops through each tab
        tab.classList.remove('active'); // Removes the 'active' class from the tab
    });
    
    // Hide the default content message
    const defaultContent = document.querySelector('.default-content'); // Gets the default content message
    if (defaultContent) { // Checks if default content exists
        defaultContent.style.display = 'none'; // Hides the default content message
    }
    
    // Show the selected content section
    const targetContent = document.getElementById(contentId); // Gets the content section with the specified ID
    if (targetContent) { // Checks if the content section exists
        targetContent.classList.add('active'); // Adds 'active' class to make the section visible
    }
    
    // Add active class to the clicked tab
    if (clickedElement) { // Checks if clicked element is provided
        clickedElement.classList.add('active'); // Adds 'active' class to highlight the clicked tab
    }
}

// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() { // Runs when the HTML document is completely loaded
    // Add click event listeners to all tabs
    const tabs = document.querySelectorAll('.tab'); // Selects all tab elements
    tabs.forEach(tab => { // Loops through each tab
        tab.addEventListener('click', function(event) { // Adds a click event listener to each tab with event parameter
            // Get the content ID from the onclick attribute or data attribute
            const onclickAttr = this.getAttribute('onclick'); // Gets the onclick attribute value
            if (onclickAttr) { // Checks if onclick attribute exists
                // Extract the content ID from the onclick function call
                const match = onclickAttr.match(/showContent\('(.+)'\)/); // Uses regex to extract the content ID
                if (match) { // Checks if a match was found
                    const contentId = match[1]; // Gets the content ID from the regex match
                    showContent(contentId, this); // Calls the showContent function with the extracted ID and clicked element
                }
            }
        });
    });
    
    // Ensure default content is shown on page load (no tabs active initially)
    const defaultContent = document.querySelector('.default-content'); // Gets the default content message
    if (defaultContent) { // Checks if default content exists
        defaultContent.style.display = 'block'; // Shows the default content message
    }
});