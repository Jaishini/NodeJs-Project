import JWT from 'jsonwebtoken'

export const getTokenCtrl = async (req, res) => {
    try {
        const user = req.headers.username || 'demo'
        const token = JWT.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: '60m' })
        res.status(200).json({ successs: true, token })
    } catch (err) {
        res.status(500).json({ success: false, errorDescription: 'Failed to get Token' })
    }
}


