export interface Expression {
  name: string;
  formula: string;
  categories: string[];
}

export const expressions: Expression[] = [
  {
    name: "Para todo",
    formula: `\\forall`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Existe",
    formula: `\\exists`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Ou ",
    formula: `\\lor `,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "E ",
    formula: `\\land `,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Ou exclusivo ",
    formula: `\\veebar`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Não ",
    formula: `\\neg`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Superconjunto próprio",
    formula: `\\supset `,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Superconjunto ",
    formula: `\\supseteq`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Subconjunto próprio",
    formula: `\\subset`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Subconjunto ",
    formula: `\\subseteq`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Pertence",
    formula: `\\in`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Conjunto vazio",
    formula: `\\emptyset`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "União de conjuntos",
    formula: `\\cup`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Interseção de conjuntos",
    formula: `\\cap`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Notação de conjunto por compreensão",
    formula: `\\{ x|x \\in \\mathbb{Z} \\land 0 \\leq x \\leq 10 \\}`,
    categories: ["Conjuntos"],
  },
  {
    name: "Números naturais",
    formula: `\\mathbb{N}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Números reais",
    formula: `\\mathbb{R}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Números inteiros",
    formula: `\\mathbb{Z}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Números racionais",
    formula: `\\mathbb{Q}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Números complexos",
    formula: `\\mathbb{C}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Números imaginários",
    formula: `\\mathbb{I}`,
    categories: ["Lógica", "Conjuntos"],
  },
  {
    name: "Seta para esquerda",
    formula: `\\leftarrow, \\longleftarrow, \\Leftarrow, \\Longleftarrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta para direita",
    formula: `\\rightarrow, \\longrightarrow, \\Rightarrow, \\Longrightarrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta para cima",
    formula: `\\uparrow, \\Uparrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta para baixo",
    formula: `\\downarrow, \\Downarrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta para esquerda e direita",
    formula: `\\leftrightarrow, \\longleftrightarrow, \\Leftrightarrow, \\Longleftrightarrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta para cima e baixo",
    formula: `\\updownarrow, \\Updownarrow`,
    categories: ["Seta"],
  },
  {
    name: "Seta de mapeamento / mapeia para",
    formula: `\\mapsto, \\longmapsto`,
    categories: ["Seta"],
  },
  {
    name: "Seta com gancho",
    formula: `\\hookleftarrow, \\hookrightarrow`,
    categories: ["Seta"],
  },
  {
    name: "Setas arpão",
    formula: `\\leftharpoonup, \\rightharpoonup, \\leftharpoondown, \\rightharpoondown`,
    categories: ["Seta"],
  },
  {
    name: "Setas direcionais ordinais ou intercardinais",
    formula: `\\nearrow, \\searrow, \\swarrow, \\nwarrow`,
    categories: ["Seta"],
  },
  {
    name: "Teorema de Pitágoras",
    formula: `a^2 + b^2 = c^2`,
    categories: ["Fórmula"],
  },
  {
    name: "Teoria da Relatividade",
    formula: `E = mc^2`,
    categories: ["Fórmula"],
  },
  {
    name: "Identidade de Euler",
    formula: `e^{i\\pi} + 1 = 0`,
    categories: ["Fórmula"],
  },
  {
    name: "Fórmula de poliedros de Euler",
    formula: `F - E + V = 2`,
    categories: ["Fórmula"],
  },
  {
    name: "Lei da gravitação de Newton",
    formula: `F = G\\frac{m_1 m_2}{d^2}`,
    categories: ["Fórmula"],
  },
  {
    name: "Origem dos números complexos",
    formula: `i^2 = -1`,
    categories: ["Fórmula"],
  },
  {
    name: "Leis de De Morgan",
    formula: `\\left ( E \\cup F \\right )' = E' \\cap  F' \\\\ \\left ( E \\cap F \\right )' = E' \\cup  F'
`,
    categories: ["Fórmula"],
  },

  {
    name: "Dízimas periódicas",
    formula: `0.\\overline{324}`,
    categories: [],
  },
  {
    name: "Fração",
    formula: `\\frac{x}{y}`,
    categories: [],
  },
  {
    name: "Expoente",
    formula: `a^2, x^y`,
    categories: [],
  },
  {
    name: "Radical",
    formula: `\\sqrt{9}, \\sqrt[n]{x}`,
    categories: [],
  },
  {
    name: "Raiz quadrada",
    formula: `\\sqrt{25}`,
    categories: [],
  },
  {
    name: "Logaritmo",
    formula: `\\log x, \\log_{2}x`,
    categories: [],
  },
  {
    name: "Fatorial",
    formula: `n!`,
    categories: [],
  },
  {
    name: "Valor absoluto",
    formula: `\\vert{x} \\vert`,
    categories: [],
  },
  {
    name: "Fonte caligráfica",
    formula: `\\mathcal{R}, \\mathcal{Z}, \\mathcal{D}`,
    categories: [],
  },
  {
    name: "Barras sobre símbolos",
    formula: `\\bar{a}, \\bar{b}, \\bar{c}`,
    categories: [],
  },
  {
    name: "Til sobre símbolos",
    formula: `\\tilde{a}, \\tilde{b}, \\tilde{c}`,
    categories: [],
  },
  {
    name: "Setas sobre símbolos",
    formula: `\\overrightarrow{a}, \\overrightarrow{b}, \\overrightarrow{c}`,
    categories: [],
  },
  {
    name: "Pontos sobre símbolos",
    formula: `\\dot{a}, \\dot{b}, \\dot{c}`,
    categories: ["Pontos"],
  },
  {
    name: "Espaçamento entre símbolos",
    formula: `a\\;b\\;c`,
    categories: [],
  },
  {
    name: "Nabla (gradiente)",
    formula: `\\nabla f(x_0, y_0)`,
    categories: [],
  },
  {
    name: "Texto",
    formula: `\\text{Algo}`,
    categories: [],
  },
  {
    name: "Somas com limites",
    formula: `\\sum\\limits_{i=1}^{n}i^2`,
    categories: [],
  },
  {
    name: "Produtos com limites",
    formula: `\\prod\\limits_{i=1}^{n}i^2`,
    categories: [],
  },
  {
    name: "Integrais com limites",
    formula: `\\int\\limits_{-\\infty}^{\\infty}f(x)\\,\\mathrm{d}x`,
    categories: ["Cálculo"],
  },
  {
    name: "Derivada parcial",
    formula: `\\frac{\\partial Q}{\\partial t}, \\frac{\\partial^2L}{\\partial x \\partial y}`,
    categories: ["Cálculo"],
  },
  {
    name: "Limites",
    formula: `\\lim_{x\\to 0} (1+x)^\\frac{1}{x} = e`,
    categories: [],
  },
  {
    name: "Máximo ",
    formula: `\\max(1,2,3)`,
    categories: [],
  },
  {
    name: "Mínimo ",
    formula: `\\min(3,4,5)`,
    categories: [],
  },
  {
    name: "vmatrix",
    formula: `\\begin{vmatrix}
a & b \\\\
c & d 
\\end{vmatrix}
`,
    categories: ["Ambiente"],
  },
  {
    name: "pmatrix",
    formula: `\\begin{pmatrix}
a & b \\\\
c & d 
\\end{pmatrix}
`,
    categories: ["Ambiente"],
  },
  {
    name: "bmatrix",
    formula: `\\begin{bmatrix}
a & b \\\\
c & d 
\\end{bmatrix}
`,
    categories: ["Ambiente"],
  },
  {
    name: "Bmatrix",
    formula: `\\begin{Bmatrix}
a & b \\\\
c & d 
\\end{Bmatrix}
`,
    categories: ["Ambiente"],
  },
  {
    name: "Vmatrix",
    formula: `\\begin{Vmatrix}
a & b \\\\
c & d 
\\end{Vmatrix}
`,
    categories: ["Ambiente"],
  },

  {
    name: "Infinito",
    formula: `\\infty`,
    categories: ["Símbolo"],
  },
  {
    name: "Parcial",
    formula: `\\partial`,
    categories: ["Símbolo"],
  },
  {
    name: "estrela",
    formula: `\\star`,
    categories: ["Símbolo"],
  },
  {
    name: "asterisco",
    formula: `\\ast`,
    categories: ["Símbolo"],
  },
  {
    name: "punhal",
    formula: `\\dag`,
    categories: ["Símbolo"],
  },
  {
    name: "punhal duplo",
    formula: `\\ddag`,
    categories: ["Símbolo"],
  },
  {
    name: "oplus",
    formula: `\\oplus`,
    categories: ["Símbolo"],
  },
  {
    name: "círculo",
    formula: `\\circ`,
    categories: ["Símbolo"],
  },
  {
    name: "ponto",
    formula: `\\bullet`,
    categories: ["Símbolo"],
  },
  {
    name: "direitos autorais",
    formula: `\\copyright`,
    categories: ["Símbolo"],
  },
  {
    name: "pontos centrais",
    formula: `1, \\cdots`,
    categories: ["Pontos"],
  },
  {
    name: "pontos diagonais",
    formula: `\\ddots`,
    categories: ["Pontos"],
  },
  {
    name: "pontos inferiores",
    formula: `1, \\ldots`,
    categories: ["Pontos"],
  },
  {
    name: "pontos verticais",
    formula: `\\vdots`,
    categories: ["Pontos"],
  },
  {
    name: "Ângulo",
    formula: `\\angle`,
    categories: ["Ângulo"],
  },
  {
    name: "Ângulo medido ",
    formula: `\\measuredangle`,
    categories: ["Ângulo"],
  },
  {
    name: "Ângulo esférico ",
    formula: `\\sphericalangle`,
    categories: ["Ângulo"],
  },
  {
    name: "alfa",
    formula: `\\alpha`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "beta",
    formula: `\\beta `,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "gama",
    formula: `\\gamma `,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "delta",
    formula: `\\delta `,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "épsilon e varépsilon",
    formula: `\\epsilon, \\varepsilon`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "zeta",
    formula: `\\zeta `,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "eta",
    formula: `\\eta `,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "teta e varteta",
    formula: `\\theta, \\vartheta`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "iota",
    formula: `\\iota`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "capa e varcapa",
    formula: `\\kappa, \\varkappa`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "lambda",
    formula: `\\lambda`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "mi",
    formula: `\\mu`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "ni",
    formula: `\\nu`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "csi",
    formula: `\\xi`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "ômicron",
    formula: `o`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "pi e varpi",
    formula: `\\pi, \\varpi`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "ró e varró",
    formula: `\\rho, \\varrho`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "sigma e varsigma",
    formula: `\\sigma, \\varsigma`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "tau",
    formula: `\\tau`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "úpsilon",
    formula: `\\upsilon`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "fi e varfi",
    formula: `\\phi, \\varphi`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "qui",
    formula: `\\chi`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "psi",
    formula: `\\psi`,
    categories: ["Letra Grega", "Símbolo"],
  },
  {
    name: "ômega",
    formula: `\\omega`,
    categories: ["Letra Grega", "Símbolo"],
  },

  {
    name: "Big O",
    formula: `\\mathcal{O}, O`,
    categories: ["Big O"],
  },
  {
    name: "Big Ômega",
    formula: `\\Omega`,
    categories: ["Big O"],
  },
  {
    name: "Big Teta",
    formula: `\\Theta`,
    categories: ["Big O"],
  },
  {
    name: "Small O [ômicron]",
    formula: `o`,
    categories: ["Big O"],
  },
  {
    name: "Small Ômega",
    formula: `\\omega`,
    categories: ["Big O"],
  },
  {
    name: "Da ordem de",
    formula: `\\sim`,
    categories: ["Big O"],
  },
  {
    name: "Tempo constante",
    formula: `O(1)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo logarítmico",
    formula: `O(\\log{}n)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo linear",
    formula: `O(n)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo quase-linear",
    formula: `O(n\\log{}n)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo quadrático",
    formula: `O(n^2)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo cúbico",
    formula: `O(n^3)`,
    categories: ["Big O"],
  },
  {
    name: "Tempo fatorial",
    formula: `O(n!)`,
    categories: ["Big O"],
  },
  {
    name: "Multiplicação",
    formula: `\\times`,
    categories: ["Operador"],
  },
  {
    name: "Ponto",
    formula: `\\cdot`,
    categories: ["Operador"],
  },
  {
    name: "Divisão",
    formula: `\\div`,
    categories: ["Operador"],
  },
  {
    name: "Mais ou menos",
    formula: `\\pm `,
    categories: ["Operador"],
  },
  {
    name: "Não igual",
    formula: `\\neq`,
    categories: ["Relação"],
  },
  {
    name: "Aproximadamente igual",
    formula: `\\approx`,
    categories: ["Relação"],
  },
  {
    name: "Menor que",
    formula: `\\lt`,
    categories: ["Relação"],
  },
  {
    name: "Menor ou igual",
    formula: `\\leq`,
    categories: ["Relação"],
  },
  {
    name: "Maior que",
    formula: `\\gt`,
    categories: ["Relação"],
  },
  {
    name: "Maior ou igual",
    formula: `\\geq`,
    categories: ["Relação"],
  },
  {
    name: "Muito menor que",
    formula: `\\ll`,
    categories: ["Relação"],
  },
  {
    name: "Muito maior que",
    formula: `\\gg`,
    categories: ["Relação"],
  },
  {
    name: "seno",
    formula: `\\sin \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "cosseno",
    formula: `\\cos \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "tangente",
    formula: `\\tan \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "cotangente ",
    formula: `\\cot \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "secante ",
    formula: `\\sec \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "cossecante",
    formula: `\\csc \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "arco seno",
    formula: `\\arcsin \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "arco cosseno",
    formula: `\\arccos \\theta`,
    categories: ["Função", "Trigonometria"],
  },
  {
    name: "arco tangente",
    formula: `\\arctan \\theta`,
    categories: ["Função", "Trigonometria"],
  },
];
