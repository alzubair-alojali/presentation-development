/**
 * UI primitives shared across the 14 polished screens in /fr3.
 * All components assume a 1440×900 dark canvas and the deck's design
 * tokens (midnight, glass, cyan/violet/warm accents).
 */
import type { ReactNode } from 'react';
import {
  LayoutGrid, BookOpen, Calendar, Inbox, Bell, LogOut,
  Search, Filter, ChevronRight, ChevronDown, MoreHorizontal,
  CheckCircle2, AlertTriangle, XCircle, Clock,
  Sparkles, Settings, Users, GraduationCap, Layers, FileText,
  ListChecks,
} from 'lucide-react';

export const ICONS = {
  dash: LayoutGrid,
  catalog: BookOpen,
  schedule: Calendar,
  requests: Inbox,
  bell: Bell,
  logout: LogOut,
  search: Search,
  filter: Filter,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  more: MoreHorizontal,
  check: CheckCircle2,
  warn: AlertTriangle,
  reject: XCircle,
  clock: Clock,
  sparkles: Sparkles,
  settings: Settings,
  users: Users,
  grad: GraduationCap,
  layers: Layers,
  file: FileText,
  list: ListChecks,
};

export const TONES = {
  cyan:    '#4CC4FF',
  violet:  '#7C8BFF',
  warm:    '#FFB86B',
  success: '#4ADE80',
  danger:  '#FF6B7A',
  warning: '#F5B752',
  ink:     '#F4F7FF',
  ink2:    '#A7B3CC',
  ink3:    '#6E7A94',
};

