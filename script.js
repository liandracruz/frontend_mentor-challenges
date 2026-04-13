const sectionLevels = document.querySelectorAll(".levels");

sectionLevels.forEach(level => {
    const header = level.querySelector("h2");

    header.addEventListener("click", () => {
        level.classList.toggle('closed');
    });
})
