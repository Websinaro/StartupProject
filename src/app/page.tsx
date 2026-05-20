'use client'

import { useState } from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Workflow Automation',
    desc: 'Automate repetitive tasks across 200+ integrations. Let AI handle the busywork while your team focuses on what matters.',
    color: 'from-violet to-violet-light',
  },
  {
    icon: '🎯',
    title: 'Predictive Analytics',
    desc: 'Surface insights before they become problems. Our models analyze patterns to forecast outcomes with 94% accuracy.',
    color: 'from-cyan to-blue-400',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption. Role-based access control. Security built in, not bolted on.',
    color: 'from-rose to-orange-400',
  },
  {
    icon: '🔗',
    title: '200+ Integrations',
    desc: 'Connect Salesforce, Slack, HubSpot, Notion, and hundreds more. Your tools, supercharged by AI.',
    color: 'from-green-400 to-cyan',
  },
  {
    icon: '📊',
    title: 'Real-Time Dashboards',
    desc: 'Custom dashboards that update instantly. Share reports with one click. Data your whole team can actually use.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '🤖',
    title: 'AI Co-Pilot',
    desc: 'An AI assistant trained on your business data. Ask questions in plain English, get instant insights and actions.',
    color: 'from-violet to-rose',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Meridian',
    avatar: 'SC',
    text: 'Nexus AI cut our reporting time from 3 days to 20 minutes. I honestly don\'t know how we operated before.',
    metric: '94% time saved',
  },
  {
    name: 'Marcus Howell',
    role: 'VP Operations, Strata',
    avatar: 'MH',
    text: 'The predictive analytics flagged a supply chain issue 3 weeks before it became a crisis. ROI was immediate.',
    metric: '$2.1M cost avoided',
  },
  {
    name: 'Laila Nassif',
    role: 'Head of Growth, Vanta',
    avatar: 'LN',
    text: 'Setup took 48 hours. Within a week, we had automated 60% of our lead scoring workflow.',
    metric: '3× pipeline velocity',
  },
]

const logos = ['Shopify', 'Stripe', 'Notion', 'Figma', 'Vercel', 'Linear', 'Loom', 'Airtable']

const pricingPlans = [
  { name: 'Starter', price: '49', desc: 'Perfect for small teams getting started with AI automation.', features: ['Up to 5 users', '10 automations', '5 integrations', '10k AI credits/mo', 'Email support'], highlight: false },
  { name: 'Growth', price: '149', desc: 'For scaling teams that need more power and flexibility.', features: ['Up to 25 users', 'Unlimited automations', '50 integrations', '100k AI credits/mo', 'Priority support', 'Custom dashboards', 'API access'], highlight: true },
  { name: 'Enterprise', price: 'Custom', desc: 'For organizations with advanced needs and compliance requirements.', features: ['Unlimited users', 'Unlimited everything', 'Dedicated integrations', 'Unlimited AI credits', '24/7 SLA support', 'SSO & SAML', 'Custom contracts'], highlight: false },
]

