<<<<<<< HEAD
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.139.0/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
  initThree();
});

function initThree() {
  const balls = document.querySelector('.balls');

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  balls.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 5, 5);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xff0000, 3, 10);
  pointLight.position.set(-3, -3, 3);
  scene.add(pointLight);

  const spheres = [];
  const sphereCount = 120;

  for (let i = 0; i < sphereCount; i++) {
    const size = Math.random() * (1.5 - 0.2) + 0.2;
    const colors = [0x1a0000, 0x4d0000, 0x000000];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    sphere.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    scene.add(sphere);
    spheres.push({
      mesh: sphere,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
    });
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.enableDamping = true;
  controls.maxDistance = 5;
  controls.minDistance = 1;

  let isPaused = false;

  function animate() {
    if (!isPaused) {
      spheres.forEach(({ mesh, velocity }) => {
        mesh.position.add(velocity);

        ['x', 'y', 'z'].forEach(axis => {
          if (mesh.position[axis] > 5 || mesh.position[axis] < -5) {
            velocity[axis] *= -1;
          }
        });
      });
    }

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();


  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
=======
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.139.0/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
  initThree();
});

function initThree() {
  const balls = document.querySelector('.balls');

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  balls.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 5, 5);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xff0000, 3, 10);
  pointLight.position.set(-3, -3, 3);
  scene.add(pointLight);

  const spheres = [];
  const sphereCount = 120;

  for (let i = 0; i < sphereCount; i++) {
    const size = Math.random() * (1.5 - 0.2) + 0.2;
    const colors = [0x1a0000, 0x4d0000, 0x000000];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    sphere.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    scene.add(sphere);
    spheres.push({
      mesh: sphere,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
    });
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.enableDamping = true;
  controls.maxDistance = 5;
  controls.minDistance = 1;

  let isPaused = false;

  function animate() {
    if (!isPaused) {
      spheres.forEach(({ mesh, velocity }) => {
        mesh.position.add(velocity);

        ['x', 'y', 'z'].forEach(axis => {
          if (mesh.position[axis] > 5 || mesh.position[axis] < -5) {
            velocity[axis] *= -1;
          }
        });
      });
    }

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();


  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
>>>>>>> 16be696c0cf4f7fdb5d51678cbc0d9719cc47be0
}