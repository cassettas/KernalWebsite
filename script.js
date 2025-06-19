// Basic ASCII font for A-Z, 0-9, and space
const asciiFont = {
    'A': [
        "  ___  ",
        " / _ \\ ",
        "/ /_\\ \\",
        "|  _  |",
        "| | | |",
        "\\_| |_/"
    ],
    'B': [
        "______ ",
        "| ___ \\",
        "| |_/ /",
        "| ___ \\",
        "| |_/ /",
        "\\____/ "
    ],
    'C': [
        " _____ ",
        "/  __ \\",
        "| /  \\/",
        "| |    ",
        "| \\__/\\",
        " \\____/"
    ],
    'D': [
        "______ ",
        "|  _  \\",
        "| | | |",
        "| | | |",
        "| |/ / ",
        "|___/  "
    ],
    'E': [
        "______ ",
        "|  ___|",
        "| |__  ",
        "|  __| ",
        "| |___ ",
        "\\____/ "
    ],
    'F': [
        "______ ",
        "|  ___|",
        "| |_   ",
        "|  _|  ",
        "| |    ",
        "\\_|    "
    ],
    'G': [
        " _____ ",
        "|  __ \\",
        "| |  \\/",
        "| | __ ",
        "| |_\\ \\",
        " \\____/"
    ],
    'H': [
        " _   _ ",
        "| | | |",
        "| |_| |",
        "|  _  |",
        "| | | |",
        "\\_| |_/"
    ],
    'I': [
        "_____",
        "|_   |",
        "  | |",
        "  | |",
        "/\\_/ /",
        "\\___/ "
    ],
    'J': [
        "     _ ",
        "    | |",
        "    | |",
        "/\\__/ /",
        "\\____/ "
    ],
    'K': [
        " _   __",
        "| | / /",
        "| |/ / ",
        "|    \\ ",
        "| |\\  \\",
        "\\_| \\_/"
    ],
    'L': [
        " _     ",
        "| |    ",
        "| |    ",
        "| |    ",
        "| |____",
        "\\_____/"
    ],
    'M': [
        "___  ___",
        "|  \\/  |",
        "| .  . |",
        "| |\\/| |",
        "| |  | |",
        "\\_|  |_/"
    ],
    'N': [
        " _   _ ",
        "| \\ | |",
        "|  \\| |",
        "| . ` |",
        "| |\\  |",
        "\\_| \\_/"
    ],
    'O': [
        " _____ ",
        "|  _  |",
        "| | | |",
        "| | | |",
        "| |/ / ",
        "|___/  "
    ],
    'P': [
        "______ ",
        "| ___ \\",
        "| |_/ /",
        "|  __/ ",
        "| |    ",
        "\\_|    "
    ],
    'Q': [
        " _____ ",
        "|  _  |",
        "| | | |",
        "| | | |",
        "| |/ / ",
        "|_/\\_\\ "
    ],
    'R': [
        "______ ",
        "| ___ \\",
        "| |_/ /",
        "|    / ",
        "| |\\ \\ ",
        "\\_| \\_|"
    ],
    'S': [
        " _____ ",
        "/  ___|",
        "\\ `--. ",
        " `--. \\",
        "/\\__/ /",
        "\\____/ "
    ],
    'T': [
        "______ ",
        "|_   _|",
        "  | |  ",
        "  | |  ",
        "  | |  ",
        "  \\_/  "
    ],
    'U': [
        " _   _ ",
        "| | | |",
        "| | | |",
        "| | | |",
        "| |_| |",
        "\\_____/"
    ],
    'V': [
        " _   _ ",
        "| | | |",
        "| | | |",
        "| | | |",
        "\\ \\_/ /",
        " \\___/ "
    ],
    'W': [
        " _    _ ",
        "| |  | |",
        "| |  | |",
        "| |/\\| |",
        "\\  /\\  /",
        " \\/  \\/ "
    ],
    'X': [
        "__   __",
        "\\ \\ / /",
        " \\ V / ",
        " /   \\ ",
        "/ /^\\ \\",
        "\\/   \\/"
    ],
    'Y': [
        "__   __",
        "\\ \\ / /",
        " \\ V / ",
        "  \\ /  ",
        "  | |  ",
        "  \\_/  "
    ],
    'Z': [
        "______",
        "|___  /",
        "   / / ",
        "  / /  ",
        "./ /___",
        "\\_____/"
    ],
    '0': [
        " _____ ",
        "|  _  |",
        "| |/' |",
        "|  /| |",
        "| |_/ /",
        "\\___/ "
    ],
    '1': [
        " __ ",
        "/  |",
        "`| |",
        " | |",
        "_| |_",
        "\\___/"
    ],
    '2': [
        " ____  ",
        "|___ \\ ",
        "  __) |",
        " / __/ ",
        "|_____|",
        "       "
    ],
    '3': [
        " _____ ",
        "|___ / ",
        "  |_ \\ ",
        " ___) |",
        "|____/ "
    ],
    '4': [
        " _  _   ",
        "| || |  ",
        "| || |_ ",
        "|__   _|",
        "   | |  ",
        "   |_|  "
    ],
    '5': [
        " ____  ",
        "| ___| ",
        "|___ \\ ",
        " ___) |",
        "|____/ "
    ],
    '6': [
        "  __   ",
        " / /   ",
        "/ /_   ",
        "| '_ \\ ",
        "| (_) |",
        " \\___/ "
    ],
    '7': [
        " ______",
        "|___  /",
        "   / / ",
        "  / /  ",
        " /_/   "
    ],
    '8': [
        "  ___  ",
        " ( _ ) ",
        " / _ \\ ",
        "| (_) |",
        " \\___/ "
    ],
    '9': [
        "  ___  ",
        " / _ \\ ",
        "| (_) |",
        " \\__, |",
        "   /_/ "
    ],
    ' ': [
        "  ",
        "  ",
        "  ",
        "  ",
        "  ",
        "  "
    ]
};

