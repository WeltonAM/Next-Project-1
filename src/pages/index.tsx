import { Inter } from '@next/font/google'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { 
    client, 
    clients, 
    newClient,  
    saveClient, 
    clientSelected, 
    deleteClient,  
    tableVisible,
    showTable
  } = useClients()

  return (
    <>
      <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-900
        text-white
      `}>
        <Layout title="User register">

        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button 
                onClick={newClient} 
                className='mb-4'
                >
                  New user
                </Button>
            </div>
            
            <Table 
              clients={clients} 
              clientSelected={clientSelected} 
              clientDeleted={deleteClient} 
            />
          </>

        ): (
            <Form 
            client={client}
            changeClient={saveClient}
            canceled={showTable}
            />
        )}

        </Layout>
      </div>
    </>
  )
}
