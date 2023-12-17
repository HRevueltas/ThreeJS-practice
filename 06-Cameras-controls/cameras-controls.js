
import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Cursor
 */

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.height - 0.5);

})




// scene
const scene = new THREE.Scene();


/**
 * Objects
 */

// // red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = [
    new THREE.MeshBasicMaterial({ color: 'fuchsia' }),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
    new THREE.MeshBasicMaterial({ color: 'green' }),
    new THREE.MeshBasicMaterial({ color: 'orange' }),
    new THREE.MeshBasicMaterial({ color: 'red' }),
    new THREE.MeshBasicMaterial({ color: 'pink' }),

]

// mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



// axes helper ayuda a ver los ejes de coordenadas en el espacio 3d x y z
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('.webgl');



//sizes
const sizes = {
       width: window.innerWidth,
    height: window.innerHeight
}
const { width, height } = sizes;




// camera

//  orthographic camera
// const aspectRatio = width / height
// console.log(aspectRatio);
// const camera = new THREE.OrthographicCamera(
//     sizes2.left * aspectRatio,
//     sizes2.right * aspectRatio,
//     sizes2.top,
//     sizes2.bottom,
//     0.1, 100);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);


/**
 * Controls
 */
const controls = new OrbitControls(camera , canvas)
controls.enableDamping = true
controls.enableZoom = true

controls.autoRotate= true
controls.dampinnFactor= 0.1

// controls.target.y = 1


 
// renderer
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(width, height);


// CLock
const clock = new THREE.Clock();

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 }) // animacion de posicion en x de 0 a 2 en 1 segundo

// animations
const tick = () => {

    // clock
    const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime);




    //uptade objects
    // mesh.rotation.y = elapsedTime;

    // camera postion in circle
    // camera.position.x = Math.cos(elapsedTime)
    //  camera.position.y = Math.sin(elapsedTime)

    // manage camera position with cursor
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y *5
    // camera.lookAt(mesh.position)

    // update controls
    controls.update()


    //render
    renderer.render(scene, camera);


    window.requestAnimationFrame(tick);
}
tick();