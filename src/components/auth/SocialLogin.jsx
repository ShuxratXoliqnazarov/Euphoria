import { GoogleIcon, TwitterIcon } from '@/components/ui/BrandIcons'

// Кнопки Google / Twitter + разделитель OR (Sign In, Sign Up)
export default function SocialLogin() {
  return (
    <div>
      <div className="space-y-4">
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-dark/60 text-lg text-primary hover:bg-light"
        >
          <GoogleIcon className="size-5" />
          Continue With Google
        </button>
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-dark/60 text-lg text-primary hover:bg-light"
        >
          <TwitterIcon className="size-5 text-[#1da1f2]" />
          Continue With Twitter
        </button>
      </div>

      <div className="my-8 flex items-center gap-6 text-gray">
        <span className="h-px flex-1 bg-border" />
        OR
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}
