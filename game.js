let game = function () {
    this.canvas = null;
    this.context = null;

    this.width = 1000;
    this.height = 700;

    this.car = null;

    this.leftKeyIsPressed = false; // check phim trai dc bam hay chua
    this.rightKeyIsPressed = false;
    this.upKeyIsPressed = false;
    this.downKeyIsPressed = false;
    let self = this;


    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.car = new car(this);
        this.car.init();

        this.loop(); // loop la 1 cai vong lap ma no cu chay mai, ve ra 60 lan(60fps)

        this.listenKey(); // ba(t' ban phim
    };

    this.listenKey = function () {
        document.addEventListener('keydown', function (event) {
        //console.log('keydown')
            if (event.keyCode == 37){
                self.leftKeyIsPressed = true; // self vi dang trong callback cua keydown
            }
            else if (event.keyCode == 38){
                self.upKeyIsPressed = true;
            }
            else if (event.keyCode == 39){
                self.rightKeyIsPressed = true;
            }
            else if (event.keyCode == 40){
                self.downKeyIsPressed = true;
            }
            else {
                // =)))))))))
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 37){
                self.leftKeyIsPressed = false; // self vi dang trong callback cua keydown
            }
            else if (event.keyCode == 38){
                self.upKeyIsPressed = false;
            }
            else if (event.keyCode == 39){
                self.rightKeyIsPressed = false;
            }
            else if (event.keyCode == 40){
                self.downKeyIsPressed = false;
            }
            else {
                // =)))))))))
            }
        })
    };

    this.loop = function () {
        // console.log('update game')
        self.update();
        self.draw();
        setTimeout(self.loop, 20)//50fps
    };

    this.update = function () {

        this.car.update();
    };
    this.clearScreen = function () {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, this.width, this.height);
    };

    this.draw = function () {
        this.clearScreen();
        this.car.draw();
    }
};

let g = new game();
g.init();