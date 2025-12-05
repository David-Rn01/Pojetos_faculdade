
//criando um padrão para armazenar os dados dos usuários
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

//lista de usuários
export let MockUsers: Users[] = [
    {
        name: "David Ranielly",
        born: "24/02/2005",
        email: "davidran@gmail.com",
        password: "david125",
        cell: "(81) 9 9888-9797",
        cpf: "123.456.789.10",
        cep: "55782000",
        adress: "Rua Maria Dalva N-15"
    },

    //os outros dados deveriam ser preenchidos no perfil do usuário, não no cadastro
    {
        name: "Vitor Marcelo",
        born: "",
        email: "vitormart@gmail.com",
        password: "12345",
        cell: "",
        cpf: "",
        cep: "",
        adress: ""
    }
]

//verifica se o usuário tem o email ou nome cadastrado na lista e se sua senha está correta
export const VerifyUsers = (email: string, password: string): boolean => {
    // define o mock como um array para ser possível usar o for e length
    let userCount = Array.isArray(MockUsers) ? MockUsers.length : 0;
    //verifica se o acesso a conta está liberado
    let acceptAcess = false;

    //busca em todos os elementos da lista pelo email e senha digitados para prosseguir aprovar o login
    for (let i = 0; i < userCount; i++){
        if (MockUsers[i].email === email && MockUsers[i].password === password || MockUsers[i].name === email && MockUsers[i].password === password){
            acceptAcess = true;
        }
    }

    return acceptAcess;
};

//cadastra novos usuários a lista (temporariamente)
export const AddUser = (us: Users): void => {
    MockUsers.push(us);
}