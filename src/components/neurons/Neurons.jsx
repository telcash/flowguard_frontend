import React, {useEffect, useRef} from 'react';
import './neurons.css';
import {TweenLite, Circ} from 'gsap'

let width, height, ctx, target, points, canvas;
let animateHeader = true;

const initHeader = () => {
    const rect = canvas.current.getBoundingClientRect();
    width = rect.right - rect.left; 
    height = rect.bottom - rect.top;
    target = { x: width / 2, y: height / 2 };

    canvas.current.width = width;
    canvas.current.height = height;
    ctx = canvas.current.getContext("2d");

    // create points  
    points = [];
    for (var x = 0; x < width; x = x + width / 20) {
      for (var y = 0; y < height; y = y + height / 20) {
        var px = x + (Math.random() * width) / 20;
        var py = y + (Math.random() * height) / 20;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 === p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (i in points) {
      var c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
}

const getDistance = (p1, p2) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

export class Circle {
    // constructor
        constructor(pos, rad, color) {
            this.pos = pos || null;
            this.radius = rad || null;
            this.color = color || null;
        }

    draw () {
      //if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(0,76,99," + this.active + ")";
      ctx.fill();
    };
}

function mouseMove(e) {
    console.log()
    let posy = 0;
    let posx = 0;

    if (e.pageX || e.pageY) {
        posx = e.pageX - canvas.current.getBoundingClientRect().x - window.scrollX;
        posy = e.pageY - canvas.current.getBoundingClientRect().y - window.scrollY;
    } else if (e.clientX || e.clientY) {
        posx =
        e.clientX - canvas.current.getBoundingClientRect().x - window.scrollX;
        posy =
        e.clientY - canvas.current.getBoundingClientRect().y - window.scrollY;
    }

    if (posx === 0) {
      posx = 1;
    }

    if (target && target.x && target.y ) {
        target.x = posx;
        target.y = posy;
    }
}

function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
}

function resize() {
    const rect = canvas.current.getBoundingClientRect();
    width = rect.right - rect.left; 
    height = rect.bottom - rect.top;
    canvas.current.width = width;
    canvas.current.height = height;
}

// animation
function initAnimation() {
    animate();
    for (var i in points) {
        shiftPoint(points[i]);
    }
}

function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
            } else {
            points[i].active = 0;
            points[i].circle.active = 0;
            }
            drawLines(points[i]);
            points[i].circle.draw();
        }
    }
    requestAnimationFrame(animate);
}

function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
            shiftPoint(p);
        }
    });
}

// Canvas manipulation
function drawLines(p) {
    if (!p.active) return;
    for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        //ctx.strokeStyle = "rgba(30,37,94," + p.active + ")";
        ctx.stroke();
    }
}

const Neurons = () => {
    
    canvas = useRef();
    useEffect(() => {
        initHeader();
        initAnimation();
    })

    return (
        <div className='fg__neurons'>
            <div id="large-header" className="large-header">
                <canvas ref={canvas} id="demo-canvas"
                    onMouseMove={(e) => mouseMove(e)}
                    onScroll={() => scrollCheck()}
                    onResize={() => resize()}
                > 
                </canvas>
            </div>
        </div>
    );
};

export default Neurons;
