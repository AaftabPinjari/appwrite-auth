import { Client, Account } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66111afdab06b6be2167');

export const account = new Account(client);