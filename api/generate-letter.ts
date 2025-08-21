// Vercel serverless function for OpenAI request
import OpenAI from 'openai'

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'})
    }

    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', async () => {
        try {
            const {company, jobTitle, skills, details} = JSON.parse(body)
            if (!company || !jobTitle || !skills || !details) {
                return res.status(400).json({error: 'Missing parameters'})
            }

            const completion = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content:
                            'You are the assistant who writes cover letters',
                    },
                    {
                        role: 'user',
                        content: `Write a short common cover letter to company ${company} for a ${jobTitle} role.
Use these applicant skills: ${skills}. Also add these details that applicant has added to an application form: ${details}.
Don't leave template strings. Omit all contact information at the beggining and start the letter with an appeal to the provided company.
Omit ending line with applicant name.`,
                    },
                ],
            })

            return res
                .status(200)
                .json({coverLetter: completion.choices[0].message.content})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    })
}
