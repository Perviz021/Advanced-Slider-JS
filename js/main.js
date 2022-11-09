let nextBtn = document.querySelector('i[class*="right"');
let prevBtn = document.querySelector('i[class*="left"');
let lenta = document.querySelector(".lenta");
let inners = document.querySelectorAll(".lenta .inner");
let navs = document.querySelectorAll(".navs ul li");

let activeIndex = 0;

nextBtn.addEventListener("click", function () {
  Slide("right");
});

prevBtn.addEventListener("click", function () {
  Slide("left");
});

function Slide(dir) {
  if (dir == "right") {
    activeIndex++;
    // eger ki axirinci elementde saga bassaq, o zaman 1ci elemente qayitsin
    if (activeIndex == inners.length) {
      activeIndex = 0;
    }
  } else if (dir == "left") {
    activeIndex--;
    // eger ki birinci elementde sola bassaq axirinci elemente getsin
    if (activeIndex == -1) {
      activeIndex = inners.length - 1;
    }
  }
  //activeIndex'in qabagina menfi yaziriq ki, saga basanda left'i menfi olsun, sola basanda musbet olsun,duzgun hereket alinsin
  lenta.style.left = -activeIndex * 900 + "px";
}

document.addEventListener("keyup", function (e) {
  //klaviaturada sag(39) knopkaya basanda saga gedir
  if (e.which == 39) {
    Slide("right");
  } //klaviaturada sol(37) knopkaya basanda sola gedir
  else if (e.which == 37) {
    Slide("left");
  }
});

// for i ile yazilanda editable olur, yeni deyismek falan olur. amma of ile yazanda ancaq readable olur.
for (const nav of navs) {
  nav.addEventListener("click", function () {
    //muqayise etmek ucun kohnenin qiymetini yeni bir variable'de saxlayiriq
    let oldActiveIndex = activeIndex;

    //data-index attribute'si string saxladigindan, asagidaki muqayiselere ucun onlari number'e cevirmeliyik ilk once
    activeIndex = parseInt(this.getAttribute("data-index"));

    if (activeIndex > oldActiveIndex) {
      // Slide funksiyasinin icinde de activeIndex'i artiririq deye burda qabaqcadan azaldib yollayiriq ki duz islesin
      activeIndex--;
      Slide("right");
    } else {
      // Slide funksiyasinin icinde de activeIndex'i azaldiriq deye burda qabaqcadan artirib yollayiriq ki duz islesin
      activeIndex++;
      Slide("left");
    }

    //active spanin rengini deyismek
    let activeSpan = document.querySelector(".navs li.active");
    activeSpan.classList.remove("active");
    this.classList.add("active");
  });
}
