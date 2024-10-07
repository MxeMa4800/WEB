// ดึง input และ message div
// const fileInput = document.getElementById('fileInput');
// const fileMessage = document.getElementById('fileMessage');
const modal = document.getElementById('uploadModal');
const modalFileName = document.getElementById('modalFileName');
const closeModalButton = document.querySelector('.close-button');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
let selectedFile = null; // ตัวแปรสำหรับเก็บไฟล์ที่เลือก

// ฟังก์ชันตรวจสอบนามสกุลไฟล์
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase(); // นำเฉพาะนามสกุลไฟล์ออกมา

        if (fileExtension === 'onnx') {
            selectedFile = file; // เก็บไฟล์ที่เลือก
            modalFileName.textContent = 'ไฟล์ที่เลือก: ' + fileName;
            modal.style.display = 'flex'; // แสดง modal
        } else {
            fileMessage.textContent = 'โปรดเลือกไฟล์นามสกุล .onnx เท่านั้น';
            fileMessage.style.color = 'red';
            fileInput.value = ''; // รีเซ็ตการเลือกไฟล์ถ้าไม่ถูกต้อง
            selectedFile = null; // รีเซ็ตไฟล์ที่เลือก
        } 
    }
});

// document.getElementById("BrowseBtn").addEventListener("click", function() {
//     document.getElementById("fileInput").click();
//   });

// ฟังก์ชันเมื่อผู้ใช้กดปุ่ม Confirm
confirmBtn.addEventListener('click', function() {
    fileMessage.textContent = 'ไฟล์ที่เลือกถูกต้อง: ' + selectedFile.name;
    fileMessage.style.color = 'green';
    modal.style.display = 'none'; // ปิด modal
});

// ฟังก์ชันเมื่อผู้ใช้กดปุ่ม Cancel
cancelBtn.addEventListener('click', function() {
    fileMessage.textContent = 'คุณยกเลิกการอัปโหลดไฟล์';
    fileMessage.style.color = 'red';
    fileInput.value = ''; // รีเซ็ต input
    modal.style.display = 'none'; // ปิด modal
});

// ฟังก์ชันปิด modal เมื่อกดปุ่ม X
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// ปิด modal ถ้าผู้ใช้คลิกข้างนอก modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
