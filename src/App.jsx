import './App.css';

function App() {
  return (
    <div className="App">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span>StartlyHQ</span>
          </div>

          <nav className="nav-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>

          <button className="btn btn-primary">Get Started for Free ↗</button>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">● New — AI wealth insights now live</span>

          <h1>
            Smarter Wealth <br />
            Management for <br />
            Everyone
          </h1>

          <p>
            AI-driven investment and financial insights to grow your wealth securely.
            Connect your accounts, unlock powerful analytics.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started for Free ↗</button>
            <button className="btn btn-outline">Learn More ↗</button>
          </div>
        </div>

        {/* RIGHT EXCHANGE IMAGE */}
        <div className="hero-visual">
          <img
            src="/image/1.png"
            alt="Exchange UI"
            className="hero-exchange-image"
          />
        </div>
      </section>

      {/* ================= TRUSTED BRANDS ================= */}
      <section className="trusted">
        <p>Trusted by leading financial innovators</p>

        <div className="trusted-logos">
          <img src="/image/wise.svg" alt="Wise" />
          <img src="/image/stripe.png" alt="Stripe" />
          <img src="/image/revolut.png" alt="Revolut" />
          <img src="/image/paypal.webp" alt="PayPal" />
          <img src="/image/ally.png" alt="Ally" />
          <img src="/image/chase.png" alt="Chase" />
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="why">
        <h2>Why Traditional Wealth Management Falls Short</h2>
        <div className="why-grid">
          <div className="why-card why-card--pink">
            <h4>Limited visibility</h4>
            <p>Manual tracking and spreadsheets make it hard to see your full financial picture.</p>
          </div>
          <div className="why-card why-card--yellow">
            <h4>Fragmented tools</h4>
            <p>Your financial data is scattered across multiple platforms — hard to manage.</p>
          </div>
          <div className="why-card why-card--blue">
            <h4>Slow insights</h4>
            <p>Without automation, you get insights too late to act on them effectively.</p>
          </div>
        </div>
      </section>

      {/* ================= AI-Powered Assistant ================= */}
      <section className="assistant">
        <div className="assistant-left">
          <h2>Your AI-Powered Financial Assistant</h2>
          <p>Gain real-time insights, plan investments, and manage your money — all in one place.</p>
          <button className="btn btn-secondary">Get Started Now</button>
        </div>

        <div className="assistant-right">
          <div className="assistant-box">
            <b>Portfolio Management</b>
            <p>Aggregate your bank, brokerage, and crypto accounts into one real-time view.</p>
          </div>

          <div className="assistant-box">
            <b>Investment Insights</b>
            <p>AI analyzes your holdings to surface opportunities and hidden risks.</p>
          </div>

          <div className="assistant-box">
            <b>Risk Analysis</b>
            <p>Understand how market shifts affect your long-term goals with scenario modeling.</p>
          </div>

          <div className="assistant-box">
            <b>Tailored Suggestions</b>
            <p>Tailored guidance based on your risk profile, timeline, and financial plan.</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES UI IMAGE SECTION ================= */}
      <section className="features-ui-image-section">
        <h1>
          Features Designed to <br />
          Grow Your Wealth
        </h1>

        <p>
          Everything you need to monitor, optimize, and protect your investments
          in one intuitive workspace.
        </p>

        <img
          src="/image/5.png"
          alt="Platform Features Preview"
          className="features-ui-image"
        />
      </section>
      {/* ================= SIMPLE STEPS SECTION ================= */}
      <section className="steps-section">
        <h2>
          Simple Steps to <br />
          Financial Success
        </h2>

        <div className="steps-grid">

          {/* STEP 01 */}
          <div className="step-card">
            <span className="step-number">Step 01</span>
            <h3>Sign Up</h3>
            <p>
              Create your secure account in minutes with email or SSO providers.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="step-card">
            <span className="step-number">Step 02</span>
            <h3>Connect Accounts</h3>
            <p>
              Link your bank and investment accounts safely through secure integrations.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="step-card">
            <span className="step-number">Step 03</span>
            <h3>Get Insights</h3>
            <p>
              Receive AI-driven recommendations customized to your risk profile and goals.
            </p>
          </div>

        </div>
      </section>
      {/* ================= WHY STARTLYHQ ================= */}
      <section className="why-startly">

        {/* LEFT SIDE */}
        <div className="why-left">
          <h2>Why StartlyHQ?</h2>
          <p>
            Built for modern investors who want institutional-grade intelligence
            without the complexity.
          </p>

          {/* PREVIEW CARD */}
          <div className="why-preview-card">
            <div className="preview-header">
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

        {/* RIGHT SIDE */}
        <div className="why-right">

          <div className="why-card">
            <div className="why-icon orange">🧠</div>
            <h4>Trusted AI recommendations.</h4>
            <p>
              Models trained on decades of market data and rigorously backtested.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon yellow">🔒</div>
            <h4>Secure and private</h4>
            <p>
              End-to-end encryption, read-only connections, and strict privacy controls.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon green">🌍</div>
            <h4>Easy-to-understand insights</h4>
            <p>
              Clear explanations for every recommendation, no jargon required.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon dark">👑</div>
            <h4>24/7 access to your dashboard</h4>
            <p>
              On web and mobile, with real-time updates whenever markets move.
            </p>
          </div>

        </div>
      </section>
      {/* ================= PRICING & TESTIMONIALS ================= */}
      <section className="pricing-new">

        <h2 className="pricing-title">
          Choose the Plan That <br /> Fits Your Goals
        </h2>

        <div className="pricing-cards">

          {/* BASIC */}
          <div className="pricing-card basic">
            <h3>Basic</h3>
            <p className="plan-desc">For getting started with AI-assisted investing.</p>

            <div className="price">
              <strong>$0.00</strong>
              <span>Billed per month</span>
            </div>

            <button className="pricing-btn">Start Free Trial</button>
          </div>

          {/* PRO */}
          <div className="pricing-card pro">
            <h3>Pro</h3>
            <p className="plan-desc">
              For active investors who want real-time signals.
            </p>

            <div className="price">
              <strong>$19.00</strong>
              <span>Billed per month</span>
            </div>

            <button className="pricing-btn">Start Free Trial</button>
          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card enterprise">
            <h3>Enterprise</h3>
            <p className="plan-desc">
              For firms and family offices with complex needs.
            </p>

            <div className="price">
              <strong>Custom</strong>
              <span>Billed per month</span>
            </div>

            <button className="pricing-btn">Start Free Trial</button>
          </div>

        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="testimonials">
          <h2>Trusted by Investors Like You</h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <div className="user-info">
                <img src="/image/user1.png" alt="Emily" />
                <div>
                  <strong>Emily R.</strong>
                  <span>Investor</span>
                </div>
              </div>
              <p>
                StartlyHQ helped me make smarter investment decisions! I can finally
                see my full picture across accounts.
              </p>
              <div className="quote">❝❞</div>
            </div>

            <div className="testimonial-card">
              <div className="user-info">
                <img src="/image/user2.png" alt="Jason" />
                <div>
                  <strong>Jason L.</strong>
                  <span>Entrepreneur</span>
                </div>
              </div>
              <p>
                Finally, an easy way to track all my finances. The alerts keep me
                ahead of cash flow and investment changes.
              </p>
              <div className="quote">❝❞</div>
            </div>

            <div className="testimonial-card">
              <div className="user-info">
                <img src="/image/user3.png" alt="Sofia" />
                <div>
                  <strong>Sofia K.</strong>
                  <span>Tech Professional</span>
                </div>
              </div>
              <p>
                The AI insights are a game-changer. I understand my risk better and
                feel more confident about the future.
              </p>
              <div className="quote">❝❞</div>
            </div>

          </div>

          <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

      </section>





      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">StartlyHQ</div>
          <p>© 2025 StartlyHQ. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
