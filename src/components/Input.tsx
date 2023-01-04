interface InputProps{
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    newValue?: (value: any) => void
}

export default function Input(props: InputProps){
    return (
        <div className="flex flex-col text-gray-500">
            <label className="mb-2 ml-1">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.newValue?.(e.target.value)}
                className={`
                    border border-purple-200 rounded-lg
                    bg-gray-50
                    focus:outline-none
                    px-3 py-1 mb-6
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}