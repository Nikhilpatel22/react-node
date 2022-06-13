import './App.css';
import BasicTable from './component/Table/BasicTable';
import ButtonCheckTable from './component/Table/ButtonCheckTable';
import DataTable from './component/Table/DataTable';
import PagginationTable from './component/Table/PagginationTable';
import ScrollTable from './component/Table/ScrollTable';
import SearchTable from './component/Table/SearchTable';
import SortTable from './component/Table/SortTable';
import EditTable from './component/Table/EditTable';
import ResponshivTable from './component/Table/ResponshivTable';
import Login1 from './component/login1';
import NavbarPage from './component/Navbar';
import Grid from './component/grid';

function App() {
  return (
    <div className="App">
      {/* <NavbarPage /> */}
      {/* <BasicTable />
      <DataTable />
      <SearchTable />
      <ResponshivTable />
      <ScrollTable />
      <EditTable />
      <PagginationTable />
      <SortTable />
      <ButtonCheckTable /> */}
      <Login1 />
      {/* <Grid/> */}
    </div>
  );
}

export default App;
