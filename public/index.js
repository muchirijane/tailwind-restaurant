const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu');

menuIcon.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        return menu.classList.remove('hidden');
    }else{
        return menu.classList.add('hidden');
    }
})