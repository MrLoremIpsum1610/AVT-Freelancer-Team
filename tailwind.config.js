/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./../*.js"],
  darkMode:"class",
  theme: {
    extend: {
      fontSize:{
        'sm':'.875em',//14px
        'base':'1em',//16px
        'lg':'1.125em',//18px
        'xl':'1.25em',//20px
        '2xl':'1.5em',//24px
        '3xl':'1.875em',//30px
        '4xl':'2.25em',//36px
        '5xl':'3em',//48px
        '6xl':'4em',//64px
        '7xl':'5em',//80px
      },


      colors:{
        "main-color":"#05AFE6",
        'secondry-text': '#09BEAD',
        'Cshadow':'#60e9ff45',
        'Ctext':'#333333',
        'BGorange':'#F57F17',
        'BGgreen':'#09BEAD',
        'mainShadow':'#13b6ff3d',
        'BGviolet':'#8540FF',
      }
    },
    container :false,
    screens:{
      // Mobile MediaQueries
      'min2xl':{min:'1400px'},
      'minxl':{min:'1200px'},
      'minlg':{min:'992px'},
      'minmd':{min:'768px'},
      'minsm':{min:'576px'},
      'minssm':{min:'480px'},
      // Desktop MediaQueries
      '2xl':{max:'1400px'},
      'xl':{max:'1200px'},
      'lg':{max:'992px'},
      'md':{max:'768px'},
      'sm':{max:'576px'},
      'ssm':{max:'480px'},
    },
    fontFamily:{
      'pop-reg':'Poppins Regular',
      'pop-bold' : 'Poppins Bold',
      'pop-md' : 'Poppins Medium',
      'pop-black' : 'Poppins Black',
      'pop-semi' : 'Poppins SemiBold',

    },
    boxShadow: {
      'normal': '0 0px 45px 0px #13b6ff3d',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

