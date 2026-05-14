import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { instructor } from "@/lib/data";

function PortraitPlaceholder() {
  return (
    <div
      className={cn(
        "mx-auto lg:mx-0 h-40 w-40 shrink-0 rounded-full",
        "bg-gradient-to-br from-[var(--color-coral-400)] to-[var(--color-coral-600)]",
        "flex items-center justify-center",
        "text-5xl font-bold text-[var(--color-cream-50)]",
        "shadow-[var(--shadow-elev)]"
      )}
      aria-hidden="true"
    >
      K
    </div>
  );
}

function CredentialBadge({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm lg:text-base leading-relaxed text-[var(--color-charcoal-900)]">
      <BadgeCheck
        className="mt-0.5 h-4 w-4 lg:h-5 lg:w-5 shrink-0 text-[var(--color-coral-500)]"
        aria-hidden="true"
      />
      {text}
    </li>
  );
}

export function Instructor() {
  return (
    <Section id="instructor" tone="alt">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>A · Author</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              ผู้เขียน
            </h2>
          </header>
        </ScrollReveal>

        <div className="mt-12 lg:mt-16">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[160px_1fr] lg:gap-12 lg:items-start">
              {/* Portrait */}
              <PortraitPlaceholder />

              {/* Content */}
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-charcoal-900)]">
                  {instructor.name}
                </p>

                <div className="mt-5 space-y-4">
                  {instructor.story.map((para, i) => (
                    <p
                      key={i}
                      className="text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-700)]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {instructor.credentials.map((cred, i) => (
                    <CredentialBadge key={i} text={cred} />
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
