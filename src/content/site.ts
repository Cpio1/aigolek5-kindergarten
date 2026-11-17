/**
 * Тілге тәуелсіз, расталған деректер.
 * Осы файлдағы мәліметтерді тек ресми түрде расталған жағдайда ғана өзгертіңіз.
 */

export const site = {
  bin: "080740001979",
  foundedYear: 2008,
  groupsCount: 2,
  capacity: 50,
  ageFrom: 1,
  ageTo: 4,
  workDays: 5,

  phone: {
    display: "+7 713 345 45 21",
    href: "tel:+77133454521",
  },

  /**
   * WhatsApp тек расталған нөмір болғанда ғана қосылады.
   * Мысалы: { display: "+7 7XX XXX XX XX", number: "77XXXXXXXXX" }
   */
  whatsapp: null as null | { display: string; number: string },

  /**
   * 2GIS картасы. Біреуін көрсетсеңіз жеткілікті:
   * - firmId: ұйымның 2GIS карточкасының ID-і (2gis.kz/.../firm/<ID>) — кілтсіз ресми виджет;
   * - apiKey: 2GIS MapGL кілті (.env.local ішінде NEXT_PUBLIC_2GIS_KEY=...).
   * Екеуі де болмаса, «2GIS-те ашу» батырмасы бар безендірілген карточка көрсетіледі.
   */
  twoGis: {
    firmId: null as string | null,
    apiKey: process.env.NEXT_PUBLIC_2GIS_KEY ?? null,
  },

  /**
   * Бірлік ауылының координаттары (OpenStreetMap деректері бойынша).
   * Ғимараттың нақты нүктесі белгілі болса, осы мәндерді жаңартыңыз.
   */
  geo: {
    lat: 48.6030074,
    lon: 57.8957842,
    zoom: 15,
  },
} as const;

export const twoGisLink = `https://2gis.kz/?m=${site.geo.lon}%2C${site.geo.lat}%2F${site.geo.zoom}`;
