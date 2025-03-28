
document.addEventListener("DOMContentLoaded", function () {
   
    const projets = document.querySelectorAll(".projet");
    projets.forEach((projet) => {
        projet.addEventListener("mouseenter", () => {
            projet.style.transform = "scale(1.05)";
        });
        projet.addEventListener("mouseleave", () => {
            projet.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Exemple d'animation simple
    const projetCards = document.querySelectorAll(".projet-card");
    projetCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});