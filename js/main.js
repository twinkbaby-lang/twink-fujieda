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
    .expertise .two-col { grid-template-columns: 1fr !important; max-width: 860px; margin: 0 auto; }
    @media (max-width: 860px) {
      .hero-photo img { object-position: 16% center !important; }
    }
  `;
  document.head.appendChild(visualFixes);

  // 2) 「選ばれる3つの理由」はHTML側の画像をそのまま表示

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
