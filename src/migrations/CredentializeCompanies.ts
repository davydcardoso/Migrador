import axios from 'axios';
import fs from 'fs';

import { companys } from '../json/listCompanysdata';
import { ICredentializeCompanies } from './interfaces/ICredentializeCompanies';

function CredentializeCompanies(): void {
    let CompanysCredentials: ICredentializeCompanies[]

    const axisoinstance = axios.create({
        baseURL: 'http://localhost:80/api/v1'
    })
    try {
        companys.map(async (company) => {
            try {
                const response = await axisoinstance.post('/companys',
                    {
                        name: `Empresa de testes ${company.merchant}`,
                        fantasyName: "Empresa de testes",
                        email: `empresadetestes${company.id}@gmail.com`,
                        document: company.merchant
                    });

                setTimeout(() => { }, 2000)

                const result: ICredentializeCompanies = response.data as any;

                console.log(result.company)
            } catch (err: any) {
                console.log(err.message)
            }
        });

        
        // const stream = fs.createWriteStream('./src/migrations/data/companyCredentials.json');
        // stream.once('open', () => {
        //     stream.write(CompanysCredentials);
        // })
    } catch (err: any) {
        console.log(err.message)
    }
}

export { CredentializeCompanies }