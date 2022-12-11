class TakeTurnImages {
    constructor(el) {
        this.element = el;
        this.count = 1;
        this.imgArr;
        this.imgArrLength;
        this.takeTurnId;
    }

    imageTurn() {
        if ( this.element == null ) {
            new Error('傳入的元素有誤');
            return
        }
        this.element.children[0].src = this.imgArr[this.count];

        if ( this.count == this.imgArrLength - 1) {
            this.count = 0;
        } else {
            this.count += 1;
        }
    }

    setTakeTurnImage(data) {
        if (Array.isArray(data)) {
            this.imgArr = data;
            this.imgArrLength = this.imgArr.length;
        } else {
            new Error('setTakeTurnImage傳入非陣列資料,請確認資料是否正確')
        }
    }

    startTakeTurn(time) {
        if (this.element.children[0].src == '') {
            this.element.children[0].src = this.imgArr[0];
        }

        this.takeTurnId = setInterval(this.imageTurn.bind(this), time);
    }

    stopTakeTurn() {
        clearInterval(this.takeTurnId);
    }
};

