"use strict";

/// Variables

// Nav
const sidebar = document.querySelector(".sidebar");

// Mainframe
const mainFrame = document.querySelector(".mainFrame").querySelector(".container").querySelector("img");

//Diplomas
const diplomas = document.getElementById("diplomas");
const dTimeline = diplomas.querySelector(".timeline");
const dContentList = dTimeline.querySelectorAll(".content");

// Experience
const cells = document.querySelectorAll(".cell");

// Projects





/// Functions

// Nav
function showSideBar()
{
    sidebar.style.display = "flex";
}

function hideSideBar()
{
    sidebar.style.display = "none";
}

//Mainframe
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    mainFrame.style.transform = `translateY(${-scrollY * 0.5}px)`;
})

// Diplomas

function dipDisplay(n)
{
    let d = dContentList[n];
    let t = d.querySelector(".text-box");
    if (t.style.display === "flex")
        t.style.display = "none";
    else
        t.style.display = "flex";
}


// Experience
cells.forEach(cell => {
    const closeButton = cell.querySelector('.close-button');

    cell.addEventListener('click', () => {
        if (!cell.classList.contains('active')) {
            cell.classList.add('active');
        }
    });

    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        cell.classList.remove('active');
    });
});



