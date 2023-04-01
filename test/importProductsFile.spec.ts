
import { importProductsFile } from '../src/importProductsFile'
import { errorResponse, successResponse } from '../src/utils/apiResponseBuilder';

describe('importProductsFile Lambda', () => {
  const mockS3 = {
    getSignedUrlPromise: jest.fn(),
  };

  const mockEvent = {
    queryStringParameters: {
      name: 'test.csv',
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a signed URL when invoked with valid parameters', async () => {
    // Arrange
    mockS3.getSignedUrlPromise.mockReturnValueOnce('https://s3.amazonaws.com/test-bucket/uploaded/test.csv');
    const expectedResult = successResponse('https://s3.amazonaws.com/test-bucket/uploaded/test.csv');

    // Act
    const result = await importProductsFile({
      s3: mockS3,
    })(mockEvent);

    // Assert
    expect(mockS3.getSignedUrlPromise).toHaveBeenCalledWith('putObject', {
      Bucket: process.env.BUCKET,
      Key: 'uploaded/test.csv',
      Expires: 60,
      ContentType: 'text/csv',
    });
    expect(result).toEqual(expectedResult);
  });

  it('should return an error response when an error occurs', async () => {
    // Arrange
    const mockError = new Error('Internal server error');
    mockS3.getSignedUrlPromise.mockRejectedValueOnce(mockError);
    const expectedResult = errorResponse(mockError);

    // Act
    const result = await importProductsFile({
      s3: mockS3,
    })(mockEvent);

    // Assert
    expect(mockS3.getSignedUrlPromise).toHaveBeenCalledWith('putObject', {
      Bucket: process.env.BUCKET,
      Key: 'uploaded/test.csv',
      Expires: 60,
      ContentType: 'text/csv',
    });
    expect(result).toEqual(expectedResult);
  });
});