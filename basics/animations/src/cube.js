import * as THREE from "three";

const canvas = document.querySelector(".canvas");

// Basic Red cube scene
// Create a new scene
const scene = new THREE.Scene();

// Grouping objects together
const cubeGroup = new THREE.Group();
scene.add(cubeGroup);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "darkorange" })
);
cubeGroup.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.75, 0.75, 0.75),
  new THREE.MeshBasicMaterial({ color: "skyblue" })
);
cube2.position.set(-0.875, 0, 0);
cubeGroup.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: "green" })
);
cube3.position.set(-1.5, 0, 0);
cubeGroup.add(cube3);

cubeGroup.rotation.set(0, 0.25 * Math.PI, 0);
cubeGroup.position.set(0, 0, -1);
cubeGroup.scale.set(1, 0.5, 0.5);

// Create new box object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "orange" });

// const cube = new THREE.Mesh(geometry, material);
// cube.position.set(-0.5, -0.75, -1)
// cube.scale.set(2,1,1)
// cube.rotation.reorder("YXZ")
// cube.rotation.set(-0.25*Math.PI,1*Math.PI,0.1*Math.PI)

// Distance of cube from the center of the scene.
const cubeDistanceFromCenter = cubeGroup.position.length();
console.log(cubeDistanceFromCenter);

// Normalise the length of the cube
// cube.position.normalize()

// Add Axes helper visualisation  (x = RED, y = GREEN, z = YELLOW)
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

// Position Camera in scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 2, 3);
camera.lookAt(cubeGroup.position);
scene.add(camera);

// Distance of cube from the camera
const cubeDistanceFromCamera = cubeGroup.position.distanceTo(camera.position);
console.log(cubeDistanceFromCamera);

// Add renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Animatios function
const frame = function () {

  cubeGroup.rotation.y += 0.01*Math.PI

  renderer.render(scene, camera);

  window.requestAnimationFrame(frame);
};

frame();
