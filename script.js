document.documentElement.style.setProperty("--bg-color", "white");
 document.documentElement.style.setProperty("--text-color", "black");
document.documentElement.style.setProperty("--border-color", "black");

document.getElementById("preto").onclick = function() {
    document.documentElement.style.setProperty("--bg-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--border-color", "white");
};

document.getElementById("azul").onclick = function() {
    document.documentElement.style.setProperty("--bg-color", "blue");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--border-color", "white");
};

document.getElementById("roxo").onclick = function() {
    document.documentElement.style.setProperty("--bg-color", "purple");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--border-color", "white");
};

document.getElementById("branco").onclick = function() {
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--border-color", "black");
};