const faqs = [
  { q: 'How long does setup take?', a: 'Most teams are up and running in under 48 hours. Our onboarding team handles all the technical heavy lifting.' },
  { q: 'Can I connect my existing tools?', a: 'Yes — we support 200+ integrations including Salesforce, HubSpot, Slack, Notion, Jira, and most major SaaS tools.' },
  { q: 'How is my data kept secure?', a: 'We are SOC 2 Type II certified. All data is encrypted at rest and in transit. We never train models on your data without explicit consent.' },
  { q: 'What happens when I exceed AI credits?', a: 'You\'ll receive a warning at 80% usage. You can upgrade your plan or purchase additional credit packs at any time.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')

  return (
    <main className="bg-ink text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-xs font-bold">N</div>
            <span className="font-body font-700 text-white tracking-tight text-lg">nexus<span className="text-gradient-violet">ai</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-text-muted">
            {['Features', 'Pricing', 'Integrations', 'Changelog'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="font-body text-sm text-text-muted hover:text-white transition-colors hidden md:block">Sign in</a>
            <a href="#waitlist" className="bg-violet hover:bg-violet-light font-body text-sm font-600 px-5 py-2 rounded-lg transition-colors">
              Get started →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Mesh gradient BG */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
        <div className="absolute inset-0 grid-bg" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl animate-float" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-violet/10 border border-violet/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-body text-sm text-text-muted">New: AI Co-Pilot now in public beta</span>
            <span className="font-body text-sm text-violet hover:text-violet-light cursor-pointer">Learn more →</span>
          </div>

          <h1 className="font-body font-800 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            <span className="text-gradient">Intelligence</span>
            <br />that works for
            <br />your business
          </h1>

          <p className="font-body text-text-muted text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12">
            Automate workflows, predict outcomes, and scale your operations with AI that understands your business — not just your data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="flex gap-3 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="bg-ink-700 border border-white/10 text-white placeholder-text-muted font-body text-sm px-5 py-3.5 rounded-lg focus:border-violet outline-none transition-colors flex-1 sm:w-72"
              />
              <button className="bg-violet hover:bg-violet-light font-body font-600 text-sm px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap">
                Start free →
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-text-muted font-body text-sm">
            {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mt-20 relative animate-float">
            <div className="bg-ink-800 border border-white/10 rounded-2xl p-4 violet-glow-border max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-rose/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 bg-ink-700 rounded-md h-6 ml-4" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[['$2.4M', 'Revenue', '+18%'], ['94%', 'Accuracy', 'AI Model'], ['12.4K', 'Tasks', 'Automated']].map(([val, label, sub]) => (
                  <div key={label} className="bg-ink-700 rounded-xl p-4 border border-white/5">
                    <div className="font-body font-700 text-2xl text-gradient-violet">{val}</div>
                    <div className="font-body text-text-muted text-xs mt-1">{label}</div>
                    <div className="font-body text-green-400 text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
              <div className="bg-ink-700 rounded-xl h-32 border border-white/5 flex items-end px-4 pb-4 gap-2">
                {[40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 92, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet/60 to-cyan/40" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="py-16 border-y border-white/5 overflow-hidden">
        <p className="text-center font-body text-text-muted text-sm tracking-widest uppercase mb-10">Trusted by teams at</p>
        <div className="flex gap-16 animate-[scroll_25s_linear_infinite] whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="font-body font-700 text-white/20 text-xl shrink-0 hover:text-white/50 transition-colors">{logo}</span>
          ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-body text-violet text-sm tracking-widest uppercase mb-4">Everything you need</p>
          <h2 className="font-body font-800 text-5xl md:text-6xl leading-tight">
            Built for teams that<br />
            <span className="text-gradient">move fast</span>
          </h2>
          <p className="font-body text-text-muted text-xl mt-6 max-w-2xl mx-auto">
            One platform to automate, analyze, and act. No more tab-switching between a dozen tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-glass rounded-2xl p-8 hover:violet-glow-border transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-body font-700 text-xl mb-3">{f.title}</h3>
              <p className="font-body text-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 px-6 bg-ink-800 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-violet text-sm tracking-widest uppercase mb-4">Social Proof</p>
            <h2 className="font-body font-800 text-4xl md:text-5xl">Teams love Nexus AI</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center font-body font-700 text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-body font-600 text-sm">{t.name}</div>
                      <div className="font-body text-text-muted text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
                <p className="font-body text-text-muted text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="font-body font-700 text-gradient-violet text-sm">{t.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-violet text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="font-body font-800 text-5xl md:text-6xl">Simple, honest pricing</h2>
          <p className="font-body text-text-muted text-xl mt-4">Scale as you grow. No hidden fees. Cancel any time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 relative ${
              plan.highlight
                ? 'bg-gradient-to-b from-violet/20 to-ink-800 border border-violet/40 violet-glow-border'
                : 'card-glass'
            }`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet font-body font-600 text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="font-body font-700 text-lg mb-2">{plan.name}</div>
              <div className="flex items-end gap-1 mb-3">
                {plan.price === 'Custom' ? (
                  <span className="font-body font-800 text-4xl text-gradient">Custom</span>
                ) : (
                  <>
                    <span className="font-body text-text-muted text-lg self-start mt-2">$</span>
                    <span className="font-body font-800 text-5xl">{plan.price}</span>
                    <span className="font-body text-text-muted mb-1">/mo</span>
                  </>
                )}
              </div>
              <p className="font-body text-text-muted text-sm mb-6 leading-relaxed">{plan.desc}</p>
              <button className={`w-full py-3 rounded-lg font-body font-600 text-sm mb-8 transition-colors ${
                plan.highlight
                  ? 'bg-violet hover:bg-violet-light text-white'
                  : 'bg-ink-600 hover:bg-ink-700 text-white border border-white/10'
              }`}>
                {plan.price === 'Custom' ? 'Contact sales' : 'Get started'}
              </button>
              <div className="space-y-3">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-3 font-body text-sm text-text-muted">
                    <svg className="w-4 h-4 text-violet shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-body font-800 text-4xl">Frequently asked</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-body font-600 text-sm">{faq.q}</span>
                <svg className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 font-body text-text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="waitlist" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet/10 border border-violet/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-body text-sm text-text-muted">1,200+ teams on the waitlist</span>
          </div>
          <h2 className="font-body font-800 text-5xl md:text-6xl leading-tight mb-6">
            Ready to work<br />
            <span className="text-gradient">10× smarter?</span>
          </h2>
          <p className="font-body text-text-muted text-xl mb-12">
            Join thousands of teams who've already made the switch. Start free, upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 bg-ink-700 border border-white/10 text-white placeholder-text-muted font-body text-sm px-5 py-4 rounded-xl focus:border-violet outline-none transition-colors"
            />
            <button className="bg-violet hover:bg-violet-light font-body font-600 px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
              Start free trial →
            </button>
          </div>
          <p className="font-body text-text-muted text-sm mt-4">14 days free · No card required · Setup in minutes</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-xs font-bold">N</div>
            <span className="font-body font-700 text-white tracking-tight text-lg">nexus<span className="text-gradient-violet">ai</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-body text-sm text-text-muted">
            {['Privacy', 'Terms', 'Security', 'Status', 'Blog', 'Careers'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <p className="font-body text-text-muted text-sm">© 2025 Nexus AI, Inc.</p>
        </div>
      </footer>
    </main>
  )
}
