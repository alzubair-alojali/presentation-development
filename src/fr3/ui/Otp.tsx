import { Box, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button, PageGrid } from './_kit';

export function Otp() {
  const code = ['7', '4', '2', '5', '_', '_'];
  return (
    <div className="relative w-full h-full flex" style={{ background: '#060B1A', color: '#F4F7FF', fontFamily: 'Inter' }}>
      <PageGrid />
      {/* Left brand panel — minimal */}
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
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-tertiary">Verify your email</div>
          </div>
        </div>

        <div className="relative space-y-5">
          <div
            className="h-[280px] rounded-2xl relative overflow-hidden flex items-center justify-center"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <ShieldCheck size={140} strokeWidth={0.6} className="text-accent-primary opacity-30" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex items-center gap-3 text-[12px] text-ink-secondary backdrop-blur" style={{ background: 'linear-gradient(to top, rgba(11,18,38,0.95), transparent)' }}>
              <ShieldCheck size={14} className="text-accent-primary" />
              Single-use code · expires in 5 minutes
            </div>
          </div>
        </div>

        <div className="relative text-[11.5px] font-mono tabular text-ink-tertiary">
          © 2026 LIMU · v1.0
        </div>
      </div>

      {/* Right OTP form */}
      <div className="relative flex-1 flex items-center justify-center p-12">
        <div className="w-[460px] flex flex-col gap-7">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary mb-3">Step 2 · Verify</div>
            <h1 className="font-display font-bold text-[36px] text-ink-primary leading-tight" style={{ fontFamily: 'Satoshi, Inter', letterSpacing: '-0.02em' }}>
              Enter the 6-digit code
            </h1>
            <p className="text-[14px] text-ink-secondary mt-3 leading-relaxed">
              We sent a verification code to <span className="text-ink-primary font-semibold">ali.khaled@limu.edu.ly</span>.
              It expires in 4 minutes 32 seconds.
            </p>
          </div>

          {/* OTP boxes */}
          <div className="flex gap-2.5">
            {code.map((d, i) => {
              const filled = d !== '_';
              return (
                <div
                  key={i}
                  className="flex items-center justify-center font-display font-bold tabular"
                  style={{
                    width: 60, height: 70,
                    fontSize: 26,
                    color: filled ? '#F4F7FF' : '#6E7A94',
                    background: filled ? 'rgba(76,196,255,0.06)' : 'rgba(255,255,255,0.03)',
                    border: filled ? '1.5px solid rgba(76,196,255,0.40)' : '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 10,
                    boxShadow: filled ? '0 0 0 3px rgba(76,196,255,0.08)' : 'none',
                    fontFamily: 'Satoshi, Inter',
                  }}
                >
                  {filled ? d : ''}
                </div>
              );
            })}
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2 w-2 rounded-full animate-pulse" style={{ background: '#F5B752' }} />
            <span className="font-mono tabular text-[12.5px] text-ink-secondary">
              Code expires in <span className="text-ink-primary font-semibold">04:32</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="lg" icon={ArrowRight}>Verify</Button>
            <Button variant="ghost" icon={RotateCcw}>Resend code</Button>
          </div>

          <div className="text-[12px] text-ink-tertiary">
            Didn't get it? Check your spam folder, or wait 60 seconds before requesting a new code.
            <span className="block mt-1">Maximum 3 resends per hour.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
