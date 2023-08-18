const cardTypes = [
  'Spell Card',
  'Effect Monster', 
  'Normal Monster',
  'Flip Effect Monster',
  'Trap Card',
  'Union Effect Monster',
  'Fusion Monster',
  'Pendulum Effect Monster',
  'Link Monster',
  'XYZ Monster',
  'Synchro Monster',
  'Synchro Tuner Monster',
  'Tuner Monster',
  'Gemini Monster',
  'Normal Tuner Monster',
  'Spirit Monster',
  'Ritual Effect Monster',
  'Skill Card',
  'Token',
  'Pendulum Effect Fusion Monster',
  'Ritual Monster',
  'Toon Monster',
  'Pendulum Normal Monster',
  'Synchro Pendulum Effect Monster',
  'Pendulum Tuner Effect Monster',
  'XYZ Pendulum Effect Monster',
  'Pendulum Effect Ritual Monster',
  'Pendulum Flip Effect Monster'
]

let typesArr = [];
const getAllTypes = (data) => {
  data.forEach((i) => {
    let cardType = i.type;
    typesArr.includes(cardType) ? '' : typesArr.push(cardType)
  })

  console.log({ typesArr })
}

// getAllTypes(data);




const levels = [
  3, 5, 4,
  2, 10, 1,
  8, 6, 7,
  9, 11, 12, 
  13, 'linked',
]

let levelsArr = [];
const getAllLevels = (data) => {
  let linkMonsterCard = [];
  data.forEach((d) => {
    const cardType = d.type;
    const monsterLevel = d.level;
    const monsterName = d.name;

    // All Monster type
    if (cardType.includes('onster')) {
      const level = monsterLevel ? monsterLevel : 'linked';
      // console.log({
      //   name: monsterName,
      //   level: level,
      // })
      if (!levelsArr.includes(level)) {
        levelsArr.push(level)
      }
    }

    // if (cardType === 'Link Monster') {
    //   console.log({
    //     name: monsterName,
    //     linkVal: d.linkval,
    //     linkMark: d.linkmarkers,
    //   })

    //   linkMonsterCard.push(monsterName);
    // }
  })

  console.log({ levelsArr })
  // console.log({ linkMonsterCard: linkMonsterCard.length })
}

getAllLevels(data);




const attr = [
  'EARTH', 'WATER',
  'WIND', 'DARK',
  'LIGHT', 'FIRE',
  'DIVINE'
]

let attrArr = [];
const getAllAttr = (data) => {
  // let linkMonsterCard = [];
  data.forEach((d) => {
    const cardType = d.type;
    const monsterAttr = d.attribute;
    const monsterName = d.name;
    if (cardType.includes('onster')) {
      if (!attrArr.includes(monsterAttr)) {
        attrArr.push(monsterAttr)
      }
    }
  })

  console.log({ attrArr })
}
getAllAttr(data);