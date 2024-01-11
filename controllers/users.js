import Users from '../models/users';
import generateUUID from '../functions/generateUUID';
import bcrypt from 'bcrypt';

const CreateUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const idUser = generateUUID();
        let hashedPassword = await bcrypt.hash(password, 10);
        await Users.create({ idUser, userName, email, password: hashedPassword });
        res.status(200).json('Usuário cadastrado com sucesso!');
    } catch (error) {
        res.status(500).json("Error ao criar novo usuário.");
    }
};

const UpdatedUser = async (req, res) => {

    const ValidatePassword = (password) => password.length >= 8;
    const ValidateUserName = (userName) => userName.length > 2;

    try {
        const { idUser, userName, email, password } = req.body;
        const user = await Users.findByPk(idUser);

        !ValidatePassword(password) ? res.status(500).json('Senha inválida! Mínimo de 8 caracteres.') : user.password = await bcrypt.hash(password, 10);;
        !ValidateUserName(userName) ? res.status(500).json('Nome de usuário nulo ou muito curto!') : user.userName = userName;
        user.email = email;

        await user.save();
        res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(500).json('Não foi possível atualiar informações de usuário!' + error);
    }
} 

export { CreateUser, UpdatedUser };  