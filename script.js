"use strict";

/// Variables

// Nav
const sidebar = document.querySelector(".sidebar");

// Mainframe
const header = document.querySelector("header").querySelector(".container").querySelector("img");

//Diplomas
const diplomas = document.getElementById("diplomas");
const dTimeline = diplomas.querySelector(".timeline");
const dContentList = dTimeline.querySelectorAll(".content");

// Experience
const expCells = document.getElementById("experiences").querySelectorAll(".cell");

// Projects
const projItems = document.getElementById("projects").querySelectorAll(".item");




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
    header.style.transform = `translateY(${-scrollY * 0.5}px)`;
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
expCells.forEach(cell => {
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

// Projects

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



