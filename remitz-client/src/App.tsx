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

function App() {
  const [clients, setClients] = useState<ClientsApi[]>([]);

  useEffect(() => {
    async function getClientsTableData() {
      await axios.get('/reports/clients').then(function (response) {
        console.log(response.data);
        setClients(response.data.data);
      });
    }

    getClientsTableData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-gray-600">Remitz interview</h1>
      <div className="container m-4 my-8">
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
                key={client.client.id}
                className={index % 2 !== 0 ? 'bg-gray-200' : 'white'}
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
