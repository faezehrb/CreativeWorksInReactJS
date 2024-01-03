//import { Fragment } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import './souls.css';
import { Fragment } from 'react';
//import { useGSAP } from "@gsap/react";

const Soul4 = () => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.fromTo(".soul4",{
        width:100,
        opacity: 0,
        repeat: 0
    }, {
        width:250,
        duration: 7,
        opacity: 0.2,
        scrollTrigger: "#soul4",
        repeat: 0,
        x: 200,
        repeatDelay: 1000000000,
        immediateRender: true,
        yoyo: true,
        ease: "power1.inOut"
        // motionPath:{
        //   alignOrigin: [0.5, 0.5],
        //   width:200,
        //   opacity: 0.2,
        //   repeat: 0
        // }
      });
    return( 
        <Fragment >
            {/* <svg id="svg" width="1636" height="368" viewBox="0 0 1636 368" fill="none">
                <path id="path4" d="M1635.36 131.762C1411.77 711.859 410.508 39.7069 0.999975 0.999986" stroke="black"/>
            </svg> */}
            <svg id='soul4' className='soul4' width="397" height="496" viewBox="0 0 397 496" fill="none">
                <g clipPath="url(#clip0_1_2)">
                <path d="M31.5227 230.232C27.2378 231.025 22.8699 231.273 18.5227 230.972C15.7048 230.817 12.9119 230.357 10.1927 229.602C8.83031 229.313 7.5762 228.648 6.57272 227.682C12.9427 222.242 22.5727 225.822 29.3527 229.162L31.5227 230.232Z" fill="#C2CAC2"/>
                <path d="M396.183 180.522C396.309 179.833 396.177 179.121 395.813 178.522C395.753 177.926 395.516 177.362 395.133 176.902C387.035 167.231 380.398 156.427 375.433 144.832C372.975 138.983 370.933 132.968 369.323 126.832C367.793 121.132 366.403 115.332 363.643 110.072C353.693 91.0721 326.593 90.7721 313.953 107.072C308.523 114.072 305.953 122.192 304.473 130.662C301.431 131.812 298.095 131.924 294.983 130.982C291.943 130.023 289.304 128.09 287.473 125.482C287.167 125.027 286.746 124.661 286.253 124.422C281.813 108.042 279.253 91.0321 275.183 74.6221C269.303 51.2621 259.323 26.8921 239.283 12.2121C218.523 -3.00792 190.743 -3.04792 167.813 7.02208C143.813 17.5521 126.593 39.3921 116.373 62.9321C106.523 85.6921 102.803 110.182 101.043 134.802C100.882 135.051 100.755 135.32 100.663 135.602C100.583 135.812 100.533 135.992 100.463 136.182C100.393 136.372 100.283 136.632 100.283 136.632C100.083 137.102 99.8527 137.582 99.6227 138.052C99.1827 138.902 98.7227 139.742 98.2127 140.542C97.9327 140.962 97.6527 141.412 97.3427 141.842C97.3427 141.912 97.3427 141.842 97.2627 141.942L97.1627 142.072C97.0027 142.262 96.8527 142.472 96.6727 142.682C96.0535 143.451 95.3855 144.179 94.6727 144.862C94.3327 145.212 93.9927 145.532 93.6727 145.862C93.4627 146.022 93.2827 146.212 93.0827 146.372C92.974 146.452 92.8705 146.539 92.7727 146.632C92.0127 147.222 91.2127 147.762 90.4027 148.272C89.5927 148.782 88.6927 149.272 87.7827 149.702L87.2027 149.942C87.063 150.02 86.9156 150.084 86.7627 150.132C86.2927 150.322 85.7627 150.492 85.3027 150.652C85.1427 150.707 84.9858 150.77 84.8327 150.842C82.5127 146.262 80.7527 141.152 77.8327 137.182C71.3627 128.412 60.9127 127.572 51.0127 130.342C40.874 133.189 31.9307 139.245 25.5227 147.602C18.0027 157.442 15.6927 169.352 13.4527 181.212C10.6124 196.441 6.18147 211.329 0.232727 225.632C0.0099515 226.144 -0.054811 226.71 0.0467527 227.259C0.148316 227.808 0.411571 228.314 0.802727 228.712C0.895023 228.895 1.01288 229.063 1.15273 229.212C3.64273 234.602 10.8227 235.652 16.1527 236.212C23.5415 237.03 31.0192 236.374 38.1527 234.282C38.4666 234.191 38.7662 234.056 39.0427 233.882C39.1581 233.848 39.2665 233.794 39.3627 233.722C40.3627 234.122 41.4727 234.502 42.5527 234.832C42.6231 235.068 42.724 235.293 42.8527 235.502C47.1527 242.442 54.7227 245.402 62.1527 247.782C63.0229 260.235 62.9727 272.736 62.0027 285.182C61.7683 285.489 61.6182 285.851 61.5673 286.233C61.5164 286.616 61.5666 287.005 61.7127 287.362C63.5698 293.108 66.7285 298.347 70.9427 302.672C74.2127 306.012 78.1327 308.392 82.1227 310.722C85.5631 322.924 88.0703 335.37 89.6227 347.952C89.4288 348.381 89.3462 348.853 89.3827 349.322C89.8627 357.322 95.3827 363.582 102.383 367.072C107.383 369.542 112.733 370.382 118.173 370.742C118.163 370.909 118.163 371.076 118.173 371.242C120.507 380.773 121.741 390.54 121.853 400.352C121.866 400.753 121.97 401.146 122.157 401.501C122.344 401.857 122.609 402.164 122.933 402.402C125.003 409.222 131.543 413.662 138.163 415.822C146.833 418.652 157.473 417.972 164.513 424.552C165.765 425.713 166.739 427.142 167.363 428.732C167.354 429.206 167.486 429.673 167.743 430.072C168.413 432.652 168.323 435.462 168.523 438.472C168.804 442.608 170.128 446.606 172.373 450.092C174.528 453.398 177.234 456.31 180.373 458.702C179.413 470.035 178.463 481.389 177.523 492.762C177.303 495.442 181.643 496.552 182.703 494.052C185.113 488.242 191.073 485.352 195.233 480.962C198.333 477.692 200.543 473.122 200.083 468.692C202.283 463.69 205.373 459.129 209.203 455.232C213.363 451.112 218.203 448.392 223.273 445.562C227.353 443.272 231.513 440.662 234.103 436.642C237.593 431.212 236.293 425.252 235.603 419.252C235.429 417.819 235.399 416.372 235.513 414.932C235.588 414.686 235.629 414.43 235.633 414.172V413.932C237.173 403.152 247.633 396.792 257.633 392.782C268.473 388.432 281.353 384.932 286.903 373.552C289.213 368.822 290.133 363.352 291.283 358.032C291.719 357.569 291.965 356.958 291.973 356.322C291.973 355.822 291.973 355.322 292.023 354.852C293.193 350.292 294.783 346.002 297.953 342.492C298.526 342.324 299.028 341.973 299.383 341.492C309.993 328.332 302.243 311.132 303.383 296.142C304.023 287.872 308.293 282.142 315.073 277.742C320.863 273.912 327.163 270.822 331.943 265.662C331.943 265.662 332.013 265.582 332.043 265.532C332.352 265.278 332.602 264.959 332.775 264.598C332.947 264.237 333.039 263.842 333.043 263.442C333.376 255.282 333.709 247.122 334.043 238.962L334.903 238.632C345.473 235.232 358.743 236.632 366.203 226.762C366.631 226.218 366.879 225.554 366.913 224.862C367.257 224.51 367.509 224.078 367.646 223.606C367.784 223.133 367.803 222.634 367.703 222.152C366.513 216.012 365.323 209.892 364.133 203.742C364.993 203.412 365.853 203.062 366.683 202.742C378.333 198.932 394.063 194.872 396.183 180.522ZM324.183 249.092C324.683 246.35 326.192 243.896 328.413 242.212C328.203 247.352 327.983 252.492 327.773 257.662C325.523 255.282 323.733 252.482 324.233 249.092H324.183ZM349.953 216.422C349.93 216.377 349.903 216.333 349.873 216.292C349.927 216.156 349.951 216.009 349.943 215.862C349.943 215.632 349.943 215.392 349.943 215.162V215.102C350.256 214.312 350.658 213.56 351.143 212.862C353.115 209.979 355.798 207.654 358.933 206.112C359.813 210.502 360.663 214.922 361.513 219.312C358.913 218.692 356.303 218.102 353.703 217.492C352.933 217.272 350.523 217.232 350.003 216.422H349.953ZM126.953 391.182C126.398 384.372 125.335 377.613 123.773 370.962C125.523 370.962 127.263 371.042 128.993 371.062C132.773 371.162 137.463 370.892 140.843 372.962C144.633 375.322 141.113 378.312 138.673 379.962C134.182 383.036 130.226 386.827 126.963 391.182H126.953ZM81.5227 261.672C81.6192 262.032 81.782 262.371 82.0027 262.672C80.6527 266.992 76.1327 270.052 72.6827 272.592C71.0825 273.787 69.5439 275.062 68.0727 276.412C68.4527 267.487 68.3725 258.549 67.8327 249.632C73.8427 251.802 79.8927 255.082 81.5227 261.672ZM18.5227 230.972C15.7048 230.817 12.9119 230.357 10.1927 229.602C8.83031 229.313 7.57621 228.648 6.57273 227.682C12.9427 222.242 22.5727 225.822 29.3527 229.162L31.5227 230.232C27.2378 231.025 22.8699 231.273 18.5227 230.972ZM88.8927 314.972C92.9527 317.972 96.1027 321.692 96.5227 327.192C96.7066 331.535 95.8494 335.858 94.0227 339.802C92.7427 331.452 91.0227 323.162 88.9327 314.952L88.8927 314.972ZM188.833 479.482C187.183 480.922 185.473 482.342 183.833 483.812C184.403 476.612 185.003 469.472 185.633 462.302C188.283 463.912 191.033 465.372 193.783 466.772C193.784 466.791 193.789 466.81 193.797 466.827C193.806 466.845 193.818 466.86 193.833 466.872C194.086 467.3 194.288 467.756 194.433 468.232C194.292 468.892 194.403 469.58 194.743 470.162C194.743 473.802 191.523 477.222 188.873 479.462L188.833 479.482Z" fill="#FFFDFE"/>
                <path d="M194.793 470.142C194.743 473.792 191.513 477.222 188.873 479.462C187.223 480.902 185.513 482.322 183.873 483.792C184.443 476.592 185.043 469.452 185.673 462.282C188.323 463.892 191.073 465.352 193.823 466.752C193.824 466.771 193.829 466.79 193.837 466.807C193.846 466.824 193.858 466.84 193.873 466.852C194.126 467.28 194.328 467.736 194.473 468.212C194.335 468.873 194.449 469.561 194.793 470.142Z" fill="#C2CAC2"/>
                <path d="M81.9727 262.712C80.6227 267.032 76.1027 270.092 72.6527 272.632C71.0525 273.827 69.5139 275.102 68.0427 276.452C68.4226 267.527 68.3425 258.589 67.8027 249.672C73.8027 251.842 79.8927 255.082 81.4927 261.672C81.5844 262.046 81.7474 262.399 81.9727 262.712Z" fill="#C2CAC2"/>
                <path d="M361.613 219.292C359.013 218.672 356.403 218.082 353.803 217.472C352.933 217.272 350.493 217.232 350.003 216.472C349.98 216.427 349.953 216.383 349.923 216.342C349.977 216.206 350.001 216.059 349.993 215.912C349.993 215.682 349.993 215.442 349.993 215.212V215.152C350.306 214.362 350.708 213.61 351.193 212.912C353.165 210.029 355.848 207.704 358.983 206.162C359.913 210.482 360.763 214.902 361.613 219.292Z" fill="#C2CAC2"/>
                <path d="M328.463 242.212C328.253 247.352 328.033 252.492 327.823 257.662C325.503 255.282 323.733 252.482 324.233 249.092C324.733 246.35 326.242 243.896 328.463 242.212Z" fill="#C2CAC2"/>
                <path d="M96.5227 327.172C96.7098 331.521 95.8526 335.852 94.0227 339.802C92.7427 331.432 91.0227 323.142 88.9327 314.932C92.9927 317.942 96.1427 321.672 96.5227 327.172Z" fill="#C2CAC2"/>
                <path d="M138.683 379.992C134.191 383.057 130.232 386.837 126.963 391.182C126.408 384.372 125.345 377.613 123.783 370.962C125.533 370.962 127.273 371.042 129.003 371.062C132.783 371.162 137.473 370.892 140.853 372.962C144.643 375.322 141.123 378.312 138.683 379.992Z" fill="#C2CAC2"/>
                <path d="M294.263 159.052C278.903 132.682 276.793 101.952 269.103 73.0521C263.193 50.8421 253.103 27.1521 232.863 14.4221C211.393 0.942054 183.213 3.61205 161.973 16.2021C140.413 28.9721 125.873 51.3221 117.673 74.5821C107.883 102.282 106.293 131.972 105.153 161.072C105.023 164.612 99.4927 164.702 99.6427 161.152C99.8427 156.382 100.033 151.602 100.303 146.802C100.473 142.802 100.733 138.802 101.043 134.802C102.803 110.202 106.483 85.7121 116.373 62.9521C126.593 39.4121 143.843 17.5721 167.813 7.04205C190.743 -3.04795 218.523 -3.00795 239.283 12.1821C259.283 26.8621 269.283 51.2321 275.183 74.5921C279.283 91.0021 281.813 108.012 286.253 124.392C287.173 127.732 288.163 131.052 289.253 134.342C291.746 141.961 295.016 149.303 299.013 156.252C300.803 159.322 296.073 162.122 294.263 159.052Z" fill="#494949"/>
                <path d="M309.713 132.412C309.712 132.897 309.59 133.375 309.358 133.801C309.126 134.227 308.79 134.589 308.383 134.852C306.864 135.595 305.263 136.155 303.613 136.522C300.331 137.295 296.905 137.198 293.673 136.242C292.122 135.769 290.64 135.097 289.263 134.242C286.66 132.72 284.426 130.64 282.723 128.152C282.361 127.518 282.264 126.768 282.451 126.062C282.638 125.357 283.095 124.753 283.723 124.382C284.108 124.15 284.546 124.02 284.996 124.004C285.446 123.989 285.892 124.088 286.293 124.292C286.786 124.531 287.207 124.897 287.513 125.352C289.344 127.96 291.983 129.893 295.023 130.852C298.135 131.794 301.471 131.682 304.513 130.532C304.896 130.394 305.271 130.23 305.633 130.042C306.268 129.694 307.013 129.604 307.713 129.79C308.413 129.976 309.014 130.424 309.393 131.042C309.623 131.461 309.733 131.935 309.713 132.412Z" fill="#494949"/>
                <path d="M395.813 178.562C396.003 180.892 393.153 183.082 391.313 180.882L390.643 180.072C382.846 170.73 376.366 160.363 371.383 149.262C366.933 139.262 364.713 128.772 361.223 118.432C357.963 108.852 351.333 101.902 340.953 100.792C336.237 100.297 331.476 101.13 327.207 103.195C322.939 105.26 319.332 108.477 316.793 112.482C312.793 118.482 310.793 125.372 309.713 132.412C309.643 132.762 309.593 133.102 309.523 133.412C308.873 137.822 308.523 142.292 308.173 146.672C307.903 150.192 302.403 150.302 302.663 146.752C302.923 143.372 303.213 139.932 303.613 136.492C303.843 134.492 304.133 132.492 304.473 130.552C305.913 122.082 308.523 113.912 313.953 106.962C326.593 90.7021 353.693 90.9621 363.643 109.962C366.403 115.222 367.793 121.022 369.323 126.722C370.933 132.858 372.975 138.873 375.433 144.722C380.398 156.317 387.035 167.121 395.133 176.792C395.545 177.293 395.783 177.914 395.813 178.562Z" fill="#494949"/>
                <path d="M396.183 180.522C396.309 179.833 396.177 179.121 395.813 178.522C394.583 176.622 391.243 176.412 390.813 179.142C390.773 179.444 390.706 179.742 390.613 180.032C389.223 186.722 383.303 190.972 377.223 193.452C370.163 196.362 362.523 197.712 355.813 201.502C353.879 202.614 352.054 203.907 350.363 205.362C347.363 208.032 344.733 211.422 344.473 215.182C344.443 215.662 344.443 216.143 344.473 216.622V216.802C344.873 220.802 348.193 221.802 351.563 222.622L360.693 224.712C361.923 225.012 363.163 225.282 364.403 225.582C364.846 225.699 365.311 225.695 365.753 225.572C366.194 225.449 366.594 225.211 366.913 224.882C367.257 224.53 367.509 224.098 367.646 223.626C367.784 223.153 367.804 222.654 367.703 222.172C366.513 216.032 365.323 209.912 364.133 203.762C364.993 203.432 365.853 203.082 366.683 202.762C378.333 198.932 394.063 194.872 396.183 180.522ZM353.803 217.472C352.933 217.272 350.493 217.232 350.003 216.472C349.98 216.427 349.953 216.383 349.923 216.342C349.84 215.962 349.882 215.566 350.043 215.212V215.152C350.356 214.362 350.758 213.61 351.243 212.912C353.215 210.029 355.898 207.704 359.033 206.162C359.913 210.552 360.763 214.972 361.613 219.362C359.013 218.672 356.403 218.082 353.803 217.472Z" fill="#494949"/>
                <path d="M350.393 205.402C350.333 208.632 350.223 211.852 350.043 215.082V215.142C350.043 215.372 350.043 215.612 350.043 215.842C350.051 215.989 350.027 216.136 349.973 216.272C349.413 219.092 345.143 219.272 344.583 216.692C344.518 216.455 344.494 216.208 344.513 215.962C344.513 215.722 344.513 215.482 344.513 215.252C345.424 199.367 344.892 183.431 342.923 167.642C342.473 164.112 347.983 164.082 348.433 167.562C349.998 180.112 350.653 192.758 350.393 205.402Z" fill="#494949"/>
                <path d="M366.203 222.902C365.203 221.972 363.203 221.792 362.323 222.952C361.85 223.588 361.325 224.184 360.753 224.732C352.173 233.282 337.013 229.732 327.113 236.322C322.723 239.252 319.043 244.002 318.703 249.402C318.678 249.812 318.678 250.222 318.703 250.632C318.893 256.032 322.393 260.182 326.293 263.632C327.013 264.272 327.753 264.892 328.503 265.482C329.01 265.92 329.653 266.168 330.323 266.183C330.993 266.197 331.647 265.978 332.173 265.562C332.482 265.308 332.732 264.989 332.904 264.628C333.077 264.267 333.169 263.872 333.173 263.472C333.506 255.312 333.839 247.152 334.173 238.992L335.033 238.662C345.603 235.262 358.873 236.662 366.333 226.792C366.761 226.248 367.009 225.584 367.043 224.892C367.061 224.519 366.995 224.146 366.85 223.801C366.704 223.457 366.483 223.149 366.203 222.902ZM324.203 249.092C324.702 246.35 326.212 243.896 328.433 242.212C328.223 247.352 328.003 252.492 327.793 257.662C325.523 255.282 323.733 252.482 324.233 249.092H324.203Z" fill="#494949"/>
                <path d="M332.233 173.192C329.377 198.407 324.84 223.402 318.653 248.012C317.793 251.452 323.143 252.782 324.003 249.332C330.19 224.722 334.727 199.727 337.583 174.512C337.973 171.042 332.633 169.672 332.233 173.192Z" fill="#494949"/>
                <path d="M332.113 265.572C332.113 265.622 332.033 265.652 332.013 265.702C327.233 270.862 320.933 273.952 315.143 277.782C308.363 282.212 304.093 287.912 303.453 296.182C302.313 311.182 310.063 328.372 299.453 341.532C299.098 342.013 298.596 342.364 298.023 342.532C295.753 343.222 293.023 340.872 294.793 338.642C295.133 338.222 295.433 337.792 295.793 337.372C304.733 324.442 296.023 306.682 298.533 292.112C298.583 291.722 298.653 291.352 298.733 290.962C299.603 286.946 301.478 283.216 304.183 280.122C306.191 277.759 308.516 275.686 311.093 273.962C316.153 270.482 321.733 267.772 326.283 263.672C326.991 263.048 327.659 262.38 328.283 261.672C330.653 259.062 334.273 262.972 332.113 265.572Z" fill="#494949"/>
                <path d="M301.133 212.532L298.223 290.802C298.093 294.352 303.593 294.252 303.733 290.722L306.643 212.452C306.773 208.902 301.263 208.992 301.133 212.532Z" fill="#494949"/>
                <path d="M106.003 136.892C104.73 140.522 102.798 143.885 100.303 146.812C96.9339 150.762 92.605 153.779 87.7327 155.572C87.4027 155.702 87.0627 155.812 86.7327 155.922C86.03 156.116 85.279 156.024 84.6439 155.666C84.0088 155.308 83.541 154.714 83.3427 154.012C83.181 153.393 83.2369 152.738 83.5008 152.155C83.7648 151.573 84.2209 151.098 84.7927 150.812C84.9458 150.74 85.1027 150.677 85.2627 150.622C85.7527 150.462 86.2627 150.292 86.7227 150.102C86.8756 150.054 87.023 149.99 87.1627 149.912L87.7427 149.672C88.6527 149.232 89.5127 148.752 90.3627 148.242C91.2127 147.732 91.9727 147.192 92.7327 146.602C92.8305 146.509 92.9341 146.422 93.0427 146.342C93.2427 146.182 93.4227 145.992 93.6327 145.832C93.9927 145.512 94.3327 145.192 94.6327 144.832C95.3455 144.149 96.0135 143.421 96.6327 142.652C96.8127 142.442 96.9627 142.232 97.1227 142.042L97.2227 141.912C97.2227 141.862 97.2227 141.912 97.3027 141.812C97.6127 141.382 97.8927 140.932 98.1727 140.512C98.6827 139.712 99.1727 138.872 99.5827 138.022C99.8127 137.552 100.043 137.072 100.243 136.602C100.243 136.602 100.393 136.202 100.423 136.152C100.453 136.102 100.543 135.782 100.623 135.572C100.715 135.29 100.842 135.021 101.003 134.772C101.33 134.185 101.863 133.74 102.499 133.521C103.134 133.303 103.828 133.327 104.448 133.588C105.067 133.849 105.568 134.33 105.855 134.938C106.142 135.546 106.194 136.238 106.003 136.882V136.892Z" fill="#494949"/>
                <path d="M89.6527 164.642C81.2127 159.342 79.2527 149.562 74.2127 141.642C68.0327 131.982 56.2127 133.462 46.9027 137.562C37.6829 141.615 30.1573 148.745 25.6127 157.732C20.1827 168.612 19.3227 181.292 16.6127 192.982C14.4091 202.356 11.576 211.57 8.13272 220.562C7.42272 222.492 6.67272 224.392 5.88272 226.292C5.63272 226.952 5.35272 227.632 5.07272 228.292C4.26272 230.222 2.27272 230.062 1.07272 228.982C0.980315 228.908 0.899438 228.82 0.832725 228.722C0.44157 228.324 0.178315 227.818 0.0767514 227.269C-0.0248122 226.72 0.0399503 226.154 0.262726 225.642C6.19162 211.333 10.6024 196.442 13.4227 181.212C15.6627 169.352 17.9727 157.442 25.4927 147.602C31.8909 139.237 40.8272 133.171 50.9627 130.312C60.8627 127.542 71.3127 128.382 77.7827 137.152C80.7027 141.152 82.4627 146.232 84.7827 150.812C85.6434 152.482 86.6471 154.075 87.7827 155.572C89.0288 157.256 90.5705 158.699 92.3327 159.832C95.3027 161.702 92.6427 166.542 89.6527 164.642Z" fill="#494949"/>
                <path d="M57.3627 234.982C55.1447 235.766 52.8049 236.148 50.4527 236.112C47.7579 236.084 45.0833 235.642 42.5227 234.802C41.4427 234.472 40.3827 234.092 39.3327 233.692C39.3327 233.692 39.2727 233.692 39.2527 233.692C37.9627 233.192 36.6927 232.692 35.4227 232.052C34.1527 231.412 32.8327 230.852 31.5627 230.212L29.3927 229.142C22.6627 225.802 12.9827 222.222 6.61273 227.662C6.011 228.144 5.46435 228.69 4.98273 229.292C4.75437 229.592 4.45798 229.834 4.11798 229.997C3.77797 230.16 3.40409 230.24 3.02713 230.23C2.65017 230.22 2.28093 230.121 1.94983 229.941C1.61873 229.76 1.33524 229.504 1.12272 229.192C0.982875 229.043 0.865023 228.875 0.772727 228.692C0.467095 228.194 0.325833 227.612 0.368899 227.028C0.411964 226.445 0.637181 225.89 1.01273 225.442C2.8692 223.173 5.32594 221.472 8.10273 220.532C13.5027 218.622 19.9127 219.312 25.2627 221.302C34.1827 224.632 43.4927 232.022 53.3827 230.202C49.5356 212.506 47.131 194.527 46.1927 176.442C46.0027 172.872 51.5127 172.822 51.6927 176.352C52.6215 194.946 55.1577 213.425 59.2727 231.582C59.4562 232.286 59.3597 233.033 59.0035 233.667C58.6473 234.301 58.0592 234.773 57.3627 234.982Z" fill="#494949"/>
                <path d="M39.2727 233.702C39.1927 233.762 39.1127 233.842 39.0327 233.892C38.7562 234.066 38.4566 234.201 38.1427 234.292C31.0092 236.384 23.5315 237.04 16.1427 236.222C10.8127 235.622 3.63273 234.572 1.14273 229.222C1.09789 229.146 1.06102 229.066 1.03273 228.982C0.875682 228.661 0.748482 228.326 0.65273 227.982C-0.34727 224.672 4.65273 223.182 5.87273 226.312C5.90868 226.378 5.93559 226.449 5.95273 226.522C6.09279 226.962 6.32455 227.368 6.63273 227.712C7.63621 228.678 8.89032 229.343 10.2527 229.632C12.9536 230.373 15.7261 230.822 18.5227 230.972C22.8699 231.273 27.2378 231.025 31.5227 230.232C33.1527 229.922 34.7427 229.562 36.3327 229.112L36.5927 229.032C39.6127 228.142 41.1027 232.002 39.2727 233.702Z" fill="#494949"/>
                <path d="M39.3527 233.732C39.2565 233.804 39.1481 233.858 39.0327 233.892C38.712 234.007 38.3735 234.065 38.0327 234.062C37.4311 234.098 36.8366 233.916 36.3588 233.548C35.8811 233.181 35.5522 232.653 35.4327 232.062C35.2777 231.519 35.2902 230.943 35.4687 230.407C35.6471 229.872 35.9832 229.403 36.4327 229.062C36.883 228.718 37.4359 228.535 38.0027 228.542C41.0027 228.542 41.5227 232.572 39.3527 233.732Z" fill="#494949"/>
                <path d="M84.2927 263.592C83.8626 263.668 83.4198 263.627 83.0114 263.472C82.6029 263.317 82.244 263.055 81.9727 262.712C81.752 262.411 81.5892 262.072 81.4927 261.712C79.8927 255.122 73.8427 251.882 67.8027 249.712C66.3027 249.162 64.8027 248.712 63.4027 248.232C62.9827 248.112 62.5827 247.982 62.1627 247.832C54.7327 245.452 47.1627 242.492 42.8627 235.552C42.7133 235.32 42.5988 235.067 42.5227 234.802C41.6627 232.082 45.8527 229.922 47.6027 232.702C48.3843 233.952 49.3369 235.086 50.4327 236.072C55.4327 240.642 63.0027 242.072 69.2227 244.292C73.3632 245.66 77.2245 247.76 80.6227 250.492C83.053 252.477 84.933 255.053 86.0827 257.972C86.353 258.689 86.5833 259.42 86.7727 260.162C86.8773 260.554 86.8934 260.964 86.8199 261.362C86.7463 261.761 86.585 262.138 86.3475 262.466C86.1101 262.795 85.8025 263.066 85.447 263.261C85.0916 263.456 84.6973 263.569 84.2927 263.592Z" fill="#494949"/>
                <path d="M69.8627 179.612C68.9327 176.182 63.6227 177.662 64.5527 181.082C71.7394 207.689 77.8027 234.565 82.7427 261.712C83.3827 265.202 88.6827 263.712 88.0527 260.232C83.1127 233.112 77.0494 206.239 69.8627 179.612Z" fill="#494949"/>
                <path d="M87.8927 260.522C87.856 261.096 87.7859 261.667 87.6827 262.232C86.7427 267.492 83.1027 271.472 78.9027 274.792C74.7027 278.112 69.0527 281.122 67.3827 286.552C67.3903 286.588 67.3903 286.626 67.3827 286.662C66.3827 289.402 61.7227 289.152 61.9927 285.952C61.9927 285.692 61.9927 285.422 62.0627 285.162C63.0327 272.716 63.0829 260.215 62.2127 247.762C62.2127 247.112 62.1127 246.452 62.0827 245.762C61.8227 242.222 67.3227 242.162 67.5827 245.672C67.6827 246.982 67.7827 248.292 67.8527 249.602C68.3925 258.519 68.4726 267.457 68.0927 276.382C69.5639 275.032 71.1025 273.757 72.7027 272.562C76.1527 270.022 80.7027 266.962 82.0227 262.642C82.2476 261.963 82.3788 261.257 82.4127 260.542C82.4127 260.352 82.4127 260.172 82.4827 260.012C82.7142 259.267 83.2269 258.641 83.9121 258.268C84.5973 257.894 85.401 257.803 86.1527 258.012C86.7019 258.141 87.1837 258.469 87.5051 258.933C87.8265 259.396 87.9646 259.963 87.8927 260.522Z" fill="#494949"/>
                <path d="M96.7227 314.392C96.1756 313.783 95.5947 313.206 94.9827 312.662C90.3127 308.532 84.4527 306.162 79.3627 302.612C73.8017 298.685 69.6063 293.119 67.3627 286.692C67.2448 286.429 67.1445 286.158 67.0627 285.882C66.881 285.398 66.5718 284.972 66.1679 284.649C65.764 284.326 65.2804 284.119 64.7682 284.048C64.256 283.977 63.7342 284.046 63.258 284.248C62.7818 284.449 62.3688 284.775 62.0627 285.192C61.8283 285.499 61.6782 285.861 61.6273 286.243C61.5764 286.626 61.6266 287.015 61.7727 287.372C63.6298 293.118 66.7885 298.357 71.0027 302.682C74.2727 306.022 78.1927 308.402 82.1827 310.732C85.6231 322.934 88.1303 335.38 89.6827 347.962C89.7427 348.352 89.7727 348.722 89.8327 349.112C90.1327 351.652 93.6127 353.042 95.0127 350.402C95.043 350.361 95.0698 350.318 95.0927 350.272C98.4827 343.822 101.853 337.112 102.163 329.682V329.372C102.163 329.372 102.163 329.372 102.163 329.312C102.353 323.821 100.403 318.472 96.7227 314.392ZM94.0227 339.802C92.7427 331.432 91.0227 323.142 88.9327 314.932C92.9927 317.932 96.1427 321.652 96.5627 327.152C96.7405 331.511 95.8695 335.849 94.0227 339.802Z" fill="#494949"/>
                <path d="M147.863 373.382C147.201 371.256 145.747 369.466 143.803 368.382C142.737 367.729 141.595 367.208 140.403 366.832C136.153 365.452 131.403 365.632 126.953 365.562C121.953 365.452 116.953 365.502 112.043 364.562C104.673 363.102 96.1627 358.402 95.0427 350.312C94.9725 349.982 94.9257 349.648 94.9027 349.312C94.6927 346.312 90.6827 345.882 89.6327 348.022C89.4388 348.451 89.3562 348.922 89.3927 349.392C89.8727 357.392 95.3927 363.652 102.393 367.142C107.393 369.612 112.743 370.452 118.183 370.812C118.173 370.979 118.173 371.146 118.183 371.312C120.517 380.843 121.751 390.61 121.863 400.422C121.899 401.018 122.125 401.586 122.507 402.045C122.889 402.503 123.408 402.827 123.987 402.97C124.567 403.113 125.176 403.067 125.728 402.839C126.279 402.611 126.744 402.213 127.053 401.702C127.333 401.072 127.633 400.442 127.963 399.802C129.646 396.405 131.83 393.28 134.443 390.532C137.443 387.422 141.153 385.392 144.393 382.532C145.926 381.255 147.072 379.575 147.703 377.682C148.187 376.297 148.243 374.799 147.863 373.382ZM138.683 379.992C134.191 383.057 130.232 386.837 126.963 391.182C126.408 384.372 125.345 377.613 123.783 370.962C125.533 370.962 127.273 371.042 129.003 371.062C132.783 371.162 137.473 370.892 140.853 372.962C144.643 375.322 141.123 378.312 138.683 379.992Z" fill="#494949"/>
                <path d="M198.073 466.502C197.697 466.966 197.176 467.291 196.594 467.423C196.012 467.556 195.402 467.488 194.863 467.232C194.813 467.232 194.783 467.232 194.733 467.232L193.863 466.772C191.113 465.372 188.363 463.912 185.713 462.302C183.903 461.217 182.16 460.025 180.493 458.732C177.354 456.34 174.648 453.428 172.493 450.122C170.248 446.636 168.924 442.638 168.643 438.502C168.443 435.502 168.533 432.682 167.863 430.102C167.777 429.645 167.65 429.196 167.483 428.762C166.859 427.172 165.885 425.743 164.633 424.582C157.633 418.002 146.953 418.682 138.283 415.852C131.663 413.692 125.123 409.252 123.053 402.432C122.811 401.675 122.633 400.899 122.523 400.112C122.023 396.652 127.323 395.112 127.823 398.642C127.869 399.023 127.953 399.398 128.073 399.762C130.013 408.262 139.623 410.902 147.273 412.332C154.403 413.722 162.003 415.082 167.633 419.902C168.17 420.341 168.678 420.815 169.153 421.322C170.855 423.043 172.156 425.12 172.963 427.402C173.361 428.448 173.642 429.535 173.803 430.642C174.553 435.772 173.683 440.642 176.143 445.472C179.793 452.552 186.723 456.832 193.643 460.472C194.863 461.132 196.083 461.742 197.293 462.352L197.423 462.432C197.796 462.604 198.12 462.868 198.364 463.198C198.609 463.528 198.767 463.915 198.823 464.322C198.866 465.119 198.597 465.901 198.073 466.502Z" fill="#494949"/>
                <path d="M97.3127 227.802C97.0927 261.535 96.8661 295.269 96.6327 329.002C96.6327 332.552 102.113 332.472 102.143 328.922C102.369 295.195 102.596 261.462 102.823 227.722C102.853 224.202 97.3427 224.282 97.3127 227.802Z" fill="#494949"/>
                <path d="M147.073 252.802L143.583 375.402C143.483 378.952 148.993 378.852 149.093 375.312L152.573 252.802C152.683 249.202 147.173 249.292 147.073 252.802Z" fill="#494949"/>
                <path d="M174.523 346.922C173.969 373.735 173.429 400.555 172.903 427.382C172.903 427.932 172.903 428.482 172.903 429.032C172.903 432.032 169.093 432.132 167.833 430.032C167.576 429.633 167.444 429.167 167.453 428.692C167.438 428.623 167.438 428.551 167.453 428.482L167.633 419.832C168.113 395.332 168.599 370.839 169.093 346.352C169.073 342.802 174.523 343.382 174.523 346.922Z" fill="#494949"/>
                <path d="M197.303 318.372C197.473 314.822 191.963 314.922 191.793 318.452C189.449 367.031 190.137 415.709 193.853 464.202C194.123 467.732 199.633 467.662 199.363 464.122C195.647 415.629 194.959 366.951 197.303 318.372Z" fill="#494949"/>
                <path d="M195.323 480.972C191.163 485.362 185.203 488.252 182.793 494.062C181.733 496.562 177.393 495.452 177.613 492.772C178.573 481.439 179.523 470.085 180.463 458.712C180.463 458.372 180.533 458.032 180.553 457.712C180.525 457.337 180.575 456.96 180.698 456.605C180.822 456.25 181.016 455.924 181.27 455.646C181.524 455.369 181.832 455.147 182.175 454.993C182.518 454.839 182.889 454.757 183.265 454.751C183.641 454.746 184.014 454.817 184.362 454.961C184.709 455.105 185.024 455.318 185.285 455.588C185.547 455.858 185.751 456.178 185.885 456.53C186.019 456.881 186.079 457.256 186.063 457.632C185.923 459.182 185.793 460.752 185.683 462.302C185.053 469.472 184.453 476.612 183.883 483.812C185.513 482.342 187.223 480.922 188.883 479.482C191.523 477.242 194.753 473.812 194.803 470.162C194.827 469.505 194.722 468.849 194.493 468.232C194.348 467.756 194.146 467.3 193.893 466.872C193.878 466.86 193.866 466.844 193.857 466.827C193.849 466.81 193.844 466.791 193.843 466.772C193.596 466.398 193.465 465.96 193.465 465.512C193.465 465.064 193.596 464.626 193.843 464.252C194.162 463.747 194.625 463.349 195.171 463.108C195.718 462.867 196.325 462.796 196.913 462.902C197.274 462.967 197.616 463.111 197.915 463.323C198.214 463.536 198.463 463.812 198.643 464.132C198.676 464.194 198.712 464.254 198.753 464.312C198.93 464.606 199.09 464.91 199.233 465.222C199.734 466.33 200.052 467.512 200.173 468.722C200.633 473.132 198.423 477.702 195.323 480.972Z" fill="#494949"/>
                <path d="M298.643 341.802C298.443 342.022 298.233 342.232 298.023 342.472C294.853 345.982 293.263 350.272 292.093 354.832C291.823 355.882 291.573 356.942 291.353 358.012C290.203 363.332 289.283 368.802 286.973 373.532C281.423 384.942 268.523 388.442 257.703 392.802C247.703 396.802 237.263 403.172 235.703 413.952C235.653 414.272 235.603 414.612 235.583 414.952C235.469 416.391 235.499 417.839 235.673 419.272C236.363 425.272 237.673 431.272 234.173 436.662C231.583 440.662 227.423 443.292 223.343 445.582C218.273 448.412 213.433 451.132 209.273 455.252C205.443 459.149 202.353 463.71 200.153 468.712L199.473 470.322C198.473 472.702 195.723 471.982 194.773 470.152C194.433 469.57 194.322 468.882 194.463 468.222C194.463 468.062 194.563 467.882 194.633 467.692C194.703 467.502 194.763 467.402 194.813 467.272C194.943 466.982 195.043 466.692 195.193 466.402C195.699 465.194 196.266 464.012 196.893 462.862L197.203 462.302C197.743 461.302 198.353 460.302 198.973 459.302C200.913 456.303 203.176 453.527 205.723 451.022C210.213 446.632 215.493 443.662 220.963 440.592C225.743 437.902 230.783 434.592 231.093 428.592C231.403 423.132 229.543 417.992 230.193 412.592C230.306 411.658 230.496 410.735 230.763 409.832C231.771 406.457 233.474 403.33 235.763 400.652C240.943 394.472 248.763 390.472 256.183 387.472C262.263 385.052 268.653 383.072 274.183 379.552C279.483 376.222 282.383 371.462 284.073 365.552C285.073 362.182 285.733 358.662 286.523 355.182C287.753 349.952 289.273 344.812 292.523 340.492C293.156 339.599 293.865 338.763 294.643 337.992C294.931 337.68 295.297 337.449 295.703 337.322C298.143 336.492 300.813 339.682 298.643 341.802Z" fill="#494949"/>
                <path d="M292.523 340.512C292.393 345.312 292.253 350.082 292.053 354.862C292.053 355.362 292.053 355.862 292.003 356.332C291.995 356.968 291.749 357.579 291.313 358.042C289.853 359.742 286.383 359.242 286.493 356.412C286.493 356.022 286.493 355.602 286.493 355.202C287.933 318.075 288.116 280.929 287.043 243.762C286.943 240.222 292.443 240.142 292.553 243.682C293.526 275.949 293.516 308.225 292.523 340.512Z" fill="#494949"/>
                <path d="M235.823 390.992C235.823 394.192 235.823 397.422 235.823 400.642C235.823 405.082 235.773 409.512 235.763 413.942V414.182C235.759 414.44 235.718 414.696 235.643 414.942C234.893 417.702 230.223 417.512 230.253 414.262C230.253 413.712 230.253 413.162 230.253 412.612C230.253 405.422 230.303 398.262 230.363 391.102C230.343 387.512 235.853 387.422 235.823 390.992Z" fill="#494949"/>
                <path d="M169.053 100.692C162.173 97.8321 156.393 104.272 154.773 110.912C153.907 114.955 153.475 119.078 153.483 123.212C153.291 127.489 153.849 131.767 155.133 135.852C157.133 141.802 163.423 150.762 170.263 146.412C181.943 139.012 182.253 106.182 169.053 100.692Z" fill="#494949"/>
                <path d="M220.593 148.872C226.413 149.172 230.593 144.942 232.473 140.662C236.844 130.506 237.201 119.071 233.473 108.662C232.023 104.562 229.943 99.3721 224.963 97.5221C219.773 95.6021 215.373 99.1121 213.283 102.962C208.523 111.712 203.073 147.972 220.593 148.872Z" fill="#494949"/>
                <path d="M200.043 178.132C199.63 177.736 199.099 177.485 198.531 177.416C197.963 177.348 197.388 177.465 196.893 177.752C196.045 178.245 195.409 179.031 195.103 179.962C194.921 180.123 194.766 180.312 194.643 180.522C193.77 182.269 193.482 184.249 193.821 186.172C194.159 188.095 195.106 189.858 196.523 191.202C197.024 191.678 197.692 191.939 198.383 191.93C199.074 191.92 199.734 191.641 200.223 191.152C201.752 189.318 202.575 186.997 202.542 184.609C202.509 182.221 201.623 179.923 200.043 178.132Z" fill="#494949"/>
                </g>
            </svg>
        </Fragment>
    )
}
export default Soul4;

