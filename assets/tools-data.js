/* assets/tools-data.js
   - Provides a global TOOLS_DATA array (no module needed)
   - Also supports ES module import (optional) via export default
*/

(function () {
    const TOOLS_DATA = [
      // ===== AI / Fun / Privacy / Security / Misc / Organization =====
      { slug: "suggest-tool", name: "Suggest a new tool", category: "Misc", path: "/tools/suggest-tool.html", desc: "Suggest a new tool idea in a few seconds." },
      { slug: "credible-excuses-generator", name: "Credible Excuse Generator (Work/Couple/Family)", category: "Fun", path: "/tools/credible-excuses-generator.html", desc: "Generate credible excuses with tone and length options." },
      { slug: "data-collection-checker", name: "What Data Does a Website Collect? Checker", category: "Privacy", path: "/tools/data-collection-checker.html", desc: "Analyze a page HTML for trackers, cookies hints, scripts and form fields." },
      { slug: "cookie-rgpd-analyzer", name: "Cookie & GDPR Analyzer", category: "Privacy", path: "/tools/cookie-rgpd-analyzer.html", desc: "Inspect readable cookies and flag common tracking patterns." },
  
      { slug: "name-generator", name: "Name Generator (Business/Baby/Brand)", category: "AI", path: "/tools/name-generator.html", desc: "Generate name ideas quickly (style and length options)." },
      { slug: "ai-prompt-generator", name: "AI Prompt Generator", category: "AI", path: "/tools/ai-prompt-generator.html", desc: "Generate ready-to-use prompts for ChatGPT, Midjourney, Veo and Sora." },
      { slug: "text-pdf-summarizer", name: "Text / PDF Summarizer", category: "AI", path: "/tools/text-pdf-summarizer.html", desc: "Summarize text locally in your browser (no upload required)." },
  
      { slug: "sha256-hash", name: "SHA-256 hash", category: "Security", path: "/tools/sha256-hash.html", desc: "Generate a SHA-256 hash from any text." },
      { slug: "password-generator", name: "Password generator", category: "Security", path: "/tools/password-generator.html", desc: "Create strong passwords directly in your browser." },
  
      { slug: "barcode", name: "Barcode generator", category: "Organization", path: "/tools/barcode.html", desc: "Generate EAN-13 / EAN-8 barcodes from a numeric code." },
      { slug: "qr-code", name: "QR Code generator", category: "Misc", path: "/tools/qr-code.html", desc: "Generate a QR code from a link or short text." },
      { slug: "random-picker", name: "Random picker", category: "Misc", path: "/tools/random-picker.html", desc: "Pick a random item from a list." },
      { slug: "fake-data-generator", name: "Fake data generator", category: "Misc", path: "/tools/fake-data-generator.html", desc: "Generate fake data for tests or mockups." },
      { slug: "pdf-jpg", name: "PDF ↔ JPG Converter", category: "Converter", path: "/tools/pdf-jpg.html", desc: "Convert a PDF page into a JPG image (and related conversions)." },
      { slug: "file-size-converter", name: "File size converter (KB/MB/GB/TB)", category: "Converter", path: "/tools/file-size-converter.html", desc: "Convert file sizes between bytes, KB, MB, GB and TB." },
  
      // ===== Finance =====
      { slug: "borrowing-capacity", name: "Simple borrowing capacity", category: "Finance", path: "/tools/borrowing-capacity.html", desc: "Estimate the maximum loan amount you can afford based on income and expenses." },
      { slug: "loan-payment", name: "Loan payment calculator", category: "Finance", path: "/tools/loan-payment.html", desc: "Estimate your monthly loan payment from amount, rate and duration." },
      { slug: "notary-fees", name: "Notary / closing costs", category: "Finance", path: "/tools/notary-fees.html", desc: "Estimate notary or closing costs from property price and fees." },
      { slug: "rental-yield", name: "Rental yield calculator", category: "Finance", path: "/tools/rental-yield.html", desc: "Estimate gross and net rental yield from price, rent and expenses." },
      { slug: "unit-price", name: "Unit price calculator", category: "Finance", path: "/tools/unit-price.html", desc: "Compare products by price per unit (kg/L/item)." },
      { slug: "monthly-budget", name: "Monthly budget calculator", category: "Finance", path: "/tools/monthly-budget.html", desc: "See income vs expenses and estimate leftover budget." },
      { slug: "monthly-savings", name: "Monthly savings simulator", category: "Finance", path: "/tools/monthly-savings.html", desc: "Estimate savings growth with a fixed annual rate and compounding." },
      { slug: "savings-goal", name: "Savings goal simulator", category: "Finance", path: "/tools/savings-goal.html", desc: "See how much to save each month to reach a goal in time." },
      { slug: "value-in-future", name: "Future Value (10/20/30 years)", category: "Finance", path: "/tools/value-in-future.html", desc: "Estimate future value with annual return and inflation (real value)." },
      { slug: "vat-calculator", name: "VAT calculator", category: "Finance", path: "/tools/vat-calculator.html", desc: "Calculate VAT for a given rate." },
      { slug: "net-gross-salary", name: "Net ↔ gross salary", category: "Finance", path: "/tools/net-gross-salary.html", desc: "Estimate net salary from gross (or the opposite) using a custom rate." },
      { slug: "salary-time", name: "Annual ↔ monthly ↔ hourly salary", category: "Finance", path: "/tools/salary-time.html", desc: "Convert salary between annual, monthly and hourly." },
      { slug: "crypto-pnl", name: "Crypto gains & losses (%)", category: "Finance", path: "/tools/crypto-pnl.html", desc: "Calculate crypto gain/loss in % and amount from entry price and current price." },
      { slug: "crypto-eur", name: "€ ↔ Bitcoin / Crypto converter", category: "Converter", path: "/tools/crypto-eur.html", desc: "Convert euros to crypto using a manual rate (no API)." },
      { slug: "electricity-consumption", name: "Electricity consumption", category: "Finance", path: "/tools/electricity-consumption.html", desc: "Estimate running cost from watts, kWh and total cost." },
      { slug: "amortization", name: "Loan amortization calculator", category: "Finance", path: "/tools/amortization.html", desc: "Free loan amortization calculator. Build a yearly schedule with linear (constant principal) or annuity (constant payment) and see interest, principal and remaining balance."},

  
      // ===== Health =====
      { slug: "running-power", name: "Running Power Zones", category: "Health", path: "/tools/running-power.html", desc: "Calculate running training zones based on FTP / critical power." },
      { slug: "tdee", name: "TDEE – Daily calorie needs", category: "Health", path: "/tools/tdee.html", desc: "Estimate BMR and total daily energy expenditure (TDEE)." },
      { slug: "target-heart-rate", name: "Target heart rate", category: "Health", path: "/tools/target-heart-rate.html", desc: "Estimate training heart rate zones (indicative)." },
      { slug: "bmi", name: "BMI calculator", category: "Health", path: "/tools/bmi.html", desc: "Calculate Body Mass Index (BMI) (indicative)." },
  
      // ===== Converters (units & math) =====
      { slug: "currency-converter", name: "Currency converter (manual rate)", category: "Converter", path: "/tools/currency-converter.html", desc: "Convert currencies using your own custom rate." },
      { slug: "temperature", name: "°C ↔ °F converter", category: "Converter", path: "/tools/temperature.html", desc: "Convert Celsius to Fahrenheit (and reverse)." },
      { slug: "weight-kg-lb", name: "kg ↔ lb converter", category: "Converter", path: "/tools/weight-kg-lb.html", desc: "Convert kilograms to pounds (and reverse)." },
      { slug: "cm-inches", name: "Converter cm ↔ inches", category: "Converter", path: "/tools/cm-inches.html", desc: "Convert centimeters to inches (and reverse)." },
      { slug: "distance-km-miles", name: "km ↔ miles converter", category: "Converter", path: "/tools/distance-km-miles.html", desc: "Convert kilometers to miles (and reverse)." },
      { slug: "speed-kmh-mph", name: "Converter km/h ↔ mph", category: "Converter", path: "/tools/speed-kmh-mph.html", desc: "Convert km/h to mph (and reverse)." },
      { slug: "speed-ms-kmh", name: "Speed m/s ↔ km/h", category: "Converter", path: "/tools/speed-ms-kmh.html", desc: "Convert m/s to km/h (and reverse)." },
      { slug: "hours-minutes", name: "Converter hours ↔ minutes", category: "Converter", path: "/tools/hours-minutes.html", desc: "Convert hours to minutes (and reverse)." },
      { slug: "days-to-hours", name: "Days → hours / minutes converter", category: "Converter", path: "/tools/days-to-hours.html", desc: "Convert days to hours, minutes and seconds." },
      { slug: "decimal-hours", name: "Decimal hours ↔ hours + minutes", category: "Converter", path: "/tools/decimal-hours.html", desc: "Convert decimal hours to hours:minutes (and reverse)." },
      { slug: "fraction", name: "Fraction calculator", category: "Converter", path: "/tools/fraction.html", desc: "Calculate fractions." },
      { slug: "fraction-decimal", name: "Fraction ↔ decimal converter", category: "Converter", path: "/tools/fraction-decimal.html", desc: "Convert fractions to decimals (and reverse)." },
      { slug: "percentage-calculator", name: "Percentage calculator", category: "Converter", path: "/tools/percentage-calculator.html", desc: "Calculate percentages (increase, decrease, ratio)." },
      { slug: "angle-converter", name: "Angle converter", category: "Converter", path: "/tools/angle-converter.html", desc: "Convert angles between common units." },
      { slug: "pressure-converter", name: "Pressure bar ↔ psi", category: "Converter", path: "/tools/pressure-converter.html", desc: "Convert pressure between bar and psi." },
      { slug: "liters-gallons", name: "Converter liters ↔ gallons", category: "Converter", path: "/tools/liters-gallons.html", desc: "Convert liters to gallons (and reverse)." },
      { slug: "meters-feet", name: "Meters ↔ feet", category: "Converter", path: "/tools/meters-feet.html", desc: "Convert meters to feet (and reverse)." },
      { slug: "energy-converter", name: "Energy: Joules ↔ calories ↔ kWh", category: "Converter", path: "/tools/energy-converter.html", desc: "Convert energy between Joules, kcal and kWh." },
  
      // ===== Construction / misc calculators =====
      { slug: "concrete", name: "Concrete calculator (volume + bags)", category: "Converter", path: "/tools/concrete.html", desc: "Estimate concrete volume and cement bag count." },
      { slug: "tile-calculator", name: "Tile calculator (m² + waste)", category: "Misc", path: "/tools/tile-calculator.html", desc: "Estimate tile quantity based on area and waste percentage." },
      { slug: "paint-calculator", name: "Paint calculator", category: "Misc", path: "/tools/paint-calculator.html", desc: "Estimate liters of paint needed based on area and coats." },
      { slug: "insulation", name: "Insulation calculator (R, U → thickness)", category: "Organization", path: "/tools/insulation.html", desc: "Compute insulation thickness from R-value, U-value or conductivity." },
      { slug: "flow-rate", name: "Flow L/min ↔ m³/h", category: "Converter", path: "/tools/flow-rate.html", desc: "Convert flow rate between L/min and m³/h (and reverse)." },
      { slug: "area-volume", name: "m² ↔ m³ converter", category: "Converter", path: "/tools/area-volume.html", desc: "Compute a volume from an area and a height." },
  
      // ===== Time / organization =====
      { slug: "countdown-days", name: "Countdown (days)", category: "Organization", path: "/tools/countdown-days.html", desc: "Enter a date and see how many days are left." },
      { slug: "week-number", name: "Date ↔ week number", category: "Organization", path: "/tools/week-number.html", desc: "Convert a date to an ISO week number." },
      { slug: "stopwatch-timer", name: "Stopwatch & timer", category: "Misc", path: "/tools/stopwatch-timer.html", desc: "Start a simple stopwatch or countdown timer." },
      { slug: "travel-time", name: "Travel time calculator", category: "Converter", path: "/tools/travel-time.html", desc: "Estimate travel time from distance and speed." },
  
      // ===== Simple calculators =====
      { slug: "age-calculator", name: "Age calculator", category: "Misc", path: "/tools/age-calculator.html", desc: "Enter a date of birth and calculate age in years." },
      { slug: "average-calculator", name: "Average calculator", category: "Misc", path: "/tools/average-calculator.html", desc: "Enter values and compute the average." },
      { slug: "bill-splitter", name: "Bill splitter", category: "Finance", path: "/tools/bill-splitter.html", desc: "Split a bill between several people (optional tip)." },
      { slug: "energy", name: "Energy", category: "Converter", path: "/tools/energy.html", desc: "Energy-related calculations (tool page)." }
    ];
  
    // Expose globally (your current pages expect this)
    window.TOOLS_DATA = TOOLS_DATA;
  
    // Optional: also expose an alias if you want later
    window.toolsData = TOOLS_DATA;
  
    // Support ES module import if you ever switch to type="module"
    // (This line is safe in non-module browsers because it won't be parsed unless imported as a module)
  })();