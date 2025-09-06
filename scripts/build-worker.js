#!/usr/bin/env node

/**
 * Build script สำหรับสร้าง worker.js ที่มี Next.js static files
 */

const fs = require('fs');
const path = require('path');

// Path configurations
const outDir = path.join(__dirname, '..', 'out');
const srcDir = path.join(__dirname, '..', 'src');
const workerPath = path.join(srcDir, 'worker.js');

// อ่านไฟล์ HTML
function readHTMLFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.warn(`Warning: Could not read ${filePath}`);
    return null;
  }
}

// สร้าง worker code ใหม่
function generateWorkerCode() {
  const thaiHTML = readHTMLFile(path.join(outDir, 'th', 'landingpage', 'index.html'));
  const englishHTML = readHTMLFile(path.join(outDir, 'en', 'landingpage', 'index.html'));
  const notFoundHTML = readHTMLFile(path.join(outDir, '404.html'));

  if (!thaiHTML || !englishHTML) {
    throw new Error('Could not read required HTML files. Please run "npm run build" first.');
  }

  // Escape template literals in HTML
  const escapedThaiHTML = thaiHTML.replace(/`/g, '\\`').replace(/\${/g, '\\${');
  const escapedEnglishHTML = englishHTML.replace(/`/g, '\\`').replace(/\${/g, '\\${');
  const escapedNotFoundHTML = notFoundHTML ? notFoundHTML.replace(/`/g, '\\`').replace(/\${/g, '\\${') : '';

  return `/**
 * Cloudflare Worker สำหรับ website-ui
 * Auto-generated from Next.js build output
 * Generated at: ${new Date().toISOString()}
 */

// HTML Templates from Next.js build
const THAI_HTML = \`${escapedThaiHTML}\`;

const ENGLISH_HTML = \`${escapedEnglishHTML}\`;

const NOT_FOUND_HTML = \`${escapedNotFoundHTML}\`;

// Static assets mapping (เพิ่มในอนาคตหากต้องการ)
const STATIC_ASSETS = {
  // CSS files
  '/_next/static/css/46132ad4dfd4d600.css': 'text/css',
  '/_next/static/css/08d34276ce33e65b.css': 'text/css',
  
  // JS files (สามารถเพิ่มได้หากต้องการ)
  '/_next/static/chunks/framework-306aa0968ce8efc5.js': 'application/javascript',
  
  // Images
  '/favicon.ico': 'image/x-icon',
  '/icon.png': 'image/png'
};

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      // Handle static assets
      if (pathname.startsWith('/_next/') || 
          pathname.startsWith('/favicon.ico') ||
          pathname.startsWith('/icon.png') ||
          pathname.match(/\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
        
        // สำหรับตอนนี้ส่งกลับ 404 สำหรับ static assets
        // ในอนาคตสามารถเพิ่ม static file serving ได้
        return new Response('Static asset not found', { status: 404 });
      }

      // Handle root path
      if (pathname === '/') {
        return Response.redirect(new URL('/th/landingpage', request.url), 302);
      }

      // Handle locale root paths
      if (pathname === '/th' || pathname === '/th/') {
        return Response.redirect(new URL('/th/landingpage', request.url), 302);
      }
      
      if (pathname === '/en' || pathname === '/en/') {
        return Response.redirect(new URL('/en/landingpage', request.url), 302);
      }

      // Handle landing page paths - ใช้ Next.js HTML จริง
      if (pathname === '/th/landingpage' || pathname === '/th/landingpage/') {
        return new Response(THAI_HTML, {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      if (pathname === '/en/landingpage' || pathname === '/en/landingpage/') {
        return new Response(ENGLISH_HTML, {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // Handle other localized paths
      if (pathname.startsWith('/th/') || pathname.startsWith('/en/')) {
        if (NOT_FOUND_HTML) {
          return new Response(NOT_FOUND_HTML, {
            status: 404,
            headers: {
              'Content-Type': 'text/html;charset=UTF-8'
            }
          });
        }
      }

      // Default 404
      return new Response('Page not found', { 
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(\`Worker Error: \${error.message}\`, { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  },
};`;
}

// Main execution
function main() {
  try {
    console.log('🔨 Building worker with Next.js static files...');
    
    // ตรวจสอบว่ามี out directory หรือไม่
    if (!fs.existsSync(outDir)) {
      throw new Error('Out directory not found. Please run "npm run build" first.');
    }

    // สร้าง worker code
    const workerCode = generateWorkerCode();
    
    // เขียนไฟล์ worker.js
    fs.writeFileSync(workerPath, workerCode, 'utf8');
    
    console.log('✅ Worker built successfully!');
    console.log(`📄 Written to: ${workerPath}`);
    console.log(`📊 File size: ${Math.round(fs.statSync(workerPath).size / 1024)} KB`);
    
  } catch (error) {
    console.error('❌ Error building worker:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
