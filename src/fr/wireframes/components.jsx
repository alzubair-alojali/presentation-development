/* eslint-disable */
// @ts-nocheck
// Concatenated wireframe components from system-design/.
// Source: variations.jsx + screens-cart-requests-schedule.jsx + screens-advisor.jsx + screens-admin.jsx
import React from 'react';

// Five wireframe variations for the LIMU Course Registration login.
// All artboards are 1440x900 desktop layouts.

const Logo = ({ shape = 'circle', label = 'LIMU\nLOGO' }) => (
  <div className={`wf-logo ${shape === 'square' ? 'square' : shape === 'shield' ? 'shield' : ''}`}>
    {label.split('\n').map((l, i) => <div key={i}>{l}</div>)}
  </div>
);

const Input = ({ placeholder, eye = false }) => (
  <div className="wf-input">
    <span className="ph">{placeholder}</span>
    {eye && <span className="eye" title="show/hide" />}
  </div>
);

const Footer = ({ style }) => (
  <div className="wf-footer" style={style}>© 2026 LIMU</div>
);

const Annot = ({ children, style }) => (
  <div className="annot" style={style}>{children}</div>
);

// ───────────────────────────────────────────────────────────
// V1 — Classic centered card. Most by-the-book.
// ───────────────────────────────────────────────────────────
const V1Classic = () => (
  <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="wf-card" style={{ width: 420, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <Logo />
        <h1 className="wf-title">Course Registration</h1>
        <p className="wf-subtitle" style={{ textAlign: 'center' }}>Libyan International Medical University</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
        <div>
          <span className="wf-label">Email</span>
          <Input placeholder="you@limu.edu.ly" />
        </div>
        <div>
          <span className="wf-label">Password</span>
          <Input placeholder="••••••••" eye />
        </div>
      </div>

      <button className="wf-btn">Log In</button>

      <a className="wf-link" style={{ alignSelf: 'center' }}>Forgot password?</a>
    </div>

    <Footer style={{ position: 'absolute', bottom: 24, left: 0, right: 0 }} />

    <Annot style={{ top: 200, left: 980, width: 200 }}>
      classic centered card<br/>
      <span style={{ fontSize: 22 }}>↙</span>
    </Annot>
  </div>
);

// ───────────────────────────────────────────────────────────
// V2 — Split layout: brand panel left, form right.
// ───────────────────────────────────────────────────────────
const V2Split = () => (
  <div className="page" style={{ display: 'flex' }}>
    {/* left brand panel */}
    <div style={{
      flex: '0 0 580px',
      background: '#ebe6d8',
      borderRight: '2px solid #1a1a1a',
      padding: '60px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Logo shape="shield" />
        <div style={{ fontFamily: 'Architects Daughter', fontSize: 18, lineHeight: 1.2 }}>
          Libyan International<br/>Medical University
        </div>
      </div>

      {/* placeholder hero */}
      <div style={{
        marginTop: 40,
        height: 380,
        border: '2px dashed #777',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
        color: '#666',
        background: 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(0,0,0,0.04) 12px 13px)'
      }}>
        [ campus photo / illustration placeholder ]
      </div>

      <div style={{ fontFamily: 'Caveat', fontSize: 22, color: '#444' }}>
        “<span className="sketch-underline">Course Registration</span>”
      </div>
    </div>

    {/* right form */}
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <h1 className="wf-title">Sign in</h1>
          <p className="wf-subtitle">Use your LIMU credentials to register for courses.</p>
        </div>

        <div>
          <span className="wf-label">Email</span>
          <Input placeholder="you@limu.edu.ly" />
        </div>
        <div>
          <span className="wf-label">Password</span>
          <Input placeholder="••••••••" eye />
        </div>

        <button className="wf-btn">Log In</button>
        <a className="wf-link" style={{ textAlign: 'left' }}>Forgot password?</a>
      </div>

      <Footer style={{ position: 'absolute', bottom: 24, left: 0, right: 0 }} />

      <Annot style={{ top: 60, right: 40 }}>
        brand on left,<br/>form on right ↓
      </Annot>
    </div>
  </div>
);

// ───────────────────────────────────────────────────────────
// V3 — Compact card with inline labels (floating-style).
// ───────────────────────────────────────────────────────────
const V3Compact = () => (
  <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* faint top bar */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 56,
      borderBottom: '1.5px solid #2a2a2a',
      display: 'flex', alignItems: 'center', padding: '0 32px',
      background: '#fdfcf8',
      gap: 12,
      fontFamily: 'Architects Daughter'
    }}>
      <div style={{ width: 28, height: 28, border: '1.5px solid #2a2a2a', borderRadius: '50%' }} />
      <div style={{ fontSize: 14, color: '#333' }}>LIMU · Course Registration</div>
      <div style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888' }}>
        registration.limu.edu.ly
      </div>
    </div>

    <div className="wf-card soft" style={{ width: 380, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
        <Logo shape="square" />
        <h1 className="wf-title" style={{ fontSize: 22 }}>Course Registration</h1>
        <p className="wf-subtitle">Libyan International Medical University</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Input placeholder="you@limu.edu.ly" />
        <Input placeholder="password" eye />
      </div>

      <button className="wf-btn" style={{ boxShadow: '2px 2px 0 #bbb' }}>Log In</button>

      <a className="wf-link" style={{ alignSelf: 'flex-start', fontSize: 16 }}>Forgot password?</a>
    </div>

    <Footer style={{ position: 'absolute', bottom: 20, left: 0, right: 0 }} />

    <Annot style={{ top: 230, left: 1000 }}>
      compact, no labels<br/>
      <span style={{ fontSize: 22 }}>↙</span><br/>
      with top app bar
    </Annot>
  </div>
);

// ───────────────────────────────────────────────────────────
// V4 — Stacked single-column, generous whitespace, formal.
// ───────────────────────────────────────────────────────────
const V4Formal = () => (
  <div className="page" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120 }}>
    <div style={{ width: 460, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
      <Logo shape="shield" label={'LIMU\nCREST'} />

      <div style={{ textAlign: 'center' }}>
        <h1 className="wf-title" style={{ fontSize: 30 }}>
          <span className="sketch-underline">Course Registration</span>
        </h1>
        <p className="wf-subtitle" style={{ fontSize: 16, marginTop: 10 }}>
          Libyan International Medical University
        </p>
      </div>

      <div style={{ width: '100%', height: 1, borderTop: '1.5px dashed #999' }} />

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <span className="wf-label">Email address</span>
          <Input placeholder="you@limu.edu.ly" />
        </div>
        <div>
          <span className="wf-label">Password</span>
          <Input placeholder="••••••••" eye />
        </div>

        <button className="wf-btn" style={{ marginTop: 8 }}>Log In</button>

        <a className="wf-link" style={{ alignSelf: 'center', marginTop: 4 }}>Forgot password?</a>
      </div>
    </div>

    <Footer style={{ position: 'absolute', bottom: 28, left: 0, right: 0 }} />

    <Annot style={{ top: 140, left: 220 }}>
      no card, just<br/>airy stacked layout →
    </Annot>
    <Annot style={{ top: 380, right: 200 }}>
      ← divider separates<br/>identity from form
    </Annot>
  </div>
);

// ───────────────────────────────────────────────────────────
// V5 — Document-style, bordered sheet, academic vibe.
// ───────────────────────────────────────────────────────────
const V5Document = () => (
  <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#efebe0' }}>
    {/* faux sheet of paper */}
    <div style={{
      width: 520,
      background: '#fdfcf6',
      border: '1.5px solid #1a1a1a',
      boxShadow: '6px 6px 0 #1a1a1a',
      padding: 0,
      position: 'relative'
    }}>
      {/* header band */}
      <div style={{
        borderBottom: '1.5px solid #1a1a1a',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: '#f4f0e0'
      }}>
        <Logo />
        <div>
          <div style={{ fontFamily: 'Architects Daughter', fontSize: 18 }}>
            Libyan International Medical University
          </div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#666', marginTop: 2 }}>
            REGISTRAR · STUDENT PORTAL
          </div>
        </div>
      </div>

      {/* body */}
      <div style={{ padding: '36px 48px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888', letterSpacing: 1 }}>
            FORM 01 / LOGIN
          </div>
          <h1 className="wf-title" style={{ marginTop: 4 }}>Course Registration</h1>
          <p className="wf-subtitle">Sign in to register, drop, or view your enrolled courses.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <span className="wf-label">1. Email</span>
            <Input placeholder="you@limu.edu.ly" />
          </div>
          <div>
            <span className="wf-label">2. Password</span>
            <Input placeholder="••••••••" eye />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="wf-btn" style={{ flex: 1 }}>Log In</button>
          <a className="wf-link" style={{ whiteSpace: 'nowrap' }}>Forgot password?</a>
        </div>
      </div>

      {/* footer band */}
      <div style={{
        borderTop: '1.5px dashed #999',
        padding: '12px 32px',
        fontFamily: 'JetBrains Mono',
        fontSize: 11,
        color: '#888',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>© 2026 LIMU</span>
        <span>v.1 · DRAFT</span>
      </div>
    </div>

    <Annot style={{ top: 120, left: 220 }}>
      academic “form”<br/>vibe — like a paper<br/>registration sheet ↘
    </Annot>
  </div>
);

// ───────────────────────────────────────────────────────────
// OTP — same split layout, right panel is the verification form.
// ───────────────────────────────────────────────────────────
const OtpBox = () => (
  <div style={{
    width: 52,
    height: 60,
    border: '1.5px solid #2a2a2a',
    borderRadius: 4,
    background: '#fff',
    boxShadow: '2px 2px 0 rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Kalam, cursive',
    fontSize: 24,
    color: '#bbb'
  }}>_</div>
);

const V2Otp = () => (
  <div className="page" style={{ display: 'flex' }}>
    {/* left brand panel — identical to V2 login */}
    <div style={{
      flex: '0 0 580px',
      background: '#ebe6d8',
      borderRight: '2px solid #1a1a1a',
      padding: '60px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Logo shape="shield" />
        <div style={{ fontFamily: 'Architects Daughter', fontSize: 18, lineHeight: 1.2 }}>
          Libyan International<br/>Medical University
        </div>
      </div>

      <div style={{
        marginTop: 40,
        height: 380,
        border: '2px dashed #777',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
        color: '#666',
        background: 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(0,0,0,0.04) 12px 13px)'
      }}>
        [ campus photo / illustration placeholder ]
      </div>

      <div style={{ fontFamily: 'Caveat', fontSize: 22, color: '#444' }}>
        “<span className="sketch-underline">Course Registration</span>”
      </div>
    </div>

    {/* right panel — OTP form */}
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: 440, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div>
          <h1 className="wf-title">Verify your email</h1>
          <p className="wf-subtitle" style={{ marginTop: 8, lineHeight: 1.45 }}>
            We sent a 6-digit code to <span style={{ color: '#222', fontWeight: 700 }}>ali@limu.edu.ly</span>.<br/>
            Enter it below to continue.
          </p>
        </div>

        {/* OTP boxes */}
        <div style={{ display: 'flex', gap: 10 }}>
          <OtpBox /><OtpBox /><OtpBox /><OtpBox /><OtpBox /><OtpBox />
        </div>

        {/* countdown */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12,
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <span style={{
            display: 'inline-block',
            width: 8, height: 8,
            borderRadius: '50%',
            background: '#c0392b'
          }} />
          Code expires in <span style={{ color: '#222', fontWeight: 700 }}>04:32</span>
        </div>

        <button className="wf-btn">Verify</button>

        {/* secondary links */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 18,
              color: '#aaa',
              textDecoration: 'line-through',
              cursor: 'not-allowed'
            }}>Resend code</span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: '#999'
            }}>available in 0:45</span>
          </div>
          <a className="wf-link" style={{ fontSize: 18 }}>← Back to login</a>
        </div>
      </div>

      <Footer style={{ position: 'absolute', bottom: 24, left: 0, right: 0 }} />

      <Annot style={{ top: 60, right: 40 }}>
        OTP — 6 boxes,<br/>countdown, resend ↓
      </Annot>
      <Annot style={{ top: 540, left: 660, color: '#555' }}>
        ← disabled until<br/>countdown ends
      </Annot>
    </div>
  </div>
);

window.V1Classic = V1Classic;
window.V2Split = V2Split;
window.V3Compact = V3Compact;
window.V4Formal = V4Formal;
window.V5Document = V5Document;
window.V2Otp = V2Otp;

// ───────────────────────────────────────────────────────────
// Student Dashboard — app shell, no split brand panel.
// ───────────────────────────────────────────────────────────
const NavIcon = ({ kind }) => {
  // tiny sketchy icon glyphs — squares/lines, not real iconography
  const common = {
    width: 16, height: 16,
    border: '1.5px solid currentColor',
    borderRadius: 3,
    flexShrink: 0,
    position: 'relative',
    boxSizing: 'border-box'
  };
  if (kind === 'dash') return <div style={{ ...common, background: 'linear-gradient(to bottom right, currentColor 50%, transparent 50%)', opacity: 0.9 }} />;
  if (kind === 'catalog') return <div style={{ ...common, borderRadius: 0 }}><div style={{ position:'absolute', inset: 3, borderTop: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor' }} /></div>;
  if (kind === 'schedule') return <div style={{ ...common }}><div style={{ position:'absolute', top: 4, left: 2, right: 2, height: 1, background: 'currentColor' }} /><div style={{ position:'absolute', top: 8, left: 2, right: 6, height: 1, background: 'currentColor' }} /></div>;
  if (kind === 'requests') return <div style={{ ...common, borderRadius: '50%' }}><div style={{ position:'absolute', inset: 3, borderTop:'1.5px solid currentColor' }}/></div>;
  if (kind === 'bell') return <div style={{ ...common, borderRadius: '50% 50% 4px 4px / 60% 60% 4px 4px' }} />;
  if (kind === 'logout') return <div style={{ ...common }}><div style={{ position:'absolute', top: 6, right: -3, width: 7, height: 1, background: 'currentColor' }} /></div>;
  return <div style={common} />;
};

const NavItem = ({ icon, label, selected }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 14px',
    borderRadius: 4,
    background: selected ? '#1a1a1a' : 'transparent',
    color: selected ? '#fdfcf8' : '#2a2a2a',
    fontFamily: 'Architects Daughter, cursive',
    fontSize: 15,
    cursor: 'pointer',
    border: selected ? '1.5px solid #1a1a1a' : '1.5px solid transparent',
    boxShadow: selected ? '2px 2px 0 #888' : 'none'
  }}>
    <NavIcon kind={icon} />
    <span>{label}</span>
  </div>
);

const StatCard = ({ label, value, accent }) => (
  <div className="wf-card soft" style={{
    flex: 1,
    padding: '18px 20px',
    background: '#fdfcf8',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    minWidth: 0
  }}>
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: 1,
      color: '#777',
      textTransform: 'uppercase'
    }}>{label}</div>
    <div style={{
      fontFamily: 'Architects Daughter, cursive',
      fontSize: 36,
      lineHeight: 1,
      color: '#1a1a1a'
    }}>
      {value}
      {accent && <span style={{ display: 'inline-block', marginLeft: 8, width: 10, height: 10, borderRadius: '50%', background: '#c0392b', verticalAlign: 'middle' }} />}
    </div>
  </div>
);

const ActivityItem = ({ text, time, dot }) => (
  <div style={{
    display: 'flex',
    gap: 12,
    padding: '12px 0',
    borderBottom: '1px dashed #c8c2b0',
    alignItems: 'flex-start'
  }}>
    <div style={{
      width: 8, height: 8, borderRadius: '50%',
      background: dot, marginTop: 6, flexShrink: 0
    }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: 'Kalam, cursive', fontSize: 14, color: '#222', lineHeight: 1.35 }}>{text}</div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#888', marginTop: 3 }}>{time}</div>
    </div>
  </div>
);

// Reusable app shell — header + sidebar. Renders children in main area.
const AppShell = ({ selected, children }) => (
  <div className="page" style={{ background: '#f4f0e4', display: 'flex', flexDirection: 'column' }}>
    {/* TOP HEADER */}
    <div style={{
      height: 60,
      borderBottom: '2px solid #1a1a1a',
      background: '#fdfcf8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 20,
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32,
          border: '1.5px dashed #555',
          borderRadius: '50%',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 7,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#777',
          background: 'repeating-linear-gradient(45deg, transparent 0 5px, rgba(0,0,0,0.04) 5px 6px)'
        }}>LIMU</div>
        <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>Course Registration</div>
      </div>

      <div style={{
        marginLeft: 12,
        padding: '5px 12px',
        border: '1.5px solid #2a2a2a',
        borderRadius: 20,
        background: '#ebe6d8',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        color: '#222',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d5e3e' }} />
        Fall 2026 · Registration Open
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <NavIcon kind="bell" />
        <div style={{
          position: 'absolute', top: -4, right: -6,
          width: 14, height: 14, borderRadius: '50%',
          background: '#c0392b', color: '#fff',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid #fdfcf8'
        }}>3</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid #2a2a2a',
          background: '#ebe6d8',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#444'
        }}>AA</div>
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 14 }}>Ali Agela</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>▾</div>
      </div>
    </div>

    <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
      <div style={{
        width: 220,
        borderRight: '1.5px solid #1a1a1a',
        background: '#ebe6d8',
        padding: '20px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        flexShrink: 0
      }}>
        <NavItem icon="dash" label="Dashboard" selected={selected === 'dash'} />
        <NavItem icon="catalog" label="Browse Catalog" selected={selected === 'catalog'} />
        <NavItem icon="schedule" label="My Schedule" selected={selected === 'schedule'} />
        <NavItem icon="requests" label="My Requests" selected={selected === 'requests'} />
        <NavItem icon="bell" label="Notifications" selected={selected === 'notifications'} />
        <div style={{ flex: 1 }} />
        <div style={{ borderTop: '1px dashed #999', paddingTop: 8 }}>
          <NavItem icon="logout" label="Log out" />
        </div>
      </div>

      {children}
    </div>
  </div>
);

