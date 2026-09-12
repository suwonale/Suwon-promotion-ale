# K리그2 매직넘버

Next.js + Vercel용 팬메이드 웹앱.

## 실행
npm install
npm run dev

## Vercel 배포
GitHub에 이 폴더를 repository로 push한 뒤 Vercel → Add New Project → 해당 repository Import → Deploy.
Vercel은 Next.js를 자동 감지합니다.

## 데이터
`data/league.js`에서 standings와 fixtures를 관리합니다. 공식 K리그 일정이 확정/변경되면 fixtures를 갱신하면 됩니다.
