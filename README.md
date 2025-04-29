# 📊 GeogebraLite

A lightweight React graphing library made as a school project.  
[📦 Go to Installation & Run](#-installation--run)  
[📖 Go to How It Works](#how-it-works)  
[🎛️ Go to Library Controller](#library-controller)  
[🎨 Go to Picker](#picker)  

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
- `viewbox expression`
- `movability` (not yet implemented — if set to `false`, users shouldn't be able to move the viewbox, though this feature is pending.)

---

## 🎨 Picker

Use this component if you want to build your own custom controller.  
It requires:
- `expression` (normalized)
- `color`
- `expression data` (for partial computation — optional)

It returns an SVG `<g>` element containing your graph.

---

## 📦 Installation & Run

1. `npm install graph-lib`
2. Import components into your code.
3. Done!

---

## 🎨 CSS Variables

**Coming soon** — customizable CSS variables for styling.

---

