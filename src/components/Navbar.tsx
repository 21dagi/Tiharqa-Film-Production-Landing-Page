import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_LINKS, SECTION_IDS, SITE } from "@/data/site";
import { useActiveSection, useScrollPast } from "@/hooks/useBrowser";
import { LogoLockup } from "./Logo";

const PLATE_CUT = { "--cut": "10px" } as CSSProperties;

const MOBILE_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  ...NAV_LINKS,
];

export function Navbar() {
  const scrolled = useScrollPast(20);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock scroll, close on Escape, trap focus while the full-screen menu is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !headerRef.current) return;
      const focusables = headerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    // Close if the viewport grows to desktop
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const darkText = scrolled && !open;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled && !open
          ? "bg-white/95 shadow-[0_1px_0_rgba(6,6,48,0.08),0_12px_28px_-16px_rgba(6,6,48,0.3)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "container-x flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-16" : "h-[4.75rem]",
        )}
      >
        {/* Compact Logo Lockup */}
        <a
          href="#home"
          onClick={close}
          aria-label="Tiharqa Film Production, back to top"
          className="cut-tr bg-white px-2.5 py-1 transition-transform hover:scale-[1.02]"
          style={PLATE_CUT}
        >
          <LogoLockup />
        </a>

        {/* Desktop links - refined typography and spacing */}
        <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative inline-flex min-h-9 items-center px-2.5 xl:px-3 font-display text-[0.76rem] xl:text-[0.8rem] font-bold tracking-[0.06em] uppercase transition-colors",
                    darkText ? "text-navy hover:text-signal" : "text-white hover:text-white/80",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-2.5 xl:inset-x-3 bottom-0.5 h-0.5 origin-left bg-signal transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Group */}
        <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
          <a
            href={SITE.phoneHref}
            className={cn(
              "hidden xl:inline-flex min-h-9 items-center gap-2 font-display text-[0.78rem] font-bold tracking-wide transition-colors",
              darkText ? "text-navy hover:text-signal" : "text-white hover:text-white/80",
            )}
          >
            <Phone className="size-3.5 text-signal" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href="#contact"
            className={cn("btn min-h-10 px-5 text-[0.78rem]", darkText ? "btn-red" : "btn-red-dark")}
          >
            Collaborate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-11 items-center justify-center transition-colors lg:hidden",
            darkText ? "text-navy" : "text-white",
          )}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Full-screen mobile navigation */}
      {open && (
        <div
          id="mobile-menu"
          className="on-dark menu-in fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-navy px-5 pt-24 pb-8 sm:px-8 lg:hidden"
        >
          <div aria-hidden="true" className="sec-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
          <ul className="relative">
            {MOBILE_LINKS.map((link, i) => (
              <li key={link.id} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={close}
                  className="flex min-h-14 items-center justify-between py-2.5 font-display text-xl font-bold text-white sm:text-2xl"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-signal">0{i + 1}</span>
                    {link.label}
                  </span>
                  <ArrowRight className="size-4 text-white/50" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="relative mt-auto pt-8">
            <a href="#contact" onClick={close} className="btn btn-red-dark w-full">
              Inquire About a Project
            </a>
            <a href={SITE.phoneHref} className="btn btn-outline-light mt-3 w-full">
              <Phone className="size-4" aria-hidden="true" />
              Call {SITE.phone}
            </a>
            <p className="mt-6 text-center font-display text-[0.68rem] font-bold tracking-[0.2em] text-white/60 uppercase">
              Stories That Move. Cinema That Connects.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
