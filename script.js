const puzzles = [
    {
        id: "gestion",
        title: "Gestion de procesos productivos",
        rows: 17,
        cols: 16,
        entries: [
            {
                id: "h1",
                number: 1,
                answer: "EFICIENCIA",
                clue: "Capacidad de lograr objetivos usando bien los recursos.",
                row: 0,
                col: 0,
                direction: "across"
            },
            {
                id: "h2",
                number: 2,
                answer: "LOGISTICA",
                clue: "Gestion del movimiento de materiales, informacion y productos.",
                row: 10,
                col: 2,
                direction: "across"
            },
            {
                id: "h3",
                number: 3,
                answer: "CAPACITACION",
                clue: "Proceso de formacion para mejorar conocimientos y habilidades.",
                row: 8,
                col: 1,
                direction: "across"
            },
            {
                id: "h4",
                number: 4,
                answer: "INVENTARIO",
                clue: "Registro o conjunto de bienes almacenados por una organizacion.",
                row: 12,
                col: 5,
                direction: "across"
            },
            {
                id: "h5",
                number: 5,
                answer: "PROTOCOLOS",
                clue: "Reglas o pasos establecidos para realizar una actividad.",
                row: 4,
                col: 6,
                direction: "across"
            },
            {
                id: "h6",
                number: 6,
                answer: "EFICAZ",
                clue: "Que logra el resultado esperado.",
                row: 6,
                col: 4,
                direction: "across"
            },
            {
                id: "v1",
                number: 1,
                answer: "EMPRESA",
                clue: "Organizacion que realiza actividades economicas.",
                row: 0,
                col: 0,
                direction: "down"
            },
            {
                id: "v2",
                number: 2,
                answer: "RECURSOS",
                clue: "Medios disponibles para realizar una tarea o producir.",
                row: 2,
                col: 11,
                direction: "down"
            },
            {
                id: "v3",
                number: 3,
                answer: "PRODUCTOS",
                clue: "Bienes o servicios ofrecidos al mercado.",
                row: 8,
                col: 3,
                direction: "down"
            },
            {
                id: "v4",
                number: 4,
                answer: "INDUSTRIA",
                clue: "Conjunto de actividades productivas de un sector.",
                row: 0,
                col: 2,
                direction: "down"
            },
            {
                id: "v5",
                number: 5,
                answer: "EFECTIVIDAD",
                clue: "Grado en que se alcanzan los objetivos propuestos.",
                row: 5,
                col: 5,
                direction: "down"
            },
            {
                id: "v6",
                number: 6,
                answer: "LAYOUT",
                clue: "Distribucion fisica de espacios, equipos o areas de trabajo.",
                row: 1,
                col: 14,
                direction: "down"
            }
        ]
    },
    {
        id: "ciencia",
        title: "Ciencia y tecnologia",
        rows: 20,
        cols: 16,
        entries: [
            {
                id: "h1",
                number: 1,
                answer: "OPTIMIZACION",
                clue: "Mejora de un proceso para obtener mejores resultados con menos recursos.",
                row: 18,
                col: 2,
                direction: "across"
            },
            {
                id: "h2",
                number: 2,
                answer: "INVESTIGACION",
                clue: "Busqueda ordenada de informacion para responder preguntas o resolver problemas.",
                row: 10,
                col: 3,
                direction: "across"
            },
            {
                id: "h3",
                number: 3,
                answer: "INNOVACION",
                clue: "Creacion o mejora de ideas, productos o procesos.",
                row: 15,
                col: 0,
                direction: "across"
            },
            {
                id: "h4",
                number: 4,
                answer: "EVIDENCIA",
                clue: "Datos o pruebas que apoyan una explicacion o conclusion.",
                row: 6,
                col: 2,
                direction: "across"
            },
            {
                id: "h5",
                number: 5,
                answer: "EXPERIMENTOS",
                clue: "Pruebas controladas que permiten observar y comprobar resultados.",
                row: 13,
                col: 3,
                direction: "across"
            },
            {
                id: "h6",
                number: 6,
                answer: "PROTOTIPO",
                clue: "Primer modelo de una solucion para probarla antes de terminarla.",
                row: 3,
                col: 6,
                direction: "across"
            },
            {
                id: "v1",
                number: 1,
                answer: "METODOCIENTIFICO",
                clue: "Conjunto de pasos para investigar problemas, probar hipotesis y sacar conclusiones.",
                row: 0,
                col: 8,
                direction: "down"
            },
            {
                id: "v2",
                number: 2,
                answer: "EVOLUCION",
                clue: "Cambio o desarrollo gradual de un sistema o tecnologia a traves del tiempo.",
                row: 0,
                col: 4,
                direction: "down"
            },
            {
                id: "v3",
                number: 3,
                answer: "TEORIA",
                clue: "Explicacion amplia basada en observaciones, hipotesis y experimentos comprobados.",
                row: 1,
                col: 10,
                direction: "down"
            },
            {
                id: "v4",
                number: 4,
                answer: "LEY",
                clue: "Regla cientifica que describe algo que siempre se cumple bajo las mismas condiciones.",
                row: 5,
                col: 6,
                direction: "down"
            },
            {
                id: "v5",
                number: 5,
                answer: "HIPOTESIS",
                clue: "Explicacion fundamentada que se propone y se comprueba dentro del metodo cientifico.",
                row: 1,
                col: 2,
                direction: "down"
            },
            {
                id: "v6",
                number: 6,
                answer: "ANALISIS",
                clue: "Estudio detallado de datos o partes para comprender algo.",
                row: 12,
                col: 11,
                direction: "down"
            }
        ]
    },
    {
        id: "economia",
        title: "Economia",
        rows: 16,
        cols: 15,
        entries: [
            {
                id: "h1",
                number: 1,
                answer: "INGRESO",
                clue: "Dinero que recibe una persona, empresa o Estado.",
                row: 3,
                col: 8,
                direction: "across"
            },
            {
                id: "h2",
                number: 2,
                answer: "OFERTA",
                clue: "Cantidad de bienes o servicios disponibles para vender.",
                row: 6,
                col: 0,
                direction: "across"
            },
            {
                id: "h3",
                number: 3,
                answer: "MONEDA",
                clue: "Medio de intercambio usado para comprar y vender.",
                row: 6,
                col: 7,
                direction: "across"
            },
            {
                id: "h4",
                number: 4,
                answer: "ESCASEZ",
                clue: "Situacion en la que los recursos son limitados frente a las necesidades.",
                row: 10,
                col: 2,
                direction: "across"
            },
            {
                id: "h5",
                number: 5,
                answer: "INTERES",
                clue: "Costo de pedir dinero prestado o ganancia por ahorrar o invertir.",
                row: 13,
                col: 1,
                direction: "across"
            },
            {
                id: "h6",
                number: 6,
                answer: "INFLACION",
                clue: "Aumento general de los precios en una economia.",
                row: 8,
                col: 5,
                direction: "across"
            },
            {
                id: "v1",
                number: 1,
                answer: "SALARIO",
                clue: "Dinero que recibe una persona de manera regular a cambio de su trabajo.",
                row: 0,
                col: 0,
                direction: "down"
            },
            {
                id: "v2",
                number: 2,
                answer: "BALANCE",
                clue: "Muestra lo que se tiene, lo que se debe y lo que queda como propio en una situacion economica.",
                row: 0,
                col: 2,
                direction: "down"
            },
            {
                id: "v3",
                number: 3,
                answer: "MERCADO",
                clue: "Espacio o sistema donde compradores y vendedores intercambian bienes o servicios.",
                row: 5,
                col: 10,
                direction: "down"
            },
            {
                id: "v4",
                number: 4,
                answer: "DEMANDA",
                clue: "Cantidad de productos o servicios que las personas quieren y pueden comprar.",
                row: 9,
                col: 2,
                direction: "down"
            },
            {
                id: "v5",
                number: 5,
                answer: "CAPITAL",
                clue: "Recursos como dinero, herramientas o maquinas que se usan para producir y crecer economicamente.",
                row: 5,
                col: 5,
                direction: "down"
            },
            {
                id: "v6",
                number: 6,
                answer: "ESTADO",
                clue: "Organizacion politica que regula y administra un territorio.",
                row: 3,
                col: 12,
                direction: "down"
            }
        ]
    }
];

