import { SVGProps } from 'react'

interface DarkIconProps extends SVGProps<SVGSVGElement> {
  color?: string // Prop opcional para definir el color del trazo
}

const DarkIcon = ({ color = 'currentColor', ...props }: DarkIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none" // Mantén el relleno transparente
    stroke={color} // Aplica el color al trazo
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" />
  </svg>
)

export default DarkIcon
