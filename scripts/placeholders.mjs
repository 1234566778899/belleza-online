// Genera imágenes SVG temporales en public/images a partir de src/data/images.json.
// Productos (con "shape"): silueta del envase sobre gris claro. El resto: degradado del color "bg" con su etiqueta.
// Uso: npm run images:placeholders
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const { images } = JSON.parse(readFileSync("src/data/images.json", "utf8"));
mkdirSync("public/images", { recursive: true });

/** Siluetas simples centradas en (0,0), dibujadas en una caja de ~400px. */
const shapes = {
  bottle: (c) => `<rect x="-30" y="-190" width="60" height="50" rx="6" fill="#c9a96e"/><rect x="-18" y="-145" width="36" height="25" fill="#bbb"/><rect x="-120" y="-125" width="240" height="300" rx="40" fill="${c}" opacity=".85"/><rect x="-95" y="-100" width="40" height="250" rx="20" fill="#fff" opacity=".35"/>`,
  "bottle-square": (c) => `<rect x="-45" y="-200" width="90" height="60" rx="4" fill="#111"/><rect x="-140" y="-140" width="280" height="310" rx="16" fill="${c}" opacity=".9"/><rect x="-115" y="-115" width="30" height="260" rx="10" fill="#fff" opacity=".25"/>`,
  "bottle-tall": (c) => `<rect x="-28" y="-215" width="56" height="45" rx="6" fill="#ddd"/><rect x="-80" y="-170" width="160" height="350" rx="24" fill="${c}" opacity=".8"/><rect x="-60" y="-150" width="22" height="310" rx="11" fill="#fff" opacity=".4"/>`,
  spray: (c) => `<rect x="-20" y="-210" width="40" height="40" rx="6" fill="#999"/><rect x="-35" y="-175" width="70" height="30" rx="6" fill="#ccc"/><rect x="-90" y="-150" width="180" height="330" rx="50" fill="${c}" opacity=".85"/>`,
  lipstick: (c) => `<rect x="-55" y="20" width="110" height="160" rx="8" fill="#111"/><rect x="-58" y="0" width="116" height="26" rx="4" fill="#c9a96e"/><rect x="-40" y="-110" width="80" height="115" fill="#c9a96e"/><path d="M-36 -110 L-36 -200 Q-36 -215 -20 -225 L36 -170 L36 -110 Z" fill="${c}"/>`,
  dropper: (c) => `<ellipse cx="0" cy="-185" rx="30" ry="34" fill="#222"/><rect x="-36" y="-160" width="72" height="40" rx="6" fill="#c9a96e"/><rect x="-100" y="-120" width="200" height="290" rx="30" fill="${c}" opacity=".85"/><rect x="-80" y="-100" width="26" height="250" rx="13" fill="#fff" opacity=".35"/>`,
  "tube-thin": (c) => `<rect x="-30" y="-210" width="60" height="230" rx="28" fill="${c}"/><rect x="-32" y="10" width="64" height="20" fill="#c9a96e"/><rect x="-30" y="25" width="60" height="160" rx="28" fill="${c}" opacity=".85"/>`,
  palette: (c) => `<rect x="-190" y="-130" width="380" height="260" rx="20" fill="#222"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${-135 + (i % 4) * 90}" cy="${-75 + Math.floor(i / 4) * 75}" r="30" fill="${c}" opacity="${0.45 + (i % 5) * 0.12}"/>`).join("")}`,
  jar: (c) => `<rect x="-150" y="-110" width="300" height="70" rx="14" fill="#c9a96e"/><rect x="-140" y="-40" width="280" height="170" rx="30" fill="${c}"/><ellipse cx="0" cy="-40" rx="140" ry="18" fill="#fff"/>`,
  tube: (c) => `<path d="M-90 -200 L90 -200 L70 120 L-70 120 Z" fill="${c}"/><rect x="-55" y="120" width="110" height="70" rx="10" fill="#bbb"/><rect x="-90" y="-210" width="180" height="16" rx="4" fill="${c}" opacity=".7"/>`,
  pump: (c) => `<path d="M-10 -215 h70 v18 h-50 v40 h-20 Z" fill="#555"/><rect x="-30" y="-165" width="60" height="40" rx="6" fill="#777"/><rect x="-100" y="-125" width="200" height="305" rx="34" fill="${c}" opacity=".9"/>`,
  soap: (c) => Array.from({ length: 5 }, (_, i) => `<rect x="-130" y="${110 - i * 60}" width="260" height="55" rx="16" fill="${c}" opacity="${0.5 + i * 0.1}"/>`).join(""),
  box: (c) => `<rect x="-170" y="-90" width="340" height="250" rx="10" fill="${c}"/><rect x="-185" y="-130" width="370" height="60" rx="8" fill="${c}" opacity=".8"/><rect x="-15" y="-130" width="30" height="290" fill="#fff" opacity=".7"/><path d="M0 -130 q-70 -80 -90 -10 Z M0 -130 q70 -80 90 -10 Z" fill="#fff" opacity=".8"/>`,
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const img of images) {
  if (!img.file.endsWith(".svg")) continue;
  const [w, h] = img.size.split("x").map(Number);
  let body;
  if (img.shape) {
    const scale = (Math.min(w, h) / 400) * 0.75;
    body = `<rect width="100%" height="100%" fill="${img.bg}"/><g transform="translate(${w / 2} ${h / 2}) scale(${scale})">${shapes[img.shape](img.color)}</g>`;
  } else {
    const fs = Math.round(Math.min(w, h) * 0.045);
    body =
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${img.bg}"/><stop offset="1" stop-color="${img.bg}" stop-opacity=".55"/></linearGradient></defs>` +
      `<rect width="100%" height="100%" fill="#fff"/><rect width="100%" height="100%" fill="url(#g)"/>` +
      `<circle cx="${w * 0.72}" cy="${h * 0.5}" r="${Math.min(w, h) * 0.28}" fill="#fff" opacity=".35"/>` +
      `<text x="${w * 0.72}" y="${h * 0.5 + fs / 3}" text-anchor="middle" font-family="sans-serif" font-size="${fs}" fill="#000" opacity=".35">${esc(img.label)}</text>`;
  }
  writeFileSync(`public/images/${img.file}`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`);
}
console.log(`✓ ${images.length} placeholders en public/images`);
