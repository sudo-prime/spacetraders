import React, { useEffect, useState, useMemo } from "react";
import * as THREE from 'three';

interface MapWindowProps {
    system?: Array<Object>,
};

const MapWindow = ({system}: MapWindowProps) => {
    const [windowSize, setWindowSize] = useState({ width: 300, height: 400 });
    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());
    const [camera, setCamera] = useState(new THREE.PerspectiveCamera( 75, windowSize.width / windowSize.height, 0.1, 1000 ));

    const cube = useMemo(() => {
        console.log("[Map] building cube");
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        return new THREE.Mesh( geometry, material );
    }, []);

    const scene = useMemo(() => {
        console.log("[Map] building scene");
        const scene = new THREE.Scene();
        scene.add(cube);
        camera.position.z = 5;
        return scene;
    }, [renderer]);

    useEffect(() => {
        console.log("[Map] adding scene to document");

        const mapWindow: HTMLElement | null = document.getElementById("mapWindow");
        mapWindow?.appendChild( renderer.domElement );
    });
    
    useEffect(() => {
        console.log("[Map] animating scene");

        function animate() {
            requestAnimationFrame( animate );
    
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
    
            renderer.render( scene, camera );
        }
    
        animate();
    }, [])

    useEffect(() => {
        console.log("[Map] resizing");

        camera.aspect = windowSize.width / windowSize.height;
        camera.updateProjectionMatrix();

        renderer.setSize( windowSize.width, windowSize.height );
    }, [camera, renderer, windowSize]);

    return <div id="mapWindow"></div>
}

export default MapWindow;