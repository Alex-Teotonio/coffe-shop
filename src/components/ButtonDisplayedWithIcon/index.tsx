import { ReactNode } from "react"
import { Button } from "./styles"


interface ButtonDisplayedWithIconProps {
  gap: string,
  width: string,
  padding: string,
  children: ReactNode
}

export function ButtonDisplayedWithIcon({width, gap, padding, children}: ButtonDisplayedWithIconProps) {
  return (
      <Button width={width} gap={gap} padding={padding}>
        {children}
      </Button>
  )
}