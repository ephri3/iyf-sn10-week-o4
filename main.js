// Calculator
function getValues() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return { num1, num2 };
}

function setResult(value) {
    const el = document.getElementById("result");
    el.classList.remove("error");
    el.textContent = Number.isInteger(value) ? value : parseFloat(value.toFixed(6));
}

function setError(msg) {
    const el = document.getElementById("result");
    el.classList.add("error");
    el.textContent = msg;
}

function add() {
    let { num1, num2 } = getValues();
    setResult(num1 + num2);
    addToHistory(`${num1} + ${num2} = ${num1 + num2}`);
}

function subtract() {
    let { num1, num2 } = getValues();
    setResult(num1 - num2);
    addToHistory(`${num1} - ${num2} = ${num1 - num2}`);
}

function multiply() {
    let { num1, num2 } = getValues();
    setResult(num1 * num2);
    addToHistory(`${num1} * ${num2} = ${num1 * num2}`);
}

function divide() {
    let { num1, num2 } = getValues();
    
    if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero!";
        return;
    }

    document.getElementById("result").textContent = "Result: " + (num1 / num2);

    addToHistory(`${num1} / ${num2} = ${num1 / num2}`);

}

function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Result: ";
    historyList = [];
    document.getElementById("history").innerHTML = "";
}

let historyList = [];
function addToHistory(text) {
    historyList.push(text);

    let historyHTML = "";

    historyList.forEach(item => {
        historyHTML += `<li>${item}</li>`;
    });

    document.getElementById("history").innerHTML = historyHTML;
}

// Student Grade Tracker

let students = [
    { name: "John", score: 80 },
    { name: "Mary", score: 95 },
    { name: "Alex", score: 60 }
];

function getGrade(score) {
    if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else return "D";
}

function showGrades() {
    let output = "";

    students.forEach(student => {
        let grade = getGrade(student.score);
        output += `<p>${student.name}: ${student.score} (${grade})</p>`;
    });

    document.getElementById("grades").innerHTML = output;
}