// Converts text to ASCII art using the asciiFont above
function renderAsciiTitle(text) {
    text = text.toUpperCase();
    const lines = ["", "", "", "", "", ""];
    for (let char of text) {
        const ascii = asciiFont[char] || asciiFont[' '];
        for (let i = 0; i < lines.length; i++) {
            lines[i] += ascii[i] + " ";
        }
    }
    document.getElementById('ascii-title').textContent = lines.join('\n');
}

let pulseHasRunGlobal = false;

function generateReleasesTable() {
    if (!window.releases || !Array.isArray(releases)) return;
    const container = document.getElementById('releases-table');
    if (!container) return;

    // Create table
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Title', 'Year'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.textAlign = 'left';
        th.style.borderBottom = '1px solid #333';
        th.style.padding = '0.5rem 0';
        th.style.color = '#fff'; // ensure header is white
        th.style.fontFamily = 'inherit';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement('tbody');
    releases.forEach(release => {
        const row = document.createElement('tr');
        const tdTitle = document.createElement('td');
        // --- Begin: wrap link in container (no pulse effect) ---
        if (release.url) {
            const containerDiv = document.createElement('span');
            containerDiv.className = 'release-link-container';
            const a = document.createElement('a');
            a.textContent = release.title;
            a.href = release.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'release-link';
            containerDiv.appendChild(a);

            // Add icon for "call u mine"
            if (release.title.toLowerCase() === "call u mine") {
                const customIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                customIcon.setAttribute("width", "18");
                customIcon.setAttribute("height", "18");
                customIcon.setAttribute("viewBox", "0 0 24 24");
                customIcon.setAttribute("fill", "none");
                customIcon.setAttribute("stroke", "#aaa");
                customIcon.setAttribute("stroke-width", "2");
                customIcon.setAttribute("stroke-linecap", "round");
                customIcon.setAttribute("stroke-linejoin", "round");
                customIcon.style.verticalAlign = "middle";
                customIcon.style.marginLeft = "0.4em";
                customIcon.classList.add("custom-link-icon");
                // Use <path> from provided SVG, but set fill to "none" and use stroke for color
                customIcon.innerHTML = `
                  <path d="M14 5h-2v4H6v2H4v6h2v-2h6v4h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2z" fill="none" stroke="currentColor"/>
                `;
                containerDiv.appendChild(customIcon);

                // Change icon color on link hover/focus
                a.addEventListener('mouseenter', () => {
                    customIcon.style.color = "#ff2222";
                });
                a.addEventListener('mouseleave', () => {
                    customIcon.style.color = "#aaa";
                });
                a.addEventListener('focus', () => {
                    customIcon.style.color = "#ff2222";
                });
                a.addEventListener('blur', () => {
                    customIcon.style.color = "#aaa";
                });
                // Set initial color
                customIcon.style.color = "#aaa";
            }

            tdTitle.appendChild(containerDiv);
        } else {
            tdTitle.textContent = release.title;
        }
        // --- End: wrap link in container (no pulse effect) ---

        tdTitle.style.letterSpacing = '1px';
        tdTitle.style.padding = '0.5rem 0';
        tdTitle.style.color = '#fff'; // ensure cell is white
        tdTitle.style.fontFamily = 'inherit';
        tdTitle.style.fontWeight = '300';

        const tdYear = document.createElement('td');
        tdYear.textContent = `(${release.year})`;
        tdYear.style.color = '#aaa';
        tdYear.style.fontStyle = 'italic';
        tdYear.style.padding = '0.5rem 0';
        tdYear.style.fontFamily = 'inherit';
        tdYear.style.fontWeight = '300';

        row.appendChild(tdTitle);
        row.appendChild(tdYear);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Clear and append
    container.innerHTML = '';
    container.appendChild(table);
}


