const body = document.querySelector("body");
modeToggle = body.querySelector(".mode-toggle");
sidebarToggle = body.querySelector(".sidebar-toggle");
sidebar = body.querySelector("nav");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

// const dataRecent = [
//   {
//     id: "1",
//     name: "Adhista Dera",
//     email: "dera@mail.com",
//     joined: "2023-01-12",
//     type: "New",
//     status: "Liked",
//   },
//   {
//     id: "2",
//     name: "Willy Wonka",
//     email: "willy@mail.com",
//     joined: "2023-01-12",
//     type: "New",
//     status: "Liked",
//   },
//   {
//     id: "3",
//     name: "Mikasa Ancermen",
//     email: "mikasa@mail.com",
//     joined: "2023-01-12",
//     type: "New",
//     status: "Liked",
//   },
// ];
