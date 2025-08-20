import type {ApplicationFormData} from '../types'

export const buildFormTitle = (formData: ApplicationFormData): string => {
    return `${formData.jobTitle}, ${formData.company}`
}
