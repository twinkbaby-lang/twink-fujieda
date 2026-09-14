document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // 1) ファーストビュー右端の不要な文字が見えないよう、写真の見せる位置を左寄りに調整
  const visualFixes = document.createElement('style');
  visualFixes.textContent = `
    .hero-photo img { object-position: 20% center !important; }
    .reason-ill { background: transparent !important; font-size: 0 !important; }
    .reason-ill svg { display:block; width:76px; height:76px; }
    .expertise .two-col { grid-template-columns: 1fr !important; max-width: 860px; margin: 0 auto; }
    @media (max-width: 860px) {
      .hero-photo img { object-position: 16% center !important; }
    }
  `;
  document.head.appendChild(visualFixes);

  // 2) 「選ばれる3つの理由」の絵文字を、やわらかいイラスト風に変更
  const reasonIcons = [
    `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#eef6ff"/>
      <circle cx="31" cy="28" r="10" fill="#f5bea5"/>
      <path d="M20 58c2-11 9-17 18-17s16 6 18 17" fill="#ff8fa8"/>
      <circle cx="51" cy="34" r="8" fill="#f6c9aa"/>
      <path d="M42 59c1-8 6-13 12-13s11 5 12 13" fill="#79d0f7"/>
      <path d="M23 25c2-8 14-10 18-2-5-2-12 0-18 2Z" fill="#9b5e42"/>
      <path d="M45 31c2-6 11-7 14-1-4-1-9 0-14 1Z" fill="#6b4938"/>
      <circle cx="17" cy="20" r="4" fill="#ffd84f"/><circle cx="62" cy="20" r="4" fill="#8edc7c"/>
    </svg>`,
    `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#fff8e7"/>
      <circle cx="40" cy="29" r="11" fill="#f3c39e"/>
      <path d="M27 31c2-10 22-12 27 0-7-4-19-4-27 0Z" fill="#79503b"/>
      <path d="M21 60c3-12 12-18 19-18s16 6 19 18" fill="#79d0f7"/>
      <circle cx="17" cy="23" r="4" fill="#ffd84f"/><circle cx="61" cy="27" r="4" fill="#8edc7c"/><circle cx="54" cy="17" r="3" fill="#ff91b2"/>
    </svg>`,
    `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#eefaf1"/>
      <path d="M18 39 40 22l22 17v21H18Z" fill="#fff" stroke="#ef9b88" stroke-width="2"/>
      <path d="M21 39 40 24l19 15" fill="none" stroke="#ff9c6b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="28" y="46" width="11" height="14" rx="2" fill="#8fd4ff"/>
      <rect x="45" y="46" width="10" height="9" rx="2" fill="#8fd4ff"/>
      <circle cx="18" cy="55" r="5" fill="#8fd66b"/><circle cx="62" cy="55" r="5" fill="#8fd66b"/>
    </svg>`
  ];

  document.querySelectorAll('.reason-ill').forEach((el, index) => {
    if (reasonIcons[index]) el.innerHTML = reasonIcons[index];
  });

  // 3) 「子どもを見る視点×英語教育の専門性」の重複写真を削除
  document.querySelector('.expertise-photo')?.remove();

  // 4) 赤ちゃんクラス画像：class-baby-new.jpg がアップされたら自動で差し替え
  const babyImg = document.querySelector('.class-card.baby img');
  if (babyImg) {
    const replacement = new Image();
    replacement.onload = () => {
      babyImg.src = 'images/class-baby-new.jpg';
      babyImg.alt = '赤ちゃんクラスの様子';
    };
    replacement.src = 'images/class-baby-new.jpg';
  }
});
