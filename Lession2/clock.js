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
        this.$startBtn.classList.add("start");

        this.$pauseBtn = document.createElement("button");
        this.$pauseBtn.innerText = "Pause"
        this.$pauseBtn.classList.add("pause");

        this.$stopBtn = document.createElement("button");
        this.$stopBtn.innerText = "Stop"
        this.$stopBtn.classList.add("stop");
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

    
    startBtn(){
        this.$startBtn.addEventListener("click",()=>{
            this._timer = 0;
            this._intervalID = setInterval(()=>{
                this.$timer.innerText = this._timer;
                this._timer = this._timer + 1;
            },1000);
        })   
    }
    pauseBtn(){
        this.$pauseBtn.addEventListener("click",() =>{
            // Cách clear tất cả setInterval
            // for (var i = 1; i < 99999; i++) window.clearInterval(i);
            clearInterval(this._intervalID);
        })
    }

    stopBtn(){
        this.$stopBtn.addEventListener("click",()=>{
            // for (var i = 1; i < 99999; i++) window.clearInterval(i);
            clearInterval(this._intervalID);
            this.$timer.innerText = 0;
        })
    }
}

const rootEl = document.querySelector("#root");

const _1stClock = new Clock(0);

// _1stClock.render();

rootEl.appendChild(_1stClock.render())

_1stClock.startBtn();
_1stClock.pauseBtn();
_1stClock.stopBtn();




// BTVN 

// Bấm start thì nó chạy từ 0 đến bao nhiêu đây 
// Bấm pause thì nó dừng lại
// Bấm stop thì nó clear về 0
