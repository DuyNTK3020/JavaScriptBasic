var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourse(renderCourse);

    handleCreateForm();
}

start();

//Functions
function getCourse(callback) {
    fetch(courseApi)
        .then((response) => response.json())
        .then(callback);
}

function createCourse(course, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(course)
    }
    fetch(courseApi, options)
        .then((response) => response.json())
        .then(callback);
}

function handleDeleteCourse(courseID) {
    var options = {
        method: 'DELETE'
    };

    fetch(courseApi + '/' + courseID, options)
        .then((response) => response.json())
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + courseID);
            if(courseItem) {
                courseItem.remove();
            }
        })
        .catch(function (error) {
            console.error('Error deleting course:', error);
        });
}

function handleEditCourses(id) {
    var name = document.querySelector(".course-item-" + id + ">h4").innerHTML;
    var description = document.querySelector(
        ".course-item-" + id + ">p"
    ).innerHTML;
    function getValueToInput(name, desc) {
        editName = document.querySelector('input[name="name"]').value = name;
        descriptionName = document.querySelector(
            'input[name="description"]'
        ).value = desc;
    }
    getValueToInput(name, description);

    document.querySelector("#create").onclick = function () {
        var options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: document.querySelector('input[name="name"]').value,
                description: document.querySelector('input[name="description"]')
                    .value,
            }),
        };
        fetch(courseApi + "/" + id, options)
            .then(function (response) {
                return response.json();
            })
            .then(function () {
                getCourses(renderCourses);
            })
            .then(function () {
                getValueToInput(null, null);
            });
    };
}

function renderCourse(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li class = "course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse('${course.id}')">&times;</button>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('\n');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        // alert('Create Course');
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData = {
            name: name, description: description
        }

        createCourse(formData, getCourse(renderCourse))
    }
}