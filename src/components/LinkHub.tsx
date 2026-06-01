import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiReddit,
  SiSnapchat,
  SiTelegram,
  SiX,
  SiThreads,
  SiYoutube,
  SiDiscord,
  SiGmail,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Globe, Copy } from "lucide-react";

type LinkItem = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  href?: string;
  copy?: string;
  handle: string;
};

const LINKS: LinkItem[] = [
  { name: "Instagram", Icon: SiInstagram, color: "#E1306C", href: "https://www.instagram.com/ali.shk.1", handle: "@ali.shk.1" },
  { name: "Facebook", Icon: SiFacebook, color: "#1877F2", href: "https://www.facebook.com/ali.shk001", handle: "ali.shk001" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF", href: "https://github.com/ali-shk-1", handle: "ali-shk-1" },
  { name: "LinkedIn", Icon: FaLinkedinIn, color: "#0A66C2", href: "https://www.linkedin.com/in/muhammad-ali-b17235385/", handle: "Muhammad Ali" },
  { name: "Reddit", Icon: SiReddit, color: "#FF4500", href: "https://www.reddit.com/user/ali_shk_1/", handle: "u/ali_shk_1" },
  { name: "Snapchat", Icon: SiSnapchat, color: "#FFFC00", href: "https://www.snapchat.com/add/ali.shk.01", handle: "ali.shk.01" },
  { name: "X (Twitter)", Icon: SiX, color: "#FFFFFF", href: "https://x.com/ali_shk__1", handle: "@ali_shk__1" },
  { name: "Threads", Icon: SiThreads, color: "#FFFFFF", href: "https://www.threads.net/@ali.shk.1", handle: "@ali.shk.1" },
  { name: "YouTube", Icon: SiYoutube, color: "#FF0000", href: "https://www.youtube.com/@ali.shk.1", handle: "@ali.shk.1" },
  { name: "Discord", Icon: SiDiscord, color: "#5865F2", copy: "ali.shk.1", handle: "ali.shk.1" },
  { name: "Telegram", Icon: SiTelegram, color: "#26A5E4", href: "https://t.me/ali_shk_1", handle: "@ali_shk_1" },
  { name: "Gmail", Icon: SiGmail, color: "#EA4335", href: "mailto:alis629926@gmail.com", handle: "alis629926@gmail.com" },
  { name: "Portfolio", Icon: Globe, color: "#22d3ee", href: "https://portfolio-ali-shk-1.vercel.app/", handle: "portfolio-ali-shk-1" },
];

export function LinkHub() {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied!", { description: text });
    } catch {
      toast.error("Couldn't copy");
    }
  };

  return (
    <main
      style={{ position: "relative", zIndex: 1 }}
      className="flex min-h-screen w-full items-start justify-center px-4 py-10 sm:py-16"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass gradient-border relative w-full max-w-[480px] rounded-3xl p-6 sm:p-8"
        style={{ boxShadow: "0 25px 80px -20px oklch(0 0 0 / 0.6)" }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              fontSize: "clamp(1.4rem, 4vw, 1.875rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "oklch(0.95 0.01 280)",
            }}
          >
            Muhammad <span className="text-gradient">Ali</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            style={{
              marginTop: "0.5rem",
              fontSize: "0.85rem",
              color: "oklch(0.7 0.01 280)",
            }}
          >
            Builder, creator &amp; lifelong learner
          </motion.p>
        </div>

        <ul style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {LINKS.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
              style={{ listStyle: "none" }}
            >
              <LinkButton link={link} onCopy={handleCopy} />
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}

function LinkButton({ link, onCopy }: { link: LinkItem; onCopy: (s: string) => void }) {
  const { Icon, name, color, href, copy, handle } = link;

  const content = (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="group"
      style={{
        position: "relative",
        display: "flex",
        minHeight: "56px",
        width: "100%",
        alignItems: "center",
        gap: "1rem",
        overflow: "hidden",
        borderRadius: "1rem",
        border: "1px solid oklch(1 0 0 / 0.08)",
        background: "oklch(1 0 0 / 0.04)",
        padding: "0.75rem 1rem",
        textAlign: "left",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "oklch(1 0 0 / 0.2)";
        const glow = el.querySelector(".glow") as HTMLElement;
        if (glow) glow.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "oklch(1 0 0 / 0.08)";
        const glow = el.querySelector(".glow") as HTMLElement;
        if (glow) glow.style.opacity = "0";
      }}
    >
      {/* Hover glow */}
      <span
        className="glow"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0,
          transition: "opacity 0.3s",
          background: `radial-gradient(circle at 20% 50%, ${color}33, transparent 60%)`,
          boxShadow: `inset 0 0 30px ${color}22, 0 0 30px ${color}44`,
        }}
      />
      {/* Icon */}
      <span
        style={{
          position: "relative",
          display: "flex",
          height: "2.5rem",
          width: "2.5rem",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.75rem",
          border: "1px solid oklch(1 0 0 / 0.1)",
          background: "oklch(0 0 0 / 0.3)",
          color,
        }}
      >
        <Icon className="h-5 w-5" />
      </span>
      {/* Text */}
      <span style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "oklch(0.95 0.01 280)" }}>
          {name}
        </span>
        <span style={{ fontSize: "0.75rem", color: "oklch(0.6 0.01 280)" }}>{handle}</span>
      </span>
      {copy && (
        <Copy style={{ position: "relative", height: "1rem", width: "1rem", color: "oklch(0.5 0 0)" }} />
      )}
    </motion.div>
  );

  if (copy) {
    return (
      <button type="button" onClick={() => onCopy(copy)} style={{ width: "100%", background: "none", border: "none" }}>
        {content}
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
      {content}
    </a>
  );
}
