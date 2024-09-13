import { useEffect, useState } from 'react';
import data from '../data/data.json';
import './ClientsReport.css';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

function ClientsReport() {
  const [clients, setClients] = useState([]);

  const mock = new MockAdapter(axios);
  mock.onGet("https://api.example.com/reports/clients").reply(200, 
    data
  );

  useEffect(() => {
    axios.get("https://api.example.com/reports/clients").then((response) => {
      setClients(response.data);
    });
  }, [])

  return (
    <>
      <h3>Clients Report</h3>
      <table id="clients-report">
        <thead>
          <tr>
            <th>Client name</th>
            <th>Total customers</th>
            <th>Total sales</th>
            <th>Total returns</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((row) => {
              return (
                <tr key={row.client.id}>
                  <td>{row.client.name}</td>
                  <td>{row.customers.total}</td>
                  <td>{row.sales.total}</td>
                  <td>{row.returns.total}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default ClientsReport;