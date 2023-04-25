import * as THREE from 'three'

const canvas = document.querySelector(".canvas");

// Basic Red cube scene
// Create a new scene
const scene = new THREE.Scene();

// Create new box object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "orange" });

const cube = new THREE.Mesh(geometry, material);
cube.position.set(-0.5, -0.75, -1)
cube.scale.set(2,1,1)

// Distance of cube from the center of the scene.
const cubeDistanceFromCenter = cube.position.length()
console.log(cubeDistanceFromCenter)

// Normalise the length of the cube
// cube.position.normalize()

// Add Axes helper visualisation  (x = RED, y = GREEN, z = YELLOW)
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

scene.add(cube);

const sizes = {
  width: 800,
  height: 600
};

// Position Camera in scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1,2,3)
camera.lookAt(0,0,0)
scene.add(camera);

// Distance of cube from the camera
const cubeDistanceFromCamera = cube.position.distanceTo(camera.position);
console.log(cubeDistanceFromCamera)

// Add renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene,camera)