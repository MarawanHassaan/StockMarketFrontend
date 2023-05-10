import { render, screen } from "@testing-library/react"
import { Slider } from "./Slider";


test('slider rendering', () => {

    render(<Slider></Slider>)

    screen.debug();
});