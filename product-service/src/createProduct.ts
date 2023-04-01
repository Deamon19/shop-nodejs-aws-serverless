import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";
import * as productService from "./services/productService"

export const createProductHandler = async (event, _context) => {
    try {
        winstonLogger.logRequest(`Incoming event: ${ JSON.stringify( event ) }`);

        const product = await productService.createProduct(JSON.parse(event.body));
        if (validateBody(JSON.parse(event.body))) {
            return errorResponse( new Error ('Bad request'), 400 )
        }
        winstonLogger.logRequest(`Created: ${ JSON.stringify( product ) }`);

        return successResponse( product, 201 );
    } 
    catch (err) {
        return errorResponse( err );
    }
}
const validateBody = (body) => {
    return typeof(body.title) !== 'string' ||
    typeof(body.price) !== 'number' ||
    typeof(body.count) !== 'number' ||
    typeof(body.description) !== 'string'
}