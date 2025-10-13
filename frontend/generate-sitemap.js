const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Your website URL
const BASE_URL = 'https://example.com';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add all your routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.resolve('./build/sitemap.xml'));
  
  streamToPromise(sitemap.pipe(writeStream))
    .then(() => console.log('Sitemap generated successfully!'))
    .catch(err => console.error(err));

  links.forEach(link => sitemap.write(link));
  sitemap.end();
}

generateSitemap();
