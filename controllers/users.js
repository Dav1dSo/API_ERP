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
}

export default CreateUser;  