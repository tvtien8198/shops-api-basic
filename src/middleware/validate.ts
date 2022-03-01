export const checkProductData = async (req, res, next) => {
    const reqBody = req.body
    const { title, price, description, category, image } = reqBody
    
    const errors = []

    for(const key in reqBody) {
        if(!reqBody[key]) {
            errors.push(`Please add product ${key}`)
        }
    }
    
    if(reqBody[title] === title) errors.push(`Title Same ${title}`)

    if(errors.length > 0) return res.status(401).json({msg: errors})
    
    next()
}

export const checkContactData = async (req, res, next) => {
    const reqBody = req.body
    const { name, email, messae } = reqBody

    const errors = []

    for(const key in reqBody) {
        if(!reqBody[key]) {
            errors.push(`Please add product ${key}`)
        }
    }

    if(errors.length > 0) return res.status(401).json({msg: errors})
    
    next()
    
}