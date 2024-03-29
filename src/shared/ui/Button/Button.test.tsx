import {Button, ThemeButton} from "./Button";
import {render, screen} from "@testing-library/react";

describe('classNames',()=>{
    test('with only first param',()=>{
        render(<Button >test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('theme',()=>{
        render(<Button theme={ThemeButton.CLEAR} >test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    })
})