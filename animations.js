// Topic-specific end animations
const topicAnimations = {
  'Superhéroes': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Night sky background -->
  <rect width="400" height="150" fill="#0f1a3a"/>
  <!-- City buildings -->
  <rect x="0" y="100" width="40" height="50" fill="#0d2248"/>
  <rect x="35" y="85" width="50" height="65" fill="#0a1e40"/>
  <rect x="80" y="95" width="35" height="55" fill="#0d2248"/>
  <rect x="110" y="78" width="45" height="72" fill="#0a1e40"/>
  <rect x="150" y="90" width="30" height="60" fill="#0d2248"/>
  <rect x="175" y="82" width="55" height="68" fill="#0a1e40"/>
  <rect x="225" y="95" width="40" height="55" fill="#0d2248"/>
  <rect x="260" y="80" width="50" height="70" fill="#0a1e40"/>
  <rect x="305" y="92" width="35" height="58" fill="#0d2248"/>
  <rect x="335" y="75" width="65" height="75" fill="#0a1e40"/>
  <!-- Lit windows -->
  <rect x="15" y="108" width="8" height="6" fill="#ffe080"/>
  <rect x="42" y="92" width="8" height="6" fill="#ffe080"/>
  <rect x="55" y="105" width="8" height="6" fill="#ffe080"/>
  <rect x="120" y="85" width="8" height="6" fill="#ffe080"/>
  <rect x="135" y="100" width="8" height="6" fill="#ffe080"/>
  <rect x="185" y="90" width="8" height="6" fill="#ffe080"/>
  <rect x="200" y="108" width="8" height="6" fill="#ffe080"/>
  <rect x="268" y="88" width="8" height="6" fill="#ffe080"/>
  <rect x="340" y="82" width="8" height="6" fill="#ffe080"/>
  <rect x="358" y="98" width="8" height="6" fill="#ffe080"/>
  <!-- Crescent moon -->
  <circle cx="340" cy="28" r="18" fill="#fffacd"/>
  <circle cx="350" cy="22" r="16" fill="#0f1a3a"/>
  <!-- Stars -->
  <circle cx="30" cy="20" r="2" fill="white"/>
  <circle cx="90" cy="35" r="1.5" fill="white"/>
  <circle cx="160" cy="15" r="2" fill="white"/>
  <circle cx="230" cy="40" r="1.5" fill="white"/>
  <circle cx="290" cy="18" r="2" fill="white"/>
  <!-- Flying hero group -->
  <g>
    <animateMotion path="M -80,75 L 480,55" dur="2.4s" repeatCount="indefinite"/>
    <!-- Speed lines behind hero -->
    <line x1="-60" y1="-5" x2="-25" y2="-5" stroke="white" stroke-width="1.5" opacity="0.5"/>
    <line x1="-65" y1="3" x2="-22" y2="3" stroke="white" stroke-width="1" opacity="0.4"/>
    <line x1="-55" y1="10" x2="-18" y2="10" stroke="white" stroke-width="1" opacity="0.3"/>
    <!-- Red cape -->
    <g>
      <path d="M -5,-8 C -15,5 -20,18 -8,28 L 5,15 Z" fill="#ec4899"/>
      <animateTransform attributeName="transform" type="skewY" values="-10;14;-10" dur="0.4s" repeatCount="indefinite" additive="sum"/>
    </g>
    <!-- Hero body (ellipse, purple) -->
    <ellipse cx="0" cy="5" rx="14" ry="10" fill="#6366f1"/>
    <!-- Extended fist -->
    <circle cx="22" cy="-2" r="6" fill="#D9A876"/>
    <!-- Head -->
    <circle cx="8" cy="-10" r="9" fill="#D9A876"/>
    <!-- Hair -->
    <path d="M 1,-18 Q 8,-22 16,-18 Q 14,-13 8,-14 Q 2,-13 1,-18 Z" fill="#3b1f0a"/>
    <!-- Mask -->
    <rect x="2" y="-13" width="14" height="5" rx="2" fill="#4338ca"/>
    <!-- Eyes -->
    <circle cx="6" cy="-11" r="2.5" fill="#1a1a2e"/>
    <circle cx="13" cy="-11" r="2.5" fill="#1a1a2e"/>
    <circle cx="7" cy="-12" r="0.8" fill="white"/>
    <circle cx="14" cy="-12" r="0.8" fill="white"/>
    <!-- Legs -->
    <rect x="-5" y="13" width="5" height="10" rx="2" fill="#4338ca"/>
    <rect x="2" y="13" width="5" height="10" rx="2" fill="#4338ca"/>
  </g>
</svg>`,

  'Aventura Fantástica': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark sky -->
  <rect width="400" height="150" fill="#0a1a0a"/>
  <!-- Forest ground -->
  <rect x="0" y="100" width="400" height="50" fill="#1a3318"/>
  <!-- Tree silhouettes -->
  <rect x="10" y="60" width="12" height="45" fill="#0d2210"/>
  <polygon points="16,20 -5,65 37,65" fill="#0d2210"/>
  <rect x="60" y="70" width="10" height="35" fill="#0d2210"/>
  <polygon points="65,35 45,75 85,75" fill="#0d2210"/>
  <rect x="320" y="65" width="12" height="40" fill="#0d2210"/>
  <polygon points="326,28 305,70 347,70" fill="#0d2210"/>
  <rect x="365" y="60" width="10" height="45" fill="#0d2210"/>
  <polygon points="370,22 348,65 392,65" fill="#0d2210"/>
  <!-- Moon -->
  <circle cx="320" cy="35" r="20" fill="#fffaaa"/>
  <!-- Stars -->
  <circle cx="40" cy="18" r="1.5" fill="white"/>
  <circle cx="100" cy="28" r="2" fill="white"/>
  <circle cx="170" cy="12" r="1.5" fill="white"/>
  <circle cx="240" cy="30" r="2" fill="white"/>
  <circle cx="280" cy="15" r="1.5" fill="white"/>
  <circle cx="350" cy="60" r="1.5" fill="white"/>
  <!-- Sparkles from snout -->
  <circle r="4" fill="#ffe040" opacity="0">
    <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="228;263" dur="1.2s" begin="0s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="70;45" dur="1.2s" begin="0s" repeatCount="indefinite"/>
  </circle>
  <circle r="3" fill="#ff80ff" opacity="0">
    <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="228;258" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="68;38" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
  </circle>
  <circle r="3.5" fill="#80ffff" opacity="0">
    <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="228;268" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="72;48" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
  </circle>
  <!-- Dragon group bobbing -->
  <g transform="translate(200,75)">
    <animateTransform attributeName="transform" type="translate" values="200,75; 200,63; 200,75" dur="1.8s" repeatCount="indefinite"/>
    <!-- Tail -->
    <path d="M -25,12 Q -45,25 -40,38 Q -35,45 -28,38 Q -32,30 -20,18 Z" fill="#2a7a2a"/>
    <!-- Body -->
    <ellipse cx="0" cy="8" rx="28" ry="18" fill="#3a8a3a"/>
    <!-- Left wing -->
    <path d="M -10,-2 L -50,-30 L -35,-5 Z" fill="#4aaa4a" opacity="0.9"/>
    <path d="M -10,2 L -52,-15 L -36,5 Z" fill="#5aba5a" opacity="0.7"/>
    <!-- Right wing -->
    <path d="M 10,-2 L 50,-30 L 35,-5 Z" fill="#4aaa4a" opacity="0.9"/>
    <path d="M 10,2 L 52,-15 L 36,5 Z" fill="#5aba5a" opacity="0.7"/>
    <!-- Head -->
    <circle cx="22" cy="-5" r="16" fill="#4a9a4a"/>
    <!-- Snout -->
    <ellipse cx="34" cy="2" rx="8" ry="5" fill="#5aaa5a"/>
    <!-- Nostrils -->
    <circle cx="32" cy="1" r="1.5" fill="#2a6a2a"/>
    <circle cx="36" cy="1" r="1.5" fill="#2a6a2a"/>
    <!-- Eyes -->
    <circle cx="18" cy="-10" r="5" fill="#111"/>
    <circle cx="26" cy="-10" r="5" fill="#111"/>
    <circle cx="19" cy="-11" r="1.5" fill="white"/>
    <circle cx="27" cy="-11" r="1.5" fill="white"/>
    <!-- Tiny horn -->
    <polygon points="22,-20 19,-28 25,-28" fill="#2a6a2a"/>
  </g>
</svg>`,

  'Misterio': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background -->
  <rect width="400" height="150" fill="#0a1020"/>
  <!-- Subtle dot grid -->
  <circle cx="40" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="80" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="120" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="160" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="200" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="240" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="280" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="320" cy="30" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="40" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="80" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="120" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="160" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="200" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="240" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="280" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="320" cy="70" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="40" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="80" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="120" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="160" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="200" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <circle cx="240" cy="110" r="1" fill="#1a2a40" opacity="0.6"/>
  <!-- Faint footprints -->
  <ellipse cx="80" cy="50" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <ellipse cx="95" cy="42" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <ellipse cx="150" cy="90" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <ellipse cx="165" cy="82" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <ellipse cx="240" cy="55" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <ellipse cx="255" cy="48" rx="5" ry="8" fill="#1a2a40" opacity="0.4"/>
  <!-- Detective hat (static, decorative) -->
  <ellipse cx="355" cy="130" rx="28" ry="6" fill="#1a2840"/>
  <rect x="337" y="110" width="36" height="22" rx="3" fill="#1a2840"/>
  <rect x="340" y="108" width="30" height="6" rx="2" fill="#243050"/>
  <!-- Golden star/clue - revealed when glass is over it -->
  <g transform="translate(175, 65)">
    <polygon points="0,-12 3,-4 11,-4 5,1 7,9 0,4 -7,9 -5,1 -11,-4 -3,-4" fill="#ffd700">
      <animate attributeName="opacity" values="0;0;0;1;1;0" dur="3.5s" repeatCount="indefinite"/>
    </polygon>
  </g>
  <!-- Magnifying glass group -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="0,0; 260,0; 260,0; 0,0" dur="3.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0 0 0 0; 0.4 0 0.6 1"/>
    <!-- Lens outer ring -->
    <circle cx="90" cy="65" r="38" fill="#0f1830" fill-opacity="0.85" stroke="#2a4080" stroke-width="5"/>
    <!-- Inner zoom highlight -->
    <circle cx="90" cy="65" r="34" fill="none" stroke="#3a5090" stroke-width="1.5" opacity="0.5"/>
    <circle cx="78" cy="53" r="8" fill="white" fill-opacity="0.06"/>
    <!-- Handle -->
    <rect x="118" y="88" width="35" height="9" rx="4" fill="#3a3028" transform="rotate(35 118 88)"/>
  </g>
</svg>`,

  'Explorador Espacial': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Deep space background -->
  <rect width="400" height="150" fill="#020210"/>
  <!-- Distant planet (teal, bottom right) -->
  <circle cx="355" cy="125" r="35" fill="#2a8080" opacity="0.7"/>
  <ellipse cx="355" cy="112" rx="42" ry="8" fill="none" stroke="#40aaaa" stroke-width="3" opacity="0.5"/>
  <!-- Stars (various sizes) -->
  <circle cx="20" cy="15" r="1.5" fill="white" opacity="0.9">
    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0s" repeatCount="indefinite"/>
  </circle>
  <circle cx="60" cy="40" r="1" fill="white" opacity="0.7"/>
  <circle cx="110" cy="20" r="2" fill="white" opacity="0.8">
    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="155" cy="55" r="1" fill="white" opacity="0.6"/>
  <circle cx="190" cy="10" r="1.5" fill="white" opacity="0.9">
    <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="1.0s" repeatCount="indefinite"/>
  </circle>
  <circle cx="240" cy="35" r="1" fill="white" opacity="0.7"/>
  <circle cx="280" cy="18" r="2" fill="white" opacity="0.8"/>
  <circle cx="310" cy="50" r="1" fill="white" opacity="0.6"/>
  <circle cx="370" cy="22" r="1.5" fill="white" opacity="0.9"/>
  <circle cx="45" cy="80" r="1" fill="white" opacity="0.5"/>
  <!-- Rocket group moving upward -->
  <g transform="translate(195, 145)">
    <animateTransform attributeName="transform" type="translate" values="195,145; 195,-65" dur="2.2s" repeatCount="indefinite"/>
    <!-- Flame exhaust -->
    <ellipse cx="0" cy="38" rx="7" ry="10" fill="#cc2200">
      <animate attributeName="ry" values="10;16;10;8;14;10" dur="0.3s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="0" cy="34" rx="5" ry="8" fill="#ff6600">
      <animate attributeName="ry" values="8;13;8;6;12;8" dur="0.3s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="0" cy="30" rx="3" ry="6" fill="#ffcc00">
      <animate attributeName="ry" values="6;10;6;4;9;6" dur="0.3s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Rocket body -->
    <rect x="-10" y="-20" width="20" height="45" rx="3" fill="#d0d8e8"/>
    <!-- Nose cone -->
    <polygon points="0,-40 -10,-20 10,-20" fill="#e8eef8"/>
    <!-- Left fin -->
    <polygon points="-10,18 -22,32 -10,32" fill="#b0b8c8"/>
    <!-- Right fin -->
    <polygon points="10,18 22,32 10,32" fill="#b0b8c8"/>
    <!-- Porthole -->
    <circle cx="0" cy="2" r="6" fill="#80c8ff" stroke="#8090a0" stroke-width="1.5"/>
    <circle cx="0" cy="2" r="4" fill="#60b0f0"/>
    <!-- Small flag -->
    <rect x="2" y="-18" width="2" height="10" fill="#606878"/>
    <rect x="4" y="-18" width="8" height="6" fill="#e03030"/>
  </g>
</svg>`,

  'Animales y Naturaleza': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky background -->
  <rect width="400" height="100" fill="#87cedc"/>
  <rect width="400" height="60" fill="#a8e4f0"/>
  <!-- Green grass -->
  <rect x="0" y="110" width="400" height="40" fill="#4a7a30"/>
  <rect x="0" y="105" width="400" height="12" fill="#5a8a38"/>
  <!-- Flowers -->
  <line x1="60" y1="108" x2="60" y2="88" stroke="#3a6020" stroke-width="2"/>
  <circle cx="60" cy="84" r="8" fill="#ff6688"/>
  <circle cx="60" cy="84" r="4" fill="#ffee44"/>
  <line x1="140" y1="108" x2="140" y2="90" stroke="#3a6020" stroke-width="2"/>
  <circle cx="140" cy="86" r="7" fill="#ffaa22"/>
  <circle cx="140" cy="86" r="3.5" fill="#ffee44"/>
  <line x1="260" y1="108" x2="260" y2="92" stroke="#3a6020" stroke-width="2"/>
  <circle cx="260" cy="88" r="8" fill="#aa44ff"/>
  <circle cx="260" cy="88" r="4" fill="#ffee44"/>
  <line x1="340" y1="108" x2="340" y2="90" stroke="#3a6020" stroke-width="2"/>
  <circle cx="340" cy="86" r="7" fill="#ff4466"/>
  <circle cx="340" cy="86" r="3.5" fill="#ffee44"/>
  <!-- Butterfly group on motion path -->
  <g>
    <animateMotion path="M -50,60 Q 100,30 200,55 Q 300,75 450,45" dur="4s" repeatCount="indefinite"/>
    <!-- Body -->
    <ellipse cx="0" cy="0" rx="3" ry="9" fill="#5a3010"/>
    <!-- Antennae -->
    <line x1="-1" y1="-8" x2="-5" y2="-16" stroke="#5a3010" stroke-width="1"/>
    <circle cx="-5" cy="-16" r="1.5" fill="#5a3010"/>
    <line x1="1" y1="-8" x2="5" y2="-16" stroke="#5a3010" stroke-width="1"/>
    <circle cx="5" cy="-16" r="1.5" fill="#5a3010"/>
    <!-- Left upper wing -->
    <g transform-origin="-1 -2">
      <path d="M -1,-2 Q -28,-20 -32,-2 Q -28,14 -1,6 Z" fill="#e87830"/>
      <circle cx="-20" cy="-4" r="3" fill="#3b1a04" opacity="0.5"/>
      <animateTransform attributeName="transform" type="scale" values="1,1; 0.2,1; 1,1" dur="0.6s" repeatCount="indefinite" additive="sum"/>
    </g>
    <!-- Left lower wing -->
    <g transform-origin="-1 4">
      <path d="M -1,4 Q -22,12 -22,26 Q -14,32 -1,14 Z" fill="#f0a060"/>
      <animateTransform attributeName="transform" type="scale" values="1,1; 0.2,1; 1,1" dur="0.6s" repeatCount="indefinite" additive="sum"/>
    </g>
    <!-- Right upper wing -->
    <g transform-origin="1 -2">
      <path d="M 1,-2 Q 28,-20 32,-2 Q 28,14 1,6 Z" fill="#e87830"/>
      <circle cx="20" cy="-4" r="3" fill="#3b1a04" opacity="0.5"/>
      <animateTransform attributeName="transform" type="scale" values="1,1; 0.2,1; 1,1" dur="0.6s" begin="0.3s" repeatCount="indefinite" additive="sum"/>
    </g>
    <!-- Right lower wing -->
    <g transform-origin="1 4">
      <path d="M 1,4 Q 22,12 22,26 Q 14,32 1,14 Z" fill="#f0a060"/>
      <animateTransform attributeName="transform" type="scale" values="1,1; 0.2,1; 1,1" dur="0.6s" begin="0.3s" repeatCount="indefinite" additive="sum"/>
    </g>
  </g>
</svg>`,

  'Escuela Mágica': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Deep purple background -->
  <rect width="400" height="150" fill="#2a1a4a"/>
  <!-- Background stars -->
  <circle cx="25" cy="20" r="1.5" fill="white" opacity="0.7"/>
  <circle cx="75" cy="45" r="2" fill="white" opacity="0.6"/>
  <circle cx="130" cy="15" r="1.5" fill="white" opacity="0.8"/>
  <circle cx="185" cy="50" r="1" fill="white" opacity="0.5"/>
  <circle cx="250" cy="22" r="2" fill="white" opacity="0.7"/>
  <circle cx="310" cy="40" r="1.5" fill="white" opacity="0.6"/>
  <circle cx="360" cy="18" r="2" fill="white" opacity="0.8"/>
  <circle cx="390" cy="55" r="1" fill="white" opacity="0.5"/>
  <!-- Sparkle stars around wand tip (static positions, animated opacity) -->
  <!-- Tip of wand is approximately at (200, 20) + rotation offset ~(200+45sin(angle), 20+100cos(angle)) -->
  <!-- Sparkle 1 -->
  <polygon points="188,108 190,103 192,108 197,110 192,112 190,117 188,112 183,110" fill="#ffd700">
    <animate attributeName="opacity" values="0;1;0" dur="1.0s" begin="0s" repeatCount="indefinite"/>
  </polygon>
  <!-- Sparkle 2 -->
  <polygon points="210,95 212,90 214,95 219,97 214,99 212,104 210,99 205,97" fill="#ff80ff">
    <animate attributeName="opacity" values="0;1;0" dur="1.0s" begin="0.25s" repeatCount="indefinite"/>
  </polygon>
  <!-- Sparkle 3 -->
  <polygon points="172,95 174,90 176,95 181,97 176,99 174,104 172,99 167,97" fill="#ffd700">
    <animate attributeName="opacity" values="0;1;0" dur="1.0s" begin="0.5s" repeatCount="indefinite"/>
  </polygon>
  <!-- Sparkle 4 -->
  <polygon points="200,80 202,75 204,80 209,82 204,84 202,89 200,84 195,82" fill="#ffe080">
    <animate attributeName="opacity" values="0;1;0" dur="1.0s" begin="0.75s" repeatCount="indefinite"/>
  </polygon>
  <!-- Magical glow at wand tip -->
  <circle cx="200" cy="108" fill="none" stroke="#ffd700" stroke-width="2" opacity="0.5">
    <animate attributeName="r" values="8;14;8" dur="0.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="0.8s" repeatCount="indefinite"/>
  </circle>
  <!-- Wand group, pivot at (200, 20) -->
  <g>
    <animateTransform attributeName="transform" type="rotate" values="-25 200 20; 25 200 20; -25 200 20" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
    <!-- Wand stick -->
    <rect x="196" y="22" width="8" height="90" rx="3" fill="#3a2010"/>
    <!-- Star tip -->
    <polygon points="200,8 202,15 209,15 204,19 206,26 200,22 194,26 196,19 191,15 198,15" fill="#ffd700"/>
    <!-- Glow circle on tip -->
    <circle cx="200" cy="17" r="6" fill="#fffaaa" opacity="0.6"/>
  </g>
</svg>`,

  'Aventura Pirata': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Ocean sky -->
  <rect width="400" height="150" fill="#0d3a5a"/>
  <!-- Water -->
  <rect x="0" y="95" width="400" height="55" fill="#1a5a8a"/>
  <!-- Sun near horizon -->
  <circle cx="60" cy="100" r="22" fill="#ffaa20" opacity="0.9"/>
  <!-- Wave at water surface -->
  <path d="M 0,95 Q 30,90 60,95 Q 90,100 120,95 Q 150,90 180,95 Q 210,100 240,95 Q 270,90 300,95 Q 330,100 360,95 Q 390,90 400,95" fill="none" stroke="#2a7aaa" stroke-width="2" opacity="0.6"/>
  <!-- Seagulls -->
  <path d="M 310,30 Q 318,24 326,30" fill="none" stroke="white" stroke-width="2"/>
  <path d="M 326,30 Q 334,24 342,30" fill="none" stroke="white" stroke-width="2"/>
  <path d="M 340,45 Q 348,39 356,45" fill="none" stroke="white" stroke-width="2"/>
  <path d="M 356,45 Q 364,39 372,45" fill="none" stroke="white" stroke-width="2"/>
  <path d="M 320,62 Q 326,57 332,62" fill="none" stroke="white" stroke-width="2"/>
  <path d="M 332,62 Q 338,57 344,62" fill="none" stroke="white" stroke-width="2"/>
  <!-- Ship hull -->
  <rect x="110" y="105" width="180" height="18" rx="3" fill="#6a3a10"/>
  <path d="M 110,123 Q 200,138 290,123" fill="#5a2a08"/>
  <!-- Ship deck -->
  <rect x="120" y="100" width="160" height="10" rx="2" fill="#8a5a2a"/>
  <!-- Mast -->
  <rect x="196" y="40" width="8" height="65" fill="#7a4a18"/>
  <!-- Sail -->
  <path d="M 200,42 L 200,90 L 245,80 L 255,52 Z" fill="#f0e8d0"/>
  <path d="M 200,45 L 240,58 L 238,75 L 200,85 Z" fill="#e8e0c8"/>
  <!-- Skull and crossbones flag -->
  <rect x="192" y="32" width="18" height="12" fill="#1a1a1a"/>
  <circle cx="201" cy="37" r="3" fill="white"/>
  <line x1="198" y1="41" x2="204" y2="35" stroke="white" stroke-width="1.2"/>
  <line x1="204" y1="41" x2="198" y2="35" stroke="white" stroke-width="1.2"/>
  <!-- Pirate body group with gentle bob -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2s" repeatCount="indefinite"/>
    <!-- Boots -->
    <rect x="176" y="123" width="14" height="10" rx="3" fill="#1a1a1a"/>
    <rect x="194" y="123" width="14" height="10" rx="3" fill="#1a1a1a"/>
    <!-- Legs -->
    <rect x="178" y="110" width="10" height="16" fill="#2a1a0a"/>
    <rect x="196" y="110" width="10" height="16" fill="#2a1a0a"/>
    <!-- Coat body -->
    <rect x="170" y="88" width="44" height="28" rx="4" fill="#8b2020"/>
    <!-- Belt -->
    <rect x="170" y="108" width="44" height="6" fill="#2a1a0a"/>
    <rect x="188" y="109" width="8" height="4" fill="#d4a020"/>
    <!-- Coat lapels -->
    <path d="M 192,88 L 184,96 L 192,100 Z" fill="#6a1818"/>
    <path d="M 192,88 L 200,96 L 192,100 Z" fill="#6a1818"/>
    <!-- Static left arm -->
    <rect x="155" y="90" width="16" height="9" rx="4" fill="#8b2020" transform="rotate(15 155 90)"/>
    <circle cx="153" cy="104" r="6" fill="#D9A876"/>
    <!-- WAVING RIGHT ARM GROUP -->
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-25 216 100; 38 216 100; -25 216 100" dur="1.1s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>
      <!-- Arm rect -->
      <rect x="213" y="100" width="16" height="9" rx="4" fill="#8b2020"/>
      <!-- Hand -->
      <circle cx="236" cy="104" r="6" fill="#D9A876"/>
    </g>
    <!-- Head -->
    <circle cx="192" cy="82" r="14" fill="#D9A876"/>
    <!-- Tricorn hat brim -->
    <ellipse cx="192" cy="70" rx="18" ry="5" fill="#1a1a1a"/>
    <!-- Hat crown -->
    <path d="M 178,70 L 181,52 L 203,52 L 206,70 Z" fill="#2a2a2a"/>
    <!-- Hat skull -->
    <circle cx="192" cy="60" r="4" fill="white"/>
    <line x1="189" y1="64" x2="195" y2="58" stroke="#2a2a2a" stroke-width="1"/>
    <line x1="195" y1="64" x2="189" y2="58" stroke="#2a2a2a" stroke-width="1"/>
    <!-- Eye patch -->
    <ellipse cx="186" cy="82" rx="6" ry="4" fill="#1a1a1a"/>
    <line x1="180" y1="80" x2="192" y2="78" stroke="#1a1a1a" stroke-width="1.5"/>
    <!-- Right eye -->
    <circle cx="198" cy="82" r="3.5" fill="#1a1a1a"/>
    <circle cx="199" cy="81" r="1" fill="white"/>
    <!-- Mustache -->
    <path d="M 186,90 Q 192,93 198,90" fill="none" stroke="#3a1a0a" stroke-width="2.5"/>
    <!-- Smile -->
    <path d="M 187,93 Q 192,97 197,93" fill="none" stroke="#8a4a2a" stroke-width="1.5"/>
    <!-- Gold earring -->
    <circle cx="179" cy="86" r="3" fill="none" stroke="#d4a020" stroke-width="1.5"/>
  </g>
</svg>`,

  'Viajero del Tiempo': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Deep purple background -->
  <rect width="400" height="150" fill="#1a0a2a"/>
  <!-- Subtle golden orbit arcs -->
  <ellipse cx="200" cy="75" rx="160" ry="55" fill="none" stroke="#8a6a20" stroke-width="1" opacity="0.2"/>
  <ellipse cx="200" cy="75" rx="120" ry="40" fill="none" stroke="#8a6a20" stroke-width="1" opacity="0.15"/>
  <!-- Small scattered clock symbols (static decorative) -->
  <circle cx="40" cy="30" r="8" fill="none" stroke="#4a3060" stroke-width="1.5"/>
  <line x1="40" y1="30" x2="40" y2="24" stroke="#4a3060" stroke-width="1"/>
  <line x1="40" y1="30" x2="44" y2="32" stroke="#4a3060" stroke-width="1"/>
  <circle cx="360" cy="28" r="8" fill="none" stroke="#4a3060" stroke-width="1.5"/>
  <line x1="360" y1="28" x2="360" y2="22" stroke="#4a3060" stroke-width="1"/>
  <line x1="360" y1="28" x2="364" y2="30" stroke="#4a3060" stroke-width="1"/>
  <circle cx="45" cy="120" r="8" fill="none" stroke="#4a3060" stroke-width="1.5"/>
  <line x1="45" y1="120" x2="45" y2="114" stroke="#4a3060" stroke-width="1"/>
  <line x1="45" y1="120" x2="49" y2="122" stroke="#4a3060" stroke-width="1"/>
  <circle cx="355" cy="122" r="8" fill="none" stroke="#4a3060" stroke-width="1.5"/>
  <line x1="355" y1="122" x2="355" y2="116" stroke="#4a3060" stroke-width="1"/>
  <line x1="355" y1="122" x2="359" y2="124" stroke="#4a3060" stroke-width="1"/>
  <!-- Glowing ring around clock -->
  <circle cx="200" cy="75" fill="none" stroke="#c8a030" stroke-width="2">
    <animate attributeName="r" values="42;48;42" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
  </circle>
  <!-- Main clock face -->
  <circle cx="200" cy="75" r="42" fill="#f8f4e8" stroke="#2a1a3a" stroke-width="3"/>
  <!-- Tick marks -->
  <line x1="200" y1="35" x2="200" y2="41" stroke="#2a1a3a" stroke-width="2"/>
  <line x1="221" y1="37" x2="218" y2="42" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="238" y1="54" x2="233" y2="57" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="242" y1="75" x2="236" y2="75" stroke="#2a1a3a" stroke-width="2"/>
  <line x1="238" y1="96" x2="233" y2="93" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="221" y1="113" x2="218" y2="108" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="200" y1="115" x2="200" y2="109" stroke="#2a1a3a" stroke-width="2"/>
  <line x1="179" y1="113" x2="182" y2="108" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="162" y1="96" x2="167" y2="93" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="158" y1="75" x2="164" y2="75" stroke="#2a1a3a" stroke-width="2"/>
  <line x1="162" y1="54" x2="167" y2="57" stroke="#2a1a3a" stroke-width="1.5"/>
  <line x1="179" y1="37" x2="182" y2="42" stroke="#2a1a3a" stroke-width="1.5"/>
  <!-- Clock numbers as small text -->
  <text x="196" y="48" font-size="9" fill="#2a1a3a" font-family="serif">12</text>
  <text x="231" y="79" font-size="9" fill="#2a1a3a" font-family="serif">3</text>
  <text x="197" y="109" font-size="9" fill="#2a1a3a" font-family="serif">6</text>
  <text x="161" y="79" font-size="9" fill="#2a1a3a" font-family="serif">9</text>
  <!-- Hour hand -->
  <rect x="197" y="55" width="6" height="26" rx="3" fill="#2a1a3a">
    <animateTransform attributeName="transform" type="rotate" values="0 200 75; 360 200 75" dur="24s" repeatCount="indefinite"/>
  </rect>
  <!-- Minute hand -->
  <rect x="198.5" y="40" width="3" height="36" rx="1.5" fill="#3a2a4a">
    <animateTransform attributeName="transform" type="rotate" values="0 200 75; 360 200 75" dur="3s" repeatCount="indefinite"/>
  </rect>
  <!-- Center pivot -->
  <circle cx="200" cy="75" r="4" fill="#c8a030"/>
</svg>`,

  'Mundo de Videojuegos': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Sky background -->
  <rect width="400" height="150" fill="#4488cc"/>
  <!-- Pixel clouds -->
  <g>
    <rect x="40" y="20" width="18" height="12" fill="white"/>
    <rect x="30" y="26" width="40" height="12" fill="white"/>
    <rect x="38" y="32" width="26" height="8" fill="white"/>
  </g>
  <g>
    <rect x="250" y="15" width="20" height="12" fill="white"/>
    <rect x="238" y="21" width="46" height="12" fill="white"/>
    <rect x="244" y="27" width="34" height="8" fill="white"/>
  </g>
  <!-- Platform blocks (Minecraft style) -->
  <rect x="60" y="115" width="30" height="30" fill="#5a8a30"/>
  <rect x="90" y="115" width="30" height="30" fill="#4a7a28"/>
  <rect x="120" y="115" width="30" height="30" fill="#5a8a30"/>
  <rect x="150" y="115" width="30" height="30" fill="#4a7a28"/>
  <rect x="180" y="115" width="30" height="30" fill="#5a8a30"/>
  <rect x="210" y="115" width="30" height="30" fill="#4a7a28"/>
  <rect x="240" y="115" width="30" height="30" fill="#5a8a30"/>
  <rect x="270" y="115" width="30" height="30" fill="#4a7a28"/>
  <rect x="300" y="115" width="30" height="30" fill="#5a8a30"/>
  <!-- Dirt under grass blocks -->
  <rect x="60" y="128" width="270" height="17" fill="#8a5a28"/>
  <!-- Coin/star at top of jump -->
  <circle cx="190" cy="62" r="10" fill="#ffd700">
    <animate attributeName="opacity" values="1;1;0;1" dur="0.9s" repeatCount="indefinite"/>
    <animate attributeName="r" values="10;10;15;10" dur="0.9s" repeatCount="indefinite"/>
  </circle>
  <polygon points="190,55 191.5,59 196,59 192.5,61.5 193.8,66 190,63.5 186.2,66 187.5,61.5 184,59 188.5,59" fill="#ff8800">
    <animate attributeName="opacity" values="1;1;0;1" dur="0.9s" repeatCount="indefinite"/>
  </polygon>
  <!-- Score +1 text -->
  <text x="200" y="70" font-size="11" fill="#ffffff" font-family="monospace" font-weight="bold">+1</text>
  <!-- Score animations applied via animateTransform and animate on the text -->
  <!-- Using a workaround: the text element with animate -->
  <!-- Player character group -->
  <g transform="translate(185, 100)">
    <animateTransform attributeName="transform" type="translate" values="185,100; 185,55; 185,55; 185,100" dur="0.9s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 0 0; 0.8 0 1 1"/>
    <!-- Red cap -->
    <rect x="-8" y="-28" width="16" height="6" rx="1" fill="#cc2020"/>
    <rect x="-6" y="-34" width="12" height="8" rx="2" fill="#cc2020"/>
    <!-- Head (skin tone) -->
    <rect x="-8" y="-22" width="16" height="14" rx="2" fill="#D9A876"/>
    <!-- Eyes -->
    <rect x="-5" y="-18" width="4" height="4" fill="#2a1a0a"/>
    <rect x="1" y="-18" width="4" height="4" fill="#2a1a0a"/>
    <!-- Mouth -->
    <rect x="-3" y="-11" width="6" height="2" fill="#8a4a2a"/>
    <!-- Body (blue shirt) -->
    <rect x="-9" y="-8" width="18" height="14" rx="2" fill="#2244aa"/>
    <!-- Legs -->
    <rect x="-8" y="6" width="7" height="8" rx="1" fill="#2a1a8a"/>
    <rect x="1" y="6" width="7" height="8" rx="1" fill="#2a1a8a"/>
  </g>
</svg>`,

  'Explorador Submarino': `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <!-- Deep ocean background -->
  <rect width="400" height="150" fill="#042030"/>
  <!-- Upper lighter band to simulate depth -->
  <rect width="400" height="60" fill="#0a4050" opacity="0.6"/>
  <!-- Light rays from top -->
  <path d="M 80,0 L 60,80" fill="none" stroke="#20a0a0" stroke-width="6" opacity="0.06"/>
  <path d="M 160,0 L 130,90" fill="none" stroke="#20a0a0" stroke-width="8" opacity="0.05"/>
  <path d="M 240,0 L 270,85" fill="none" stroke="#20a0a0" stroke-width="7" opacity="0.06"/>
  <path d="M 330,0 L 350,75" fill="none" stroke="#20a0a0" stroke-width="5" opacity="0.05"/>
  <!-- Underwater plants at bottom -->
  <path d="M 30,150 Q 20,130 30,110 Q 40,90 30,70" fill="none" stroke="#0a4020" stroke-width="5"/>
  <path d="M 55,150 Q 65,128 55,108 Q 45,90 55,72" fill="none" stroke="#0a4020" stroke-width="4"/>
  <path d="M 340,150 Q 330,128 340,110 Q 350,92 340,74" fill="none" stroke="#0a4020" stroke-width="5"/>
  <path d="M 365,150 Q 375,130 365,112 Q 355,94 365,76" fill="none" stroke="#0a4020" stroke-width="4"/>
  <path d="M 380,150 Q 388,132 380,115" fill="none" stroke="#0a4020" stroke-width="3"/>
  <!-- Rising bubbles (before fish so fish is on top) -->
  <circle cx="100" cy="120" r="5" fill="white" opacity="0.5">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-120" dur="2.5s" begin="0s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.6;0" dur="2.5s" begin="0s" repeatCount="indefinite"/>
  </circle>
  <circle cx="160" cy="120" r="4" fill="white" opacity="0.5">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-120" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.6;0" dur="2.5s" begin="0.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="120" r="5" fill="white" opacity="0.5">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-120" dur="2.5s" begin="1.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.6;0" dur="2.5s" begin="1.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="320" cy="120" r="3.5" fill="white" opacity="0.5">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-120" dur="2.5s" begin="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.6;0" dur="2.5s" begin="1.8s" repeatCount="indefinite"/>
  </circle>
  <!-- Fish group on motion path -->
  <g>
    <animateMotion path="M -60,75 Q 100,50 200,75 Q 300,95 460,65" dur="3.5s" repeatCount="indefinite"/>
    <!-- Tail fin (behind body) with wag animation -->
    <g>
      <path d="M -20,-10 L -38,-20 L -38,20 L -20,10 Z" fill="#c85820"/>
      <animateTransform attributeName="transform" type="rotate" values="-15 -20 0; 15 -20 0; -15 -20 0" dur="0.4s" repeatCount="indefinite" additive="sum"/>
    </g>
    <!-- Body -->
    <ellipse cx="5" cy="0" rx="28" ry="14" fill="#e87030"/>
    <!-- Top fin -->
    <path d="M 0,-13 L -6,-24 L 12,-24 L 16,-13 Z" fill="#c85820"/>
    <!-- Bottom fin -->
    <path d="M 2,13 L -2,22 L 10,22 L 14,13 Z" fill="#c85820"/>
    <!-- Scales pattern (arcs on body) -->
    <path d="M 5,-5 Q 12,0 5,5" fill="none" stroke="#c85820" stroke-width="1.5" opacity="0.6"/>
    <path d="M -5,-5 Q 2,0 -5,5" fill="none" stroke="#c85820" stroke-width="1.5" opacity="0.6"/>
    <path d="M 15,-5 Q 22,0 15,5" fill="none" stroke="#c85820" stroke-width="1.5" opacity="0.6"/>
    <!-- Eye -->
    <circle cx="20" cy="-3" r="5" fill="white"/>
    <circle cx="21" cy="-3" r="3" fill="#1a1a1a"/>
    <circle cx="22" cy="-4" r="1" fill="white"/>
    <!-- Smile -->
    <path d="M 26,2 Q 29,5 26,7" fill="none" stroke="#8a3010" stroke-width="1.5"/>
  </g>
</svg>`,
};
