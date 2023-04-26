import * as THREE from "three";

const sizes = {
  width: 800,
  height: 600,
};

// Get mouse cursor position
const cursorPosition = {
  x: 0,
  y: 0,
  z: 0
};
window.addEventListener("mousemove", (event) => {
  cursorPosition.x = event.clientX / sizes.width - 0.5;
  cursorPosition.y = - (event.clientY / sizes.height - 0.5);
  console.log(cursorPosition.x, cursorPosition.y);
});

const canvas = document.querySelector("canvas");

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "skyblue" })
);
scene.add(cube);

const aspectRatio = sizes.width / sizes.height;
// Perspective Camera attributes (FOV, aspect Ratio, closes object to show, furthest object to show).
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
// const camera = new THREE.OrthographicCamera(
//   -3 * aspectRatio,
//   3 * aspectRatio,
//   3,
//   -3,
//   0.1,
//   100
// );
camera.position.set(0,0,5);
camera.lookAt(cube.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const frames = () => {
  const elapsedTime = clock.getElapsedTime();

  //  cube.rotation.y = elapsedTime;

  // Rotate cube on X and Y axis using mouse cursor position
  camera.position.set(cursorPosition.x*Math.PI*2,cursorPosition.y*Math.PI*2,5)
  camera.lookAt(cube.position)

  renderer.render(scene, camera);

  window.requestAnimationFrame(frames);
};

frames();
