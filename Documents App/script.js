
"use strict";
addEventListener("DOMContentLoaded", () => {
    //// thumbnail hack
    if (navigator.userAgent.includes("Headless")) {
        document.documentElement.style.setProperty("--transition-speed-fast", "0s");
        document.documentElement.style.setProperty("--transition-speed-medium", "0s");
        document.documentElement.style.setProperty("--transition-speed-slow", "0s");
        //const workInProgress = `<span style="position: absolute; inset-inline: 0; inset-block-end: 0; inline-size: 100%; color: #fff; background-color: #2c2446; font-size: 3rem; font-weight: bold; text-align: center; padding: 0.5rem;">Work in progress…<span>`;
        //document.body.insertAdjacentHTML("beforeend", workInProgress);
        document.body.style.setProperty("padding-block-end", "0");
        document.body.style.setProperty("margin-block-start", "152px");
        document.body.style.setProperty("min-block-size", "0");
        document.body.style.setProperty("block-size", "calc(100vh - 304px)");
        document.body.style.setProperty("position", "relative");
    }

    //// files
    let files = [
        {
            id: 1,
            filename: "Landing page copy",
            filetype: "docx",
            path: "Scrumbs",
        },
        {
            id: 2,
            filename: "Feature brief",
            filetype: "pptx",
            path: "Scrumbs",
        },
        {
            id: 3,
            filename: "Logo",
            filetype: "ai",
            path: "Scrumbs",
        },
    ];

    //// file types
    let filetypes = [
        {
            filetype: "ai",
            mime: "application/illustrator",
            icon: `<svg viewBox="0 0 32 32"><path fill="#fff" d="M3.17 3.52h25.66v24.96H3.18Z"/><path fill="#ff7f18" d="M3.17 3.52h25.66v24.96H3.18ZM2 29.65h28V2.35H2Zm18.34-17.57c0-.1.04-.14.14-.14h1.83c.1 0 .14.03.14.14v9.2c0 .1-.02.14-.14.14h-1.8c-.12 0-.16-.05-.16-.15v-9.19Zm-.13-2.65a1.19 1.19 0 0 1 2.38 0 1.11 1.11 0 0 1-1.21 1.2 1.1 1.1 0 0 1-1.17-1.2Zm-5.25 6.49c-.33-1.3-1.1-4.12-1.39-5.48h-.02a80.39 80.39 0 0 1-1.35 5.48Zm-3.24 1.89-.92 3.5c-.03.1-.06.12-.18.12H8.91c-.12 0-.14-.04-.12-.18l3.32-11.6a3.78 3.78 0 0 0 .11-.97c0-.08.04-.11.1-.11h2.45c.08 0 .11.02.14.11l3.7 12.6c.03.08 0 .14-.09.14H16.6c-.1 0-.16-.02-.18-.1l-.96-3.5h-3.73Z"/></svg>`,
            color: "#ff7f18",
        },
        {
            filetype: "docx",
            mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            icon: `<svg viewBox="0 0 32 32"><path fill="#283c82" d="M18.54 2.32v2.55c3.4.02 7.12-.04 10.52.02a.78.78 0 0 1 .9.86c.06 6.26 0 12.89.04 19.16-.02.4.01 1.11-.05 1.51-.08.51-.3.6-.82.68-.28.04-.76.03-1.04.04h-9.55v2.54L2 27.13V4.87l16.54-2.55"/><path fill="#fff" d="M18.54 5.82h10.5v20.36h-10.5v-2.54h8.27v-1.28h-8.27v-1.59h8.27V19.5h-8.27v-1.59h8.27v-1.27h-8.27v-1.6h8.27v-1.27h-8.27v-1.59h8.27v-1.27h-8.27V9.32h8.27V8.05h-8.27V5.82m-9.97 5.62 1.82-.09c.42 2.15.85 4.3 1.31 6.43.36-2.2.76-4.4 1.14-6.61.64-.02 1.27-.06 1.9-.1-.71 3.08-1.34 6.19-2.13 9.25-.53.28-1.32-.01-1.95.03-.43-2.1-.92-4.2-1.3-6.31-.37 2.06-.85 4.1-1.28 6.14l-1.84-.12c-.53-2.8-1.15-5.57-1.64-8.38l1.64-.07c.32 2.03.7 4.05.98 6.07l1.35-6.24"/></svg>`,
            color: "#283c82",
        },
        {
            filetype: "pptx",
            mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            icon: `<svg viewBox="0 0 32 32"><path fill="#d33922" d="M18.54 2.32v2.86c3.4.02 7.35-.03 10.75.02.64 0 .67.57.68 1.06.05 5.95-.01 12.06.03 18l-.01 1.35c-.03.82-.44.86-1.26.88l-.65.02c-3.18-.02-6.36-.01-9.54-.01v3.18L2 27.13V4.87l16.54-2.55"/><path fill="#fff" d="M18.54 6.14h10.5v19.4h-10.5V23h7.63v-1.27h-7.63v-1.6h7.63v-1.27h-7.63V17a4.47 4.47 0 0 0 3.81-.37 4.35 4.35 0 0 0 1.96-3.48h-4.18c0-1.39.01-2.77-.03-4.15l-1.57.32V6.14"/><path fill="#d33922" d="M20.77 8.32a4.48 4.48 0 0 1 4.18 4.17c-1.4.02-2.8.01-4.19.01V8.32"/><path fill="#fff" d="M7.1 10.73c1.73.08 3.82-.69 5.25.6 1.37 1.67 1.01 4.73-1.02 5.73a4.7 4.7 0 0 1-2.33.29v3.73l-1.9-.16c-.02-3.4-.03-6.8 0-10.2"/><path fill="#d33922" d="M9 12.45c.62-.03 1.4-.15 1.82.44a2.3 2.3 0 0 1 .04 2.09c-.36.65-1.18.59-1.82.67a44.92 44.92 0 0 1-.05-3.2"/></svg>`,
            color: "#d33922",
        },
    ];

    const filesDOM = document.querySelector("#files");

    function generateFileHTML(file) {
        let filetype = filetypes.find((filetype) => filetype.filetype === file.filetype);
        let html = `<li><a data-id="${file.id}" href="${file.filename.replaceAll(" ", "-")}.${file.filetype}">`;
        if (filetype?.icon) html += `<div style="border-color:${filetype.color}33;background-color:${filetype.color}11">${filetype.icon}</div>`;
        else html += `<div style="border-color:#0003;background-color:#0001"><svg viewBox="0 0 1024 1024"><path d="M855 289 639 73c-6-6-14-9-22-9H192c-18 0-32 14-32 32v832c0 18 14 32 32 32h640c18 0 32-14 32-32V311c0-8-3-16-9-22zm-65 37H602V138l188 188zm2 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM402 549c0 5 4 10 10 10h32c6 0 10-5 10-10 0-28 26-51 58-51s58 23 58 51c0 25-21 47-49 51-20 3-35 20-35 40v32c0 6 5 10 10 10h32c6 0 10-4 10-10v-12c0-6 4-12 10-14 44-14 75-53 74-98-1-56-49-101-108-102-62-1-112 46-112 103zm78 195a32 32 0 1 0 64 0 32 32 0 1 0-64 0z"/></svg></div>`;
        html += `<span>${file.path} / ${file.filename}</span>`;
        html += `</a></li>`;
        return html;
    }

    function generateFilesHTML(files) {
        let html = ``;
        files.forEach((file) => {
            html += generateFileHTML(file);
        });
        return html;
    }

    function downloadLinks() {
        document.querySelectorAll("#files a").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const link = event.target.closest("a");
                const file = files.find((file) => file.id === parseInt(link.getAttribute("data-id")));
                const filetype = filetypes.find((filetype) => filetype.filetype === file.filetype);
                const downloadLink = document.createElement("a");
                downloadLink.download = `${file.filename.replaceAll(" ", "-")}.${file.filetype}`;
                downloadLink.href = file.content;
                downloadLink.click();
            });
        });
    }

    filesDOM.innerHTML = generateFilesHTML(files);
    downloadLinks();

    //// add new files
    document.querySelector("#add-new").addEventListener("click", (event) => {
        const inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.accept = "*";
        inputFile.multiple = "multiple";
        inputFile.addEventListener("change", (event) => {
            [...event.target.files].forEach((file) => {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (event) {
                    files.push({
                        id: files.length + 1,
                        filename: file.name.split(".").slice(0, -1).join("."),
                        filetype: file.name.split(".").pop(),
                        path: "New",
                        content: event.target.result,
                    });
                    filesDOM.innerHTML = generateFilesHTML(files);
                    downloadLinks();
                };
                reader.onerror = function (event) {
                    console.log(`Error loading file: ${file.name}`);
                    console.log(event.target.error);
                };
            });
        });
        inputFile.dispatchEvent(new MouseEvent("click"));
    });

    //// search
    function search(query, files) {
        const regexp = new RegExp(query, "g");
        const results = files.filter((file) => (file.filename + file.filetype + file.path).toLowerCase().match(regexp));
        filesDOM.innerHTML = generateFilesHTML(results);
        downloadLinks();
    }

    document.querySelector("main form").addEventListener("submit", (event) => {
        event.preventDefault();
    });

    document.querySelector("#search").addEventListener("input", (event) => {
        let query = event.target.value.trim().toLowerCase();
        if (query.length > 0) search(query, files);
        else {
            filesDOM.innerHTML = generateFilesHTML(files);
            downloadLinks();
        }
    });

    //// close notification
    document.querySelector("aside").addEventListener("animationend", (event) => {
        if (event.target.classList.contains("hiding")) {
            event.target.hidden = true;
            event.target.classList.remove("hiding");
        }
    });

    document.querySelector("aside .close-button").addEventListener("click", (event) => {
        event.target.closest("aside").classList.add("hiding");
    });

    //// modals
    document.querySelectorAll("dialog").forEach((dialog) => {
        // close .hiding dialog after animation ends
        dialog.addEventListener("animationend", (event) => {
            if (event.target.classList.contains("hiding")) {
                event.target.close();
                event.target.classList.remove("hiding");
            }
        });
        // add .hiding class when clicked on modal backdrop
        dialog.addEventListener("click", (event) => {
            const dialog = event.target.closest("dialog");
            const rect = dialog.getBoundingClientRect();
            const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
            if (!isInDialog && event.target.tagName === "DIALOG") {
                dialog.classList.add("hiding");
            }
        });
    });
    /// modals close buttons
    const modalCloseButtons = document.querySelectorAll("dialog .close-button");
    modalCloseButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.closest("button").blur();
            event.target.closest("dialog").classList.add("hiding");
        });
    });

    //// settings
    const settingsModal = document.querySelector("#settings-modal");

    /// open settings modal
    const settingsOpenButtonHtml = `
	  <button class="settings-open-button">
			<svg class="icon" width="24" height="24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M6 4v4"></path>
				<path d="M6 12v8"></path>
				<path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M12 4v10"></path>
				<path d="M12 18v2"></path>
				<path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
				<path d="M18 4v1"></path>
				<path d="M18 9v11"></path>
			</svg>
			<span>settings</span>
		</button>`;
    document.body.insertAdjacentHTML("beforeend", settingsOpenButtonHtml);
    const settingsOpenButtons = document.querySelectorAll(".settings-open-button");
    settingsOpenButtons.forEach((button) => {
        button.addEventListener("click", () => {
            settingsModal.showModal();
        });
    });

    /// dark mode
    const settingsDarkmode = document.querySelector("#settings-darkmode");
    if (document.documentElement.getAttribute("data-theme") === "dark") settingsDarkmode.checked = true;
    else settingsDarkmode.checked = false;
    settingsDarkmode.addEventListener("change", () => {
        if (settingsDarkmode.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    });

    /// accent color
    const settingsHue = document.querySelector("#settings-hue");
    settingsHue.value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent-1-h");
    settingsHue.addEventListener("input", () => {
        document.documentElement.style.setProperty("--color-accent-1-h", settingsHue.value);
    });
});

                    