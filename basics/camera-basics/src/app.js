import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update viewport size
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera aspect ratio
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(sizes.width, sizes.height);
  // For multiple screens
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
});

// Get mouse cursor position
const cursorPosition = {
  x: 0,
  y: 0,
  z: 0,
};
window.addEventListener("mousemove", (event) => {
  cursorPosition.x = event.clientX / sizes.width - 0.5;
  cursorPosition.y = -(event.clientY / sizes.height - 0.5);
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
camera.position.set(0, 0, 5);
camera.lookAt(cube.position);
scene.add(camera);

// Create OrbitControls
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

const clock = new THREE.Clock();

const frames = () => {
  const elapsedTime = clock.getElapsedTime();

  //  cube.rotation.y = elapsedTime;

  // Rotate cube on X and Y axis using mouse cursor position
  //   camera.position.set(cursorPosition.x*Math.PI*2,cursorPosition.y*Math.PI*2,5)

  //   camera.position.set(Math.sin(cursorPosition.x * 2 * Math.PI) * 2, cursorPosition.y * 5, Math.cos(cursorPosition.x * 2 * Math.PI)* 3)
  //   camera.lookAt(cube.position);

  control.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(frames);
};

frames();
