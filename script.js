const ROWS = 17;
const COLS = 16;

const entries = [
    {
        id: "h1",
        number: 1,
        answer: "EFICIENCIA",
        row: 0,
        col: 0,
        direction: "across"
    },
    {
        id: "h2",
        number: 2,
        answer: "LOGISTICA",
        row: 10,
        col: 2,
        direction: "across"
    },
    {
        id: "h3",
        number: 3,
        answer: "CAPACITACION",
        row: 8,
        col: 1,
        direction: "across"
    },
    {
        id: "h4",
        number: 4,
        answer: "INVENTARIO",
        row: 12,
        col: 5,
        direction: "across"
    },
    {
        id: "h5",
        number: 5,
        answer: "PROTOCOLOS",
        row: 4,
        col: 6,
        direction: "across"
    },
    {
        id: "h6",
        number: 6,
        answer: "EFICAZ",
        row: 6,
        col: 4,
        direction: "across"
    },
    {
        id: "v1",
        number: 1,
        answer: "EMPRESA",
        row: 0,
        col: 0,
        direction: "down"
    },
    {
        id: "v2",
        number: 2,
        answer: "RECURSOS",
        row: 2,
        col: 11,
        direction: "down"
    },
    {
        id: "v3",
        number: 3,
        answer: "PRODUCTOS",
        row: 8,
        col: 3,
        direction: "down"
    },
    {
        id: "v4",
        number: 4,
        answer: "INDUSTRIA",
        row: 0,
        col: 2,
        direction: "down"
    },
    {
        id: "v5",
        number: 5,
        answer: "EFECTIVIDAD",
        row: 5,
        col: 5,
        direction: "down"
    },
    {
        id: "v6",
        number: 6,
        answer: "LAYOUT",
        row: 1,
        col: 14,
        direction: "down"
    }
];

const crossword = document.querySelector("#crossword");
const currentClueLabel = document.querySelector("#current-clue-label");
const currentClueText = document.querySelector("#current-clue-text");
const previousClueButton = document.querySelector("#previous-clue");
const nextClueButton = document.querySelector("#next-clue");
const cells = [];
const entryMap = new Map(entries.map((entry) => [entry.id, entry]));
let activeEntryId = entries[0].id;

crossword.style.setProperty("--rows", ROWS);
crossword.style.setProperty("--cols", COLS);

function cellKey(row, col) {
    return `${row}-${col}`;
}

function getEntryCells(entry) {
    return [...entry.answer].map((letter, index) => {
        const row = entry.row + (entry.direction === "down" ? index : 0);
        const col = entry.col + (entry.direction === "across" ? index : 0);
        return { row, col, letter, key: cellKey(row, col) };
    });
}

function buildModel() {
    const model = new Map();

    entries.forEach((entry) => {
        getEntryCells(entry).forEach((item, index) => {
            if (item.row >= ROWS || item.col >= COLS) {
                throw new Error(`La palabra ${entry.id} se sale de la grilla.`);
            }

            const saved = model.get(item.key);
            if (saved && saved.letter !== item.letter) {
                throw new Error(`Cruce incorrecto en ${item.key}: ${saved.letter} / ${item.letter}.`);
            }

            model.set(item.key, {
                row: item.row,
                col: item.col,
                letter: item.letter,
                entries: [...(saved?.entries || []), entry.id],
                indexes: { ...(saved?.indexes || {}), [entry.id]: index }
            });
        });
    });

    return model;
}

const model = buildModel();

function createGrid() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const key = cellKey(row, col);
            const data = model.get(key);
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (!data) {
                cell.classList.add("black");
                crossword.appendChild(cell);
                cells.push(cell);
                continue;
            }

            const number = entries.find((entry) => entry.row === row && entry.col === col)?.number;
            if (number) {
                const marker = document.createElement("span");
                marker.className = "cell-number";
                marker.textContent = number;
                cell.appendChild(marker);
            }

            const input = document.createElement("input");
            input.type = "text";
            input.autocomplete = "off";
            input.inputMode = "text";
            input.dataset.key = key;
            input.dataset.entries = data.entries.join(",");
            input.setAttribute("aria-label", `Fila ${row + 1}, columna ${col + 1}`);
            cell.appendChild(input);

            crossword.appendChild(cell);
            cells.push(cell);
        }
    }
}

function getCell(row, col) {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return null;
    return cells[row * COLS + col];
}

function getInput(row, col) {
    return getCell(row, col)?.querySelector("input") || null;
}

function getEntryLabel(entry) {
    const letter = entry.direction === "across" ? "H" : "V";
    return `${letter}${entry.number}.`;
}

function getClueText(entryId) {
    return document.querySelector(`[data-clue="${entryId}"] button`)?.textContent.trim() || "";
}

function updateClueBar() {
    const entry = entryMap.get(activeEntryId);
    currentClueLabel.textContent = getEntryLabel(entry);
    currentClueText.textContent = getClueText(activeEntryId);
}

function focusEntry(entryId, index = 0) {
    activeEntryId = entryId;
    const entry = entryMap.get(entryId);
    const item = getEntryCells(entry)[index] || getEntryCells(entry)[0];
    getInput(item.row, item.col)?.focus();
    paintActiveEntry();
}

