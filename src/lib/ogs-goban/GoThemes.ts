/*
 * Copyright 2012-2017 Online-Go.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import GoTheme from "./GoTheme";
import init_board_plain from "./themes/board_plain";
import init_board_woods from "./themes/board_woods";
import init_disc from "./themes/disc";
import init_rendered from "./themes/rendered_stones";

export const GoThemes = {
    white: {} as any,
    black: {} as any,
    board: {} as any,
};

export const ThemeNames = Object.freeze({
    Plain: "Plain",
    NightPlay: "Night Play",
    HNG: "HNG",
    HNGNight: "HNG Night",
    Book: "Book",
    Kaya: "Kaya",
    RedOak: "Red Oak",
    Persimmon: "Persimmon",
    BlackWalnut: "Black Walnut",
    Granite: "Granite",
    Shell: "Shell",
    Glass: "Glass",
    WornGlass: "Worn Glass",
    Night: "Night",
    Slate: "Slate",
});

// Shell has no custom color yet, need to figure out how to make the colors work with the lines property
export const DefaultThemeColors = Object.freeze({
    [ThemeNames.WornGlass]: {
        black: "rgb(15,0,20)",
        white: "rgb(189,189,194)",
    },
    [ThemeNames.Night]: {
        black: "rgb(15,15,20)",
        white: "rgb(100,100,100)",
    },
    [ThemeNames.Slate]: {
        black: "rgb(30,30,35)",
    },
    [ThemeNames.Glass]: {
        black: "rgb(15,15,20)",
        white: "rgb(0,205,206)",
    },
});

init_board_plain(GoThemes);
init_board_woods(GoThemes);
init_disc(GoThemes);
init_rendered(GoThemes);


function theme_sort(a, b) {
    return a.sort - b.sort;
}

for (let k in GoThemes) {
    GoThemes[k].sorted = Object.keys(GoThemes[k]).map((n) => {
        GoThemes[k][n].theme_name = n;
        return GoThemes[k][n];
    });
    GoThemes[k].sorted.sort(theme_sort);
}
