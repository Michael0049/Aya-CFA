/* CFA Level I Study Content
   Global CONTENT object keyed by 10 topic IDs.
   Each topic: { handwritten: [...], packet: [...], flashcards: [...] }
*/
var CONTENT = {};

/* ============================ ETHICS ============================ */
CONTENT.ethics = {
  handwritten: [
    {
      title: "Six Components of the Code of Ethics",
      shortcut: "Memorize the 6 'act with' duties: integrity, competence, diligence, respect, ethical leadership.",
      trap: "The Code is principles; the Standards are the rules that enforce them — don't mix them up.",
      relationship: "Code = aspirational; Standards of Professional Conduct = specific obligations."
    },
    {
      title: "Seven Standards (I–VII)",
      shortcut: "I Professionalism, II Integrity of Capital Markets, III Duties to Clients, IV Duties to Employers, V Investment Analysis, VI Conflicts, VII Responsibilities as Member/Candidate.",
      trap: "When a fact pattern fits two Standards, the more specific one governs.",
      visual: "standards tree"
    },
    {
      title: "Standard III(B) Fair Dealing",
      shortcut: "Disseminate recommendations & changes to ALL clients fairly — not equally, but fairly.",
      trap: "'Fairly' ≠ 'equally'; premium clients can get more service if disclosed and not disadvantaging others."
    },
    {
      title: "Standard VI(A) Disclosure of Conflicts",
      shortcut: "Disclose anything that could impair independence/objectivity, prominently and in plain language.",
      trap: "Disclosure is required even if you believe the conflict won't actually affect your judgment."
    },
    {
      title: "Standard II(A) Material Nonpublic Information",
      shortcut: "Don't act or cause others to act on MNPI. Material = would affect price or a reasonable investor's decision.",
      trap: "Mosaic theory is legal: combining public + nonmaterial-nonpublic into a conclusion is fine.",
      relationship: "Information barriers ('firewalls') are the recommended firm control."
    },
    {
      title: "Standard III(E) Preservation of Confidentiality",
      shortcut: "Keep client info confidential unless illegal activity, law requires disclosure, or client permits.",
      trap: "You may always cooperate with a PCP (CFA Institute Professional Conduct Program) investigation."
    },
    {
      title: "GIPS Key Idea",
      shortcut: "Voluntary firm-wide standards for fair representation & full disclosure of performance; firms (not composites) claim compliance.",
      trap: "Compliance is all-or-nothing for the FIRM; you can't claim partial GIPS compliance."
    }
  ],
  packet: [
    {
      heading: "Code of Ethics vs. Standards",
      definition: "The Code states the ethical principles members aspire to; the seven Standards of Professional Conduct are the enforceable rules.",
      intuition: "Code is the 'why,' Standards are the 'what you must actually do.'",
      relationships: "Each Standard operationalizes one or more Code principles.",
      mistakes: "Treating the Code as testable rules — exam violations are framed against specific Standards.",
      trap: "If two Standards apply, choose the most specific and most serious violation."
    },
    {
      heading: "Standard I — Professionalism",
      definition: "Covers Knowledge of the Law (I-A), Independence & Objectivity (I-B), Misrepresentation (I-C), and Misconduct (I-D).",
      intuition: "Follow the stricter of law or Code/Standards; protect your professional judgment from gifts and pressure.",
      relationships: "I-B (independence) frequently overlaps with VI-A (conflicts disclosure).",
      mistakes: "Accepting lavish gifts from outside parties that could compromise objectivity.",
      trap: "Modest, customary gifts from CLIENTS are acceptable if disclosed; gifts from third parties are riskier."
    },
    {
      heading: "Standard III — Duties to Clients",
      definition: "Loyalty/Prudence/Care (III-A), Fair Dealing (III-B), Suitability (III-C), Performance Presentation (III-D), Confidentiality (III-E).",
      intuition: "The client's interest comes before your own and your employer's.",
      relationships: "Suitability ties directly to the Investment Policy Statement (IPS).",
      mistakes: "Ignoring the IPS or making unsuitable recommendations for an individual's circumstances.",
      trap: "For advisory clients, suitability is judged at the portfolio level, not trade-by-trade."
    },
    {
      heading: "Standard IV — Duties to Employers",
      definition: "Loyalty (IV-A), Additional Compensation Arrangements (IV-B), Responsibilities of Supervisors (IV-C).",
      intuition: "Place employer's interests above your own; get written consent for outside compensation.",
      relationships: "Supervisors must establish and enforce compliance systems.",
      mistakes: "Taking client lists or soliciting clients before leaving an employer.",
      trap: "You may prepare to start a competing business while employed, but cannot misappropriate property or solicit clients."
    },
    {
      heading: "Standard V — Investment Analysis & Recommendations",
      definition: "Diligence & Reasonable Basis (V-A), Communication with Clients (V-B), Record Retention (V-C).",
      intuition: "Have a defensible basis; separate fact from opinion; keep supporting records (7 years recommended).",
      relationships: "Reasonable basis supports the misrepresentation and fair-dealing duties.",
      mistakes: "Presenting opinions or assumptions as established facts.",
      trap: "Using third-party research is fine only after verifying its soundness."
    },
    {
      heading: "GIPS Standards",
      definition: "Global Investment Performance Standards — ethical, voluntary standards for calculating and presenting investment performance.",
      intuition: "Designed for fair representation and full disclosure so prospective clients can compare firms.",
      relationships: "Composites group portfolios by strategy/mandate; the firm claims compliance.",
      mistakes: "Cherry-picking only winning portfolios into a composite.",
      trap: "Compliance must be firm-wide; partial or composite-only compliance claims are prohibited."
    }
  ],
  flashcards: [
    { front: "Material nonpublic information (MNPI)", back: "Info that would move price or affect a reasonable investor's decision and is not public. Cannot act or cause others to act on it (Std II-A)." },
    { front: "Mosaic theory", back: "Reaching a conclusion from public + nonmaterial nonpublic info is permissible and not a violation of II-A." },
    { front: "Fair dealing (III-B)", back: "Treat all clients fairly when disseminating recommendations/changes and taking investment action; fairly, not necessarily equally." },
    { front: "Suitability (III-C)", back: "Match recommendations to the client's IPS, objectives, constraints, and risk tolerance; judged at portfolio level." },
    { front: "Independence & objectivity (I-B)", back: "Avoid situations that could compromise judgment; modest gifts from clients OK if disclosed; refuse compensation that biases research." },
    { front: "Misrepresentation (I-C)", back: "No untrue statements or omissions of facts in investment analysis, recommendations, or performance; plagiarism is misrepresentation." },
    { front: "Duty of loyalty to employer (IV-A)", back: "Act for the employer's benefit; don't deprive it of skills/abilities or divulge confidential info; may prepare to compete but not misappropriate." },
    { front: "Additional compensation (IV-B)", back: "Must obtain written consent from all parties before accepting benefits that compete with or conflict with the employer's interest." },
    { front: "Responsibilities of supervisors (IV-C)", back: "Take steps to detect and prevent violations; an inadequate compliance system can itself be a violation." },
    { front: "Disclosure of conflicts (VI-A)", back: "Prominently disclose all matters that could impair independence/objectivity to clients, prospects, and employer." },
    { front: "Priority of transactions (VI-B)", back: "Client transactions come before employer transactions, which come before personal transactions." },
    { front: "Reference to CFA designation (VII-B)", back: "Use the marks correctly; never imply superior performance from holding the charter; 'CFA' is an adjective, not a noun." },
    { front: "Record retention (V-C)", back: "Maintain records supporting analysis and recommendations; CFA Institute recommends a minimum 7-year retention period." },
    { front: "GIPS composite", back: "Aggregation of one or more portfolios managed to a similar strategy/mandate; all fee-paying discretionary portfolios must be in at least one composite." }
  ]
};