const Dashboard = () => (
  <AppShell selected="dash">
      <div style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'hidden' }}>
        {/* page header */}
        <div>
          <h1 className="wf-title" style={{ fontSize: 30 }}>
            Welcome back, <span className="sketch-underline">Ali</span>
          </h1>
          <p className="wf-subtitle" style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#c0392b', display: 'inline-block' }} />
            Registration window closes in <strong style={{ color: '#222' }}>5 days</strong>
          </p>
        </div>

        {/* STATS */}
        <div style={{ display: 'flex', gap: 16 }}>
          <StatCard label="Enrolled Credits" value="12 / 18" />
          <StatCard label="Pending Requests" value="1" />
          <StatCard label="Approved Sections" value="4" />
          <StatCard label="Notifications" value="3" accent />
        </div>

        {/* 2-COL SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, flex: 1, minHeight: 0 }}>
          {/* QUICK ACTIONS */}
          <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>SECTION</div>
              <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 22, margin: '4px 0 0' }}>Quick Actions</h2>
            </div>

            <button className="wf-btn" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Browse Catalog</span>
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 22 }}>→</span>
            </button>
            <button className="wf-btn outline" style={{ textAlign: 'left' }}>View My Schedule</button>
            <button className="wf-btn outline" style={{ textAlign: 'left' }}>Submit a Request</button>

            <div style={{ marginTop: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#999' }}>
              tip: most-used actions surfaced here
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '22px 24px', display: 'flex', flexDirection: 'column' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>SECTION</div>
              <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 22, margin: '4px 0 12px' }}>Recent Activity</h2>
            </div>
            <div style={{ borderTop: '1px dashed #c8c2b0' }}>
              <ActivityItem
                dot="#2d5e3e"
                text="Request #1042 approved by Dr. Khaled"
                time="2h ago"
              />
              <ActivityItem
                dot="#b07d2a"
                text="Programming 2 Lab rescheduled to Tue 2pm"
                time="1d ago"
              />
              <ActivityItem
                dot="#c0392b"
                text="Web Design — section full"
                time="2d ago"
              />
            </div>
            <a className="wf-link" style={{ marginTop: 'auto', alignSelf: 'flex-start', fontSize: 16 }}>See all →</a>
          </div>
        </div>
      </div>

    {/* annotations */}
    <Annot style={{ top: 12, right: 380, color: '#555' }}>
      ← bell w/ unread<br/>count
    </Annot>
    <Annot style={{ top: 220, left: 70, color: '#555' }}>
      selected nav<br/>state ↗
    </Annot>
    <Annot style={{ top: 360, left: 1180, color: '#555' }}>
      ← stat cards<br/>(4 across)
    </Annot>
  </AppShell>
);

window.Dashboard = Dashboard;

// ───────────────────────────────────────────────────────────
// Course Catalog — reuses AppShell.
// ───────────────────────────────────────────────────────────
const FilterChip = ({ label }) => (
  <div style={{
    padding: '8px 14px',
    border: '1.5px solid #2a2a2a',
    borderRadius: 20,
    background: '#fdfcf8',
    fontFamily: 'Kalam, cursive',
    fontSize: 13,
    color: '#222',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    boxShadow: '2px 2px 0 rgba(0,0,0,0.08)',
    whiteSpace: 'nowrap'
  }}>
    {label}
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>▾</span>
  </div>
);

const Badge = ({ kind }) => {
  const map = {
    eligible: { bg: '#dcead0', border: '#2d5e3e', color: '#1f4630', text: 'ELIGIBLE' },
    missing: { bg: '#f3e2c4', border: '#b07d2a', color: '#6e4a13', text: 'MISSING PREREQUISITE' },
    overlimit: { bg: '#f1d3d0', border: '#c0392b', color: '#7a1f17', text: 'CREDIT LIMIT EXCEEDED' },
  }[kind];
  return (
    <span style={{
      padding: '3px 8px',
      borderRadius: 3,
      border: `1.5px solid ${map.border}`,
      background: map.bg,
      color: map.color,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 9,
      letterSpacing: 0.5,
      whiteSpace: 'nowrap'
    }}>{map.text}</span>
  );
};

const CourseCard = ({ code, name, meta, sections, prereq, eligibility, note }) => (
  <div className="wf-card soft" style={{
    background: '#fdfcf8',
    padding: '16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    minHeight: 0
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
        fontWeight: 700,
        color: '#222',
        letterSpacing: 0.5
      }}>{code}</div>
      <Badge kind={eligibility} />
    </div>

    <div style={{
      fontFamily: 'Architects Daughter, cursive',
      fontSize: 18,
      color: '#1a1a1a',
      lineHeight: 1.2
    }}>{name}</div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, fontFamily: 'Kalam, cursive', fontSize: 13, color: '#555', lineHeight: 1.35 }}>
      <div>{meta}</div>
      <div>Sections: {sections}</div>
      <div>Prerequisite: {prereq}</div>
      {note && (
        <div style={{
          marginTop: 4,
          padding: '6px 8px',
          borderLeft: `3px solid ${eligibility === 'overlimit' ? '#c0392b' : '#b07d2a'}`,
          background: eligibility === 'overlimit' ? '#f9e9e7' : '#f7eedb',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          color: '#444'
        }}>
          {note}
        </div>
      )}
    </div>

    <button className="wf-btn" style={{
      marginTop: 'auto',
      padding: '10px 14px',
      fontSize: 14,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '2px 2px 0 #888'
    }}>
      <span>View Details</span>
      <span style={{ fontFamily: 'Caveat, cursive', fontSize: 18 }}>→</span>
    </button>
  </div>
);

const COURSES = [
  { code: 'CS-201', name: 'Programming 2', meta: '3 credits · Computer Science', sections: '2 lecture groups · 2 lab groups', prereq: 'Programming 1', eligibility: 'eligible' },
  { code: 'CS-203', name: 'Web Development', meta: '3 credits · Computer Science', sections: '2 lecture groups · 2 lab groups', prereq: 'Programming 1', eligibility: 'eligible' },
  { code: 'CS-301', name: 'Operating Systems', meta: '3 credits · Computer Science', sections: '2 lecture groups · 2 lab groups', prereq: 'CS-202 Data Structures', eligibility: 'missing', note: 'Need: CS-202 Data Structures' },
  { code: 'CS-310', name: 'Compilers', meta: '3 credits · Computer Science', sections: '1 lecture group · 1 lab group', prereq: 'CS-301 Operating Systems', eligibility: 'missing', note: 'Need: CS-301 Operating Systems' },
  { code: 'CS-205', name: 'Software Engineering', meta: '3 credits · Computer Science', sections: '2 lecture groups · 2 lab groups', prereq: 'Programming 1', eligibility: 'overlimit', note: 'Adding this would exceed your 18-credit limit' },
  { code: 'CS-220', name: 'Database Systems', meta: '3 credits · Computer Science', sections: '2 lecture groups · 2 lab groups', prereq: 'Programming 2', eligibility: 'eligible' },
];

