// alert("hai");

var arsene=0;
var henry=0;
function changeArsene(){
    // alert("tes");
    var img1="assets/images/arsene.jpg"
    var img2="assets/images/arsene2.jpg"
    var imgElement = document.getElementById('Arsene');
    // if(imgElement.src===img1){
        // imgElement.src = img2;
    if(arsene%2==0){
        imgElement.src = img2;
    }
    else {
        imgElement.src = img1;
    }
    arsene++;
}

function changeHenry(){
    var img1="assets/images/henry.jpg"
    var img2="assets/images/henry2.jpg"
    var imgElement = document.getElementById('Henry');
    if(henry%2==0){
        imgElement.src = img2;
    }
    else {
        imgElement.src = img1;
    }
    henry++;
    // henry++;
    // imgElement.src = (imgElement.src === img1)? img2 : img1;
}

// const button = document.querySelectorAll(".legend");
// for(let button of buttons){
//     button.addEventListener('click', function(event){
//         //mendapat objek elemen yang diklik
//         const target = event.target;
//         alert("hai");
//         if(target.classList.contains('arsene')){
            
//             changeArsene();
//             return;
//         }

//         // if(target.classList.contains('henry')){
//         //     inverseNumber();
//         //     updateDisplay();
//         //     return;
//         // }
//     });
// }