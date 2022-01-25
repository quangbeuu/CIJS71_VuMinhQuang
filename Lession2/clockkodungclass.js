const startEl = document.getElementById("start");
const pauseEl = document.getElementById("pause");
const stopEl = document.getElementById("stop");

let timer = 0;

startEl.addEventListener("click", () =>{
    setInterval(() => {
        timer += 1; 
        console.log(timer);
        timerEl.innerText = timer
    },1000)
});


// Tạo nhiều button, bấm nhiều cái đồng hồ thì sao 
// => Ta chỉ bấm đc cái đầu tiên 
// => Do id tồn tại duy nhất nên chỉ chạy cho thằng đầu 

// => Ta phải đổi id cho tất cả các thằng và viết code lại

// => Sinh ra Class sẽ thuận tiện hơn
