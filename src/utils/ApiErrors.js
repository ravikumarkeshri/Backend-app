class ApiErrors extends Error {
    constructor(
        statuscode,
        message = "Something Went Wrong",
        errors = [],
        statck = ""

    ){
        super(message)
        this.statuscode = statuscode
        this.message = message
        this.data = null
        this.success = false
        // this.errors = this.errors
        this.errors = errors

        if(statck){
            this.stack= statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
module.exports = ApiErrors