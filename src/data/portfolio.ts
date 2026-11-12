
export const profile = {
  name: "홍승우",
  nameEn: "Seungwoo Hong",
  role: "Product-Minded Frontend Engineer",
  tagline:
    "제품의 문제 정의부터 프론트엔드 아키텍처, UX 개선, 운영 자동화까지 주도하며 사용자 경험과 비즈니스 성과를 함께 만듭니다.",
  location: "Seoul, Korea",
  email: "seungwoo921226@gmail.com",
  phone: "010-5210-4711",
  resumeUrl: "/resume.pdf",
  available: false,
  yearsOfExperience: 10,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/seungwoohong", handle: "github.com/seungwoohong" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%EC%8A%B9%EC%9A%B0-%ED%99%8D-642b2b135/",
    handle: "linkedin.com/in/승우-홍",
  },
  { label: "Email", href: "mailto:seungwoo921226@gmail.com", handle: "seungwoo921226@gmail.com" },
];

export const about = {
  lead: "{사용자를 위한 질 높은 제품}을 만드는 것, 그것이 제 개발의 기준입니다.",
  paragraphs: [
    "{10년 차 프론트엔드 개발자}로, {React·TypeScript} 기반 물류 SaaS 플랫폼을 런칭부터 스케일업까지 {5년간 프론트엔드 리드}로 총괄했습니다.",
    "{기술을 비즈니스 성과로 연결}하는 개발을 지향합니다. 제품에서는 {웹 접근성과 UI/UX}를 점진적으로 개선해 사용자 편의성을 높였고, 2D/3D 재고 시각화와 가상 DAS SaaS 개발로 {수십억 규모 시리즈 A 투자 유치}와 {신규 매출 창출}에 기여했습니다.",
    "팀에서는 {코드 리뷰 문화 표준화}와 {업무 자동화}로 개발 병목을 줄이며 {전체 생산성}을 끌어올려 왔습니다.",
  ],
  competencies: [
    "물류 플랫폼 프론트엔드 팀 리드로 프로젝트를 주도하고 점진적인 생산성 확보에 기여하며 팀 성과를 이끌어낸 경험",
    "기획자·디자이너와 원활히 협업하고 사용자 피드백을 반영해 제품 완성도와 UX 개선",
    "CSS·JavaScript·PixiJS·ThreeJS 기반의 풍부한 인터랙션 개발 및 데이터 시각화 경험",
    "렌더링 성능 최적화로 대규모 데이터 프리즈 제거, 주요 페이지 로딩 속도 40% 단축",
    "Web Vitals 개선(LCP 3.5s→2.0s, CLS 0.25→0.05)으로 이탈률 감소·전환율 증가",
    "Node.js·PHP·MySQL·GCP 기반 풀스택 개발 및 다수의 CI/CD 구축 경험",
  ],
  highlights: [
    { value: "10+", label: "년 경력 · 5년 FE 리드 총괄" },
    { value: "수십억", label: "시리즈 A 투자 유치 기여" },
    { value: "40%", label: "페이지 로딩 속도 단축" },
    { value: "75%", label: "배포 시간 단축 (15→4분)" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  focus: string[];
  related?: string[];
  stack: string[];
};

// Experience는 "어디서·무슨 역할로·무엇을 이끌었나"(역할·책임·서사)를 담습니다.
// 프로젝트별 정량 성과는 중복을 피해 Projects 섹션에만 두고, related로 연결합니다.
export const experiences: Experience[] = [
  {
    company: "콘텐츠퍼스트 (Tappytoon)",
    role: "Frontend Engineer",
    period: "2025.11 — 현재",
    location: "Seoul",
    summary:
      "영어·독일어 등으로 서비스되는 글로벌 웹툰 플랫폼 Tappytoon의 웹 프론트엔드를 담당합니다.",
    focus: [
      "다국가 트래픽 환경에서 안정적으로 동작하는 웹 프론트엔드 개발·유지보수",
      "웹 성능·번들 최적화와 코드 품질·유지보수성 개선을 주도",
      "{React Native Web}으로 앱·웹 코드를 공유하는 하이브리드 구조 확장",
    ],
    related: ["tappytoon"],
    stack: ["React", "TypeScript", "Next.js", "React Native Web"],
  },
  {
    company: "Bold9",
    role: "Frontend Lead",
    period: "2020.06 — 2025.08",
    location: "Seoul",
    summary:
      "Fulfilment(물류) 플랫폼 프론트엔드 팀 리드로서 WMS·OMS를 런칭부터 스케일업까지 총괄했습니다.",
    focus: [
      "프론트엔드 팀 리드로서 아키텍처 설계·핵심 기능 개발·운영 자동화 전반을 주도",
      "디자인 시스템(MUI)·CI/CD·i18n 자동화 등 팀 생산성 인프라를 구축",
      "코드 리뷰 프로세스 표준화로 팀 개발 역량 강화",
      "{신입 개발자 멘토}로서 온보딩·사내 교육을 맡아 팀 적응과 성장을 지원",
      "가상 DAS(ezDAS) 등 신규 SaaS를 기획 단계부터 발굴·리드하며 사업 확장에 기여",
    ],
    related: ["ezstorage", "inventory-map", "ezdas", "translation-generator"],
    stack: ["React", "TypeScript", "GraphQL", "Apollo Client", "MUI", "PixiJS", "ThreeJS", "GCP/GKE", "Kubernetes", "GitHub Actions"],
  },
  {
    company: "비에스에스스포츠 (BSS Sports)",
    role: "Fullstack Engineer",
    period: "2019.03 — 2020.05",
    location: "Seoul",
    summary:
      "온라인 스포츠·게임 플랫폼의 프론트엔드와 백엔드 전반을 담당하며 주요 실시간 서비스를 런칭했습니다.",
    focus: [
      "React·jQuery 프론트엔드와 PHP·Node.js·MySQL·Redis 백엔드를 아우르는 풀스택 개발",
      "실시간 캔들 차트 게임·애니메이션 게임 리뉴얼·중계 등 핵심 실시간 서비스를 런칭",
      "{AWS·NGINX·Jenkins} 기반 CI/CD 구축으로 배포 안정성·개발 생산성 향상",
    ],
    related: ["fx-game", "named-renewal"],
    stack: ["React", "TypeScript", "jQuery", "ECharts", "PHP", "Node.js", "MySQL", "Redis", "AWS"],
  },
  {
    company: "원더풀플랫폼 (Wonderful Platform)",
    role: "Frontend Engineer",
    period: "2018.09 — 2019.08",
    location: "Seoul",
    summary: "자사 여러 앱에서 공용으로 활용되는 챗봇 플랫폼을 개발·운영했습니다.",
    focus: [
      "{Angular 1 → Angular 6 마이그레이션}을 주도해 안정성·확장성 확보",
      "Docker 기반 {멀티 테스트 환경}을 구축해 QA 자동화, 코드 구조 개선",
      "React Native 앱·{블록체인 지갑} 기능을 구현해 신규 서비스 런칭에 기여",
    ],
    related: ["chatbot-platform", "inbichat", "wonderful-lotto"],
    stack: ["TypeScript", "Angular", "React Native", "Docker", "GCP", "Mocha"],
  },
  {
    company: "편두리",
    role: "Fullstack Engineer",
    period: "2017.02 — 2018.08",
    location: "Seoul",
    summary:
      "아동 두뇌 치료 센터 ‘밸런스브레인’ 홈케어 플랫폼을 기획부터 배포까지 단독으로 개발했습니다.",
    focus: [
      "Angular 프론트엔드와 Node.js 백엔드를 아우르는 {엔드투엔드 단독 개발}로 풀사이클 역량 검증",
      "영상 기반 상담 게시판·실시간 소통 채널을 구축해 사용자 만족도 향상",
      "웹 접근성 개선으로 사용자층 확대 및 서비스 신뢰성 제고",
    ],
    related: ["bb-center", "bb-homecare"],
    stack: ["Angular", "TypeScript", "Node.js", "MySQL", "Docker", "GCP"],
  },
];

export type Project = {
  id: string;
  title: string;
  context: string;
  summary: string;
  highlights: string[];
  role: string;
  year: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

// Projects는 "구체적으로 무엇을 만들었나"(대표작 심화)를 담습니다.
// 프로젝트별 정량 성과의 유일한 출처이며, context로 해당 경력과 연결됩니다.
export const projects: Project[] = [
  {
    id: "tappytoon",
    title: "Tappytoon",
    context: "콘텐츠퍼스트 · 2025.11 — 현재",
    summary: "영어·독일어 등 다국어로 서비스되는 글로벌 웹툰 플랫폼의 웹 프론트엔드.",
    highlights: [
      "웹 번들 최적화(코드 스플리팅·지연 로딩·의존성 정리)로 초기 번들 {11MB → 1MB (약 91% 감소)}",
      "웹 성능 개선으로 관리 메인 화면 초기 로드 속도 {30% 이상 단축}",
      "{컬렉션 기능} 개발로 사용자 커뮤니티 형성 및 {리텐션 증가}에 기여",
      "웹·앱 {구독 멤버십} 기능 개발",
      "{React Native Web}로 앱·웹 코드를 공유하는 하이브리드 개발",
      "다국가 트래픽 환경에서 안정적 렌더링을 위한 코드 품질·구조 개선",
    ],
    role: "Frontend Engineer",
    year: "2025 — 현재",
    stack: ["React", "TypeScript", "Next.js", "React Native Web"],
    links: [
      { label: "Website", href: "https://www.tappytoon.com/" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.contentsfirst.tappytoon" },
      { label: "App Store", href: "https://apps.apple.com/us/app/tappytoon-comics-novels/id985615352" },
    ],
    featured: true,
  },
  {
    id: "ezstorage",
    title: "ezstorage (WMS)",
    context: "Bold9 · 2020 — 2025 · Frontend Lead",
    summary: "런칭부터 스케일업까지 5년간 프론트엔드를 총괄한 WMS. 주문 수집·피킹·패킹·재고·정산까지 물류 운영 전 과정을 담은 SaaS 플랫폼.",
    highlights: [
      "디자인 시스템 도입으로 개발 생산성 {30% 향상}",
      "CI/CD 자동화로 배포 시간 {75% 단축} ({15~20분 → 3~4분})",
      "Artifact Registry 버전 관리로 롤백 {90% 단축} ({5분 → 30초})",
      "{10,000+ 레코드} 테이블 렌더링 {Freeze 완전 제거}로 작업 중단 없는 조회 환경 확보",
      "{번역 리소스 업로드 워크플로우 자동화}로 긴급 번역 수정 {수십 분 → 1분대} 단축, 기획–개발 커뮤니케이션 비용 제거",
      "{OMS} 주문 자동 수집 · 모바일 하이브리드 앱 구현",
    ],
    role: "Frontend Lead",
    year: "2020 — 2025",
    stack: ["React", "TypeScript", "GraphQL", "Apollo Client", "MUI", "GCP/GKE", "Docker", "GitHub Actions"],
    links: [
      { label: "Website", href: "https://ezstorage.io/intro" },
      { label: "YouTube", href: "https://www.youtube.com/@bold9" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.easy.ezstorage" },
      { label: "App Store", href: "https://apps.apple.com/us/app/ezstorage/id6471926302" },
    ],
    featured: true,
  },
  {
    id: "inventory-map",
    title: "물류 센터 재고 시각화 맵",
    context: "Bold9 · 2023 · Frontend Lead",
    summary: "표·텍스트로만 보던 10,000+ 로케이션의 재고를 2D/3D 인터랙티브 맵으로 시각화해, 창고 상태를 한눈에 파악하게 한 차별화 기능.",
    highlights: [
      "{10,000+ 로케이션}에 {WebGL Culling}·그래픽 최소화로 Panning 렉 해소",
      "경쟁 WMS에 없던 시각화로 {수십억 규모 시리즈 A 투자 유치}에 기여",
      "Smooth Zoom·Friction Scroll 등 {Web Vitals} 친화적 인터랙션 구현",
      "피킹 동선 시각화로 물류 작업 효율 {20%+ 개선}",
    ],
    role: "Frontend Lead",
    year: "2023",
    stack: ["React", "TypeScript", "PixiJS", "ThreeJS", "WebGL"],
    featured: true,
  },
  {
    id: "translation-generator",
    title: "translation-generator (OSS)",
    context: "Bold9 · 2023 · Creator · 오픈소스",
    summary: "Google 스프레드시트를 단일 소스로 삼아 i18n JSON을 자동 생성하는 CLI.",
    highlights: [
      "PR 리뷰·CI 업로드 자동화로 긴급 번역 수정 {수십 분 → 1분대}",
      "환경별(prod/stage/dev) 리소스 업로드 자동화로 기획-개발 {커뮤니케이션 비용 제거}",
    ],
    role: "Creator",
    year: "2023",
    stack: ["TypeScript", "Node.js", "CLI", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/seungwoohong/translation-generator" },
      { label: "npm", href: "https://www.npmjs.com/package/translation-gen" },
    ],
    featured: true,
  },
  {
    id: "ezdas",
    title: "가상 DAS (ezDAS)",
    context: "Bold9 · 2023 · Frontend Lead",
    summary: "수억 원 설비와 전용 공간이 필요하던 DAS(자동 분류 설비)를 웹·모바일 SaaS로 재해석한 신규 제품.",
    highlights: [
      "{수억 원대 설비 → 15만 원} SaaS로 중소 물류사의 접근성 확보",
      "{TTS} 음성 안내로 피킹·패킹 생산성 향상, {SaaS 고객 확보·매출 증대}에 기여",
    ],
    role: "Frontend Lead",
    year: "2023",
    stack: ["React", "TypeScript", "MUI", "TTS"],
    links: [{ label: "YouTube", href: "https://youtu.be/BAK7EIGpU94?t=12" }],
  },
  {
    id: "fx-game",
    title: "FX 마진 게임",
    context: "BSS Sports · 2020 · Fullstack",
    summary: "환율 실시간 등락을 캔들 차트로 시각화해 게임 시간과 동기화한 몰입형 게임. 프론트엔드부터 백엔드까지 풀스택 구축.",
    highlights: [
      "{ECharts} 캔들 애니메이션 최적화로 {프레임 드랍 제거}",
      "탭 비활성화 시 시간 오차를 해결해 안정적 실시간 동기화, {매출 상승}에 기여",
    ],
    role: "Fullstack",
    year: "2020",
    stack: ["JavaScript", "TypeScript", "ECharts", "Node.js", "PHP", "MySQL", "Redis"],
  },
  {
    id: "named-renewal",
    title: "네임드 애니메이션 게임 리뉴얼·중계",
    context: "BSS Sports · 2019 · Fullstack",
    summary: "스포츠 커뮤니티 플랫폼의 주요 실시간 애니메이션 게임 리뉴얼과 대규모 중계 시스템.",
    highlights: [
      "렌더링·로딩 최적화로 메인 페이지 로딩 {2초대 → 0.3초 이내}",
      "{Node.js} 기반 실시간 채팅 서버 관리·운영",
      "{PHP·Node.js} 서버 유지보수",
      "AWS·NGINX·Jenkins {CI/CD}로 배포 안정성 확보",
    ],
    role: "Fullstack",
    year: "2019",
    stack: ["JavaScript", "jQuery", "PHP", "Node.js", "AWS", "Jenkins"],
    links: [{ label: "Website", href: "https://named.com" }],
  },
  {
    id: "chatbot-platform",
    title: "챗봇 플랫폼",
    context: "원더풀플랫폼 · 2018.09 — 2019.03 · Frontend",
    summary: "원더풀플랫폼의 여러 앱이 공용으로 쓰는 챗봇 플랫폼. 레거시 전환과 테스트 자동화를 주도.",
    highlights: [
      "{Angular 1 → Angular 6 마이그레이션}을 주도해 안정성·확장성 확보",
      "의존성 최소화·응집도 강화로 확장 가능한 코드 구조로 재편",
      "Docker 기반 {멀티 테스트 환경}을 구축해 QA 자동화·릴리즈 신뢰성 향상",
    ],
    role: "Frontend Engineer",
    year: "2018 — 2019",
    stack: ["TypeScript", "Angular", "Docker", "Mocha", "GCP"],
  },
  {
    id: "inbichat",
    title: "Inbichat (챗봇 빌더) 리뉴얼",
    context: "원더풀플랫폼 · 2018.09 — 2019.02 · Frontend",
    summary: "개발자가 아니어도 챗봇을 만들 수 있게 하는 챗봇 빌더의 전면 리뉴얼(기존 서비스 운영 병행).",
    highlights: [
      "{Angular v4 → v6 마이그레이션}, 미사용 라이브러리 제거·핵심 의존성(RxJS 등) 업그레이드",
      "컴포넌트 {모듈 분리}·{Lazy Loading}으로 확장성 확보 및 초기 로딩 속도 향상",
      "Docker 기반 멀티 테스트 환경 구축으로 QA 자동화·배포 신뢰성 향상",
    ],
    role: "Frontend Engineer",
    year: "2018 — 2019",
    stack: ["TypeScript", "Angular", "RxJS", "Docker", "GCP"],
    links: [{ label: "Website", href: "http://inbi.ai/builder" }],
  },
  {
    id: "wonderful-lotto",
    title: "원더풀 로또 하이브리드 앱",
    context: "원더풀플랫폼 · 2018.12 — 2019.01 · App · Backend",
    summary: "챗봇으로 로또 번호 추천·정보를 제공하는 코인 기반 하이브리드 앱.",
    highlights: [
      "{React Native} 앱(Redux/Redux-saga)과 {GCP App Engine + MySQL} 백엔드를 함께 구축해 신규 서비스 런칭",
      "{Kakao·Facebook 소셜 로그인} 연동으로 가입 진입 장벽 완화",
    ],
    role: "App · Backend",
    year: "2018 — 2019",
    stack: ["TypeScript", "React Native", "Redux", "Redux-saga", "Node.js", "MySQL", "GCP"],
  },
  {
    id: "bb-center",
    title: "BB Center Platform",
    context: "편두리 · 2017.02 — 2018.08 · Fullstack",
    summary: "아동 두뇌 치료 센터 밸런스브레인의 데이터 시각화·아동 관리 플랫폼.",
    highlights: [
      "{Socket.io} 기반 콜센터 연동 실시간 알림 시스템 구축, 응답 히스토리를 전체/센터별/유형별로 관리",
      "레거시 {PHP → Node.js API 전환}으로 유지보수성 개선",
    ],
    role: "Fullstack",
    year: "2017 — 2018",
    stack: ["TypeScript", "Angular", "Node.js", "PHP", "MySQL", "GCP"],
    links: [{ label: "Website", href: "http://center.bbwithu.com" }],
  },
  {
    id: "bb-homecare",
    title: "BB HomeCare",
    context: "편두리 · 2017.03 — 2017.05 · Fullstack (단독)",
    summary: "밸런스브레인 이용 아동이 집에서도 케어받을 수 있는 홈 케어 플랫폼(1인 개발).",
    highlights: [
      "영상 기반 상담 게시판·{실시간 소통 채널} 구축으로 사용자 만족도·아동 관리 품질 향상",
      "{기획·설계·프론트엔드·백엔드·배포까지 단독 개발}로 엔드투엔드 역량 검증",
    ],
    role: "Fullstack",
    year: "2017",
    stack: ["TypeScript", "Angular", "Node.js", "MySQL", "Docker", "GCP"],
    links: [{ label: "Website", href: "https://home.bbwithu.com/" }],
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "React Native", "React Native Web", "Angular", "MUI"],
  },
  {
    category: "State & Data",
    items: ["Zustand", "React Query", "Apollo Client", "GraphQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP", "MySQL", "Redis", "Socket.io"],
  },
  {
    category: "Visualization & Graphics",
    items: ["PixiJS", "ThreeJS", "WebGL", "ECharts", "Recharts", "Canvas"],
  },
  {
    category: "DevOps & Infra",
    items: [
      "Docker",
      "Kubernetes (GKE)",
      "GitHub Actions",
      "GCP (Cloud Run, Artifact Registry)",
      "AWS",
      "Jenkins",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Claude Code"],
  },
  {
    category: "Practices",
    items: [
      "CI/CD",
      "Design Systems",
      "Code Review",
      "i18n",
      "Web Accessibility",
      "Web Vitals",
    ],
  },
];

export const marqueeSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "PixiJS",
  "ThreeJS",
  "WebGL",
  "GraphQL",
  "Apollo Client",
  "React Query",
  "GCP",
  "Kubernetes",
  "GitHub Actions",
  "CI/CD",
  "Design Systems",
  "Web Vitals",
  "i18n",
  "React Native Web",
];

export type Post = { title: string; note: string; url?: string };

export const writing: Post[] = [
  {
    title: "이벤트 루프 깊게 알아보기",
    note: "Node.js 런타임 구조(libuv·스레드 풀)부터 이벤트 루프 6단계, 마이크로태스크·nextTick 우선순위까지 심층 분석",
    url: "https://app.notion.com/p/honground/4169a991424880bbab55d58f2be7d7c0",
  },
  {
    title: "Translation 파일 업로드 플로우 개선기",
    note: "i18n 릴리즈 병목을 스프레드시트 기반 자동화로 해소한 과정",
  },
  {
    title: "GitHub Actions 톺아보기",
    note: "워크플로 구조부터 CI/CD 파이프라인 설계·최적화까지",
  },
];

export type Activity = { text: string; href?: string };

export const community: Activity[] = [
  {
    text: "주니어 개발자 멘토링 및 사내 교육 자료 제작·발표",
    href: "https://slides.com/alwls601",
  },
  { text: "사내 신규 기술 도입 스터디 운영 및 시스템 개선 포인트 발표" },
  {
    text: "sat10am 개발 스터디 약 3년 운영 — JavaScript·Git·Kubernetes·Network 등 발표",
    href: "https://github.com/sat10am",
  },
  { text: "사내 기술 블로그 운영 및 팀 내 지식 공유 문화 정착" },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "동서울대학교",
    degree: "컴퓨터소프트웨어과",
    period: "2011 — 2016",
  },
];

export const certifications = [
  { name: "SQLD (SQL 개발자)", date: "2024.02" },
  { name: "정보처리산업기사", date: "2015.07" },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
