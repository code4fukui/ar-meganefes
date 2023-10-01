import * as THREE from "three";

export const createMegane = (r = .1) => {
	const w = r / 20;
	const rw = r / 5;
	const off = r / 4;
	const pi2 = Math.PI * 2;

	const group = new THREE.Group();

	const extrudeSettings = {
		steps: 1,
		depth: w,
		bevelEnabled: false,
		curveSegments: 36,
	};

	const shapes = [
		(() => {
			const s = new THREE.Shape();
			const x2 = -r - off / 2;
			s.absarc(x2, 0, r, 0, pi2, true);
			s.absarc(x2, 0, r - rw, 0, pi2, false);
			return s;
		})(),
		(() => {
			const s = new THREE.Shape();
			const x1 = r + off / 2;	
			s.absarc(x1, 0, r, 0, pi2, true);
			s.absarc(x1, 0, r - rw, 0, pi2, false);
			return s;
		})(),
		(() => {
			const s = new THREE.Shape();
			const y = -r / 3;
			const dth = Math.PI / 4;
			const th1 = Math.PI / 2 + dth / 2;
			const th2 = Math.PI / 2 - dth / 2;
			s.absarc(0, y, r, th1, th2, true);
			s.absarc(0, y, r - rw, th2, th1, false);
			return s;
		})(),
	];
	for (const s of shapes) {
		const geometry = new THREE.ExtrudeGeometry(s, extrudeSettings);
		const color = "#ff0000";
		const material = new THREE.MeshStandardMaterial({ color });
		const object = new THREE.Mesh(geometry, material);
		group.add(object);
	}
	return group;
};