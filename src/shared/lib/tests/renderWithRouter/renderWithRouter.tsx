import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";
import i18nForTest from "shared/config/i18n/i18nForTest";


export interface renderWithRouterOptions{
    route:string;
}

export function renderWithRouter(component:ReactNode,options:renderWithRouterOptions) {

    const{route}=options;
    return render(
        <MemoryRouter initialEntries={[options?.route]}>
         <I18nextProvider i18n={i18nForTest}>
            {component}
         </I18nextProvider>
         </MemoryRouter>

    );
}