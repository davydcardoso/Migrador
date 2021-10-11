require('dotenv').config();

import { CredentializeCompanies } from "./migrations/CredentializeCompanies";

function start() {
    new Promise(async () => { await CredentializeCompanies() });
}

start();