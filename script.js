"use strict";

function showSideBar()
{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSideBar()
{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

function expDisplay(n)
{
    const textBox = document.getElementById("expTextBox");
    let a = textBox.children;
    for (let el of a)
    {
        el.style.display = "none";
    }
    a[n].style.display = "block";
}