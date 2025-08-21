import type {IDBPDatabase} from 'idb'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ApplicationPage, Applications} from '~/pages'
import {AppRoutes} from '~/shared/constants'
import type {Letter} from '~/shared/types'
import type {AltShiftDBSchema} from '~/shared/utils'
import {Header} from '~/widgets'
import styles from './App.module.css'
import {useBootstrap} from './bootstrap'

interface AppProps {
    db: IDBPDatabase<AltShiftDBSchema>
    savedLetters: Letter[]
}

export const App = ({db, savedLetters}: AppProps) => {
    useBootstrap(db, savedLetters)

    return (
        <BrowserRouter>
            <main className={styles.app}>
                <Header />
                <section className={styles.content}>
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
                </section>
            </main>
        </BrowserRouter>
    )
}
