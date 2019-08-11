const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        try {

            const { user } = req.headers;
            const { devId } = req.params;

            const loggedDev = await Dev.findById(user); //Instancia Dev (user) logado.
            const targetDev = await Dev.findById(devId); //Instancia Dev que receberá o like.

            if (!targetDev) { //Verifica se o Dev alvo já não existe.
                return res.status(400).json({ error: 'Dev not exists' });
            }

            if (targetDev.likes.includes(loggedDev._id)) { //Verifica se um usuario deu like no outro.
                console.log('Deu MATCH')
            }

            loggedDev.likes.push(targetDev._id);

            await loggedDev.save(); //Atualiza as info no BD.


            return res.json(loggedDev);
        } catch (error) {
            console.log('error');
        }
    }
};