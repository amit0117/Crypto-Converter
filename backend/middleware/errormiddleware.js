const notFound=(req,res,next)=>{
    const error=new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}


const errorHandler=(err,req,res,next) => {
    const statusCode=res.statusCode===200?500:res.statusCode
    err.status=err.status||'error'
    res.status(statusCode).json({
        status:err.statusCode,
        message:err.message,
        stack:process.env.NODE_ENV==='production'?null:err.stack
    })
}
export {notFound,errorHandler}