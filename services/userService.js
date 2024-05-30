const { models } = require('../models');

const getAllUsers = async () => {
  try {
    return await models.User.findAll();
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};



const createUser = async (userData) => {
  if (!userData.email) {
    throw new Error('Email is required to create a user');
  }

  try {
    // 检查是否有相同的 email 用户存在
    const existingUser = await models.User.findOne({ where: { email: userData.email } });

    if (existingUser) {
      // 如果用户存在，返回该用户数据
      return existingUser;
    } else {
      // 如果用户不存在，创建新的用户
      const newUser = await models.User.create(userData);
      return newUser;
    }
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

const updateUser = async (userData) => {
  try {
    const user = await models.User.findByPk(userData.id);
    if (user) {
      await user.update(userData);
      return user;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

const deleteUser = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (user) {
      await user.destroy();
      return { message: 'User deleted' };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
