let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//triangle
ctx.lineTo(25, 115);
ctx.lineTo(115, 115);
ctx.lineTo(75, 25);
ctx.fillStyle = 'red';
ctx.fill();

//corps de la maison
ctx.fillStyle = 'blue';
ctx.fillRect(25, 115, 90, 160);

// fenêtres
ctx.fillStyle = 'grey';
ctx.fillRect(30, 130, 20, 20);



ctx.fillRect(85, 130, 20, 20);
ctx.fillStyle = 'grey';

//porte
ctx.beginPath();
ctx.fillRect(65, 160, 20, 70);
ctx.fillStyle = 'grey';
