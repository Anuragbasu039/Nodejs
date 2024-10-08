const User = require('../model/usermodel')

async function handleGetAllUser(res,req) {
        const alldbuser = await User.find({})
        // res.setHeader("X-MyName", "Anurag Bose") //custom header
        //Always add x in custom header
        return res.json(alldbuser);
    }


 async function handleGetAllUserId(res,req) {
        const user = await User.findById(req.params.id)
        return res.json(user)
    }


async function handlePostAllUser(res,req) {
        //todo: Create user
        const body = req.body;
        // console.log(body);
        if (!body || !body.first_name || !body.email || !body.last_name || !body.gender) {
            return res.status(400).json({ error: "bad status" })
        }
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender
        });

        // console.log(result);

        return res.status(201).json({ msg: "successfull " })

        //    return res.json({status: 'pending'})
    }

async function handlePatchAllUserId(res,req) {
 
        const user = await User.findByIdAndUpdate(req.params.id, { lastName: "Rai" })
        return res.json(user)
    }

async function handleDeleteUserId() {
  
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json(user)
    }

module.exports = {
    handleGetAllUser,
    handleGetAllUserId,
    handlePostAllUser,
    handlePatchAllUserId,
    handleDeleteUserId
}