
let CURRENTIMAGE = 1
let PREVIMAGE = 4
let NEXTIMAGE = 2





function scrollRight(){
    const imgID = 'image'
    console.log(imgID+CURRENTIMAGE)
    // document.querySelector('#'+imgID+CURRENTIMAGE).style.zIndex = 0
    document.querySelector('#'+imgID+CURRENTIMAGE).style.opacity = 0
    // document.querySelector('#'+imgID+NEXTIMAGE).style.zIndex = 5
    document.querySelector('#'+imgID+NEXTIMAGE).style.opacity = 5

    document.querySelector('#d'+NEXTIMAGE).className = "fa-solid fa-circle d1"
    document.querySelector('#d'+CURRENTIMAGE).className = "fa-regular fa-circle d1"

    CURRENTIMAGE += 1
    PREVIMAGE +=1
    NEXTIMAGE +=1

    if (PREVIMAGE < 1) {
        PREVIMAGE = 4
    }
    if (NEXTIMAGE < 1) {
        NEXTIMAGE = 4
    }
    if (CURRENTIMAGE < 1) {
        CURRENTIMAGE = 4
    }
    if (PREVIMAGE > 4) {
        PREVIMAGE = 1
    }
    if (NEXTIMAGE > 4) {
        NEXTIMAGE = 1
    }
    if (CURRENTIMAGE > 4) {
        CURRENTIMAGE = 1
    }
    
    console.log(PREVIMAGE, CURRENTIMAGE, NEXTIMAGE)
    
}



function asdf(){
    const imgID = 'image'
    console.log(imgID+CURRENTIMAGE)
    document.querySelector('#'+imgID+CURRENTIMAGE).style.opacity = 0
    document.querySelector('#'+imgID+PREVIMAGE).style.opacity = 5

    document.querySelector('#d'+PREVIMAGE).className = "fa-solid fa-circle d1"
    document.querySelector('#d'+CURRENTIMAGE).className = "fa-regular fa-circle d1"

    CURRENTIMAGE -= 1
    PREVIMAGE -=1
    NEXTIMAGE -=1

    if (PREVIMAGE < 1) {
        PREVIMAGE = 4
    }
    if (NEXTIMAGE < 1) {
        NEXTIMAGE = 4
    }
    if (CURRENTIMAGE < 1) {
        CURRENTIMAGE = 4
    }
    if (PREVIMAGE > 4) {
        PREVIMAGE = 1
    }
    if (NEXTIMAGE > 4) {
        NEXTIMAGE = 1
    }
    if (CURRENTIMAGE > 4) {
        CURRENTIMAGE = 1
    }
    
    console.log(PREVIMAGE, CURRENTIMAGE, NEXTIMAGE)
    
}


