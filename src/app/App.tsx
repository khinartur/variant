import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Applications, NewApplication} from '~/pages'
import {AppRoutes} from '~/shared/constants'
import {Header} from '~/widgets'
import styles from './App.module.css'

export const App = () => {
    return (
        <BrowserRouter>
            <main className={styles.app}>
                <Header />
                <Routes>
                    <Route
                        path={AppRoutes.applications}
                        element={<Applications letters={[]} />}
                    />
                    <Route
                        path={AppRoutes.newApplication}
                        element={<NewApplication />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
