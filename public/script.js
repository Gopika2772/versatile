const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelector(".menu li");
    const selected = dropdown.querySelector(".selectet");

    Select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");

    });
    options.forEach(option => {
        option.addEventListener("click,()=>{
            selected.innerText = option.innerText;
        selected.classList.remove(select - clicket);
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach(options => {
            options.classList.remove("active");
        });
        option.classList.add("active");
    });
});
});
