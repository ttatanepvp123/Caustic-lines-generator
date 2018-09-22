function start() {
    console.log("start render")
    canvas = document.getElementById("resultat")
    canvas.width = parseInt(document.getElementById("size").value)
    canvas.height = parseInt(document.getElementById("size").value)
    context = canvas.getContext('2d');
    context.fillStyle = "#FFFFFF"
    context.fillRect(0, 0, canvas.height, canvas.width, "white");
    console.log("draw background")
    var radius = 1;
    var tmp = 0
    var posX1 = []
    var posY1 = []
    var posX2 = []
    var posY2 = []
    var points_actif = document.getElementById("points").checked
    console.log("points_actif : "+points_actif)
    var space = parseInt(document.getElementById("space").value)
    console.log("space : " + space)
    var size_line = parseInt(document.getElementById("size_line").value)
    console.log("size line : " + size_line)
    var points_space = 2

    for (let index = space; index < canvas.height; index += space) {
        posY1.push(index)
        posX1.push(points_space)
        if (points_actif) {
            context.beginPath();
            context.arc(points_space, index, radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'black';
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = 'black';
            context.stroke();
        }
        tmp = index
    }

    for (let index = points_space + space; index < canvas.height; index += space) {
        posY2.push(tmp)
        posX2.push(index)
        if (points_actif) {
            context.beginPath();
            context.arc(index, tmp, radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'black';
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = 'black';
            context.stroke();
        }
    }

    for (let index = 0; index < canvas.height; index += 1) {
        context.beginPath();
        context.lineWidth = size_line;
        context.moveTo(posX1[index], posY1[index]);
        context.lineTo(posX2[index], posY2[index]);
        context.stroke();
    }
    console.log("stop render")
}