/* ============================ QUANT ============================ */
CONTENT.quant = {
  handwritten: [
    {
      title: "Time Value of Money (FV/PV)",
      formula: "FV = PV(1 + r)ⁿ ; PV = FV / (1 + r)ⁿ",
      shortcut: "More compounding periods → divide rate, multiply n.",
      trap: "Match rate periodicity to N; a 'quoted annual' rate is not the periodic rate.",
      relationship: "EAR = (1 + r/m)ᵐ − 1"
    },
    {
      title: "Effective Annual Rate",
      formula: "EAR = (1 + periodic rate)^(periods) − 1 ; continuous: EAR = e^r − 1",
      shortcut: "More frequent compounding → higher EAR.",
      trap: "Don't confuse stated/nominal rate with EAR."
    },
    {
      title: "Variance & Standard Deviation",
      formula: "s² = Σ(Xᵢ − X̄)² / (n − 1) ; s = √s²",
      shortcut: "Sample uses n−1 (Bessel); population uses N.",
      trap: "Variance is in squared units; std dev is back in original units.",
      visual: "bell curve"
    },
    {
      title: "Covariance & Correlation",
      formula: "ρ = Cov(X,Y) / (σₓσᵧ)",
      shortcut: "ρ is bounded −1 to +1; covariance is unbounded.",
      trap: "Correlation measures only LINEAR association; ρ=0 ≠ independence.",
      relationship: "Cov(X,Y) = ρ·σₓ·σᵧ"
    },
    {
      title: "Normal Distribution Rules",
      formula: "Z = (X − μ) / σ",
      shortcut: "≈68% within 1σ, ≈95% within 2σ (1.96 exact), ≈99% within 3σ (2.58 for 99%).",
      trap: "90% CI uses 1.65; 95% uses 1.96; 99% uses 2.58 — memorize these.",
      visual: "bell curve with z-bands"
    },
    {
      title: "Hypothesis Testing Errors",
      shortcut: "Type I = reject true H₀ (prob = α). Type II = fail to reject false H₀ (prob = β). Power = 1 − β.",
      trap: "p-value < α → reject H₀. Smaller α reduces Type I but raises Type II.",
      relationship: "Significance level α = probability of Type I error."
    },
    {
      title: "Simple Linear Regression",
      formula: "Ŷ = b₀ + b₁X ; b₁ = Cov(X,Y)/Var(X)",
      shortcut: "R² = % of variation in Y explained by X = (RSS/SST).",
      trap: "R² high ≠ causation; check residual assumptions.",
      relationship: "SST = RSS + SSE (total = explained + unexplained)."
    }
  ],
  packet: [
    {
      heading: "Time Value of Money",
      definition: "Money has earning capacity, so cash flows at different times must be moved to a common date using a discount/compounding rate.",
      intuition: "A dollar today is worth more than a dollar tomorrow because it can be invested.",
      relationships: "FV and PV are inverses; annuities and perpetuities are shortcuts for level cash-flow streams.",
      mistakes: "Mismatching the number of periods (N) with the periodic rate.",
      trap: "An ordinary annuity pays at period-end; an annuity-due pays at the start (multiply ordinary by (1+r))."
    },
    {
      heading: "Statistical Measures & Distributions",
      definition: "Central tendency (mean, median, mode), dispersion (variance, std dev, range), and shape (skew, kurtosis) summarize data.",
      intuition: "Mean is pulled toward the tail in skewed data; the median resists outliers.",
      relationships: "Positive skew: mean > median > mode. Excess kurtosis > 0 means fat tails (leptokurtic).",
      mistakes: "Using population formula (N) when the data is a sample (should use n−1).",
      trap: "Coefficient of variation (s/mean) lets you compare relative dispersion across different units."
    },
    {
      heading: "Probability Concepts",
      definition: "Rules for combining event likelihoods, including conditional probability and expected value.",
      intuition: "Conditional probability updates a belief given new information.",
      relationships: "Bayes' formula reverses conditional probabilities; covariance/variance feed portfolio risk.",
      mistakes: "Confusing P(A and B) with P(A or B); forgetting independence vs. mutual exclusivity.",
      trap: "Mutually exclusive events cannot both occur, so they are NOT independent (knowing one tells you the other didn't happen)."
    },
    {
      heading: "Sampling & Estimation",
      definition: "Inferring population parameters from samples; the central limit theorem makes sample means approximately normal for large n.",
      intuition: "Bigger samples give tighter confidence intervals because standard error shrinks with √n.",
      relationships: "Standard error = σ/√n; CI = point estimate ± (reliability factor × standard error).",
      mistakes: "Using a z-statistic when n is small and variance is unknown (use t-distribution).",
      trap: "The CLT applies to the sampling distribution of the mean, not to the original data distribution."
    },
    {
      heading: "Hypothesis Testing",
      definition: "A formal procedure to decide whether sample evidence supports rejecting a null hypothesis.",
      intuition: "You assume H₀ true and ask whether the data is too extreme to be chance.",
      relationships: "Reject H₀ if the test statistic falls in the rejection region or p-value < α.",
      mistakes: "Stating the alternative as the thing you 'prove' — you only reject or fail to reject H₀.",
      trap: "A one-tailed test puts all of α in one tail; a two-tailed test splits α/2 each side."
    },
    {
      heading: "Simple Linear Regression",
      definition: "Models a linear relationship between a dependent variable Y and independent variable X.",
      intuition: "The slope b₁ is the expected change in Y per one-unit change in X.",
      relationships: "R² = explained variation / total variation; F-test and t-test on slope assess significance.",
      mistakes: "Assuming correlation implies causation or extrapolating beyond the data range.",
      trap: "Assumptions: linearity, homoskedasticity, independence, and normally distributed errors."
    }
  ],
  flashcards: [
    { front: "Effective annual rate (EAR)", back: "EAR = (1 + stated rate/m)^m − 1; continuous compounding: e^r − 1." },
    { front: "Ordinary annuity vs annuity due", back: "Ordinary pays at end of period; due pays at beginning. PV(due) = PV(ordinary) × (1+r)." },
    { front: "Coefficient of variation", back: "CV = standard deviation / mean; measures risk per unit of return — lower is better." },
    { front: "Sharpe ratio", back: "(Rp − Rf) / σp; excess return per unit of total risk." },
    { front: "Correlation coefficient ρ", back: "ρ = Cov(X,Y)/(σx·σy); bounded −1 to +1; measures linear association only." },
    { front: "Central limit theorem", back: "For n ≥ 30, the sampling distribution of the mean is approximately normal regardless of population shape." },
    { front: "Standard error of the mean", back: "σ/√n (or s/√n); decreases as sample size grows, tightening confidence intervals." },
    { front: "Type I vs Type II error", back: "Type I = reject a true H₀ (prob α). Type II = fail to reject a false H₀ (prob β). Power = 1−β." },
    { front: "p-value", back: "Smallest significance level at which H₀ can be rejected; reject H₀ if p-value < α." },
    { front: "Skewness", back: "Asymmetry. Positive skew: long right tail, mean > median > mode. Negative skew: long left tail." },
    { front: "Kurtosis", back: "Tail thickness. Excess kurtosis > 0 = leptokurtic (fat tails, more outlier risk); normal has kurtosis 3." },
    { front: "Coefficient of determination (R²)", back: "Proportion of variation in Y explained by the regression; for SLR equals ρ²." },
    { front: "Money-weighted vs time-weighted return", back: "Money-weighted = IRR (sensitive to cash-flow timing); time-weighted removes cash-flow timing effects, preferred for manager evaluation." },
    { front: "Bayes' formula", back: "P(A|B) = P(B|A)·P(A) / P(B); updates prior probability with new information." }
  ]
};

