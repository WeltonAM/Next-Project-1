import { useState } from "react"
import Client from "../core/Client";
import Input from "./Input"
import Button from "./Button"

interface FormProps{
    client: Client
    changeClient?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps){
    
    const id = props.client?.id

    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return (
        <div>
            
            {id ? (
                <Input
                    readOnly 
                    text="Code" 
                    value={id} 
                />
            ): false}

            <Input 
                text="Name" 
                value={name} 
                newValue={setName}
                />

            <Input 
                text="Age" 
                value={age}
                type="number"
                newValue={setAge}
            />

            <div className="flex justify-end mt-3">
                <Button 
                color="blue" 
                onClick={() => props.changeClient?.(new Client(name, age, id))}
                className="mr-2"
                >
                    {id ? 'Change':'Save'}
                </Button>
                
                <Button 
                onClick={props.canceled}
                color="gray"
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}