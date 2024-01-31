// Importa la instancia de Firestore desde tu archivo de conexión
import { firestoreDB } from "@/lib/firebaseConn";

export const createUserHandler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                error: "Método incorrecto",
            });
        }
        
        const {
            name,
            password,
        } = req.body;

        const newUser = await firestoreDB.collection("users").add({
            name: name,
            password: password,
        });

        return res.json({ userCreated: newUser });
    } catch (error) {
        console.error("Error en el manejador:", error);
        return res.status(500).json({
            error: "Ocurrió un error en el servidor.",
            details: error.message,
        });
    }
}
