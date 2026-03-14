import Image from "next/image";

const promises = [
  "Aku mau tetap hadir dan serius jalanin hubungan ini bareng kamu.",
  "Aku ingin terus jaga hal-hal kecil yang bikin kita nyaman satu sama lain.",
  "Aku mau hubungan ini tumbuh pelan-pelan, tapi tetap jelas arahnya."
];

const moments = [
  {
    title: "Awal yang manis",
    text: "Dari obrolan sederhana sampai jadi hubungan yang berarti, semuanya datang dengan cara yang terasa pas."
  },
  {
    title: "Hari-hari favorit",
    text: "Banyak momen biasa terasa lebih enak dijalani karena ada sayang di situ."
  },
  {
    title: "Menuju selamanya",
    text: "Semoga setiap anniversary jadi tanda kalau hubungan ini terus dijaga dan dibawa ke arah yang baik."
  }
];

const reasons = [
  "Sayang bikin suasana terasa lebih tenang.",
  "Cara kamu ngobrol dan dengerin itu nyaman.",
  "Perhatian kecil kamu selalu kerasa tulus.",
  "Kamu punya cara sendiri buat bikin hari terasa lebih ringan.",
  "Bareng kamu, semuanya terasa lebih masuk akal."
];

const gallery = [
  {
    title: "Photo 2",
    src: "/photo_2.jpg"
  },
  {
    title: "Photo 3",
    src: "/photo_3.jpg"
  },
  {
    title: "Photo 4",
    src: "/photo_4.jpg"
  },
  {
    title: "Photo 5",
    src: "/photo_5.jpg"
  },
  {
    title: "Photo 6",
    src: "/photo_6.jpg"
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Happy Anniversary, sayangku</p>
          <h1>
            Untuk sayangku, terima kasih sudah jadi bagian penting dari perjalanan
            ini.
          </h1>
          <p className="lead">
            Bukan sesuatu yang berlebihan, cuma halaman kecil buat ngerayain hari
            spesial kita dan ngingetin kalau hubungan ini berarti buat aku.
          </p>

          <div className="hero-actions">
            <a href="#surat" className="primary-link">
              Baca pesannya
            </a>
            <span className="badge">Made with love for sayangku</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-photo-frame">
            <Image
              src="/photo_1.jpg"
              alt="Foto Nurul"
              fill
              priority
              className="hero-photo"
            />
            <div className="hero-photo-badge">
              <span>sayang</span>
              <strong>our favorite memory</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="story-grid">
        <div className="panel quote-panel">
          <p className="section-label">Tentang kita</p>
          <h2>Hubungan yang pelan-pelan tumbuh, tapi terasa makin berarti.</h2>
          <p>
            Tidak semua hubungan perlu banyak kata besar. Kadang yang paling
            penting justru rasa nyaman, saling ngerti, dan mau tetap jalan bareng
            sampai sejauh mungkin.
          </p>
        </div>

        <div className="panel promise-panel">
          <p className="section-label">Tiga janji kecil</p>
          <div className="promise-list">
            {promises.map((promise, index) => (
              <article key={promise} className="promise-item">
                <span>0{index + 1}</span>
                <p>{promise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="section-label">Perjalanan rasa</p>
          <h2>Tumbuh bareng, tanpa banyak drama, tapi tetap punya arah.</h2>
        </div>

        <div className="timeline-list">
          {moments.map((moment, index) => (
            <article key={moment.title} className="timeline-card">
              <span className="timeline-number">0{index + 1}</span>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-heading compact">
          <p className="section-label">Gallery</p>
          <h2>Galeri bergerak otomatis biar terasa lebih hidup.</h2>
        </div>

        <div className="gallery-marquee">
          <div className="gallery-track">
            {[...gallery, ...gallery].map((item, index) => (
              <article key={`${item.title}-${index}`} className="gallery-card marquee-card">
              <div className="gallery-image">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="gallery-photo"
                />
                <span>{item.title}</span>
              </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reasons-section">
        <div className="section-heading compact">
          <p className="section-label">Alasan aku bersyukur</p>
          <h2>Hal-hal sederhana yang bikin sayangku berarti buat aku.</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article key={reason} className="reason-card">
              <div className="spark" />
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="motivation-section">
        <div className="motivation-card">
          <p className="section-label">Pesan kecil</p>
          <h2>Aku sayang kamu apa adanya, sayang, dan aku juga pengen kita sama-sama sehat.</h2>
          <p>
            Bukan soal harus berubah jadi orang lain, cuma soal pelan-pelan jaga
            diri biar badan lebih enak, pikiran lebih ringan, dan hari-hari juga
            terasa lebih nyaman.
          </p>
          <p>
            Kalau kamu mau, kita bisa jalaninnya bareng. Tidak perlu buru-buru,
            tidak perlu keras ke diri sendiri, cukup mulai dari hal kecil dan tetap
            saling dukung.
          </p>
        </div>
      </section>

      <section id="surat" className="letter-section">
        <div className="letter-card">
          <p className="section-label">Surat untuk sayangku</p>
          <h2>Terima kasih sudah tetap ada sampai di titik ini.</h2>
          <p>
            Terima kasih buat semua hal yang sudah kita lewatin sejauh ini.
            Terima kasih juga karena kamu tetap jadi orang yang enak diajak cerita,
            ketawa, dan jalanin banyak hal bareng.
          </p>
          <p>
            Di anniversary ini, aku cuma mau bilang kalau hubungan ini penting buat
            aku. Semoga ke depannya kita tetap bisa saling jaga, saling ngerti,
            dan terus bikin hubungan ini jadi tempat yang nyaman buat kita berdua.
          </p>
          <p className="signature">Untuk sayangku, dengan tulus.</p>
        </div>
      </section>
    </main>
  );
}
