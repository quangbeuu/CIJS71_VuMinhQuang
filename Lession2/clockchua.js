class Clock{
    // Quy ước những biến nào lưu giá trị thì dùng 
    // dấu _ 

    // Quy ước những biến lưu các thẻ thì dùng dấu $

    // Khai báo biến toàn cục (global)
    _intervalID;
    constructor(timer){
        this._timer = timer;

        this.$clockContainer = document.createElement("div");
        this.$timer = document.createElement("h2");
        this.$timer.innerText = timer;

        this.$startBtn = document.createElement("button");
        this.$startBtn.innerText = "Start"
        // this.$startBtn.classList.add("start");
        this.$startBtn.addEventListener("click", this.start)
        // lúc này chưa chạy vì this trong this._timer lúc này là button 
        // => ràng buộc bằng bind hoặc dùng arrow function
        // (ko nên dùng bind)

        // => Cái j liên quan đến event thì dùng arrow function

        this.$pauseBtn = document.createElement("button");
        this.$pauseBtn.innerText = "Pause"
        // this.$pauseBtn.classList.add("pause");
        this.$pauseBtn.addEventListener("click", this.pause);

        this.$stopBtn = document.createElement("button");
        this.$stopBtn.innerText = "Stop"
        // this.$stopBtn.classList.add("stop");
        this.$stopBtn.addEventListener("click", this.stop);

    }

    // start() {
    //     console.log(this)
    //     setInterval(() => {
    //         this._timer += 1;
    //         this.$timer.innerText = this._timer;
    //     })
    // }

    start = () => {
        console.log(this)
        this._intervalID = setInterval(() => {
            this._timer += 1;
            this.$timer.innerText = this._timer;
        },1000)
    }

    pause = () => {
        // Phải ktra xem _intervalID có giá trị chưa
        // vì khi chưa bấm start mà bấm pause sẽ ra undefined
        if(this._intervalID !== undefined){
            clearInterval(this._intervalID);
        }
    }

    stop = () => {
        if(this._intervalID !== undefined){
            clearInterval(this._intervalID);
            this.$timer = 0;
            this.$timer.innerText = 0;
        }
    }

    // return về html để insert vào thằng div#root 
    // để hiển thị lên web
    render(){
        this.$clockContainer.appendChild(this.$timer);
        this.$clockContainer.appendChild(this.$startBtn);
        this.$clockContainer.appendChild(this.$pauseBtn);
        this.$clockContainer.appendChild(this.$stopBtn);

        // Trả về html chứa tất cả các thằng đã đc thêm
        return this.$clockContainer
    }
}

const rootEl = document.querySelector("#root");

// const _1stClock = new Clock(0);
// rootEl.appendChild(_1stClock.render())

// Tạo ra 10 cái đồng hồ 1 lúc
for (let i = 0; i < 10; i++){
    const myClock = new Clock(i);
    rootEl.appendChild(myClock.render());
}
