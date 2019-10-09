
const left = document.querySelector('#left');
const right = document.querySelector('#right');

const setRightValue = (event) => {
  let lineString = event.target.value;

  const originCoordinate = lineString.match(/\([\d|.| |,]*\)/g)

  originCoordinate.forEach((coord) => {
    lineString = lineString.replace(coord, '(' + coord.substr(1, coord.length - 1 - 1).split(', ').map((str) => {
      const xyz = str.split(' ');
      if (xyz.length === 2) {
        return [...xyz, '0.99'].join(' ');
      }
      return xyz.join(' ');
    }).join(', ') + ')');
  });

  right.value = lineString;
};

left.addEventListener('input', setRightValue);
