const menuItems = [
    { label: "Main Menu", href: "index.html" },
    { label: "puzzle1", href: "puzzle1.html" },
    { label: "puzzle2", href: "puzzle2.html" },
];

const menu = document.getElementById("menu");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

for (const item of menuItems) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.addEventListener("click", function() {
        window.location.href = item.href;
    });

    const slug = item.href.replace(/\.html$/, "");
    if (currentPage === item.href || currentPage === slug) {
        button.classList.add("active");
    }

    menu.appendChild(button);
}
