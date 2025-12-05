import "./App.css";
import Testimonials from "../src/components/Testimonials.jsx";  

function App() {
  return (
    <div className="App">

      {/* ================= NAVBAR ================= */}
      <div className="first-container">
      <header className="navbar">
        <div className="navbar-container">
          <img src="/image/logo.png" alt="Logo" className="logo-image" />
          <div className="logo">StartlyHQ</div>

          <nav className="nav-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>

          <button className="btn btn-primary">Get Started for Free ↗</button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">● New — AI wealth insights now live</span>

          <h1>
            Smarter Wealth <br /> Management for <br /> Everyone
          </h1>

          <p>
            AI-driven investment and financial insights to grow your wealth
            securely. Connect your accounts, unlock powerful analytics.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started for Free ↗</button>
            <button className="btn btn-outline">Learn More ↗</button>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/image/1.png" alt="Hero UI" className="hero-exchange-image" />
        </div>
      </section>

      {/* ================= TRUSTED ================= */}
      <section className="trusted">
        <p>Trusted by leading financial innovators</p>
        <div className="trusted-logos">
          <img src="/image/wise.svg" />
          <img src="/image/stripe.png" />
          <img src="/image/2.png" />
          <img src="/image/paypal.webp" />
          <img src="/image/ally.png" />
          <img src="/image/chase.png" />
        </div>
      </section>

      {/* ================= WHY ================= */}
      {/* ================= WHY TRADITIONAL FAILS ================= */}
      <section className="why-fails">

        <h2>Why Traditional Wealth<br></br> Management Falls Short</h2>
        <p className="why-subtitle">
          Most investors juggle multiple apps, spreadsheets, and advisors —<br></br>
          without a clear picture of their financial future.
        </p>

        <div className="why-fails-grid">

          {/* CARD 1 */}
          <div className="why-fails-card blue">
            <div className="why-icon-box">🧍</div>
            <h4>Access to expert advice is limited</h4>
            <p>
              Traditional advisory models are expensive and often reserved
              for high net worth clients.
            </p>

            <div className="mini-ui">
              <strong>Total Balance</strong>
              <h3>$20,670</h3>
              <div className="mini-btns">
                <span>Deposit</span>
                <span>Send</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="why-fails-card yellow">
            <div className="why-icon-box">💼</div>
            <h4>Portfolio tracking is fragmented</h4>
            <p>
              Accounts scattered across banks, brokers, and apps lead to blind
              spots and missed risks.
            </p>

            <div className="mini-ui">
              <strong>Quick Transfers</strong>
              <div className="mini-users">
                <span>👤</span><span>👤</span><span>👤</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="why-fails-card pink">
            <div className="why-icon-box">📊</div>
            <h4>Manual reporting wastes time</h4>
            <p>
              Spreadsheets, exports, and manual reconciliation eat into time
              you could spend growing wealth.
            </p>

            <div className="mini-ui">
              <strong>Transfer Money</strong>
              <h3>$16,058.94</h3>
            </div>
          </div>

        </div>
      </section>


      {/* ================= AI ASSISTANT ================= */}
      <section className="assistant">
        <div className="assistant-left">
          <h2>Your AI-Powered<br></br> Financial Assistant</h2>
          <p>StartlyHQ combines AI and human expertise to help<br></br>you invest, track, and grow your wealth effortlessly.<br></br>One secure platform for every account.</p>
          <button className="btn-btn-secondary">Get Started Now ↗</button>
        </div>

        <div className="assistant-right">
          <div className="assistant-box">
            <h9><b> Portfolio Management</b></h9>
            <p>Aggregate your bank, breakage, and<br></br>crypto accounts into one real-time view.</p>
          </div>

          <div className="assistant-box">
            <h9><b>Investment Insights</b></h9>
            <p>AI analyses your holdings to surface<br></br>oppurtunities and hidden risks.</p>
          </div>

          <div className="assistant-box">
            <h9><b>Risk Analysis</b></h9>
            <p>Understand how market shifts effect your<br></br>long-term goals with scenerio modeling.</p>
          </div>

          <div className="assistant-box">
            <h9><b>Tailored Suggestions</b></h9>
            <p>Tailored guidance based on your risk<br></br>profiles, timeline, and financial plan.</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES PREVIEW ================= */}
      <section className="features-ui-image-section">
        <h1>
          Features Designed to <br /> Grow Your Wealth
        </h1>

        <p>Everything you need to mentor, optimize, and protect<br></br>your investment in one intuitive workspace</p>

        <img src="/image/11.png" className="features-ui-image" />
      </section>
      <section className="secure-section">
        <div className="secure-content">
          <h1>Secure Transactions</h1>

          <p>
            Bank-level security, encryption, and complaince<br></br>to protect your funds and data.
          </p>


          <button className="btn btn-primary">Get Started for Free </button>

        </div>

        <div className="hero-visual">
          <img src="/image/12.png" alt="Hero UI" className="hero-exchange-image" />
        </div>

      </section>
      <div className="secure-image-wrapper">
      <img src="/image/14.png" className="features-ui-image" />
      </div>
    </div>
      
      {/* ================= SIMPLE STEPS ================= */}
      <section className="steps-section">
        <h2 className="steps-title">
          Simple Steps to <br /> Financial Success
        </h2>

        <div className="steps-grid">

          {/* STEP 01 */}
          <div className="step-card">
            <span className="step-number">Step 01</span>

            <div className="step-bg-icon">👤</div>

            <h3>Sign Up</h3>
            <p>
              Create your secure account in minutes with email or SSO providers.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="step-card">
            <span className="step-number">Step 02</span>

            <div className="step-bg-icon">🔗</div>

            <h3>Connect Accounts</h3>
            <p>
              Link your bank and investment accounts safely through secure integrations.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="step-card">
            <span className="step-number">Step 03</span>

            <div className="step-bg-icon">📊</div>

            <h3>Get Insights</h3>
            <p>
              Receive AI-driven recommendations customized to your risk profile and goals.
            </p>
          </div>

        </div>
      </section>
      {/* ================= WHY STARTLY + PRICING ================= */}
      
      <section className="why-pricing-wrapper">

        {/* ================= WHY STARTLYHQ ================= */}
        <div className="why-startly-new">
        
          {/* LEFT */}
          <div className="why-left-new">
            <h2>Why StartlyHQ?</h2>
            <p>
              Built for modern investors who want institutional-grade intelligence
              without the complexity.
            </p>

            <div className="preview-card-new">
              <div className="preview-top">
                <span>🔊</span>
                <strong>StartlyHQ</strong>
              </div>

              <div className="preview-balance">
                <p>Savings Card</p>
                <h3>$16,058.94</h3>
              </div>

              <div className="preview-actions">
                <span>⬆</span>
                <span>⬇</span>
                <span>➤</span>
                <span>▶</span>
                <span>⋯</span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="why-right-new">

            <div className="why-box orange">
              <div className="why-icon">🧠</div>
              <h4>Trusted AI recommendations.</h4>
              <p>Models trained on decades of market data and rigorously backtested.</p>
            </div>

            <div className="why-box yellow">
              <div className="why-icon">🔒</div>
              <h4>Secure and private</h4>
              <p>End-to-end encryption, read-only connections, and strict privacy controls.</p>
            </div>

            <div className="why-box green">
              <div className="why-icon">🌍</div>
              <h4>Easy-to-understand insights</h4>
              <p>Clear explanations for every recommendation, no jargon required.</p>
            </div>

            <div className="why-box dark">
              <div className="why-icon">👑</div>
              <h4>24/7 access to your dashboard</h4>
              <p>On web and mobile, with real-time updates whenever markets move.</p>
            </div>

          </div>
        </div>

        {/* ================= PRICING ================= */}
        <div className="pricing-new-ui">
          <h2>
            Choose the Plan That <br /> Fits Your Goals
          </h2>

          <div className="pricing-grid-ui">

            {/* BASIC */}
            <div className="pricing-card-ui basic">
              <h3 className="basic">Basic</h3>
              <p>For getting started with AI-assisted investing.</p>

              <div className="price-ui">
                <strong>$0.00</strong>
                <span>Billed per month</span>
              </div>

              <button>Start Free Trial</button>
            </div>

            {/* PRO */}
            <div className="pricing-card-ui pro">
              <h3 className="pro">Pro</h3>
              <p>For active investors who want real-time signals.</p>

              <div className="price-ui">
                <strong>$19.00</strong>
                <span>Billed per month</span>
              </div>

              <button>Start Free Trial</button>
            </div>

            {/* ENTERPRISE */}
            <div className="pricing-card-ui enterprise">
              <h3 className="enterprise">Enterprise</h3>
              <p>For firms and family offices with complex needs.</p>

              <div className="price-ui">
                <strong>Custom</strong>
                <span>Billed per month</span>
              </div>

              <button>Start Free Trial</button>
            </div>

          </div>
        </div>

      </section>
      <Testimonials />


      <section className="seamless">
        <div className="seamless-top">
          <h2>Seamless Connections With Your<br></br>Financial Tools</h2>
          <p>StartlyHQ integrates with leading banks, payment<br></br>provides, and accounting platforms so your data stays in sync</p>
        </div>

        <div className="seamless-logos">
          <img src="./image/wise.svg" />
          <img src="./image/stripe.png" />
          <img src="./image/2.png" />
          <img src="./image/paypal.webp" />
          <img src="./image/ally.png" />
          <img src="./image/chase.png" />
        </div>
      </section>
   

      {/* ================= GREEN CTA ================= */}
      <section className="green-cta">
        <div className="green-cta-left">
          <h2>Take Control of Your Financial<br></br> Future Today</h2>
          <p>Sign up and start your journey to smarter investing with AI-powered<br></br>insights and a complete view of your wealth.</p>
          <button className="green-cta-btn">Start Free Trial ↗</button>
        </div>

        <div className="green-cta-right">
          <img src="/image/6.png" />
        </div>
      </section>

      {/* ================= FULL FOOTER ================= */}
      <footer className="footer-full">

        <div className="footer-top">

          <div className="footer-brand">
            <img src="/image/logo.png" alt="Logo" className="logo-image" />
            <h3 className="logo">StartlyHQ</h3>
            <p>AI-powered wealth management for individuals, startups, and modern financial teams.</p>
          </div>

          <div className="footer-col">
            <strong>Features</strong>
            <ul>
              <li>Lead Management</li>
              <li>Email Marketing</li>
              <li>CRM Integration</li>
              <li>Social Media Management</li>
            </ul>
          </div>

          <div className="footer-col">
            <strong>Navigation</strong>
            <ul>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Company</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="footer-col">
            <strong>Social Handle</strong>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Threads</li>
              <li>Pinterest</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2025 StartlyHQ.Inc. All Rights Reserved.</span>

          <div className="footer-links">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy notice</a>
          </div>
      </div>

        {/* ✅ BIG WATERMARK BRAND */}
        <div className="footer-mega-text">StartlyHQ</div>

      </footer>
      </div>
   
  );
}

export default App;
