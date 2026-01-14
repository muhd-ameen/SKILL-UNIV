import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const defaultTitle = "Skill Univ - Not EdTech. EmployTech.";
const defaultDescription = "Transform your career with Skill Univ's industry-aligned programs. Master Full Stack Development, Digital Marketing, Data Analytics, and more. 92% hiring rate. Join our Bangalore campus today!";
const defaultKeywords = "skill training, career development, full stack development, digital marketing, data analytics, professional courses, Bangalore, employability skills, job-ready training, tech education";
const siteUrl = "https://theskilluniv.com";

export function SEO({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  canonicalUrl,
  ogImage = `${siteUrl}/logo.png`,
  ogType = "website",
  noIndex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | Skill Univ` : defaultTitle;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Skill Univ Logo" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content="Skill Univ Logo" />
    </Helmet>
  );
}
