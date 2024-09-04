


// ASSET TAB:

import { getUi } from "../get-ui/get-ui.js";
import { console } from "../console/console.js";

export function assetTab() {

    function simpleFileViewer() {
        const simplePreviewContainer = getUi("simple-preview-container");
        const simpleImagePreview = getUi("simple-image-preview");

        let zoomState = false;

        simplePreviewContainer.addEventListener("click", function(e) {
            zoomState = !zoomState;
            if (zoomState) {
                simpleImagePreview.style.height = "135%";
                simpleImagePreview.style.cursor = "zoom-out";
                zoomToPosition(e);
            } else {
                simpleImagePreview.style.height = "";
                simpleImagePreview.style.cursor = "";
                simpleImagePreview.style.left = "auto";
                simpleImagePreview.style.top = "auto";
            }
        });

        function zoomToPosition(e) {
            if (zoomState) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                simpleImagePreview.style.left = `${-mouseX + simpleImagePreview.offsetWidth / 2}px`;
                simpleImagePreview.style.top = `${-mouseY + simpleImagePreview.offsetHeight / 2}px`;
            }
        }

        simplePreviewContainer.addEventListener("mousemove", function(e) {
            if (zoomState) {
                zoomToPosition(e);
            }
        });
    }

    simpleFileViewer();
}
