import type {ApplicationFormData} from '../types'

export const AppRoutes = {
    applications: '/',
    application: '/application/:id?',
    newApplication: '/application/new',
}

export const APPLICATIONS_PROGRESS_STEPS = 5
export const APPLICATION_FORM_DETAILS_LIMIT = 1200
export const LETTER_GENERATION_SIMULATION_TIME = 3000

export const DEFAULT_NEW_APPLICATION_FORM_VALUES: ApplicationFormData = {
    jobTitle: '',
    company: '',
    skills: '',
    details: '',
}
