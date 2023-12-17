import * as THREE from 'three';
import './styles.css'


//canvas 
const canvas = document.querySelector('.webgl')

// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Partículas
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({ color: 'red', size: 0.001 });

const particlesVertices = [];
for (let i = 0; i < 1000; i++) {
  const x = (Math.random() - 0.5) * 10;
  const y = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 10;
  particlesVertices.push(x, y, z);
}

particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesVertices, 3));
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Cámara y controles
camera.position.z = 5;


// hacer que el canvas ocupe todo el viewport cuando se escuche el evento resize
window.addEventListener('resize', () => {
    //Update sizes
    width = window.innerWidth
    height = window.innerHeight

    //Update camera
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    //Update renderer

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

window.addEventListener('dblclick', () => {

    if (!document.fullscreenElement) {
        canvas.requestFullscreen()
    }
    else {
        document.exitFullscreen()
    }
})


// Animación
const animate = () => {
  requestAnimationFrame(animate);

  // Rotación de las partículas
  particles.rotation.x += 0.001;
  particles.rotation.y += 0.001;

  renderer.render(scene, camera);
};


//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
let { width, height } = sizes;




// Llamada a la función de animación
animate();