const crossword = document.querySelector("#crossword");
const crosswordStage = document.querySelector(".crossword-stage");
const currentClueLabel = document.querySelector("#current-clue-label");
const currentClueText = document.querySelector("#current-clue-text");
const previousClueButton = document.querySelector("#previous-clue");
const nextClueButton = document.querySelector("#next-clue");
const puzzleMenu = document.querySelector(".puzzle-menu");
const acrossClues = document.querySelector("#across-clues");
const downClues = document.querySelector("#down-clues");
const savedAnswers = {};

let currentPuzzle = null;
let entries = [];
let entryMap = new Map();
let model = new Map();
let cells = [];
let activeEntryId = "";

function persistSavedAnswers() {
    // Saved only while this page stays open.
}

function saveCurrentPuzzleState() {
    if (!currentPuzzle) return;

    const values = {};
    crossword.querySelectorAll("input").forEach((input) => {
        if (input.value) {
            values[input.dataset.key] = input.value.toUpperCase();
        }
    });

    savedAnswers[currentPuzzle.id] = values;
    persistSavedAnswers();
}

function restoreCurrentPuzzleState() {
    const values = savedAnswers[currentPuzzle.id] || {};

    Object.entries(values).forEach(([key, value]) => {
        const [row, col] = key.split("-").map(Number);
        const input = getInput(row, col);
        if (input) {
            input.value = value.slice(0, 1).toUpperCase();
        }
    });
}

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
    const nextModel = new Map();

    entries.forEach((entry) => {
        getEntryCells(entry).forEach((item, index) => {
            if (
                item.row < 0 ||
                item.col < 0 ||
                item.row >= currentPuzzle.rows ||
                item.col >= currentPuzzle.cols
            ) {
                throw new Error(`La palabra ${entry.id} se sale de la grilla.`);
            }

            const saved = nextModel.get(item.key);
            if (saved && saved.letter !== item.letter) {
                throw new Error(`Cruce incorrecto en ${item.key}: ${saved.letter} / ${item.letter}.`);
            }

            nextModel.set(item.key, {
                row: item.row,
                col: item.col,
                letter: item.letter,
                entries: [...(saved?.entries || []), entry.id],
                indexes: { ...(saved?.indexes || {}), [entry.id]: index }
            });
        });
    });

    return nextModel;
}

