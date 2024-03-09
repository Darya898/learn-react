import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "../../index";
import React from "react";
import {withTranslation} from "react-i18next";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar',()=>{
    test('sidebar',()=>{
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('sidebar toggle',()=>{
        componentRender(<Sidebar/>)
        const toggleBtn=screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})