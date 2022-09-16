import 'dotenv/config';
import { app } from "./app";


app.get('/', (request, response) => {
    return response.json({message: 'Servidor Rodando'});
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));