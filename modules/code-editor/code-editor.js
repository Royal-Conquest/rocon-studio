









// ACE EDITOR :

import { console } from "../console/console.js";
import { autoComplete } from "../auto-complete/auto-complete.js";

export function codeEditor(){
    const editor = ace.edit("code-editor");

    editor.session.setMode("ace/mode/javascript");

    editor.setTheme("ace/theme/monokai");

    editor.setOptions({
        fontSize: "10pt",
        showLineNumbers: true,
        showGutter: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true, 
        customScrollbar: false
    });

    function getCursorXPosition() {
        const cursorPosition = editor.getCursorPosition();
        const screenPos = editor.renderer.textToScreenCoordinates(cursorPosition.row, cursorPosition.column); // Converte para coordenadas de tela
        
        return {
            cursorX: screenPos.pageX,
            cursorY: screenPos.pageY
        };
    }

    function getWordAtCursor() {
        const cursorPosition = editor.getCursorPosition(); // Obtém a posição do cursor (linha, coluna)
        const wordRange = editor.session.getWordRange(cursorPosition.row, cursorPosition.column); // Obtém o intervalo da palavra
        return editor.session.getTextRange(wordRange); 
    }

    editor.on("input", function() {
        const getCursorCoordenate = getCursorXPosition();
        const  getWord = getWordAtCursor();
        console(getCursorCoordenate.cursorX);
        console(getWordAtCursor());
        setAutoComplete(getWord,getCursorCoordenate.cursorX,getCursorCoordenate.cursorY)

    });

    function setAutoComplete(value,x,y){
        autoComplete(value,x,y)
    }

}                                                               