/* ============================ ECON ============================ */
CONTENT.econ = {
  handwritten: [
    {
      title: "Elasticity of Demand",
      formula: "Eₚ = %ΔQd / %ΔP",
      shortcut: "|E|>1 elastic, <1 inelastic, =1 unit elastic.",
      trap: "Sign is negative for price; use absolute value for the elastic/inelastic label.",
      relationship: "Elastic demand → price cut raises total revenue."
    },
    {
      title: "Market Structures",
      shortcut: "Perfect comp → monopolistic comp → oligopoly → monopoly (declining competition, rising pricing power).",
      trap: "Only perfect competition is a price-taker (P = MR = MC at the margin).",
      visual: "four market structures grid"
    },
    {
      title: "GDP Approaches",
      formula: "GDP = C + I + G + (X − M)",
      shortcut: "Expenditure = Income approach; both must equal.",
      trap: "Nominal uses current prices; real uses base-year prices (strips inflation)."
    },
    {
      title: "Fiscal vs Monetary Policy",
      shortcut: "Fiscal = government spending & taxes (Treasury). Monetary = money supply & rates (central bank).",
      trap: "Expansionary monetary lowers rates; contractionary raises them to fight inflation.",
      relationship: "Quantity theory: MV = PY"
    },
    {
      title: "Exchange Rate Quotes",
      formula: "Real exch rate = nominal × (foreign CPI / domestic CPI)",
      shortcut: "Direct quote = domestic per 1 foreign; indirect = foreign per 1 domestic.",
      trap: "Appreciation of the base currency means it buys more of the price currency."
    },
    {
      title: "Business Cycle Phases",
      shortcut: "Trough → expansion → peak → contraction. Inflation rises late expansion; unemployment lags.",
      trap: "Leading indicators turn before the economy; lagging (e.g., unemployment) turn after.",
      visual: "business cycle wave"
    }
  ],
  packet: [
    {
      heading: "Elasticity",
      definition: "Sensitivity of quantity demanded/supplied to changes in price, income, or related-good prices.",
      intuition: "Necessities and goods with few substitutes are inelastic; luxuries are elastic.",
      relationships: "Total revenue rises with a price cut when demand is elastic and falls when inelastic.",
      mistakes: "Forgetting that own-price elasticity is negative; comparing only the magnitude.",
      trap: "Cross-price elasticity sign distinguishes substitutes (positive) from complements (negative)."
    },
    {
      heading: "Market Structures",
      definition: "Classification of industries by number of firms, product differentiation, barriers to entry, and pricing power.",
      intuition: "Fewer firms and higher barriers give more pricing power and higher long-run profits.",
      relationships: "Profit maximized where MR = MC in every structure; only perfect competition has P = MR.",
      mistakes: "Assuming monopolies always earn profits — they can still face losses in the short run.",
      trap: "In the long run, perfect and monopolistic competition earn zero economic profit due to entry."
    },
    {
      heading: "Aggregate Output & GDP",
      definition: "GDP is the market value of all final goods and services produced within a country in a period.",
      intuition: "Expenditure, income, and value-added approaches all measure the same total.",
      relationships: "Real GDP = nominal GDP / GDP deflator × 100.",
      mistakes: "Counting intermediate goods or transfer payments in GDP.",
      trap: "GDP excludes used goods, financial transactions, and non-market/black-market activity."
    },
    {
      heading: "Business Cycles & Inflation",
      definition: "Recurring expansions and contractions in economic activity, accompanied by changes in inflation and unemployment.",
      intuition: "Output, employment, and inflation tend to move together over the cycle, with lags.",
      relationships: "CPI measures consumer inflation; cost-push vs demand-pull are the two inflation drivers.",
      mistakes: "Treating unemployment as a leading indicator — it is lagging.",
      trap: "CPI can overstate inflation due to substitution, quality, and new-product biases."
    },
    {
      heading: "Monetary & Fiscal Policy",
      definition: "Central-bank actions on money supply/interest rates (monetary) and government spending/taxes (fiscal) to manage the economy.",
      intuition: "Both can be expansionary or contractionary; they may reinforce or offset each other.",
      relationships: "Quantity theory MV = PY links money growth to inflation; the neutral rate balances the economy.",
      mistakes: "Confusing the policy tools — open-market operations are monetary, not fiscal.",
      trap: "Monetary policy faces lags and a 'pushing on a string' limit in deep recessions."
    },
    {
      heading: "Exchange Rates & Trade",
      definition: "Exchange rates price one currency in terms of another; trade policy affects the current account.",
      intuition: "A weaker currency boosts exports but raises import costs.",
      relationships: "Interest-rate parity links forward premiums to interest-rate differentials.",
      mistakes: "Reversing direct and indirect quote conventions.",
      trap: "In a P/B (price/base) quote, an increase means the BASE currency appreciated."
    }
  ],
  flashcards: [
    { front: "Price elasticity of demand", back: "%ΔQd / %ΔP; |E|>1 elastic, <1 inelastic. Determined by substitutes, necessity, budget share, time horizon." },
    { front: "Cross-price elasticity", back: "Positive = substitutes, negative = complements; measures demand response to another good's price." },
    { front: "Income elasticity", back: "Positive = normal good, negative = inferior good; >1 = luxury." },
    { front: "GDP expenditure approach", back: "GDP = C + I + G + (X − M); consumption, investment, government, net exports." },
    { front: "Real vs nominal GDP", back: "Real uses constant base-year prices (removes inflation); nominal uses current prices. Deflator = nominal/real ×100." },
    { front: "Perfect competition", back: "Many firms, identical products, no barriers, price takers; P = MR = MC; zero long-run economic profit." },
    { front: "Monopoly", back: "Single seller, high barriers, price maker; profit max where MR = MC, price read off demand curve." },
    { front: "Quantity theory of money", back: "MV = PY; assuming stable V and Y, money supply growth drives the price level (inflation)." },
    { front: "Expansionary monetary policy", back: "Central bank buys securities, lowers policy rate, increases money supply to stimulate growth." },
    { front: "Fiscal policy tools", back: "Government spending and taxation; expansionary = more spending/lower taxes to boost demand." },
    { front: "Leading vs lagging indicators", back: "Leading turn before the economy (e.g., stock prices); lagging turn after (e.g., unemployment, CPI)." },
    { front: "CPI biases", back: "New-product, quality-change, and substitution biases tend to overstate measured inflation." },
    { front: "Direct vs indirect quote", back: "Direct = units of domestic currency per 1 foreign unit; indirect = foreign per 1 domestic." },
    { front: "Interest rate parity (covered)", back: "Forward premium/discount offsets the interest-rate differential, eliminating arbitrage." }
  ]
};

