const students = [];

let total = 0;

function createStudent(name, age, marks) {
    return {
        name: name,
        age: age,
        marks: marks
    };
}

// ADD STUDENT

document.getElementById("addBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let marks = Number(document.getElementById("marks").value);

    if (name === "" || age <= 0 || marks < 0) {
        alert("Enter valid data");
        return;
    }

    const student = createStudent(name, age, marks);

    students.push(student);

    displayStudents();
    updateStats();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("marks").value = "";
});


// DISPLAY STUDENTS

function displayStudents() {

    const container = document.getElementById("studentContainer");

    container.innerHTML = "";

    students.forEach((student, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${student.name} | Age: ${student.age} | Marks: ${student.marks}
            <button class="delete-btn" onclick="deleteStudent(${index})">
                Delete
            </button>
        `;

        container.appendChild(li);
    });
}


// DELETE FUNCTION

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
    updateStats();
}


// CALCULATE AVERAGE

function calculateAverage() {

    if (students.length === 0) return 0;

    let sum = 0;

    for (let student of students) {
        sum += student.marks;
    }

    return (sum / students.length).toFixed(2);
}


// FIND TOP STUDENT

function getTopStudent() {

    if (students.length === 0) {
        return "None";
    }

    let top = students[0];

    for (let student of students) {

        if (student.marks > top.marks) {
            top = student;
        }
    }

    return top.name;
}


// UPDATE STATS

function updateStats() {

    total = students.length;

    document.getElementById("totalStudents").textContent = total;

    document.getElementById("avgMarks").textContent =
        calculateAverage();

    document.getElementById("topStudent").textContent =
        getTopStudent();
}


