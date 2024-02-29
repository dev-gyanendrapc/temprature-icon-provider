# Weather Conditions Icons ☁️
***The Weather Conditions Icons npm package is a comprehensive collection of weather icons designed to enhance the visual representation of different weather conditions. This package simplifies the integration of weather icons into your web applications, providing a wide range of symbols that accurately depict various weather phenomena.***

## Instillations
    npm install weather-conditions-icons
## Usage
#### **HTML or JavaScript projects.**
With the Weather Conditions Icons package, you can easily integrate weather icons into your HTML or JavaScript projects. Here's a basic example using core JavaScript:
    const weatherIcons = require('weather-conditions-icons');

    // Test for getting the default icon
    const defaultIcon = weatherIcons.getDefaultIcon();
    console.log('Default Icon:', defaultIcon);

    // Get the default icon
    const defaultIcon = weatherIcons.getDefaultIcon();
    console.log('Default Icon:', defaultIcon);

    // Get an icon by name
    const iconByName = weatherIcons.getIconByName('set-1', 'Thunderstorm with light rain');
    console.log('Icon by Name:', iconByName);

    // Get an icon by command
    const iconByCommand = weatherIcons.getIconByCommand('set-2', 'thunderstorm_with_light_rain');
    console.log('Icon by Command:', iconByCommand);

#### **In React**
    import React from 'react';
    import weatherIcons from 'weather-conditions-icons';

    const WeatherComponent = ({ condition }) => {
        // Get the default icon
        const defaultIcon = weatherIcons.getDefaultIcon();

        // Get an icon by name
        const iconByName = weatherIcons.getIconByName('set-1', 'Thunderstorm with light rain');

        // Get an icon by command
        const iconByCommand = weatherIcons.getIconByCommand('set-2', 'thunderstorm_with_light_rain');

        return (
            <div>
                <img src={defaultIcon} alt="Default Icon" />
                <img src={iconByName} alt="Icon One" />
                <img src={iconByCommand} alt="Icon Three" />
            </div>
        );
    };

    export default WeatherComponent;

#### **In Vue**
    <template>
    <div>
        <!-- Get the default icon -->
        <img :src="weatherIcons.getDefaultIcon()" alt="Default Icon" />

        <!-- Get an icon by name -->
        <img :src="weatherIcons.getIconByName('set-2', 'Thunderstorm with light rain')" alt="Icon One" />

        <!-- Get an icon by command -->
        <img :src="weatherIcons.getIconByCommand('set-1', 'thunderstorm_with_light_rain')" alt="Icon Three" />
    </div>
    </template>

    <script>
    import weatherIcons from 'weather-conditions-icons';

        export default {
            data() {
                return {
                    weatherIcons,
                };
            },
        };
    </script>

#### **In Angular**
    // app.component.ts
    import { Component } from '@angular/core';
    import weatherIcons from 'your-package-name';

    @Component({
    selector: 'app-root',
    template: `
        <div>
        <!-- Get the default icon -->
        <img [src]="weatherIcons.getDefaultIcon()" alt="Default Icon" />

        <!-- Get an icon by name -->
        <img [src]="weatherIcons.getIconByName('set-1', 'Thunderstorm with light rain')" alt="Icon One" />

        <!-- Get an icon by command -->
        <img [src]="weatherIcons.getIconByCommand('set-2', 'thunderstorm_with_light_rain')" alt="Icon Three" />
        </div>
    `,
    })
    export class AppComponent {
        weatherIcons = weatherIcons;
    }


## Icons 😊
### 1. Thunderstorm
	1. thunderstorm with light rain
	2. thunderstorm with rain
	3. thunderstorm with heavy rain
	4. light thunderstorm
	5. thunderstorm
	6. heavy thunderstorm
	7. ragged thunderstorm
	8. thunderstorm with light drizzle
	9. thunderstorm with drizzle
	10. thunderstorm with heavy drizzle

#### SET-1 (Thunderstorm).
-----------------------------------------------------------------------

