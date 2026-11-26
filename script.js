

gsap.registerPlugin(ScrollTrigger);

const xy = document.getElementById("e4mc");
const yx = document.getElementById("yx");

// Рух формул за курсором
document.addEventListener("mousemove", (event) => {
  const x = event.clientX - window.innerWidth / 2;
  const y = event.clientY - window.innerHeight / 2;

  gsap.to(xy, {
    x,
    y,
    duration: 1,
    ease: "power2.out",
    overwrite: "auto",
  });

  gsap.to(yx, {
    x,
    y,
    duration: 2,
    ease: "power2.out",
    overwrite: "auto",
  });
});

// Анімація заголовка та тексту
gsap.from(".text-anim", {
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from(".text-anim1", {
  y: -50,
  opacity: 0,
  duration: 1,
});

// Анімація під час прокручування сторінки
gsap.from(".to-up-animation", {
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    trigger: ".wormhole-is",
  },
  y: 100,
  opacity: 0,
  ease: "power4.out",
  duration: 5,
});

gsap.from(".to-up-animation-two", {
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    trigger: ".interstellar-section",
  },
  y: 100,
  rotate: 100,
  opacity: 0,
  ease: "power4.out",
  duration: 5,
});
gsap.from(".to-up-animation-three", {
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "top center",
    end: "top 100px",
    scrub: 1,
    trigger: ".wormhole-like-function",
  },
  x: 100,
  opacity: 0,
  ease: "power4.out",
  duration: 5,
});

// Інтерактивний графік Desmos
const graphElement = document.getElementById("desmos-graph");

if (graphElement && window.Desmos) {
  const calculator = Desmos.GraphingCalculator(graphElement, {
    expressions: true,
    settingsMenu: true,
    zoomButtons: true,
    showResetButtonOnGraphpaper: true,
  });

  calculator.setMathBounds({
    left: -10,
    right: 10,
    bottom: -10,
    top: 10,
  });

  calculator.setExpressions([
    { id: "hyperbola", latex: "x^2/a^2-y^2/b^2=1" },
    { id: "a", latex: "a=1.1" },
    { id: "b", latex: "b=1.1" },
  ]);
}

const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  gsap.to(".hideAnimation",{
    opacity: 0,
    y: -300,
  }),
  
    gsap.fromTo(
    ".showAnim",
    {
    autoAlpha:0,
    y: 300,
    display:"none",
  },
  {
    autoAlpha:1,
    y:0,
    text:'Це рівняння задає гіперболу — криву з двома окремими гілками. Параметри \(a\) і \(b\) впливають на її форму. У графіку можна змінювати їхні значення та спостерігати за результатом. Гіпербола тут є математичною ілюстрацією, а не точною моделлю кротовини.',
    display:'block',
    duration: 3,
    ease:'power4.inOut',
  }
)
  

});
