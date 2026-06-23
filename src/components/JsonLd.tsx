import {
  profile,
  socials,
  skills,
  education,
  experiences,
} from "@/data/portfolio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.nameEn,
    alternateName: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    url: "https://seungwoohong.github.io",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressCountry: "KR",
    },
    sameAs: socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
    knowsAbout: skills.flatMap((g) => g.items),
    worksFor: {
      "@type": "Organization",
      name: experiences[0]?.company,
    },
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
