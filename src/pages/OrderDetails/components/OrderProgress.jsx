export default function OrderProgress({ currentStep = 2, steps = [], statusNote }) {
  return (
    <div className="py-8">
      {/* Stepper tracker */}
      <div className="relative mx-auto max-w-2xl px-4">
        {/* Progress Bar Line */}
        <div className="absolute top-3 left-8 right-8 h-1 bg-border/40 -z-0">
          <div
            className="h-full bg-dark transition-all duration-500"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Step Circles & Labels */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((step) => {
            const isCompleted = step.number < currentStep
            const isCurrent = step.number === currentStep

            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`grid size-7 place-items-center rounded-full transition-all duration-300 ${
                    isCompleted || isCurrent
                      ? 'bg-dark text-white ring-4 ring-white shadow-xs'
                      : 'bg-border/60 text-transparent ring-4 ring-white'
                  }`}
                >
                  <span className="size-2.5 rounded-full bg-white" />
                </div>

                <span
                  className={`mt-2.5 text-xs md:text-sm font-medium transition-colors ${
                    isCurrent || isCompleted
                      ? 'font-bold text-dark'
                      : 'text-gray/80'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Speech bubble note beneath active step */}
      {statusNote && (
        <div className="mt-8 relative max-w-xl mx-auto">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-[36%] -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-light/90" />

          {/* Note content */}
          <div className="rounded-xl bg-light/90 px-6 py-4 text-xs md:text-sm text-dark shadow-xs border border-border/20 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span className="font-bold text-dark shrink-0">
              {statusNote.date}
            </span>
            <span className="text-gray">{statusNote.message}</span>
          </div>
        </div>
      )}
    </div>
  )
}