/* ============================ FSA ============================ */
CONTENT.fsa = {
  handwritten: [
    {
      title: "Accounting Equation",
      formula: "Assets = Liabilities + Equity",
      shortcut: "Every transaction keeps this in balance.",
      trap: "Equity = contributed capital + retained earnings + OCI; don't forget OCI.",
      relationship: "Retained earnings += Net income − Dividends"
    },
    {
      title: "Inventory: FIFO vs LIFO",
      shortcut: "Rising prices: FIFO → higher ending inventory, higher net income; LIFO → higher COGS, lower taxes.",
      trap: "LIFO is allowed under US GAAP but PROHIBITED under IFRS.",
      relationship: "LIFO reserve = FIFO inventory − LIFO inventory",
      visual: "inventory cost flow"
    },
    {
      title: "Current & Quick Ratios",
      formula: "Current = CA/CL ; Quick = (Cash + ST inv + Receivables)/CL",
      shortcut: "Quick excludes inventory (least liquid current asset).",
      trap: "A high current ratio can hide slow-moving inventory."
    },
    {
      title: "DuPont (ROE) Decomposition",
      formula: "ROE = Net Margin × Asset Turnover × Financial Leverage",
      shortcut: "5-step adds tax burden and interest burden.",
      trap: "Higher ROE from leverage adds risk — not always 'better.'",
      relationship: "ROE = ROA × Leverage"
    },
    {
      title: "Cash Flow Statement (CFO)",
      shortcut: "Indirect: start with NI, add back non-cash (depreciation), adjust for working-capital changes.",
      trap: "Under US GAAP interest paid/received & dividends received are CFO; under IFRS they can be CFO or CFI/CFF.",
      visual: "three CF buckets"
    },
    {
      title: "Depreciation Methods",
      formula: "SL = (Cost − Salvage)/Useful life",
      shortcut: "Accelerated (DDB) front-loads expense, lowering early net income.",
      trap: "DDB ignores salvage in the calculation but cannot depreciate below salvage."
    }
  ],
  packet: [
    {
      heading: "Financial Statements Overview",
      definition: "Balance sheet (position), income statement (performance), cash flow statement (liquidity), and statement of changes in equity, plus footnotes.",
      intuition: "The balance sheet is a snapshot; the income and cash-flow statements cover a period.",
      relationships: "Net income flows to retained earnings; CFO links income to the cash balance.",
      mistakes: "Confusing accrual-based net income with actual cash flow.",
      trap: "Footnotes and MD&A often reveal accounting choices that change comparability."
    },
    {
      heading: "Revenue & Expense Recognition",
      definition: "Revenue is recognized when control transfers to the customer (5-step model); expenses are matched to the revenue they generate.",
      intuition: "Accrual accounting records economic events, not just cash movements.",
      relationships: "Aggressive recognition inflates current earnings at the expense of future periods.",
      mistakes: "Assuming revenue equals cash collected in the same period.",
      trap: "Capitalizing vs expensing a cost shifts the timing of earnings and cash-flow classification."
    },
    {
      heading: "Inventory Accounting",
      definition: "Cost-flow assumptions (FIFO, LIFO, weighted average) allocate cost between COGS and ending inventory.",
      intuition: "In rising prices, LIFO matches current costs to revenue, lowering taxable income.",
      relationships: "Add the LIFO reserve to convert LIFO inventory to a FIFO basis for comparison.",
      mistakes: "Comparing a LIFO firm to a FIFO firm without adjusting for the reserve.",
      trap: "IFRS prohibits LIFO; IFRS uses lower of cost or net realizable value."
    },
    {
      heading: "Long-Lived Assets",
      definition: "Capitalized assets depreciated/amortized over useful lives; impaired when carrying value exceeds recoverable amount.",
      intuition: "Depreciation method choice changes the timing, not the total, of expense.",
      relationships: "Capitalizing boosts current income and CFO but raises future depreciation.",
      mistakes: "Forgetting that IFRS allows revaluation and reversal of impairments (US GAAP generally does not reverse).",
      trap: "Component depreciation is required under IFRS for significant parts with different lives."
    },
    {
      heading: "Income Taxes",
      definition: "Differences between accounting and tax treatment create deferred tax assets/liabilities.",
      intuition: "Temporary differences reverse over time; permanent differences never do.",
      relationships: "DTL arises when tax expense (book) > taxes payable; DTA the reverse.",
      mistakes: "Treating all book-tax differences as temporary.",
      trap: "A valuation allowance reduces a DTA when realization is not 'more likely than not' (US GAAP)."
    },
    {
      heading: "Financial Analysis Techniques",
      definition: "Ratio, common-size, and trend analysis to assess liquidity, solvency, profitability, and activity.",
      intuition: "Ratios are only meaningful versus peers, history, or benchmarks.",
      relationships: "DuPont links profitability, efficiency, and leverage into ROE.",
      mistakes: "Comparing ratios across firms using different accounting policies.",
      trap: "Window dressing near period-end can temporarily distort liquidity ratios."
    }
  ],
  flashcards: [
    { front: "Accounting equation", back: "Assets = Liabilities + Equity; the foundation of double-entry bookkeeping." },
    { front: "LIFO reserve", back: "FIFO inventory − LIFO inventory; add to LIFO inventory and adjust COGS to compare with FIFO firms." },
    { front: "Current ratio vs quick ratio", back: "Current = CA/CL; Quick = (cash + marketable securities + receivables)/CL, excluding inventory." },
    { front: "Cash conversion cycle", back: "DSO + DIO − DPO; days to convert investments in inventory and receivables into cash." },
    { front: "DuPont 3-step ROE", back: "ROE = Net profit margin × Total asset turnover × Financial leverage (Assets/Equity)." },
    { front: "Deferred tax liability", back: "Arises when book income tax expense exceeds taxes currently payable; reverses in future periods." },
    { front: "Operating cash flow (indirect)", back: "Net income + non-cash charges (depreciation) ± changes in working capital." },
    { front: "Diluted EPS", back: "(Net income − preferred dividends + convertible adjustments) / weighted shares assuming dilutive securities converted." },
    { front: "Accruals vs deferrals", back: "Accrual records revenue/expense before cash; deferral records cash before the revenue/expense is earned/incurred." },
    { front: "Capitalizing vs expensing", back: "Capitalizing raises current income/assets and CFO; expensing lowers current income but reduces future depreciation." },
    { front: "Impairment (IFRS vs GAAP)", back: "IFRS: write down to recoverable amount, reversals allowed. US GAAP: reversals generally not allowed." },
    { front: "Gross profit margin", back: "(Revenue − COGS)/Revenue; measures pricing power and production efficiency." },
    { front: "Interest coverage ratio", back: "EBIT / interest expense; solvency measure of ability to service debt." },
    { front: "Quality of earnings red flags", back: "Rising receivables vs sales, declining CFO vs net income, frequent one-time items, aggressive capitalization." }
  ]
};

/* ============================ CORPORATE ============================ */
CONTENT.corporate = {
  handwritten: [
    {
      title: "NPV Decision Rule",
      formula: "NPV = Σ CFₜ/(1+r)ᵗ − Initial outlay",
      shortcut: "Accept if NPV > 0; choose highest NPV among mutually exclusive.",
      trap: "NPV assumes reinvestment at the required rate; IRR assumes reinvestment at IRR.",
      relationship: "NPV and IRR agree for independent projects."
    },
    {
      title: "IRR Decision Rule",
      formula: "0 = Σ CFₜ/(1+IRR)ᵗ − Outlay",
      shortcut: "Accept if IRR > required return.",
      trap: "Non-conventional cash flows can give multiple or no IRR; trust NPV when they conflict.",
      visual: "NPV profile crossover"
    },
    {
      title: "Weighted Average Cost of Capital",
      formula: "WACC = wd·rd(1−t) + wp·rp + we·re",
      shortcut: "Use market-value weights and after-tax cost of debt.",
      trap: "Only DEBT gets the (1−t) tax shield; equity does not.",
      relationship: "Lower WACC → higher firm value."
    },
    {
      title: "Cost of Equity (CAPM)",
      formula: "re = Rf + β(Rm − Rf)",
      shortcut: "Beta scales the equity risk premium.",
      trap: "Use the risk-free rate and ERP, not the historical stock return."
    },
    {
      title: "Degree of Leverage",
      formula: "DOL = %ΔEBIT/%ΔSales ; DFL = %ΔEPS/%ΔEBIT ; DTL = DOL×DFL",
      shortcut: "Operating leverage = fixed operating costs; financial leverage = fixed financing costs.",
      trap: "High total leverage magnifies both gains and losses in EPS."
    },
    {
      title: "Working Capital",
      shortcut: "Manage cash conversion cycle; balance liquidity vs profitability.",
      trap: "Aggressive financing uses more short-term debt (cheaper but riskier).",
      relationship: "Net working capital = current assets − current liabilities"
    }
  ],
  packet: [
    {
      heading: "Capital Budgeting",
      definition: "Process of evaluating long-term investment projects using incremental after-tax cash flows.",
      intuition: "Only cash flows that change because of the project matter.",
      relationships: "NPV measures value added in currency; IRR gives a percentage return.",
      mistakes: "Including sunk costs or ignoring opportunity costs and externalities.",
      trap: "Use NPV over IRR for mutually exclusive projects or unconventional cash flows."
    },
    {
      heading: "Cost of Capital",
      definition: "The required return a firm must earn to satisfy its providers of debt and equity capital.",
      intuition: "WACC is the blended hurdle rate for average-risk projects.",
      relationships: "Component costs weighted by target market-value capital structure; debt is tax-advantaged.",
      mistakes: "Using book-value weights or pre-tax cost of debt.",
      trap: "Project-specific risk may require adjusting the discount rate away from firm WACC."
    },
    {
      heading: "Leverage",
      definition: "Use of fixed costs (operating or financial) that magnify changes in operating income or EPS.",
      intuition: "Leverage increases potential returns and risk symmetrically.",
      relationships: "DTL = DOL × DFL captures total sensitivity of EPS to sales.",
      mistakes: "Confusing operating leverage (cost structure) with financial leverage (debt).",
      trap: "The breakeven point rises with more fixed costs, increasing business risk."
    },
    {
      heading: "Working Capital Management",
      definition: "Managing current assets and liabilities to ensure liquidity while minimizing idle resources.",
      intuition: "Too little working capital risks insolvency; too much sacrifices return.",
      relationships: "Cash conversion cycle links receivables, inventory, and payables management.",
      mistakes: "Treating liquidity and profitability as the same goal.",
      trap: "Stretching payables too far can damage supplier relationships and credit terms."
    },
    {
      heading: "Corporate Governance & Stakeholders",
      definition: "Systems of controls and incentives that manage relationships among shareholders, managers, and other stakeholders.",
      intuition: "Good governance reduces principal-agent conflicts and protects investor value.",
      relationships: "Board independence, voting rights, and disclosure mitigate agency costs.",
      mistakes: "Assuming all stakeholders' interests are aligned with shareholders.",
      trap: "Weak governance (e.g., staggered boards, dual-class shares) can entrench management."
    }
  ],
  flashcards: [
    { front: "Net present value (NPV)", back: "PV of inflows − PV of outflows; accept if positive. Assumes reinvestment at the discount rate." },
    { front: "Internal rate of return (IRR)", back: "Discount rate that sets NPV = 0; accept if IRR > required return. Can be multiple with unconventional cash flows." },
    { front: "WACC", back: "wd·rd(1−t) + wp·rp + we·re; market-value weights, after-tax cost of debt." },
    { front: "Cost of equity (CAPM)", back: "re = Rf + β(Rm − Rf); risk-free rate plus beta times the equity risk premium." },
    { front: "After-tax cost of debt", back: "rd × (1 − tax rate); interest is tax-deductible, creating a tax shield." },
    { front: "Degree of operating leverage (DOL)", back: "%ΔEBIT / %ΔSales; higher with more fixed operating costs." },
    { front: "Degree of financial leverage (DFL)", back: "%ΔEPS / %ΔEBIT; higher with more fixed financing (interest) costs." },
    { front: "Cash conversion cycle", back: "Days inventory + days receivables − days payables; shorter is more efficient." },
    { front: "Sunk cost", back: "Cost already incurred and unrecoverable; excluded from capital budgeting decisions." },
    { front: "Marginal cost of capital", back: "Cost of raising the next dollar of capital; rises as cheaper sources are exhausted." },
    { front: "Agency problem", back: "Conflict where managers (agents) act in their own interest rather than shareholders' (principals')." },
    { front: "Optimal capital structure", back: "Mix of debt and equity that minimizes WACC and maximizes firm value." },
    { front: "Payback period", back: "Time to recover the initial investment; ignores time value of money and cash flows after payback." },
    { front: "Money market yield vs BEY", back: "MMY is on a 360-day basis; bond-equivalent yield restates to a 365-day, semiannual-comparable basis." }
  ]
};

