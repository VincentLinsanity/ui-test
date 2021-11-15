"use strict";

/**
 * @swagger
 * definitions:
 *   users:
 *     description: "用戶列表"
 *     type: object
 *     properties:
 *       result:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             fullname:
 *               type: string
 *               example: "fullname"
 *             acct:
 *               type: string
 *               example: "acct"
 */
/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - users
 *     summary: "get users"
 *     description: "取得用戶列表"
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: acct-id
 *         required: true
 *         example: "1234"
 *       - in: header
 *         name: acct-token
 *         required: true
 *         example: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2N0IjoiMTIzIiwiaWF0IjoxNjM2OTY3MTg4fQ.erKCideTshXCkhWGbOTs_HF0jZW5frkEXFUW6XfzIy2-ZV0DaC0zcl9MkOmIhud8UGv5OVxsdj19NwGG-Lt1I6zzABNojHq4lv7TTPr3_edBRwAtnYfhpfDMUn4zJ3ST4jJAOowXxn6GeCBcl5bmyF1EtjWQUDx-uZchGOQ7S7c"
 *       - in: query
 *         name: order
 *         required: false
 *         example: "create_at"
 *         description: "排序依據"
 *       - in: query
 *         name: asc
 *         required: false
 *         example: "1"
 *         description: "排序順序, 1:正序, 0:倒序"
 *       - in: query
 *         name: page
 *         required: false
 *         example: "1"
 *         description: "分頁頁數"
 *       - in: query
 *         name: page_size
 *         required: false
 *         example: "10"
 *         description: "分頁數量"
 *     responses:
 *       0:
 *         schema:
 *           $ref: '#/definitions/users'
 *       500:
 *         description: "internal server error"
 */
