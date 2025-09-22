const toggleDark = document.getElementById("toggleDark");
if (toggleDark) {
    toggleDark.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });
}

// onload
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}