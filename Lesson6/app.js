var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourse(renderCourse);
}

start();

//Functions
function getCourse(callback) {
    fetch(courseApi)
        .then((response) => response.json())
        .then(callback);
}

function renderCourse(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.name}</p>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('\n');
}