function renderClues() {
    acrossClues.innerHTML = "";
    downClues.innerHTML = "";

    entries.forEach((entry) => {
        const item = document.createElement("li");
        const button = document.createElement("button");

        item.dataset.clue = entry.id;
        button.type = "button";
        button.textContent = entry.clue;
        item.appendChild(button);

        if (entry.direction === "across") {
            acrossClues.appendChild(item);
        } else {
            downClues.appendChild(item);
        }
    });
}

function createGrid() {
    crossword.innerHTML = "";
    cells = [];
    crosswordStage.style.setProperty("--rows", currentPuzzle.rows);
    crosswordStage.style.setProperty("--cols", currentPuzzle.cols);
    crossword.style.setProperty("--rows", currentPuzzle.rows);
    crossword.style.setProperty("--cols", currentPuzzle.cols);

    for (let row = 0; row < currentPuzzle.rows; row++) {
        for (let col = 0; col < currentPuzzle.cols; col++) {
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
    if (row < 0 || row >= currentPuzzle.rows || col < 0 || col >= currentPuzzle.cols) return null;
    return cells[row * currentPuzzle.cols + col];
}

function getInput(row, col) {
    return getCell(row, col)?.querySelector("input") || null;
}

function getEntryLabel(entry) {
    const letter = entry.direction === "across" ? "H" : "V";
    return `${letter}${entry.number}.`;
}

function getClueText(entryId) {
    return entryMap.get(entryId)?.clue || "";
}

function updateClueBar() {
    const entry = entryMap.get(activeEntryId);
    currentClueLabel.textContent = getEntryLabel(entry);
    currentClueText.textContent = getClueText(activeEntryId);
}

function focusEntry(entryId, index = 0) {
    activeEntryId = entryId;
    const entry = entryMap.get(entryId);
    const entryCells = getEntryCells(entry);
    const item = entryCells[index] || entryCells[0];
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
    saveCurrentPuzzleState();
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
        saveCurrentPuzzleState();
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
        saveCurrentPuzzleState();
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

function updatePuzzleMenu() {
    puzzleMenu.querySelectorAll("[data-puzzle]").forEach((button) => {
        const isActive = button.dataset.puzzle === currentPuzzle.id;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function renderPuzzle(puzzleId) {
    if (currentPuzzle?.id === puzzleId) return;
    saveCurrentPuzzleState();

    currentPuzzle = puzzles.find((puzzle) => puzzle.id === puzzleId) || puzzles[0];
    entries = currentPuzzle.entries;
    entryMap = new Map(entries.map((entry) => [entry.id, entry]));
    model = buildModel();
    activeEntryId = entries[0].id;

    renderClues();
    createGrid();
    restoreCurrentPuzzleState();
    entries.forEach((entry) => checkEntry(entry.id));
    paintActiveEntry();
    updatePuzzleMenu();
}

crossword.addEventListener("input", handleInput);
crossword.addEventListener("keydown", handleKeydown);
crossword.addEventListener("focusin", handleFocus);
document.querySelector(".clues").addEventListener("click", handleClueClick);
previousClueButton.addEventListener("click", () => moveClue(-1));
nextClueButton.addEventListener("click", () => moveClue(1));
puzzleMenu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-puzzle]");
    if (!button) return;
    renderPuzzle(button.dataset.puzzle);
});

renderPuzzle(puzzles[0].id);

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
    licenseDialog?.close();
});

licenseDialog?.addEventListener("click", (event) => {
    if (event.target === licenseDialog) {
        licenseDialog.close();
    }
});
