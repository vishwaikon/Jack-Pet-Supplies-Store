// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '680px',
                                 // => @media (min-width: 640px) { ... }
  
        'md': '800px',
                                 // => @media (min-width: 768px) { ... }
  
        'lg': '1035px',
                                 // => @media (min-width: 1024px) { ... }
  
        'xl': '1100px',
                                // => @media (min-width: 1280px) { ... }
  
        '2xl': '1500px',
                               // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}