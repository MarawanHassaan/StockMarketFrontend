import Table from 'react-bootstrap/Table';



export function EstimationsTable(estimations) {
    const { estimated_ndaq, estimated_corn, estimated_gasoline, upDownNasdaq, upDownCorn, upDownGasoline } = estimations;

    return (
        // <table>
        //     <tr>
        //         <th>Stock Name</th>
        //         <th>Estimated Price</th>
        //     </tr>
        //     <tr>
        //         <td>Nasdaq</td>
        //         <td>{estimated_ndaq}</td>
        //     </tr>
        //     <tr>
        //         <td>Corn</td>
        //         <td>{estimated_corn}</td>
        //     </tr>
        //     <tr>
        //         <td>Gasoline</td>
        //         <td>{estimated_gasoline}</td>
        //     </tr>
        // </table>

    <Table striped bordered hover>
    <thead>
        <tr>
            <th>Stock Name</th>
            <th>Estimated Price</th>
            <th>Comparison</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>Nasdaq</td>
        <td>{estimated_ndaq}</td>
        <td>{upDownNasdaq === "G" &&<img src={require("./up.png")}></img>  } {upDownNasdaq === "R" &&<img src={require("./down.png")}></img>  }</td>
    </tr>
    <tr>
        <td>Corn</td>
        <td>{estimated_corn}</td>
        <td>{upDownCorn === "G" &&<img src={require("./up.png")}></img>  } {upDownCorn === "R" &&<img src={require("./down.png")}></img>  }</td>
    </tr>
    <tr>
        <td>Gasoline</td>
        <td>{estimated_gasoline}</td>
        <td>{upDownGasoline === "G" &&<img src={require("./up.png")}></img>  } {upDownGasoline === "R" &&<img src={require("./down.png")}></img>  }</td>
    </tr>
    </tbody>
    </Table>
    );
}