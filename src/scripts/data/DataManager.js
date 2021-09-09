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
let postCollection = [];

export const usePostCollection = () => {
            //Best practice: we don't want to alter the original state, so
            //make a copy of it and then return it
            //The spread operator makes this quick workS
return [...postCollection];
}
export const getPosts = () => {
	return fetch("http://localhost:8088/posts")
	.then(response => response.json())
	.then(parsedResponse => {
		postCollection = parsedResponse;
		return parsedResponse;
	})
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })  .then(response => response.json())
  }
  
// do something with response here
        //return parsedResponse;
        //.then(parsedResponse => {            

          //  })

          