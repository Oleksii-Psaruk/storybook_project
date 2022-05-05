export interface IButtonProps {
    label: string
    variant?: ButtonVariants,
    isWidthFull?: boolean
    onClick?: (e: SubmitEvent<HTMLButtonElement>) => void
}

export type ButtonVariants = "primary" | "secondary";