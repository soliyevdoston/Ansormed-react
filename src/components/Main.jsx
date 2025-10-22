import React from "react";
import heroImg from "../assets/hero-img.png";
import img1 from "../assets/image 1.jpg";
import img2 from "../assets/image 2.jpg";
import img3 from "../assets/image 3.jpg";
import img4 from "../assets/image 3 (2).jpg";

export default function Main() {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="contenir hero-container">
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
              src={heroImg}
              alt="python-book"
              height="510"
              width="510"
            />
          </div>
        </section>

        <section className="why">
          <div className="contenir">
            <h1 className="why-title">Xizmatlar</h1>

            <ul className="cards">
              <li className="card">
                <img className="circle" src={img1} alt="Oson buyurtma qilish" />
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

              <li className="card">
                <img className="circle" src={img2} alt="Eng sara kitoblar" />
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

              <li className="card">
                <img className="circle" src={img3} alt="Tez yetkazib berish" />
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

              <li className="card">
                <img className="circle" src={img4} alt="Tez yetkazib berish" />
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
        <section className="cta">
          <div className="cta-content">
            <h2 className="cta-title">Qabuldan ro'yxatdan o'tish</h2>

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
