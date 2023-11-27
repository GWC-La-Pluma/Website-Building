/*show menu*/
const showMenu=(toggleId,navId) =>{
    const toggle=document.getElementById(toggleId), 
    nav=document.getElementById(navId)
    toggle.addEventListener('click',()=>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')

/*show dropdown menu*/
const dropdownItems=document.querySelectorAll('.dropdown__item')

//select each dropdown items
dropdownItems.forEach((item)=>{
    const dropdownButton=item.querySelector('.dropdown__button')

    //select each button click
    dropdownButton.addEventListener('click',() =>{
        //select the current show-dropdown class
        const showDropdown=document.querySelector('.show-dropdown')

        //call the toggleItem function
        toggleItem(item);

        //remove the show-dropdown class from the other items
        if(showDropdown&&showDropdown!=item){
            toggleItem(showDropdown)
        }
    })
})

//display the dropdown
const toggleItem=(item)=>{
    const dropdownContainer=item.querySelector('.dropdown__container')
    //if the same item contains the show-dropdown class
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }
    else{
        //max height to the dropdown content
        dropdownContainer.style.height=dropdownContainer.scrollHeight+'px'
        item.classList.add('show-dropdown')
    }
}

addEventListener('resize',removeStyle)