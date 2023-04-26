import * as THREE from "three";

const canvas = document.querySelector("canvas");

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "skyblue" })
);
scene.add(cube);

const sizes = {
    width: 800,
    height: 600,
}
// Perspective Camera attributes (FOV, aspect Ratio, closes object to show, furthest object to show).
const camera = new THREE.PerspectiveCamera(45 ,sizes.width / sizes.height, 0.1, 100);
camera.position.set(2, 2, 3);
camera.lookAt(cube.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock()

const frames = () => {
    const elapsedTime = clock.getElapsedTime()

    cube.rotation.y = elapsedTime

    renderer.render(scene,camera)

    window.requestAnimationFrame(frames)
}

frames()