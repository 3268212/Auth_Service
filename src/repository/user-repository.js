const { User } = require('../models/index');

class UserRepository{
      
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on the repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try{
            await User.destroy({
                where: {
                    id: userId
                }
            })
        }
        catch(error){
             console.log("Something went wrong on the repository layer");
             throw error;
        }
    }
}

module.exports = UserRepository;