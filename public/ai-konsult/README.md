# Bilder för /ai-konsult

Lägg bildfilerna här så plockas de upp automatiskt vid nästa build
(annars visas en platshållare i deras ställe).

| Fil | Plats på sidan | Rekommenderad storlek | Innehåll |
|---|---|---|---|
| `feature.jpg` | Stor feature-bild under hero | ~1600×900 (16:9), liggande | Team, kontor eller atmosfärisk teknikbild. Används även som OG-bild vid delning. |
| `portrait.jpg` | "Varför Successifier" | ~800×800 eller stående 4:5 | Porträtt eller teambild |

Tips: optimera till webbvänlig storlek (helst < 300 KB). `.jpg`-namnen ovan
är hårdkodade i `src/app/ai-konsult/page.tsx` (`FEATURE_IMG` / `PORTRAIT_IMG`)
— byter du filändelse, uppdatera där.
