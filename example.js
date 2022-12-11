let img = [
    "https://p2.bahamut.com.tw/B/2KU/91/55c514c7158c5f565f047ca4241fr3z5.JPG",
    "https://p2.bahamut.com.tw/B/2KU/42/f34aa96b5c049c0d328d18708e1fmli5.PNG",
    "https://p2.bahamut.com.tw/B/2KU/54/cf2050cea624d562c12760d07a1jh165.PNG",
    "https://p2.bahamut.com.tw/B/2KU/50/58a379a67e91252a01f7a264451jk6y5.JPG",
    "https://p2.bahamut.com.tw/B/2KU/44/61b7c12b429afe95832b8a6c7b1jk6s5.JPG"
]
let taketurnDemo = new TakeTurnImages(document.querySelector('#taketurn'));
taketurnDemo.setTakeTurnImage(img);

taketurnDemo.startTakeTurn(2000);


new Promise((res, rej) => {
    setTimeout(() => {
        taketurnDemo.stopTakeTurn();
        res('success');
    }, 2000);
}).then((res) => {
        taketurnDemo.startTakeTurn(5000);
})