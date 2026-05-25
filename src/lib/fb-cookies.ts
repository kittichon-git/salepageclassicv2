"use client";

/**
 * อ่าน _fbp cookie (Meta Pixel browser ID)
 */
export function getFbp(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const m = document.cookie.match(/(?:^|;\s*)_fbp=([^;]+)/);
  return m?.[1];
}

/**
 * อ่าน _fbc cookie (Meta click ID)
 * ถ้าไม่มี → สร้างจาก ?fbclid= ใน URL แล้ว set cookie
 */
export function getFbc(): string | undefined {
  if (typeof document === "undefined") return undefined;

  // 1. Try existing cookie
  const m = document.cookie.match(/(?:^|;\s*)_fbc=([^;]+)/);
  if (m?.[1]) return m[1];

  // 2. Build from ?fbclid= in URL
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid) return undefined;

  const fbc = `fb.1.${Date.now()}.${fbclid}`;
  document.cookie = `_fbc=${fbc}; path=/; max-age=${90 * 86400}; SameSite=Lax`;
  return fbc;
}
