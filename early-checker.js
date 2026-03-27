(async function SNPMB_CHECKER() {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  CONFIG
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const BASE   = "https://pendaftaran-utbk.snpmb.id";
  const OPTS   = { credentials: "include" };
  const W      = 60; // lebar box karakter

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  STYLE HELPERS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const S = {
    header  : "background:#1e3a5f;color:#e2f0ff;padding:5px 14px;font-size:13px;font-weight:bold;border-left:4px solid #4fa3e0",
    sub     : "background:#162032;color:#7eb8e8;padding:3px 12px;font-size:12px",
    success : "background:#064e3b;color:#6ee7b7;padding:4px 12px;font-size:13px;font-weight:bold;border-left:4px solid #10b981",
    fail    : "background:#450a0a;color:#fca5a5;padding:4px 12px;font-size:13px;font-weight:bold;border-left:4px solid #ef4444",
    warn    : "background:#451a03;color:#fcd34d;padding:4px 12px;font-size:13px;font-weight:bold;border-left:4px solid #f59e0b",
    info    : "background:#1e3a5f;color:#bae6fd;padding:3px 12px;font-size:12px",
    key     : "color:#94a3b8;font-size:12px;padding:2px 12px",
    val_ok  : "color:#34d399;font-size:12px;font-weight:bold;padding:2px 0",
    val_no  : "color:#f87171;font-size:12px;font-weight:bold;padding:2px 0",
    val_neu : "color:#e2e8f0;font-size:12px;padding:2px 0",
    divider : "color:#334155;font-size:11px;padding:1px 0",
    time    : "color:#64748b;font-size:11px;padding:2px 12px",
    big_ok  : "background:linear-gradient(90deg,#064e3b,#065f46);color:#6ee7b7;padding:8px 20px;font-size:16px;font-weight:bold;border-radius:6px",
    big_no  : "background:linear-gradient(90deg,#450a0a,#7f1d1d);color:#fca5a5;padding:8px 20px;font-size:16px;font-weight:bold;border-radius:6px",
    big_neu : "background:#1e293b;color:#94a3b8;padding:8px 20px;font-size:16px;font-weight:bold;border-radius:6px",
    section : "background:#0f172a;color:#475569;padding:2px 14px;font-size:11px;letter-spacing:2px",
    error   : "background:#7f1d1d;color:#fecaca;padding:4px 12px;font-size:12px",
  };

  const line   = (char = "─") => `%c${char.repeat(W)}`;
  const truthy = v => v === true || v === 1 || v === "true" || v === "1";
  const falsy  = v => v === false || v === 0 || v === "false" || v === "0";
  const fmt    = v => v === null || v === undefined ? "—" : String(v);

  function boolStyle(v) {
    if (truthy(v)) return S.val_ok;
    if (falsy(v))  return S.val_no;
    return S.val_neu;
  }

  function boolLabel(v) {
    if (truthy(v)) return "✔  true";
    if (falsy(v))  return "✘  false";
    return fmt(v);
  }

  function printRow(label, value) {
    const pad = label.padEnd(30, " ");
    console.log(`%c  ${pad} %c${boolLabel(value)}`, S.key, boolStyle(value));
  }

  function printInfo(label, value) {
    const pad = label.padEnd(30, " ");
    console.log(`%c  ${pad} %c${fmt(value)}`, S.key, S.val_neu);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  BANNER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const now = new Date().toLocaleString("id-ID", { dateStyle:"full", timeStyle:"medium" });
  console.log(line("━"), S.divider);
  console.log("%c  🎓  SNPMB ELIGIBILITY CHECKER  v3.0", S.header);
  console.log(`%c  ${now}`, S.time);
  console.log(line("━"), S.divider);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  FETCH HELPER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  async function apiFetch(path) {
    const url = BASE + path;
    const t0  = performance.now();
    const res = await fetch(url, OPTS);
    const ms  = (performance.now() - t0).toFixed(0);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const data = await res.json();
    return { data, ms, status: res.status };
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  1. USER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log("%c  👤  IDENTITAS PESERTA", S.section);
  try {
    const { data: u, ms } = await apiFetch("/api/auth/user");
    printInfo("Nama",            u.name       ?? u.nama       ?? u.full_name);
    printInfo("Email",           u.email);
    printInfo("No. Peserta",     u.no_peserta ?? u.nopeserta  ?? u.peserta_id);
    printInfo("NISN",            u.nisn);
    printInfo("Sekolah",         u.nama_sekolah ?? u.sekolah);
    printInfo("Provinsi Sekolah",u.provinsi_sekolah);
    printInfo("Respons (ms)",    ms + " ms");
    console.log("%c  ℹ️  Raw user data tersedia di: window.__snpmb.user", S.info);
    window.__snpmb = window.__snpmb || {};
    window.__snpmb.user = u;
  } catch (e) {
    console.log(`%c  ✘  Gagal ambil data user: ${e.message}`, S.error);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  2. ELIGIBILITAS  ←  data utama
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log(line("─"), S.divider);
  console.log("%c  📋  ELIGIBILITAS LENGKAP", S.section);

  let eligData = null;
  try {
    const { data: e, ms } = await apiFetch("/api/umum/eligibilitas");
    eligData = e;
    window.__snpmb = window.__snpmb || {};
    window.__snpmb.eligibilitas = e;

    // ── SNBP
    console.log("%c  ┌ SNBP ─────────────────────────────────────────", S.sub);
    printRow("is_lolos_snbp",           e.is_lolos_snbp);
    printRow("is_mendaftar_snbp",       e.is_mendaftar_snbp);
    printInfo("tahun_lolos_snbp",       e.tahun_lolos_snbp);

    // ── SNBT / UTBK
    console.log("%c  ├ SNBT / UTBK ─────────────────────────────────", S.sub);
    printRow("is_lolos_snbt",           e.is_lolos_snbt);
    printRow("is_mendaftar_snbt",       e.is_mendaftar_snbt);
    printRow("is_lulus_snbt",           e.is_lulus_snbt);
    printInfo("tahun_lolos_snbt",       e.tahun_lolos_snbt);

    // ── VALIDITAS UMUM
    console.log("%c  ├ VALIDITAS ────────────────────────────────────", S.sub);
    printRow("is_tahun_lulus_valid",    e.is_tahun_lulus_valid);
    printRow("is_verval_permanen",      e.is_verval_permanen);
    printRow("is_paket_c_umur_invalid", e.is_paket_c_umur_invalid);
    printRow("is_terdaftar",            e.is_terdaftar);
    printRow("is_aktif",                e.is_aktif);

    // ── FIELD LAIN (otomatis, jika ada tambahan dari API)
    const knownKeys = new Set([
      "is_lolos_snbp","is_mendaftar_snbp","tahun_lolos_snbp",
      "is_lolos_snbt","is_mendaftar_snbt","is_lulus_snbt","tahun_lolos_snbt",
      "is_tahun_lulus_valid","is_verval_permanen","is_paket_c_umur_invalid",
      "is_terdaftar","is_aktif"
    ]);
    const extras = Object.keys(e).filter(k => !knownKeys.has(k));
    if (extras.length) {
      console.log("%c  ├ FIELD TAMBAHAN ──────────────────────────────", S.sub);
      extras.forEach(k => {
        const v = e[k];
        typeof v === "boolean" || v === 0 || v === 1
          ? printRow(k, v)
          : printInfo(k, v);
      });
    }

    console.log(`%c  └ Respons: ${ms} ms  │  Total field: ${Object.keys(e).length}`, S.sub);

  } catch (err) {
    console.log(`%c  ✘  Gagal ambil eligibilitas: ${err.message}`, S.error);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  3. JADWAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log(line("─"), S.divider);
  console.log("%c  📅  JADWAL UTBK", S.section);
  try {
    const { data: j, ms } = await apiFetch("/api/umum/jadwal");
    const entries = Array.isArray(j) ? j : (j.data ?? j.jadwal ?? [j]);
    entries.slice(0, 10).forEach(item => {
      const label = item.nama_jadwal ?? item.nama ?? item.title ?? item.keterangan ?? "—";
      const tgl   = item.tanggal     ?? item.tgl  ?? item.date  ?? "";
      printInfo(label, tgl);
    });
    if (entries.length > 10) {
      console.log(`%c  ... dan ${entries.length - 10} jadwal lainnya. Cek window.__snpmb.jadwal`, S.info);
    }
    console.log(`%c  └ Respons: ${ms} ms`, S.sub);
    window.__snpmb = window.__snpmb || {};
    window.__snpmb.jadwal = j;
  } catch (e) {
    console.log(`%c  ✘  Gagal ambil jadwal: ${e.message}`, S.error);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  4. VERDICT AKHIR
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log(line("━"), S.divider);
  console.log("%c  🏁  VERDICT", S.section);

  if (eligData) {
    const lolosSnbp  = truthy(eligData.is_lolos_snbp);
    const daftarSnbp = truthy(eligData.is_mendaftar_snbp);
    const lolosSnbt  = truthy(eligData.is_lolos_snbp) || truthy(eligData.is_lulus_snbt);
    const valid      = truthy(eligData.is_tahun_lulus_valid) && !truthy(eligData.is_paket_c_umur_invalid);

    console.log(
      `%c  ${lolosSnbp ? "🎉  LOLOS SNBP" : "❌  TIDAK LOLOS SNBP"}`,
      lolosSnbp ? S.big_ok : S.big_no
    );
    console.log(
      `%c  ${daftarSnbp ? "📝  Terdaftar di SNBP" : "—   Tidak mendaftar SNBP"}`,
      daftarSnbp ? S.success : S.warn
    );
    console.log(
      `%c  ${valid ? "✅  Memenuhi syarat akademik" : "⚠️   Ada syarat yang tidak terpenuhi"}`,
      valid ? S.success : S.warn
    );

    // Rekomendasi
    console.log(line("─"), S.divider);
    console.log("%c  💡  REKOMENDASI", S.section);
    if (lolosSnbp) {
      console.log("%c  → Kamu lolos SNBP. Segera lakukan pendaftaran ulang sesuai PTN yang menerima.", S.success);
    } else if (valid) {
      console.log("%c  → Belum lolos SNBP. Kamu masih bisa mendaftar UTBK-SNBT.", S.warn);
    } else {
      console.log("%c  → Cek kembali kelengkapan data dan verval di SNPMB.", S.fail);
    }
  } else {
    console.log("%c  ⚠️  Data eligibilitas tidak berhasil dimuat.", S.warn);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  5. PENUTUP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  console.log(line("─"), S.divider);
  console.log("%c  📦  Akses data raw via objek global:", S.info);
  console.log("%c     window.__snpmb.user          → data profil", S.key, "");
  console.log("%c     window.__snpmb.eligibilitas  → data eligibilitas", S.key, "");
  console.log("%c     window.__snpmb.jadwal        → data jadwal", S.key, "");
  console.log(line("━"), S.divider);

})();
