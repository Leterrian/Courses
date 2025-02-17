const availableCourses = document.getElementById("courses-container");
const semester1 = document.getElementById("semester1");
const semester2 = document.getElementById("semester2");
const semester3 = document.getElementById("semester3");

const courses = [
    {name: "JavaScript" , preReqs: "Intermediate Programming", semester: "Fall/Spring", credits: 3, description: "This course will teach you the basics of JavaScript."},
    {name: "Data Structures" , preReqs: "Intermediate Programming, Discrete Math", semester: "Fall/Spring", credits: 3, description: "Topics include analysis of algorithms, with emphasis on computational complexity and advanced algorithms including self-adjusting trees, hashing, graphs, sorting, searching, and greedy algorithms."},
    {name: "Discrete Math" , preReqs: "Pre Calculus", semester: "Fall/Spring", credits: 3, description: "Set theory, logic divisibility, induction, combinatories, relations, functions, graphs, digraphs, and Boolean algebra"},
    {name: "System Analysis/Software Engineering" , preReqs: "Data Structures, Java", semester: "Fall/Spring", credits: 3, description: "An introduction to modern systems analysis and software engineering practices. Major topics include software development methodologies, the software development cycle, and software architectures."},
    {name: "Operating Systems" , preReqs: "Data Structures", semester: "Fall/Spring", credits: 3, description: "Basic concepts and terminology of operating systems, I/0 and interrupt structures, system structures, processor scheduling, processes and process synchronization, deadlocks, memory management, and other concepts."},
]

// Display courses 
function createCourseElement(course) {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course");
    courseElement.setAttribute("draggable", "true");
    courseElement.innerHTML = `
        <h3>${course.name}</h3>
        <p>Prerequisites: ${course.preReqs}</p>
        <p>Semester: ${course.semester}</p>
        <p>Credits: ${course.credits}</p>
        <p>Description: ${course.description}</p>
    `;

    courseElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(course));
    });

    return courseElement;
}

// Function to display courses
function displayCourses() {
    courses.forEach(course => {
        const courseElement = createCourseElement(course);
        availableCourses.appendChild(courseElement);
    });
}

// Function to handle drop event
function handleDrop(e) {
    e.preventDefault();
    const courseData = e.dataTransfer.getData("text/plain");
    const course = JSON.parse(courseData);
    showDetails(course);
}

// Function to allow drop
function allowDrop(e) {
    e.preventDefault();
}

// Add event listeners to semesters
semester1.addEventListener("dragover", allowDrop);
semester1.addEventListener("drop", handleDrop);

semester2.addEventListener("dragover", allowDrop);
semester2.addEventListener("drop", handleDrop);

semester3.addEventListener("dragover", allowDrop);
semester3.addEventListener("drop", handleDrop);

// Initialize the display of courses
displayCourses();