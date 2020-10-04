
async function getRepos() {

  let url = (`https://api.github.com/users/${username}/repos`);

  const response = await fetch(url);
  const responseJson = await response.json();
  listRepos(responseJson);
  ;
}

function listRepos(responseJson) {
  for (i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i].name + responseJson[i].html_url);
    $('.results').append(`${responseJson[i].name}: <a href="${responseJson[i].html_url}">${responseJson[i].html_url}<a><br>`);
  }
}

function watchForm() {
  //form listener
  $('form').submit(event => {
    event.preventDefault();
    $('.results').empty();
    username = $('#js-user-name').val();
    getRepos();
  });
}

$(watchForm);