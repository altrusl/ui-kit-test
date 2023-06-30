# Vue 3 UI frameworks footprint comparison

UI component libraries are popular and handy in some cases, but they also have downsides. It's one thing when you make an admin panel and use dozens of components, it's another thing when you need only a couple of components. The question is - won't some particular UI library affect perfomance?

In this test we use three HTML elements - Button, Input and Select, and the results show how much js and css bundles would become if one of the 10 common UI libraries for Vue 3 is used

Codebase for each UI lib test is contained in a dedicated repo branch

*Environment: Node v18, Pnpm v8.3, Vue v3.2, Vite v4.3.9*

## Test results


| **UI lib** | **js (KB)** | **css (KB)** |
| --- | --- | --- | 
| Vue 3 & HTML | 52  | 0.2 |
| Vuetify 3 | 203 | 72  |
| Quasar | 178 | 201 |
| Primevue | 138 | 159 |
| Element Plus | 843 | 325 |
| Ant design | 1132 | 598 |
| Vant UI | 87  | 192 |
| Vuestic UI | 515 | 186 |
| Naive UI | 313.61 | 0.15 |
| Agnostic UI | 25.62 | 97.48 |
| Vanilla Components | 650 | 0.2 |


----

*Please give this investigation a star if you like it.*