import type { HTMLAttributes } from "react";

export type ChittiLogoProps = HTMLAttributes<HTMLDivElement>;

export default function ChittiLogo(props: ChittiLogoProps) {
  return (
    <div 
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'currentColor'
      }} 
      {...props}
    >
      CHITTI
    </div>
  );
}
