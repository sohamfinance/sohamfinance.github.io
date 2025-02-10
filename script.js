document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".cta-button").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
});
