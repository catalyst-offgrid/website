# Homepage world map

The "Where We've Worked" map on the homepage is a dependency-free inline SVG.
Countries where Catalyst has worked are shaded **amber** (and are hover-interactive,
showing the country name); all other displayed countries are the **dark-blue** backdrop.

## Files

| File | Role |
|---|---|
| `src/components/WorldMap.astro` | Renders the SVG + hover tooltip + legend |
| `src/data/worldMap.ts` | **Auto-generated** country paths (Robinson projection) |
| `scripts/gen-map.mjs` | Generator that writes `worldMap.ts` |
| `scripts/map-src/global_south.geojson` | The 189 displayed countries (name + iso3 + geometry) |
| `scripts/map-src/intervention-iso3.json` | The iso3 codes of the countries to shade amber |

## How the colours are decided

A country is amber if its `iso3` is in `intervention-iso3.json`; otherwise it's blue.
So to add/remove a "worked" country, the usual case is just editing that JSON list and
re-running the generator — no GIS needed.

```bash
node scripts/gen-map.mjs
```

## Refreshing the source geometry from QGIS

The source is the QGIS project **`Map for site V2.qgz`** (Catalyst Team Drive →
`Communications/Website Update 2025/`), which references two GeoPackage layers next to it.
Regenerate the source files with GDAL (`ogr2ogr`), then run the generator:

```bash
# 189 displayed countries (simplified for the web)
ogr2ogr -f GeoJSON -select "name,iso3" -simplify 0.08 \
  scripts/map-src/global_south.geojson \
  "<Website Update 2025>/Global south_clip.gpkg"

# 47 intervention iso3 codes -> intervention-iso3.json
ogr2ogr -f CSV /vsistdout/ -select "iso3" \
  "<Website Update 2025>/Catalyst Intervention Countries_clip.gpkg"
# (dedupe the iso3 column into a JSON array)

node scripts/gen-map.mjs
```

Both layers share an identical schema (`name`, `iso3`, `continent`, `region`, …) and are
WGS84. The generator excludes any polygon ring that spans the antimeridian (none at
present) and drops Antarctica automatically because the source layer is already clipped
to ~53.5°N / 58.5°S.

## Notes / future

- Hover currently shows only the country name. The interactive `<path>` elements carry a
  `data-name` attribute and `role="button"`, so wiring them to project pages later is a
  small change in `WorldMap.astro`.
- Very small nations (Gambia, Haiti, Equatorial Guinea, Suriname, Rwanda, Burundi) render
  as their true polygons; if they ever need to be more visible, add small markers in the
  component rather than distorting the geometry.