/* ============================ EQUITY ============================ */
CONTENT.equity = {
  handwritten: [
    {
      title: "Gordon Growth Model",
      formula: "V₀ = D₁ / (r − g)",
      shortcut: "Use for stable, mature dividend payers.",
      trap: "Valid only when r > g and g is constant forever.",
      relationship: "g = retention ratio × ROE"
    },
    {
      title: "P/E Ratio & Justified P/E",
      formula: "Justified leading P/E = (D₁/E₁)/(r − g) = payout/(r − g)",
      shortcut: "Higher growth or lower required return → higher justified P/E.",
      trap: "Trailing uses last year's EPS; leading uses forecast EPS.",
      visual: "multiples bar chart"
    },
    {
      title: "Required Return (CAPM)",
      formula: "r = Rf + β(Rm − Rf)",
      shortcut: "Beta measures systematic (non-diversifiable) risk.",
      trap: "CAPM prices only systematic risk; unsystematic risk is diversified away."
    },
    {
      title: "Enterprise Value",
      formula: "EV = Market cap + Debt + Preferred + Minority int − Cash",
      shortcut: "EV/EBITDA is capital-structure neutral.",
      trap: "Subtract cash & equivalents; EV is the cost to acquire the whole business."
    },
    {
      title: "Market Indices",
      shortcut: "Price-weighted (e.g., DJIA) biased to high-price stocks; value-weighted (S&P 500) biased to large caps.",
      trap: "Price-weighted needs a divisor adjustment for splits.",
      relationship: "Float-adjusted cap weighting uses shares available to trade."
    },
    {
      title: "Market Efficiency (EMH)",
      shortcut: "Weak = past prices priced in; Semi-strong = all public info; Strong = all info incl. private.",
      trap: "Technical analysis fails if weak-form holds; fundamental fails if semi-strong holds.",
      visual: "three-tier EMH pyramid"
    }
  ],
  packet: [
    {
      heading: "Market Organization & Indices",
      definition: "Securities markets match buyers and sellers; indices track aggregate performance using a weighting scheme.",
      intuition: "Index construction choices drive performance and rebalancing behavior.",
      relationships: "Price, equal, and market-cap weighting create different biases and reconstitution needs.",
      mistakes: "Assuming all indices are comparable across weighting methods.",
      trap: "Equal-weighted indices require frequent rebalancing and overweight small caps."
    },
    {
      heading: "Market Efficiency",
      definition: "An efficient market reflects available information in prices, so abnormal risk-adjusted returns are hard to earn.",
      intuition: "The more efficient the market, the less active management adds value.",
      relationships: "Three forms (weak, semi-strong, strong) progressively include more information.",
      mistakes: "Believing strong-form efficiency holds in practice (insider trading suggests it does not).",
      trap: "Behavioral biases create anomalies that challenge strict efficiency."
    },
    {
      heading: "Equity Securities & Risk/Return",
      definition: "Common shares give residual ownership and voting; preferred shares have fixed dividends and priority.",
      intuition: "Equity holders bear the most risk and have the highest potential return.",
      relationships: "Cost of equity reflects systematic risk via CAPM beta.",
      mistakes: "Treating preferred stock like common equity in return expectations.",
      trap: "Depositary receipts (ADRs/GDRs) carry currency and country risk despite trading locally."
    },
    {
      heading: "Industry & Company Analysis",
      definition: "Assessing industry structure (Porter's five forces), life cycle, and competitive position.",
      intuition: "Industry economics often matter more than firm-specific factors for returns.",
      relationships: "Competitive advantage drives sustainable margins and growth.",
      mistakes: "Ignoring the industry life-cycle stage when projecting growth.",
      trap: "Cyclical firms' earnings are highly sensitive to the business cycle — normalize them."
    },
    {
      heading: "Equity Valuation Models",
      definition: "Present-value (DDM, FCFE), multiplier (P/E, P/B, EV/EBITDA), and asset-based approaches.",
      intuition: "Different models suit different firms (dividend payers vs growth vs asset-heavy).",
      relationships: "Justified multiples derive from DDM fundamentals (payout, growth, required return).",
      mistakes: "Applying Gordon growth to firms with non-constant or negative growth.",
      trap: "Multiples need comparable peers; differences in accounting and capital structure distort them."
    }
  ],
  flashcards: [
    { front: "Gordon (constant) growth model", back: "V₀ = D₁/(r − g); requires r > g and constant perpetual growth." },
    { front: "Sustainable growth rate", back: "g = retention ratio (b) × ROE; the rate equity can grow without new external financing." },
    { front: "Justified leading P/E", back: "Payout ratio / (r − g); rises with growth and falls with required return." },
    { front: "Enterprise value (EV)", back: "Market cap + total debt + preferred + minority interest − cash & equivalents." },
    { front: "EV/EBITDA", back: "Capital-structure-neutral multiple; useful for comparing firms with different leverage and tax." },
    { front: "Price-weighted index", back: "Sum of prices / divisor; high-priced stocks dominate (e.g., DJIA). Adjust divisor for splits." },
    { front: "Market-cap weighted index", back: "Weights by float-adjusted market value; large caps dominate (e.g., S&P 500), self-rebalancing." },
    { front: "Weak-form efficiency", back: "Prices reflect all past market data; technical analysis cannot earn abnormal returns." },
    { front: "Semi-strong-form efficiency", back: "Prices reflect all public information; fundamental analysis of public data cannot beat the market." },
    { front: "Free cash flow to equity (FCFE)", back: "Cash available to common shareholders after debt payments and reinvestment; discount at cost of equity." },
    { front: "Book value vs market value of equity", back: "Book = accounting equity; market = share price × shares. P/B compares the two." },
    { front: "Porter's five forces", back: "Rivalry, new entrants, substitutes, supplier power, buyer power — determine industry profitability." },
    { front: "Preferred stock value", back: "V = annual dividend / required return (a perpetuity); priority over common in dividends and liquidation." },
    { front: "Depositary receipt (DR)", back: "Negotiable certificate representing foreign shares; ADRs trade in the US, GDRs trade outside home and US markets." }
  ]
};

