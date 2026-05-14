import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import http from "node:http";

const urls = [
  // === extracted from D:\notion-sale-page\client\src\pages\Home.tsx ===
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/sale-page-hero-command-board-gYg7zAuwi3cRr8Naw3hBWk.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/offer-stack-value-cards-cpikbfLJ269Kz4vfj84DHL.webp",
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
