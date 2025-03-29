<<<<<<< HEAD
import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
  initNavigation()
})

function initThree() {

  const model = document.querySelector('.arrive')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  scene.position.set(0, -30, 0)


  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )

  camera.position.set(-130, 80, 50)


  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)


  {
    const loader = new GLTFLoader()
    loader.load(
      './portalik/arrive.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  {
    const light = new THREE.AmbientLight(0xff3b3b, 0.6)
    scene.add(light)
  }
  {
    const directionalLight1 = new THREE.DirectionalLight(0xff0000, 1.5)
directionalLight1.position.set(-80, 100, 50)
scene.add(directionalLight1)
  }
  {
    const directionalLight2 = new THREE.DirectionalLight(0xff3b3b, 1.2)
directionalLight2.position.set(80, 100, -50)
scene.add(directionalLight2)
  }

  {const backLight = new THREE.PointLight(0xff0000, 2, 500) // Красный свет, яркость 2, дальность 500
  backLight.position.set(0, 50, -100) // Позади модели
  scene.add(backLight)
  }


  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistance = 300
  controls.maxPolarAngle = Math.PI / 2.2

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()


  window.addEventListener('resize', onWindowResize)

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

=======
import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
  initNavigation()
})

function initThree() {

  const model = document.querySelector('.arrive')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  scene.position.set(0, -30, 0)


  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )

  camera.position.set(-130, 80, 50)


  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)


  {
    const loader = new GLTFLoader()
    loader.load(
      './portalik/arrive.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  {
    const light = new THREE.AmbientLight(0xff3b3b, 0.6)
    scene.add(light)
  }
  {
    const directionalLight1 = new THREE.DirectionalLight(0xff0000, 1.5)
directionalLight1.position.set(-80, 100, 50)
scene.add(directionalLight1)
  }
  {
    const directionalLight2 = new THREE.DirectionalLight(0xff3b3b, 1.2)
directionalLight2.position.set(80, 100, -50)
scene.add(directionalLight2)
  }

  {const backLight = new THREE.PointLight(0xff0000, 2, 500) // Красный свет, яркость 2, дальность 500
  backLight.position.set(0, 50, -100) // Позади модели
  scene.add(backLight)
  }


  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistance = 300
  controls.maxPolarAngle = Math.PI / 2.2

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()


  window.addEventListener('resize', onWindowResize)

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

>>>>>>> 16be696c0cf4f7fdb5d51678cbc0d9719cc47be0
