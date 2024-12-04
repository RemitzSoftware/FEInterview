import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import clientsData from '../../data.json';
import { ClientsApi } from './client-types';

const mock = new MockAdapter(axios);

mock.onGet('/reports/clients').reply(200, {
  data: clientsData,
});

mock.onGet(/\/reports\/clients\/.*/).reply(200, {
  data: clientsData[0],
});

function App() {
  const [clients, setClients] = useState<ClientsApi[]>([]);
  const [clientsDetails, setClientDetails] = useState<ClientsApi>();

  useEffect(() => {
    async function getClientsTableData() {
      await axios.get('/reports/clients').then(function (response) {
        setClients(response.data.data);
      });
    }

    getClientsTableData();
  }, []);

  async function getClientById(clientId: string) {
    await axios.get(`/reports/clients/${clientId}`).then((res) => {
      console.log('res; ', res.data.data);
      setClientDetails(res.data.data);
    });
  }

  function handleClickOnRow(clientId: string) {
    getClientById(clientId);
  }

  return (
    <div className="container">
      <h1 className="text-gray-600">Remitz interview</h1>
      <div className="container m-4 my-8">
        <div className="p-8">
          <div className="flex w-full">{JSON.stringify(clientsDetails)}</div>
        </div>
        <table className="table-auto w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Company</th>
              <th className="border border-gray-300 px-4 py-2">
                Total Customers
              </th>
              <th className="border border-gray-300 px-4 py-2">Total sales</th>
              <th className="border border-gray-300 px-4 py-2">
                Total returns
              </th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client, index) => (
              <tr
                onClick={() => handleClickOnRow(client.client.id)}
                key={client.client.id}
                className={` cursor-pointer hover:bg-gray-500 ${
                  index % 2 !== 0 ? 'bg-gray-200' : 'white'
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {client.client.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.customers.total}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.sales.total}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {client.returns.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
