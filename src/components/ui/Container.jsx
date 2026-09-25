// Обёртка, которая центрирует контент по ширине макета
export default function Container({ className = '', children }) {
  return <div className={`container-page ${className}`}>{children}</div>
}
