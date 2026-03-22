POST login
/user/login

POST verify user (token verification)
/user/verify-user?token=bd35277ce8df33da4a3cb0871679150a8b69a7b0d786466e020971f1911fcdda

PATCH verify user (otp verification)
/user/verify-user?token=bd35277ce8df33da4a3cb0871679150a8b69a7b0d786466e020971f1911fcdda

PATCH auth otp
/user/authOtp

GET user profile
/user/e139da95-4b6d-4c49-8a6b-9b0b20ed3b62

PATCH update user profile
/user/e139da95-4b6d-4c49-8a6b-9b0b20ed3b62

GET get all users
/user/users?page=1&pageSize=10

PATCH change password
/user/change-password

PUT role allocation
/user/update-role/b1ae05d1-1342-4962-b68d-02e5d528ac6c

POST add bank
/bank/add-bank

GET get all banks
/bank?page=1&pageSize=10

GET get bank lenders
/bank/lenders/64de937a-ed79-4e89-9e6e-39bd672b9c6c?page=1&pageSize=10

PUT update bank details
/bank/update-bank/64de937a-ed79-4e89-9e6e-39bd672b9c6c

POST add lender
/bank/add-lender

POST add borrower
/bank/add-borrower

PATCH upload borrower's image
/bank/borrower-profile/5c264d8f-058c-4c1e-a2b0-6eef84f3ae78

GET borrower's profile
/bank/borrower-profile/5c264d8f-058c-4c1e-a2b0-6eef84f3ae78

GET borrower's decision profile
/bank/decision/5c264d8f-058c-4c1e-a2b0-6eef84f3ae78
