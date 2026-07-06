# 홍승우 · Seungwoo Hong

**Product-Minded Frontend Engineer** — 제품의 문제 정의부터 프론트엔드 아키텍처, UX 개선, 운영 자동화까지 주도하며 사용자 경험과 비즈니스 성과를 함께 만듭니다.

🔗 **[seungwoohong.github.io](https://seungwoohong.github.io)** · 📄 [이력서(PDF)](./public/resume.pdf) · ✉️ seungwoo921226@gmail.com

물류 플랫폼 프론트엔드 팀 리드로 WMS·OMS를 런칭부터 스케일업까지 총괄했고, 현재는 글로벌 웹툰 서비스 **Tappytoon**의 웹 프론트엔드를 맡고 있습니다. 이 저장소는 그 경력을 한 페이지에 담은 개인 포트폴리오 사이트의 소스입니다.

## 구성 원칙 — "역할"과 "산출물"을 분리했다

이력서가 프로젝트 설명의 나열로 읽히지 않도록, 세 축이 **각자 다른 질문에 답하고 서로 중복하지 않게** 나눴습니다.

| 섹션 | 답하는 질문 | 담는 것 |
| --- | --- | --- |
| **About** | 어떤 사람인가 | 개발 철학, 핵심 역량, 커리어 대표 지표 |
| **Experience** | 어디서 · 무슨 역할로 · 무엇을 **이끌었나** | 회사별 역할·책임·리더십 서사, 관련 프로젝트로 연결 |
| **Projects** | 구체적으로 무엇을 **만들었나** | 프로젝트별 문제·접근·정량 성과(대표작 FEATURED 우선) |
| **Skills** | 무엇을 다루나 | 언어·프레임워크·상태관리·시각화·인프라·실무 역량 |
| **Beyond Code** | 코드 밖에서 무엇을 하나 | 오픈소스, 기술 글쓰기, 커뮤니티·멘토링 |
| **Education** | 배경 | 학력 및 자격증 |
| **Contact** | 어떻게 닿나 | 이메일·소셜 링크 |

핵심은 **Experience와 Projects의 역할 분리**입니다. Experience는 "팀 리드로 무엇을 소유하고 이끌었는지"의 서사만 담고, 프로젝트별 수치(배포 75% 단축, 1만+ 레코드 무프리즈 렌더링 등)는 **Projects에만** 둡니다. 대신 각 경력에는 "관련 프로젝트" 링크를 붙여 클릭하면 해당 대표작으로 바로 이어지도록 했습니다. 같은 성과를 두 번 설명하지 않으면서도 "어디서 → 무엇을"의 맥락이 끊기지 않습니다.

> 대표 이력: Fulfilment 플랫폼 프론트엔드 팀 리드 — WMS/OMS 런칭·스케일업, 디자인 시스템·CI/CD·i18n 파이프라인 구축, 1만+ 레코드 무(無)프리즈 렌더링, PixiJS·ThreeJS 재고 시각화로 시리즈 A 투자 유치 기여.

## 기술 스택 (이 사이트)

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
