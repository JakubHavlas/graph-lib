# GeogebraLite
[Go to Installation section](#-installation)

## How it works?
My library was created as a project for technical school [here](https://www.prumyslovkaliberec.cz/) In time writing this I am in third grade. 
My library works in a way that it calculated around 10000 on set viewbox. Unfortunately my knowledge in maths so far wouldn't let me use better solution. There for the viewbox is set to max at width 200, because then the asymptote starts to break down. 

My solution to detecting asymptotes works in a way that it always checks if last calculated point was on other side of the viewport. Which is not exactly good solution, but it was the only one I could think of. Because I can't derivate.
### Library Controller
Use this component if you want easy setup. It wants viewbox expresion and movability.
(movability is not yet implemented). But when you put false user should not be able to move with viewbox.
### Picker
Use this component if you would like to build your very own libraryController. It wants expression (normalized) color and lastly expression data for partial computation. Last parameter is  optional.
It returns an svg g element.

## 📦 Installation&Run

1. npm install graph-lib
2. implement components to your code
3. you are done

## CSS variables
There will be css variables at one day.
