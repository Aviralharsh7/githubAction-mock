const fs = require('fs');

// Create or modify a file
fs.writeFileSync('example.txt', 'This is a change made by the mock script.');

console.log('Mockup script is running at', new Date());