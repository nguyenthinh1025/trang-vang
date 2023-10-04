// /**
//  * @swagger
//  * /api/users/test:
//  *  post:
//  *      security: 
//  *         - BearerAuth: []
//  *      summary: test authorization
//  *      tags: [User]
//  *      description: use to test authorization JWT
//  *      responses:
//  *          '200':  
//  *              description: success
//  *          '500':
//  *                  description: Internal server error
//  */


/**
 * @swagger
 * /api/v1/bussiness/getlistbussiness:
 *  get:
 *      description: get all business
 *      tags: [Business]
 *      responses:
 *          200: 
 *              description: success   
 */



 /**
 * @swagger
 * /api/v1/bussiness/createbussiness:
 *   post:
 *     summary: Create a new business
 *     tags:
 *       - Business
 *     parameters:
 *       - in: body
 *         name: business
 *         description: Business details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             businessName:
 *               type: string
 *               example: "phong vũ 3"
 *             businessNameEng:
 *               type: string
 *               example: "English Business Name"
 *             operator:
 *               type: string
 *               example: "Người điều hành"
 *             address:
 *               type: string
 *               example: "Địa chỉ"
 *             phone:
 *               type: string
 *               example: "Số điện thoại"
 *             email:
 *               type: string
 *               format: email
 *               example: "email@example.com"
 *             website:
 *               type: string
 *               format: uri
 *               example: "http://www.example.com"
 *             description:
 *               type: string
 *               example: "Mô tả doanh nghiệp"
 *             categoryId:
 *               type: string
 *               format: uuid
 *               example: "4d872a1d-1d22-4c4f-8d67-13c3ca54e83b"
 *             locationId:
 *               type: string
 *               format: uuid
 *               example: "0b8ed61e-2262-4d7f-bec0-0a2c47b39d4c"
 *             rating:
 *               type: number
 *               example: 4.5
 *             numberOfRatings:
 *               type: integer
 *               example: 100
 *             establishedYear:
 *               type: integer
 *               example: 2000
 *             tax:
 *               type: string
 *               example: "1234567890"
 *             employees:
 *               type: string
 *               example: "50"
 *             businessArea:
 *               type: string
 *               example: "Khu vực Hà Nội"
 *             certificate:
 *               type: string
 *               example: "XYZ Certificate"
 *             phoneOperator:
 *               type: string
 *               example: "0123456789"
 *             emailOperator:
 *               type: string
 *               example: "abc@gmail.com"
 *             images:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   imageUrl:
 *                     type: string
 *                     format: uri
 *                     example: "https://example.com/image1.jpg"
 *             careers:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   careerName:
 *                     type: string
 *                     format: uri
 *                     example: "npt"
 
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/bussiness/getlistbussiness:
 *  post:
 *      description: responses
 *      tags: [User]
 *      parameters:   
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/user/updateUser/{id}:
 *  put:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/user/createUser:
 *  post:
 *      description: responses
 *      tags: [User]
 *      parameters:   
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */


/**
 * @swagger
 * /api/user/login:
 *  post:
   *        description: This API for authenticate users by typing username and password
   *        tags: [Login]
   *        consumes:
   *        - application/json
   *        produces:
   *        - application/json
   *        parameters:
   *        - in: body
   *          name: User cerdentials
   *          schema:
   *            $ref: '#/definitions/userCerdentials'
   *        responses:
   *            200:
   *                description: cuccess
   * definitions:
   *     userCerdentials:
   *        type: object
   *        required:
   *        - email
   *        - pass_word
   *        properties:
   *            email:
   *                    type: string
   *                    example: nguyenphuthinh@gmail.com
   *            pass_word:
   *                    type: string
   *                    example: 1234
   */