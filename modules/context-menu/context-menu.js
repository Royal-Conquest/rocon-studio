










// CONTEXT MENU : 

import { getUi } from "../get-ui/get-ui.js";

const contextTemplate = [
    {
        name: "",
        id: "",
        icon: ""
    }
];

export function contextMenu(element, context) {
    const contextMenuContainer = getUi("context-menu-container");

    contextMenuContainer.innerHTML = "";

    context.forEach(contexts => {
        const contextMenuButton = document.createElement("button");
        contextMenuButton.classList.add("context-menu-button");
        contextMenuButton.textContent = contexts.name;
        contextMenuButton.id = contexts.id;

        const contextMenuButtonIcon = document.createElement("i");
        contextMenuButtonIcon.classList.add(contexts.icon);

        contextMenuButton.appendChild(contextMenuButtonIcon);
        contextMenuContainer.appendChild(contextMenuButton);
    });

    element.addEventListener("click", function (e) {
        e.preventDefault(); 
    
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        contextMenuContainer.style.left = `${mouseX}px`;
        contextMenuContainer.style.top = `${mouseY}px`;

        contextMenuContainer.style.display = "flex"; 
    });

    // document.addEventListener("click", function (e) {
    //     if (!contextMenuContainer.contains(e.target) && e.target !== element) {
    //         contextMenuContainer.style.display = "none";
    //     }
    // });
}