const Catalog = () => (
  <AppShell selected="catalog">
    <div style={{ flex: 1, padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'hidden', minWidth: 0 }}>
      {/* page header */}
      <div>
        <h1 className="wf-title" style={{ fontSize: 28 }}>
          <span className="sketch-underline">Course Catalog</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          Fall 2026 · <strong style={{ color: '#222' }}>18 courses</strong> available
        </p>
      </div>

      {/* filter bar */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div className="wf-input" style={{
          flex: '0 0 40%',
          padding: '10px 14px',
          fontSize: 14
        }}>
          <span style={{ width: 14, height: 14, border: '1.5px solid #777', borderRadius: '50%', display: 'inline-block', position: 'relative' }}>
            <span style={{ position: 'absolute', bottom: -4, right: -4, width: 6, height: 1.5, background: '#777', transform: 'rotate(45deg)', transformOrigin: '0 0' }} />
          </span>
          <span className="ph">Search by code or name…</span>
        </div>
        <FilterChip label="Department: All" />
        <FilterChip label="Credits: Any" />
        <FilterChip label="Day: Any" />
        <FilterChip label="Type: All" />
      </div>

      {/* grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        flex: 1,
        minHeight: 0
      }}>
        {COURSES.map((c) => <CourseCard key={c.code} {...c} />)}
      </div>

      {/* pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
        color: '#666',
        paddingTop: 4
      }}>
        <span>Showing 1–6 of 18</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ padding: '4px 8px', cursor: 'pointer' }}>‹</span>
          <span style={{
            padding: '4px 10px',
            border: '1.5px solid #1a1a1a',
            background: '#1a1a1a',
            color: '#fdfcf8',
            borderRadius: 3
          }}>1</span>
          <span style={{ padding: '4px 10px', border: '1.5px solid #2a2a2a', borderRadius: 3, cursor: 'pointer' }}>2</span>
          <span style={{ padding: '4px 10px', border: '1.5px solid #2a2a2a', borderRadius: 3, cursor: 'pointer' }}>3</span>
          <span style={{ padding: '4px 8px', cursor: 'pointer' }}>›</span>
        </div>
      </div>
    </div>

    <Annot style={{ top: 90, right: 320, color: '#555' }}>
      ← search + 4<br/>filter pills
    </Annot>
    <Annot style={{ top: 380, left: 80, color: '#555' }}>
      eligibility badge<br/>per card →
    </Annot>
  </AppShell>
);

window.Catalog = Catalog;

// ───────────────────────────────────────────────────────────
// Course Details — reuses AppShell. "Browse Catalog" stays selected.
// ───────────────────────────────────────────────────────────
const CapacityBar = ({ filled, total, danger }) => {
  const pct = Math.min(100, (filled / total) * 100);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{
        height: 8,
        border: '1.5px solid #2a2a2a',
        background: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: `${pct}%`,
          height: '100%',
          background: danger ? '#c0392b' : '#2d5e3e',
          opacity: 0.85
        }} />
      </div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        color: danger ? '#7a1f17' : '#444'
      }}>
        {filled} / {total} enrolled{danger ? ' · almost full' : ''}
      </div>
    </div>
  );
};

const SectionCard = ({ groupKind, group, instructor, schedule, filled, total, selected, almostFull }) => (
  <div style={{
    flex: 1,
    background: selected ? '#f4eedc' : '#fdfcf8',
    border: selected ? '2.5px solid #1a1a1a' : '1.5px solid #2a2a2a',
    borderRadius: 6,
    boxShadow: selected ? '4px 4px 0 #1a1a1a' : '2px 2px 0 rgba(0,0,0,0.12)',
    padding: '16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    position: 'relative',
    cursor: 'pointer',
    minWidth: 0
  }}>
    {/* radio */}
    <div style={{
      position: 'absolute',
      top: 14, left: 14,
      width: 18, height: 18,
      borderRadius: '50%',
      border: '1.5px solid #1a1a1a',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {selected && <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#1a1a1a' }} />}
    </div>

    {/* group chip */}
    <div style={{ marginLeft: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
      <span style={{
        padding: '3px 8px',
        border: '1.5px solid #2a2a2a',
        borderRadius: 3,
        background: '#ebe6d8',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        letterSpacing: 1
      }}>{groupKind} {group}</span>
      {almostFull && (
        <span style={{
          display: 'flex', alignItems: 'center', gap: 5,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#7a1f17'
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#c0392b' }} />
          Almost full
        </span>
      )}
    </div>

    <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16, color: '#1a1a1a' }}>{instructor}</div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, fontFamily: 'Kalam, cursive', fontSize: 13, color: '#444' }}>
      {schedule.map((s, i) => <div key={i}>· {s}</div>)}
    </div>

    <CapacityBar filled={filled} total={total} danger={almostFull} />
  </div>
);

const CourseDetails = () => (
  <AppShell selected="catalog">
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
      {/* scrollable body */}
      <div style={{ flex: 1, padding: '20px 36px 24px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'hidden', minHeight: 0 }}>
        {/* breadcrumb */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#777' }}>
          <span style={{ cursor: 'pointer' }}>Browse Catalog</span>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#222' }}>CS-201 Programming 2</span>
        </div>

        {/* page header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <h1 className="wf-title" style={{ fontSize: 30, margin: 0 }}>Programming 2</h1>
            <Badge kind="eligible" />
          </div>
          <p className="wf-subtitle" style={{ marginTop: 6 }}>CS-201 · 3 credits · Computer Science</p>
          <div style={{ marginTop: 4, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#2d5e3e' }}>
            ✓ Prerequisite: Programming 1 (passed)
          </div>
        </div>

        {/* requirement banner */}
        <div style={{
          background: '#f7eedb',
          border: '1.5px solid #b07d2a',
          borderLeft: '5px solid #b07d2a',
          borderRadius: 4,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12
        }}>
          <div style={{
            width: 22, height: 22,
            border: '1.5px solid #6e4a13',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12, fontWeight: 700,
            color: '#6e4a13',
            flexShrink: 0
          }}>i</div>
          <div style={{ fontFamily: 'Kalam, cursive', fontSize: 14, color: '#5a3c10', lineHeight: 1.4 }}>
            This course requires both a <strong>Lecture</strong> and a <strong>Lab</strong>. You must pick one group of each before you can add it to your cart.
          </div>
        </div>

        {/* SECTION 1 — lectures */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>STEP 1</div>
            <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 20, margin: '2px 0 0' }}>
              Pick a <span className="sketch-underline">Lecture</span> group
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <SectionCard
              groupKind="GROUP" group="A"
              instructor="Dr. Khaled Al-Mansouri"
              schedule={['Mon  10:00–12:00  ·  Room A-301', 'Wed  10:00–12:00  ·  Room A-301']}
              filled={12} total={20}
              selected
            />
            <SectionCard
              groupKind="GROUP" group="B"
              instructor="Dr. Sara Al-Hassan"
              schedule={['Sun  14:00–16:00  ·  Room A-205', 'Tue  14:00–16:00  ·  Room A-205']}
              filled={25} total={30}
              almostFull
            />
          </div>
        </div>

        {/* SECTION 2 — labs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>STEP 2</div>
            <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 20, margin: '2px 0 0' }}>
              Pick a <span className="sketch-underline">Lab</span> group
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <SectionCard
              groupKind="LAB" group="A"
              instructor="TA Mohammed Salem"
              schedule={['Wed  14:00–16:00  ·  Lab L-105']}
              filled={8} total={15}
            />
            <SectionCard
              groupKind="LAB" group="B"
              instructor="TA Ahmed Faraj"
              schedule={['Thu  10:00–12:00  ·  Lab L-105']}
              filled={14} total={15}
              almostFull
            />
          </div>
        </div>
      </div>

      {/* sticky footer action bar */}
      <div style={{
        borderTop: '1.5px solid #1a1a1a',
        background: '#fdfcf8',
        padding: '14px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexShrink: 0
      }}>
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 14, color: '#333' }}>
          Selected: <strong>Lecture Group A</strong>
          <span style={{ color: '#888', margin: '0 8px' }}>·</span>
          <span style={{ color: '#7a1f17' }}>Lab not chosen</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="wf-btn outline" style={{ padding: '10px 20px', fontSize: 14, boxShadow: '2px 2px 0 #bbb' }}>Cancel</button>
          <button className="wf-btn" style={{
            padding: '10px 20px',
            fontSize: 14,
            opacity: 0.45,
            cursor: 'not-allowed',
            boxShadow: '2px 2px 0 #bbb',
            background: '#888',
            borderColor: '#888'
          }}>Add to Cart</button>
        </div>
      </div>
    </div>

    <Annot style={{ top: 110, right: 60, color: '#555' }}>
      eligibility badge<br/>+ prereq line ↗
    </Annot>
    <Annot style={{ top: 380, left: 90, color: '#555' }}>
      selected lecture<br/>card (radio +<br/>thicker border) ↗
    </Annot>
    <Annot style={{ bottom: 80, left: 80, color: '#555' }}>
      sticky action bar →<br/>“Add to Cart” disabled<br/>until lab chosen
    </Annot>
  </AppShell>
);

window.CourseDetails = CourseDetails;

// Screens 6, 7, 8: Cart sidebar, My Requests, My Schedule.

// ───────────────────────────────────────────────────────────
// 6 — CART SIDEBAR (Course Details with overlay panel)
// ───────────────────────────────────────────────────────────

const CartLineItem = ({ kind, group, schedule, instructor }) => (
  <div style={{
    display: 'flex',
    gap: 10,
    padding: '8px 10px',
    background: '#fdfcf8',
    border: '1px dashed #c8c2b0',
    borderRadius: 4,
    fontFamily: 'Kalam, cursive',
    fontSize: 12,
    color: '#333',
    lineHeight: 1.35
  }}>
    <span style={{
      padding: '1px 6px',
      border: '1px solid #2a2a2a',
      borderRadius: 2,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 9,
      letterSpacing: 0.5,
      background: '#ebe6d8',
      flexShrink: 0,
      alignSelf: 'flex-start',
      marginTop: 2
    }}>{kind}</span>
    <div style={{ flex: 1 }}>
      <div><strong>Group {group}</strong> · {schedule}</div>
      <div style={{ color: '#666', fontSize: 11 }}>{instructor}</div>
    </div>
  </div>
);

const CartEntry = ({ code, name, items, conflict, linkedNote }) => (
  <div style={{
    background: '#fdfcf8',
    border: '1.5px solid #2a2a2a',
    borderRadius: 5,
    padding: '12px 14px',
    boxShadow: '2px 2px 0 rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>{code}</div>
        <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>{name}</div>
      </div>
      <div style={{
        width: 22, height: 22,
        border: '1.5px solid #2a2a2a',
        borderRadius: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        color: '#7a1f17',
        flexShrink: 0
      }}>×</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((it, i) => <CartLineItem key={i} {...it} />)}
    </div>
    {linkedNote && (
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#888' }}>
        {linkedNote}
      </div>
    )}
    {conflict && (
      <div style={{
        background: '#f9e9e7',
        border: '1px solid #c0392b',
        borderLeft: '4px solid #c0392b',
        padding: '6px 10px',
        fontFamily: 'Kalam, cursive',
        fontSize: 12,
        color: '#7a1f17',
        borderRadius: 3
      }}>
        ⚠ {conflict}
      </div>
    )}
  </div>
);

const CartSidebarOverlay = () => (
  <AppShell selected="catalog">
    <div style={{ flex: 1, display: 'flex', position: 'relative', minWidth: 0, overflow: 'hidden' }}>
      {/* underlying course details (faded) */}
      <div style={{ flex: 1, padding: '20px 36px', filter: 'blur(0.3px)', opacity: 0.55 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#777' }}>
          Browse Catalog &nbsp;›&nbsp; <span style={{ color: '#222' }}>CS-201 Programming 2</span>
        </div>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
          <h1 className="wf-title" style={{ fontSize: 30, margin: 0 }}>Programming 2</h1>
          <Badge kind="eligible" />
        </div>
        <p className="wf-subtitle" style={{ marginTop: 6 }}>CS-201 · 3 credits · Computer Science</p>
        <div style={{
          marginTop: 18,
          background: '#f7eedb',
          border: '1.5px solid #b07d2a',
          borderLeft: '5px solid #b07d2a',
          borderRadius: 4,
          padding: '10px 14px',
          fontFamily: 'Kalam, cursive',
          fontSize: 13,
          color: '#5a3c10'
        }}>
          This course requires both a Lecture and a Lab.
        </div>
        <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>STEP 1</div>
        <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 18, margin: '2px 0 12px' }}>Pick a Lecture group</h2>
        <div style={{ display: 'flex', gap: 14 }}>
          {[0,1].map(i => (
            <div key={i} style={{ flex: 1, height: 130, border: '1.5px solid #2a2a2a', borderRadius: 5, background: '#fdfcf8' }} />
          ))}
        </div>
        <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>STEP 2</div>
        <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 18, margin: '2px 0 12px' }}>Pick a Lab group</h2>
        <div style={{ display: 'flex', gap: 14 }}>
          {[0,1].map(i => (
            <div key={i} style={{ flex: 1, height: 130, border: '1.5px solid #2a2a2a', borderRadius: 5, background: '#fdfcf8' }} />
          ))}
        </div>
      </div>

      {/* dim overlay over content area only */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, bottom: 0,
        right: 420,
        background: 'rgba(20,15,10,0.35)',
        pointerEvents: 'none'
      }} />

      {/* CART PANEL */}
      <div style={{
        width: 420,
        background: '#ebe6d8',
        borderLeft: '2px solid #1a1a1a',
        boxShadow: '-6px 0 0 rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        height: '100%'
      }}>
        {/* cart header */}
        <div style={{
          padding: '16px 18px',
          borderBottom: '1.5px solid #2a2a2a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#f4f0e4'
        }}>
          <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 20, margin: 0 }}>Your Cart</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#444' }}>3 items · 9 credits</span>
            <div style={{
              width: 24, height: 24, border: '1.5px solid #2a2a2a', borderRadius: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 12, cursor: 'pointer',
              background: '#fdfcf8'
            }}>×</div>
          </div>
        </div>

        {/* cart body */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto' }}>
          <CartEntry
            code="CS-201" name="Programming 2"
            linkedNote="🔗 Linked — removing one removes both."
            items={[
              { kind: 'LECTURE', group: 'A', schedule: 'Mon+Wed 10:00-12:00', instructor: 'Dr. Khaled' },
              { kind: 'LAB', group: 'A', schedule: 'Wed 14:00-16:00', instructor: 'TA Mohammed' },
            ]}
          />
          <CartEntry
            code="CS-203" name="Web Development"
            items={[
              { kind: 'LECTURE', group: 'A', schedule: 'Sun+Tue 10:00-12:00', instructor: 'Dr. Sara' },
            ]}
          />
          <CartEntry
            code="CS-220" name="Database Systems"
            conflict="Time conflict with Programming 2 (Mon 10:00-12:00)"
            items={[
              { kind: 'LECTURE', group: 'B', schedule: 'Mon 14:00-16:00', instructor: 'Dr. Imad' },
            ]}
          />

          {/* summary */}
          <div style={{
            marginTop: 6,
            border: '1.5px dashed #2a2a2a',
            borderRadius: 4,
            padding: '12px 14px',
            background: '#fdfcf8',
            fontFamily: 'Kalam, cursive',
            fontSize: 13,
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
            <div>Total credits: <strong>9 / 18</strong></div>
            <div style={{ color: '#555' }}>Will be sent to: <strong>Dr. Hassan</strong> (your advisor)</div>
          </div>
        </div>

        {/* sticky footer */}
        <div style={{
          borderTop: '1.5px solid #2a2a2a',
          padding: '14px 16px',
          background: '#f4f0e4',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="wf-btn outline" style={{ flex: 1, padding: '10px', fontSize: 13, boxShadow: '2px 2px 0 #bbb' }}>Continue Browsing</button>
            <button className="wf-btn" style={{
              flex: 1, padding: '10px', fontSize: 13,
              opacity: 0.45, cursor: 'not-allowed',
              background: '#888', borderColor: '#888',
              boxShadow: '2px 2px 0 #bbb'
            }}>Submit Request</button>
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#7a1f17', textAlign: 'center' }}>
            Resolve the conflict first
          </div>
        </div>
      </div>
    </div>

    <Annot style={{ top: 100, left: 100, color: '#555' }}>
      page dimmed<br/>behind cart →
    </Annot>
    <Annot style={{ bottom: 110, right: 460, color: '#555' }}>
      ← submit disabled<br/>until conflict resolved
    </Annot>
  </AppShell>
);

window.CartSidebarOverlay = CartSidebarOverlay;

// ───────────────────────────────────────────────────────────
// 7 — MY REQUESTS
// ───────────────────────────────────────────────────────────
const StatusPill = ({ status }) => {
  const map = {
    PENDING:  { bg: '#f3e2c4', border: '#b07d2a', color: '#6e4a13' },
    APPROVED: { bg: '#dcead0', border: '#2d5e3e', color: '#1f4630' },
    REJECTED: { bg: '#f1d3d0', border: '#c0392b', color: '#7a1f17' },
    RETURNED: { bg: '#e0d8c8', border: '#666',    color: '#444' },
  }[status];
  return (
    <span style={{
      padding: '4px 10px',
      borderRadius: 3,
      border: `1.5px solid ${map.border}`,
      background: map.bg,
      color: map.color,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: 1,
      fontWeight: 700
    }}>{status}</span>
  );
};

const FilterPill = ({ label, active }) => (
  <div style={{
    padding: '6px 12px',
    border: `1.5px solid ${active ? '#1a1a1a' : '#777'}`,
    background: active ? '#1a1a1a' : '#fdfcf8',
    color: active ? '#fdfcf8' : '#222',
    borderRadius: 20,
    fontFamily: 'Kalam, cursive',
    fontSize: 13,
    cursor: 'pointer',
    boxShadow: active ? '2px 2px 0 #888' : 'none',
    whiteSpace: 'nowrap'
  }}>{label}</div>
);

const RequestCard = ({ status, title, sub, items, note, reason, actions }) => (
  <div className="wf-card soft" style={{
    background: '#fdfcf8',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16
  }}>
    <div style={{ flexShrink: 0, paddingTop: 2 }}>
      <StatusPill status={status} />
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 17 }}>{title}</div>
      <div style={{ fontFamily: 'Kalam, cursive', fontSize: 13, color: '#555', marginTop: 2 }}>{sub}</div>
      {items && (
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#444', marginTop: 6 }}>
          {items}
        </div>
      )}
      {note && (
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 12, color: '#5a3c10', marginTop: 6 }}>
          ✎ {note}
        </div>
      )}
      {reason && (
        <div style={{
          marginTop: 8,
          padding: '6px 10px',
          borderLeft: '3px solid #c0392b',
          background: '#f9e9e7',
          fontFamily: 'Kalam, cursive',
          fontSize: 12,
          color: '#7a1f17'
        }}>
          {reason}
        </div>
      )}
    </div>
    <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
      {actions.map((a, i) => (
        <button key={i} className={a.primary ? 'wf-btn' : 'wf-btn outline'} style={{
          padding: '8px 14px',
          fontSize: 13,
          boxShadow: '2px 2px 0 #bbb'
        }}>{a.label}</button>
      ))}
    </div>
  </div>
);

const MyRequests = () => (
  <AppShell selected="requests">
    <div style={{ flex: 1, padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'hidden', minWidth: 0 }}>
      <div>
        <h1 className="wf-title" style={{ fontSize: 28 }}>
          <span className="sketch-underline">My Requests</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          Track your registration, withdrawal, and swap requests.
        </p>
      </div>

      {/* filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <FilterPill label="All (4)" active />
        <FilterPill label="Pending (1)" />
        <FilterPill label="Approved (2)" />
        <FilterPill label="Rejected (1)" />
        <FilterPill label="Returned (0)" />
        <div style={{ flex: 1 }} />
        <div className="wf-input" style={{ width: 280, padding: '8px 12px', fontSize: 13 }}>
          <span className="ph">Search by request ID or course…</span>
        </div>
      </div>

      {/* list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, overflow: 'auto', minHeight: 0 }}>
        <RequestCard
          status="PENDING"
          title="Request #1042 · Registration"
          sub="Submitted 2h ago to Dr. Hassan"
          items="3 courses, 9 credits"
          actions={[{ label: 'Edit' }, { label: 'Cancel' }]}
        />
        <RequestCard
          status="APPROVED"
          title="Request #1038 · Registration"
          sub="Approved 1d ago by Dr. Hassan"
          items="2 courses, 6 credits"
          note="Override applied on Operating Systems — see comment"
          actions={[{ label: 'View Details', primary: true }]}
        />
        <RequestCard
          status="REJECTED"
          title="Request #1031 · Withdrawal"
          sub="Rejected 3d ago by Dr. Hassan"
          reason="Reason: cannot withdraw past the 4th week of the term"
          actions={[{ label: 'View Details', primary: true }]}
        />
        <RequestCard
          status="APPROVED"
          title="Request #1029 · Swap"
          sub="Approved 4d ago by Dr. Hassan"
          items="Web Development: Group A → Group B"
          actions={[{ label: 'View Details', primary: true }]}
        />
      </div>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#666', textAlign: 'right' }}>
        Showing 1–4 of 4
      </div>
    </div>

    <Annot style={{ top: 130, right: 60, color: '#555' }}>
      ← status filter pills<br/>+ search
    </Annot>
  </AppShell>
);

window.MyRequests = MyRequests;

// ───────────────────────────────────────────────────────────
// 8 — MY SCHEDULE
// ───────────────────────────────────────────────────────────
const SCHEDULE_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const SCHEDULE_HOURS = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];

const TYPE_COLORS = {
  Lecture:  { bg: '#dcead0', border: '#2d5e3e', text: '#1f4630' },
  Lab:      { bg: '#f3e2c4', border: '#b07d2a', text: '#6e4a13' },
  Tutorial: { bg: '#dcd6f0', border: '#5a4ea8', text: '#322a72' },
};

const ScheduleBlock = ({ day, start, end, type, course, group, room, frozen, hover }) => {
  const dayIdx = SCHEDULE_DAYS.indexOf(day);
  const top = (start - 8) * 44 + 32; // header row 32
  const height = (end - start) * 44 - 4;
  const dayWidth = `calc((100% - 60px) / 5)`;
  const c = TYPE_COLORS[type];
  return (
    <div style={{
      position: 'absolute',
      top,
      left: `calc(60px + ${dayIdx} * ${dayWidth} + 3px)`,
      width: `calc(${dayWidth} - 6px)`,
      height,
      background: c.bg,
      border: frozen ? '2.5px solid #c0392b' : `1.5px solid ${c.border}`,
      borderRadius: 4,
      padding: '6px 8px',
      fontFamily: 'Kalam, cursive',
      fontSize: 11,
      color: c.text,
      lineHeight: 1.2,
      boxShadow: '2px 2px 0 rgba(0,0,0,0.06)',
      overflow: 'hidden'
    }}>
      {frozen && (
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 8,
          letterSpacing: 0.5,
          color: '#7a1f17',
          fontWeight: 700,
          marginBottom: 2
        }}>⚑ FROZEN — schedule changed</div>
      )}
      <div style={{ fontWeight: 700 }}>{course}</div>
      <div>{type} · Group {group}</div>
      <div style={{ fontSize: 10, color: c.text, opacity: 0.85 }}>{room}</div>
      {frozen && (
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#7a1f17', marginTop: 2 }}>
          Advisor reviewing
        </div>
      )}
      {hover && (
        <div style={{
          position: 'absolute',
          bottom: -28,
          left: 4,
          display: 'flex',
          gap: 6,
          background: '#1a1a1a',
          color: '#fdfcf8',
          padding: '4px 6px',
          borderRadius: 3,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          boxShadow: '2px 2px 0 #888',
          zIndex: 5
        }}>
          <span style={{ padding: '2px 6px', background: '#444', borderRadius: 2, cursor: 'pointer' }}>Withdraw</span>
          <span style={{ padding: '2px 6px', background: '#2d5e3e', borderRadius: 2, cursor: 'pointer' }}>Swap</span>
        </div>
      )}
    </div>
  );
};

const MySchedule = () => (
  <AppShell selected="schedule">
    <div style={{ flex: 1, padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', minWidth: 0 }}>
      <div>
        <h1 className="wf-title" style={{ fontSize: 28 }}>
          <span className="sketch-underline">My Schedule</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          Fall 2026 · 4 enrolled sections · 12 credits
        </p>
      </div>

      {/* toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          display: 'inline-flex',
          border: '1.5px solid #1a1a1a',
          borderRadius: 4,
          overflow: 'hidden',
          fontFamily: 'Kalam, cursive',
          fontSize: 13
        }}>
          <span style={{ padding: '6px 14px', background: '#1a1a1a', color: '#fdfcf8', cursor: 'pointer' }}>Calendar View</span>
          <span style={{ padding: '6px 14px', background: '#fdfcf8', color: '#222', cursor: 'pointer' }}>List View</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#444' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#dcead0', border: '1px solid #2d5e3e', borderRadius: 2 }} /> Lecture
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#f3e2c4', border: '1px solid #b07d2a', borderRadius: 2 }} /> Lab
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#dcd6f0', border: '1px solid #5a4ea8', borderRadius: 2 }} /> Tutorial
          </span>
        </div>
      </div>

      {/* CALENDAR */}
      <div style={{
        flex: 1,
        background: '#fdfcf8',
        border: '1.5px solid #2a2a2a',
        borderRadius: 4,
        position: 'relative',
        minHeight: 0,
        overflow: 'hidden'
      }}>
        {/* day header row */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 32, display: 'flex', borderBottom: '1.5px solid #2a2a2a', background: '#ebe6d8' }}>
          <div style={{ width: 60, borderRight: '1px dashed #999' }} />
          {SCHEDULE_DAYS.map(d => (
            <div key={d} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Architects Daughter, cursive', fontSize: 13,
              borderRight: '1px dashed #999'
            }}>{d}</div>
          ))}
        </div>
        {/* hour rows */}
        {SCHEDULE_HOURS.map((h, i) => (
          <div key={h} style={{
            position: 'absolute',
            top: 32 + i * 44,
            left: 0, right: 0,
            height: 44,
            borderBottom: i < SCHEDULE_HOURS.length - 1 ? '1px dashed #c8c2b0' : 'none',
            display: 'flex'
          }}>
            <div style={{
              width: 60,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: '#777',
              padding: '4px 8px',
              borderRight: '1px dashed #999'
            }}>{h}</div>
            {SCHEDULE_DAYS.map(d => (
              <div key={d} style={{ flex: 1, borderRight: '1px dashed #c8c2b0' }} />
            ))}
          </div>
        ))}

        {/* blocks */}
        <ScheduleBlock day="Mon" start={10} end={12} type="Lecture" course="Programming 2" group="A" room="Room A-301" />
        <ScheduleBlock day="Wed" start={10} end={12} type="Lecture" course="Programming 2" group="A" room="Room A-301" />
        <ScheduleBlock day="Wed" start={14} end={16} type="Lab" course="Programming 2" group="A" room="Lab L-105" frozen />
        <ScheduleBlock day="Sun" start={10} end={12} type="Lecture" course="Web Development" group="A" room="Room A-205" hover />
        <ScheduleBlock day="Tue" start={10} end={12} type="Lecture" course="Web Development" group="A" room="Room A-205" />
      </div>

      {/* notice */}
      <div style={{
        background: '#f7eedb',
        border: '1.5px solid #b07d2a',
        borderLeft: '5px solid #b07d2a',
        borderRadius: 4,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'Kalam, cursive',
        fontSize: 13,
        color: '#5a3c10'
      }}>
        <span style={{
          width: 20, height: 20, border: '1.5px solid #6e4a13', borderRadius: '50%',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 700,
          color: '#6e4a13', flexShrink: 0
        }}>i</span>
        One of your enrolled sections was rescheduled by the admin. Your advisor has been notified — no action needed from you yet.
      </div>
    </div>

    <Annot style={{ top: 360, left: 280, color: '#555' }}>
      ← red border<br/>= frozen
    </Annot>
    <Annot style={{ top: 540, right: 60, color: '#555' }}>
      hover state on<br/>Web Dev (Sun) ↙
    </Annot>
  </AppShell>
);

