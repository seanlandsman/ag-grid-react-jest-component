import {render, screen, waitFor} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import App from './App';

describe("actions", () => {
    it("should show a start button for a NEW batch", async () => {
        let ready = false;
        let firstDataRendered = false;

        const onFirstDataRendered = (e) => {
            firstDataRendered = true;
        }

        const onGridReady = (e) => {
            ready = true;
        };

        act(() => {
            render(<App
                onGridReady={onGridReady}
                onFirstDataRendered={onFirstDataRendered}
            />)
        });

        await waitFor(() => expect(ready).toBeTruthy());
        await waitFor(() => expect(firstDataRendered).toBeTruthy());

        const actionsColumns = screen.queryAllByText("Click Me");
        expect(actionsColumns.length).toEqual(11);
    });
});
