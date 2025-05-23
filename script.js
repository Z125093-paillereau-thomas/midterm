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
const textBox = document.getElementById("expTextBox");
const expTexts = textBox.children;

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
function expDisplay(n)
{
    for (let el of expTexts)
    {
        el.style.display = "none";
    }
    expTexts[n].style.display = "block";
}

