const dropdown = document.querySelector(".dropdown");
const toggleBtn = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");
const nextBtn = document.querySelector(".next-button");

toggleBtn.addEventListener("click", function(){
    menu.classList.toggle('show');
})

toggleBtn.addEventListener("blur", function(){
    menu.classList.remove('show');
})

menu.addEventListener("click", function(e){
    const value = e.target.innerText;
    toggleBtn.innerText = value;
    toggleBtn.classList.add('selected');
    nextBtn.removeAttribute('disabled');
})

// 선택된 옵션값 들어있는 상태에서 옵션메뉴 클릭했을 때 입력값 초기화되는 기능
