/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconPhotos = ({ className }) => {
  return (
    <svg
      className={`icon-photos ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 40 30"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M0 15C0 17.3577 0.706289 19.7147 1.325 21.0027C1.98895 22.3848 2.96316 23.9436 4.33594 25.3125C5.45094 26.4244 7.01602 27.5158 8.51562 28.2266C10.0787 28.9674 11.8223 29.5552 14.9609 29.8438C16.5633 29.9911 20 30 20 30C20 30 23.4367 29.9911 25.0391 29.8438C28.1777 29.5552 29.9212 28.9674 31.4844 28.2266C32.984 27.5158 34.549 26.4244 35.6641 25.3125C37.0368 23.9436 38.0111 22.3848 38.675 21.0027C39.2938 19.7147 40 17.3577 40 15C40 12.6423 39.2938 10.2853 38.675 8.99727C38.0111 7.6152 37.0368 6.05641 35.6641 4.6875C34.549 3.57562 32.984 2.48422 31.4844 1.77344C29.9212 1.03258 28.1777 0.444805 25.0391 0.15625C23.4367 0.00894532 20 0 20 0C20 0 16.5633 0.00894532 14.9609 0.15625C11.8223 0.444805 10.0787 1.03258 8.51562 1.77344C7.01602 2.48422 5.45094 3.57562 4.33594 4.6875C2.96316 6.05641 1.98895 7.6152 1.325 8.99727C0.706289 10.2853 0 12.6423 0 15Z"
        fill="url(#pattern0)"
        fillRule="evenodd"
      />
      <mask
        className="mask"
        height="30"
        id="mask0_22_400"
        maskUnits="userSpaceOnUse"
        style="mask-type:luminance"
        width="40"
        x="0"
        y="0"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M0 15C0 17.3577 0.706289 19.7147 1.325 21.0027C1.98895 22.3848 2.96316 23.9436 4.33594 25.3125C5.45094 26.4244 7.01602 27.5158 8.51562 28.2266C10.0787 28.9674 11.8223 29.5552 14.9609 29.8438C16.5633 29.9911 20 30 20 30C20 30 23.4367 29.9911 25.0391 29.8438C28.1777 29.5552 29.9212 28.9674 31.4844 28.2266C32.984 27.5158 34.549 26.4244 35.6641 25.3125C37.0368 23.9436 38.0111 22.3848 38.675 21.0027C39.2938 19.7147 40 17.3577 40 15C40 12.6423 39.2938 10.2853 38.675 8.99727C38.0111 7.6152 37.0368 6.05641 35.6641 4.6875C34.549 3.57562 32.984 2.48422 31.4844 1.77344C29.9212 1.03258 28.1777 0.444805 25.0391 0.15625C23.4367 0.00894532 20 0 20 0C20 0 16.5633 0.00894532 14.9609 0.15625C11.8223 0.444805 10.0787 1.03258 8.51562 1.77344C7.01602 2.48422 5.45094 3.57562 4.33594 4.6875C2.96316 6.05641 1.98895 7.6152 1.325 8.99727C0.706289 10.2853 0 12.6423 0 15Z"
          fill="white"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_22_400)" />
      <defs className="defs">
        <pattern className="pattern" height="1" id="pattern0" patternContentUnits="objectBoundingBox" width="1">
          <use className="use" transform="scale(0.00833333 0.0111111)" xlink:href="#image0_22_400" />
        </pattern>
        <image
          className="image-7"
          height="90"
          id="image0_22_400"
          width="120"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABaCAIAAAD8YgW4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAeKADAAQAAAABAAAAWgAAAACz4ymKAAAFCklEQVR4Ae2cIVMlOxCFH28fBgwCLBgMGoMBCxqNRvMn4Eeg0WiwoNEYDJgVYEHveZuqVFdnkpu+PemiqHNVptN9OvNNpydDbe3K+fn5P/yNJ/Dv+BTM8D8Bgg6qA4Im6CACQWlY0QQdRCAoDSuaoIMIBKVhRRN0EIGgNKxogg4iEJSGFU3QQQSC0rCiCTqIQFAaVjRBBxEISsOKJuggAkFpWNEEHUQgKA0rmqCDCASlYUUTdBCBoDSsaIIOIhCUhhVN0EEEgtL8F5Tnb5q1tbW9vb2Pj4/X11dTXgRO+n99fU3aS6NfodQ0WYJAb25unp2dgXJaHADd3d3d39+31wo6Jycnh4eHDUzv7+9vb2/Pz89PT0+lml+h1FzO8mt/f3+5SFPUxcXF7u5uDlldXQX0339/2VgODg4OTk9P4VxOJQumNjY2dnZ2cBfQf3l5UTXuV6ilttojXoZgChblyo6Pj0ujtJiKAFkuLy9ViLqU4uV4UqF0W84SARp7f3JxoD/5ALLz1tZWHncO0KBkn/ErdOZd6Da8R+O2G2WFZ9D/YkQjlm0dfR81qMSRDqyvr68n79yvMCnbYxwOWoEAKdkxMHtzc9OzUPjguAJS0vnx8RF7Ai8AWcXQhHHy+fkVZHbTeHjrUH3j4eFBwmrXe8+dAGj5qLa3t3tik49foSfXWNDY3bIL45ZQU+ocpkq+Z9HKB4LqsGFtzX4FtaTycizoo6MjmTIhlhWNWYCWG1/6949xmpbOpopOgX4FuYByPBa0qtYEuvwyVG7lKhda1tfXpY8qcDlVG/sVasrJPhA0jgRoHTk9+OKXLhPxPKX6eLb3D2QiRE2+CdtqfoW2/kDQqk4lXDnG+tDH1X22F61m8fWoLPmJKnvt0q9QU872UaDL44SECxCq6FQ3z+tbOMBukOfF5K9eA20Rv0JbP82OOkejb8hXXEkW3OWBBOV/e3vbXjFecZkpWio2weRWgE6tR/sV2itszI4CrdpuWWIALTcsqOHZlG5y6cCKn7SUYyjIr0fl4FdQgv2XQ0AnamoRCj1mUXey6uHQBq0Ey0uElx8vpVvD4leoiQ8BrV6DyA2I+NUWkeyp29R2fTsWUegY+CJvuzVm/QoNcUwFgW4vIs2m92cDFljIzwpcovWnP/zj1YrLhVn8CgtT1BzmB93TB2urwVZogEZbd3YGv0Jt5Qvt84MuW4Q6yck14Y8Ssk2nbxzrKVgKftvx/KBVgwblq6ur2v3DWf2nTrA0jg01ne9vn/mDBZhkheL+sVsbFPCWV7116S+XRpbvMDUzaOx9dVdt0KCsjnQ4GuKnRH7A5cyg1d8n0TcWNtzySeSvks/PTydiv4JzATl8ZtD4JxZZGoOebgvQ6mHkZqKegbqUiWpjFaIua1Ej7DODxj+LydTQEzpvDIe2DBfHu9xMEJ5PLDBmez8Iv0J/rrbninrpt707Z7H3sWcz8c4o9HdgzcRz1HJqORwDv4JUW248BPRyS/nZUTO3jp8Ny3N3BO2hZ4glaAMsjytBe+gZYgnaAMvjStAeeoZYgjbA8rgStIeeIZagDbA8rgTtoWeIJWgDLI8rQXvoGWIJ2gDL40rQHnqGWII2wPK4ErSHniGWoA2wPK4E7aFniCVoAyyPK0F76BliCdoAy+NK0B56hliCNsDyuBK0h54hlqANsDyuBO2hZ4glaAMsjytBe+gZYgnaAMvjStAeeobYP/FoF15WC0TFAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};
