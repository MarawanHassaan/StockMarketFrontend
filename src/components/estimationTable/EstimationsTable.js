import Table from 'react-bootstrap/Table';

export function EstimationsTable(estimations) {
    const { estimated_ndaq, estimated_corn, estimated_gasoline } = estimations;

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
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>Nasdaq</td>
        <td>{estimated_ndaq}</td>
    </tr>
    <tr>
        <td>Corn</td>
        <td>{estimated_corn}</td>
    </tr>
    <tr>
        <td>Gasoline</td>
        <td>{estimated_gasoline}</td>
    </tr>
    </tbody>
    </Table>
    );
}