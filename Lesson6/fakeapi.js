// var postApi = "https://jsonplaceholder.typicode.com/posts";

// fetch(postApi)
//   .then((response) => response.json())
//   .then(function (post) {
//     var htmls = post.map(
//       (post) => `<li>
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
//     </li>`
//     );
//     var html = htmls.join("");
//     document.getElementById("post-block").innerHTML = html;
//   })
//   .catch((error) => {
//     alert(error.message);
//   });

var postApi = "http://localhost:3000/courses";

fetch(postApi)
  .then((response) => response.json())
  .then(function (courses) {
    console.log(courses);
  });
