export interface ICredentializeCompanies {
    company: {
        document: string,
        name: string,
        fantasyName: string,
        email: string
        expires_in: string
        activated: boolean
        created_at: Date
        updated_at: Date
    },
    user: {
        id: string
        name: string
        email: string
        password: string
        company: string
        created_at: Date
        updated_at: Date
    }
}