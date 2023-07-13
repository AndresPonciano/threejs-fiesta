import * as THREE from 'three';

const sizes = {
    height: window.height,
    width: window.width
}

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 2;
scene.add(camera);

const myCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial( { color: 0xff0000 } )
)
scene.add(myCube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);



