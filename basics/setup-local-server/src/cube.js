import * as THREE from 'three'

const canvas = document.querySelector(".canvas");

// Basic Red cube scene
// Create a new scene
const scene = new THREE.Scene();

// Create new box object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "orange" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Position Camera in scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
camera.position.x = 1
camera.position.y = 2
camera.lookAt(0,0,0)
scene.add(camera);


// Add renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene,camera)