import { Reveal } from "./motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.6rem] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
