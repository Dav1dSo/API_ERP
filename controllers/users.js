import Users from '../models/users';
import generateUUID from '../functions/generateUUID';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
    const payload = {
        email: user.email,
        password: user.password,
    };
    const expire = { expiresIn: "1h" };

    return Jwt.sign(payload, process.env.SECRET_KEY, expire);
};  

const UserAuthentication = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ where: { email } }); 

        if (!user) {
            return res.status(401).json('Usuário não encontrado!');
        }

        const passwordVerify =  await bcrypt.compare(password, user.password);  
        if (!passwordVerify) {
            return res.status(401).json('Senha inválida!');
        }

        const token = generateToken(user);
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json("Ocorreu um erro na autenticação." + error );
    }
}

const ValidatePassword = (password) => password && password.length >= 8;

const CreateUser = async (req, res) => { 
    try { 
        const { userName, email, password } = req.body;
        const idUser = generateUUID();

        if (!userName || userName.length <= 2) {
            return res.status(400).json('Nome de usuário nulo ou muito curto!');
        }

        if (!ValidatePassword(password)) {
            return res.status(400).json('Senha inválida! Mínimo de 8 caracteres.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await Users.create({ idUser, userName, email, password: hashedPassword });
        res.status(200).json('Usuário cadastrado com sucesso!');
    } catch (error) {
        res.status(500).json("Erro ao criar novo usuário." + error);
    }  
}; 
 
const UpdatedUser = async (req, res) => {

    try {
        const { idUser, userName, email, password } = req.body;
        const user = await Users.findByPk(idUser);

        if (!ValidatePassword(password)) {
            return res.status(400).json('Senha inválida! Mínimo de 8 caracteres.');
        }

        if (userName.length <= 2) {
            return res.status(400).json('Nome de usuário nulo ou muito curto!');
        }

        user.password = await bcrypt.hash(password, 10);
        user.userName = userName;
        user.email = email;
 
        await user.save();
        res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(500).json('Não foi possível atualizar informações de usuário!' + error);
    }
};
 
export { CreateUser, UpdatedUser, UserAuthentication };
