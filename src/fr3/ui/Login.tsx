import { Mail, Lock, ArrowRight, Box } from 'lucide-react';
import { Button, PageGrid } from './_kit';

export function Login() {
  return (
    <div className="relative w-full h-full flex" style={{ background: '#060B1A', color: '#F4F7FF', fontFamily: 'Inter' }}>
      <PageGrid />
      {/* Left brand panel */}
      <div
        className="relative flex flex-col justify-between p-12"
        style={{
          width: 580,
          background: 'linear-gradient(165deg, rgba(76,196,255,0.10), rgba(124,139,255,0.06))',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="relative flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-md flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4CC4FF, #7C8BFF)', color: '#0B1226' }}
          >
            <Box size={22} strokeWidth={2} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[18px]" style={{ fontFamily: 'Satoshi, Inter' }}>LIMU</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-tertiary">Course Registration</div>
          </div>
        </div>

        <div className="relative space-y-6 max-w-md">
          <div
            className="text-[13px] uppercase tracking-[0.24em] font-semibold"
            style={{ color: '#4CC4FF' }}
          >
            Term · Fall 2026
          </div>
          <h2
            className="font-display font-bold leading-[1.05]"
            style={{ fontFamily: 'Satoshi, Inter', fontSize: 56, letterSpacing: '-0.02em' }}
          >
            Register for your courses
            <br />
            <span style={{ background: 'linear-gradient(135deg, #4CC4FF, #B980FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              in minutes, not days.
            </span>
          </h2>
          <p className="text-[15px] text-ink-secondary leading-relaxed">
            Browse the catalog, get instant eligibility checks, and submit your request straight to your advisor.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <Stat n="3" label="Roles" />
            <div className="h-8 w-px bg-white/10" />
            <Stat n="22" label="Courses live" />
            <div className="h-8 w-px bg-white/10" />
            <Stat n="48h" label="Approval SLA" />
          </div>
        </div>

        <div className="relative text-[11.5px] font-mono tabular text-ink-tertiary">
          © 2026 Libyan International Medical University · v1.0
        </div>
      </div>

      {/* Right form */}
      <div className="relative flex-1 flex items-center justify-center p-12">
        <div className="w-[420px] flex flex-col gap-7">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary mb-3">
              Sign in
            </div>
            <h1 className="font-display font-bold text-[40px] text-ink-primary leading-tight" style={{ fontFamily: 'Satoshi, Inter', letterSpacing: '-0.02em' }}>
              Welcome back
            </h1>
            <p className="text-[14px] text-ink-secondary mt-2">
              Use your LIMU credentials to continue.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Field label="University Email" icon={Mail} value="ali.khaled@limu.edu.ly" />
            <Field label="Password" icon={Lock} value="••••••••••" rightAction="Forgot?" />
          </div>

          <Button variant="primary" size="lg" icon={ArrowRight}>Sign in</Button>

          <div className="text-[12px] text-ink-tertiary text-center">
            By signing in, you agree to LIMU's <span className="text-accent-primary underline decoration-accent-primary/40">acceptable use policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-[28px] tabular leading-none" style={{ color: '#F4F7FF', fontFamily: 'Satoshi, Inter' }}>{n}</div>
      <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink-tertiary mt-1.5">{label}</div>
    </div>
  );
}

function Field({ label, icon: Icon, value, rightAction }: { label: string; icon: any; value: string; rightAction?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-tertiary">{label}</label>
        {rightAction && <span className="text-[11px] text-accent-primary font-medium">{rightAction}</span>}
      </div>
      <div
        className="flex items-center gap-3 rounded-md transition-colors"
        style={{
          height: 48, paddingInline: 14,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(76,196,255,0.30)',
          boxShadow: '0 0 0 4px rgba(76,196,255,0.06)',
        }}
      >
        <Icon size={16} strokeWidth={1.75} className="text-ink-tertiary shrink-0" />
        <span className="flex-1 text-[14px] text-ink-primary truncate">{value}</span>
      </div>
    </div>
  );
}
