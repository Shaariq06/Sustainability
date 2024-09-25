// Function to open the appropriate tab
function openTab(event, tabName) {
    // Get all elements with class="tab-content" and hide them
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Initialize the first tab as active
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-content').style.display = "block";
});