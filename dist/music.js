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
        name: "Legendary",
        artist: 'Gali',
        url: 'https://drive.google.com/uc?export=download&id=1kgTdr2gnD_WuvZys8GiLZSubm_iQsqPR',
        cover: '',
        lrc: '',
      },
      {
        name: "88BARS",
        artist: '熊仔',
        url: 'https://drive.google.com/uc?export=download&id=1_oEnv0kRjIHSPusdNTfpU8P_EzQ_bgvX',
        cover: '',
        lrc: '',
      },
      {
        name: "Yesterday",
        artist: '國蛋 GorDoN',
        url: 'https://drive.google.com/uc?export=download&id=1RzwEukd7SVdrpGTJQ6r7A-9b0jOvCxHc',
        cover: '',
        lrc: '',
      },
      {
        name: "偷走",
        artist: '國蛋 GorDoN',
        url: 'https://drive.google.com/uc?export=download&id=1s_nZvwRTBL3qqjUEEQox1sCqWlP3B9fE',
        cover: '',
        lrc: '',
      },
      {
        name: "隊長",
        artist: '國蛋 GorDoN',
        url: 'https://drive.google.com/uc?export=download&id=1JTfmv5i1RtvzVvXV1WjypMkQiJ43do_x',
        cover: '',
        lrc: '',
      },
      {
        name: "藍色的夢",
        artist: '國蛋 GorDoN',
        url: 'https://drive.google.com/uc?export=download&id=1-8K4aEuBJsgU7aMg2vIt4Kjku2iMwlqz',
        cover: '',
        lrc: '',
      },
      {
        name: "Better Days",
        artist: '國蛋 GorDoN',
        url: 'https://drive.google.com/uc?export=download&id=1NxbWbvWYGaVcDbPpw3zlwkrRlQiWyySr',
        cover: '',
        lrc: '',
      },
      {
        name: "Falling",
        artist: 'Trevor Daniel',
        url: 'https://drive.google.com/uc?export=download&id=18LzPA8cH7kjGpsTAzF_wvUGexgiCRkFO',
        cover: '',
        lrc: '',
      },
      {
        name: "Johnny Dang",
        artist: '八口8uck',
        url: 'https://drive.google.com/uc?export=download&id=1OnmnqUZrbWhGWjt1B7qPiOjATkKTspqa',
        cover: '',
        lrc: '',
      },
      {
        name: "Protection",
        artist: 'Blow Fever',
        url: 'https://drive.google.com/uc?export=download&id=1Hv6oyQQRir9Y0z4j2NyhFMH9N9zUNrE5',
        cover: '',
        lrc: '',
      },
      {
        name: "TRUST",
        artist: 'Blow Fever ft. Dizzy Dizzo蔡诗芸',
        url: 'https://drive.google.com/uc?export=download&id=1CS02U-PLQmEY3C_4yJBDMJTvJQJNyFMt',
        cover: '',
        lrc: '',
      },
      {
        name: "她Gucciㄉ時候眼淚總是Prada PradaㄉDior",
        artist: '水水Mizu98',
        url: 'https://drive.google.com/uc?export=download&id=1a7rXLIUVOML_XKykzuXJQlOGft6cHUG3',
        cover: '',
        lrc: '',
      },
      {
        name: "暴风雨",
        artist: '馬思維',
        url: 'https://drive.google.com/uc?export=download&id=15IzjWXiAKWUZmmyKFt9KZ2rsaTclU44S',
        cover: '',
        lrc: '',
      },
      {
        name: "Tipsy",
        artist: 'So Sorry',
        url: 'https://drive.google.com/uc?export=download&id=1T0vuyDX5yETrorAF6sNKnTsAfWe_Qp5Z',
        cover: '',
        lrc: '',
      },
      {
        name: "Kill The One",
        artist: 'PG One',
        url: 'https://drive.google.com/uc?export=download&id=16Ctm32JgyWdhploLIffhKVElyWW8mhzY',
        cover: '',
        lrc: '',
      },
      {
        name: "未来还未来",
        artist: 'PG ONE Ft.弹壳',
        url: 'https://drive.google.com/uc?export=download&id=1Hv6ODCoS-2gsITlLjFn1D3gIQPtI4SU-',
        cover: '',
        lrc: '',
      },
      {
        name: "SAY GOODBYE",
        artist: 'PG ONE',
        url: 'https://drive.google.com/uc?export=download&id=1nfxMgZ3xTZR2SGj_JTX945K6-oAHbO4N-',
        cover: '',
        lrc: '',
      },
      {
        name: "语音备忘录",
        artist: 'PG ONE',
        url: 'https://drive.google.com/uc?export=download&id=1DXDyH_EZ4wJbF6gHLwkA0MfnQmRNQgA5',
        cover: '',
        lrc: '',
      },
      {
        name: "像極了",
        artist: 'a仔',
        url: 'https://drive.google.com/uc?export=download&id=1nkz3JUJdJuB0GfZ5sab5MZ2kc6_DvPcD',
        cover: '',
        lrc: '',
      },
      {
        name: "你抓不到我",
        artist: '8Ball',
        url: 'https://drive.google.com/uc?export=download&id=1ew_a-5uZL6BaFRBKL-D7jZhecdA2i7pE',
        cover: '',
        lrc: '',
      },
      {
        name: "愛到卡慘死",
        artist: '李紅 REDLEE',
        url: 'https://drive.google.com/uc?export=download&id=1sYKJcq7MYOQwr5EZ0J8oA3Xc03wcXcIO',
        cover: '',
        lrc: '',
      },
      {
        name: "Bubble",
        artist: 'PNC ft. YZ, B€W',
        url: 'https://drive.google.com/uc?export=download&id=1Xt6VbpuZTd2QVt6LWRH5WOoqofmTzNau',
        cover: '',
        lrc: '',
      },
      {
        name: "BIG ON BIG 高大上",
        artist: '蛋頭 BG8LOCC',
        url: 'https://drive.google.com/uc?export=download&id=1bIiF7-OakRnfiFh70tvpeK5YtJBSlYso',
        cover: '',
        lrc: '',
      },
      {
        name: "Catchallmydrip ",
        artist: '蛋頭 BG8LOCC',
        url: 'https://drive.google.com/uc?export=download&id=1SQMwgmGOQMbR7x3GXbz9CAun1SdvITQE',
        cover: '',
        lrc: '',
      },
      {
        name: "Nancy",
        artist: 'Ak Benjamin ft. Marz23',
        url: 'https://drive.google.com/uc?export=download&id=1334sJlGR5FDYUBPxNoYJlVDUxnxS7Rxk',
        cover: '',
        lrc: '',
      },
      {
        name: "Break Me Down",
        artist: 'Marz23 ft. JESSE',
        url: 'https://drive.google.com/uc?export=download&id=1VMpnxU-GNs8CpO9ieOhEYWaLzMUbtz20',
        cover: '',
        lrc: '',
      },
      {
        name: "寂寞男孩lonely boy",
        artist: 'Marz23 ft. TYSON YOSHI',
        url: 'https://drive.google.com/uc?export=download&id=1tNyuvRfs2mV_PrZUWPJEwebOy2N4RQ4e',
        cover: '',
        lrc: '',
      },
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
      },
      {
        name: "Kyra Z",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=13Lb4ZLxXaTOGgtmcXO0BBPnzdwn4cwXx',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "2045",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1aPtN-NUN34xn9Vtvh6aQr8LimpfUUtQ1',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Pretty",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1P2aFnQCSgLG5wL6DbpPj9AOJn0d26xSt',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "W.I.M.",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1QHs32NP7zP4v_BuKo2A9ZtjOqYGDXZuR',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "WE ALL THE SAME",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1vif0Cdbrd0_zGCxK9r7MLTSrQBAkuu4Q',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Wings",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1cLurkcgb6TMZzE6l4rhNluRn4Jg08Xcj',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Yeah",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1J80D5FDJtBsOoP0Rrg1cNtKspqRxPaSq',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "ILL",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1eGzAXpgdTMopXrQvc24FdxoTF8k7yI8X',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "No Pain",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1XonmQDmoDbWIO8fxSe21dzmiLngbjnuZ',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "20",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1lx46o8rXiqV-qKXQYEG2xINggRVQDcPr',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "迷失",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1fvekauDrIWoNT8-oDo43l6Fsh1ADhP1a',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Color4",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1SjP5cdK3mN68v1Hhljwv0LN77W2pJoie',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Just Like Dat",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1UUKhZpaE0z_gSk-_iKatjOrt2G2k2Akx',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Moon Light",
        artist: 'Kyra Z',
        url: 'https://drive.google.com/uc?export=download&id=1Bm8qJIq_zE8W_2bv5q1sONGsXeC6si7f',
        cover: '/music/cover/Kyra.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "Yeah",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1J80D5FDJtBsOoP0Rrg1cNtKspqRxPaSq',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      },
      {
        name: "霓",
        artist: 'Apex',
        url: 'https://drive.google.com/uc?export=download&id=1ZltPvG-nT24_XoS1OaVGrn4wiSMZzTqI',
        cover: '/music/cover/2045.jpg',
        lrc: "/music/lyrics/cover.lrc",
      }//,
      // {
      //   name: "Berry",
      //   artist: 'Cream D',
      //   url: 'https://drive.google.com/uc?export=download&id=1GTGv6ncZR6dOC5CjTUmU-F6_HG_idnju',
      //   cover: '/music/cover/cream.jpg',
      //   lrc: "/music/lyrics/cover.lrc",
      // },
      // {
      //   name: "很久很久以後",
      //   artist: '楊和蘇',
      //   url: 'https://drive.google.com/uc?export=download&id=1vRk_qVnURbnyxg6kjb2KFPWCiKm1c16h',
      //   cover: '/music/cover/楊和蘇.jpg',
      //   lrc: "/music/lyrics/cover.lrc",
      // }                
    ]
});
