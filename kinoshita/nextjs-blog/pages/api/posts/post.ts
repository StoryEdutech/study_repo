import { NextApiResponse, NextApiRequest } from 'next'

const handler = async  (req: NextApiRequest, res: NextApiResponse) => {
    const {
        body,
        method,
    } = req

    switch (method) {
        case 'GET': {
            return res.status(200).json({ text: 'get ok'})
            break
        }
        case 'POST': {
            return res.status(201).json({ text: 'post ok'})
            break
        }
        case 'PUT': {
            return res.status(200).json({ text: 'put ok'})
            break
        }
        case 'DELETE': {
            return res.status(200).json({ text: 'delete ok'})
            break
        }
        default:
            return res.status(405).json({
                error: { 
                    httpStatus: 405, 
                    message: "Method Not Allowed"
                }
            })
    }
}

/**
 * HTTPメソッドごとの成功時のステータスコードは以下の通りです。
GET：200 OK
POST：201 Created
PUT：200 OK or 204 No Content
DELETE：200 OK or 204 No Content
ただし、状況によっては異なるステータスコードを返すこともあります。
例えば、削除リクエストが拒否された場合は、
403 Forbiddenを返す場合があります。
また、リソースが見つからない場合は、404 Not Foundを返す場合があります。
詳細については、HTTPステータスコードの仕様を参照してください。
 */

export default handler