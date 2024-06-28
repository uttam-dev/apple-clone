
// MENU BTN ON CLICK SHOW MENU ITEAMS
const navList = document.getElementsByClassName("nav-iteam-list")[0]
function menuClicked(e) {
    e.classList.toggle("change");
    navList.classList.toggle("nav-list-show")
}



// BACKGROUND BLUR BLOB ANIMATION
const blurBlob = document.querySelector(".blur-container");

function backGroundBlur(check) {
    if (check) {
        blurBlob.style.visibility = "visible"
        blurBlob.style.opacity = "1"
    }
    else {
        blurBlob.style.visibility = "hidden"
        blurBlob.style.opacity = "0"
    }
}



// DROPDOWN SHOW AMIMATION
let navListIteam = document.querySelectorAll(".nav-iteam-list > li")
const dropdownContainer = document.getElementsByClassName("dropdown")[0]

navListIteam = Array.from(navListIteam)
navListIteam.forEach((iteam) => {

    iteam.addEventListener("mouseenter", () => { checkDataIsAvailable(iteam) })

    iteam.addEventListener("mouseleave", () => {
        dropdownContainer.addEventListener("mouseleave", () => { dropdowmContainerHide(iteam) })
    })

    // IF MOUSE LEAVE EVENT NOT TRIGGER OF ANY REASON THEN BLUR BLOB FULL FILL THIS EVENT
    blurBlob.addEventListener("mouseenter",()=>{dropdowmContainerHide(iteam)})

})


let isDropDownOpenFirst =false;

// CHECK SELECTED ITEAM DROPDOWN DATA IS AVAILABLE OR NOT
function checkDataIsAvailable(iteam) {
    const listId = iteam.getAttribute("listIteamId")
    if (listId in dropdownList) {
        
        if(!(dropdownContainer.style.top >= "-900px")){
            isDropDownOpenFirst=true;
        }
        else{
            isDropDownOpenFirst=false;
        }
        
        dropdownContainerShow(iteam, listId)
    }
}


// DROPDOWN CONTAINER SHOW METHOD
function dropdownContainerShow(iteam, listId) {
    
    dropdownContainer.style.top = "0";
    
    loadDropDownListData(iteam, listId)
    columsAnimation()
    backGroundBlur(true)
    
}



// DROPDOWN CONTAINER HIDE METHOD
function dropdowmContainerHide(iteam) {
    
        dropdownContainer.style.top = "-1000px";
        backGroundBlur(false)
   
}



// CHANGE DROPDOWN DATA ON NAV ITEAMS HOVER
function loadDropDownListData(iteam, listId) {

    dropdownContainer.innerHTML = dropdownList[listId]
    dropdowmHeightAnimation(listId)
}

 
// CHNGE HEIGHT OF DROPDOWN CONTAINER ACCRODING TO INNER DATA 
function dropdowmHeightAnimation(listId){

    const dropdownHeights = {
        store:"458px",
        mac:"562px",
        ipad:"469px",
        iphone:"469px",
        watch:"515px",
        airpods:"439px",
        tvhome:"364px",
        entertainment:"505px",
        accessories:"458px",
        support:"486px",
    }
    if(listId in dropdownHeights){
        dropdownContainer.style.height=dropdownHeights[listId]
    }
}



// DROPDOWN COLUMS ANIMATION
function columsAnimation() {

    let cols = document.querySelectorAll(".dropdown .col-1,.dropdown .col-2,.dropdown .col-3");
    cols = Array.from(cols);

   
    if (isDropDownOpenFirst) {
        gsap.from(cols, {
            y: "-30px",
            opacity: 0,
            stagger: .2
        })
        gsap.to(cols, {
            y: 0,
            opacity: 1,
            duration: .5,
            stagger: .2
        })
    }

    else {
        gsap.from(cols, {
            opacity: 0,
        })
        gsap.to(cols, {
            y: 0,
            opacity: 1,
            duration: .5,
        })
    }
}