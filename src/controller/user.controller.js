
const soma = (req, res) => {
    const somando = 2 + 2
    res.send(`${somando}`)
}
module.exports = {soma}