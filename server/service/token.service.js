const jwt = require('jsonwebtoken');
const { Token } = require('../models')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {expiresIn: '15s'})
        const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS, {expiresIn: '30s'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { user_id: userId }})
        
        if (tokenData) {
            tokenData.refresh_key = refreshToken;
            return tokenData.save();
        }
        const token = await Token.create({ user_id: userId, refresh_key: refreshToken })
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({ where: { refresh_key: refreshToken }})
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({ where: { refresh_key: refreshToken }})
        return tokenData;
    }
}

module.exports = new TokenService();