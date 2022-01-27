const canvas = document.querySelector("canvas")
/*
canvas.width = 500
canvas.height = 800

const ctx = canvas.getContext("2d")

ctx.fillRect (100, 200, 100, 200)

*/
canvas.width = 800
canvas.height = 500

const ctx = canvas.getContext("2d")


ctx.fillStyle = "orange"
ctx.fillRect (0, 0, 800, 500)

ctx.fillStyle = "brown"
ctx.fillRect( 0, 200, 160, 110)

ctx.strokeStyle = "white"
ctx.lineWidth = 2.5
ctx.strokeRect( 0, 180, 160, 150)

ctx.fillStyle = "brown"
ctx.fillRect( 640, 200, 160, 110)
ctx.strokeRect( 640, 180, 160, 150)

//The center circle
ctx.beginPath()
ctx.arc(400, 250, 60, 0, Math.PI * 2, false)
ctx.strokeStyle = "white"
ctx.fill()
ctx.stroke()

// How to draw a line:

//middle line
ctx.strokeStyle = "white"
ctx.beginPath();
ctx.moveTo(400,0)
ctx.lineTo(400, 500)
ctx.lineWidth = 2.5
ctx.stroke()

//lateral left line
ctx.strokeStyle = "white"
ctx.beginPath();
ctx.moveTo(0,60)
ctx.lineTo(50, 60)
ctx.lineWidth = 2.5
ctx.stroke()

ctx.strokeStyle = "white"
ctx.beginPath();
ctx.moveTo(0,420)
ctx.lineTo(50, 420)
ctx.lineWidth = 2.5
ctx.stroke()

//Lateral right line
ctx.strokeStyle = "white"
ctx.beginPath();
ctx.moveTo(750,60)
ctx.lineTo(800, 60)
ctx.lineWidth = 2.5
ctx.stroke()

ctx.strokeStyle = "white"
ctx.beginPath();
ctx.moveTo(750, 420)
ctx.lineTo(800, 420)
ctx.lineWidth = 2.5
ctx.stroke()



//arc / Circle 

ctx.beginPath()
ctx.arc(155, 250, 60, 0, Math.PI * 2, false)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath()
ctx.arc(638, 250, 60, 0, Math.PI * 2, false)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath()
ctx.arc(50, 250, 150, (Math.PI/180) ,(Math.PI / 180) , false)
ctx.strokeStyle = "white"
ctx.stroke()



// Creating more than 1 circle
// for(let i=0; i< 89; i++){
//     let x = Math.random()* canvas.width
//     let y = Math.random()* canvas.height
//     ctx.beginPath()
//     ctx.arc(x, y, 30, 0, Math.PI*2, false)
//     ctx.stroke()
// }