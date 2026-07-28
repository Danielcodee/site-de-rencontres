// Ícones de redes sociais desenhados à mão no estilo lucide (stroke, 24x24).
// A partir da v1, o lucide-react deixou de incluir ícones de marcas.
import type { SVGProps } from "react";

function base(props: SVGProps<SVGSVGElement>) {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l0.5-3H14V9.5c0-0.28 0.22-0.5 0.5-0.5H14z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 3v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14.5 3c0 2.5 2 4.5 4.5 4.5" />
    </svg>
  );
}
