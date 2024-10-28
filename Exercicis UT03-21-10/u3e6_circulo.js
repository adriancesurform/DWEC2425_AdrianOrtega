function resultado() {
    const numero = parseFloat(document.getElementById("number").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = "<p>Introduce un número válido para el radio.</p>";
        return;
    }

    // Crea la escena, cámara y renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    resultado.appendChild(renderer.domElement);

    // Crea la esfera
    const geometry = new THREE.SphereGeometry(numero, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ajusta la posición de la cámara en función del tamaño de la esfera
    camera.position.z = numero * 2.5; // Ajusta el multiplicador para que se vea bien

    // Controla el ajuste del tamaño del renderer cuando se cambia el tamaño de la ventana
    window.addEventListener('resize', function() {
        const width = resultado;
        const height = resultado;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
}
