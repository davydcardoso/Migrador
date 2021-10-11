import axios, { AxiosError, AxiosResponse } from 'axios';
import fs from 'fs';

import { companys } from '../json/listCompanysdata';
import { ICredentializeCompanies } from './interfaces/ICredentializeCompanies';

async function CredentializeCompanies(): Promise<void> {
    try {
        let CompanysData: ICredentializeCompanies[];

        const axisoinstance = axios.create({ baseURL: process.env.API_URL })

        companys.map(async (company) => {
            await axisoinstance.post(
                '/companys',
                {
                    name: `Empresa de testes ${company.merchant}`,
                    fantasyName: `Usuario -${company.id}`,
                    email: `empresadetestes${company.id}@gmail.com`,
                    document: company.merchant
                }
            ).then((response: any) => {
                const data = response.data as ICredentializeCompanies

                fs.appendFileSync('./src/migrations/data/companyCredentials.json', JSON.stringify(data))
            }).catch((err: AxiosError) => {
                console.log(JSON.stringify(err.response?.data));
                console.log(`Empresa CNPJ: ${company.merchant}`);
            })
        });
    } catch (err: any) {
        console.log(err.message)
    }
}

export { CredentializeCompanies }