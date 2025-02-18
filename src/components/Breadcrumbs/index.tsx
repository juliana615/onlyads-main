type Props = {
  Container: React.FC<{ className?: string; children: React.ReactNode }>
  label: string
}

export default function PageTitle({ Container, label }: Props) {
  return (
    <div className="bg-white basis-[50px] shrink-0 border-b border-surf-primary">
      <Container className="flex items-center h-full space-x-0.5">
        <p className="text-xs md:text-base">{label}</p>
      </Container>
    </div>
  )
}
