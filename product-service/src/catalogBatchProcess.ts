import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";
import * as productService from "./services/productService"

export const catalogBatchProcess = async (event, _context) => {
  
    try {
        winstonLogger.logRequest(`Incoming event: ${ JSON.stringify( event ) }`);

        await productService.catalogBatchProcess(event);

        return successResponse( {message: 'created'}, 201 );
    } 
    catch (err) {
        return errorResponse( err );
    }
}