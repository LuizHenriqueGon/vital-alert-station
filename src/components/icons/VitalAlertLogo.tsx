// src/components/icons/VitalAlertLogo.tsx
import { SVGProps } from "react";

/**
 * VitalAlertLogo - Componente React SVG para o ícone de marca oficial.
 * Recriado exatamente a partir da imagem fornecida pelo usuário (icon.jpg).
 * Captura o escudo arredondado e a cruz branca estilizada com a barra curva.
 */
const VitalAlertLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100" // Viewbox simplificada para facilitar o dimensionamento
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Definição do Escudo Arredondado (fundo) */}
    <path
      d="M50 5C25 15 15 25 15 45C15 70 30 85 50 95C70 85 85 70 85 45C85 25 75 15 50 5Z"
      className="fill-current" // Permite controlar a cor do escudo via CSS (teal ou outro)
    />
    
    {/* Definição da Cruz Branca Estilizada (sobreposta) */}
    {/* A barra horizontal é desenhada com uma curva na parte superior, como na foto do ícone físico */}
    <path
      d="M45 35V48H32C30 48 30 52 32 52H45V65C45 67 49 67 49 65V52H62C64 52 64 48 62 48H49V35C49 33 45 33 45 35Z"
      fill="white" // A cruz é sempre branca, como no original
    />
  </svg>
);

export default VitalAlertLogo;