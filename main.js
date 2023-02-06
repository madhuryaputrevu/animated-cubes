import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff, 1);
document.body.appendChild( renderer.domElement );

var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );

var cubes = [];
for (var i = 0; i < 100; i++) {
  var color;
  if (i % 3 === 0) {
    color = new THREE.Color("rgb(72, 181, 163)"); // red
  } else if (i % 3 === 1) {
    color = new THREE.Color("rgb(193, 179, 215)"); // green
  } else {
    color = new THREE.Color("rgb(249, 140, 182)"); // blue
  }
  var cubeMaterial = new THREE.MeshBasicMaterial({ color: color });
  var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.scale.x = (Math.random() + 0.5)
  cube.scale.y = (Math.random() + 0.5);
  cube.scale.z = (Math.random() + 0.5);
  cube.position.x = (Math.random() - 0.5) * 20;
  cube.position.y = (Math.random() - 0.5) * 20;
  cube.position.z = (Math.random() - 0.5) * 20;
  cubes.push(cube);
  scene.add(cube);
}

var randomSpeed = Math.random() * 0.05;

function animate() {
  requestAnimationFrame( animate );
  for (var i = 0; i < cubes.length; i++) {
    var randomSpeed = Math.random() * 0.02;
    cubes[i].rotation.x += randomSpeed;
    cubes[i].rotation.y += randomSpeed;
  }
  renderer.render( scene, camera );
}

animate();
