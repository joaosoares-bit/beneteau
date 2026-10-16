const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GLTFLoader-Bjc8wPZS.js","./three.module-CQ_LhNOD.js","./RoomEnvironment-Cta_p1ef.js","./EffectComposer--_1t4gOB.js","./CopyShader-BzTUYzf6.js","./Pass-ILNblOxz.js","./RenderPass-7h04NAOW.js","./GTAOPass-BW7EH751.js","./OutputPass-BBsB-3lN.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./gt50-BsBFY3eM.js";import"./comum-CAA-bgt2.js";async function te(h,{url:B,onPronto:R,onAngulo:k,estudio:W=!0}={}){const o=await f(()=>import("./three.module-CQ_LhNOD.js"),[],import.meta.url),{GLTFLoader:H}=await f(async()=>{const{GLTFLoader:e}=await import("./GLTFLoader-Bjc8wPZS.js");return{GLTFLoader:e}},__vite__mapDeps([0,1]),import.meta.url),{MeshoptDecoder:X}=await f(async()=>{const{MeshoptDecoder:e}=await import("./meshopt_decoder.module-CkuQsJa_.js");return{MeshoptDecoder:e}},[],import.meta.url),{RoomEnvironment:Y}=await f(async()=>{const{RoomEnvironment:e}=await import("./RoomEnvironment-Cta_p1ef.js");return{RoomEnvironment:e}},__vite__mapDeps([2,1]),import.meta.url),n=new o.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.outputColorSpace=o.SRGBColorSpace,n.toneMapping=o.ACESFilmicToneMapping,n.toneMappingExposure=.9,h.appendChild(n.domElement);const d=new o.Scene,J=new o.PMREMGenerator(n);d.environment=J.fromScene(new Y,.03).texture;const l=new o.PerspectiveCamera(26,1,.01,50);let u=null;if(innerWidth>900&&!matchMedia("(pointer: coarse)").matches){const[{EffectComposer:e},{RenderPass:a},{GTAOPass:t},{OutputPass:s}]=await Promise.all([f(()=>import("./EffectComposer--_1t4gOB.js"),__vite__mapDeps([3,1,4,5]),import.meta.url),f(()=>import("./RenderPass-7h04NAOW.js"),__vite__mapDeps([6,1,5]),import.meta.url),f(()=>import("./GTAOPass-BW7EH751.js"),__vite__mapDeps([7,1,5,4]),import.meta.url),f(()=>import("./OutputPass-BBsB-3lN.js"),__vite__mapDeps([8,1,5]),import.meta.url)]);u=new e(n),u.addPass(new a(d,l));const i=new t(d,l,2,2);i.blendIntensity=.85,i.updateGtaoMaterial({radius:.18,distanceExponent:1.2,thickness:1,scale:1.1,samples:16}),i.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:16}),u.addPass(i),u.addPass(new s)}const S=new o.DirectionalLight(16774374,1.7);S.position.set(2.5,4,3),d.add(S);const Z=new o.DirectionalLight(12576511,.9);Z.position.set(-3,2,-3),d.add(Z);const _=document.createElement("canvas");_.width=_.height=256;const C=_.getContext("2d"),L=C.createRadialGradient(128,128,8,128,128,128);L.addColorStop(0,"rgba(12,35,64,.34)"),L.addColorStop(1,"rgba(12,35,64,0)"),C.fillStyle=L,C.fillRect(0,0,256,256);const D=new o.Mesh(new o.PlaneGeometry(1,1),new o.MeshBasicMaterial({map:new o.CanvasTexture(_),transparent:!0,depthWrite:!1}));D.rotation.x=-Math.PI/2,d.add(D);const E=new o.Group;d.add(E);const p=(await new H().setMeshoptDecoder(X).loadAsync(B)).scene;let g=new o.Box3().setFromObject(p);g.getSize(new o.Vector3).z>g.getSize(new o.Vector3).x&&(p.rotation.y=Math.PI/2,p.updateMatrixWorld(!0)),g=new o.Box3().setFromObject(p);const T=g.getSize(new o.Vector3),I=g.getCenter(new o.Vector3);p.position.set(-I.x,-g.min.y,-I.z);const V=2.2/T.x;E.add(p),E.scale.setScalar(V),D.scale.set(T.x*V*1.15,T.z*V*1.6,1),E.updateMatrixWorld(!0);const r={uCasco:{value:new o.Color("#F2F1EC")},uDe:{value:new o.Color("#F2F1EC")},uVarre:{value:1},uLim:{value:0},uEixo:{value:0},uMin:{value:-1},uMax:{value:1},uTabuas:{value:50},uEstudio:{value:W?1:0},uEst:{value:new o.Color(-1,0,0)},uEstDe:{value:new o.Color(-1,0,0)},uEstV:{value:1},uTec:{value:new o.Color(-1,0,0)},uTecDe:{value:new o.Color(-1,0,0)},uTecV:{value:1},uZonas:{value:0},uLado:{value:new o.Vector2(0,1)},uAltura:{value:new o.Vector2(0,1)}};p.traverse(e=>{if(!e.isMesh)return;const a=new o.Box3().setFromObject(E);r.uLim.value=a.min.y+(a.max.y-a.min.y)*.47;const t=a.max.x-a.min.x,s=a.max.z-a.min.z;r.uEixo.value=t>=s?0:1,r.uMin.value=t>=s?a.min.x:a.min.z,r.uMax.value=t>=s?a.max.x:a.max.z,r.uTabuas.value=37/Math.max(.001,t>=s?s:t),r.uLado.value.set(t>=s?(a.min.z+a.max.z)/2:(a.min.x+a.max.x)/2,(t>=s?s:t)/2),r.uAltura.value.set(a.min.y,a.max.y-a.min.y);const i=e.material;e.material=new o.MeshPhysicalMaterial({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,metalnessMap:i.metalnessMap,roughness:i.roughness,metalness:i.metalness,clearcoat:.6,clearcoatRoughness:.07,side:i.side}),i.dispose(),e.material.onBeforeCompile=x=>{Object.assign(x.uniforms,r),x.vertexShader=`varying vec3 vPo; varying vec3 vNo;
`+x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vPo = (modelMatrix * vec4(position, 1.)).xyz; vNo = mat3(modelMatrix) * normal;`),x.fragmentShader=`varying vec3 vPo; varying vec3 vNo; uniform vec3 uCasco; uniform vec3 uDe; uniform float uVarre; uniform float uLim; uniform float uEixo; uniform float uMin; uniform float uMax; uniform float uTabuas; uniform float uEstudio; uniform vec3 uEst; uniform vec3 uEstDe; uniform float uEstV; uniform vec3 uTec; uniform vec3 uTecDe; uniform float uTecV; uniform float uZonas; uniform vec2 uLado; uniform vec2 uAltura;
`+x.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
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
  // zonas: azul-céu (vidro ou hardtop), teca (a madeira laranja do atlas), costado e estofos do cockpit
  float azul = smoothstep(.06, .2, nc.b - nc.r) * smoothstep(.16, .3, sat);
  float rb = (cz.r - cz.b) / mxh;
  // só há teca na plataforma de banho (popa) e nos pisos virados para cima, abaixo do hardtop: os pingos laranja
  // que o atlas tem nas bordas do cockpit e no hardtop ficam gelcoat
  float pisos = max(1. - smoothstep(.06, .09, k), cima * (1. - smoothstep(.45, .5, alto)));
  float teca = smoothstep(.2, .34, rb) * smoothstep(.22, .36, lp) * (1. - smoothstep(.9, .97, lp)) * pisos;
  // costado: tudo o que fica abaixo da linha e não olha para cima, menos o que é mesmo escuro (vigias)
  float costado = (1. - smoothstep(uLim - .01, uLim + .01, vPo.y)) * (1. - smoothstep(.5, .82, normalize(vNo).y)) * smoothstep(.1, .2, lp);
  float cockpit = (1. - smoothstep(.3, .36, k)) * smoothstep(.07, .1, k) * (1. - smoothstep(.78, .88, lado)) * smoothstep(.2, .26, alto) * (1. - smoothstep(.6, .66, alto)) * smoothstep(.3, .38, lp) * (1. - smoothstep(.8, .9, lp));
  float estofo = cockpit * (1. - teca);
  // matéria limpa: o atlas gerado tem salpicos e retalhos; fica só a luz dele, bem desfocada e sem cor,
  // e os claros passam a gelcoat. É o que dá o ar de render de estúdio (como o D42 do Tomás)
  float Ll = dot(cl, vec3(.2126, .7152, .0722)), lpl = pow(max(Ll, 0.), .4545);
  vec3 gel = vec3(.66, .66, .645);
  vec3 limpo = mix(vec3(Ll) * vec3(1., .99, .97), gel, smoothstep(.6, .78, lpl));
  float gelcoat = (1. - teca) * (1. - azul * smoothstep(uLim - .02, uLim + .03, vPo.y));
  vec3 base = mix(diffuseColor.rgb, limpo, gelcoat);
  // azul virado para cima passa a hardtop cinzento (como no render oficial), azul de lado passa a vidro escuro
  // (abaixo da linha de água o azul é só salpico do atlas: fica casco)
  float sobre = smoothstep(uLim - .02, uLim + .03, vPo.y);
  azul *= sobre;
  base = mix(base, mix(vec3(.012, .015, .02), vec3(.24, .26, .28), cima), azul);
  // hardtop: no render oficial é taupe quente (não cinzento-frio), por cima do vidro fumado
  float hardtop = smoothstep(.74, .79, alto) * (1. - teca) * smoothstep(.12, .35, normalize(vNo).y) * smoothstep(.22, .32, lp);
  // casco: cor lisa, da popa à proa
  vec3 alvoCor = mix(uCasco, uDe, smoothstep(uVarre - .05, uVarre + .05, k));
  base = mix(base, alvoCor * .86, costado * (1. - teca));
  base = mix(base, vec3(.17, .152, .128), hardtop);
  // estofos: Linetex Chalk de série (uEst negativo), ou a cor escolhida, numa onda de ré para vante
  vec3 chalk = vec3(.76, .73, .66);
  float ke = clamp((k - .07) / .3, 0., 1.);
  vec3 estNovo = uEst.r < 0. ? chalk : uEst, estVelho = uEstDe.r < 0. ? chalk : uEstDe;
  vec3 tecido = mix(estNovo, estVelho, smoothstep(uEstV - .08, uEstV + .08, ke)) * (.9 + .1 * smoothstep(.3, .8, lpl));
  base = mix(base, tecido, estofo);
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
  diffuseColor.rgb = base;
  if (uZonas > 5.5) { diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., 0., 0.), hardtop); }
  else if (uZonas > 4.5) { diffuseColor.rgb = vec3(fract(lp * 5.), lp, 0.); }
  else if (uZonas > 1.5) { diffuseColor.rgb = uZonas < 2.5 ? vec3(k, 0., 1. - k) : uZonas < 3.5 ? vec3(fract(alto * 10.), alto, 0.) : vec3(fract(lado * 10.), lado, 0.); }
  else if (uZonas > .5) { diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., .85, 0.), teca); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1., 0., .5), estofo); }
  float escuro = azul * (1. - cima) * (1. - estofo);
  vZona = vec4(escuro, max(teca, hardtop * .5), estofo, gelcoat * (1. - estofo) * (1. - escuro) * (1. - hardtop));`),x.fragmentShader=x.fragmentShader.replace("varying vec3 vPo; varying vec3 vNo;","varying vec3 vPo; varying vec3 vNo; vec4 vZona;").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(mix(mix(roughnessFactor, .26, vZona.w), .05, vZona.x), .62, vZona.y), .88, vZona.z);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor = mix(mix(metalnessFactor, .1, vZona.x), 0., max(max(vZona.y, vZona.z), vZona.w));`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
  #ifdef USE_CLEARCOAT
  material.clearcoat *= (1. - vZona.y) * (1. - vZona.z);
  #endif`)},e.material.normalScale&&e.material.normalScale.set(.22,.22),e.material.needsUpdate=!0}),p.traverse(e=>{e.isMesh&&(e.material.envMapIntensity=.8)});let A=0,O=0;function K(e){if(r.uDe.value.copy(r.uCasco.value),r.uCasco.value.set(e),matchMedia("(prefers-reduced-motion: reduce)").matches){r.uVarre.value=1.1;return}O=performance.now(),A=1}const z=[];function F(e,a,t,s){if(r[a].value.copy(r[e].value),s?r[e].value.set(s):r[e].value.setRGB(-1,0,0),matchMedia("(prefers-reduced-motion: reduce)").matches){r[t].value=1.2;return}r[t].value=-.1,z.push({v:t,t0:performance.now()})}let b=-.55,m=b,M=.32,y=M,P=4.6,v=null,w=0,j=!0,G=!0;const Q=matchMedia("(prefers-reduced-motion: reduce)").matches;function N(){const e=h.clientWidth,a=h.clientHeight;n.setSize(e,a,!1),u&&(u.setPixelRatio(n.getPixelRatio()),u.setSize(e,a)),l.aspect=e/a,l.updateProjectionMatrix();const t=Math.tan(l.fov*Math.PI/360)*l.aspect;P=Math.max(4.6,1.45/t)}N(),new ResizeObserver(N).observe(h);const c=n.domElement;c.style.touchAction="pan-y",c.tabIndex=0,c.setAttribute("role","img"),c.setAttribute("aria-label","Gran Turismo 50 in 3D. Drag or use the arrow keys to turn it."),c.addEventListener("pointerdown",e=>{v={x:e.clientX,y:e.clientY,a:m,h:y},c.setPointerCapture(e.pointerId),h.classList.add("a-rodar")}),c.addEventListener("pointermove",e=>{if(!v)return;const a=e.clientX-v.x,t=e.clientY-v.y;if(e.pointerType==="touch"&&Math.abs(t)>Math.abs(a)*1.4&&Math.abs(a)<8)return;const s=v.a+a*.008;w=s-m,m=s,y=Math.min(.9,Math.max(.08,v.h+t*.003))});const q=()=>{v=null,h.classList.remove("a-rodar")};c.addEventListener("pointerup",q),c.addEventListener("pointercancel",q),c.addEventListener("keydown",e=>{const a={ArrowLeft:-.3,ArrowRight:.3}[e.key];a&&(e.preventDefault(),m+=a)}),new IntersectionObserver(([e])=>{G=e.isIntersecting}).observe(h);function U(){if(j&&(requestAnimationFrame(U),!!G)){v||(w*=.94,m+=w*.6,!Q&&Math.abs(w)<5e-4&&(m+=.0016)),b+=(m-b)*.08,M+=(y-M)*.08;for(let e=z.length-1;e>=0;e--){const a=z[e],t=Math.min(1,(performance.now()-a.t0)/1100);r[a.v].value=-.1+(1-Math.pow(1-t,3))*1.3,t>=1&&z.splice(e,1)}if(A){const e=Math.min(1,(performance.now()-O)/1400);r.uVarre.value=-.08+(1-Math.pow(1-e,3))*1.2,e>=1&&(A=0)}l.position.set(Math.sin(b)*P*Math.cos(M),.35+Math.sin(M)*P,Math.cos(b)*P*Math.cos(M)),l.lookAt(0,.28,0),u?u.render():n.render(d,l),k&&k(b)}}return U(),R&&R(),{vai(e){const a=Math.PI*2;m=e+Math.round((m-e)/a)*a,w=0},pararRodar(){w=0},altura(e){y=Math.min(.9,Math.max(.08,e))},casco:K,estofos:e=>F("uEst","uEstDe","uEstV",e),teca:e=>F("uTec","uTecDe","uTecV",e),zonas(e){r.uZonas.value=+e},destroi(){j=!1,n.dispose()}}}export{te as criaVisor};
