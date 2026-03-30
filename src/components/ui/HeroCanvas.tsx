"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Material factories ───────────────────────────────────────────────── */
const wm = (opacity = 0.82) =>
  new THREE.LineBasicMaterial({ color: 0xc9a96e, transparent: true, opacity });
const dimWm = () => wm(0.32);

function edges(geo: THREE.BufferGeometry, mat: THREE.LineBasicMaterial) {
  return new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat);
}

function bx(w: number, h: number, d: number) {
  return new THREE.BoxGeometry(w, h, d);
}
function cy(rT: number, rB: number, h: number, seg = 10) {
  return new THREE.CylinderGeometry(rT, rB, h, seg);
}

function addB(g: THREE.Group, geo: THREE.BufferGeometry, x: number, y: number, z: number, bright = true) {
  const l = edges(geo, bright ? wm() : dimWm());
  l.position.set(x, y, z);
  g.add(l);
}

/* ─── Furniture wireframe builders ────────────────────────────────────── */

function buildChair(): THREE.Group {
  const g = new THREE.Group();
  addB(g, bx(0.88, 0.09, 0.82), 0, 0.44, 0);          // seat
  addB(g, bx(0.88, 0.82, 0.07), 0, 0.89, -0.37);       // backrest
  addB(g, bx(0.74, 0.05, 0.07), 0, 1.26, -0.37);       // top rail
  // armrests
  addB(g, bx(0.07, 0.22, 0.78), -0.41, 0.57, 0), addB(g, bx(0.07, 0.22, 0.78), 0.41, 0.57, 0);
  // legs
  [[-0.35, -0.34], [0.35, -0.34], [-0.35, 0.34], [0.35, 0.34]].forEach(([x, z]) =>
    addB(g, bx(0.045, 0.43, 0.045), x, 0.21, z, false)
  );
  return g;
}

function buildLamp(): THREE.Group {
  const g = new THREE.Group();
  addB(g, cy(0.38, 0.48, 0.09), 0, 0.045, 0);          // base disc
  addB(g, cy(0.03, 0.03, 2.1, 8), 0, 1.1, 0, false);   // pole
  addB(g, cy(0.1, 0.52, 0.58, 10), 0, 2.42, 0);        // shade (cone)
  addB(g, bx(0.22, 0.04, 0.22), 0, 2.11, 0, false);    // shade base
  return g;
}

function buildTable(): THREE.Group {
  const g = new THREE.Group();
  addB(g, bx(1.5, 0.07, 0.78), 0, 0.82, 0);            // top
  [[-0.63, -0.32], [0.63, -0.32], [-0.63, 0.32], [0.63, 0.32]].forEach(([x, z]) =>
    addB(g, bx(0.05, 0.78, 0.05), x, 0.39, z, false)
  );
  addB(g, bx(1.3, 0.04, 0.06), 0, 0.14, 0, false);     // cross brace
  addB(g, bx(0.06, 0.04, 0.66), 0, 0.14, 0, false);
  return g;
}

function buildSofa(): THREE.Group {
  const g = new THREE.Group();
  addB(g, bx(2.0, 0.36, 0.84), 0, 0.18, 0);            // base
  addB(g, bx(2.0, 0.56, 0.09), 0, 0.66, -0.37);        // back
  addB(g, bx(0.12, 0.50, 0.84), -0.94, 0.43, 0);       // left arm
  addB(g, bx(0.12, 0.50, 0.84), 0.94, 0.43, 0);        // right arm
  addB(g, bx(0.82, 0.13, 0.68), -0.44, 0.50, 0.04, false); // cushion L
  addB(g, bx(0.82, 0.13, 0.68), 0.44, 0.50, 0.04, false);  // cushion R
  // base feet
  [[-0.85, -0.37], [0.85, -0.37], [-0.85, 0.37], [0.85, 0.37]].forEach(([x, z]) =>
    addB(g, bx(0.06, 0.08, 0.06), x, 0.04, z, false)
  );
  return g;
}

function buildShelf(): THREE.Group {
  const g = new THREE.Group();
  addB(g, bx(1.15, 1.9, 0.34), 0, 0.95, 0);            // outer frame
  [0.05, 0.49, 0.93, 1.37, 1.81].forEach((y) =>
    addB(g, bx(1.05, 0.04, 0.3), 0, y, 0, false)        // shelves
  );
  // books on shelf 2 & 3
  [-0.34, -0.18, -0.02, 0.14, 0.3].forEach((x, i) =>
    addB(g, bx(0.1, 0.22 + (i % 3) * 0.07, 0.22), x, 0.71, 0, false)
  );
  [-0.28, -0.1, 0.1].forEach((x) =>
    addB(g, bx(0.12, 0.28, 0.22), x, 1.15, 0, false)
  );
  return g;
}

