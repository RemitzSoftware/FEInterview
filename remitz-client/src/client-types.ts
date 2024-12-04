export interface ClientsApi {
  client: Client;
  customers: Customers;
  sales: Customers;
  returns: Customers;
}
interface Customers {
  mtd: number;
  ytd: number;
  total: number;
  history: number[];
}
interface Client {
  id: string;
  name: string;
  status: string;
}
