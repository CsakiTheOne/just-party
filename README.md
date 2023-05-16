# Just Party

A hungarian webapplication which is a place to organize and advertize public Just Dance parties.

/

Egy webalkalmazás, amely egy helyként szolgál Just Dance bulik szervezésére és reklámozására.

## Contribuition guideline / Hozzájárulási irányelv

### A projekt futtatása

Ami kell a gépedre:

- Node.js
- npm csomagkezelő

A projekt mappájában add ki ezeket a parancsokat a futtatáshoz:

A követelmények telepítése (ezt nem kell minden alkalommal kiadni indításhoz, csak ha változott a package.json tartalma vagy épp letöltötted a projektet):

```
npm install
```

Futtatás:

```
npm run start
```

### Barátoknak

Sziasztok! Ha szeretnétek a projektben segíteni vagy valamit hozzátenni akkor van számotokra pár dolog,
amiket tudtok, még ha nem is foglalkoztatok a React-tel vagy a PWA-kkal.

#### Frontend finomítások

Ha megy a React valamennyire, nyugodtan írj a kódba és a `style` paraméterekbe,
viszont ha nem, a [Theme.js](./src/theme/Theme.ts) fájlban kísérletezhetsz.
Igyekszem a projekt során oda több változót rakni és minél több helyen használni azokat,
hogy nektek több lehetőségetek legyen a testreszabásra.

#### Zene lista befejezése

Itt található a zene lista: [fájl megnyitása](./src/static/songs.json)

Ezt jó lenne befejezni, hogy a felhasználók meg tudják nézni a választható zenéket buli előtt. A zenéket ilyen formában kell megadni:

```json
{
    "Játék neve": [
        {
            "title": "Zene címe",
            "artist": "Előadó vagy előadók neve"
        },
        {
            "title": "Másik zene címe",
            "artist": "Előadó vagy előadók neve"
        }
    ],
    "Just Dance 2022": [
        {
            "title": "Bainia",
            "artist": "Bakermat"
        },
        {
            "title": "Believer",
            "artist": "Imagine Dragons"
        },
        ...
    ]
}
```
