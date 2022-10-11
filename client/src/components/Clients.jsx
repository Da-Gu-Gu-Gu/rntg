import {useQuery } from "@apollo/client"
import ClientRow from './ClientRow'
import { GET_CLIENTS } from "./queries/clientQueries"
import Spinner from "./Spinner"


const Clients = () => {

    const {loading,data,error}=useQuery(GET_CLIENTS)
    console.log(data)

    if(loading) return <Spinner />
    if(error) return <p>"Error...."</p>

  return (
    <div>
        {!loading && !error && (
            <table className="table table-hover mt-3 ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  
                        {data.clients.map(x=>{
                            return <ClientRow key={x.id} client={x} />
                        })}
                 
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Clients