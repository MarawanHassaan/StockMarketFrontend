import { render, screen } from "@testing-library/react"
import { EstimationsTable } from "./EstimationsTable"

test('table rendering data', () => {

    render(<EstimationsTable>
        
    </EstimationsTable>)

    screen.debug();
});