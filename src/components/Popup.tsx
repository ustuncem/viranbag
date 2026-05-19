import { useState } from "preact/hooks";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleChildWrapperClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <button
        class="bg-primary hover:text-primary hover:border-primary my-2 cursor-pointer rounded-full border px-6 py-2 text-xl text-white transition-colors hover:bg-white"
        onClick={handleOpen}
      >
        Loca Bilgileri
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 grid cursor-pointer place-items-center bg-black/40 px-4"
          onClick={handleOpen}
        >
          <article
            className="relative z-20 mx-auto w-full max-w-sm cursor-default bg-white p-4 lg:max-w-lg"
            onClick={handleChildWrapperClick}
          >
            <h1 className="text-primary-500 mb-4 flex items-center justify-end text-lg sm:text-xl">
              <button onClick={handleOpen}>
                <img className="w-4" src="/assets/icons/close.svg" />
              </button>
            </h1>
            <div>
              <p className="mb-4 justify-between text-center text-3xl font-semibold">
                LOCA <span className="font-light"></span>
              </p>
              <ul className="mb-2 list-inside p-2 marker:text-neutral-300">
                <li className="border-primary-light mb-2 flex justify-between gap-6 border-b pb-2">
                  <div className="text-xl">
                    KİŞİ BAŞI HARCAMA LİMİTİ /{" "}
                    <span className="font-semibold">HAFTA İÇİ</span>
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold text-nowrap">4.500 TL</span>
                  </div>
                </li>
                <li className="border-primary-light mb-2 flex justify-between gap-6 border-b pb-2">
                  <div className="text-xl">
                    KİŞİ BAŞI HARCAMA LİMİTİ /{" "}
                    <span className="font-semibold">HAFTA SONU</span>
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold text-nowrap">5.000 TL</span>
                  </div>
                </li>
              </ul>
              <p className="mb-3 text-center text-lg">
                Loca kapasitesi en fazla 6 kişi ile sınırlıdır.
              </p>
              <p className="text-primary-500 text-center text-base font-light">
                Fiyatlarımıza giriş ücreti ve shuttle hizmetimiz dahildir.
              </p>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
