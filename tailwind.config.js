/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '380px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl' : '1500px'},
       
   extend: {
     colors:{
       'primaryclr': '#00ACEB',
       'secondaryclr': '#71CCF2',
       'thirdclr': '#B6E1F6',
       'slclr': '#00a8e7',
       'slclrhr': '#33bcef',

     },
     fontSize:{
      'headH1':'2.125rem',
      'headH2':'1.875rem',
      'headH3':'1.5rem',
      'headH4':'1.25rem',
      'headH5':'1.125rem',
      'headH6':'1rem',
     },
     fontFamily: {
       RedHatDisplayRegular:['Red-Hat-Display-Regular', 'sans-serif'],
       RedHatDisplayLight:['Red-Hat-Display-Light', 'sans-serif'],
       RedHatDisplayMedium:['Red-Hat-Display-Medium', 'sans-serif'],
       RedHatDisplaySemibold:['Red-Hat-Display-SemiBold', 'sans-serif'],
       RedHatDisplayBold:['Red-Hat-Display-Bold', 'sans-serif'],
       RedHatDisplayExtraBold:['Red-Hat-Display-Extrabold', 'sans-serif'],
       PoppinsLight:['Poppins-light', 'sans-serif'],
       PoppinsRegular:['Poppins-Regular', 'sans-serif'],
       PoppinsMedium:['Poppins-Medium', 'sans-serif'],
       PoppinsSemibold:['Poppins-Semibold', 'sans-serif'],
       PoppinsBold:['Poppins-Bold', 'sans-serif'],
     },
     backgroundImage: {
      'banner-bg1': "url('./assets/images/home/3sea1.jpg')",
      'banner-bg2': "url('./assets/images/home/3sea2.jpg')",
      'search-bg': "url('./assets/images/jobbs.webp')",
      'resume-bg': "url('./assets/images/resumebg.webp')",

    }
   },
  
 },
  plugins: [],
}