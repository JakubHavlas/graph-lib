# 📊 GeogebraLite

A lightweight React graphing library made as a school project.  
[❓ When to use?](#-when-to-use)

[📖 Go to How It Works](#-how-it-works)  

[📈Library Controller](#-library-controller)

[🎨 Go to Picker](#-picker)  

[📦 Go to Installation & Run](#-installation--run)  

---
## :accessibility: When to use?
✅ when you want to setup smaller graph function tool 

❌ When you wanna precise efficient tool to calculate huge viewports



---

## 📖 How It Works

This library was created as a personal project for technical school — [Průmyslovka Liberec](https://www.prumyslovkaliberec.cz/).  
At the time of writing, I’m in my third year.

The library works by calculating around **10,000 points** within a set SVG viewbox to plot graphs. Unfortunately, my current math knowledge doesn't allow for more advanced solutions (like using derivatives), so the **viewbox width is capped at 200** — otherwise, asymptotes start causing rendering issues.

### ⚠️ Asymptote Detection

My method for detecting asymptotes checks whether the last calculated point was on the opposite side of the viewport from the current one. It's a basic but workable solution given the limitations — improvements are on the roadmap.

---

## 🎛️ Library Controller

Use this component for a simple setup.  
It requires:
- `reqs` array of valid expressions and their colors
```ts
export type reqs = {
  expression: string;
  color: string;
};
```
optional params:
- `params` default viewbox it doesn't really matter if movable is set to true.
- `moveable` if user can move and zoom the svg
- `minWidth` smallest possible viewbox width
- `maxWidth` highest possible viewbox width
- `displayCoords` if you want to display coords of mouse on hovering
- `displayGrid` if you wanna display all the helping lines
here is the function header and all the defaul values.
```ts
let LibraryController = ({
  reqs,
  params = { x: -2, y: -2, width: 4, height: 4 },
  moveable = true,
  minWidth = 0.001,
  maxWidth = 200,
  displayCoords = true,
  displayGrid = true,
}: {
  reqs: reqs[];
  params?: ViewBox;
  moveable?: boolean;
  minWidth?: number;
  maxWidth?: number;
  displayCoords?: boolean;
  displayGrid?: boolean;
}) => { ... }

```
---

## 🎨 Picker

Use this component if you want to build your own custom controller.  
It requires:
- `FunctionData[]` patharray is optional
```ts
export type FunctionData = {
  id: number;
  color: string;
  expression: string[];
  pathArray: coords[][];
};
```
```ts
export type coords = {
  x: number;
  y: number;
};
```
Optional:
- `viewbox`


It returns an SVG `<g>` element containing your graph.

---

## 📦 Installation & Run

1. `npm install graph-lib`
2. Import GraphLibrary into your code. 
```ts
export type reqs = {
  expression: string;
  color: string;
};
```
3. fill ^ this is the import data. 
4. Done!

---

## 🎨 CSS Variables

This library uses CSS custom properties (variables) to easily customize the appearance of graphs and UI elements. You can override these variables in your own stylesheets to match your project's design system or preferences.

```css

:root {
  --background-color: #e2e2e2;
  --text-color: #121212;
  --font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  --line-height: 1.5;
  --font-weight: 400;
  --color-scheme: light dark;
  --color: rgba(0, 0, 0, 0.87); 
  --font-synthesis: none;
  --text-rendering: optimizeLegibility;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  --hover-color: #1d24af;
  --input-background-color: #b9b9b9;
  
  font-family: var(--font-family);
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  color: var(--color);
  background-color: var(--background-color-light);
  color-scheme: var(--color-scheme);
  font-synthesis: var(--font-synthesis);
  text-rendering: var(--text-rendering);
  -webkit-font-smoothing: var(--webkit-font-smoothing);
  -moz-osx-font-smoothing: var(--moz-osx-font-smoothing);


  --graph-background-color: #f0f0f0;
  --graph-text-color: #000000;
  --graph-axes-color: #000000;
  --graph-HelpLines-color: #d0d0d0;
}

@media (prefers-color-scheme: dark) {
  :root {
      --graph-HelpLines-color: #504d4d;
      --input-background-color: #414141;
      --background-color: #242424;
      --text-color: #e2e2e2;
      --color: rgba(255, 255, 255, 0.87); 
      --graph-axes-color: #ffffff;
      --graph-text-color: #ffffff;
      background-color: var(--background-color);
      color: var(--text-color);
  }
}



```
---

