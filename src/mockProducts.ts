import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";
import * as productService from "./services/productService"

export const mockProductsHandler  = async (event, _context) => {
    try {
        winstonLogger.logRequest(`Incoming event: ${ JSON.stringify( event ) }`);

        await productService.mockProducts();

        return successResponse( { message: 'mock products created' }, 201 );
    } 
    catch (err) {
        return errorResponse( err );
    }
}
