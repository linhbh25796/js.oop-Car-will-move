const onDegree = Math.PI / 180; //1 do.

let car = function (game) {
    this.game = game;

    this.x = 300;
    this.y = 300;

    this.img = null;
    this.speed =3;
    this.loaded = false;
// moi thoi diem o to se co 1 go'c do. nhat dinh.
    this.degree = Math.PI / 2;
    //  1 vong = 2 pi radian

    let self = this;

    this.init = function () {
        this.img = new Image();
        this.img.onload = function () {
            self.loaded = true;
            // console.log ('image loaded')
        };//onload : khi anh da load xong , ham call back cua js
        this.img.src = 'car.png';

    };
    this.update = function () {
        if (this.game.leftKeyIsPressed) {
            //click left xoay 1 do.
            this.degree -= onDegree;
        } else if (this.game.rightKeyIsPressed) {
            this.degree += onDegree;
        }
        if (this.game.upKeyIsPressed) {
            self.goForward();
        }
        if (this.game.downKeyIsPressed) {
            self.goBack();
        }

    };
    this.goForward = function () {
        let speedX = this.speed * Math.cos(this.degree);  //toc do theo chieu x
        let speedY = this.speed * Math.sin(this.degree) ;//sin = doi/ huyen... doi = huyen * sin
        this.x += speedX;
        this.y += speedY;
    }
    this.goBack = function () {

        let speedX = this.speed * Math.cos(this.degree);  //toc do theo chieu x
        let speedY = this.speed * Math.sin(this.degree) ;//sin = doi/ huyen... doi = huyen * sin
        this.x -= speedX;
        this.y -= speedY;
    }

    this.draw = function () {
        if (this.loaded) {
            //luu trang thai cua context nay lai
            //code o giua nay minh lam gi cung duoc
            this.game.context.save();
            this.game.context.translate(this.x + 60, this.y + 32); // translate: doi truc toa tu context sang diem giua cua o to
            this.game.context.rotate(this.degree); //xoay canvas
            this.game.context.drawImage(this.img, -60, -32);
            this.game.context.restore(); // restore de phuc hoi lai trang thai cua  context tu truoc

        }
    }

}