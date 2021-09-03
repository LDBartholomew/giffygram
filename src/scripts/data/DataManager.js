const loggedInUser = {
	id: 1,
	name: "Brenda",
    dateJoined: 1630513631166,
	email: "brenda.long@nashvillesoftwareschool.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => {
        console.log("what is response", response)
        return response.json()
})
}

// do something with response here
        //return parsedResponse;
        //.then(parsedResponse => {            

          //  })