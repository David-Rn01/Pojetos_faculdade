export interface Users{
    name: string;
    born: string;
    email: string;
    password: string;
    cell: string;
    cpf: string;
    cep: string;
    adress: string;
}

export let MockUsers: Users[] = [
    {
        name: "David Ranelly Pereira Silva",
        born: "24/02/2005",
        email: "davidran@gmail.com",
        password: "david125",
        cell: "(81) 9 9888-9797",
        cpf: "123.456.789.10",
        cep: "55782000",
        adress: "Rua Maria Dalva N-15"
    },
    {
        name: "",
        born: "",
        email: "vitormart@gmail.com",
        password: "12345",
        cell: "",
        cpf: "",
        cep: "",
        adress: ""
    }
]

export const VerifyUsers = (email: string, password: string): boolean => {
    // define o mock como um array para ser possível user o for e length
    let userCount = Array.isArray(MockUsers) ? MockUsers.length : 0;
    let acceptAcess = false;

    for (let i = 0; i < userCount; i++){
        if (MockUsers[i].email === email && MockUsers[i].password === password || MockUsers[i].name === email && MockUsers[i].password === password){
            acceptAcess = true;
        }
    }

    return acceptAcess;
};

export const AddUser = (us: Users): void => {
    MockUsers.push(us);
}