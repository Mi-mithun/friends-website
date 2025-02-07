function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0px";
    } else {
        sidebar.style.left = "-250px";
    }
}
