# seungwoohong.github.io

시니어 프론트엔드 엔지니어 포트폴리오. Next.js(App Router) 정적 export 기반, 미니멀·타이포 중심 디자인에 절제된 인터랙션을 더한 1페이지 사이트입니다.

## 기술 스택

- **Next.js 16** (App Router, `output: "export"` 정적 생성)
- **TypeScript** · **Tailwind CSS v4**
- **framer-motion** (스크롤 리빌·마그네틱·틸트·네비 하이라이트)
- **lenis** (관성 스무스 스크롤)
- **next-themes** + View Transitions API (다크모드 토글, 원형 확산 전환)

## 로컬 실행

패키지 매니저는 **pnpm** 입니다. (`packageManager` 필드로 버전 고정)

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm build       # 정적 export → out/
```

빌드 결과물(`out/`)을 미리보려면:

```bash
pnpm dlx serve out
```

## 내 정보로 바꾸기

거의 모든 콘텐츠는 **한 파일**에 모여 있습니다:

- `src/data/portfolio.ts` — 이름·소개·경력·프로젝트·스킬·소셜 링크·네비게이션
- `public/resume.pdf` — 이력서 PDF를 이 파일로 교체
- `src/app/layout.tsx` — SEO/OpenGraph 메타데이터(필요 시 `siteUrl` 등)

컴포넌트 코드를 건드리지 않고 `portfolio.ts`만 수정하면 사이트 전체가 갱신됩니다.

## 배포 (GitHub Pages)

1. 레포 이름을 반드시 **`seungwoohong.github.io`** 로 만들어 push합니다.
2. GitHub 레포 → **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 설정합니다.
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml` 이 빌드 후 자동 배포합니다.
4. 잠시 후 `https://seungwoohong.github.io` 에서 확인할 수 있습니다.

> `output: "export"` + `images.unoptimized` 설정으로 서버 없이 순수 정적 파일만 배포됩니다.
> `public/.nojekyll` 덕분에 `_next/` 경로가 Jekyll에 의해 무시되지 않습니다.

## 접근성 · 성능

- 모든 인터랙션은 `prefers-reduced-motion` 을 존중합니다(모션 최소화).
- 터치/모바일 환경에서는 관성 스크롤을 비활성화해 네이티브 스크롤을 보존합니다.
- 애니메이션은 `transform`/`opacity` 위주로 구성해 리플로우를 피합니다.
- 스크롤 리빌은 뷰포트 진입 시 1회만 트리거됩니다.
