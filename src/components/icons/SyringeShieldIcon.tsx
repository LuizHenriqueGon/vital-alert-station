// src/components/icons/SyringeShieldIcon.tsx
import { SVGProps } from "react";

const SyringeShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Escudo arredondado igual ao seu logotipo oficial (icon.jpg) */}
    <path
      d="M50 5C25 15 15 25 15 45C15 70 30 85 50 95C70 85 85 70 85 45C85 25 75 15 50 5Z"
      fill="currentColor"
    />
    
    {/* Ícone de Seringa/Injeção Branca centralizada */}
    <path
      d="M38 62L43 57M63 37L68 32M45 55L60 40M48 52L63 37M51 49L66 34M43 67L48 62M33 67L43 67L43 77M58 32L68 42M63 27L73 37"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="56" y="26" width="16" height="5" transform="rotate(-45 56 26)" fill="white"/>
  </svg>
);

export default SyringeShieldIcon;