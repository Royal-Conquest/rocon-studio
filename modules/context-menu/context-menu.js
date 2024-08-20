










// CONTEXT MENU : 

import { getUi } from "../get-ui/get-ui.js";

const contextMenuContainer = getUi("context-menu-container");

export function contextMenu(context, event) {
    console.log("Context array:", context); 

    contextMenuContainer.innerHTML = "";

    context.forEach(function(contexts) {
        
        const contextMenuButton = document.createElement("div");
        contextMenuButton.classList.add("context-menu-button");
        contextMenuButton.id = contexts.id; 

        const contextMenuLabel = document.createElement("span");
        contextMenuLabel.textContent = contexts.name;

        const contextMenuButtonIcon = document.createElement("i");
        contextMenuButtonIcon.classList.add(`${contexts.icon}`);
        
        contextMenuButton.appendChild(contextMenuButtonIcon);
        contextMenuButton.appendChild(contextMenuLabel)
        contextMenuContainer.appendChild(contextMenuButton);

    });

    const mouseX = event.clientX;
    const mouseY = event.clientY;

   

    const contextMenuContainerRect = contextMenuContainer.getBoundingClientRect();

    function setPosition(){
        contextMenuContainer.style.left = `${mouseX}px`;
        contextMenuContainer.style.top = `${mouseY}px`;
        contextMenuContainer.style.bottom = "auto";

        if (contextMenuContainerRect.bottom > window.innerHeight - 50){
            contextMenuContainer.style.bottom = `${10}px`;
            contextMenuContainer.style.top = "auto";
        }
    }

    contextMenuContainer.addEventListener("click",function(){
        contextMenuContainer.style.display = "none";
    })   

    contextMenuContainer.style.display = "flex"; 

    document.addEventListener("click", function handleClickOutside(e) {
        if (!contextMenuContainer.contains(e.target)) {
            contextMenuContainer.style.display = "none";
            document.removeEventListener("click", handleClickOutside);
        }
    });

    setPosition();
}

