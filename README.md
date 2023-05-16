# Just Party

A webapplication which is a place to organize and advertize public Just Dance parties.

## Contribuition guideline

### Run the project

You will need Node.js and npm package manager.

In the project's folder run these commands to start it:

```
npm i
npm run start
```

### For my friends

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
