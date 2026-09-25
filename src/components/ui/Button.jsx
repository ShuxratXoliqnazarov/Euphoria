const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  dark: 'border border-dark text-dark hover:bg-dark hover:text-white',
  white: 'bg-white text-dark hover:bg-light',
}

// <Button>Shop Now</Button>  или  <Button variant="outline">...</Button>
export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