function paintActiveEntry() {
    document.querySelectorAll(".cell.active").forEach((cell) => cell.classList.remove("active"));
    document.querySelectorAll(".clue-column li.current").forEach((clue) => clue.classList.remove("current"));

    const entry = entryMap.get(activeEntryId);
    getEntryCells(entry).forEach((item) => getCell(item.row, item.col)?.classList.add("active"));
    document.querySelector(`[data-clue="${activeEntryId}"]`)?.classList.add("current");
    updateClueBar();
}

function chooseEntryForInput(input) {
    const available = input.dataset.entries.split(",");
    if (available.includes(activeEntryId)) return;

    const preferredDirection = activeEntryId.startsWith("v") ? "v" : "h";
    activeEntryId = available.find((id) => id.startsWith(preferredDirection)) || available[0];
}

function getIndexInsideEntry(input, entryId) {
    const data = model.get(input.dataset.key);
    return data.indexes[entryId];
}

function moveInsideEntry(input, step) {
    const entry = entryMap.get(activeEntryId);
    const currentIndex = getIndexInsideEntry(input, activeEntryId);
    const nextIndex = currentIndex + step;
    const next = getEntryCells(entry)[nextIndex];

    if (next) {
        getInput(next.row, next.col)?.focus();
    }
}

function checkEntry(entryId) {
    const entry = entryMap.get(entryId);
    const isSolved = getEntryCells(entry).every((item) => {
        const value = getInput(item.row, item.col)?.value.toUpperCase() || "";
        return value === item.letter;
    });

    document.querySelector(`[data-clue="${entryId}"]`)?.classList.toggle("solved", isSolved);

    getEntryCells(entry).forEach((item) => {
        const cell = getCell(item.row, item.col);
        const cellData = model.get(item.key);
        const solvedByEveryEntry = cellData.entries.every((id) => {
            const relatedEntry = entryMap.get(id);
            return getEntryCells(relatedEntry).every((relatedItem) => {
                const value = getInput(relatedItem.row, relatedItem.col)?.value.toUpperCase() || "";
                return value === relatedItem.letter;
            });
        });
        cell?.classList.toggle("solved", solvedByEveryEntry);
    });
}

function checkTouchedEntries(input) {
    input.dataset.entries.split(",").forEach(checkEntry);
}

function writeLetter(input, letter, shouldAdvance = true) {
    chooseEntryForInput(input);
    input.value = letter.toUpperCase();
    checkTouchedEntries(input);
    paintActiveEntry();

    if (shouldAdvance) {
        moveInsideEntry(input, 1);
    }
}

function handleInput(event) {
    const input = event.target;
    if (input.tagName !== "INPUT") return;

    const letter = input.value.replace(/[^a-zA-Z]/g, "").slice(-1);

    if (letter) {
        writeLetter(input, letter);
    } else {
        input.value = "";
        checkTouchedEntries(input);
    }
}

function handleKeydown(event) {
    const input = event.target;
    if (input.tagName !== "INPUT") return;

    chooseEntryForInput(input);

    if (/^[a-zA-Z]$/.test(event.key)) {
        event.preventDefault();
        writeLetter(input, event.key);
        return;
    }

    if (event.key === "Backspace" && !input.value) {
        event.preventDefault();
        moveInsideEntry(input, -1);
        return;
    }

    if (event.key === "Backspace" && input.value) {
        event.preventDefault();
        input.value = "";
        checkTouchedEntries(input);
        paintActiveEntry();
        return;
    }

    const row = Number(input.closest(".cell").dataset.row);
    const col = Number(input.closest(".cell").dataset.col);
    const arrows = {
        ArrowRight: [row, col + 1],
        ArrowLeft: [row, col - 1],
        ArrowDown: [row + 1, col],
        ArrowUp: [row - 1, col]
    };

    if (arrows[event.key]) {
        event.preventDefault();
        const [nextRow, nextCol] = arrows[event.key];
        getInput(nextRow, nextCol)?.focus();
    }
}

function handleFocus(event) {
    const input = event.target;
    if (input.tagName !== "INPUT") return;
    chooseEntryForInput(input);
    paintActiveEntry();
    input.select();
}

function handleClueClick(event) {
    const clue = event.target.closest("[data-clue]");
    if (!clue) return;
    focusEntry(clue.dataset.clue);
}

function moveClue(step) {
    const currentIndex = entries.findIndex((entry) => entry.id === activeEntryId);
    const nextIndex = (currentIndex + step + entries.length) % entries.length;
    focusEntry(entries[nextIndex].id);
}

createGrid();
paintActiveEntry();

crossword.addEventListener("input", handleInput);
crossword.addEventListener("keydown", handleKeydown);
crossword.addEventListener("focusin", handleFocus);
document.querySelector(".clues").addEventListener("click", handleClueClick);
previousClueButton.addEventListener("click", () => moveClue(-1));
nextClueButton.addEventListener("click", () => moveClue(1));

const licenseDialog = document.querySelector("#license-dialog");
const openLicenseButton = document.querySelector("#open-license");
const closeLicenseButton = document.querySelector("#close-license");

openLicenseButton?.addEventListener("click", () => {
    if (typeof licenseDialog.showModal === "function") {
        licenseDialog.showModal();
    } else {
        licenseDialog.setAttribute("open", "");
    }
});

closeLicenseButton?.addEventListener("click", () => {
    licenseDialog.close();
});

licenseDialog?.addEventListener("click", (event) => {
    if (event.target === licenseDialog) {
        licenseDialog.close();
    }
});
