import {LETTER_GENERATION_SIMULATION_TIME} from '../constants'
import type {ApplicationFormData} from '../types'
import {generateTemplateLetter} from '../utils/letter'

export const generateCoverLetter = async (formData: ApplicationFormData) => {
    const fallbackGenerator = async () => {
        // Simulate letter generation time
        await new Promise(resolve =>
            setTimeout(resolve, LETTER_GENERATION_SIMULATION_TIME),
        )
        return generateTemplateLetter(formData)
    }

    try {
        const response = await fetch('/api/generate-letter', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }

        const data = await response.json()
        return data.coverLetter
    } catch {
        return await fallbackGenerator()
    }
}
