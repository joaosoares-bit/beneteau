const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GLTFLoader-Bjc8wPZS.js","./three.module-CQ_LhNOD.js","./RoomEnvironment-Cta_p1ef.js","./EffectComposer--_1t4gOB.js","./CopyShader-BzTUYzf6.js","./Pass-ILNblOxz.js","./RenderPass-7h04NAOW.js","./GTAOPass-BW7EH751.js","./OutputPass-BBsB-3lN.js"])))=>i.map(i=>d[i]);
import{_ as L}from"./gt50-Ky-Ks0eT.js";import"./comum-BhcKXRhV.js";async function ne(v,{url:I,onPronto:z,onAngulo:_,estudio:X=!0}={}){const r=await L(()=>import("./three.module-CQ_LhNOD.js"),[],import.meta.url),{GLTFLoader:O}=await L(async()=>{const{GLTFLoader:e}=await import("./GLTFLoader-Bjc8wPZS.js");return{GLTFLoader:e}},__vite__mapDeps([0,1]),import.meta.url),{MeshoptDecoder:f}=await L(async()=>{const{MeshoptDecoder:e}=await import("./meshopt_decoder.module-CkuQsJa_.js");return{MeshoptDecoder:e}},[],import.meta.url),{RoomEnvironment:C}=await L(async()=>{const{RoomEnvironment:e}=await import("./RoomEnvironment-Cta_p1ef.js");return{RoomEnvironment:e}},__vite__mapDeps([2,1]),import.meta.url),p=new r.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});p.setPixelRatio(Math.min(devicePixelRatio,2)),p.outputColorSpace=r.SRGBColorSpace,p.toneMapping=r.ACESFilmicToneMapping,p.toneMappingExposure=.9,v.appendChild(p.domElement);const w=new r.Scene,U=new r.PMREMGenerator(p);w.environment=U.fromScene(new C,.03).texture;const g=new r.PerspectiveCamera(26,1,.01,50);let M=null;if(innerWidth>900&&!matchMedia("(pointer: coarse)").matches){const[{EffectComposer:e},{RenderPass:o},{GTAOPass:c},{OutputPass:m}]=await Promise.all([L(()=>import("./EffectComposer--_1t4gOB.js"),__vite__mapDeps([3,1,4,5]),import.meta.url),L(()=>import("./RenderPass-7h04NAOW.js"),__vite__mapDeps([6,1,5]),import.meta.url),L(()=>import("./GTAOPass-BW7EH751.js"),__vite__mapDeps([7,1,5,4]),import.meta.url),L(()=>import("./OutputPass-BBsB-3lN.js"),__vite__mapDeps([8,1,5]),import.meta.url)]);M=new e(p),M.addPass(new o(w,g));const d=new c(w,g,2,2);d.blendIntensity=.85,d.updateGtaoMaterial({radius:.18,distanceExponent:1.2,thickness:1,scale:1.1,samples:16}),d.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:16}),M.addPass(d),M.addPass(new m)}const Z=new r.DirectionalLight(16774374,1.7);Z.position.set(2.5,4,3),w.add(Z);const b=new r.DirectionalLight(12576511,.9);b.position.set(-3,2,-3),w.add(b);const h=document.createElement("canvas");h.width=h.height=256;const B=h.getContext("2d"),F=B.createRadialGradient(128,128,8,128,128,128);F.addColorStop(0,"rgba(12,35,64,.34)"),F.addColorStop(1,"rgba(12,35,64,0)"),B.fillStyle=F,B.fillRect(0,0,256,256);const j=new r.Mesh(new r.PlaneGeometry(1,1),new r.MeshBasicMaterial({map:new r.CanvasTexture(h),transparent:!0,depthWrite:!1}));j.rotation.x=-Math.PI/2,w.add(j);const x=new r.Group;w.add(x);const t=(await new O().setMeshoptDecoder(f).loadAsync(I)).scene;let n=new r.Box3().setFromObject(t);n.getSize(new r.Vector3).z>n.getSize(new r.Vector3).x&&(t.rotation.y=Math.PI/2,t.updateMatrixWorld(!0)),n=new r.Box3().setFromObject(t);const s=n.getSize(new r.Vector3),i=n.getCenter(new r.Vector3);t.position.set(-i.x,-n.min.y,-i.z);const u=2.2/s.x;x.add(t),x.scale.setScalar(u),j.scale.set(s.x*u*1.15,s.z*u*1.6,1),x.updateMatrixWorld(!0),t.traverse(e=>{e.isMesh&&ae(r,e,[-.1,-.36,-.24],[.28,-.09,-.03],.33)});const a={uCasco:{value:new r.Color("#F2F1EC")},uDe:{value:new r.Color("#F2F1EC")},uVarre:{value:1},uLim:{value:0},uEixo:{value:0},uMin:{value:-1},uMax:{value:1},uTabuas:{value:50},uEstudio:{value:X?1:0},uEst:{value:new r.Color(-1,0,0)},uEstDe:{value:new r.Color(-1,0,0)},uEstV:{value:1},uTec:{value:new r.Color(-1,0,0)},uTecDe:{value:new r.Color(-1,0,0)},uTecV:{value:1},uZonas:{value:0},uLado:{value:new r.Vector2(0,1)},uAltura:{value:new r.Vector2(0,1)},uBorda:{value:new r.Vector2(.5,.57)}};t.traverse(e=>{if(!e.isMesh)return;const o=new r.Box3().setFromObject(x);a.uLim.value=o.min.y+(o.max.y-o.min.y)*.47;const c=o.max.x-o.min.x,m=o.max.z-o.min.z;a.uEixo.value=c>=m?0:1,a.uMin.value=c>=m?o.min.x:o.min.z,a.uMax.value=c>=m?o.max.x:o.max.z,a.uTabuas.value=37/Math.max(.001,c>=m?m:c),a.uLado.value.set(c>=m?(o.min.z+o.max.z)/2:(o.min.x+o.max.x)/2,(c>=m?m:c)/2),a.uAltura.value.set(o.min.y,o.max.y-o.min.y);const d=e.material;d.normalMap&&d.normalMap.dispose(),e.material=new r.MeshPhysicalMaterial({map:d.map,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,roughness:d.roughness,metalness:d.metalness,clearcoat:.6,clearcoatRoughness:.07,side:d.side}),d.dispose(),e.material.onBeforeCompile=D=>{Object.assign(D.uniforms,a),D.vertexShader=`varying vec3 vPo; varying vec3 vNo;
`+D.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vPo = (modelMatrix * vec4(position, 1.)).xyz; vNo = mat3(modelMatrix) * normal;`),D.fragmentShader=`varying vec3 vPo; varying vec3 vNo; uniform vec3 uCasco; uniform vec3 uDe; uniform float uVarre; uniform float uLim; uniform float uEixo; uniform float uMin; uniform float uMax; uniform float uTabuas; uniform float uEstudio; uniform vec3 uEst; uniform vec3 uEstDe; uniform float uEstV; uniform vec3 uTec; uniform vec3 uTecDe; uniform float uTecV; uniform float uZonas; uniform vec2 uLado; uniform vec2 uAltura; uniform vec2 uBorda;
`+D.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  // a zona lê-se na textura desfocada (mip mais baixo): sem pontinhos nem riscos soltos
  #ifdef USE_MAP
  vec3 cz = texture2D(map, vMapUv, 1.).rgb;
  // quatro tomas desfocadas à volta do ponto, fica a mais clara: os salpicos escuros do atlas desaparecem
  vec3 cl = texture2D(map, vMapUv, 2.2).rgb;
  vec3 c1 = texture2D(map, vMapUv + vec2(.0016, .0011), 2.2).rgb, c2 = texture2D(map, vMapUv - vec2(.0011, .0016), 2.2).rgb;
  vec3 c3 = texture2D(map, vMapUv + vec2(-.0016, .0011), 2.2).rgb, c4 = texture2D(map, vMapUv + vec2(.0011, -.0016), 2.2).rgb;
  cl = max(max(max(cl, c1), max(c2, c3)), c4);
  #else
  vec3 cz = diffuseColor.rgb; vec3 cl = cz;
  #endif
  float lum = dot(cz, vec3(.299, .587, .114)); float lp = pow(max(lum, 0.), .4545);
  float mx = max(cz.r, max(cz.g, cz.b)), mn = min(cz.r, min(cz.g, cz.b));
  float sat = (mx - mn) / max(mx, .001);
  float mxh = max(mx, .001); vec3 nc = cz / mxh;
  float k = ((uEixo < .5 ? vPo.x : vPo.z) - uMin) / (uMax - uMin);
  float lado = abs((uEixo < .5 ? vPo.z : vPo.x) - uLado.x) / uLado.y, alto = (vPo.y - uAltura.x) / uAltura.y;
  float cima = smoothstep(.5, .78, normalize(vNo).y);
  // pintura pela forma, como um modelo de estaleiro: cada zona tem uma cor lisa e a textura gerada só serve
  // para achar os vidros (escuros) e a teca (laranja). Assim não sobra nenhum salpico nem retalho
  vec3 nW = normalize(vNo);
  float zrel = (uEixo < .5 ? vPo.z : vPo.x) - uLado.x;
  float nLat = (uEixo < .5 ? nW.z : nW.x) * sign(zrel);
  float paraFora = smoothstep(.1, .3, nLat) * (1. - smoothstep(.6, .85, abs(nW.y)));
  float sheer = mix(uBorda.x, uBorda.y, k);
  float costado = paraFora * (1. - smoothstep(sheer - .012, sheer + .012, alto));
  float Ll = dot(cl, vec3(.2126, .7152, .0722)), lpl = pow(max(Ll, 0.), .4545);
  float azul = smoothstep(.06, .2, nc.b - nc.r) * smoothstep(.16, .3, sat) * smoothstep(sheer - .02, sheer + .03, alto);
  // no tecto do hardtop não há vidro: os pontos escuros da grelha da frente eram ruído do atlas
  float tecto = smoothstep(.74, .79, alto) * smoothstep(.3, .55, nW.y);
  // vidro só onde a mancha escura é grande (mip muito desfocado): riscos finos, como a grelha falsa da frente
  // do hardtop, ficam gelcoat liso
  #ifdef USE_MAP
  vec3 cv = texture2D(map, vMapUv, 3.6).rgb;
  #else
  vec3 cv = cz;
  #endif
  float lpv = pow(max(dot(cv, vec3(.2126, .7152, .0722)), 0.), .4545);
  float vidro = max(1. - smoothstep(.24, .36, lpv), azul * (1. - cima)) * (1. - costado) * (1. - tecto);
  float rb = (cz.r - cz.b) / mxh;
  float plataforma = cima * (1. - smoothstep(.06, .075, k)) * (1. - smoothstep(.3, .34, alto));
  float pisos = cima * (1. - smoothstep(.34, .38, k)) * (1. - smoothstep(.45, .5, alto));
  float teca = max(plataforma, smoothstep(.2, .34, rb) * smoothstep(.22, .36, lp) * pisos) * (1. - vidro);
  float cockpit = (1. - smoothstep(.3, .36, k)) * smoothstep(.07, .1, k) * (1. - smoothstep(.78, .88, lado)) * smoothstep(.2, .26, alto) * (1. - smoothstep(.6, .66, alto));
  float estofo = cockpit * (1. - teca) * (1. - vidro) * (1. - paraFora);
  float hardtop = smoothstep(.74, .79, alto) * smoothstep(.12, .35, nW.y) * (1. - vidro);
  vec3 base = vec3(.66, .66, .645);
  base = mix(base, vec3(.17, .152, .128), hardtop);
  vec3 alvoCor = mix(uCasco, uDe, smoothstep(uVarre - .05, uVarre + .05, k));
  base = mix(base, alvoCor * .86, costado);
  vec3 chalk = vec3(.76, .73, .66);
  float ke = clamp((k - .07) / .3, 0., 1.);
  vec3 estNovo = uEst.r < 0. ? chalk : uEst, estVelho = uEstDe.r < 0. ? chalk : uEstDe;
  base = mix(base, mix(estNovo, estVelho, smoothstep(uEstV - .08, uEstV + .08, ke)), estofo);
  // teca desenhada: tábuas ao comprimento, calafeto escuro, veio e tom diferentes em cada tábua; as juntas
  // desvanecem quando a tábua fica pequena no ecrã (sem tremura)
  float atr = (uEixo < .5 ? vPo.z : vPo.x) * uTabuas, ao = (uEixo < .5 ? vPo.x : vPo.z) / max(.001, uMax - uMin);
  float id = floor(atr), hh = fract(sin(id * 12.9898) * 43758.5453), fr = fract(atr), w = fwidth(atr);
  float junta = smoothstep(0., max(.06, w * 1.3), min(fr, 1. - fr));
  junta = mix(junta, .93, smoothstep(.18, .45, w));
  float veio = .5 + .5 * sin(ao * (140. + hh * 90.) + hh * 40. + sin(ao * 23. + hh * 9.) * 2.2);
  vec3 natural = vec3(.36, .17, .07);
  vec3 tNovo = uTec.r < 0. ? natural : uTec, tVelho = uTecDe.r < 0. ? natural : uTecDe;
  vec3 madeira = mix(tNovo, tVelho, smoothstep(uTecV - .08, uTecV + .08, lado)) * (.84 + .26 * hh) * (.92 + .12 * veio);
  madeira = mix(vec3(.02, .017, .014), madeira, junta);
  base = mix(base, madeira, teca);
  base = mix(base, vec3(.01, .013, .017), vidro);
  float gelcoat = (1. - teca) * (1. - vidro) * (1. - estofo) * (1. - hardtop);
  diffuseColor.rgb = base;
  if (uZonas > 6.5) { diffuseColor.rgb = mix(mix(vec3(.9), vec3(fract(alto * 20.), alto, 1. - alto), paraFora), vec3(1., 0., 0.), costado); }
  else if (uZonas > 5.5) { diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., 0., 0.), hardtop); }
  else if (uZonas > 4.5) { diffuseColor.rgb = vec3(fract(lp * 5.), lp, 0.); }
  else if (uZonas > 1.5) { diffuseColor.rgb = uZonas < 2.5 ? vec3(k, 0., 1. - k) : uZonas < 3.5 ? vec3(fract(alto * 10.), alto, 0.) : vec3(fract(lado * 10.), lado, 0.); }
  else if (uZonas > .5) { diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., .85, 0.), teca); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., 0., .5), estofo); }
  float escuro = vidro;
  vZona = vec4(escuro, max(teca, hardtop * .5), estofo, gelcoat);`),D.fragmentShader=D.fragmentShader.replace("varying vec3 vPo; varying vec3 vNo;","varying vec3 vPo; varying vec3 vNo; vec4 vZona;").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(mix(mix(roughnessFactor, .26, vZona.w), .05, vZona.x), .62, vZona.y), .88, vZona.z);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor = mix(mix(metalnessFactor, .1, vZona.x), 0., max(max(vZona.y, vZona.z), vZona.w));`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
  #ifdef USE_CLEARCOAT
  material.clearcoat *= (1. - vZona.y) * (1. - vZona.z);
  #endif`)},e.material.needsUpdate=!0}),t.traverse(e=>{e.isMesh&&(e.material.envMapIntensity=.8)});let l=0,y=0;function W(e){if(a.uDe.value.copy(a.uCasco.value),a.uCasco.value.set(e),matchMedia("(prefers-reduced-motion: reduce)").matches){a.uVarre.value=1.1;return}y=performance.now(),l=1}const A=[];function R(e,o,c,m){if(a[o].value.copy(a[e].value),m?a[e].value.set(m):a[e].value.setRGB(-1,0,0),matchMedia("(prefers-reduced-motion: reduce)").matches){a[c].value=1.2;return}a[c].value=-.1,A.push({v:c,t0:performance.now()})}let T=-.55,V=T,k=.32,G=k,N=4.6,P=null,S=0,H=!0,J=!0;const te=matchMedia("(prefers-reduced-motion: reduce)").matches;function K(){const e=v.clientWidth,o=v.clientHeight;p.setSize(e,o,!1),M&&(M.setPixelRatio(p.getPixelRatio()),M.setSize(e,o)),g.aspect=e/o,g.updateProjectionMatrix();const c=Math.tan(g.fov*Math.PI/360)*g.aspect;N=Math.max(4.6,1.45/c)}K(),new ResizeObserver(K).observe(v);const E=p.domElement;E.style.touchAction="pan-y",E.tabIndex=0,E.setAttribute("role","img"),E.setAttribute("aria-label","Gran Turismo 50 in 3D. Drag or use the arrow keys to turn it."),E.addEventListener("pointerdown",e=>{P={x:e.clientX,y:e.clientY,a:V,h:G},E.setPointerCapture(e.pointerId),v.classList.add("a-rodar")}),E.addEventListener("pointermove",e=>{if(!P)return;const o=e.clientX-P.x,c=e.clientY-P.y;if(e.pointerType==="touch"&&Math.abs(c)>Math.abs(o)*1.4&&Math.abs(o)<8)return;const m=P.a+o*.008;S=m-V,V=m,G=Math.min(.9,Math.max(.08,P.h+c*.003))});const Q=()=>{P=null,v.classList.remove("a-rodar")};E.addEventListener("pointerup",Q),E.addEventListener("pointercancel",Q),E.addEventListener("keydown",e=>{const o={ArrowLeft:-.3,ArrowRight:.3}[e.key];o&&(e.preventDefault(),V+=o)}),new IntersectionObserver(([e])=>{J=e.isIntersecting}).observe(v);function ee(){if(H&&(requestAnimationFrame(ee),!!J)){P||(S*=.94,V+=S*.6,!te&&Math.abs(S)<5e-4&&(V+=.0016)),T+=(V-T)*.08,k+=(G-k)*.08;for(let e=A.length-1;e>=0;e--){const o=A[e],c=Math.min(1,(performance.now()-o.t0)/1100);a[o.v].value=-.1+(1-Math.pow(1-c,3))*1.3,c>=1&&A.splice(e,1)}if(l){const e=Math.min(1,(performance.now()-y)/1400);a.uVarre.value=-.08+(1-Math.pow(1-e,3))*1.2,e>=1&&(l=0)}g.position.set(Math.sin(T)*N*Math.cos(k),.35+Math.sin(k)*N,Math.cos(T)*N*Math.cos(k)),g.lookAt(0,.28,0),M?M.render():p.render(w,g),_&&_(T)}}return ee(),z&&z(),{vai(e){const o=Math.PI*2;V=e+Math.round((V-e)/o)*o,S=0},pararRodar(){S=0},altura(e){G=Math.min(.9,Math.max(.08,e))},casco:W,estofos:e=>R("uEst","uEstDe","uEstV",e),teca:e=>R("uTec","uTecDe","uTecV",e),zonas(e){a.uZonas.value=+e},sonda(e,o){const c=p.domElement.getBoundingClientRect(),m=new r.Raycaster;m.setFromCamera(new r.Vector2((e-c.left)/c.width*2-1,-((o-c.top)/c.height)*2+1),g);const d=m.intersectObject(x,!0)[0];return d?{local:d.object.worldToLocal(d.point.clone()).toArray().map($=>+$.toFixed(4)),mundo:d.point.toArray().map($=>+$.toFixed(4))}:null},destroi(){H=!1,p.dispose()}}}function ae(v,I,z,_,X,r=36){const O=I.geometry,f=O.attributes.position,C=O.attributes.normal,p=O.index;if(!p||!f)return;const w=f.count,U=new v.Vector3,g=new v.Matrix3().getNormalMatrix(I.matrixWorld),M=new v.Vector3,Z=new Map,b=new Int32Array(w).fill(-1),h=[],B=(t,n,s)=>{const i=(u,a,l)=>Math.min(1,Math.min(u-a,l-u)/((l-a)*.18));return Math.max(0,Math.min(i(t,z[0],_[0]),i(n,z[1],_[1]),i(s,z[2],_[2])))};for(let t=0;t<w;t++){const n=f.getX(t),s=f.getY(t),i=f.getZ(t);if(n<=z[0]||n>=_[0]||s<=z[1]||s>=_[1]||i<=z[2]||i>=_[2]||(U.set(n,s,i).applyMatrix4(I.matrixWorld),U.y<X)||C&&(M.set(C.getX(t),C.getY(t),C.getZ(t)).applyMatrix3(g).normalize(),M.y<.25))continue;const u=`${n.toFixed(5)},${s.toFixed(5)},${i.toFixed(5)}`;let a=Z.get(u);a===void 0&&(a=h.length,Z.set(u,a),h.push({x:n,y:s,z:i,w:B(n,s,i),viz:new Set,membros:[]})),b[t]=a,h[a].membros.push(t)}if(!h.length)return;const F=new Map,j=t=>{const n=`${f.getX(t).toFixed(5)},${f.getY(t).toFixed(5)},${f.getZ(t).toFixed(5)}`,s=Z.get(n);if(s!==void 0)return s;let i=F.get(n);return i||F.set(n,i={x:f.getX(t),y:f.getY(t),z:f.getZ(t),fixo:!0}),i},x=p.array,Y=[];for(let t=0;t<x.length;t+=3){const n=[x[t],x[t+1],x[t+2]];if(!(b[n[0]]<0&&b[n[1]]<0&&b[n[2]]<0)){Y.push(t);for(let s=0;s<3;s++){const i=n[s];if(b[i]<0)continue;const u=h[b[i]];for(const a of[n[(s+1)%3],n[(s+2)%3]]){const l=j(a);l!==u&&u.viz.add(l)}}}}const q=t=>{const n=h.map(s=>{let i=0,u=0,a=0,l=0;for(const y of s.viz)i+=y.x,u+=y.y,a+=y.z,l++;return l?[i/l-s.x,u/l-s.y,a/l-s.z]:[0,0,0]});h.forEach((s,i)=>{const u=t*s.w;s.x+=n[i][0]*u,s.y+=n[i][1]*u,s.z+=n[i][2]*u})};for(let t=0;t<r;t++)q(.5),q(-.53);if(h.forEach(t=>t.membros.forEach(n=>f.setXYZ(n,t.x,t.y,t.z))),f.needsUpdate=!0,C){const t=new Map,n=new v.Vector3,s=new v.Vector3,i=new v.Vector3,u=new v.Vector3;for(const a of Y){const[l,y,W]=[x[a],x[a+1],x[a+2]];n.fromBufferAttribute(f,l),s.fromBufferAttribute(f,y),i.fromBufferAttribute(f,W),u.subVectors(i,s).cross(n.clone().sub(s));for(const A of[l,y,W]){if(b[A]<0)continue;const R=b[A];(t.get(R)||t.set(R,new v.Vector3).get(R)).add(u)}}t.forEach((a,l)=>{a.normalize(),h[l].membros.forEach(y=>C.setXYZ(y,a.x,a.y,a.z))}),C.needsUpdate=!0}}export{ne as criaVisor};
