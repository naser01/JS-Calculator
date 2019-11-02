
let eq = [];

function buttons() {

    function calc(h){
        const eqString = h.join('');
        const evaluatString = eval(eqString);   
        return(evaluatString) ;
    }
    document.addEventListener("keypress", event => {
        if(event.keyCode === 48) {
            eq.push('0')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 0);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 49) {
            eq.push('1')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 1);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 50) {
            eq.push('2')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 2);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 51) {
            eq.push('3')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 3);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 52) {
            eq.push('4')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 4);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 53) {
            eq.push('5')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 5);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 54) {
            eq.push('6')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 6);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 55) {
            eq.push('7')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 7);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 56) {
            eq.push('8')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 8);
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 57) {
            eq.push('9')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 9);
        }
    });

    /*document.addEventListener("keypress", event => {
        if(event.keyCode === 107) {
            eq.push('+')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '+');
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 109) {
            eq.push('-')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '-');
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 106) {
            eq.push('*')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '*');
        }
    });

    document.addEventListener("keypress", event => {
        if(event.keyCode === 111) {
            eq.push('/')
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '/');
        }
    });*/

    document.getElementById('zero').addEventListener('click', e => {
        eq.push('0');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 0); 
    });

    document.getElementById('1').addEventListener('click', e => {
        eq.push('1');

        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 1);
    });

    document.getElementById('2').addEventListener('click', e => {
        eq.push('2');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 2);
    });

    document.getElementById('3').addEventListener('click', e => {
        eq.push('3');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 3);
    });

    document.getElementById('4').addEventListener('click', e => {
        eq.push('4');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 4);
    });

    document.getElementById('5').addEventListener('click', e => {
        eq.push('5');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 5);
    });

    document.getElementById('6').addEventListener('click', e => {
        eq.push('6');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 6);
    });

    document.getElementById('7').addEventListener('click', e => {
        eq.push('7');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 7);
    });

    document.getElementById('8').addEventListener('click', e => {
        eq.push('8');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 8);
    });

    document.getElementById('9').addEventListener('click', e => {
        eq.push('9');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', 9);
    });

    document.getElementById('plus').addEventListener('click', e => {
        const resultVal = document.querySelector('.terminal-font-res').textContent;
        const markupEq = `<p class="terminal-font-num"> </p>`;
    

        if ((typeof(eval(resultVal)) === "undefined")){
            eq.push('+');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '+');
        } else if ((typeof(eval(resultVal)) === "number")) {
            eq.length = 0;
            const el = document.querySelector('.terminal-font-num');
            el.parentNode.removeChild(el);
            document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
            eq.push(resultVal + '+');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', resultVal + '+');
        }
    });

    document.getElementById('minus').addEventListener('click', e => {

        const resultVal = document.querySelector('.terminal-font-res').textContent;
        const markupEq = `<p class="terminal-font-num"> </p>`;
    

        if ((typeof(eval(resultVal)) === "undefined")){
            eq.push('-');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '-');
        } else if ((typeof(eval(resultVal)) === "number")) {
            eq.length = 0;
            const el = document.querySelector('.terminal-font-num');
            el.parentNode.removeChild(el);
            document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
            eq.push(resultVal + '-');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', resultVal + '-');
        }

    });

    document.getElementById('multi').addEventListener('click', e => {
        const resultVal = document.querySelector('.terminal-font-res').textContent;
        const markupEq = `<p class="terminal-font-num"> </p>`;
    

        if ((typeof(eval(resultVal)) === "undefined")){
            eq.push('*');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '*');
        } else if ((typeof(eval(resultVal)) === "number")) {
            eq.length = 0;
            const el = document.querySelector('.terminal-font-num');
            el.parentNode.removeChild(el);
            document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
            eq.push(resultVal + '*');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', resultVal + '*');
        }
    });

    document.getElementById('div').addEventListener('click', e => {
        const resultVal = document.querySelector('.terminal-font-res').textContent;
        const markupEq = `<p class="terminal-font-num"> </p>`;
    

        if ((typeof(eval(resultVal)) === "undefined")){
            eq.push('/');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '/');
        } else if ((typeof(eval(resultVal)) === "number")) {
            eq.length = 0;
            const el = document.querySelector('.terminal-font-num');
            el.parentNode.removeChild(el);
            document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
            eq.push(resultVal + '/');
            document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', resultVal + '/');
        }
    });

    document.getElementById('brac-left').addEventListener('click', e => {
        eq.push('(');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '(');
    });

    document.getElementById('brac-right').addEventListener('click', e => {
        eq.push(')');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', ')');
    });

    document.getElementById('delete').addEventListener('click', e => {
        eq.pop();

        const markupEq = `<p class="terminal-font-num"> </p>`
        const eqStr = document.querySelector('.terminal-font-num').textContent;

        let eqArr = eqStr.split("");
        eqArr.pop();
        let eqArrJoint = eqArr.join('');
        document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
        const el = document.querySelector('.terminal-font-num');
        el.parentNode.removeChild(el);
        document.querySelector('.terminal-font-num').insertAdjacentHTML('beforeend', eqArrJoint);

    });

    document.getElementById('clear').addEventListener('click', e => {
        const markupEq = `<p class="terminal-font-num"> </p>`;
        const markupRes = `<p class="terminal-font-res"> </p>`;

        eq.length = 0;

        const elRes = document.querySelector('.terminal-font-res');
        elRes.parentNode.removeChild(elRes);

        const elNum = document.querySelector('.terminal-font-num');
        elNum.parentNode.removeChild(elNum);

        document.querySelector('.terminal-eq').insertAdjacentHTML("beforeend", markupEq);
        document.querySelector('.terminal-result').insertAdjacentHTML("beforeend", markupRes);
        
    });

}


function result(){
    const resultVal = document.querySelector('.terminal-font-res').textContent;

    function calc(h){
        const eqString = h.join('');
        const evaluatString = eval(eqString);   
        return(evaluatString) ;
    }

    document.getElementById('equal').addEventListener('click', e => { 
        const markupRes = `<p class="terminal-font-res"> </p>`;

        document.querySelector('.terminal-result').insertAdjacentHTML("beforeend", markupRes);
        const el = document.querySelector('.terminal-font-res');
        el.parentNode.removeChild(el);
        document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));
    });

};

buttons();
result();







