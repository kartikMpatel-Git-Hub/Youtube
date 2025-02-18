class ApiErrors extends Error{
    constructor(
        statusCode,
        message = "SomeThing Went Wrong !",
        errors = [],
        stack = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

    }
}

export {ApiErrors}