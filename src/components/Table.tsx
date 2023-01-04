import Client from "../core/Client"
import { IconsEdition, IconDelete } from "./Icons"

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.clientDeleted || props.clientSelected

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">Code</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Age</th>
                {showActions ? <th className="p-3">Actions</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}`}>
                    <td className="text-left p-3">{client.id}</td>
                    <td className="text-left p-3">{client.name}</td>
                    <td className="text-left p-3">{client.age}</td>
                    {showActions ? renderActions(client): false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`
                        flex justify-center items-center
                        text-green-700 rounded-full p-1 m-2
                        hover:bg-white
                    `}>
                        {IconsEdition}
                    </button>

                ) : false}

                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted?.(client)} className={`
                        flex justify-center items-center
                       text-red-700 rounded-full p-1 m-2
                       hover:bg-white
                    `}>
                        {IconDelete}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-md overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-l from bg-purple-600 to-purple-500
            `}>
                {renderHeader()}
            </thead>

            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}