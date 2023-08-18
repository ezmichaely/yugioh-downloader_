const fs = require('fs');
const download = require('image-downloader');

const response = fs.readFileSync('api-v7.min.json');
const data = JSON.parse(response).data;

const Download = (card) => {
  if(typeof card.card_images[0].image_url != 'undefined') {
    const name = card.name.replace(/[/\\?%*:|"<>]/g, '');
    // const nameRaw = card.name.replace(/[/\\?%*:|"<>]/g, '');
    // const name = nameRaw.replace(/ /g, '_');

    let folder = '';
    if (card.type.includes('onster')) {
      if (card.type === 'Effect Monster') {
        folder = 'Cards/Monster/Effect_Monster'
      }
      if (card.type === 'Normal Monster') {
        folder = 'Cards/Monster/Normal_Monster'
      }
      if (card.type === 'Flip Effect Monster') {
        folder = 'Cards/Monster/Flip_Effect_Monster'
      }
      if (card.type === 'Union Effect Monster') {
        folder = 'Cards/Monster/Union_Effect_Monster'
      }
      if (card.type === 'Fusion Monster') {
        folder = 'Cards/Monster/Fusion_Monster'
      }
      if (card.type === 'Pendulum Effect Monster') {
        folder = 'Cards/Monster/Pendulum_Effect_Monster'
      }
      if (card.type === 'Link Monster') {
        folder = 'Cards/Monster/Link_Monster'
     }
      if (card.type === 'Synchro Monster') {
        folder = 'Cards/Monster/Synchro_Monster'
      }
      if (card.type === 'Synchro Tuner Monster') {
        folder = 'Cards/Monster/Synchro_Tuner_Monster'
      }
      if (card.type === 'Tuner Monster') {
        folder = 'Cards/Monster/Tuner_Monster'
      }
      if (card.type === 'Gemini Monster') {
        folder = 'Cards/Monster/Gemini_Monster'
      }
      if (card.type === 'Normal Tuner Monster') {
        folder = 'Cards/Monster/Normal_Tuner_Monster'
      }
      if (card.type === 'Spirit Monster') {
        folder = 'Cards/Monster/Spirit_Monster'
      }
      if (card.type === 'Ritual Effect Monster') {
        folder = 'Cards/Monster/Ritual_Effect_Monster'
      }
      if (card.type === 'Pendulum Effect Fusion Monster') {
        folder = 'Cards/Monster/Pendulum_Effect_Fusion_Monster'
      }
      if (card.type === 'Ritual Monster') {
        folder = 'Cards/Monster/Ritual_Monster'
      }
      if (card.type === 'Toon Monster') {
        folder = 'Cards/Monster/Toon_Monster'
      }
      if (card.type === 'Pendulum Normal Monster') {
        folder = 'Cards/Monster/Pendulum_Normal_Monster'
      }
      if (card.type === 'Synchro Pendulum Effect Monster') {
        folder = 'Cards/Monster/Synchro_Pendulum_Effect_Monster'
      }
      if (card.type === 'Pendulum Tuner Effect Monster') {
        folder = 'Cards/Monster/Pendulum_Tuner_Effect_Monster'
      }
      if (card.type === 'XYZ Pendulum Effect Monster') {
        folder = 'Cards/Monster/XYZ_Pendulum_Effect_Monster'
      }
      if (card.type === 'Pendulum Effect Ritual Monster') {
        folder = 'Cards/Monster/Pendulum_Effect_Ritual_Monster'
      }
      if (card.type === 'Pendulum Flip Effect Monster') {
        folder = 'Cards/Monster/Pendulum_Flip_Effect_Monster'
      }
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
    await wait(300);

    // index++;
    // if (index === 30) break;
  }
}

start();
