<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Icon System</title>
  <style>
    /* Styling untuk ikon */
    .svgicon {
      width: 24px;
      height: 24px;
      fill: none;
      stroke: #000;
      stroke-width: 2;
    }
  </style>
</head>
<body>

  <!-- Contoh penggunaan ikon -->
  <div class="di-bayam"></div>
  <div class="di-house"></div>
  <div class="di-pen"></div>
  <div class="di-cart"></div>

  <script>
    const svg = {
      model: {
        id: 'svg',
        versi: '1.0',
        gradien: `<defs>
                    <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop stop-color="#5757D9" offset="0%"/>
                      <stop stop-color="#21D9F7" offset="100%"/>
                    </linearGradient>
                  </defs>`,
        path: {
          bayam: `M1 18 1 6A1 1 0 0111 6L11 13 18 13A1 1 0 0118 23L6 23 6 6A1 1 0 0116 6L16 8 18 8A1 1 0 0118 18Z`,
          house: `M20 10v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10M9 22V12h6v10M2 10 12 2l10 8`,
          pen: `M16 3 21 8 8 21 3 21 3 16 16 3`,
          cart: `M4 5 2 5 2 2 5 2 8 7 22 6 19 18 11 18ZM9 21A1 1 0 0013 21 1 1 0 009 21M16 21A1 1 0 0020 21 1 1 0 0016 21ZM17 15 19 9 10 10 13 15Z`
        },
      },
      view: {
        // Fungsi untuk membuat elemen SVG
        icon: function(id = 'bayam') {
          const { path } = svg.model;
          return `<svg class="svgicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="${path[id]}"></path>
                  </svg>`;
        },
      },
      controller: {
        // Fungsi untuk menyisipkan ikon ke dalam elemen dengan kelas tertentu
        icon: function() {
          const { path } = svg.model;
          for (const key in path) {
            const elements = document.getElementsByClassName(`di-${key}`);
            if (elements.length > 0) {
              for (let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = svg.view.icon(key);
              }
            }
          }
        },
      },
    };

    // Panggil fungsi untuk merender ikon ke dalam elemen
    document.addEventListener("DOMContentLoaded", () => {
      svg.controller.icon();
    });
  </script>

</body>
</html>

