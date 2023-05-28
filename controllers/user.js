const { response } = require('express')


const userGet = ( req, res = response ) => {
    const { apikey } = req.query
    res.json({
        message: 'Mensaje desde el controlador Get',
        apikey
    })
}


const userPost = ( req, res = response ) => {
    const { id } = req.params
    const data = req.body
    res.json({
        message: 'Mensaje desde el controlador Post',
        info: data,
        id: id
    })
}


const userPut = ( req, res = response ) => {
    res.json({
        message: 'Mensaje desde el controlador Put'
    })
}


const userDelete = ( req, res = response ) => {
    res.json({
        message: 'Mensaje desde el controlador Delete'
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}