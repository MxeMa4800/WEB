// ดึง input และ message div
const Uproi = document.getElementById('uploadROI');
const confirmR = document.getElementById('confirmR');
const cancelR = document.getElementById('cancelR');


// Popup Confirm ROI
document.querySelectorAll(".Confirm").forEach(element =>{
    element.onclick = () =>{
        document.querySelector(".confirm-roi ").style.display ='block';
    }
});
document.querySelector('.top-Roi .close-btn').onclick = () => {
    document.querySelector(".confirm-roi").style.display = 'none';
};

// Popup Confirm ROI
document.querySelectorAll(".confirm-R").forEach(element =>{
    element.onclick = () =>{
        // document.querySelector(".confirm-roi ").style.display ='block';
        document.querySelector(".confirm-roi").style.display = 'none';
        // document.body.classList.remove("active-popup");
        document.querySelector(".popup-ROI").style.display = 'none';
    }
});
document.querySelector('.cancel-R').onclick = () => {
    document.querySelector(".confirm-roi").style.display = 'none';
};

