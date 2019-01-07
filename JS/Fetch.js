const ul = document.getElementById('users');
fetch('https://randomuser.me/api/?results=5')
.then((resp) => resp.json())
.then(function(data) {
let users = data.results;
return users.map(function(user) {
  let li = document.createElement('li'),
      img = document.createElement('img'),
      span = document.createElement('span');
  img.src = user.picture.medium;
  span.innerHTML = `${user.name.first} ${user.name.last}`;
  li.appendChild(img);
  li.appendChild(span);
  ul.appendChild(li);
  })
})
.catch(function(error) {
console.log(JSON.stringify(error));
});
