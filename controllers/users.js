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
    
    try {
        const { idUser, userName, email, password } = req.body;
        const user = await Users.findByPk(idUser);
    
        user.userName = userName;
        user.email = email;
        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;

        await user.save();
        res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(500).json('Não foi possível atualiar informações de usuário!');        
    }
}

export { CreateUser, UpdatedUser };