CSS={unit:"px",camX:0,camY:0,camZ:0,camRX:0,camRY:0,camRZ:0,sprite_count:0,sprites:[],plane_count:0,cube_count:0,pyramid_count:0,options:{},$:t=>document.getElementById(t),set_unit:t=>{CSS.unit=t},set_perspective:t=>{viewport.style.perspective=`${t}${CSS.unit}`,CSS.fx()},init:t=>{t.css||(t.css=""),t.html||(t.html=""),t.g?t.g=CSS.$(t.g):t.g=CSS.$("scene"),t.o||(t.o="center"),"bottom"==t.o&&(t.y-=t.h/2),t.w||(t.w=0),t.h||(t.h=0),t.x||(t.x=0),t.y||(t.y=0),t.z||(t.z=0),t.rx||(t.rx=0),t.ry||(t.ry=0),t.rz||(t.rz=0),t.sx||(t.sx=1),t.sy||(t.sy=1),t.sz||(t.sz=1),CSS.options[t.n]=t},fx:t=>{CSS.camZ+=1e-4,CSS.camera(),CSS.camera()},group:t=>{scene.innerHTML+=`<div id="${t.n}" class=group style="position:absolute;width:${t.w}${CSS.unit};height:${t.d}${CSS.unit};transform:translateX(-50%)translateY(-50%)translateX(${t.x}${CSS.unit})translateY(${t.y}${CSS.unit})translateZ(${t.z}${CSS.unit})rotateX(${t.rx}deg)rotateY(${t.ry}deg)rotateZ(${t.rz}deg)scaleX(${t.sx})scaleY(${t.sy})scaleZ(${t.sz})">`,CSS.fx()},plane:t=>{t.n||(t.n=`plane${CSS.plane_count++}`),CSS.init(t),t.g.innerHTML+=`<div id=${t.n} class="plane ${t.css}" style="position:absolute;width:${t.w}${CSS.unit};height:${t.h}${CSS.unit};background:${t.b};transform-origin:${t.o};transform:translateX(-50%)translateY(-50%)translateX(${t.x}${CSS.unit})translateY(${t.y}${CSS.unit})translateZ(${t.z}${CSS.unit})rotateX(${t.rx}deg)rotateY(${t.ry}deg)rotateZ(${t.rz}deg)">${t.html}`,CSS.fx()},sprite:t=>{t.n||(t.n=`sprite${CSS.sprite_count++}`),CSS.init(t),scene.innerHTML+=`<div id=${t.n} class="sprite ${t.css}" style="position:absolute;width:${t.w}${CSS.unit};height:${t.h}${CSS.unit};background:${t.b};transform-origin:${t.o};transform:translateX(-50%)translateY(-50%)translateX(${t.x}${CSS.unit})translateY(${t.y}${CSS.unit})translateZ(${t.z}${CSS.unit})">${t.html}`,CSS.sprites.push(t.n),CSS.fx()},cube:t=>{t.n||(t.n=`cube${CSS.cube_count++}`),CSS.init(t),CSS.group(t),CSS.plane({g:t.n,x:t.w/2,y:t.d/2,w:t.w,h:t.d,b:t.b,css:"bottom"}),CSS.plane({g:t.n,y:t.d/2,w:t.d,h:t.h,b:t.b,rx:-90,ry:-90,o:"bottom",css:"left"}),CSS.plane({g:t.n,x:t.w,y:t.d/2,w:t.d,h:t.h,b:t.b,rx:-90,ry:-90,o:"bottom",css:"right"}),CSS.plane({g:t.n,x:t.w/2,y:0,w:t.w,h:t.h,b:t.b,rx:-90,o:"bottom",css:"back"}),CSS.plane({g:t.n,x:t.w/2,y:t.d,w:t.w,h:t.h,b:t.b,rx:-90,o:"bottom",css:"front"}),CSS.plane({g:t.n,x:t.w/2,y:t.d/2,z:t.h,w:t.w,h:t.d,b:t.b,css:"top"})},pyramid:t=>{t.n||(t.n=`pyramid${CSS.pyramid_count++}`),CSS.init(t),CSS.group({n:t.n,x:t.x,y:t.y,z:t.z,w:100,d:100,rx:t.rx,ry:t.ry,rz:t.rz,sx:t.w/100,sy:t.d/100,sz:t.h/86.6025}),CSS.plane({g:t.n,x:50,y:50,w:100,h:100,b:t.b,css:"bottom"}),CSS.plane({g:t.n,y:50,w:100,h:100,b:t.b,ry:-60,rz:90,css:"triangle left",o:"bottom"}),CSS.plane({g:t.n,x:100,y:50,w:100,h:100,b:t.b,ry:-120,rz:90,css:"triangle right",o:"bottom"}),CSS.plane({g:t.n,x:50,y:0,w:100,h:100,b:t.b,rx:-120,css:"triangle back",o:"bottom"}),CSS.plane({g:t.n,x:50,y:100,w:100,h:100,b:t.b,rx:-60,css:"triangle front",o:"bottom"})},camera:t=>{for(var S in t&&(t.x||0===t.x)&&(CSS.camX=t.x),t&&(t.y||0===t.y)&&(CSS.camY=t.y),t&&(t.z||0===t.z)&&(CSS.camZ=t.z),t&&(t.rx||0===t.rx)&&(CSS.camRX=t.rx),t&&(t.ry||0===t.ry)&&(CSS.camRY=t.ry),t&&(t.rz||0===t.rz)&&(CSS.camRZ=t.rz),scene.style.transformOrigin=`${CSS.camX}${CSS.unit} ${CSS.camY}${CSS.unit}`,scene.style.transform=`translateX(${-CSS.camX}${CSS.unit})translateY(${-CSS.camY}${CSS.unit})translateZ(${-CSS.camZ}${CSS.unit})rotateX(${CSS.camRX}deg)rotateY(${CSS.camRY}deg)rotateZ(${CSS.camRZ}deg)`,CSS.sprites){var r=CSS.$(CSS.sprites[S]),n=r.style.transform.replace(/ *rotate.*\(.*?deg\)/g,"");r.style.transform=n+`rotateZ(${-CSS.camRZ}deg)rotateX(${-CSS.camRX}deg)`}},move:t=>{if(t.n){var S=CSS.$(t.n),r=CSS.options[t.n];(t.x||0===t.x)&&(r.x=t.x),(t.y||0===t.y)&&(r.y=t.y),(t.z||0===t.z)&&(r.z=t.z),(t.rx||0===t.rx)&&(r.rx=t.rx),(t.ry||0===t.ry)&&(r.ry=t.ry),(t.rz||0===t.rz)&&(r.rz=t.rz),CSS.options[t.n]=r,S.style.transform=`translateX(-50%)translateY(-50%)translateX(${r.x}${CSS.unit})translateY(${r.y}${CSS.unit})translateZ(${r.z}${CSS.unit})rotateX(${r.rx}deg)rotateY(${r.ry}deg)rotateZ(${r.rz}deg)scaleX(${r.sx})scaleY(${r.sy})scaleZ(${r.sz})`}}}

// Ground
CSS.set_unit("vmin");
CSS.plane({n:"ground", x:0, w:500, h:500, b:"#307b30"});
CSS.camera({z:400, rx:15});

// Cube
let xPos = 0;
let yPos = 0;
let zPos = 0;
CSS.cube({n:"player",g:"g1",x:xPos,y:yPos,z:0,w:17,h:50,d:10,b:"#ff8d00"});

document.body.onkeypress = function(e) {
    switch(e.code) {
        case "KeyA":
            xPos -= 25;
            CSS.move({n:"player", x: xPos});
            break;
        case "KeyW":
            yPos -= 25;
            CSS.move({n:"player", y: yPos});
            break;
        case "KeyS":
            yPos += 25;
            CSS.move({n:"player", y: yPos});
            break;
        case "KeyD":
            xPos += 25;
            CSS.move({n:"player", x: xPos});
            break;
        case "Space":
            zPos = 100;
            CSS.move({n:"player", z: zPos});
            break;
        default:break;
    }
};