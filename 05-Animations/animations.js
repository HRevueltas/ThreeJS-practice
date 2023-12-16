
import './styles.css';
import * as THREE from 'three';
import gsap from 'gsap';




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
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



// axes helper ayuda a ver los ejes de coordenadas en el espacio 3d x y z
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

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



// renderer
const canvas = document.querySelector('.webgl');
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
   camera.position.x = Math.sin(elapsedTime)
   camera.position.y = Math.sin(elapsedTime)
   camera.rotation.z = Math.cos(elapsedTime)
//    camera.rotateX(elapsedTime)
   camera.lookAt(mesh.position)


    //render
    renderer.render(scene, camera);


    window.requestAnimationFrame(tick);
}
tick();