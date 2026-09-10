# Trader's Notes — Link in Bio

Beacons.ai/traders_notes 홈 화면을 참고해 만든 정적 사이트입니다.
GitHub Pages로 바로 배포할 수 있습니다.

원본 페이지는 Cloudflare에 막혀 아카이브 메타데이터, YouTube/Instagram/Linktree 공개 정보로 재구성했습니다.

## 포함된 요소

- 상단 Subscribe / Share (Beacons 스타일)
- 불·곰 로고 프로필 이미지
- @traders_notes 소개
- YouTube / Instagram / TikTok / Telegram / Email 아이콘
- 텔레그램·이북·언어별 링크 버튼
- Store 카드
- 이메일 구독 박스
- 면책 문구

## GitHub Pages 배포

1. GitHub에서 새 저장소를 만듭니다. 예: `traders-notes`
2. 이 폴더 내용을 저장소 루트에 올립니다.

```bash
git init
git add .
git commit -m "Initial Trader's Notes home"
git branch -M main
git remote add origin https://github.com/YOUR_USER/traders-notes.git
git push -u origin main
```

3. GitHub → Settings → Pages
4. Source: `Deploy from a branch` → `main` / `/ (root)`
5. 몇 분 뒤 `https://YOUR_USER.github.io/traders-notes/` 로 접속합니다.

저장소 이름이 `username.github.io` 이면 루트 도메인으로 열립니다.

## 커스텀 도메인

Pages 설정에서 Custom domain을 넣고, DNS에 CNAME 또는 A 레코드를 연결하면 됩니다.

## 나중에 바꿀 곳

- `index.html` 링크 URL, 가격, 책 제목
- `assets/profile.png` 프로필
- `assets/bg.jpg`, `assets/book-main.jpg` (1920×1080)
- 이메일은 현재 프론트엔드만 동작합니다. Formspree / Google Forms / Beehiiv로 연결하면 실제 수집이 됩니다.
