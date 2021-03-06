const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var raio = 40
var raio2 = 25
var raio3 = 5

var cores = []
var modo = 0
var parametro = 1.0

cores.push(Math.floor(Math.random() * 256))
cores.push(Math.floor(Math.random() * 256))
cores.push(Math.floor(Math.random() * 256))

window.requestAnimationFrame(function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "48px serif";
    ctx.fillStyle = "#A1683A"
    ctx.textAlign = "center";
    ctx.fillText("~Respiração guiada~", canvas.width / 2, canvas.height * 0.25)

    //Inspirando
    if (modo == 0) {
        raio += 0.6
        raio2 += 0.6
        raio3 += 0.6
        ctx.font = "48px serif";
        ctx.fillStyle = "#A1683A"
        ctx.textAlign = "center";
        ctx.fillText("Inspire pelo nariz", canvas.width / 2, canvas.height * 0.75)
    }
    if (raio >= 200) {
        modo = 1
    }
    //Segurando
    if (modo == 1) {
        raio -= 0.001
        raio2 -= 0.001
        raio3 -= 0.001
        parametro -= 0.005
        ctx.font = "48px serif";
        ctx.fillStyle = "#A1683A"
        ctx.textAlign = "center";
        ctx.fillText("Prenda a respiração", canvas.width / 2, canvas.height * 0.75)

    }
    if (parametro <= 0.3) {
        modo = 2
    }
    //Expirando
    if (modo == 2) {
        raio -= 0.4
        raio2 -= 0.4
        raio3 -= 0.4
        parametro = 1.0
        ctx.font = "48px serif";
        ctx.fillStyle = "#A1683A"
        ctx.textAlign = "center";
        ctx.fillText("Expire pela boca", canvas.width / 2, canvas.height * 0.75)

    }
    if (raio <= 39) {
        modo = 0
    }


    ctx.beginPath();
    ctx.fillStyle = "rgb(" + cores[0] + "," + cores[1] + "," + cores[2] + ")"
    ctx.arc(canvas.width / 2, canvas.height / 2, raio, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgb(" + cores[2] + "," + cores[0] + "," + cores[1] + ")"
    ctx.arc(canvas.width / 2, canvas.height / 2, raio2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgb(" + cores[1] + "," + cores[2] + "," + cores[0] + ")"
    ctx.arc(canvas.width / 2, canvas.height / 2, raio3, 0, 2 * Math.PI);
    ctx.fill();

    window.requestAnimationFrame(loop)

})