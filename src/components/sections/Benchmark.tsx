import { TextLink } from "@/components/ui/TextLink";
import type { BenchmarkProps } from "@/types/ui";
import { toneStyles } from "@/utils/tone";

export function Benchmark({ benchmark }: BenchmarkProps) {
  return (
    <div className="bg-canopy text-limewash mt-16 rounded-sm p-8 md:p-12">
      <h3 className="font-wide max-w-[20ch] text-3xl font-semibold">{benchmark.title}</h3>
      <p className="text-limewash/80 mt-4 max-w-prose text-lg leading-relaxed">
        {benchmark.description}
      </p>
      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {benchmark.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1">
            <dt className="text-limewash/75">{metric.label}</dt>
            <dd className="font-wide text-ochre text-4xl font-semibold">{metric.value}</dd>
          </div>
        ))}
      </dl>
      <TextLink href={benchmark.href} className={`mt-10 ${toneStyles.dark.link}`}>
        {benchmark.linkLabel}
      </TextLink>
    </div>
  );
}
