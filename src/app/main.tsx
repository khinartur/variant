import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '~/shared/styles'
import {initDB, loadLettersFromDB} from '~/shared/utils'
import {App} from './App.tsx'

const renderApp = async () => {
    const db = await initDB()
    const savedLetters = await loadLettersFromDB(db)

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App db={db} savedLetters={savedLetters} />
        </StrictMode>,
    )
}

renderApp()
