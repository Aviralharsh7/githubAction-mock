const fs = require('fs');
const path = require('path');

const folderPath = 'assets';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    // Check if the file is a PNG file
    if (path.extname(filePath).toLowerCase() === '.png') {
      // Delete the file
      fs.unlink(filePath, err => {
        if (err) {
          console.error('Error deleting file:', filePath, err);
        } else {
          console.log('Deleted file:', filePath);
        }
      });
    }
  });
});