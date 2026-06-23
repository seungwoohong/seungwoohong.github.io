
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
  yearsOfExperience: 9,
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
    "코드를 작성하는 데 그치지 않고, 사용자 관점에서 문제를 정의하고 해결책을 제안합니다. 사용자 피드백을 빠르게 수집·반영해 제품의 완성도와 경험을 끌어올립니다.",
    "React·TypeScript 기반 물류 플랫폼 개발을 리드하며, 성능 최적화와 협업 프로세스 개선으로 서비스 품질과 개발 생산성을 동시에 끌어올려 왔습니다. 기술로 사용자 편의를 극대화하고 비즈니스 성장에 기여하는 일에서 가장 큰 보람을 느낍니다.",
  ],
  competencies: [
    "물류 플랫폼 프론트엔드 팀 리드로 프로젝트를 주도하고 팀 성과를 이끌어낸 경험",
    "기획자·디자이너와 원활히 협업하고 사용자 피드백을 반영해 제품 완성도와 UX 개선",
    "CSS·JavaScript·PixiJS·ThreeJS 기반의 풍부한 인터랙션 개발 및 데이터 시각화 경험",
    "렌더링 성능 최적화로 대규모 데이터 프리즈 제거, 주요 페이지 로딩 속도 40% 단축",
    "Web Vitals 개선(LCP 3.5s→2.0s, CLS 0.25→0.05)으로 이탈률 감소·전환율 증가",
    "Node.js·PHP·MySQL·GCP 기반 풀스택 개발 및 다수의 CI/CD 구축 경험",
  ],
  highlights: [
    { value: "9+", label: "년 경력" },
    { value: "40%", label: "페이지 로딩 속도 단축" },
    { value: "75%", label: "배포 시간 단축 (15→4분)" },
    { value: "10k+", label: "레코드 무(無)프리즈 렌더링" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "콘텐츠퍼스트 (Tappytoon)",
    role: "Frontend Engineer",
    period: "2025.11 — 현재",
    location: "Seoul",
    summary: "글로벌 웹툰 서비스 Tappytoon의 웹 프론트엔드 개발.",
    achievements: [
      "{React·TypeScript} 기반 글로벌 웹툰 서비스 Tappytoon 웹 프론트엔드 개발·유지보수",
      "웹 번들 최적화(코드 스플리팅·지연 로딩·의존성 정리)로 초기 번들 {11MB → 1MB로 약 91% 감소}",
      "웹 성능 개선으로 관리 메인 화면 초기 로드 속도 {30% 이상 단축}",
      "{React Native Web} 기반 앱·웹 코드 공유 하이브리드 개발",
      "다국가 트래픽 환경에서 안정적 서비스를 위한 코드 품질·유지보수성 개선",
    ],
    stack: ["React", "TypeScript", "Next.js", "React Native Web"],
  },
  {
    company: "Bold9",
    role: "Frontend Lead",
    period: "2020.06 — 2025.08",
    location: "Seoul",
    summary:
      "Fulfilment(물류) 플랫폼 프론트엔드 팀 리드로서 WMS·OMS 서비스를 런칭부터 스케일업까지 총괄.",
    achievements: [
      "프론트엔드 팀 리드로 아키텍처 설계·핵심 기능 개발·운영 자동화 전반 주도",
      "디자인 시스템(MUI) 구축으로 UI 일관성 확보 및 개발 생산성 {30% 향상}",
      "CI/CD 파이프라인(GitHub Actions + GCP GKE) 도입으로 배포 시간 {75% 단축 (15~20분 → 3~4분)}, Artifact Registry로 롤백 {90% 단축 (5분 → 30초)}",
      "{10,000+ 레코드} 테이블 렌더링 최적화로 Freeze를 제거해 대규모 데이터에서도 안정적 UX 확보",
      "{PixiJS·ThreeJS} 기반 2D/3D 재고 시각화 맵 개발 — 차별화된 시각화로 {시리즈 A 투자 유치}에 기여",
      "국제화(i18n) 자동 업로드 파이프라인 구축, 코드 리뷰 프로세스 표준화 및 주니어 멘토링",
    ],
    stack: ["React", "TypeScript", "Apollo Client", "MUI", "PixiJS", "ThreeJS", "GCP/GKE", "Kubernetes", "GitHub Actions"],
  },
  {
    company: "비에스에스스포츠 (BSS Sports)",
    role: "Fullstack Engineer",
    period: "2019.03 — 2020.05",
    location: "Seoul",
    summary:
      "온라인 스포츠·게임 플랫폼의 프론트엔드와 백엔드 전반을 담당하며 주요 서비스 런칭 및 성능 개선 주도.",
    achievements: [
      "{ECharts} 실시간 캔들 차트 기반 FX 마진 게임 개발, 애니메이션 최적화로 {프레임 드랍 제거}",
      "애니메이션 게임 리뉴얼로 메인 페이지 로딩 속도 {2초대 → 0.3초 이내}로 단축",
      "{Visibility API} 기반 시간 동기화로 게임 진행 오차 문제 해결",
      "{AWS·NGINX·Jenkins} 기반 CI/CD 구축으로 배포 안정성·개발 생산성 향상",
      "React·jQuery 프론트엔드와 PHP·Node.js·MySQL·Redis 백엔드를 아우르는 풀스택 개발",
    ],
    stack: ["React", "TypeScript", "jQuery", "ECharts", "PHP", "Node.js", "MySQL", "Redis", "AWS"],
  },
  {
    company: "원더풀플랫폼 (Wonderful Platform)",
    role: "Frontend Engineer",
    period: "2018.09 — 2019.08",
    location: "Seoul",
    summary: "자사 여러 앱에서 공용으로 활용되는 챗봇 플랫폼 개발 및 운영 담당.",
    achievements: [
      "{Angular 1 → Angular 6 마이그레이션} 주도로 안정성·확장성 확보",
      "의존성 최소화·응집도 강화로 코드 구조 개선, Docker 기반 {멀티 테스트 환경} 구축(QA 자동화)",
      "React Native 기반 앱 개발 및 {블록체인 지갑} 기능 구현, 신규 서비스 런칭 기여",
      "{GCP App Engine} 기반 확장 가능한 클라우드 환경에서 안정적 서비스 제공",
    ],
    stack: ["TypeScript", "Angular", "React Native", "Docker", "GCP", "Mocha"],
  },
  {
    company: "편두리",
    role: "Fullstack Engineer",
    period: "2017.02 — 2018.08",
    location: "Seoul",
    summary:
      "아동 두뇌 치료 센터 ‘밸런스브레인’ 홈케어 플랫폼의 풀스택 개발 및 유지보수를 단독 담당.",
    achievements: [
      "Angular(2→4→6 점진 업그레이드) 프론트엔드와 Node.js 백엔드 설계·개발 주도",
      "IFrame 연동 콘텐츠 제공·영상 기반 상담 게시판·실시간 소통 채널 구축으로 사용자 만족도 향상",
      "웹 접근성 개선으로 사용자층 확대 및 서비스 신뢰성 제고",
      "기획·설계·프론트엔드·백엔드·배포까지 {엔드투엔드 단독 개발}로 풀사이클 역량 검증",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "MySQL", "Docker", "GCP"],
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  role: string;
  year: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tappytoon",
    summary: "영어·독일어 등 다국어로 서비스되는 글로벌 웹툰 플랫폼의 웹 프론트엔드.",
    highlights: [
      "웹 번들 최적화(코드 스플리팅·지연 로딩·의존성 정리)로 초기 번들 {11MB → 1MB (약 91% 감소)}",
      "웹 성능 개선으로 관리 메인 화면 초기 로드 속도 {30% 이상 단축}",
      "{React Native Web}로 앱·웹 코드를 공유하는 하이브리드 개발",
      "다국가 트래픽 환경에서 안정적 렌더링을 위한 코드 품질·구조 개선",
    ],
    role: "Frontend Engineer",
    year: "2025 — 현재",
    stack: ["React", "TypeScript", "Next.js", "React Native Web"],
    links: [{ label: "Website", href: "https://www.tappytoon.com/" }],
    featured: true,
  },
  {
    title: "ezstorage (WMS)",
    summary: "Fulfilment 플랫폼 창고 관리 시스템(WMS)을 런칭부터 운영까지 개발·총괄.",
    highlights: [
      "디자인 시스템 도입으로 개발 생산성 {30% 향상}",
      "CI/CD 자동화로 배포 시간 {75% 단축} ({15~20분 → 3~4분})",
      "Artifact Registry 버전 관리로 롤백 {90% 단축} ({5분 → 30초})",
      "{10,000+ 레코드} 테이블 렌더링 {Freeze 완전 제거}",
      "{i18n} 자동 업로드 파이프라인 · {OMS} 자동 수집 · 모바일 하이브리드 앱 구현",
    ],
    role: "Frontend Lead · 기여 70%+",
    year: "2020 — 현재",
    stack: ["React", "TypeScript", "Apollo Client", "MUI", "GCP/GKE", "Docker", "GitHub Actions"],
    links: [{ label: "Website", href: "https://ezstorage.io/intro" }],
    featured: true,
  },
  {
    title: "물류 센터 재고 시각화 맵",
    summary: "대규모 물류 센터 재고를 2D/3D 인터랙티브 맵으로 실시간 시각화.",
    highlights: [
      "{10,000+ 로케이션}에 {Culling}·그래픽 최소화로 Panning 렉 해소",
      "차별화된 시각화로 {시리즈 A 투자 유치}에 기여",
      "Smooth Zoom·Friction Scroll 등 {Web Vitals} 친화적 인터랙션 구현",
      "피킹 동선 시각화로 물류 작업 효율 {20%+ 개선}",
    ],
    role: "Frontend Lead · 기여 80%+",
    year: "2023",
    stack: ["React", "TypeScript", "PixiJS", "ThreeJS", "WebGL"],
    featured: true,
  },
  {
    title: "translation-generator (OSS)",
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
  },
  {
    title: "가상 DAS (ezDAS)",
    summary: "고가 자동 분류 설비(DAS)를 대체하는 가상 DAS SaaS 신규 개발.",
    highlights: [
      "{수억 원대 설비 → 15만 원} SaaS로 중소 물류사 접근성 확보",
      "{TTS} 음성 안내로 피킹·패킹 생산성 향상, {SaaS 고객 확보·매출 증대} 기여",
    ],
    role: "Frontend Lead · 기여 70%+",
    year: "2023",
    stack: ["React", "TypeScript", "MUI", "TTS"],
  },
  {
    title: "FX 마진 게임",
    summary: "환율 실시간 등락을 캔들 차트로 시각화한 몰입형 풀스택 게임.",
    highlights: [
      "{ECharts} 캔들 애니메이션 최적화로 {프레임 드랍 제거}",
      "탭 비활성화 시 시간 오차 해결로 안정적 실시간 동기화, {매출 상승} 기여",
    ],
    role: "Fullstack · 기여 90%+",
    year: "2020",
    stack: ["JavaScript", "TypeScript", "ECharts", "Node.js", "PHP", "MySQL", "Redis"],
  },
  {
    title: "네임드 애니메이션 게임 리뉴얼·중계",
    summary: "스포츠 커뮤니티 주요 애니메이션 게임 리뉴얼 및 실시간 중계 시스템.",
    highlights: [
      "렌더링·로딩 최적화로 메인 페이지 로딩 {2초대 → 0.3초 이내}",
      "{Visibility API} 기반 시간 동기화로 진행 오차 해결",
      "AWS·NGINX·Jenkins {CI/CD}로 배포 안정성 확보",
    ],
    role: "Fullstack · 기여 70%+",
    year: "2019",
    stack: ["JavaScript", "jQuery", "PHP", "Node.js", "AWS", "Jenkins"],
    links: [{ label: "Website", href: "https://named.com" }],
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
    items: ["Zustand", "React Query", "Apollo Client", "GraphQL", "MySQL", "Redis"],
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
    note: "자바스크립트 런타임의 태스크 큐·마이크로태스크 동작 원리 심층 분석",
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

export const community = [
  "주니어 개발자 멘토링 및 사내 교육 자료 제작·발표",
  "사내 신규 기술 도입 스터디 운영 및 시스템 개선 포인트 발표",
  "sat10am 개발 스터디 약 3년 운영 — JavaScript·Git·Kubernetes·Network 등 발표",
  "사내 기술 블로그 운영 및 팀 내 지식 공유 문화 정착",
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
