const buttons = document.querySelectorAll(".show-more-button");
buttons.forEach((button) => {
    const description = button.previousElementSibling;

    button.addEventListener("click", () => {
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            button.textContent = "Показать полностью";
        } else {
            description.style.maxHeight = description.scrollHeight + "px";
            button.textContent = "Скрыть";
        }
    });
});
