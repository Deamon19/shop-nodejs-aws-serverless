import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";
import * as productService from "./services/productService"

export const getProductByIdHandler = async (event, _context) => {
    try {
        winstonLogger.logRequest(`Incoming event: ${ JSON.stringify( event ) }`);

        const { productId = '' } = event.pathParameters;

        console.log(productId);

        const product = await productService.getProductById( productId );

        winstonLogger.logRequest(`"Received product with id: ${ productId }: ${ JSON.stringify( product ) }`);
        
        if( product ) {
          return successResponse( product );
        }

        return errorResponse( new Error ('Product not found'), 404 );
    }
    catch ( err ) {
        return errorResponse( err );
    }
}