/* Card surfaces */
export function Card({ children, className = '', style }: { children?: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`relative rounded-xl ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset, 0 18px 50px -22px rgba(0,0,0,0.6)',
        backdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Pill / chip — colored status badge */
export function Pill({ children, tone = 'cyan', size = 'md' }: { children: ReactNode; tone?: keyof typeof TONES; size?: 'sm' | 'md' }) {
  const c = TONES[tone];
  const h = size === 'sm' ? 22 : 26;
  const px = size === 'sm' ? 8 : 10;
  const fs = size === 'sm' ? 10.5 : 11;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em]"
      style={{
        height: h, paddingInline: px, fontSize: fs,
        color: c,
        background: `${c}14`,
        border: `1px solid ${c}40`,
        fontFamily: 'Inter',
      }}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: c }} />
      {children}
    </span>
  );
}

/* Solid pill (for badges in admin tables etc.) */
export function SolidPill({ children, tone }: { children: ReactNode; tone: keyof typeof TONES }) {
  const c = TONES[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide"
      style={{
        height: 24, paddingInline: 10, fontSize: 11, color: '#0B1226',
        background: `linear-gradient(135deg, ${c}, ${c}cc)`,
      }}
    >
      {children}
    </span>
  );
}

/* Button */
export function Button({
  children, variant = 'primary', icon: Icon, size = 'md', disabled = false,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: any;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const px = size === 'sm' ? 14 : size === 'lg' ? 22 : 18;
  const fs = size === 'sm' ? 12.5 : size === 'lg' ? 15 : 13.5;

  const styleByVariant: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
      color: '#0B1226',
      border: '1px solid rgba(76,196,255,0.45)',
      boxShadow: '0 1px 0 rgba(255,255,255,0.18) inset, 0 10px 24px -10px rgba(76,196,255,0.45)',
      fontWeight: 600,
    },
    secondary: {
      background: 'rgba(255,255,255,0.04)',
      color: '#F4F7FF',
      border: '1px solid rgba(255,255,255,0.16)',
      fontWeight: 500,
    },
    ghost: {
      background: 'transparent',
      color: '#A7B3CC',
      border: '1px solid transparent',
      fontWeight: 500,
    },
    danger: {
      background: 'rgba(255,107,122,0.10)',
      color: '#FF6B7A',
      border: '1px solid rgba(255,107,122,0.40)',
      fontWeight: 600,
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className="inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200"
      style={{
        height: h, paddingInline: px, fontSize: fs,
        fontFamily: 'Inter',
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...styleByVariant[variant],
      }}
    >
      {Icon && <Icon size={size === 'lg' ? 18 : 15} strokeWidth={1.75} />}
      {children}
    </button>
  );
}

/* Input field */
export function Input({
  label, placeholder, value, type = 'text', icon: Icon, helper,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  icon?: any;
  helper?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-tertiary">
          {label}
        </label>
      )}
      <div
        className="flex items-center gap-2.5 rounded-md transition-colors"
        style={{
          height: 44, paddingInline: 14,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {Icon && <Icon size={16} strokeWidth={1.75} className="text-ink-tertiary shrink-0" />}
        <span className="flex-1 text-[14px] text-ink-secondary truncate">
          {value || <span className="text-ink-tertiary">{placeholder}</span>}
        </span>
      </div>
      {helper && <span className="text-[11.5px] text-ink-tertiary">{helper}</span>}
    </div>
  );
}

/* Page background grid + glow (matches the deck) */
export function PageGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(110,160,255,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(110,160,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="absolute"
        style={{
          width: 540, height: 540,
          right: -100, top: -180,
          background: 'radial-gradient(circle, rgba(76,196,255,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute"
        style={{
          width: 480, height: 480,
          left: -120, bottom: -180,
          background: 'radial-gradient(circle, rgba(124,139,255,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}

/* Sidebar — left navigation */
export interface NavItem {
  icon: keyof typeof ICONS;
  label: string;
  badge?: number;
  active?: boolean;
}
export function Sidebar({
  brand = 'CRMS',
  subBrand = 'Course Registration',
  items, footerItems = [], width = 240,
}: {
  brand?: string;
  subBrand?: string;
  items: NavItem[];
  footerItems?: NavItem[];
  width?: number;
}) {
  return (
    <aside
      className="h-full flex flex-col"
      style={{
        width,
        background: 'rgba(11,18,38,0.85)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="p-6 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="h-9 w-9 rounded-md flex items-center justify-center font-display font-bold"
          style={{
            background: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
            color: '#0B1226',
            fontSize: 14,
          }}
        >
          ⌬
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold text-[15px] text-ink-primary">{brand}</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-0.5">{subBrand}</div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map(it => <NavItemRow key={it.label} item={it} />)}
      </nav>
      {footerItems.length > 0 && (
        <div className="p-3 space-y-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {footerItems.map(it => <NavItemRow key={it.label} item={it} />)}
        </div>
      )}
    </aside>
  );
}
function NavItemRow({ item }: { item: NavItem }) {
  const Icon = ICONS[item.icon];
  return (
    <div
      className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-200"
      style={{
        background: item.active ? 'rgba(76,196,255,0.10)' : 'transparent',
        border: item.active ? '1px solid rgba(76,196,255,0.30)' : '1px solid transparent',
        color: item.active ? '#4CC4FF' : '#A7B3CC',
      }}
    >
      <Icon size={17} strokeWidth={1.75} />
      <span className="flex-1 text-[13.5px] font-medium" style={{ fontFamily: 'Inter' }}>{item.label}</span>
      {item.badge !== undefined && item.badge > 0 && (
        <span
          className="font-mono text-[10.5px] tabular px-1.5 py-0.5 rounded font-semibold"
          style={{
            background: item.active ? 'rgba(76,196,255,0.20)' : 'rgba(255,107,122,0.16)',
            color: item.active ? '#4CC4FF' : '#FF6B7A',
          }}
        >
          {item.badge}
        </span>
      )}
    </div>
  );
}

/* Top bar — page header */
export function Topbar({
  title, subtitle, user = { initials: 'AK', name: 'Ali Khaled', role: 'Student' }, search = true,
}: {
  title: string;
  subtitle?: string;
  user?: { initials: string; name: string; role: string };
  search?: boolean;
}) {
  const Bell = ICONS.bell;
  const Search = ICONS.search;
  return (
    <header
      className="flex items-center justify-between px-8"
      style={{ height: 72, borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div>
        <h1 className="font-display font-bold text-[24px] text-ink-primary leading-tight" style={{ fontFamily: 'Satoshi, Inter', letterSpacing: '-0.01em' }}>{title}</h1>
        {subtitle && <p className="text-[12.5px] text-ink-tertiary mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {search && (
          <div
            className="flex items-center gap-2.5 rounded-full"
            style={{
              height: 38, paddingInline: 14,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              minWidth: 240,
            }}
          >
            <Search size={14} strokeWidth={1.75} className="text-ink-tertiary" />
            <span className="text-[12.5px] text-ink-tertiary">Search…</span>
            <span className="ml-auto text-[10px] font-mono text-ink-tertiary px-1.5 py-0.5 rounded border border-white/10">⌘K</span>
          </div>
        )}
        <button
          className="relative h-10 w-10 rounded-md flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Bell size={16} strokeWidth={1.75} className="text-ink-secondary" />
          <span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full" style={{ background: '#FF6B7A' }} />
        </button>
        <div className="flex items-center gap-2.5 pl-3" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center font-semibold text-white text-[12px]"
            style={{ background: 'linear-gradient(135deg, #7C8BFF, #B980FF)' }}
          >
            {user.initials}
          </div>
          <div className="leading-tight">
            <div className="text-[13px] text-ink-primary font-semibold">{user.name}</div>
            <div className="text-[10.5px] text-ink-tertiary uppercase tracking-[0.12em]">{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* AppShell = sidebar + topbar + main scroll area, locked to 1440×900 */
export function AppShell({
  navItems, footerItems, brand, subBrand, topbar, children,
}: {
  navItems: NavItem[];
  footerItems?: NavItem[];
  brand?: string;
  subBrand?: string;
  topbar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full flex" style={{ background: '#060B1A', color: '#F4F7FF', fontFamily: 'Inter' }}>
      <PageGrid />
      <div className="relative flex-1 flex">
        <Sidebar brand={brand} subBrand={subBrand} items={navItems} footerItems={footerItems} />
        <div className="flex-1 flex flex-col min-w-0">
          {topbar}
          <main className="flex-1 overflow-hidden p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

/* Section header inside main content */
export function SectionHead({ title, kicker, action }: { title: string; kicker?: string; action?: ReactNode }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        {kicker && <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-1.5">{kicker}</div>}
        <h2 className="font-display font-bold text-[20px] text-ink-primary" style={{ fontFamily: 'Satoshi, Inter' }}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
