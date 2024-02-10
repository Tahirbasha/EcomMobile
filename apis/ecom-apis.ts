export const login = async (loginCredentials: {username: string, password: string}) => {
     const url = "https://apis.ccbp.in/login";
     const options = {
       method: "POST",
       body: JSON.stringify(loginCredentials),
     };
     const response = await fetch(url, options);
     return response
}