import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";
import * as productService from "./services/productService"

export const getAllProductsHandler  = async (event, _context) => {
    try {
        winstonLogger.logRequest(`Incoming event: ${ JSON.stringify( event ) }`);

        const products = await productService.getAllProducts();

        winstonLogger.logRequest(`"Received products: ${ JSON.stringify( products ) }`);
        

        if( products ){
            return successResponse( products );
        }

        return errorResponse( new Error ('Products/Stocks not found'), 404 );
    } 
    catch (err) {
        return errorResponse( err );
    }
}
