const Hex = fabric.util.createClass(fabric.Polygon, {
  type: 'Hex',
  initialize(options) {
    options || (options = {});

    const points = [];
    points.push({ x: options.Xcenter + options.size * Math.cos(0.5), y: options.Ycenter + options.size * Math.sin(0.5) });
    for (let i = 1; i <= 6; i += 1) {
      points.push({ x: options.Xcenter + options.size * Math.cos((i + 0.5) * 2 * Math.PI / 6), y: options.Ycenter + options.size * Math.sin((i + 0.5) * 2 * Math.PI / 6) });
    }
    this.callSuper('initialize', points, options);
  },

  _render(ctx) {
    this.callSuper('_render', ctx);
  },
});

let canvas;

function initializeCanvas() {
  canvas = new fabric.Canvas('canvas');
  const R = 7
  const r = (Math.sqrt(3) / 2) * R
  
  let objs = new Array(2);
  for (i = 0; i < 10; i++){
    objs[i] = new Array(2)

    for(j = 0; j < 10; j++){
      x = 2 * r * i
      y = R * j * 1.5
      if(j % 2 === 0){
        x += r
      }

      hex = new Hex({
        size: R,
        Xcenter: x,
        Ycenter: y, 
        hasControls: false,
        hasBorders: false,
        lockMovementX: true,
        lockMovementY: true,
        fill: 'rgba(0,0,0,0)',
        stroke: 5
      })

      objs[i][j] = hex;
      canvas.add(hex);
    }
  }
}