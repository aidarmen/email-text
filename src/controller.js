const User = require('./models/user')
const Comment = require('./models/comment')

async function login(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            Comment.create({
                email: req.body.email,
                text: req.body.text
            });
            res.send('user exist and comment added')


            next()
        } else {
            User.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email
            });
            res.send('user created')
            next()

        }


    } catch (error) {
        console.log(error)
    }
}


// dont even needed
// async function comment(req, res, next) {
//     try {
//         const user = await User.findOne({ email: req.body.email })

//         if (!user) {
//             res.send('user doesn`t exist')
//             next()
//         } else {
//             Comment.create({
//                 email: req.body.email,
//                 text: req.body.text
//             });
//             res.send('comment created')
//             next()

//         }

//     } catch (error) {
//         console.log(error)
//     }
// }




module.exports = {
    login
    //comment
}