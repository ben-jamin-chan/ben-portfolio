import { BriefcaseBusiness, Layers3, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { experiences } from "@/lib/site";

const depthSignals = [
  {
    icon: Layers3,
    title: "Front-end depth",
    description: "Design systems, interaction polish, responsive behavior, and UI hierarchy that holds up under real usage.",
  },
  {
    icon: Rocket,
    title: "Shipping mindset",
    description: "I bias toward execution, iteration, and decisions that move a product closer to launch without losing quality.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business context",
    description: "My work is shaped by conversion, clarity, trust, and the practical constraints that clients actually care about.",
  },
] as const;

export default function Experience() {
  return (
    <section id="experience" className="shell py-24 sm:py-28">
      <Reveal>
        <SectionIntro
          eyebrow="Experience + skills"
          title="Technical depth, product judgment, and a bias toward work that solves real problems."
          description="The strongest developer portfolios feel like proof, not promises. This section is structured to show how I think, what I’ve handled, and where I add leverage beyond implementation."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel grid gap-4 px-6 py-6 sm:px-8 sm:py-8">
            {depthSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div key={signal.title} className="panel-soft rounded-[24px] px-5 py-5">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                        {signal.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {signal.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="eyebrow">Selected timeline</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">
                  Real-world experience that shaped how I build.
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.title} className="grid gap-4 sm:grid-cols-[96px_1fr]">
                  <div className="text-sm text-white/32">0{index + 1}</div>
                  <div className="relative border-l border-white/10 pl-5">
                    <div className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                    <p className="text-sm text-white/40">{experience.period}</p>
                    <h4 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                      {experience.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/56">{experience.company}</p>
                    <p className="mt-4 text-base leading-7 text-white/60">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
