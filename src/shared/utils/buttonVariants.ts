import { cn } from './cn'

export type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export const buttonVariants = ({
  variant = 'default',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}) => {
  return cn(
    'inline-flex gap-2 items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none',
    size === 'sm' && 'h-8 px-3 text-sm',
    size === 'md' && 'h-10 px-4 text-base',
    size === 'lg' && 'h-12 px-6 text-lg',

    variant === 'default' && 'bg-primary text-primary-text hover:opacity-90',
    variant === 'outline' &&
      'border border-primary text-primary bg-transparent hover:bg-primary/10',
    variant === 'ghost' && 'bg-transparent text-primary hover:bg-primary/10',
    variant === 'link' && 'bg-transparent text-primary underline-offset-4 hover:underline',
    className,
  )
}
