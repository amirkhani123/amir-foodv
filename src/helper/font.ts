import localFont from "next/font/local";

const font=localFont({
    src:[
        {
          path: '../../public/font/RedHatText-Regular.ttf',
          weight: '300',
          style: 'normal',
        }, {
          path: '../../public/font/RedHatText-SemiBold.ttf',
          weight: '400',
          style: 'normal',
        }, {
          path: '../../public/font/RedHatText-Bold.ttf',
          weight: '500',
          style: 'normal',
        }
      ]
})
export default font;