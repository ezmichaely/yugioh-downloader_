const fs = require('fs');
const download = require('image-downloader');

const response = fs.readFileSync('api-v7.min.json');
const data = JSON.parse(response).data;

const Download = (card) => {
  if(typeof card.card_images[0].image_url != 'undefined') {
    const name = card.name.replace(/[/\\?%*:|"<>]/g, '');

    let folder = '';
    if (card.type.includes('onster')) {
      const mons = 'Cards/Monster';
      const monType = card.type.replace(/ /g, '_');
      folder = `${mons}/${monType}`;
    }
    else if (card.type.includes('Spell')) {
      folder = 'Cards/Spell_Card'
    }
    else if (card.type.includes('Trap')) {
      folder = 'Cards/Trap_Card'
    }
    else if (card.type.includes('Token')) {
      folder = 'Cards/Token'
    }
    else if (card.type.includes('Skill')) {
      folder = 'Cards/Skill_Card'
    }

    const url = card.card_images[0].image_url;
    const n = url.lastIndexOf('.')
    const ext = url.substring(n + 1)
    const dest = `../../${folder}/${name}__${card.level ? '_lvl' + card.level : ''}${card.attribute ? '_' + card.attribute : ''}_${card.race}.${ext}`;

    download
      .image({ url, dest })
      .catch((err) => console.log(err));
  }
}

let index = 0;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
  for (let key = index; key < data.length; key++) {
    const card = data[key];
    Download(card);
    await wait(200);
  }
}

start();
