// document: ตัวแปรนี้อ้างถึงเอกสาร HTML ทั้งหมดที่กำลังโหลดในเบราว์เซอร์
// querySelector(): ใช้เพื่อเลือกองค์ประกอบแรกที่ตรงกับตัวเลือก CSS ที่ระบุในวงเล็บ เช่น คลาส (.class-name), ไอดี (#id-name), หรือแท็ก (tag-name)
const scroller = document.querySelector('.media-scroller');
let isDown = false; // ตัวแปรสำหรับตรวจสอบสถานะการกด
let startX; // ตำแหน่งเริ่มต้นของเมาส์
let scrollLeft; // ตำแหน่งเริ่มต้นของ scroller
// var สามารถประกาศทับได้
// let อัพเดทค่าได้
// const ค่าคงที่

// addEventListener('mousedown', ...) เป็นการตรวจจับว่าเมาส์ถูกกดที่ scroller หรือไม่ (mousedown คือ event ที่เกิดขึ้นเมื่อเรากดปุ่มเมาส์)
// e เป็นการอ้างอิงถึงวัตถุเหตุการณ์ (event object) ซึ่งเก็บข้อมูลเกี่ยวกับเหตุการณ์นั้น เช่น ตำแหน่งของเมาส์, ปุ่มเมาส์ที่ถูกกด, หรือข้อมูลอื่น ๆ ที่เกี่ยวข้อง.
scroller.addEventListener('mousedown', (e) => {
    isDown = true; // ตั้งค่าตัวแปรว่าเมาส์ถูกกด
    scroller.classList.add('active'); // เพิ่มคลาส active เพื่อเปลี่ยนเคอร์เซอร์
    // e.pageX คือพิกัดแนวนอนของเมาส์ในหน้าจอ , scroller.offsetLeft คือระยะห่างจากขอบซ้ายของหน้าจอถึง scroller
    startX = e.pageX - scroller.offsetLeft; // เก็บตำแหน่งเมาส์ ระยะห่างที่เมาส์เริ่มกดเทียบกับ scroller
    scrollLeft = scroller.scrollLeft; // เก็บตำแหน่งปัจจุบันของ scroller
});

// เมื่อเมาส์ออกจาก scroller (mouseleave)
scroller.addEventListener('mouseleave', () => {
    isDown = false; // เมาส์ออกจาก scroller
    scroller.classList.remove('active'); // ลบคลาส active
});

// ปล่อยปุ่มเมาส์ (mouseup)
scroller.addEventListener('mouseup', () => {
    isDown = false; // เมาส์ถูกปล่อย
    scroller.classList.remove('active'); // ลบคลาส active
}); 

scroller.addEventListener('mousemove', (e) => {
    if (!isDown) return; // ถ้าไม่ได้กดเมาส์ไม่ต้องทำอะไร
    e.preventDefault(); // ป้องกันการเลือกข้อความ
    const x = e.pageX - scroller.offsetLeft; // คำนวณตำแหน่งปัจจุบันของเมาส์
    const walk = (x - startX) * 1.5; // ความเร็วในการเลื่อนที่เรียกว่า walk ซึ่งเป็นผลต่างของตำแหน่งปัจจุบันกับตำแหน่งเริ่มต้น (x - startX) คูณด้วย 1.5 เพื่อเพิ่มความเร็วในการเลื่อน
    scroller.scrollLeft = scrollLeft - walk; // เลื่อน scroller โดยลดค่าตำแหน่งเลื่อนเดิม
});


// Popup ROI
// addEventListener("click", function() {...}) ใช้เพื่อเพิ่มฟังก์ชันที่ทำงานเมื่อผู้ใช้คลิกที่ปุ่มนี้
// document.querySelector(".button1").addEventListener("click",function(){
//     document.body.classList.add("active-popup");
// });
// document.querySelector(".popup-ROI .close-btn").addEventListener("click",function(){
//     document.body.classList.remove("active-popup");
// });

// Popup  ROI
document.querySelectorAll(".button1").forEach(element =>{
    element.onclick = () =>{
        document.querySelector(".popup-ROI ").style.display ='block';
    }
});
document.querySelector('.popup-ROI .close-btn').onclick = () => {
    document.querySelector(".popup-ROI").style.display = 'none';
};


// Popup Event
document.querySelectorAll(".media-element img").forEach(element =>{
    element.onclick = () =>{
        document.querySelector(".popup-Event").style.display ='block';
        document.querySelector(".popup-Event img").src = element.getAttribute('src');

        // ดึงข้อมูลจาก media-element
        const mediaElement = element.closest(".media-element"); // เข้าถึง div ครอบ
        const titleText = mediaElement.querySelector('.title-img').innerText; // ดึงข้อความ title-img
        const dateText = mediaElement.querySelector('.date').innerText; // ดึงข้อความ date

        // ตั้งค่าข้อความใน popup
        document.querySelector(".popup-Event .title-img").innerText = titleText;
        document.querySelector(".popup-Event .date").innerText = dateText;
    }
});
document.querySelector('.popup-Event .close-btn').onclick = () => {
    document.querySelector(".popup-Event").style.display = 'none';
};

// Popup Show more
document.querySelectorAll(".search-but").forEach(element =>{
    element.onclick = () =>{
        document.querySelector(".popup-search ").style.display ='block';
    }
});
document.querySelector('.box-search .close-btn').onclick = () => {
    document.querySelector(".popup-search").style.display = 'none';
};


// const video = document.querySelector('.video1');
// video.addEventListener('error', () => {
//     console.error('Error playing video. Attempting to reload.');
//     video.load();
//     video.play();
// });