# Vue 3 UI frameworks footprint comparison

UI component libraries are popular and handy in some cases, but they also have downsides. It's one thing when you make an admin panel and use dozens of components, it's another thing when you need only a couple of components. The question is - won't some particular UI library affect perfomance?

In this test we use three HTML elements - Button, Input and Select, and the results show how much js and css bundles would become if one of the 10 common UI libraries for Vue 3 is used

Codebase for each UI lib test is contained in a dedicated repo branch

*Environment: Node v18, Pnpm v8.3, Vue v3.2, Vite v4.3.9*

## Test results


| **UI lib** | **js (KB)** | **css (KB)** | **GitHub stars (K)** |
| --- | --- | --- | ---|
| Vue 3 & HTML | 52  | 0.2 | |
| Vuetify 3 | 203 | 72  | 37.4|
| Quasar | 178 | 201 | 23.8 |
| PrimeVue | 138 | 159 | 3.9 |
| Element Plus | 843 | 325 | 20.4 |
| Ant Design for Vue | 1132 | 598 | 18.3 |
| Vant UI | 87  | 192 | 21.5 |
| Vuestic UI | 515 | 186 | 2.9 |
| Naive UI | 313.61 | 0.15 | 13 |
| Agnostic UI | 25.62 | 97.48 | 0.64 |
| Vanilla Components | 650 | 0.2 | 0.15 |


----


*Please give this investigation a star if you like it.*