/* ============================ FIXED ============================ */
CONTENT.fixed = {
  handwritten: [
    {
      title: "Bond Price-Yield Relationship",
      shortcut: "Price and yield move inversely; price = PV of coupons + PV of par.",
      trap: "Premium bond (coupon > YTM) amortizes down to par; discount bond accretes up to par.",
      visual: "convex price-yield curve",
      relationship: "Higher coupon → lower duration."
    },
    {
      title: "Duration",
      formula: "%ΔPrice ≈ −ModDur × Δyield",
      shortcut: "Macaulay = weighted avg time to cash flows; Modified = Macaulay/(1+y).",
      trap: "Duration is a LINEAR estimate; add convexity for large yield moves.",
      relationship: "ModDur = MacDur / (1 + YTM/m)"
    },
    {
      title: "Convexity Adjustment",
      formula: "%ΔP ≈ −ModDur·Δy + ½·Convexity·(Δy)²",
      shortcut: "Convexity always helps a long bondholder (positive for option-free bonds).",
      trap: "Callable bonds exhibit NEGATIVE convexity near the call price."
    },
    {
      title: "Spot vs Forward Rates",
      formula: "(1+S₂)² = (1+S₁)(1+₁f₁)",
      shortcut: "Spot rates discount a single future cash flow; forwards are implied future rates.",
      trap: "Use spot-rate curve to price coupon bonds without arbitrage."
    },
    {
      title: "Yield Spreads",
      shortcut: "G-spread vs Treasury; Z-spread over the spot curve; OAS removes option value.",
      trap: "For a callable bond, OAS < Z-spread; for putable, OAS > Z-spread.",
      relationship: "OAS = Z-spread − option cost"
    },
    {
      title: "Credit Risk Components",
      shortcut: "Expected loss = PD × LGD; LGD = 1 − recovery rate.",
      trap: "Investment grade ≥ BBB−/Baa3; below is high yield ('junk').",
      visual: "rating ladder"
    }
  ],
  packet: [
    {
      heading: "Fixed-Income Basics",
      definition: "Bonds are contractual debt with defined coupon, maturity, and par; features include embedded options and covenants.",
      intuition: "A bond is a stream of promised cash flows whose value depends on discount rates and credit.",
      relationships: "Indenture defines terms; seniority and covenants affect recovery and risk.",
      mistakes: "Ignoring embedded options that change the cash-flow profile.",
      trap: "Floating-rate notes reset coupons, so their price risk is mostly limited to the reset period."
    },
    {
      heading: "Bond Pricing & Yields",
      definition: "Price equals the present value of cash flows; yield measures (YTM, current yield, etc.) summarize return.",
      intuition: "Price and yield move inversely along a convex curve.",
      relationships: "Spot rates price each cash flow; YTM is a single internal rate of return.",
      mistakes: "Assuming you earn the YTM regardless of reinvestment — it requires reinvesting coupons at YTM.",
      trap: "Current yield ignores capital gains/losses and the time value of money."
    },
    {
      heading: "Term Structure",
      definition: "The relationship among yields across maturities, described by spot, par, and forward curves.",
      intuition: "The shape (upward, flat, inverted) reflects expectations and risk premia.",
      relationships: "Forward rates are implied by successive spot rates under no-arbitrage.",
      mistakes: "Confusing spot rates (zero-coupon) with YTM on coupon bonds.",
      trap: "An inverted curve has often preceded recessions but is not a guaranteed signal."
    },
    {
      heading: "Interest-Rate Risk & Duration",
      definition: "Sensitivity of bond price to yield changes, measured by duration and refined by convexity.",
      intuition: "Longer maturity, lower coupon, and lower yield increase duration (more risk).",
      relationships: "%ΔP ≈ −ModDur·Δy + ½·Convexity·(Δy)².",
      mistakes: "Using duration alone for large yield moves and ignoring convexity.",
      trap: "Effective duration is required for bonds with embedded options (cash flows change with rates)."
    },
    {
      heading: "Credit Analysis",
      definition: "Assessing the probability of default and loss given default, summarized by credit ratings and spreads.",
      intuition: "Wider spreads compensate for higher expected credit loss and liquidity risk.",
      relationships: "Expected loss = PD × LGD; spreads widen as credit deteriorates.",
      mistakes: "Treating ratings as static — they migrate, and downgrades can be abrupt.",
      trap: "The 4 Cs (capacity, collateral, covenants, character) frame issuer credit analysis."
    }
  ],
  flashcards: [
    { front: "Price-yield relationship", back: "Inverse and convex; when yield rises, price falls, and vice versa." },
    { front: "Macaulay duration", back: "Weighted-average time (years) to receive a bond's cash flows, weighted by PV." },
    { front: "Modified duration", back: "Macaulay duration / (1 + YTM/periods); estimates % price change for a 1% yield change." },
    { front: "Convexity", back: "Curvature of the price-yield relationship; improves the duration estimate for large yield moves." },
    { front: "Effective duration", back: "Duration for bonds with embedded options, using shifted yield curves since cash flows can change." },
    { front: "Spot rate", back: "Yield on a zero-coupon bond for a single maturity; used to price cash flows without arbitrage." },
    { front: "Forward rate", back: "Implied future interest rate between two dates; (1+S₂)² = (1+S₁)(1+₁f₁)." },
    { front: "Z-spread", back: "Constant spread added to each spot rate so that PV of cash flows equals the bond's price." },
    { front: "Option-adjusted spread (OAS)", back: "Z-spread minus the embedded option cost; comparable across bonds with options." },
    { front: "Yield to maturity (YTM)", back: "IRR assuming the bond is held to maturity and coupons reinvested at the YTM." },
    { front: "Expected loss", back: "Probability of default × loss given default; LGD = 1 − recovery rate." },
    { front: "Investment grade vs high yield", back: "Investment grade ≥ BBB−/Baa3; below is high yield (speculative/'junk')." },
    { front: "Money duration (dollar duration)", back: "ModDur × full price × position size; the currency change in value for a yield move." },
    { front: "Reinvestment vs price risk", back: "Higher rates hurt price but help coupon reinvestment; they offset at the Macaulay-duration horizon (immunization)." }
  ]
};

