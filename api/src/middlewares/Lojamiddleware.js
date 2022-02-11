const { validate: isUuid } = require("uuid")
const Loja = require("../models/Lojas.js")

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;

        if (!isUuid(id)) {
            return response.status(404).json({ error: "Invalid ID." })
        }
        try {
            const loja = await Loja.findById(id);
            response.loja = loja;
            if (!loja) {
                return res.status(404).json({ error: "Loja not found" });
            }
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
        next();
    }
}