window.MySchedule = MySchedule;

// Screens 9 + 10: Advisor Dashboard, Request Review (with override modal).

// Advisor variant of AppShell — different sidebar, different user in header.
const AdvisorShell = ({ selected, children }) => (
  <div className="page" style={{ background: '#f4f0e4', display: 'flex', flexDirection: 'column' }}>
    {/* header */}
    <div style={{
      height: 60,
      borderBottom: '2px solid #1a1a1a',
      background: '#fdfcf8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 20,
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, border: '1.5px dashed #555', borderRadius: '50%',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 7,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777',
          background: 'repeating-linear-gradient(45deg, transparent 0 5px, rgba(0,0,0,0.04) 5px 6px)'
        }}>LIMU</div>
        <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>Course Registration</div>
      </div>
      <div style={{
        marginLeft: 12, padding: '5px 12px',
        border: '1.5px solid #2a2a2a', borderRadius: 20,
        background: '#ebe6d8',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#222',
        display: 'flex', alignItems: 'center', gap: 8
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d5e3e' }} />
        Fall 2026 · Registration Open
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <NavIcon kind="bell" />
        <div style={{
          position: 'absolute', top: -4, right: -6,
          width: 14, height: 14, borderRadius: '50%',
          background: '#c0392b', color: '#fff',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid #fdfcf8'
        }}>7</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid #2a2a2a', background: '#ebe6d8',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'
        }}>HT</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'Kalam, cursive', fontSize: 14 }}>Dr. Hassan Al-Tarhouni</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#666' }}>ADVISOR</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>▾</div>
      </div>
    </div>

    {/* body */}
    <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
      <div style={{
        width: 220,
        borderRight: '1.5px solid #1a1a1a',
        background: '#ebe6d8',
        padding: '20px 14px',
        display: 'flex', flexDirection: 'column', gap: 6,
        flexShrink: 0
      }}>
        <NavItem icon="dash" label="Dashboard" selected={selected === 'dash'} />
        {/* pending with badge */}
        <div style={{ position: 'relative' }}>
          <NavItem icon="requests" label="Pending Requests" selected={selected === 'pending'} />
          <span style={{
            position: 'absolute', top: 8, right: 12,
            padding: '2px 7px',
            background: '#c0392b',
            color: '#fff',
            borderRadius: 10,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            fontWeight: 700
          }}>7</span>
        </div>
        <NavItem icon="catalog" label="My Students" selected={selected === 'students'} />
        <NavItem icon="bell" label="Notifications" selected={selected === 'notifications'} />
        <div style={{ flex: 1 }} />
        <div style={{ borderTop: '1px dashed #999', paddingTop: 8 }}>
          <NavItem icon="logout" label="Log out" />
        </div>
      </div>
      {children}
    </div>
  </div>
);

