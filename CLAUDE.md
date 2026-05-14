**ok next**

ไป P-5 — download assets จาก CDN

```
# ORDER: Phase P-5 — Download CDN Assets

## Tasks

### 1) Extract CDN URLs จาก S1
อ่าน `D:\notion-sale-page\src\components\Home.tsx` (และไฟล์ component อื่นถ้ามี) — รวบรวม URL ทุกตัวที่:
- ขึ้นต้น `https://` หรือ `http://`
- ลงท้าย `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.svg`, `.gif`, `.mp4`, `.webm`

วาง URL ทั้งหมดที่ extract ได้ลงใน array `urls` ของ `scripts/download-assets.mjs`

### 2) อัปเดต scripts/download-assets.mjs ให้สมบูรณ์

```

import fs from "node:fs";

import path from "node:path";

import https from "node:https";

import http from "node:http";

const urls = [

// === auto-fill จาก D:notion-sale-pagesrccomponentsHome.tsx ===

];

const outDir = path.resolve("public/images");

fs.mkdirSync(outDir, { recursive: true });

function fetchUrl(url, dest, redirects = 0) {

return new Promise((resolve, reject) => {

if (redirects > 5) return reject(new Error("too many redirects: " + url));

const client = url.startsWith("https:") ? https : http;

client

.get(url, (r) => {

if ([301, 302, 303, 307, 308].includes(r.statusCode)) {

return resolve(fetchUrl(new URL(r.headers.location, url).toString(), dest, redirects + 1));

}

if (r.statusCode !== 200) return reject(new Error(`${r.statusCode} ${url}`));

const f = fs.createWriteStream(dest);

r.pipe(f);

f.on("finish", () => f.close(() => resolve()));

f.on("error", reject);

})

.on("error", reject);

});

}

function safeName(url) {

const u = new URL(url);

let name = path.basename(u.pathname) || "asset";

// strip query string from filename if any

name = name.split("?")[0];

if (!path.extname(name)) name += ".bin";

return name;

}

const failures = [];

for (const url of urls) {

const name = safeName(url);

const dest = path.join(outDir, name);

if (fs.existsSync(dest)) {

console.log("• skip", name);

continue;

}

try {

await fetchUrl(url, dest);

console.log("✓", name);

} catch (e) {

console.error("✗", name, e.message);

failures.push({ url, error: e.message });

}

}

if (failures.length) {

console.error(`\nFailed ${failures.length} downloads:`);

for (const f of failures) console.error(" -", f.url, "→", f.error);

process.exit(1);

}

console.log(`\nDone. ${urls.length - failures.length}/${urls.length} files in ${outDir}`);

```

### 3) รันสคริปต์

```

node scripts/download-assets.mjs

```

### 4) สร้าง URL → local-path mapping

สร้างไฟล์ `src/lib/imageMap.ts`:

```

// CDN URL → local path /public/images mapping

// เพื่อให้ component แทนที่ CDN URL ด้วย local path ได้ตรงๆ

export const imageMap: Record<string, string> = {

// "https://...[cloudfront.net/foo.jpg](http://cloudfront.net/foo.jpg)": "/images/foo.jpg",

};

export function localImage(cdnUrl: string): string {

return imageMap[cdnUrl] ?? cdnUrl;

}

```

เติม mapping ทุก URL จาก urls[] โดยใช้ `safeName()` rule เดียวกัน → key=URL เต็ม, value=`/images/<filename>`

### 5) Update lib/data.ts hero.posterImage และ instructor.portrait

ถ้ามีรูปที่เหมาะ map ให้ตรง ถ้าไม่มีให้คง TODO comment ไว้

## Acceptance

* `dir D:\salepageclassicv2\public\images` — มีไฟล์ครบเท่า urls[] (ลบ skip)
* `node scripts/download-assets.mjs` รันซ้ำได้ (idempotent — เห็น "skip" ทุกตัว ครั้งที่ 2)
* `npm run build` ยัง 0 error
* รายงานจำนวนไฟล์ที่โหลด + ขนาดรวม

## Stop-gates

* ถ้า CDN URL คืน 403/404 มากกว่า 30% → STOP รายงาน user
* ถ้าไฟล์รวมใหญ่กว่า 50 MB → STOP ถาม user เรื่อง optimization strategy
* ถ้าหา Home.tsx ไม่เจอ → list `D:\notion-sale-page\src\` แล้วถาม user ว่า component หลักอยู่ไฟล์ไหน

## Next preview

P-6 จะเริ่ม build sections ทีละตัว เริ่มจาก TopNav + Hero โดยใช้:

* DOM/grid จาก S1 (Hero grid 0.93fr / 1.07fr)
* Style จาก Palette v2
* Copy จาก data.ts
* รูปจาก imageMap → /public/images

```

วางแทน order file เดิม แล้ว Claude Code เดิน P-5 ได้เลยครับ