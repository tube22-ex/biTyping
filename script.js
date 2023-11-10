let is_first = true;
let random = 0;
const digits = 8;
function main(){
        random = Math.floor( Math.random() * 2 ** digits );
        const N = random.toString( 2 );
        const zeroPadding = String(N).padStart( digits, '0' );
        document.getElementById('RandomBinaryN').innerText = zeroPadding;
    if(is_first){
        is_first = !is_first;
        addInputEvent();
    }
}

function addInputEvent(){
    document.getElementsByTagName('input')[0].addEventListener('change',(e)=>{
        const inputNum = e.target;
        if(inputNum.value == random){
            inputNum.value = '';
            main();
        }
    })
}

function start_screen(){
    let cnt = 4;
    const start_screen_div = document.getElementById('start_screen_div');
    function start(){
        function countDown(){
            if(cnt > 1){
            cnt--
            start_screen_div.textContent = cnt;
            }else{
                start_screen_div.style.display = 'none';
                document.getElementsByTagName('input')[0].focus();
                clearInterval(countDown_interval);
                main();
            }
        };
        let countDown_interval = setInterval(countDown,1000)
        countDown();
        document.removeEventListener('keydown',keyCheck);
    }
    let keyCheck = (e)=>{
        if(e.code == 'Space') start();
    }
    document.addEventListener('keydown',keyCheck)
};
start_screen()
