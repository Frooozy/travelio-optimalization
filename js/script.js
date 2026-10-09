var animationSpeed = 300;

function formatPrice(price) {
    return price.toLocaleString("cs-CZ") + " Kč";
}

document.querySelectorAll(".offer-btn").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
        const isOpen = document.getElementById(button.dataset.target).classList.toggle("open");
        button.textContent = isOpen ? "Skrýt nabídku" : "Zobrazit nabídku";
        button.setAttribute("aria-expanded", isOpen);
    });
});

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    formMessage.textContent = `Děkujeme, ${name}! Ozveme se vám do 24 hodin.`;
    form.reset();
});
