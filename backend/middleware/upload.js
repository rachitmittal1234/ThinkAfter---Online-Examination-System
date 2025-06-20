// backend/middleware/upload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Use /tmp directory (only writable location in Vercel)
const uploadPath = '/tmp/uploads/questions';
if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

export default multer({ storage });
