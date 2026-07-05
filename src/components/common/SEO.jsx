import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Fady Ashraf | Software Developer',
  description = 'Fady Ashraf - Software Developer متخصص في تطوير المواقع باستخدام React و WordPress و Dotnet',
  keywords = 'Fady Ashraf, Software Developer, React, WordPress, Dotnet, DevOps, Web Developer, مصر',
  image = '/og-image.jpg',
  url = 'https://fadyashraf.com',
  author = 'Fady Ashraf'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#6C63FF" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fady Ashraf",
          "jobTitle": "Software Developer",
          "url": "https://fadyashraf.com",
          "sameAs": [
            "https://linkedin.com/in/fadyashraf",
            "https://facebook.com/fadyashraf",
            "https://github.com/fadyashraf"
          ],
          "knowsAbout": ["React", "WordPress", "Dotnet", "DevOps", "JavaScript"]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;