/* ============================ DERIV ============================ */
CONTENT.deriv = {
  handwritten: [
    {
      title: "Forward vs Futures",
      shortcut: "Forwards: OTC, customized, counterparty risk. Futures: exchange-traded, standardized, marked-to-market daily.",
      trap: "Futures have daily settlement (margin); forwards settle once at expiration.",
      visual: "OTC vs exchange table"
    },
    {
      title: "Forward Price (no-arbitrage)",
      formula: "F₀ = S₀ × (1 + r)^T",
      shortcut: "Add carry costs, subtract carry benefits (dividends/yield).",
      trap: "If F is mispriced, arbitrage (cash-and-carry) forces it back.",
      relationship: "F₀ = (S₀ − PV income + PV costs)(1+r)^T"
    },
    {
      title: "Put-Call Parity",
      formula: "S₀ + p₀ = c₀ + X/(1+r)^T",
      shortcut: "Protective put = fiduciary call.",
      trap: "Holds for European options on the same underlying, strike, and expiry only.",
      visual: "parity equation box"
    },
    {
      title: "Option Moneyness & Payoffs",
      formula: "Call payoff = max(0, Sₜ − X) ; Put = max(0, X − Sₜ)",
      shortcut: "Call ITM when S > X; put ITM when S < X.",
      trap: "Option value = intrinsic + time value; time value ≥ 0 and decays to 0 at expiry."
    },
    {
      title: "Swaps as Series of Forwards",
      shortcut: "A plain-vanilla interest-rate swap exchanges fixed for floating; value ≈ portfolio of forwards.",
      trap: "At initiation a swap has zero value; the fixed rate is set so PV(fixed)=PV(floating).",
      relationship: "Swap = bundle of off-market forward contracts."
    },
    {
      title: "Option Value Drivers",
      shortcut: "Call value ↑ with S, volatility, time, r; ↓ with X. Put value ↑ with X, volatility, time; ↓ with S, r.",
      trap: "Higher volatility raises BOTH call and put values.",
      visual: "sensitivity arrows"
    }
  ],
  packet: [
    {
      heading: "Derivative Markets & Instruments",
      definition: "Contracts deriving value from an underlying asset; include forwards, futures, swaps, and options.",
      intuition: "Derivatives transfer risk and enable price discovery at low cost.",
      relationships: "Exchange-traded instruments are standardized and cleared; OTC are customized.",
      mistakes: "Equating derivatives speculation with their hedging and risk-management uses.",
      trap: "Leverage in derivatives magnifies both gains and losses relative to the cash outlay."
    },
    {
      heading: "Forward Commitments",
      definition: "Forwards, futures, and swaps obligate both parties to transact in the future.",
      intuition: "Both sides are committed; payoff is symmetric (linear) around the contract price.",
      relationships: "Futures are marked to market daily; swaps are a series of forwards.",
      mistakes: "Ignoring counterparty/credit risk in OTC forwards and swaps.",
      trap: "Daily settlement makes futures and forward prices diverge when rates correlate with prices."
    },
    {
      heading: "Pricing & Valuation Basics",
      definition: "No-arbitrage pricing sets derivative prices so risk-free profit is impossible.",
      intuition: "Replicate the derivative with the underlying and risk-free borrowing/lending.",
      relationships: "Forward price = spot compounded at the risk-free rate, adjusted for carry.",
      mistakes: "Confusing price (set at initiation) with value (changes over the contract's life).",
      trap: "Cost of carry (storage, financing) raises the forward; benefits (dividends, yield) lower it."
    },
    {
      heading: "Contingent Claims (Options)",
      definition: "Options give the right, not the obligation, to buy (call) or sell (put) at a strike price.",
      intuition: "Buyers have limited loss (premium) and asymmetric payoff; sellers face the opposite.",
      relationships: "Put-call parity links calls, puts, the underlying, and a risk-free bond.",
      mistakes: "Forgetting that the option seller's risk can be large or unlimited.",
      trap: "American options can be exercised early, so they are worth at least as much as European."
    },
    {
      heading: "Risk Management with Derivatives",
      definition: "Using derivatives to hedge, adjust exposures, or arbitrage mispricings.",
      intuition: "Hedging reduces unwanted risk; arbitrage enforces fair pricing.",
      relationships: "Put-call parity and no-arbitrage relationships underpin replication strategies.",
      mistakes: "Over-hedging or introducing new (basis) risk through imperfect hedges.",
      trap: "Basis risk arises when the hedge instrument and the exposure are not perfectly correlated."
    }
  ],
  flashcards: [
    { front: "Forward contract", back: "OTC agreement to buy/sell an asset at a set price on a future date; customized, settles once, counterparty risk." },
    { front: "Futures vs forwards", back: "Futures are exchange-traded, standardized, marked-to-market daily with a clearinghouse; forwards are OTC and customized." },
    { front: "No-arbitrage forward price", back: "F₀ = S₀(1+r)^T, adjusted up for carrying costs and down for income/benefits." },
    { front: "Put-call parity", back: "S₀ + p₀ = c₀ + X/(1+r)^T; protective put equals fiduciary call (European options)." },
    { front: "Call option payoff", back: "max(0, Sₜ − X); buyer profits when underlying rises above the strike." },
    { front: "Put option payoff", back: "max(0, X − Sₜ); buyer profits when underlying falls below the strike." },
    { front: "Intrinsic vs time value", back: "Intrinsic = in-the-money amount; time value = option price − intrinsic, decays to zero at expiry." },
    { front: "Interest rate swap", back: "Exchange of fixed for floating payments; equivalent to a series of forward rate agreements; zero value at initiation." },
    { front: "Moneyness", back: "Call ITM when S > X, OTM when S < X; put ITM when S < X. ATM when S = X." },
    { front: "Effect of volatility on options", back: "Higher volatility increases BOTH call and put values due to greater upside potential." },
    { front: "Cost of carry", back: "Net cost of holding the underlying (storage + financing − income); raises the forward/futures price." },
    { front: "American vs European option", back: "American can be exercised anytime up to expiry; European only at expiry. American ≥ European in value." },
    { front: "Basis risk", back: "Risk that the hedge instrument and the hedged exposure move imperfectly together." },
    { front: "Credit default swap (CDS)", back: "Contract where the protection buyer pays a premium and receives compensation if a reference entity defaults." }
  ]
};

/* ============================ ALTS ============================ */
CONTENT.alts = {
  handwritten: [
    {
      title: "Alternatives Categories",
      shortcut: "Hedge funds, private equity, real estate, commodities, infrastructure, private debt.",
      trap: "Low reported correlation can be illusory due to stale/smoothed valuations.",
      visual: "alt asset wheel"
    },
    {
      title: "Hedge Fund Fees (2 and 20)",
      formula: "Fee = 2% of AUM + 20% of profits above hurdle",
      shortcut: "Management fee on assets, incentive fee on gains.",
      trap: "High-water mark prevents charging incentive fees on the same gains twice.",
      relationship: "Net return = gross − management − incentive fees"
    },
    {
      title: "Private Equity Strategies",
      shortcut: "Venture (early stage) vs buyout/LBO (mature, leveraged).",
      trap: "LBOs use heavy debt; returns sensitive to exit multiple and leverage.",
      visual: "PE J-curve"
    },
    {
      title: "Real Estate Valuation",
      formula: "Value = NOI / Cap rate",
      shortcut: "Cap rate ≈ discount rate − growth (like Gordon model).",
      trap: "Cap rate and value move inversely; rising cap rates lower property values."
    },
    {
      title: "Commodities & Roll Yield",
      shortcut: "Contango = futures > spot (negative roll); backwardation = futures < spot (positive roll).",
      trap: "Commodity index returns come from spot + roll + collateral yield.",
      relationship: "Total return ≈ spot return + roll yield + collateral yield"
    },
    {
      title: "Alts Characteristics",
      shortcut: "Illiquidity, leverage, limited transparency, complex structures, higher fees.",
      trap: "Survivorship & backfill bias inflate reported hedge-fund index returns."
    }
  ],
  packet: [
    {
      heading: "Categories of Alternatives",
      definition: "Investments outside traditional stocks, bonds, and cash: hedge funds, private equity, real assets, and private debt.",
      intuition: "They seek diversification and return premia from illiquidity and complexity.",
      relationships: "Lower correlation with traditional assets can improve a portfolio's risk-adjusted return.",
      mistakes: "Overstating diversification using smoothed, appraisal-based returns.",
      trap: "Reported low volatility and correlation often reflect infrequent pricing, not true risk."
    },
    {
      heading: "Hedge Funds",
      definition: "Pooled, actively managed vehicles using leverage, derivatives, and long/short positions across strategies.",
      intuition: "Aim for absolute returns rather than tracking a benchmark.",
      relationships: "Strategies include equity hedge, event-driven, relative value, and macro.",
      mistakes: "Ignoring lock-ups, gates, and high fees when evaluating net returns.",
      trap: "Indices suffer survivorship and backfill biases that overstate average performance."
    },
    {
      heading: "Private Equity",
      definition: "Investments in private companies via venture capital, growth, or leveraged buyouts.",
      intuition: "Value creation through operational improvement, leverage, and multiple expansion.",
      relationships: "The J-curve shows early negative returns followed by later gains.",
      mistakes: "Comparing PE IRRs to public returns without adjusting for leverage, fees, and illiquidity.",
      trap: "Exit depends on IPO or sale markets; illiquidity risk is significant."
    },
    {
      heading: "Real Estate & Real Assets",
      definition: "Direct property, REITs, infrastructure, and natural resources providing income and inflation protection.",
      intuition: "Income (rents) plus appreciation, often with inflation linkage.",
      relationships: "Value = NOI / cap rate; cap rate moves inversely with value.",
      mistakes: "Treating appraisal-based valuations as market prices.",
      trap: "Leverage and interest-rate sensitivity amplify real estate return volatility."
    },
    {
      heading: "Commodities & Infrastructure",
      definition: "Exposure via futures (commodities) and long-lived physical assets (infrastructure).",
      intuition: "Commodities hedge inflation; infrastructure offers stable, regulated cash flows.",
      relationships: "Commodity total return = spot + roll yield + collateral yield.",
      mistakes: "Forgetting that holding commodity futures, not spot, drives returns.",
      trap: "Contango erodes returns through negative roll yield over time."
    }
  ],
  flashcards: [
    { front: "Alternative investments", back: "Assets outside traditional stocks/bonds/cash: hedge funds, PE, real estate, commodities, infrastructure, private debt." },
    { front: "2 and 20 fee structure", back: "2% annual management fee on assets + 20% incentive fee on profits, often above a hurdle." },
    { front: "High-water mark", back: "Incentive fees charged only on new profits above the highest prior value, preventing double-charging." },
    { front: "Hurdle rate", back: "Minimum return that must be earned before the manager collects incentive fees." },
    { front: "Leveraged buyout (LBO)", back: "Acquisition of a company financed largely with debt, repaid from the target's cash flows." },
    { front: "Venture capital", back: "Equity financing for early-stage, high-growth private companies; high risk, illiquid, long horizon." },
    { front: "J-curve (private equity)", back: "Early negative returns from fees and write-downs followed by later gains as investments mature." },
    { front: "Capitalization rate", back: "NOI / property value; like a discount rate minus growth. Higher cap rate = lower value." },
    { front: "Net operating income (NOI)", back: "Rental income minus operating expenses, before financing and taxes; used to value real estate." },
    { front: "Contango vs backwardation", back: "Contango: futures > spot (negative roll yield). Backwardation: futures < spot (positive roll yield)." },
    { front: "Commodity total return", back: "Spot price return + roll yield + collateral (risk-free) yield." },
    { front: "Survivorship bias", back: "Excluding failed funds from an index, overstating average reported returns." },
    { front: "Backfill bias", back: "Adding a fund's strong historical returns when it joins an index, inflating index performance." },
    { front: "REIT", back: "Real estate investment trust; pools property investments, trades like a stock, distributes most income as dividends." }
  ]
};

