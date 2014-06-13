// revolutions per second
var angularSpeed = 0.2; 
var lastTime = 0;

var sizeW = 500;
var sizeH = 500;

// this function is executed on each animation frame
function animate() {
	// update
	controls.update();
	var time = (new Date()).getTime();
	var timeDiff = time - lastTime;
	var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

	cube.rotation.y += angleChange;
	lastTime = time;
	
	// render
	renderer.render(scene, camera);
	
	// request new frame
	requestAnimationFrame(function () {
		animate();
	});
}

// renderer
/*
if (window.ejecta) {
	// Ejecta
	renderer = new THREE.WebGLRenderer( { canvas: document.getElementById('canvas'), antialias: false } );
} else {
*/
	// Browser
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(sizeW, sizeH);
	container = document.getElementById( 'container' );
	container.appendChild( renderer.domElement );
/*
}
*/

// camera
var camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
camera.position.z = 500;

// controls
var controls = new THREE.OrbitControls(camera);
controls.addEventListener('change', render);

// scene
var scene = new THREE.Scene();

// material
var material = new THREE.MeshLambertMaterial({
map: THREE.ImageUtils.loadTexture('assets/image/ejecta_webgl/wizlogo.jpg')
});

// cube
var cube = new THREE.Mesh(new THREE.CubeGeometry(150, 150, 150), material /*new THREE.MeshNormalMaterial() */);
cube.overdraw = true;
scene.add(cube);

// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0xbbbbbb);
scene.add(ambientLight);

// directional lighting
var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

function render() {
	renderer.render(scene, camera);
}

// start animation
animate();
