# 🚀 Cloudflare Workers Deployment Setup

## การตั้งค่า Auto-Deployment จาก GitHub

### 1. ตั้งค่า GitHub Secrets

ไปที่ GitHub repository settings → Secrets and variables → Actions และเพิ่ม secrets ต่อไปนี้:

#### `CLOUDFLARE_API_TOKEN`
1. ไปที่ [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. เลือก "Custom token"
4. ตั้งค่าดังนี้:
   - **Token name**: `GitHub Actions Deploy`
   - **Permissions**: 
     - `Account` - `Cloudflare Workers:Edit`
     - `Zone` - `Zone:Read` (ถ้ามี custom domain)
   - **Account Resources**: `Include All accounts`
   - **Zone Resources**: `Include All zones` (ถ้ามี custom domain)

#### `CLOUDFLARE_ACCOUNT_ID`
```
888725e55ac1543637e22d1c490c5d9c
```

### 2. Workflow ที่ตั้งค่าไว้

File: `.github/workflows/deploy.yml`

**มีการทำงาน:**
- ✅ Auto-deploy เมื่อ push ไป `main` branch
- ✅ Deploy preview เมื่อสร้าง Pull Request
- ✅ Build Next.js และ Worker script อัตโนมัติ
- ✅ Deploy ไปยัง Cloudflare Workers

### 3. การใช้งาน

#### Deploy Production:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

#### Deploy Preview (Pull Request):
```bash
git checkout -b feature/your-feature
git add .
git commit -m "Your feature"
git push origin feature/your-feature
# สร้าง Pull Request ใน GitHub
```

### 4. Manual Deployment

หากต้องการ deploy manual:

```bash
# Build และ deploy
npm run build:all
npm run deploy

# หรือ deploy อย่างเดียว
npm run build:worker
npm run deploy
```

### 5. ตรวจสอบการ Deploy

- **Production URL**: https://website-ui.crmapp.workers.dev
- **GitHub Actions**: ดูใน tab "Actions" ของ repository
- **Cloudflare Dashboard**: [Workers & Pages](https://dash.cloudflare.com/workers)

### 6. Environment ที่รองรับ

- **Production**: deploy จาก `main` branch
- **Preview**: deploy จาก Pull Requests
- **Local Development**: `npm run worker:dev`

## 🔧 Troubleshooting

### GitHub Actions ล้มเหลว
1. ตรวจสอบ secrets ใน GitHub repository
2. ตรวจสอบ API token permissions
3. ดู logs ใน GitHub Actions tab

### Worker ไม่อัพเดท
1. ตรวจสอบว่า `npm run build:worker` ทำงานได้
2. ตรวจสอบ `wrangler.toml` configuration
3. Clear cache ใน Cloudflare Dashboard
