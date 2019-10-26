function buttons() {

    document.getElementById('1').addEventListener('click', e => {
        eq.push(1);
        const markup = `<p>1<p>`;
        
    });

    document.getElementById('2').addEventListener('click', e => {
        eq.push(2);
        const markup = `<p>2<p>`;
    });

    document.getElementById('3').addEventListener('click', e => {
        eq.push(3);
        const markup = `<p>3<p>`;
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
        eq.push('+'); 
    });

    document.getElementById('minus').addEventListener('click', e => {

    });

    document.getElementById('multi').addEventListener('click', e => {

    });

    document.getElementById('div').addEventListener('click', e => {

    });
    
}

let eq = [];

let h = eq.map( x => {
    x.toString();
}) 

console.log(h);


buttons();

