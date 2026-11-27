document.addEventListener("DOMContentLoaded", () => {
  // Render mathematical notation after KaTeX has loaded.
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }

  // Interactive graph of the quadratic model.
  const graphElement = document.getElementById("desmos-graph");
  if (graphElement && window.Desmos) {
    const calculator = Desmos.GraphingCalculator(graphElement, {
      expressions: true,
      settingsMenu: true,
      zoomButtons: true,
      showResetButtonOnGraphpaper: true,
      expressionsTopbar: false,
      xAxisLabel: "Ширина (м)",
      yAxisLabel: "Висота (м)"
    });

    calculator.setMathBounds({
      left: -3.2,
      right: 3.2,
      bottom: -1,
      top: 4
    });

    calculator.setExpressions([
      { id: "parabola", latex: "y=-0.75x^2+3\\left\\{-2<=x<=2\\right\\}", color: "#d98232", lineWidth: 4 },
      { id: "vertex", latex: "(0,3)", color: "#c45d20", showLabel: true, label: "Вершина (0; 3)", labelSize: "medium" },
      { id: "left", latex: "(-2,0)", color: "#c45d20", showLabel: true, label: "(-2; 0)", labelSize: "medium" },
      { id: "right", latex: "(2,0)", color: "#c45d20", showLabel: true, label: "(2; 0)", labelSize: "medium" },
      { id: "axis", latex: "x=0", color: "#999999", lineStyle: Desmos.Styles.DASHED }
    ]);
  } else if (graphElement) {
    graphElement.innerHTML = '<div class="graph-fallback"><strong>y = −0.75x² + 3</strong><p>Вершина: (0; 3) · Точки перетину: (−2; 0) та (2; 0)</p></div>';
  }

  // Optional scroll animations; the page remains readable if GSAP is unavailable.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".section, .cinema, .graph-section").forEach((section) => {
      gsap.from(section.children, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 82%", once: true }
      });
    });
  }
});
