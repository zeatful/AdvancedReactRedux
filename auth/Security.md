# Security Read module
## JWT
### JWT token stored in cookies
    Will be automatically sent with each request thus making it suseptible to XSRF attacks
### JWT token stored in local storage
    Will be stored in local browser storage and retrieved and sent with each request.  suseptible to XSS attacks.
    Can be mitigated with shorter token expiration times, by the fact JSX escapes html before rendering and
    by sanitizing all data going into and out of mongo database
    This application uses this approach with the listed mitgations
## Backend security approach
    use middleware to convert all data into JSON and then use mong-sanitize to sanitze it before
    going into the database or out
