document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const alertContainer = document.getElementById("formAlert");

    if (!name || !email || !message) {
        if (alertContainer) {
            alertContainer.innerHTML = "<div class='alert alert-danger'>Please fill in all fields.</div>";
        }
        return;
    }

    const recipient = "kmoniprojects@gmail.com";
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", recipient);
    gmailUrl.searchParams.set("su", `Portfolio inquiry from ${name}`);
    gmailUrl.searchParams.set(
        "body",
        [`Name: ${name}`, `Email: ${email}`, "", message].join("\n")
    );

    const gmailHref = gmailUrl.toString();
    const gmailWindow = window.open(gmailHref, "_blank", "noopener");

    if (!gmailWindow) {
        window.location.href = gmailHref;
    }

    if (alertContainer) {
        alertContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                Redirecting you to Gmail. If nothing opens, <a href="${gmailHref}" target="_blank" rel="noopener">click here</a>.
            </div>
        `;
    }

    this.reset();
});

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