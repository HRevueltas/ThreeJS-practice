
import * as THREE from 'three';
import './styles.css';

// scene
const scene = new THREE.Scene();


/**
 * Objects
 */

// // red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = [
    new THREE.MeshBasicMaterial({ color: 'yellow' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'pink' }),

]

// mesh
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// //scale
// // mesh.scale.x = 1
// // mesh.scale.y = .5
// // mesh.scale.z = .5
// mesh.scale.set(2, .5, .5) // set all at once


// // rotation
// mesh.rotation.reorder('YXZ') // para que no se mezclen los ejes
// mesh.rotation.x = Math.PI * .25
// mesh.rotation.y = Math.PI * .25
// // mesh.rotation.set(Math.PI * .25, Math.PI * .25, 0) // set all at once


// // position
// // mesh.position.x = .7;
// // mesh.position.y = 2;
// // mesh.position.z = -3;
// mesh.position.set(.7, -.6, 1);  // set all at once


// grupo de objetos
const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)
group.add(cube1);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube3.position.x = 2;
group.add(cube3);





// axes helper ayuda a ver los ejes de coordenadas en el espacio 3d x y z
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const { width, height } = sizes;

// camera
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position); // mira al centro del cubo


// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(width, height);

renderer.render(scene, camera);


