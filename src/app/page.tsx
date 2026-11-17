import { documents, galleryImages, getDictionary, menu } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Groups } from "@/components/sections/Groups";
import { Education } from "@/components/sections/Education";
import { Nutrition } from "@/components/sections/Nutrition";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  const t = getDictionary();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>
      <Header t={t} />
      <main id="main">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Groups t={t.groups} />
        <Education t={t.education} />
        <Nutrition t={t.nutrition} menu={menu} />
        <Gallery t={t.gallery} images={galleryImages} />
        <Documents t={t.documents} about={t.about} contacts={t.contacts} docs={documents} />
        <Contacts t={t.contacts} about={t.about} />
      </main>
      <Footer t={t} />
      <RevealObserver />
    </>
  );
}