function buildFrame(): THREE.Group {
  const g = new THREE.Group();
  addB(g, bx(0.9, 1.2, 0.05), 0, 0, 0);                // outer frame
  addB(g, bx(0.68, 0.98, 0.02), 0, 0, 0.03, false);    // canvas
  addB(g, bx(0.9, 0.06, 0.05), 0, -0.67, 0, false);    // bottom ledge
  addB(g, bx(0.28, 0.03, 0.18), 0, -0.72, -0.08, false); // stand foot
  return g;
}

/* ─── Main component ──────────────────────────────────────────────────── */

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* Renderer */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    /* Scene & camera */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 2.0, 7.5);

    /* Lights */
    scene.add(new THREE.AmbientLight(0xffeacc, 0.3));
    const gl1 = new THREE.PointLight(0xc9a96e, 6, 18);
    gl1.position.set(3, 5, 4);
    scene.add(gl1);
    const gl2 = new THREE.PointLight(0xe8c97a, 4, 14);
    gl2.position.set(-5, 3, 1);
    scene.add(gl2);
    const gl3 = new THREE.PointLight(0xffd580, 2, 10);
    gl3.position.set(0, -1, 5);
    scene.add(gl3);

    /* ── Carousel ─────────────────────────────────────────────────────── */
    const carousel = new THREE.Group();
    carousel.position.set(1.5, -0.6, 0); // shifted right — text is on left
    scene.add(carousel);

    const builders = [buildChair, buildLamp, buildTable, buildSofa, buildShelf, buildFrame];
    const items: THREE.Group[] = [];
    const R = 3.8; // carousel radius

    builders.forEach((build, i) => {
      const item = build();
      item.scale.setScalar(0.72);
      const angle = (i / builders.length) * Math.PI * 2;
      item.position.set(Math.cos(angle) * R, 0, Math.sin(angle) * R);
      carousel.add(item);
      items.push(item);
    });

    /* ── Floor grid ───────────────────────────────────────────────────── */
    const gridMat = new THREE.LineBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.07 });
    const gridGrp = new THREE.Group();
    for (let i = -8; i <= 8; i++) {
      const h = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-10, 0, i), new THREE.Vector3(10, 0, i)]);
      const v = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i, 0, -8), new THREE.Vector3(i, 0, 8)]);
      gridGrp.add(new THREE.Line(h, gridMat), new THREE.Line(v, gridMat));
    }
    gridGrp.position.set(1.5, -1.6, -1);
    scene.add(gridGrp);

    /* ── Particles ────────────────────────────────────────────────────── */
    const pCount = 220;
    const pArr = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pArr[i * 3] = (Math.random() - 0.5) * 26;
      pArr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pArr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pArr, 3));
    const particleMesh = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xc9a96e, size: 0.038, transparent: true, opacity: 0.45 }));
    scene.add(particleMesh);

    /* ── Mouse / touch ───────────────────────────────────────────────── */
    const mouse = { tx: 0, ty: 0, x: 0, y: 0 };
    const onMM = (e: MouseEvent) => { mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2; mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2; };
    const onTM = (e: TouchEvent) => { if (e.touches[0]) { mouse.tx = (e.touches[0].clientX / window.innerWidth - 0.5) * 2; mouse.ty = -(e.touches[0].clientY / window.innerHeight - 0.5) * 2; } };
    window.addEventListener("mousemove", onMM);
    window.addEventListener("touchmove", onTM, { passive: true });

    /* ── Resize ──────────────────────────────────────────────────────── */
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ──────────────────────────────────────────────── */
    let frame = 0;
    let animId: number;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      frame++;
      const t = frame * 0.008;

      // Smooth mouse
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;

      // Carousel spin
      carousel.rotation.y += 0.0022;

      // Each item: float + slow self-rotate
      items.forEach((item, i) => {
        item.position.y = Math.sin(t * 0.85 + i * 1.1) * 0.22;
        item.rotation.y += 0.007;
      });

      // Particle drift
      particleMesh.rotation.y = t * 0.015;

      // Camera parallax
      camera.position.x += (mouse.x * 1.1 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 0.5 + 2.0 - camera.position.y) * 0.03;
      camera.lookAt(1.5, 0.4, 0);

      // Light animation
      gl1.position.x = Math.sin(t * 0.4) * 3 + 2;
      gl1.position.z = Math.cos(t * 0.3) * 3 + 3;

      renderer.render(scene, camera);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("touchmove", onTM);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}
