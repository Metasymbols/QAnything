function s(s,a){if(s.classList)return s.classList.contains(a);return` ${s.className} `.indexOf(` ${a} `)>-1}function a(a,c){a.classList?a.classList.add(c):s(a,c)||(a.className=`${a.className} ${c}`)}function c(a,c){if(a.classList)a.classList.remove(c);else if(s(a,c)){const s=a.className;a.className=` ${s} `.replace(` ${c} `," ")}}export{a,c as r};
