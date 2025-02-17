const avaliabileCourses = document.getElementById("courses-conatainer");
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
function showDetails(course){
    const courseDetails = document.getElementById("courses-container");
    courseDetails.innerHTML = `
        <h3>${course.name}</h3>
        <p>Prerequisites: ${course.preReqs}</p>
        <p>Semester: ${course.semester}</p>
        <p>Credits: ${course.credits}</p>
        <p>Description: ${course.description}</p>
    `;
}
showDetails(courses[3]);


