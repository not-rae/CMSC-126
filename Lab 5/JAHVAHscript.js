// Function to get the current date and time
function time_now() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = "Today is " + months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear() + ", " + days[now.getDay()] + ".";
    const currentTime = "The current time is " + ((now.getHours()%12 || 12).toString()) + ":" + now.getMinutes().toString().padStart(2, "0") + (now.getHours() >= 12 ? " PM." : " AM.");
    document.getElementById("currentDate").innerHTML = currentDate + "<br>" + currentTime;
}

let students = [];  // declares an empty array which will be used to store student objects

// Function to generate a random student ID
function generateID() {
    return Math.floor(Math.random() * 900000) + 100000; 
}

// Function to add a student to the array
function add_student() {
    const form = document.getElementById("studentForm");
    const newStudent = {
        studentID: generateID(),
        name: form.name.value,
        age: form.age.value,
        email: form.email.value,
        course: form.course.value
    };
    students.push(newStudent);
    form.reset();
}

// Function to find a student by ID
function find_student() {
    const studentID = document.getElementById("searchID").value.toString();
    const student = students.find(student => student.studentID == studentID);
    const result = student ?
        ("================================= <br>" +
        "Student ID: " + student.studentID + "<br>" +
        "Name: " + student.name + "<br>" + 
        "Age: " + student.age + "<br>" +
        "Email: " + student.email + "<br>" +
        "Course: " + student.course + "<br>" +
        "================================= <br>") :
        "Student ID not found.";
    document.getElementById("result").innerHTML = result;
}

// Function to display all students
function display_list() {
    if (students.length === 0) {
        document.getElementById("studentListDisplay").innerHTML = "No records found.";
    } else {
        var text = "";
        students.forEach(student => {
            text += "================================= <br>" +
            "Student ID: " + student.studentID + "<br>" +
            "Name: " + student.name + "<br>" + 
            "Age: " + student.age + "<br>" +
            "Email: " + student.email + "<br>" +
            "Course: " + student.course + "<br>" +
            "================================= <br>";
        });
        document.getElementById("studentListDisplay").innerHTML = text;
    }
}



// const = used to declare a constant variable. its value cannot be reassigned afterit has been initialized
// let = used to declare variables that are block scoped and can be reassigned new values
