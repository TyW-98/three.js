const canvas = document.querySelector(".canvas");

// Basic Red cube scene
// Create a new scene
const scene = new THREE.Scene();

// Create new box object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "orange" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
