# 🚀 Quick Deployment Checklist

## 5-Minute Setup Summary

### STEP 1: Verify Local Build (5 minutes)
```bash
npm install
npm run build
npm start
# Open http://localhost:3000 - Should see your site
```

### STEP 2: Prepare Files for Upload
Your project is ready! Files configured:
- ✅ `next.config.ts` - Production optimized
- ✅ `server.js` - cPanel Node.js server
- ✅ `.env.production` - Production settings
- ✅ `package.json` - All dependencies
- ✅ `public/` - Static assets
- ✅ `src/` - Source code

### STEP 3: Upload to cPanel (via FTP/File Manager)

**Delete these before uploading** (save bandwidth):
- `node_modules/` folder (will reinstall on server)
- `.next/` folder (delete only if you plan to build on the server)

**Note:** If server build fails (for example due to memory limits), build locally first (`npm run build`), then upload the complete `.next/` folder instead of deleting it.

**Important:** When uploading `.next/`, upload the full folder contents. If your file manager makes `.next/` appear as `4 KB`, open it and confirm it contains subfolders like `build`, `server`, `static`, and files like `BUILD_ID`.

**Upload these folders/files:**
```
public/
src/
.next/  (if pre-built locally)
package.json
package-lock.json
next.config.ts
server.js
tsconfig.json
.env.production
```

**If upload fails or the folder appears empty:**
- Zip `.next/` locally to `next.zip`
- Upload `next.zip` to the server
- Extract it in `App Root`
- Confirm `.next/` contains actual files before restarting the app


### STEP 4: Setup Node.js in cPanel
```
Dashboard → Software → Setup Node.js App → Create

NodeJS Version:     20.x (or latest available)
Application Mode:   production
Application URL:    yourdomain.com
App Root:          /home/username/public_html/myapp
Startup File:      server.js

Click: CREATE APPLICATION
```

### STEP 5: Install Dependencies and Start the App
**Important:** If server build fails (out of memory), build locally first, upload `.next/`, and do not run `npm run build` on the server.

```bash
# Local build (if needed):
npm run build  # Run locally, then upload .next/

# On server via cPanel:
Run NPM Install  # Installs dependencies in the app root
# If you uploaded a pre-built .next/, do not run `npm run build` on the server.
Restart app
```

If cPanel has a terminal, verify the app root and confirm `next` is installed:
```bash
cd /home/username/public_html/myapp
ls node_modules/next
ls .next
```
If `node_modules/next` or `.next` is missing or empty, the app will fail to start.


### STEP 6: Restart & Verify
```
Go back to cPanel → Setup Node.js App
Click on your app → RESTART button
Visit: https://yourdomain.com
```

If your app still shows a directory listing or 503 error, confirm:
- `App Root` is correct
- `Startup File` is `server.js`
- `node_modules/next` exists in the app root
- `.next/` contains actual build files


---

## 🔧 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| **App won't start** | Check cPanel error logs. Verify `server.js` exists. Check Node.js version >= 18 |
| **Static files missing** | Ensure `public/` folder uploaded. Check permissions (755) |
| **App fails with `Cannot find module 'next'`** | Verify `node_modules/next` exists in the app root and run `Run NPM Install` in cPanel |
| **Pre-built `.next/` not found** | Confirm `.next/` contains build files and upload the full folder or extract from a zip |
| **HTTPS not working** | Go to cPanel → AutoSSL → Install certificate |
| **High memory usage** | Restart app in cPanel. Check for memory leaks. |
| **Build takes too long** | Run `npm ci` instead of `npm install`. Clear cache: `npm cache clean --force` |
| **"Port in use" error** | cPanel auto-assigns new port. Restart app. Check logs. |

---

## 📋 Pre-Upload Checklist

- [ ] Ran `npm run build` locally without errors
- [ ] Tested `npm start` locally and site loads
- [ ] Updated `.env.production` with your domain
- [ ] Deleted `node_modules/` folder (saves upload time)
- [ ] Deleted `.next/` folder (will rebuild on server)
- [ ] Domain DNS pointing to cPanel server IP
- [ ] Have FTP/cPanel File Manager access
- [ ] Got your cPanel username & password

---

## 📞 If Something Goes Wrong

1. **Check cPanel Error Logs**: Dashboard → Error Log
2. **SSH to server**: `ssh username@yourdomain.com`
3. **Check Node.js status**: `ps aux | grep node`
4. **View app logs**: Check cPanel app logs or PM2 logs
5. **Restart app**: Go to Setup Node.js App → Restart button

---

## Next Steps After Deploy

✅ Verify site loads at https://yourdomain.com
✅ Test all forms and features
✅ Check Google Search Console
✅ Setup Google Analytics (optional)
✅ Configure email settings (if using contact forms)
✅ Setup monitoring/alerts
✅ Schedule regular backups

---

**Your app is production-ready! 🎉**

For detailed guide, see: `DEPLOYMENT_GUIDE.md`
