export const FormField = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <label className='block'>
    <span className='mb-1 block text-xs opacity-60'>{label}</span>
    {children}
  </label>
)
