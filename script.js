const toggleBtn = document.querySelector('.toggle_btn');
console.log(toggleBtn);
const toggleBtnIcon  = document.querySelector('.toggle_btn i');
console.log(toggleBtnIcon)
const dropDownMenu = document.querySelector('.dropdown_menu')
console.log(dropDownMenu)
toggleBtn.onclick = ()=>{
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList= isOpen ?"fa-solid fa-xmark fa-beat" : 'fa-solid fa-bars';
}

