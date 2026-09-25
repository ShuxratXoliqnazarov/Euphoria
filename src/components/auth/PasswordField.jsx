import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import FormField from '@/components/auth/FormField'

// Поле пароля с кнопкой Show / Hide
export default function PasswordField(props) {
  const [visible, setVisible] = useState(false)

  const toggle = (
    <button
      type="button"
      onClick={() => setVisible(!visible)}
      className="flex items-center gap-2 text-sm text-gray hover:text-dark"
    >
      {visible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
      {visible ? 'Show' : 'Hide'}
    </button>
  )

  return <FormField type={visible ? 'text' : 'password'} action={toggle} {...props} />
}
