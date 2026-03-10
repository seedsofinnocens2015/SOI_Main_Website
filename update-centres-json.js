
const fs = require('fs');
const path = require('path');

const filePath = 'd:/Amit Kumar/SOI_Website/SOI_Main_Website/src/app/(innerpage)/ivf-centres/centres-data.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.centres = data.centres.map(center => {
    // If headerImage is missing or is the default, set it to a unique path based on slug
    // But wait, maybe I should just add it if missing.
    // The user said "sab centers ka lag alga jayega", which means they want unique ones.
    center.headerImage = `/assets/img/Headers/${center.slug}.png`;
    return center;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Updated centres-data.json with unique header images');
