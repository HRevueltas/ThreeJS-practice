
import * as THREE from 'three';
import './styles.css'


import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const canvas = document.querySelector('.webgl')







//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const { width, height } = sizes;




// camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

//capsule geometry
// const geometry = new THREE.CapsuleGeometry(1, 1, 1, 5);

//circle geometry
// const geometry  = new THREE.CircleGeometry( 1, 40,6 ); 
//cone geometry
// const geometry = new THREE.ConeGeometry( 2, 10, 10 ); 
//cylinder geometry
// const geometry = new THREE.CylinderGeometry( 2, 2, 5, 10 );
// sphere geometry
// const geometry = new THREE.SphereGeometry(1, 6, 30);

// const geometry = new THREE.BoxGeometry(1, 1, 1, 2,2 ,2 );

const count = 500

const positionsArray = new Float32Array(count * 3 * 3)

for(let i = 0 ; i <positionsArray.length; i++){
    positionsArray[i] = Math.random() - 0.5
} 

const positionAttribute = new THREE.BufferAttribute(positionsArray, 3)

const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', positionAttribute)

const material = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true })


const mesh = new THREE.Mesh(geometry, material);


scene.add(mesh);

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = true

// controls.autoRotate= true
controls.dampinnFactor = 0.1

// renderer

const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(width, height);

const animation = () => {
    window.requestAnimationFrame(animation)

    // mesh.rotation.y += 0.01

    camera.lookAt(mesh.position)
    // mesh.rotation.y = cursor.y
    controls.update()

    renderer.render(scene, camera);

}

animation()