| Sno | Name                        | Command                        | Icon                                                        |
|-----|-----------------------------|--------------------------------|-------------------------------------------------------------|
| 1   | Thunderstorm with light rain| thunderstorm_with_light_rain    | <img src="icons/set-1/thunderstorm_with_light_rain.webp" width="26">    |
| 2   | Thunderstorm with rain      | thunderstorm_with_rain          | <img src="icons/set-1/thunderstorm_with_rain.webp" width="26">          |
| 3   | Thunderstorm with heavy rain | thunderstorm_with_heavy_rain     | <img src="icons/set-1/thunderstorm_with_heavy_rain.webp" width="26">     |
| 4   | Light thunderstorm          | light_thunderstorm              | <img src="icons/set-1/light_thunderstorm.webp" width="26">              |
| 5   | Thunderstorm                | thunderstorm                    | <img src="icons/set-1/thunderstorm.webp" width="26">                    |
| 6   | Heavy thunderstorm          | heavy_thunderstorm              | <img src="icons/set-1/heavy_thunderstorm.webp" width="26">              |
| 7   | Ragged thunderstorm         | ragged_thunderstorm             | <img src="icons/set-1/ragged_thunderstorm.webp" width="26">             |
| 8   | Thunderstorm with light drizzle | thunderstorm_with_light_drizzle | <img src="icons/set-1/thunderstorm_with_light_drizzle.webp" width="26"> |
| 9   | Thunderstorm with drizzle   | thunderstorm_with_drizzle       | <img src="icons/set-1/thunderstorm_with_drizzle.webp" width="26">       |
| 10  | Thunderstorm with heavy drizzle | thunderstorm_with_heavy_drizzle | <img src="icons/set-1/thunderstorm_with_heavy_drizzle.webp" width="26"> |


### 2. Drizzle
    1. light intensity drizzle
    2. drizzle
    3. heavy intensity drizzle
    4. light intensity drizzle rain
    5. drizzle rain
    6. heavy intensity drizzle rain
    7. shower rain and drizzle
    8. heavy shower rain and drizzle
    9. shower drizzle

#### SET-1 (Drizzle).
-----------------------------------------------------------------------

| Sno | Name                         | Command                         | Icon                                                        |
|-----|------------------------------|---------------------------------|-------------------------------------------------------------|
| 1   | Light intensity drizzle      | light_intensity_drizzle         | <img src="icons/set-1/light_intensity_drizzle.webp" width="26"> |
| 2   | Drizzle                      | drizzle                         | <img src="icons/set-1/drizzle.webp" width="26">               |
| 3   | Heavy intensity drizzle      | heavy_intensity_drizzle         | <img src="icons/set-1/heavy_intensity_drizzle.webp" width="26"> |
| 4   | Light intensity drizzle rain | light_intensity_drizzle_rain    | <img src="icons/set-1/light_intensity_drizzle_rain.webp" width="26"> |
| 5   | Drizzle rain                 | drizzle_rain                    | <img src="icons/set-1/drizzle_rain.webp" width="26">          |
| 6   | Heavy intensity drizzle rain | heavy_intensity_drizzle_rain    | <img src="icons/set-1/heavy_intensity_drizzle_rain.webp" width="26"> |
| 7   | Shower rain and drizzle      | shower_rain_and_drizzle         | <img src="icons/set-1/shower_rain_and_drizzle.webp" width="26"> |
| 8   | Heavy shower rain and drizzle | heavy_shower_rain_and_drizzle    | <img src="icons/set-1/heavy_shower_rain_and_drizzle.webp" width="26"> |
| 9   | Shower drizzle               | shower_drizzle                  | <img src="icons/set-1/shower_drizzle.webp" width="26">        |

### 3. Rain
    1. light rain
    2. moderate rain
    3. heavy intensity rain
    4. very heavy rain
    5. extreme rain
    6. freezing rain
    7. light intensity shower rain
    8. shower rain
    9. heavy intensity shower rain
    10. ragged shower rain
#### SET-1 (Rain).
-----------------------------------------------------------------------

| Sno | Name                        | Command                        | Icon                                                        |
|-----|-----------------------------|--------------------------------|-------------------------------------------------------------|
| 1   | Light rain                  | light_rain                      | <img src="icons/set-1/light_rain.webp" width="26">           |
| 2   | Moderate rain               | moderate_rain                   | <img src="icons/set-1/moderate_rain.webp" width="26">        |
| 3   | Heavy intensity rain        | heavy_intensity_rain            | <img src="icons/set-1/heavy_intensity_rain.webp" width="26"> |
| 4   | Very heavy rain             | very_heavy_rain                 | <img src="icons/set-1/very_heavy_rain.webp" width="26">      |
| 5   | Extreme rain                | extreme_rain                    | <img src="icons/set-1/extreme_rain.webp" width="26">         |
| 6   | Freezing rain               | freezing_rain                   | <img src="icons/set-1/freezing_rain.webp" width="26">        |
| 7   | Light intensity shower rain | light_intensity_shower_rain      | <img src="icons/set-1/light_intensity_shower_rain.webp" width="26"> |
| 8   | Shower rain                 | shower_rain                     | <img src="icons/set-1/shower_rain.webp" width="26">          |
| 9   | Heavy intensity shower rain | heavy_intensity_shower_rain      | <img src="icons/set-1/heavy_intensity_shower_rain.webp" width="26"> |
| 10  | Ragged shower rain          | ragged_shower_rain               | <img src="icons/set-1/ragged_shower_rain.webp" width="26">   |

