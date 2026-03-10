
const fs = require('fs');
const path = require('path');

const filePath = 'd:/Amit Kumar/SOI_Website/SOI_Main_Website/src/app/(innerpage)/ivf-centres/centres-data.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update centres
data.centres = data.centres.map(center => {
    center.headerImage = `/assets/img/Headers/${center.slug}.png`;
    return center;
});

// Update stateContent
if (data.stateContent) {
    Object.keys(data.stateContent).forEach(state => {
        data.stateContent[state].headerImage = `/assets/img/Headers/state-${state}.png`;
    });
}

// Update centerContent (though these might be for specific center details pages, let's see)
// Actually, centerContent is used in [slug]/[centerSlug]/page.jsx but it fetches 'headerImage' from 'center' object, not centerContent.
// So we are good as long as 'centres' array is updated.

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Updated centres-data.json with unique header images for centres and states');
