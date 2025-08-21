import type {ApplicationFormData, Letter} from '../types'

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}

export const generateTemplateLetter = (
    formData: ApplicationFormData,
): Letter => {
    const {company, jobTitle, skills, details} = formData

    const content = `Dear ${company} Team,

I am writing to express my interest in the ${jobTitle} position.

My experience in the realm combined with my skills in ${skills} make me a strong candidate for this role.

${details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
`

    return {
        id: crypto.randomUUID(),
        content,
        formData,
    }
}
