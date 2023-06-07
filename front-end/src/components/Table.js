import Table from 'react-bootstrap/Table';

function DarkExample({data}) {
    console.log(data)
    const Repeat = ()=>{return(<tr>
    <td>1</td>
    <td>Wazirx</td>
    <td>₹ 89.090</td>
    <td>₹ 89.000 / ₹ 89.100</td>
    <td>-4.20 %</td>
    <td>▼ ₹ 3.910</td>
  </tr>)}
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr style={{opacity:'0.45'}}>
          <th>#</th>
          <th>name</th>
          <th>Last Traded Price</th>
          <th>Buy / Sell Price</th>
          <th>volume</th>
          <th>base_unit</th>
        </tr>
      </thead>
      <tbody>
        {data&& data.map(ele=><tr>
    <td>1</td>
    <td>{ele.name}</td>
    <td>₹{ele.last}</td>
    <td>₹ {ele.buy}/ ₹{ele.sell}</td>
    <td>{ele.volume}</td>
    <td>{ele.base_unit}</td>
  </tr>)}
      </tbody>
    </Table>
  );
}

export default DarkExample;