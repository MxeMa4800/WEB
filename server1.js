const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// ตั้งค่า multer สำหรับการอัปโหลดไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // เก็บไฟล์ไว้ในโฟลเดอร์ uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // ตั้งชื่อไฟล์เป็น timestamp + extension
  }
});

const upload = multer({ storage: storage });

// API สำหรับรับไฟล์รูปภาพผ่าน POST
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File uploaded: <img src="/uploads/${req.file.filename}" alt="Uploaded image">`);
});

// เสิร์ฟไฟล์จากโฟลเดอร์ uploads
app.use('/uploads', express.static('uploads'));

// เสิร์ฟหน้า HTML สำหรับการแสดงรูป
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
