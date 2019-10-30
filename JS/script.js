/*import { elements } from "./base.js";*/

let eq = [];


function buttons() {

    const resultVal = document.querySelector('.terminal-font-res').textContent;
    const removeResult = document.querySelector('.terminal-result').removeChild;

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
        eq.push('+');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '+');
    });

    document.getElementById('minus').addEventListener('click', e => {
        eq.push('-');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '-');
    });

    document.getElementById('multi').addEventListener('click', e => {
        eq.push('*');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '*');
    });

    document.getElementById('div').addEventListener('click', e => {
        eq.push('/');
        document.querySelector('.terminal-font-num').insertAdjacentText('beforeend', '/');
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
        const el = document.querySelector('.terminal-font-num');
        el.parentNode.removeChild(el);
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

function removeResult() {
    const el = document.querySelector('.terminal-font-res');
    el.parentNode.removeChild(el);
}

function result(){
    const resultVal = document.querySelector('.terminal-font-res').textContent;

    function calc(h){
        const eqString = h.join('');
        const evaluatString = eval(eqString);   
        return(evaluatString) ;
    }

    document.getElementById('equal').addEventListener('click', e => { 

        document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));

        /*if ((typeof(eval(resultVal))) === "undefined") {
            document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));
        } else if ((typeof(eval(resultVal))) === "number") {
            removeResult();
            document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));
        }*/
        
        /*if ((typeof(eval(resultVal))) === "number") {
            const el = document.querySelector('.terminal-font-res');
            el.parentNode.removeChild(el); 
            document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));

        } else if ((typeof(eval(resultVal))) === "undefined") {

           document.querySelector('.terminal-font-res').insertAdjacentHTML('beforeend', calc(eq));

        }*/
    }) 

};

/*document.querySelector('terminal-result').childNodes.values;*/

buttons();
result();







