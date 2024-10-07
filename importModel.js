// ดึง input และ message div
const fileInput = document.getElementById('fileInput');
const fileMessage = document.getElementById('fileMessage');
const model = document.getElementById('uploadModel');
const modelFileName = document.getElementById('modelFileName');
// const closeModalButton = document.querySelector('.close-button');
// const 
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
let selectedFile = null; // ตัวแปรสำหรับเก็บไฟล์ที่เลือก
let currentfile = null; // ตัวแปรสำหรับเก็บไฟล์ปัจจุบัน
const currentModel = document.getElementById('Current_mo');


// Popup Import Model
document.querySelectorAll(".button3").forEach(element =>{
    element.onclick = () =>{
        document.querySelector(".popup-import").style.display ='block';
    }
});
document.querySelector('.popup-import .close-btn').onclick = () => {
    modelFileName.textContent = null;
    selectedFile = null;
    // fileMessage.textContent = null;
    document.querySelector(".popup-import").style.display = 'none';
};


document.getElementById("BrowseBtn").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

// ฟังก์ชันตรวจสอบนามสกุลไฟล์
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase(); // นำเฉพาะนามสกุลไฟล์ออกมา

        if (fileExtension === 'onnx') {
            selectedFile = file; // เก็บไฟล์ที่เลือก
            modelFileName.textContent = fileName;
            // modal.style.display = 'flex'; // แสดง modal
        } else {
            // fileMessage.textContent = 'Select file ONNX only';
            // fileMessage.style.color = 'red';
            fileInput.value = ''; // รีเซ็ตการเลือกไฟล์ถ้าไม่ถูกต้อง
            selectedFile = null; // รีเซ็ตไฟล์ที่เลือก
        } 
    }
});


// ฟังก์ชันเมื่อผู้ใช้กดปุ่ม Confirm
confirmBtn.addEventListener('click', function() {
    currentfile = selectedFile;
    // fileMessage.textContent = 'ไฟล์ที่เลือกถูกต้อง: ' + selectedFile.name;
    // fileMessage.style.color = 'black';
    modelFileName.textContent = null;
    // ชื่อไฟล์จะถูกบันทึกลงใน LocalStorage โดยใช้ localStorage.setItem()
    localStorage.setItem('uploadedFileName', currentfile.name);
    currentModel.textContent = currentfile.name;
    // selectedFile = null;
});
// ฟังก์ชันเมื่อผู้ใช้กดปุ่ม Cancel
cancelBtn.addEventListener('click', function() {
    modelFileName.textContent = null;
    // fileMessage.textContent = 'คุณยกเลิกการอัปโหลดไฟล์';
    selectedFile = null;
    // fileMessage.textContent = null;
    // fileMessage.style.color = 'red';
    fileInput.value = ''; // รีเซ็ต input
    model.style.display = 'none'; // ปิด modal
});

// เมื่อโหลดหน้าเว็บใหม่ ฟังก์ชันที่ใช้ window.addEventListener('load', ...) จะดึงชื่อไฟล์จาก LocalStorage ด้วย localStorage.getItem() แล้วแสดงผลชื่อไฟล์นั้น
window.addEventListener('load', function() {
    const storedFileName = localStorage.getItem('uploadedFileName');
    if (storedFileName) {
        currentModel.textContent = storedFileName;
        // modal.style.display = 'flex'; // แสดง modal เมื่อมีไฟล์ที่เก็บไว้
    }
});
// ปิด modal ถ้าผู้ใช้คลิกข้างนอก modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        model.style.display = 'none';
    }
});
