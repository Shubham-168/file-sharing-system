const multer = require('multer');
const File = require('../models/File');

const upload = multer({ dest: process.env.UPLOAD_DIR });

exports.uploadFile = upload.single('file'), async (req, res) => {
  try {
    const file = await File.create({
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      path: req.file.path,
      uploadedBy: req.user.id,
    });
    res.status(201).json({ file });
  } catch (err) {
    res.status(500).json({ message: 'File upload failed', error: err });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    res.download(file.path, file.originalName);
  } catch (err) {
    res.status(500).json({ message: 'File download failed', error: err });
  }
};
