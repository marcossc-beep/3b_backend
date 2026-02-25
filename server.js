import Fastify from 'fastify'

const servidor = Fastify()

const usuarios = []
const receitas = []


servidor.get('/usuarios', () => {
    return usuarios
})

servidor.post('/usuarios', (request, reply) => {
    const body = request.body;
    usuarios.push(body)
    return 'Usuario cadastrado'
})

servidor.post('/receitas', (request, reply) => {
    const body = request.body;
    receitas.push(body)
    
    reply.status(200).send({msg: 'Usuario Cadastrado'})
})

servidor.put('/receitas/:titulo', (request, reply) => {
    return request.params.titulo
})

servidor.get('/receitas', () => {
    return receitas
})

servidor.listen({
    port: 3000
})