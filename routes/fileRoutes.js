const express = require('express');
const auth = require('../middleware/auth');
const { uploadFile, downloadFile } = require('../controllers/fileController');

const router = express.Router();

router.post('/upload', auth, uploadFile);
router.get('/:id', auth, downloadFile);

module.exports = router;
