const CA  = require('../Assets/cards/AC.png')
const C2 = require('../Assets/cards/2C.png')
const C3 = require('../Assets/cards/3C.png')
const C4 = require('../Assets/cards/4C.png')
const C5 = require('../Assets/cards/5C.png')
const C6 = require('../Assets/cards/6C.png')
const C7 = require('../Assets/cards/7C.png')
const C8 = require('../Assets/cards/8C.png')
const C9 = require('../Assets/cards/9C.png')
const C10 = require('../Assets/cards/10C.png')
const CJ= require('../Assets/cards/JC.png')
const CQ = require('../Assets/cards/QC.png')
const CK = require('../Assets/cards/KC.png')
const DA  = require('../Assets/cards/AD.png')
const D2 = require('../Assets/cards/2D.png')
const D3 = require('../Assets/cards/3D.png')
const D4 = require('../Assets/cards/4D.png')
const D5 = require('../Assets/cards/5D.png')
const D6 = require('../Assets/cards/6D.png')
const D7 = require('../Assets/cards/7D.png')
const D8 = require('../Assets/cards/8D.png')
const D9 = require('../Assets/cards/9D.png')
const D10 = require('../Assets/cards/10D.png')
const DJ= require('../Assets/cards/JD.png')
const DQ = require('../Assets/cards/QD.png')
const DK = require('../Assets/cards/KD.png')
const HA  = require('../Assets/cards/AH.png')
const H2 = require('../Assets/cards/2H.png')
const H3 = require('../Assets/cards/3H.png')
const H4 = require('../Assets/cards/4H.png')
const H5 = require('../Assets/cards/5H.png')
const H6 = require('../Assets/cards/6H.png')
const H7 = require('../Assets/cards/7H.png')
const H8 = require('../Assets/cards/8H.png')
const H9 = require('../Assets/cards/9H.png')
const H10 = require('../Assets/cards/10H.png')
const HJ= require('../Assets/cards/JH.png')
const HQ = require('../Assets/cards/QH.png')
const HK = require('../Assets/cards/KH.png')
const SA  = require('../Assets/cards/AS.png')
const S2 = require('../Assets/cards/2S.png')
const S3 = require('../Assets/cards/3S.png')
const S4 = require('../Assets/cards/4S.png')
const S5 = require('../Assets/cards/5S.png')
const S6 = require('../Assets/cards/6S.png')
const S7 = require('../Assets/cards/7S.png')
const S8 = require('../Assets/cards/8S.png')
const S9 = require('../Assets/cards/9S.png')
const S10 = require('../Assets/cards/10S.png')
const SJ= require('../Assets/cards/JS.png')
const SQ = require('../Assets/cards/QS.png')
const SK = require('../Assets/cards/KS.png')

let allCards = {
    CA,
    C2,
    C3,
    C4,
    C5,
    C6,
    C7,
    C8,
    C9,
    C10,
    CJ,
    CQ,
    CK,
    DA,
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    D10,
    DJ,
    DQ,
    DK,
    HA,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
    H9,
    H10,
    HJ,
    HQ,
    HK,
    SA,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    S10,
    SJ,
    SQ,
    SK,
}

async function getCard(data) {
    let code = []
    let cards = []
    for (var i = 0; i < data.length; i++) {
        code.push(data[i].c)
    }
    for (var i = 0; i < code.length; i++) {
        cards.push({card: allCards[code[i]], code: data[i].c, index: data[i].i, choiced: false})
    }
    return cards
}

module.exports = {
    getCard
}