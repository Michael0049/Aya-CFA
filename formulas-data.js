/* Formula data per topic id — used by the Reading Workspace formula tab. */
var FORMULAS={
 quant:[
  ["Future value (single sum)","FV = PV (1 + r)ⁿ"],
  ["Present value (single sum)","PV = FV / (1 + r)ⁿ"],
  ["Effective annual rate","EAR = (1 + periodic rate)ᵐ − 1"],
  ["PV of ordinary annuity","PV = A × [1 − (1 + r)⁻ⁿ] / r"],
  ["PV of perpetuity","PV = A / r"],
  ["Holding period return","HPR = (P₁ − P₀ + D₁) / P₀"],
  ["Geometric mean return","[(1+R₁)(1+R₂)…(1+Rₙ)]^(1/n) − 1"],
  ["Coefficient of variation","CV = σ / mean"],
  ["Standardized value (Z)","Z = (X − μ) / σ"],
  ["Confidence interval (mean)","x̄ ± (z or t) × (s / √n)"],
  ["Correlation","ρ = Cov(X,Y) / (σₓ σᵧ)"]
 ],
 econ:[
  ["Price elasticity of demand","%Δ quantity / %Δ price"],
  ["GDP (expenditure)","GDP = C + I + G + (X − M)"],
  ["Fisher relation (approx.)","nominal ≈ real + expected inflation"],
  ["Money multiplier","1 / reserve requirement"],
  ["Forward premium / discount","(Forward − Spot) / Spot"],
  ["Real exchange rate","nominal × (price_foreign / price_domestic)"]
 ],
 fsa:[
  ["Accounting equation","Assets = Liabilities + Equity"],
  ["Current ratio","Current assets / Current liabilities"],
  ["Quick ratio","(Cash + Receivables + ST inv.) / Current liab."],
  ["Inventory turnover","COGS / Average inventory"],
  ["Receivables turnover","Revenue / Average receivables"],
  ["Net profit margin","Net income / Revenue"],
  ["Return on equity","Net income / Average equity"],
  ["DuPont (3-part) ROE","Net margin × Asset turnover × Financial leverage"],
  ["Debt-to-equity","Total debt / Total equity"],
  ["Interest coverage","EBIT / Interest expense"]
 ],
 corporate:[
  ["WACC","(w_d r_d(1−t)) + (w_p r_p) + (w_e r_e)"],
  ["After-tax cost of debt","r_d × (1 − tax rate)"],
  ["Cost of equity (CAPM)","R_f + β(R_m − R_f)"],
  ["Cost of equity (DDM)","(D₁ / P₀) + g"],
  ["NPV","Σ [CF_t / (1 + r)^t] − initial outlay"],
  ["Degree of operating leverage","%Δ EBIT / %Δ sales"],
  ["Degree of total leverage","DOL × DFL"],
  ["Cash conversion cycle","DSO + DIO − DPO"]
 ],
 equity:[
  ["Gordon growth (constant DDM)","V₀ = D₁ / (r − g)"],
  ["Sustainable growth rate","g = retention ratio × ROE"],
  ["Retention ratio","1 − dividend payout ratio"],
  ["Leading P/E","Price / next year EPS"],
  ["Justified leading P/E","(1 − b) / (r − g)"],
  ["Preferred stock value","D / r"],
  ["Margin call price (long)","P₀ × (1 − initial margin) / (1 − maint. margin)"]
 ],
 fixed:[
  ["Bond price","Σ [Coupon / (1+r)^t] + Par / (1+r)ⁿ"],
  ["Current yield","Annual coupon / Bond price"],
  ["Modified duration","Macaulay duration / (1 + YTM/m)"],
  ["Effective duration","(P₋ − P₊) / (2 × P₀ × Δy)"],
  ["Price change (duration)","−ModDur × Δy"],
  ["Price change (dur. + convexity)","−ModDur×Δy + ½×Convexity×(Δy)²"],
  ["Money duration","ModDur × full price"]
 ],
 deriv:[
  ["Put–call parity","C + PV(X) = P + S₀"],
  ["Forward price (no income)","F₀ = S₀ (1 + r)^T"],
  ["Call intrinsic value","max(0, S − X)"],
  ["Put intrinsic value","max(0, X − S)"],
  ["Option total value","intrinsic value + time value"],
  ["Long forward payoff at T","S_T − F₀"]
 ],
 pm:[
  ["Portfolio return (2 assets)","w_A R_A + w_B R_B"],
  ["Portfolio variance (2 assets)","w_A²σ_A² + w_B²σ_B² + 2w_A w_B ρ σ_A σ_B"],
  ["CAPM / SML","E(R) = R_f + β[E(R_m) − R_f]"],
  ["Beta","Cov(i, mkt) / σ²_mkt"],
  ["Sharpe ratio","(R_p − R_f) / σ_p"],
  ["Total risk","systematic + unsystematic risk"]
 ]
};
