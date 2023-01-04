import { useEffect, useState } from "react";
import Client from "../core/Client";
import ClientCollection from "../backend/db/ClientCollection";
import ClientRepo from "../core/ClientRepo";
import useTableOrForm from "./useTableOrForm";

export default function useClients(){
    const repo: ClientRepo = new ClientCollection()

    const {tableVisible, formVisible, showForm, showTable} = useTableOrForm()
  
    const [clients, setClients] = useState<Client[]>();
    
    const [client, setClient] = useState<Client>(Client.empty());
  
    useEffect(getAll, [])
    
    function getAll(){
      repo.all().then(clients => {
        setClients(clients)
        showTable()
      })
    }
  
    function clientSelected(client: Client){
      setClient(client)
      showForm()
    }
    
    async function deleteClient(client: Client){
      await repo.exclude(client)
      getAll()
    }
  
    function newClient(){
      setClient(Client.empty())
      showForm()
    }
  
    async function saveClient(client: Client){
      await repo.save(client)
      getAll()
    }

    return {
        showTable,
        tableVisible,
        formVisible,
        clients,
        client,
        clientSelected,
        deleteClient,
        newClient,
        saveClient,
        getAll
    }
}