const userService = require('../services/userService');
const formatResponse = require('../utils/responseFormatter'); // 引入响应格式化工具

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  
  try {
    const userData = req.body;
    if (!userData.email) {
        throw new Error('Email is required to create a user');
      }
    const newUser = await userService.createUser(userData);
   

    res.status(200).json(formatResponse(true,"success",newUser.toJSON()));
  } catch (error) {
    res.status(200).json(formatResponse(false,error.message));
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData)
   
    if ('id' in userData && 'email' in userData && 'taskone' in userData && 'tasktwo' in userData) {
        const updatedUser = await userService.updateUser(userData);
        res.status(200).json(formatResponse(true,"success",updatedUser));
    }else{
        res.status(200).json(formatResponse(false,"缺少必要参数 id , email, taskone,tasktwo 中的一个",userData));
    }
    
    
 
  } catch (error) {
    res.status(200).json(formatResponse(false,error.message));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
    try {
    
        let result = {
            "userId": "3333",
            "username": "赫赫",
            "age": 30,
            "like": "girl",
            "obj": {
                "money": 100,
                "friend": 10
            },
            "hobby": [
                {
                    "id": 1,
                    "name": "篮球",
                    "level": 1
                },
                {
                    "id": 2,
                    "name": "rap",
                    "level": 10
                }
            ]
        }
        const { id } = req.query;
        if (!req.query.hasOwnProperty('ddd')) {
            return res.status(400).send('Query parameter "ddd" is required');
        }
        res.status(200).json(formatResponse(true,"success",result));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports = {
  createUser,
  updateUser,
  getUser
};
