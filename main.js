let ulContainer = document.querySelector(".ul");


fetch('https://reqres.in/api/users')
  .then((res) => res.json())
  .then((datas) => {
    datas.data.forEach((element) => {
      ulContainer.innerHTML += `
    <li class="li li-1" id=id${element.id}>
    <div class="head">
      <img src=${element.avatar} alt="img">
      <div class="name">
        <h4>${element.first_name}</h4>
        <span>${element.last_name}</span>
      </div>
    </div>
    <div class='btn-div'>
    <button id='id${element.id}'class='remove-btn'>Remove User</button>
    </div>
    <div class="main-down">
      <div class="company-flex">
        <p class="first-p">COMPANY</p>
        <p>Romaguerra Cronna</p>
      </div>

      <div class="email-flex">
        <p class="first-p">EMAIL</p>
        <p>${element.email}</p>
      </div>

      <div class="phone-flex">
        <p class="first-p">PHONE</p>
        <p>+998901020440</p>
      </div>

      <div class="website-flex">
        <p class="first-p">WEBSITE</p>
        <p>Romaguerra</p>
      </div>
    </div>
  </li>
    `;
    });
    removeFunc(datas.data)
  })

  function removeFunc(params) {
    let removeBtns = document.querySelectorAll('.remove-btn')
    let li = document.querySelectorAll('.li')
  
    removeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        li.forEach(element => {
          if (btn.id == element.id) {
            element.remove()
          }
        })
      })
    })
  }


