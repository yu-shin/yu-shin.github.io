const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,  //是否開啟吸底模式，也就是將音樂播放器吸附於畫面底部
    autoplay: false,  //音樂是否自動播放
    theme: '#b7daff',  //主題色，也就是音樂進度條、無專輯封面時、控制音量等區塊的的顏色
    loop: 'all',  //預設的音樂循環播放（全部循環、單曲循環、無循環），可選值：'all', 'one', 'none'
    order: 'list',  //預設的音樂播放順序（順序播放、隨機播放），可選值：'list', 'random'
    preload: 'auto',  //音樂預先載入，可選值: 'none', 'metadata', 'auto'
    volume: 0.7,  //預設音量
    mutex: true,  //互斥，阻止多個播放器同時播放，也就是若第二個播放器開始播放後，另一個會自動暫停
    listFolded: false,  //音樂列表是否預設為摺疊（隱藏）狀態
    listMaxHeight: '200px', //音樂列表最大高度
    lrcType: 3,  //動態歌詞類型，'3' 為載入 LRC 檔案
    audio: [
      {
        name: "amberstone",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1wuNczEvEknEmbXLwH_P79s7LzuuMs7Jy',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/amberstone.lrc',
      },
      {
        name: '1992',
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1-9Kh4vinytsxfpqX7cgGSaThC4gzvcoA',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/1992.lrc'
      },
      {
        name: "天選之子",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1p00zbPm8X6O-p63T3tmecRp-Js9CX94r',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/天選之子.lrc',
      },
      {
        name: "飛簷走壁",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1FuWMPR-ejzRF4ek6uSSe-xt_Qsx3JlFH',
        cover: '/music/cover/gali.jpg',
        lrc: '飛簷走壁.lrc',
      },
      {
        name: "illusion",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1xlCDEcQCEHacjsGMJhwNrc15XOmUWk_i',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/Illusion.lrc',
      },
      {
        name: "偏執獵豹",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1CN8-HntGVM3tZXn0cP7lsZRPlZZeSzCk',
        cover: '/music/cover/gali.jpg',
        lrc: '偏執獵豹.lrc',
      },
      {
        name: "70%",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1-8UxfH2P5hI91_TUfVBnusIFkfwMVJSG',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/70.lrc',
      },
      {
        name: "快一點",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1b4jpEYzCxj3ejxULRZHQZqEG5EiJo_Gs',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/快一點.lrc',
      },
      {
        name: "Bad City",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1NBhpsIWI8SpX_HiaMqcIMs8OlUq6pCpD',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/Bad City.lrc',
      },
      {
        name: "RAMBO",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1qKuObdFUzpSYp35SG7E4XkyMJZw4EiIt',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/RAMBO.lrc',
      },
      {
        name: "信任問題",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1lfims0_K_2eKg7AQDsL9qyJKcwIzBHaY',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/信任問題.lrc',
      },
      {
        name: "Mama's Cry",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=15lX2Yq6On3hOuPDcNxFe_bXwfryK__lL',
        cover: '/music/cover/gali.jpg',
        lrc: "/music/lyrics/Mama.lrc",
      },
      {
        name: "赤兔",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1jw_qqtgmURArLIiuJ6uvMRq1jfUNSsP6',
        cover: '/music/cover/gali.jpg',
        lrc: '/music/lyrics/赤兔.lrc',
      },
      {
        name: "We the best",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=16pkVvnpMxeal7PZ0xiRAx2DjHHkAVnD6',
        cover: '/music/cover/gali.jpg',
        lrc: "/music/lyrics/best.lrc",
      },
      {
        name: "Right Now",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1PP92qo6KABTu7tiDnC1tAbFDHKSxkTQR',
        cover: '/music/cover/gali.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "水晶",
        artist: 'gali',
        url: 'https://drive.google.com/uc?export=download&id=1BRlJQgVbKhiqsCJwJ0ARbUq41FGlMwHg',
        cover: '/music/cover/gali.jpg',
        lrc: "/music/lyrics/cover.lrc",
      }                  
    ]
});
