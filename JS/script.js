function buttons() {

    eq= [];

    document.getElementById('1').addEventListener('click', e => {
        eq.push(1);
    });

    document.getElementById('2').addEventListener('click', e => {
        eq.push(2);
    });

    document.getElementById('3').addEventListener('click', e => {
        eq.push(3);
    });

    document.getElementById('4').addEventListener('click', e => {

    });

    document.getElementById('5').addEventListener('click', e => {

    });

    document.getElementById('6').addEventListener('click', e => {

    });

    document.getElementById('7').addEventListener('click', e => {

    });

    document.getElementById('8').addEventListener('click', e => {

    });

    document.getElementById('9').addEventListener('click', e => {

    });

    document.getElementById('plus').addEventListener('click', e => {

    });

    document.getElementById('minus').addEventListener('click', e => {

    });

    document.getElementById('multi').addEventListener('click', e => {

    });

    document.getElementById('div').addEventListener('click', e => {

    });

    console.log(eq);
    eq.forEach(element => {
        console.log(element);
    });
}

buttons();