### 4. Snow
    1. light snow
    2. snow
    3. heavy snow
    4. sleet
    5. light shower sleet
    6. shower sleet
    7. light rain and snow
    8. rain and snow
    9. light shower snow
    10. shower snow
    11. heavy shower snow
#### SET-1 (Snow).
-----------------------------------------------------------------------

| Sno | Name                   | Command                 | Icon                                                      |
|-----|------------------------|-------------------------|-----------------------------------------------------------|
| 1   | Light snow             | light_snow              | <img src="icons/set-1/light_snow.webp" width="26">         |
| 2   | Snow                   | snow                    | <img src="icons/set-1/snow.webp" width="26">               |
| 3   | Heavy snow             | heavy_snow              | <img src="icons/set-1/heavy_snow.webp" width="26">         |
| 4   | Sleet                  | sleet                   | <img src="icons/set-1/sleet.webp" width="26">              |
| 5   | Light shower sleet     | light_shower_sleet      | <img src="icons/set-1/light_shower_sleet.webp" width="26"> |
| 6   | Shower sleet           | shower_sleet            | <img src="icons/set-1/shower_sleet.webp" width="26">       |
| 7   | Light rain and snow    | light_rain_and_snow     | <img src="icons/set-1/light_rain_and_snow.webp" width="26">|
| 8   | Rain and snow          | rain_and_snow           | <img src="icons/set-1/rain_and_snow.webp" width="26">      |
| 9   | Light shower snow      | light_shower_snow       | <img src="icons/set-1/light_shower_snow.webp" width="26">  |
| 10  | Shower snow            | shower_snow             | <img src="icons/set-1/shower_snow.webp" width="26">        |
| 11  | Heavy shower snow      | heavy_shower_snow       | <img src="icons/set-1/heavy_shower_snow.webp" width="26">  |

### 5. Atmosphere
    1. mist
    2. smoke
    3. haze
    4. sand_dust whirls
    5. fog
    6. sand
    7. dust
    8. volcanic ash
    9. squalls
    10. tornado
#### SET-1 (Atmosphere).
-----------------------------------------------------------------------

| Sno | Name                 | Command             | Icon                                              |
|-----|----------------------|---------------------|---------------------------------------------------|
| 1   | Mist                 | mist                | <img src="icons/set-1/mist.webp" width="26">       |
| 2   | Smoke                | smoke               | <img src="icons/set-1/smoke.webp" width="26">      |
| 3   | Haze                 | haze                | <img src="icons/set-1/haze.webp" width="26">       |
| 4   | Sand/dust whirls     | sand_dust_whirls    | <img src="icons/set-1/sand_dust_whirls.webp" width="26"> |
| 5   | Fog                  | fog                 | <img src="icons/set-1/fog.webp" width="26">        |
| 6   | Sand                 | sand                | <img src="icons/set-1/sand.webp" width="26">       |
| 7   | Dust                 | dust                | <img src="icons/set-1/dust.webp" width="26">       |
| 8   | Volcanic ash         | volcanic_ash        | <img src="icons/set-1/volcanic_ash.webp" width="26"> |
| 9   | Squalls              | squalls             | <img src="icons/set-1/squalls.webp" width="26">    |
| 10  | Tornado              | tornado             | <img src="icons/set-1/tornado.webp" width="26">    |

### 6. Clear
    1. clear sky
#### SET-1 (Clear).
-----------------------------------------------------------------------

| Sno | Name         | Command  | Icon                                          |
|-----|--------------|----------|-----------------------------------------------|
| 1   | Clear sky    | clear_sky | <img src="icons/set-1/clear_sky.webp" width="26"> |


### 7. Clouds
    1. few clouds: 11-25%
    2. scattered clouds: 25-50%
    3. broken clouds: 51-84%
    4. overcast clouds: 85-100%
#### SET-1 (Clouds).
-----------------------------------------------------------------------

| Sno | Name                        | Command            | Icon                                                |
|-----|-----------------------------|--------------------|-----------------------------------------------------|
| 1   | Few clouds: 11-25%          | few_clouds         | <img src="icons/set-1/few_clouds.webp" width="26">   |
| 2   | Scattered clouds: 25-50%    | scattered_clouds   | <img src="icons/set-1/scattered_clouds.webp" width="26"> |
| 3   | Broken clouds: 51-84%       | broken_clouds      | <img src="icons/set-1/broken_clouds.webp" width="26"> |
| 4   | Overcast clouds: 85-100%    | overcast_clouds    | <img src="icons/set-1/overcast_clouds.webp" width="26"> |

