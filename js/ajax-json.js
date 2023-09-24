const BASE_URL = 'http://jsonplaceholder.typicode.com';

$(document).ready(function () {
  function getdetail(user) {
    $.get(`${BASE_URL}/users/${user}`, function (user) {
      const detail = `<h2>Information</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
      $('#detail').html(detail);
    });
  }

  function getposts(user) {
    $.get(`${BASE_URL}/posts?user=${user}`, function (posts) {
      $('#posts').html(`<h2>Posts</h2>`);
      posts.forEach(function (post) {
        const userPost = `<div class="post" data-postid="${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>`;

        $('#posts').append(userPost);
      });
    });
  }

  $('#formForUser').submit(function (e) {
    e.preventDefault();
    const user = $('#user').val();

    // clearing previous display
    $('#detail').empty();
    $('#posts').empty();

    //retriving details about user and postss
    getdetail(user);
    getposts(user);
  });
});