/* ============================ PM ============================ */
CONTENT.pm = {
  handwritten: [
    {
      title: "Portfolio Expected Return",
      formula: "E(Rp) = Σ wᵢ·E(Rᵢ)",
      shortcut: "Weighted average of asset returns.",
      trap: "Portfolio return is a simple weighted average; portfolio RISK is not.",
      relationship: "Σ wᵢ = 1"
    },
    {
      title: "Two-Asset Portfolio Variance",
      formula: "σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂",
      shortcut: "Lower ρ → more diversification benefit.",
      trap: "Diversification works fully only when ρ < 1; at ρ=1 there is none.",
      visual: "efficient frontier"
    },
    {
      title: "CAPM & SML",
      formula: "E(Rᵢ) = Rf + βᵢ(E(Rm) − Rf)",
      shortcut: "Security Market Line plots expected return vs beta.",
      trap: "SML uses beta (systematic risk); CML uses total risk (std dev).",
      relationship: "βᵢ = Cov(i,m)/σ²ₘ"
    },
    {
      title: "Capital Market Line",
      formula: "E(Rp) = Rf + [(E(Rm)−Rf)/σm]·σp",
      shortcut: "CML combines risk-free asset with the market portfolio.",
      trap: "CML applies only to efficient portfolios, not individual securities."
    },
    {
      title: "Performance Measures",
      formula: "Sharpe = (Rp−Rf)/σp ; Treynor = (Rp−Rf)/βp",
      shortcut: "Sharpe uses total risk; Treynor uses systematic risk.",
      trap: "Jensen's alpha = actual − CAPM-required return; positive alpha = outperformance.",
      visual: "risk-return scatter"
    },
    {
      title: "IPS & Risk/Return Objectives",
      shortcut: "IPS sets objectives (return, risk) and constraints (LLTTU: Liquidity, Legal, Tax, Time horizon, Unique).",
      trap: "Willingness AND ability to take risk both matter; the lower usually governs.",
      visual: "IPS constraints list"
    }
  ],
  packet: [
    {
      heading: "Portfolio Management Process",
      definition: "Planning (IPS), execution (asset allocation and security selection), and feedback (monitoring/rebalancing).",
      intuition: "Start with the investor's needs, then build and maintain a portfolio to meet them.",
      relationships: "The IPS drives the strategic asset allocation, the main return/risk driver.",
      mistakes: "Skipping the IPS and chasing returns without defined objectives and constraints.",
      trap: "Constraints (LLTTU) can override return objectives — e.g., a liquidity need limits illiquid assets."
    },
    {
      heading: "Risk & Return Concepts",
      definition: "Return is reward; risk is variability. Risk aversion shapes how investors trade off the two.",
      intuition: "Investors demand higher expected return for bearing more (systematic) risk.",
      relationships: "Total risk = systematic + unsystematic; only systematic risk is priced.",
      mistakes: "Assuming all risk is rewarded — diversifiable risk earns no premium.",
      trap: "Standard deviation captures total risk; beta captures only systematic risk."
    },
    {
      heading: "Diversification & Portfolio Risk",
      definition: "Combining imperfectly correlated assets reduces portfolio variance below the weighted average.",
      intuition: "Lower correlation means assets offset each other's swings.",
      relationships: "The efficient frontier shows the best risk-return combinations.",
      mistakes: "Believing more assets always reduce risk — correlation, not count, drives the benefit.",
      trap: "Correlations tend to rise toward 1 in crises, shrinking diversification when needed most."
    },
    {
      heading: "CAPM & Capital Market Theory",
      definition: "CAPM prices an asset's expected return based on its systematic risk (beta).",
      intuition: "Only undiversifiable risk earns a premium; the market portfolio is the optimal risky portfolio.",
      relationships: "SML: E(R) = Rf + β(Rm−Rf); CML combines the risk-free asset and market portfolio.",
      mistakes: "Confusing the CML (total risk) with the SML (beta).",
      trap: "Assets plotting above the SML are undervalued (offer more return than required)."
    },
    {
      heading: "Investment Policy Statement",
      definition: "A written plan specifying objectives (return, risk) and constraints (liquidity, legal, tax, time horizon, unique).",
      intuition: "The IPS is the contract that disciplines decision-making and sets expectations.",
      relationships: "Objectives and constraints determine the strategic asset allocation.",
      mistakes: "Setting a return objective inconsistent with the stated risk tolerance.",
      trap: "Risk tolerance is the lower of willingness and ability; resolve conflicts in favor of ability/education."
    }
  ],
  flashcards: [
    { front: "Portfolio expected return", back: "E(Rp) = Σ wᵢ·E(Rᵢ); the weighted average of individual asset expected returns." },
    { front: "Two-asset portfolio variance", back: "σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂; lower correlation lowers portfolio risk." },
    { front: "Systematic vs unsystematic risk", back: "Systematic (market) risk is undiversifiable and priced; unsystematic (firm-specific) risk is diversified away." },
    { front: "Beta", back: "β = Cov(asset, market)/Var(market); measures sensitivity to market (systematic) risk; market beta = 1." },
    { front: "CAPM / Security Market Line", back: "E(Rᵢ) = Rf + βᵢ(E(Rm) − Rf); expected return as a function of systematic risk." },
    { front: "Capital Market Line (CML)", back: "Combines risk-free asset and market portfolio; E(Rp) = Rf + [(Rm−Rf)/σm]·σp; uses total risk." },
    { front: "Sharpe ratio", back: "(Rp − Rf)/σp; excess return per unit of total risk." },
    { front: "Treynor ratio", back: "(Rp − Rf)/βp; excess return per unit of systematic (beta) risk." },
    { front: "Jensen's alpha", back: "Rp − [Rf + βp(Rm − Rf)]; return above the CAPM-required return; positive = outperformance." },
    { front: "Efficient frontier", back: "Set of portfolios offering the highest expected return for each level of risk." },
    { front: "M-squared (M²)", back: "Risk-adjusted return measure that scales a portfolio to market volatility for comparison vs the market return." },
    { front: "Investment Policy Statement (IPS)", back: "Document of objectives (return, risk) and constraints (Liquidity, Legal, Tax, Time horizon, Unique)." },
    { front: "Risk tolerance", back: "Combination of ability (capacity) and willingness (psychological) to bear risk; the lower generally governs." },
    { front: "Strategic vs tactical asset allocation", back: "Strategic = long-term target mix from the IPS; tactical = short-term deviations to exploit market views." }
  ]
};
