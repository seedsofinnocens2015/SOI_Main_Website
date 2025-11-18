# Hostinger h-panel में Next.js Project Host करने की Step-by-Step Guide

## 📋 Prerequisites (जरूरी चीजें)
- Hostinger h-panel access
- FileZilla या कोई FTP client (या h-panel का File Manager)
- Node.js installed (local machine पर build के लिए)

---

## 🚀 Step 1: Project को Build करना (Local Machine पर)

### 1.1 Dependencies Install करें
```bash
npm install
```

### 1.2 Project को Build करें
```bash
npm run build
```

**Important:** Build complete होने के बाद automatically `postbuild` script run होगी जो image paths को fix करेगी।

यह command चलने के बाद `out` folder बनेगा जिसमें सभी static files होंगी।

---

## 📁 Step 2: Build Output को Prepare करना

Build complete होने के बाद:
- `out` folder में सभी files ready हो जाएंगी
- यह folder ही आपको Hostinger पर upload करना है

---

## 🌐 Step 3: Hostinger h-panel में Setup

### 3.1 h-panel Login करें
1. https://hpanel.hostinger.com पर login करें
2. अपना domain select करें: `seedsofinnocens.com`

### 3.2 File Manager खोलें
1. h-panel में **File Manager** पर click करें
2. या **Files** section में जाएं

### 3.3 `/new` Folder बनाएं
1. File Manager में root directory (`public_html`) में जाएं
2. **New Folder** button click करें
3. Folder name: `new` (lowercase)
4. Create करें

### 3.4 Files Upload करें
**Option A: File Manager से (Small projects के लिए)**
1. `new` folder में जाएं
2. **Upload** button click करें
3. Local machine से `out` folder की सभी files और folders select करें
4. Upload करें

**Option B: FTP Client से (Recommended - Fast)**
1. FileZilla या कोई FTP client open करें
2. Hostinger के FTP credentials use करें:
   - Host: `ftp.seedsofinnocens.com` या IP address
   - Username: h-panel में दिया गया FTP username
   - Password: FTP password
   - Port: 21
3. Local side: `out` folder select करें
4. Remote side: `public_html/new` folder में जाएं
5. सभी files और folders को drag & drop करें

---

## ⚙️ Step 4: .htaccess File Setup (Important!)

`/new` folder में `.htaccess` file बनाएं ताकि routing properly काम करे:

### 4.1 File Manager में:
1. `public_html/new` folder में जाएं
2. **New File** button click करें
3. File name: `.htaccess`
4. नीचे दिया गया content paste करें:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /new/
  
  # Handle Next.js static files
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /new/$1 [L]
  
  # Redirect to index.html for client-side routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ /new/index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

5. Save करें

---

## 🔍 Step 5: Testing

### 5.1 Website Check करें
1. Browser में जाएं: `https://www.seedsofinnocens.com/new`
2. Homepage load होना चाहिए
3. सभी pages check करें:
   - `https://www.seedsofinnocens.com/new/about`
   - `https://www.seedsofinnocens.com/new/contact`
   - `https://www.seedsofinnocens.com/new/blog`
   - etc.

### 5.2 Common Issues और Solutions

**Issue 1: 404 Error on pages**
- Solution: `.htaccess` file check करें, properly configured होनी चाहिए

**Issue 2: Images नहीं load हो रहे**
- Solution: `next.config.mjs` में `images: { unoptimized: true }` already set है
- Check करें कि `public` folder की सभी files `out` में properly copy हुई हैं

**Issue 3: CSS/JS files नहीं load हो रहे**
- Solution: Browser console check करें
- File paths check करें - सभी paths `/new/` से start होने चाहिए

---

## 📝 Step 6: Future Updates के लिए

जब भी आपको website update करनी हो:

1. **Local changes करें**
2. **Build करें:**
   ```bash
   npm run build
   ```
3. **`out` folder की files को Hostinger पर upload करें**
   - पुरानी files को replace करें
   - या पहले delete करके नई upload करें

---

## 🎯 Important Notes

1. **Base Path**: Project `/new` folder में host हो रहा है, इसलिए सभी internal links automatically `/new` prefix के साथ काम करेंगे

2. **Static Export**: यह static export है, इसलिए:
   - Server-side rendering (SSR) काम नहीं करेगा
   - API routes काम नहीं करेंगे
   - Dynamic routes को pre-render करना होगा

3. **File Permissions**: 
   - Folders: 755
   - Files: 644

4. **SSL Certificate**: Hostinger automatically SSL provide करता है, `https://` use करें

---

## 🆘 Troubleshooting

### Problem: Website blank page दिखा रहा है
- Browser console check करें (F12)
- Network tab में errors check करें
- `.htaccess` file properly configured है या नहीं check करें

### Problem: Routes काम नहीं कर रहे
- `.htaccess` file में rewrite rules check करें
- `basePath: '/new'` properly set है या नहीं verify करें

### Problem: Build error आ रहा है
- `node_modules` delete करें और फिर `npm install` करें
- Node.js version check करें (v18+ recommended)

---

## ✅ Final Checklist

- [ ] Project successfully build हो गया
- [ ] `out` folder में सभी files हैं
- [ ] `/new` folder Hostinger पर बन गया
- [ ] सभी files upload हो गईं
- [ ] `.htaccess` file properly configured है
- [ ] Website `https://www.seedsofinnocens.com/new` पर accessible है
- [ ] सभी pages properly load हो रहे हैं
- [ ] Images और assets properly load हो रहे हैं

---

## 📞 Support

अगर कोई problem आए तो:
1. Browser console में errors check करें
2. Hostinger support से contact करें
3. Next.js documentation check करें: https://nextjs.org/docs

---

**Good Luck! 🚀**

