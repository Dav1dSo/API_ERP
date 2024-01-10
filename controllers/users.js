import Users from '../models/users';
import generateUUID from '../functions/generateUUID';

const CreateUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const idUser = generateUUID();
        await Users.create({ idUser, userName, email, password });
        res.status(200).json('Usuário cadastrado com sucesso!');
    } catch (error) {
        res.status(500).json("Error ao criar novo usuário.");
    }
}

export default CreateUser;  