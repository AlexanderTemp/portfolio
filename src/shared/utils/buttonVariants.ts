import { cn } from './cn'

export type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'primary' | 'secondary'

const colorMap = {
  primary: {
    bg: 'bg-primary',
    text: 'text-primary-text',
    ring: 'focus:ring-primary',
    border: 'border-primary',
    hoverBg: 'hover:bg-primary/10',
    textColor: 'text-primary',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-secondary-text',
    ring: 'focus:ring-secondary',
    border: 'border-secondary',
    hoverBg: 'hover:bg-secondary/10',
    textColor: 'text-secondary',
  },
} as const

export const buttonVariants = ({
  variant = 'default',
  size = 'md',
  color = 'primary',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  color?: ButtonColor
}) => {
  const c = colorMap[color]

  return cn(
    'inline-flex gap-2 items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none',

    c.ring,

    size === 'sm' && 'h-8 px-3 text-sm',
    size === 'md' && 'h-10 px-4 text-base',
    size === 'lg' && 'h-12 px-6 text-lg',

    variant === 'default' && cn(c.bg, c.text, 'hover:opacity-90'),

    variant === 'outline' && cn('border bg-transparent', c.border, c.textColor, c.hoverBg),

    variant === 'ghost' && cn('bg-transparent', c.textColor, c.hoverBg),

    variant === 'link' && cn('bg-transparent underline-offset-4 hover:underline', c.textColor),

    className,
  )
}
