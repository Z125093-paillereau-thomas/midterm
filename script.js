"use strict";

/// Variables

// Nav
const sidebar = document.querySelector(".sidebar");

// Header
const header = document.querySelector("header").querySelector(".container");

//Diplomas
const diplomas = document.getElementById("diplomas");
const dTimeline = diplomas.querySelector(".timeline");
const dContentList = dTimeline.querySelectorAll(".content");

// Experience
const expCells = document.getElementById("experiences").querySelectorAll(".cell");

// Projects
const projItems = document.getElementById("projects").querySelectorAll(".item");



/// Nav functions
// Showing the sidebar
function showSideBar() {
    sidebar.style.display = "flex";
}
// Showing the slidebar
function hideSideBar() {
    sidebar.style.display = "none";
}

/// Header functions
// Scrolls the header slower than the page
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.style.transform = `translateY(${-scrollY * 0.5}px)`;

})

/// Diplomas functions
// Displays the information of a given diploma
function dipDisplay(n) {
    let d = dContentList[n];
    let t = d.querySelector(".text-box");
    if (t.style.display === "flex")
        t.style.display = "none";
    else
        t.style.display = "flex";
}


/// Experiences functions
expCells.forEach(cell => {
    const closeButton = cell.querySelector('.close-button');

    // Locks the text of the cell in place when the cell is clicked
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('active')) {
            cell.classList.add('active');
        }
    });

    // Unlocks the text when the cross is clicked
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        cell.classList.remove('active');
    });
});

/// Projects functions
// Toggle the animation of the slider of a given project
projItems.forEach(item => {
    const slider = item.querySelector(".slider")
    const arrow = slider.querySelector('.arrow');

    arrow.addEventListener('click', (e) => {
        if (!slider.classList.contains('active')) {
            slider.classList.add('active');
            if (!item.classList.contains('active')){
                item.classList.add('active');
            }
        }
        else
        {
            e.stopPropagation();
            slider.classList.remove('active');
            if (item.classList.contains('active')){
                item.classList.remove('active');
            }
        }
    });


});



