//@ts-nocheck

import * as THREE from 'three';
import { MindARThree } from 'mind-ar/dist/mindar-face-three.prod';
import { isLandscape } from 'aframe';


const mindarThree = new MindARThree({
    container: document.querySelector("#container"),
    });
    const {renderer, scene, camera} = mindarThree;
     const anchor = mindarThree.addAnchor(1);
    const geometry = new THREE.SphereGeometry( 0.2, 50, 500 );
     const material = new THREE.MeshBasicMaterial( {color: 0x55cbbb, transparent: true, opacity: 0.5} );
    const sphere = new THREE.Mesh( geometry, material );

    anchor.group.add(sphere);

    const anchor2 = mindarThree.addAnchor(1);
    // const face = mindarThree.
    const geometry2 = new THREE.CircleGeometry(0.1,48,0);
    const material2 = new THREE.MeshBasicMaterial( {color: 0x55cbcc} );
    const circle = new THREE.Mesh(geometry2,material2);
    anchor2.group.add(circle);


  


    //const face =  mindarThree.addFaceMesh();

    const start = async() => {
  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
    }
   
   
    const startButton = document.querySelector("#startButton");
      startButton?.addEventListener("click", () => {
	start();
      });
    const stopButton =document.querySelector("#stopButton")
      stopButton?.addEventListener("click", () => {
	mindarThree.stop();
	mindarThree.renderer.setAnimationLoop(null);
      });