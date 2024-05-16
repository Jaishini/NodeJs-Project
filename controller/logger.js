import { createLogger,transports,format } from "winston";

export const customerLogger = createLogger({
    transports:[
        new transports.File({
            filename:'Customer.log',
            level: 'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'customerErrorlog',
            level:'error',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'customerWarnlog',
            level:'warn',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})