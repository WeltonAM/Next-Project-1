import Client from "./Client";

export default interface ClientRepo {
    save(client: Client): Promise<Client>
    exclude(client: Client): Promise<Client>
    all(): Promise<Client[]>
}