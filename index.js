document.getElementById('get-activity').addEventListener('click', () => {
  fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById('activity').textContent = data.activity + ' 🥳'
      document.body.classList.add('fun')
    })
})
