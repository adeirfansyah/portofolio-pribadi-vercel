import Image from "next/image";
import styles from "./page.module.css";

const expertise = [
  ["AI untuk Pendidikan", "ChatGPT", "Codex AI", "Prompt Engineering", "AI for Teaching & Learning"],
  ["Produktivitas Digital", "Microsoft Office", "Google Workspace", "Canva", "Presentasi Digital"],
  ["Pemrograman & Otomasi", "Google Apps Script", "Python", "HTML", "Visual Studio Code"],
  ["Asesmen & Riset", "Moodle", "Google Forms", "Mendeley", "VOSviewer"],
];
const values = ["Integritas", "Inovasi", "Profesionalisme", "Kolaborasi", "Pembelajaran Berkelanjutan", "Kebermanfaatan"];
const resources = [
  ["01", "Modul AI Slide Architect", "Panduan praktik menyusun presentasi pembelajaran profesional berbasis AI.", "/modul/modul-ai-slide-architect.pdf"],
  ["02", "Modul Asesmen Digital", "Materi pengembangan ujian digital yang efisien, aman, dan berintegritas.", "/modul/modul-asesmen-digital.pdf"],
  ["03", "Template & Lembar Kerja Peserta", "Kumpulan template pendamping untuk digunakan selama dan setelah pelatihan.", "/modul/template-dan-lembar-kerja-peserta.pdf"],
];

export default function Home() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <a className={styles.brand} href="#beranda"><span>AI</span><b>Ade Irfansyah</b></a>
      <nav aria-label="Navigasi utama"><a href="#profil">Profil</a><a href="#keahlian">Keahlian</a><a href="#pelatihan">Pelatihan</a><a href="#materi">Materi</a></nav>
      <a className={styles.contactButton} href="#kontak">Hubungi Saya</a>
    </header>

    <section className={styles.hero} id="beranda">
      <div className={styles.heroCopy}><p className={styles.eyebrow}>Praktisi &middot; Trainer &middot; Konsultan</p><h1>Mentransformasi Pendidikan Melalui <em>Artificial Intelligence.</em></h1><p className={styles.lead}>Membantu guru, dosen, dan institusi pendidikan mengadopsi AI secara praktis, beretika, dan berdampak nyata.</p><div className={styles.actions}><a href="#pelatihan">Lihat Program Pelatihan</a><a href="#profil">Kenali Profil Saya</a></div><div className={styles.stats}><div><b>AI</b><span>untuk pendidikan</span></div><div><b>Digital</b><span>learning & assessment</span></div><div><b>Praktis</b><span>solusi siap diterapkan</span></div></div></div>
      <div className={styles.portrait}><div className={styles.photoFrame}><Image src="/ade-irfansyah.jpg" alt="Dr. Ade Irfansyah" fill priority sizes="(max-width: 900px) 90vw, 36vw" /></div><div className={styles.name}><b>Dr. Ade Irfansyah, S.T., M.T.</b></div></div>
    </section>

    <section className={styles.profile} id="profil"><p className={styles.label}>01 Profil Profesional</p><div className={styles.profileGrid}><h2>Teknologi yang memperkuat peran pendidik.</h2><div><p>Dr. Ade Irfansyah merupakan dosen, praktisi, trainer, dan konsultan transformasi pendidikan berbasis AI dengan pengalaman dalam media pembelajaran digital, asesmen berbasis teknologi, presentasi profesional, dan otomatisasi pembelajaran.</p><p>Dengan latar belakang Teknik Elektro, Teknik Penerbangan, dan Pendidikan Vokasi, beliau mengintegrasikan teknologi, pendidikan, dan inovasi digital untuk membantu pendidik serta institusi menghadapi perubahan secara percaya diri.</p></div></div><blockquote>&ldquo;Teknologi bukan untuk menggantikan pendidik, tetapi untuk memperkuat peran pendidik dalam menciptakan pembelajaran yang lebih bermakna.&rdquo;</blockquote></section>

    <section className={styles.expertise} id="keahlian"><div className={styles.heading}><p className={styles.label}>02 Bidang Keahlian</p><h2>Kompetensi lintas teknologi, pembelajaran, dan inovasi.</h2></div><div className={styles.expertiseGrid}>{expertise.map((g,i)=><article key={g[0]}><span>0{i+1}</span><h3>{g[0]}</h3><ul>{g.slice(1).map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></section>

    <section className={styles.training} id="pelatihan"><div className={styles.heading}><p className={styles.label}>03 Pelatihan Unggulan</p><h2>Program yang menghasilkan keterampilan nyata.</h2></div><div className={styles.trainingGrid}><article><span>01</span><small>Presentasi & komunikasi visual</small><h3>AI Slide Architect</h3><p>Membantu pendidik menghasilkan presentasi berbasis AI yang menarik, efektif, komunikatif, dan sesuai prinsip desain pembelajaran modern.</p><div className={styles.tags}><i>AI</i><i>PowerPoint</i><i>Visual Design</i></div></article><article className={styles.dark}><span>02</span><small>Asesmen digital & integritas</small><h3>Aplikasi Ujian Anti Kecurangan Berbasis AI</h3><p>Mengembangkan sistem ujian yang memadukan Google Workspace, Apps Script, dan AI untuk asesmen yang aman, transparan, serta efisien.</p><div className={styles.tags}><i>Apps Script</i><i>Google Forms</i><i>AI</i></div></article></div></section>

    <section className={styles.vision}><div><p className={styles.label}>04 Visi & Nilai</p><h2>Pendidikan Indonesia yang adaptif, berkualitas, dan berkelanjutan.</h2></div><div><p>Mempercepat transformasi pendidikan melalui AI, teknologi digital, dan inovasi pembelajaran yang berkualitas serta beretika.</p><div className={styles.values}>{values.map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section className={styles.resources} id="materi"><div className={styles.heading}><p className={styles.label}>05 Pusat Materi Peserta</p><h2>Unduh modul dan perangkat belajar pelatihan.</h2><p>Pilih materi yang dibutuhkan. Setiap file tersedia dalam format PDF.</p></div><div className={styles.resourceList}>{resources.map(x=><article key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><a href={x[3]} download>Download PDF</a></article>)}</div></section>

    <section className={styles.contact} id="kontak"><p className={styles.eyebrow}>Kolaborasi & Pelatihan</p><h2>Mari membangun pengalaman belajar yang lebih bermakna.</h2><p>Terbuka untuk pelatihan, konsultasi, pengembangan program, dan kolaborasi institusi.</p><a href="mailto:ade_irfansyah@poltekbangsby.ac.id">ade_irfansyah@poltekbangsby.ac.id</a><small>Silakan hubungi melalui email untuk informasi pelatihan dan kolaborasi.</small></section>
    <footer className={styles.footer}><b>Dr. Ade Irfansyah. S.T., M.T.</b><span>Transformasi Pendidikan Berbasis AI</span><span>Â© 2026</span></footer>
  </main>;
}