// ───────────────────────────────────────────────────────────
// 9 — ADVISOR DASHBOARD
// ───────────────────────────────────────────────────────────
const QueueRow = ({ id, student, type, items, submitted, issues, issueKind }) => (
  <tr style={{ borderBottom: '1px dashed #c8c2b0' }}>
    <td style={cellPad}>
      <div style={{
        width: 14, height: 14,
        border: '1.5px solid #2a2a2a',
        borderRadius: 2,
        background: '#fdfcf8'
      }} />
    </td>
    <td style={{ ...cellPad, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 700 }}>{id}</td>
    <td style={{ ...cellPad, fontFamily: 'Kalam, cursive', fontSize: 13 }}>{student}</td>
    <td style={{ ...cellPad, fontFamily: 'Kalam, cursive', fontSize: 13 }}>{type}</td>
    <td style={{ ...cellPad, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#555' }}>{items}</td>
    <td style={{ ...cellPad, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#777' }}>{submitted}</td>
    <td style={cellPad}>
      {issueKind === 'none' ? (
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#2d5e3e' }}>0 issues</span>
      ) : (
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          color: '#7a1f17',
          display: 'flex', alignItems: 'center', gap: 5
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#b07d2a' }} />
          ⚠ {issues}
        </span>
      )}
    </td>
    <td style={{ ...cellPad, textAlign: 'right' }}>
      <button className="wf-btn outline" style={{
        padding: '6px 12px', fontSize: 12, boxShadow: '1.5px 1.5px 0 #bbb'
      }}>Review</button>
    </td>
  </tr>
);

const cellPad = { padding: '10px 12px', verticalAlign: 'middle' };

const AdvisorDashboard = () => (
  <AdvisorShell selected="dash">
    <div style={{ flex: 1, padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 22, overflow: 'hidden', minWidth: 0 }}>
      <div>
        <h1 className="wf-title" style={{ fontSize: 28 }}>
          Welcome back, <span className="sketch-underline">Dr. Hassan</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          You have <strong style={{ color: '#7a1f17' }}>7 requests</strong> waiting for review.
        </p>
      </div>

      {/* stats */}
      <div style={{ display: 'flex', gap: 16 }}>
        <StatCard label="Pending Requests" value="7" accent />
        <StatCard label="Approved this term" value="38" />
        <StatCard label="Overrides issued" value="2" />
        <StatCard label="My Students" value="24" />
      </div>

      {/* queue panel */}
      <div className="wf-card soft" style={{
        background: '#fdfcf8',
        padding: '0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minHeight: 0
      }}>
        <div style={{
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1.5px solid #2a2a2a',
          background: '#f4f0e4'
        }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>QUEUE</div>
            <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 18, margin: '2px 0 0' }}>
              Pending Requests <span style={{ fontSize: 12, color: '#666', fontFamily: 'JetBrains Mono, monospace' }}>(sorted by oldest first)</span>
            </h2>
          </div>
          <button style={{
            padding: '8px 14px',
            border: '1.5px solid #999',
            background: '#ebe6d8',
            color: '#888',
            fontFamily: 'Kalam, cursive',
            fontSize: 13,
            borderRadius: 3,
            cursor: 'not-allowed',
            opacity: 0.7
          }}>Bulk Approve</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1.5px solid #2a2a2a', background: '#ebe6d8' }}>
                <th style={{ ...cellPad, width: 36, textAlign: 'left' }}>
                  <div style={{ width: 14, height: 14, border: '1.5px solid #2a2a2a', borderRadius: 2, background: '#fdfcf8' }} />
                </th>
                {['Request ID','Student','Type','Items','Submitted','Issues','Action'].map((h, i) => (
                  <th key={h} style={{
                    ...cellPad,
                    textAlign: i === 6 ? 'right' : 'left',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    letterSpacing: 1,
                    color: '#555',
                    fontWeight: 700
                  }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <QueueRow id="#1042" student="Ali Agela"        type="Registration" items="3 items" submitted="2h ago" issueKind="none" />
              <QueueRow id="#1041" student="Sara Khaled"      type="Registration" items="4 items" submitted="5h ago" issueKind="warn" issues="1 prereq missing" />
              <QueueRow id="#1040" student="Mohammed Yasin"   type="Withdrawal"   items="1 item"  submitted="8h ago" issueKind="none" />
              <QueueRow id="#1039" student="Lina Mansouri"    type="Registration" items="2 items" submitted="1d ago" issueKind="warn" issues="credit limit" />
              <QueueRow id="#1037" student="Omar Salim"       type="Swap"         items="1 item"  submitted="1d ago" issueKind="none" />
              <QueueRow id="#1036" student="Hadeel Ramadan"   type="Registration" items="5 items" submitted="2d ago" issueKind="warn" issues="1 prereq missing" />
            </tbody>
          </table>
        </div>
        <div style={{
          padding: '10px 20px',
          borderTop: '1px dashed #999',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#666',
          textAlign: 'right'
        }}>Showing 1–6 of 7</div>
      </div>
    </div>

    <Annot style={{ top: 90, left: 270, color: '#555' }}>
      advisor sidebar<br/>+ pending badge ↗
    </Annot>
    <Annot style={{ top: 460, left: 60, color: '#555' }}>
      ← multi-select<br/>+ bulk approve<br/>(disabled)
    </Annot>
  </AdvisorShell>
);

window.AdvisorDashboard = AdvisorDashboard;

// ───────────────────────────────────────────────────────────
// 10 — REQUEST REVIEW (with override modal overlay)
// ───────────────────────────────────────────────────────────
const ReviewItemPill = ({ kind, text }) => {
  const map = {
    OK:        { bg: '#dcead0', border: '#2d5e3e', color: '#1f4630' },
    PREREQ:    { bg: '#f3e2c4', border: '#b07d2a', color: '#6e4a13' },
    CREDIT:    { bg: '#f1d3d0', border: '#c0392b', color: '#7a1f17' },
  }[kind];
  return (
    <span style={{
      padding: '3px 8px',
      borderRadius: 3,
      border: `1.5px solid ${map.border}`,
      background: map.bg,
      color: map.color,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 9,
      letterSpacing: 0.5,
      whiteSpace: 'nowrap'
    }}>{text}</span>
  );
};

const ReviewItemCard = ({ code, name, group, schedule, pillKind, pillText, override }) => (
  <div className="wf-card soft" style={{
    background: '#fdfcf8',
    padding: '14px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
      <div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#777' }}>{code}</div>
        <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>{name}</div>
        <div style={{ fontFamily: 'Kalam, cursive', fontSize: 12, color: '#555', marginTop: 2 }}>{group}</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666', marginTop: 2 }}>{schedule}</div>
      </div>
      <ReviewItemPill kind={pillKind} text={pillText} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
      <a className="wf-link" style={{ fontSize: 13 }}>+ Add Comment</a>
      {override && (
        <button style={{
          padding: '5px 10px',
          background: '#f9e9e7',
          border: '1.5px solid #c0392b',
          color: '#7a1f17',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          borderRadius: 3,
          cursor: 'pointer'
        }}>OVERRIDE SYSTEM CHECK</button>
      )}
    </div>
  </div>
);

const RequestReview = () => (
  <AdvisorShell selected="pending">
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden', position: 'relative' }}>
      <div style={{ flex: 1, padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', minHeight: 0 }}>
        {/* breadcrumb */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#777' }}>
          <span style={{ cursor: 'pointer' }}>Pending Requests</span>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#222' }}>Request #1041</span>
        </div>

        {/* page header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 className="wf-title" style={{ fontSize: 26, margin: 0 }}>Request #1041 · Registration</h1>
            <StatusPill status="PENDING" />
          </div>
          <p className="wf-subtitle" style={{ marginTop: 4 }}>Submitted 5h ago by Sara Khaled</p>
        </div>

        {/* two-col body */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: 16, flex: 1, minHeight: 0 }}>
          {/* LEFT — items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0, overflow: 'auto' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              letterSpacing: 1, color: '#777'
            }}>REQUESTED ITEMS · 4</div>

            <ReviewItemCard
              code="CS-201" name="Programming 2"
              group="Lecture Group A + Lab Group A"
              schedule="Mon+Wed 10:00-12:00 · Wed 14:00-16:00"
              pillKind="OK" pillText="OK"
            />
            <ReviewItemCard
              code="CS-203" name="Web Development"
              group="Lecture Group A"
              schedule="Sun+Tue 10:00-12:00"
              pillKind="OK" pillText="OK"
            />
            <ReviewItemCard
              code="CS-301" name="Operating Systems"
              group="Lecture Group B"
              schedule="Mon+Wed 14:00-16:00"
              pillKind="PREREQ" pillText="PREREQ MISSING (CS-202)"
              override
            />
            <ReviewItemCard
              code="CS-220" name="Database Systems"
              group="Lecture Group B"
              schedule="Mon 14:00-16:00"
              pillKind="OK" pillText="OK"
            />
          </div>

          {/* RIGHT — student context */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0, overflow: 'auto' }}>
            <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid #2a2a2a',
                  background: '#ebe6d8',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>SK</div>
                <div>
                  <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>Sara Khaled</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>S-7741</div>
                </div>
              </div>
              <div style={{ borderTop: '1px dashed #c8c2b0', paddingTop: 8, fontFamily: 'Kalam, cursive', fontSize: 13, color: '#333', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div>Major: <strong>Computer Science</strong></div>
                <div>GPA: <strong>3.42</strong></div>
                <div>Accumulated credits: <strong>78</strong></div>
                <div>This request: <strong>12 credits</strong> · <span style={{ color: '#2d5e3e' }}>within limit</span></div>
                <div>Other Pending Requests: <strong>0</strong></div>
              </div>
            </div>

            <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>COMMENTS · 1</div>
              <div style={{
                background: '#f4f0e4',
                border: '1px dashed #c8c2b0',
                padding: '10px 12px',
                borderRadius: 4,
                fontFamily: 'Kalam, cursive',
                fontSize: 13,
                color: '#333',
                lineHeight: 1.4
              }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777', marginBottom: 4 }}>
                  Sara Khaled · 5h ago
                </div>
                "I am taking CS-301 because I have a transcript credit for CS-202 from a previous university — please override."
              </div>
              <a className="wf-link" style={{ fontSize: 13, alignSelf: 'flex-start' }}>+ Add reply</a>
            </div>
          </div>
        </div>
      </div>

      {/* sticky footer */}
      <div style={{
        borderTop: '1.5px solid #1a1a1a',
        background: '#fdfcf8',
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexShrink: 0
      }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#7a1f17' }}>
          Resolve the prereq issue on item 3 first
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="wf-btn outline" style={{ padding: '8px 14px', fontSize: 13, boxShadow: '2px 2px 0 #bbb', display: 'flex', alignItems: 'center', gap: 6 }}>
            Reject <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>▾</span>
          </button>
          <button className="wf-btn outline" style={{ padding: '8px 14px', fontSize: 13, boxShadow: '2px 2px 0 #bbb' }}>Return for Edit</button>
          <button className="wf-btn" style={{
            padding: '8px 18px',
            fontSize: 13,
            opacity: 0.45,
            cursor: 'not-allowed',
            background: '#888',
            borderColor: '#888',
            boxShadow: '2px 2px 0 #bbb'
          }}>Approve</button>
        </div>
      </div>

      {/* OVERRIDE MODAL OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(20,15,10,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <div style={{
          width: 540,
          background: '#fdfcf8',
          border: '2px solid #1a1a1a',
          borderRadius: 6,
          boxShadow: '6px 6px 0 #1a1a1a',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '18px 22px',
            borderBottom: '1.5px solid #2a2a2a',
            background: '#f4f0e4'
          }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#7a1f17' }}>OVERRIDE</div>
            <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 22, margin: '2px 0 4px' }}>Override Prerequisite Check</h2>
            <div style={{ fontFamily: 'Kalam, cursive', fontSize: 13, color: '#555' }}>
              Item 3 · CS-301 Operating Systems · missing CS-202 Data Structures
            </div>
          </div>
          <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label className="wf-label">Reason (required)</label>
              <div style={{
                border: '1.5px solid #2a2a2a',
                borderRadius: 4,
                background: '#fff',
                padding: '12px 14px',
                fontFamily: 'Kalam, cursive',
                fontSize: 14,
                color: '#222',
                minHeight: 80,
                lineHeight: 1.4
              }}>
                Credit transferred from previous university; transcript on file.
                <span style={{ display: 'inline-block', width: 1, height: 16, background: '#222', marginLeft: 2, verticalAlign: 'middle' }} />
              </div>
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: '#777',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 6
            }}>
              <span>ⓘ</span>
              This action will be logged in the audit log and visible to the registration office.
            </div>
          </div>
          <div style={{
            padding: '14px 22px',
            borderTop: '1px dashed #999',
            background: '#f4f0e4',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 10
          }}>
            <button className="wf-btn outline" style={{ padding: '8px 16px', fontSize: 13, boxShadow: '2px 2px 0 #bbb' }}>Cancel</button>
            <button className="wf-btn" style={{ padding: '8px 16px', fontSize: 13, boxShadow: '2px 2px 0 #888' }}>Save Override</button>
          </div>
        </div>
      </div>
    </div>
  </AdvisorShell>
);

window.RequestReview = RequestReview;

// Admin screens 11-14: Admin Dashboard, Timetable, Conflict Dialog, Overrides Report.

const AdminShell = ({ selected, children }) => (
  <div className="page" style={{ background: '#f4f0e4', display: 'flex', flexDirection: 'column' }}>
    {/* header */}
    <div style={{
      height: 60,
      borderBottom: '2px solid #1a1a1a',
      background: '#fdfcf8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 20,
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, border: '1.5px dashed #555', borderRadius: '50%',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 7,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777',
          background: 'repeating-linear-gradient(45deg, transparent 0 5px, rgba(0,0,0,0.04) 5px 6px)'
        }}>LIMU</div>
        <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 16 }}>Course Registration</div>
      </div>
      <div style={{
        marginLeft: 12, padding: '5px 12px',
        border: '1.5px solid #2a2a2a', borderRadius: 20, background: '#ebe6d8',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#222',
        display: 'flex', alignItems: 'center', gap: 8
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2d5e3e' }} />
        Fall 2026 · Registration Open
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <NavIcon kind="bell" />
        <div style={{
          position: 'absolute', top: -4, right: -6,
          width: 14, height: 14, borderRadius: '50%',
          background: '#c0392b', color: '#fff',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid #fdfcf8'
        }}>5</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid #2a2a2a', background: '#ebe6d8',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'
        }}>KR</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'Kalam, cursive', fontSize: 14 }}>Khaled Ramadan</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#666' }}>REGISTRATION OFFICE</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>▾</div>
      </div>
    </div>

    {/* body */}
    <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
      <div style={{
        width: 220,
        borderRight: '1.5px solid #1a1a1a',
        background: '#ebe6d8',
        padding: '16px 14px',
        display: 'flex', flexDirection: 'column', gap: 4,
        flexShrink: 0,
        overflow: 'auto'
      }}>
        <NavItem icon="dash" label="Dashboard" selected={selected === 'dash'} />
        <NavItem icon="catalog" label="Catalog & Sections" selected={selected === 'catalog'} />
        <NavItem icon="schedule" label="Timetable" selected={selected === 'timetable'} />
        <NavItem icon="requests" label="Terms" selected={selected === 'terms'} />
        <NavItem icon="catalog" label="Users" selected={selected === 'users'} />

        {/* Reports collapsible */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 14px',
          borderRadius: 4,
          fontFamily: 'Architects Daughter, cursive', fontSize: 15,
          color: '#2a2a2a', cursor: 'pointer',
          background: selected === 'reports' ? '#1a1a1a' : 'transparent',
        }}>
          <NavIcon kind="schedule" />
          <span style={{ flex: 1, color: selected === 'reports' ? '#fdfcf8' : '#2a2a2a' }}>Reports</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: selected === 'reports' ? '#fdfcf8' : '#666' }}>▾</span>
        </div>
        <div style={{ paddingLeft: 26, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            { id: 'overrides', label: 'Overrides' },
            { id: 'enrollments', label: 'Enrollments' },
            { id: 'activity', label: 'Activity' },
          ].map(s => (
            <div key={s.id} style={{
              padding: '6px 12px',
              fontFamily: 'Kalam, cursive', fontSize: 13,
              color: selected === s.id ? '#fdfcf8' : '#444',
              background: selected === s.id ? '#1a1a1a' : 'transparent',
              borderRadius: 3,
              cursor: 'pointer',
              border: selected === s.id ? '1.5px solid #1a1a1a' : '1.5px solid transparent',
              boxShadow: selected === s.id ? '2px 2px 0 #888' : 'none',
            }}>· {s.label}</div>
          ))}
        </div>

        <NavItem icon="bell" label="Notifications" selected={selected === 'notifications'} />
        <div style={{ flex: 1 }} />
        <div style={{ borderTop: '1px dashed #999', paddingTop: 6 }}>
          <NavItem icon="logout" label="Log out" />
        </div>
      </div>
      {children}
    </div>
  </div>
);

// ───────────────────────────────────────────────────────────
// 11 — ADMIN DASHBOARD
// ───────────────────────────────────────────────────────────
const EscRow = ({ id, student, advisor, submitted, days }) => (
  <tr style={{ borderBottom: '1px dashed #c8c2b0' }}>
    <td style={{ padding: '10px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 700 }}>{id}</td>
    <td style={{ padding: '10px 12px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{student}</td>
    <td style={{ padding: '10px 12px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{advisor}</td>
    <td style={{ padding: '10px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#666' }}>{submitted}</td>
    <td style={{ padding: '10px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#7a1f17' }}>{days}</td>
    <td style={{ padding: '10px 12px', textAlign: 'right' }}>
      <button className="wf-btn outline" style={{ padding: '5px 10px', fontSize: 12, boxShadow: '1.5px 1.5px 0 #bbb' }}>Reassign</button>
    </td>
  </tr>
);

const QuickActionBtn = ({ label }) => (
  <button className="wf-btn outline" style={{
    padding: '12px 14px',
    fontSize: 14,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '2px 2px 0 #bbb'
  }}>
    <span>{label}</span>
    <span style={{ fontFamily: 'Caveat, cursive', fontSize: 18 }}>→</span>
  </button>
);

const AdminDashboard = () => (
  <AdminShell selected="dash">
    <div style={{ flex: 1, padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'hidden', minWidth: 0 }}>
      <div>
        <h1 className="wf-title" style={{ fontSize: 28 }}>
          Welcome back, <span className="sketch-underline">Khaled</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          Fall 2026 · Registration window closes in <strong style={{ color: '#7a1f17' }}>5 days</strong>
        </p>
      </div>

      {/* 5 stats */}
      <div style={{ display: 'flex', gap: 12 }}>
        <StatCard label="Pending Requests" value="47" />
        <StatCard label="Approved Enrollments" value="812" />
        <StatCard label="Sections Full" value="9 / 64" />
        <StatCard label="Overrides Issued" value="12" />
        <StatCard label="Escalated" value="3" accent />
      </div>

      {/* 2-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '65fr 35fr', gap: 16, flex: 1, minHeight: 0 }}>
        {/* LEFT — escalated queue */}
        <div className="wf-card soft" style={{ background: '#fdfcf8', display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
          <div style={{
            padding: '14px 18px',
            borderBottom: '1.5px solid #2a2a2a',
            background: '#f4f0e4',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 18, margin: 0 }}>
              Escalated Requests Queue
            </h2>
            <a className="wf-link" style={{ fontSize: 13 }}>View All →</a>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid #2a2a2a', background: '#ebe6d8' }}>
                  {['Request ID','Student','Advisor','Submitted','Days waiting','Action'].map((h, i) => (
                    <th key={h} style={{
                      padding: '8px 12px',
                      textAlign: i === 5 ? 'right' : 'left',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10, letterSpacing: 1, color: '#555', fontWeight: 700
                    }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <EscRow id="#1018" student="Ali Agela"        advisor="Dr. Hassan" submitted="3d ago" days="3 days" />
                <EscRow id="#1011" student="Sara Khaled"      advisor="Dr. Hassan" submitted="4d ago" days="4 days" />
                <EscRow id="#1004" student="Mohammed Yasin"   advisor="Dr. Mona"   submitted="4d ago" days="4 days" />
                <EscRow id="#0998" student="Lina Mansouri"    advisor="Dr. Mona"   submitted="5d ago" days="5 days" />
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT — stacked panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777' }}>QUICK ACTIONS</div>
            <QuickActionBtn label="Open / Close Registration Window" />
            <QuickActionBtn label="Edit Timetable" />
            <QuickActionBtn label="Generate Overrides Report" />
            <QuickActionBtn label="Create New Course" />
          </div>
          <div className="wf-card soft" style={{ background: '#fdfcf8', padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#777', marginBottom: 4 }}>RECENT ACTIVITY</div>
            <div style={{ borderTop: '1px dashed #c8c2b0', overflow: 'auto', flex: 1 }}>
              <ActivityItem dot="#2d5e3e" text="Dr. Hassan approved Request #1042" time="12m ago" />
              <ActivityItem dot="#b07d2a" text="Section CS-201 Lab A rescheduled to Tue 14:00" time="1h ago" />
              <ActivityItem dot="#5a4ea8" text="Override applied on CS-301 by Dr. Mona" time="3h ago" />
              <ActivityItem dot="#666"    text="Registration window closed for COURSE-OUT" time="1d ago" />
            </div>
          </div>
        </div>
      </div>

      {/* status strip */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#444',
        paddingTop: 4, borderTop: '1px dashed #c8c2b0'
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2d5e3e' }} />
        All systems operational · queue: 0 jobs delayed
      </div>
    </div>

    <Annot style={{ top: 90, left: 270, color: '#555' }}>
      admin sidebar →<br/>Reports collapsible
    </Annot>
  </AdminShell>
);

window.AdminDashboard = AdminDashboard;

// ───────────────────────────────────────────────────────────
// 12 — TIMETABLE GRID (per-day Room×Time tables, drag in progress)
// ───────────────────────────────────────────────────────────
const TT_HOURS = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
const TT_ROOMS = ['Room A-301', 'Room A-205', 'Room A-208', 'Room B-110', 'Lab L-105'];

// section card placed inside a day table; absolutely positioned over the room row
const DayCard = ({ roomIndex, startCol, endCol, type, code, name, group, instructor, ghost, rowHeight, leftColW, colW, headerH }) => {
  const c = TYPE_COLORS[type];
  const top = headerH + roomIndex * rowHeight + 3;
  const left = leftColW + startCol * colW + 2;
  const width = (endCol - startCol) * colW - 4;
  const baseStyle = ghost ? {
    background: 'transparent',
    border: '2px dashed #999',
    color: '#888'
  } : {
    background: c.bg,
    border: `1.5px solid ${c.border}`,
    color: c.text,
    boxShadow: '1.5px 1.5px 0 rgba(0,0,0,0.06)'
  };
  return (
    <div style={{
      position: 'absolute',
      top, left, width,
      height: rowHeight - 6,
      padding: '4px 8px',
      borderRadius: 4,
      fontFamily: 'Kalam, cursive', fontSize: 11,
      lineHeight: 1.2,
      overflow: 'hidden',
      ...baseStyle
    }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 700, opacity: ghost ? 0.6 : 1 }}>{code}</span>
        <span style={{ fontWeight: 700, opacity: ghost ? 0.6 : 1 }}>{name}</span>
      </div>
      <div style={{ opacity: ghost ? 0.6 : 0.9, fontSize: 10 }}>
        {type} · Group {group} · {instructor}
      </div>
    </div>
  );
};

const TargetCell = ({ roomIndex, startCol, endCol, rowHeight, leftColW, colW, headerH }) => {
  const top = headerH + roomIndex * rowHeight + 3;
  const left = leftColW + startCol * colW + 2;
  const width = (endCol - startCol) * colW - 4;
  return (
    <div style={{
      position: 'absolute',
      top, left, width,
      height: rowHeight - 6,
      border: '2.5px dashed #1a1a1a',
      background: 'rgba(45, 94, 62, 0.14)',
      borderRadius: 4,
      pointerEvents: 'none'
    }} />
  );
};

const DayTable = ({ day, sections, ghost, target }) => {
  // hours represent column starts; we render N+1 grid lines but column widths sit between hours.
  // Treat each hour as a column header; cards span from startCol to endCol where col index = hour - 8.
  const ROW_H = 50;
  const HEADER_H = 30;
  const LEFT_W = 110;
  const N_COLS = TT_HOURS.length; // 10 columns (8→17 with 17 the last header)
  // We'll render the time header as column dividers — each column is from hour h to hour h+1.
  // So hour labels sit at the LEFT edge of each column; we'll add a phantom right-edge marker too.

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {/* day banner */}
      <div style={{
        fontFamily: 'Architects Daughter, cursive',
        fontSize: 18,
        letterSpacing: 1,
        color: '#1a1a1a',
        display: 'inline-block',
        alignSelf: 'flex-start'
      }}>
        <span className="sketch-underline">{day.toUpperCase()}</span>
      </div>

      <div style={{
        position: 'relative',
        background: '#fdfcf8',
        border: '1.5px solid #2a2a2a',
        borderRadius: 4,
        height: HEADER_H + TT_ROOMS.length * ROW_H
      }}>
        {/* header row */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: HEADER_H,
          display: 'flex',
          borderBottom: '1.5px solid #2a2a2a',
          background: '#ebe6d8'
        }}>
          <div style={{
            width: LEFT_W,
            borderRight: '1px dashed #999',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            padding: '0 10px',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 1, color: '#555'
          }}>ROOM \ TIME</div>
          {/* time labels — one per column */}
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            {TT_HOURS.map((h, i) => (
              <div key={h} style={{
                flex: 1,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#444',
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                paddingLeft: 6,
                borderRight: i < TT_HOURS.length - 1 ? '1px dashed #c8c2b0' : 'none'
              }}>{h}</div>
            ))}
          </div>
        </div>

        {/* room rows */}
        {TT_ROOMS.map((room, ri) => (
          <div key={room} style={{
            position: 'absolute',
            top: HEADER_H + ri * ROW_H,
            left: 0, right: 0,
            height: ROW_H,
            display: 'flex',
            borderBottom: ri < TT_ROOMS.length - 1 ? '1px dashed #c8c2b0' : 'none',
            background: ri % 2 === 1 ? 'rgba(0,0,0,0.012)' : 'transparent'
          }}>
            <div style={{
              width: LEFT_W,
              borderRight: '1px dashed #999',
              display: 'flex', alignItems: 'center',
              padding: '0 10px',
              fontFamily: 'Kalam, cursive', fontSize: 13, color: '#222'
            }}>{room}</div>
            {/* empty time cells with faint dotted border */}
            <div style={{ flex: 1, display: 'flex' }}>
              {TT_HOURS.map((h, i) => (
                <div key={h} style={{
                  flex: 1,
                  borderRight: i < TT_HOURS.length - 1 ? '1px dotted #d8d3c5' : 'none',
                  borderTop: '1px dotted #e5e0d2',
                }} />
              ))}
            </div>
          </div>
        ))}

        {/* sections positioned absolutely; need real px widths */}
        <DayCardsLayer
          sections={sections}
          ghost={ghost}
          target={target}
          rowHeight={ROW_H}
          headerH={HEADER_H}
          leftColW={LEFT_W}
          nCols={N_COLS}
        />
      </div>
    </div>
  );
};

// computes column widths via a measured ref so DayCard placement is pixel-accurate
const DayCardsLayer = ({ sections, ghost, target, rowHeight, headerH, leftColW, nCols }) => {
  const ref = React.useRef(null);
  const [colW, setColW] = React.useState(80);
  React.useEffect(() => {
    if (!ref.current) return;
    const measure = () => {
      const totalW = ref.current.parentElement.getBoundingClientRect().width - leftColW;
      setColW(totalW / nCols);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ref.current.parentElement);
    return () => ro.disconnect();
  }, [leftColW, nCols]);
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {sections.map((s, i) => (
        <DayCard
          key={i}
          roomIndex={TT_ROOMS.indexOf(s.room)}
          startCol={s.start - 8}
          endCol={s.end - 8}
          type={s.type}
          code={s.code}
          name={s.name}
          group={s.group}
          instructor={s.instructor}
          ghost={s.ghost}
          rowHeight={rowHeight}
          headerH={headerH}
          leftColW={leftColW}
          colW={colW}
        />
      ))}
      {target && (
        <TargetCell
          roomIndex={TT_ROOMS.indexOf(target.room)}
          startCol={target.start - 8}
          endCol={target.end - 8}
          rowHeight={rowHeight}
          headerH={headerH}
          leftColW={leftColW}
          colW={colW}
        />
      )}
    </div>
  );
};

// section data per day
const DAY_SECTIONS = {
  Sunday: [
    { room: 'Room A-205', start: 10, end: 12, type: 'Lecture', code: 'CS-203', name: 'Web Development',  group: 'A', instructor: 'Dr. Sara' },
    { room: 'Room A-301', start: 14, end: 16, type: 'Lecture', code: 'CS-220', name: 'Database Systems', group: 'A', instructor: 'Dr. Yasin' },
  ],
  Monday: [
    { room: 'Room A-301', start: 10, end: 12, type: 'Lecture', code: 'CS-201', name: 'Programming 2',    group: 'A', instructor: 'Dr. Khaled' },
    { room: 'Room A-208', start: 14, end: 16, type: 'Lecture', code: 'CS-220', name: 'Database Systems', group: 'B', instructor: 'Dr. Yasin' },
  ],
  Tuesday: [
    { room: 'Room A-205', start: 10, end: 12, type: 'Lecture', code: 'CS-203', name: 'Web Development',     group: 'A', instructor: 'Dr. Sara' },
    { room: 'Room B-110', start: 14, end: 16, type: 'Lecture', code: 'CS-301', name: 'Operating Systems',   group: 'A', instructor: 'Dr. Mona' },
  ],
  Wednesday: [
    { room: 'Room A-301', start: 10, end: 12, type: 'Lecture', code: 'CS-201', name: 'Programming 2', group: 'A', instructor: 'Dr. Khaled' },
    // GHOST: source of dragged card
    { room: 'Lab L-105',  start: 14, end: 16, type: 'Lab',     code: 'CS-201', name: 'Programming 2', group: 'A', instructor: 'TA Mohammed', ghost: true },
  ],
  Thursday: [
    { room: 'Lab L-105',  start: 10, end: 12, type: 'Lab', code: 'CS-201', name: 'Programming 2', group: 'B', instructor: 'TA Ahmed' },
  ],
};

const Timetable = () => (
  <AdminShell selected="timetable">
    <div style={{ flex: 1, padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden', minWidth: 0, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="wf-title" style={{ fontSize: 26 }}>
            <span className="sketch-underline">Term Timetable</span>
          </h1>
          <p className="wf-subtitle" style={{ marginTop: 4 }}>
            Fall 2026 · Drag any section to a new day, time, or room.
          </p>
        </div>
        <div style={{
          display: 'inline-flex',
          border: '1.5px solid #1a1a1a',
          borderRadius: 4,
          overflow: 'hidden',
          fontFamily: 'Kalam, cursive', fontSize: 13
        }}>
          <span style={{ padding: '6px 14px', background: '#1a1a1a', color: '#fdfcf8', cursor: 'pointer' }}>By Time Slot</span>
          <span style={{ padding: '6px 14px', background: '#fdfcf8', color: '#222', cursor: 'pointer' }}>By Room</span>
        </div>
      </div>

      {/* toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div className="wf-input" style={{ width: 160, padding: '8px 12px', fontSize: 12 }}>
          <span className="ph">Fall 2026</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>▾</span>
        </div>
        <FilterChip label="All Departments" />
        <div style={{ display: 'flex', gap: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#444' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#dcead0', border: '1px solid #2d5e3e', borderRadius: 2 }} /> Lecture
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#f3e2c4', border: '1px solid #b07d2a', borderRadius: 2 }} /> Lab
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 10, height: 10, background: '#dcd6f0', border: '1px solid #5a4ea8', borderRadius: 2 }} /> Tutorial
          </span>
        </div>
        <div style={{ flex: 1 }} />
        <button style={{
          padding: '7px 14px',
          border: '1.5px solid #999',
          background: '#ebe6d8',
          color: '#888',
          fontFamily: 'Kalam, cursive', fontSize: 13,
          borderRadius: 3,
          cursor: 'not-allowed', opacity: 0.7
        }}>Save Layout</button>
        <button className="wf-btn outline" style={{ padding: '7px 14px', fontSize: 13, boxShadow: '2px 2px 0 #bbb' }}>Undo Last Change</button>
      </div>

      {/* PER-DAY TABLES STACKED — scrollable region */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        position: 'relative',
        minHeight: 0,
        paddingBottom: 60
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <DayTable day="Sunday"    sections={DAY_SECTIONS.Sunday} />
          <DayTable day="Monday"    sections={DAY_SECTIONS.Monday} />
          <DayTable day="Tuesday"   sections={DAY_SECTIONS.Tuesday} target={{ room: 'Lab L-105', start: 16, end: 18 }} />
          <DayTable day="Wednesday" sections={DAY_SECTIONS.Wednesday} />
          <DayTable day="Thursday"  sections={DAY_SECTIONS.Thursday} />
        </div>

        {/* FLOATING dragged copy — between Tuesday and Wednesday tables, near cursor */}
        <div style={{
          position: 'absolute',
          top: 1130,
          left: 540,
          width: 220,
          background: '#f3e2c4',
          border: '2px solid #b07d2a',
          color: '#6e4a13',
          padding: '6px 10px',
          borderRadius: 4,
          fontFamily: 'Kalam, cursive', fontSize: 11,
          lineHeight: 1.2,
          opacity: 0.92,
          boxShadow: '6px 6px 0 rgba(0,0,0,0.18)',
          transform: 'rotate(-1.5deg)',
          pointerEvents: 'none',
          zIndex: 5
        }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700 }}>CS-201</span>
            <span style={{ fontWeight: 700 }}>Programming 2</span>
          </div>
          <div style={{ opacity: 0.9, fontSize: 10 }}>Lab · Group A · TA Mohammed</div>
          <div style={{ fontSize: 9, opacity: 0.75 }}>Lab L-105</div>
        </div>

        {/* tooltip near cursor */}
        <div style={{
          position: 'absolute',
          top: 1090,
          left: 540,
          background: '#1a1a1a', color: '#fdfcf8',
          padding: '6px 10px',
          borderRadius: 3,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          boxShadow: '2px 2px 0 #888',
          zIndex: 6,
          pointerEvents: 'none',
          maxWidth: 380,
          lineHeight: 1.4
        }}>
          Move to Tuesday · Lab L-105 · 16:00–18:00 · 18 enrolled students will be checked for conflicts
        </div>
      </div>

      {/* tip card */}
      <div style={{
        position: 'absolute',
        bottom: 18, left: 36,
        background: '#fdfcf8',
        border: '1.5px dashed #2a2a2a',
        borderRadius: 4,
        padding: '8px 12px',
        fontFamily: 'Kalam, cursive', fontSize: 12,
        color: '#444',
        boxShadow: '2px 2px 0 rgba(0,0,0,0.08)',
        maxWidth: 380,
        zIndex: 7
      }}>
        <strong>Tip:</strong> drag a card to a different day's table to change the day. Drag within the same table to change room or time.
      </div>
    </div>

    <Annot style={{ top: 980, right: 90, color: '#555', zIndex: 8 }}>
      ← target drop<br/>(Tue · L-105 · 16-18)
    </Annot>
    <Annot style={{ top: 1240, right: 90, color: '#555', zIndex: 8 }}>
      ↙ ghost source<br/>(Wed · L-105 · 14-16)
    </Annot>
  </AdminShell>
);

window.Timetable = Timetable;

// ───────────────────────────────────────────────────────────
// 13 — SCHEDULE CHANGE CONFLICT DIALOG (modal over timetable)
// ───────────────────────────────────────────────────────────
const ConflictRow = ({ student, sn, advisor, course }) => (
  <tr style={{ borderBottom: '1px dashed #c8c2b0' }}>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{student}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>{sn}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{advisor}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 12, color: '#7a1f17' }}>{course}</td>
  </tr>
);

const ConflictDialog = () => (
  <AdminShell selected="timetable">
    <div style={{ flex: 1, position: 'relative', minWidth: 0, overflow: 'hidden' }}>
      {/* dimmed timetable backdrop */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, padding: '20px 28px' }}>
        <h1 className="wf-title" style={{ fontSize: 26 }}>Term Timetable</h1>
        <p className="wf-subtitle">Fall 2026</p>
        <div style={{ marginTop: 16, height: 'calc(100% - 90px)', background: '#fdfcf8', border: '1.5px solid #2a2a2a', borderRadius: 4 }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,15,10,0.5)' }} />

      {/* MODAL */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 720,
        background: '#fdfcf8',
        border: '2.5px solid #1a1a1a',
        borderRadius: 6,
        boxShadow: '8px 8px 0 #1a1a1a',
        display: 'flex', flexDirection: 'column',
        maxHeight: '88%'
      }}>
        {/* header */}
        <div style={{ padding: '20px 24px', borderBottom: '1.5px solid #2a2a2a', background: '#f4f0e4' }}>
          <h2 style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 22, margin: 0 }}>
            Confirm Schedule Change
          </h2>
          <div style={{
            marginTop: 10,
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: '#333'
          }}>
            <span style={{ padding: '4px 8px', border: '1.5px solid #2a2a2a', borderRadius: 3, background: '#fdfcf8' }}>
              FROM: Wed 14:00–16:00 · Lab L-105
            </span>
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 22, color: '#1a1a1a' }}>→</span>
            <span style={{ padding: '4px 8px', border: '1.5px solid #2d5e3e', borderRadius: 3, background: '#dcead0' }}>
              TO: Tue 16:00–18:00 · Lab L-105
            </span>
          </div>
          <div style={{ marginTop: 8, fontFamily: 'Kalam, cursive', fontSize: 14, color: '#555' }}>
            CS-201 Programming 2 · Lab · Group A
          </div>
        </div>

        {/* body */}
        <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', minHeight: 0 }}>
          <div style={{
            background: '#f9e9e7',
            border: '1.5px solid #c0392b',
            borderLeft: '5px solid #c0392b',
            borderRadius: 4,
            padding: '10px 14px',
            fontFamily: 'Kalam, cursive', fontSize: 14, color: '#7a1f17'
          }}>
            <strong>⚠</strong> This change will create a schedule conflict for <strong>4 of 18</strong> enrolled students.
          </div>

          <div style={{
            border: '1.5px solid #2a2a2a',
            borderRadius: 4,
            background: '#fdfcf8',
            maxHeight: 250,
            overflow: 'auto'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#ebe6d8', borderBottom: '1.5px solid #2a2a2a' }}>
                  {['Student','Student #','Advisor','Conflicting Course'].map(h => (
                    <th key={h} style={{
                      padding: '8px 10px', textAlign: 'left',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 1, color: '#555'
                    }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <ConflictRow student="Ali Agela"      sn="S-7740" advisor="Dr. Hassan" course="CS-203 Web Development (Tue 17:00–18:00)" />
                <ConflictRow student="Sara Khaled"    sn="S-7741" advisor="Dr. Hassan" course="CS-220 Database Systems (Tue 16:00–17:00)" />
                <ConflictRow student="Mohammed Yasin" sn="S-7752" advisor="Dr. Mona"   course="CS-225 Networks (Tue 16:00–18:00)" />
                <ConflictRow student="Lina Mansouri"  sn="S-7770" advisor="Dr. Mona"   course="ENG-101 English II (Tue 16:30–17:30)" />
              </tbody>
            </table>
          </div>

          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: '#555', lineHeight: 1.5
          }}>
            If you approve, these <strong>4 enrollments will be set to FROZEN status</strong>. All 18 enrolled students will be notified. The 4 affected students' advisors will receive an action-required notification.
          </div>
        </div>

        {/* footer */}
        <div style={{
          padding: '14px 24px',
          borderTop: '1px dashed #999',
          background: '#f4f0e4',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10
        }}>
          <a className="wf-link" style={{ fontSize: 12 }}>View affected pending requests (2)</a>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="wf-btn outline" style={{ padding: '8px 16px', fontSize: 13, boxShadow: '2px 2px 0 #bbb' }}>Cancel</button>
            <button className="wf-btn" style={{ padding: '8px 16px', fontSize: 13, boxShadow: '2px 2px 0 #888' }}>Approve Change</button>
          </div>
        </div>
      </div>
    </div>
  </AdminShell>
);

window.ConflictDialog = ConflictDialog;

// ───────────────────────────────────────────────────────────
// 14 — OVERRIDES REPORT
// ───────────────────────────────────────────────────────────
const OvType = ({ kind }) => {
  const map = {
    PREREQ: { bg: '#f3e2c4', border: '#b07d2a', color: '#6e4a13', label: 'PREREQ' },
    CREDIT: { bg: '#f1d3d0', border: '#c0392b', color: '#7a1f17', label: 'CREDIT' },
  }[kind];
  return (
    <span style={{
      padding: '2px 7px',
      borderRadius: 3,
      border: `1.5px solid ${map.border}`,
      background: map.bg,
      color: map.color,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 9,
      letterSpacing: 0.5,
      fontWeight: 700
    }}>{map.label}</span>
  );
};

const OvRow = ({ date, student, sn, advisor, course, type, reason, audit }) => (
  <tr style={{ borderBottom: '1px dashed #c8c2b0' }}>
    <td style={{ padding: '8px 10px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#555' }}>{date}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{student}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#666' }}>{sn}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 13 }}>{advisor}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 12 }}>{course}</td>
    <td style={{ padding: '8px 10px' }}><OvType kind={type} /></td>
    <td style={{ padding: '8px 10px', fontFamily: 'Kalam, cursive', fontSize: 12, color: '#444', maxWidth: 240, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{reason}</td>
    <td style={{ padding: '8px 10px', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#666' }}>{audit}</td>
    <td style={{ padding: '8px 10px', textAlign: 'right' }}>
      <a className="wf-link" style={{ fontSize: 12 }}>View</a>
    </td>
  </tr>
);

const MiniStat = ({ label, value }) => (
  <div className="wf-card soft" style={{
    flex: 1, padding: '10px 14px', background: '#fdfcf8',
    display: 'flex', flexDirection: 'column', gap: 2
  }}>
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 1, color: '#777' }}>{label.toUpperCase()}</div>
    <div style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 24 }}>{value}</div>
  </div>
);

const OverridesReport = () => (
  <AdminShell selected="overrides">
    <div style={{ flex: 1, padding: '22px 28px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', minWidth: 0 }}>
      <div>
        <h1 className="wf-title" style={{ fontSize: 26 }}>
          <span className="sketch-underline">Overrides Report</span>
        </h1>
        <p className="wf-subtitle" style={{ marginTop: 4 }}>
          Fall 2026 · <strong>12 overrides</strong> issued this term
        </p>
      </div>

      {/* filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div className="wf-input" style={{ padding: '7px 12px', fontSize: 12, gap: 6 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>From:</span>
          <span style={{ color: '#222' }}>2026-09-01</span>
        </div>
        <div className="wf-input" style={{ padding: '7px 12px', fontSize: 12, gap: 6 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#777' }}>To:</span>
          <span style={{ color: '#222' }}>2026-12-15</span>
        </div>
        <FilterChip label="All Advisors" />
        <FilterChip label="All Courses" />
        <FilterChip label="All Types" />
        <div style={{ flex: 1 }} />
        <button className="wf-btn" style={{
          padding: '8px 14px', fontSize: 13, boxShadow: '2px 2px 0 #888',
          display: 'flex', alignItems: 'center', gap: 8
        }}>
          Export <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>▾</span>
        </button>
      </div>

      {/* mini stats */}
      <div style={{ display: 'flex', gap: 12 }}>
        <MiniStat label="Total Overrides" value="12" />
        <MiniStat label="Prereq Overrides" value="8" />
        <MiniStat label="Credit Limit Overrides" value="4" />
      </div>

      {/* table */}
      <div className="wf-card soft" style={{
        background: '#fdfcf8',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minHeight: 0,
        padding: 0
      }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#ebe6d8', borderBottom: '1.5px solid #2a2a2a', position: 'sticky', top: 0 }}>
                {['Date','Student','Student #','Advisor','Course','Type','Reason','Audit ID',''].map((h, i) => (
                  <th key={i} style={{
                    padding: '8px 10px', textAlign: i === 8 ? 'right' : 'left',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 1, color: '#555', fontWeight: 700
                  }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <OvRow date="2026-09-12" student="Sara Khaled"      sn="S-7741" advisor="Dr. Hassan" course="CS-301 Operating Sys"   type="PREREQ" reason="Credit transferred from previous univ…" audit="#AL-1041" />
              <OvRow date="2026-09-12" student="Omar Salim"       sn="S-7702" advisor="Dr. Hassan" course="CS-310 Compilers"        type="PREREQ" reason="Equivalent course taken abroad…"     audit="#AL-1043" />
              <OvRow date="2026-09-15" student="Lina Mansouri"    sn="S-7770" advisor="Dr. Mona"   course="CS-205 Software Eng"     type="CREDIT" reason="Final term — needs to graduate…"    audit="#AL-1058" />
              <OvRow date="2026-09-18" student="Ali Agela"        sn="S-7740" advisor="Dr. Hassan" course="CS-220 Database Sys"     type="PREREQ" reason="CS-202 in progress this same term…" audit="#AL-1071" />
              <OvRow date="2026-09-22" student="Hadeel Ramadan"   sn="S-7715" advisor="Dr. Mona"   course="ENG-201 Tech Writing"    type="CREDIT" reason="Department head approval on file…"  audit="#AL-1086" />
              <OvRow date="2026-09-29" student="Mohammed Yasin"   sn="S-7752" advisor="Dr. Hassan" course="CS-301 Operating Sys"    type="PREREQ" reason="Transcript review pending…"          audit="#AL-1104" />
              <OvRow date="2026-10-03" student="Yasmin Faraj"     sn="S-7799" advisor="Dr. Mona"   course="CS-310 Compilers"        type="PREREQ" reason="Took equivalent at LIMU summer…"     audit="#AL-1119" />
              <OvRow date="2026-10-10" student="Ahmed Tarhouni"   sn="S-7724" advisor="Dr. Hassan" course="CS-205 Software Eng"     type="CREDIT" reason="Final term — graduating Spring 2027" audit="#AL-1138" />
            </tbody>
          </table>
        </div>
        <div style={{
          padding: '10px 16px',
          borderTop: '1px dashed #999',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#666'
        }}>
          <span>Showing 1–8 of 12</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ padding: '4px 8px', cursor: 'pointer' }}>‹</span>
            <span style={{ padding: '4px 10px', border: '1.5px solid #1a1a1a', background: '#1a1a1a', color: '#fdfcf8', borderRadius: 3 }}>1</span>
            <span style={{ padding: '4px 10px', border: '1.5px solid #2a2a2a', borderRadius: 3, cursor: 'pointer' }}>2</span>
            <span style={{ padding: '4px 8px', cursor: 'pointer' }}>›</span>
          </div>
        </div>
      </div>
    </div>
  </AdminShell>
);

window.OverridesReport = OverridesReport;

export {
  V2Split, V2Otp, Dashboard, Catalog, CourseDetails,
  CartSidebarOverlay, MyRequests, MySchedule,
  AdvisorDashboard, RequestReview,
  AdminDashboard, Timetable, ConflictDialog, OverridesReport
};
