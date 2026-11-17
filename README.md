# №5 «Айгөлек» бөбекжай-бақшасы — лендинг

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · шрифт Nunito (cyrillic-ext для Ә Ғ Қ Ң Ө Ұ Ү Һ І).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Где что менять

| Что | Файл |
|---|---|
| Все тексты (казахский) | `src/content/kk.ts` |
| Телефон, БИН, координаты, WhatsApp, 2GIS | `src/content/site.ts` |
| Фото, документы, меню | `src/content/data.ts` |

- **Галерея**: положите фото в `public/gallery/` и добавьте в `galleryImages` (`src`, `width`, `height`, `alt`). Сетка, полноэкранный просмотр, стрелки, свайп и Esc включатся автоматически.
- **Документы**: PDF в `public/documents/`, запись в `documents` с полем `file`. Кнопки «Қарау» / «Жүктеу» появляются только при наличии файла.
- **Питание**: заполните `menu` — блок «Мәзір жақында жарияланады» заменится настоящим меню.
- **WhatsApp**: укажите `site.whatsapp` только для подтверждённого номера.
- **Карта 2GIS**: укажите `site.twoGis.firmId` (ID карточки организации в 2GIS — официальный виджет без ключа) **или** ключ MapGL в `.env.local`:
  `NEXT_PUBLIC_2GIS_KEY=ваш_ключ`. Без них показывается карточка с адресом и кнопкой «2GIS-те ашу».
- **Русская версия**: создайте `src/content/ru.ts` с типом `Dictionary` и добавьте его в `src/content/index.ts`.
