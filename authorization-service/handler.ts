export const basicAuthorizer = async (event, context, callback) => {
  const authHeader = event.authorizationToken

    if (!authHeader || !authHeader?.startsWith('Basic ')) {
      callback("Unauthorized")
    }
  const token = authHeader.replace('Basic ', '')
  const [user, password] = Buffer.from(token, 'base64').toString('utf8').split(':')
  const envPassword = process.env[user] || null
  const effect = envPassword === password ? 'Allow' : 'Deny';

  callback(null, generatePolicy({
    principalId: token,
    resource: event.methodArn,
    effect
  }))

}

export const generatePolicy = (
  params
) => {
  const { principalId, resource, effect = 'Deny' } = params

  return {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
        }
      ]
    }
  }
}