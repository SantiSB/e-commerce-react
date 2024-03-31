import { SVGProps } from 'react'

interface InstagramIconProps extends SVGProps<SVGSVGElement> {
  color?: string
}

const InstagramIcon = ({
  color = 'currentColor',
  ...props
}: InstagramIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.5 7.5v.01" />
  </svg>
)
export default InstagramIcon
