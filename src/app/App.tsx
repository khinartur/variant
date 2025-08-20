import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ApplicationPage, Applications} from '~/pages'
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
                        element={<Applications />}
                    />
                    <Route
                        path={AppRoutes.newApplication}
                        element={<ApplicationPage />}
                    />
                    <Route
                        path={AppRoutes.application}
                        element={<ApplicationPage />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
