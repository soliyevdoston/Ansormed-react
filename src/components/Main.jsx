import React from "react";

export default function Main() {
  return (
    <div>
      <main>
        <section className="hero">
          <div
            className="contenir hero-container"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <div className="hero-content">
              <h2 className="hero-title">
                Tabiiy davrolash usullari yordamida kasalliklardan xalos
                bo’ling.
              </h2>
              <p className="hero-text">
                Hijoma, manual terapiya, wzuluk va turli tabiiy giyohlar eng
                ko’p uchraydigan kasalliklarni yengishda yordam beradi.
                Sog’ligingizni o’z ishining professionallariga ishonib
                topshiring.
              </p>
              <a className="orange-button" href="#">
                Qabulga yozilish
              </a>
            </div>
            <img
              className="hero-img"
              src="../../src/assets/hero-img.png"
              alt="python-book"
              height="510"
              width="510"
              data-aos-duration="1500"
              data-aos="fade-left"
            />
          </div>
        </section>

        <section className="why">
          <div
            className="contenir"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="why-title" data-aos="zoom-in-down">
              Xizmatlar
            </h1>

            <ul className="cards">
              <li className="card" data-aos="fade-down-right">
                <img
                  className="circle"
                  src="../../src/assets/image 1.jpg"
                  alt="Oson buyurtma qilish"
                />
                <div className="card-div">
                  <h2 className="card-title">Hijoma</h2>
                  <p className="card-text">
                    Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan
                    rivoyat qilgan hadisda rasululloh sallallohu alayhi va
                    sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng
                    yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy
                    hisobdagi oylar kunlaridir).
                  </p>
                </div>
              </li>

              <li
                className="card"
                data-aos="fade-down-right"
                data-aos-delay="100"
              >
                <img
                  className="circle"
                  src="../../src/assets/image 2.jpg"
                  alt="Eng sara kitoblar"
                />
                <div className="card-div">
                  <h2 className="card-title">Manual terapiya</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ac metus placerat, pellentesque enim ac, rhoncus
                    lectus. Maecenas et posuere lorem. Fusce sed massa sit amet
                    elit viverra hendrerit.
                  </p>
                </div>
              </li>

              <li
                className="card"
                data-aos="fade-down-right"
                data-aos-delay="200"
              >
                <img
                  className="circle"
                  src="../../src/assets/image 3.jpg"
                  alt="Tez yetkazib berish"
                />
                <div className="card-div">
                  <h2 className="card-title">Zuluk bilan davolash</h2>
                  <p className="card-text">
                    Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία
                    — «davolash») — ma’lum kasalliklarni dorivor zuluklar
                    (Hirudo medicinalis) yordamida davolash usuli.
                    Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi.
                    Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid
                    yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir
                    ko’rsatmaydi.
                  </p>
                </div>
              </li>

              <li
                className="card"
                data-aos="fade-down-right"
                data-aos-delay="300"
              >
                <img
                  className="circle"
                  src="../../src/assets/image 3 (2).jpg"
                  alt="Tez yetkazib berish"
                />
                <div className="card-div">
                  <h2 className="card-title">Tabiy dori vositalar</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ac metus placerat, pellentesque enim ac, rhoncus
                    lectus. Maecenas et posuere lorem. Fusce sed massa sit amet
                    elit viverra hendrerit.
                  </p>
                </div>
              </li>
            </ul>

            <div className="orange-ul">
              <a className="orange-button" href="#">
                Qabulga yozilish
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          {/* content */}
          <div
            className="cta-content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="cta-title" data-aos="fade-up-right">
              Qabuldan ro'yxatdan o'tish
            </h2>

            <div className="button-div">
              <a href="#" className="cta-button cta-buttonn">
                Qo'ng'iroq qilish
              </a>
              <a href="#" className="cta-button">
                Telegramdan yozish
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
