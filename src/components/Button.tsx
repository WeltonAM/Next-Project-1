interface ButtonProps {
    color?: string
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    
    const color = props.color ?? 'green'
    
    return (
        <button onClick={props.onClick} className={`
        bg-gradient-to-l from-${color}-600 to-${color}-800
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}