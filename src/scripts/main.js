// Can you explain what is being imported here?
import { getPosts, getUsers } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"



const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
    console.log("what was clicked", event.target)
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})
// const handleGiffyClick = (event) >
//      console.log("what was clicked", event.target)
	//  if (event.target.id === "logout"){
		// console.log("You clicked on logout")
	// }
// }
// applicationElement.add EventListener("click, handGiffyClick")

const startGiffyGram = () => {
	showPostList();
}

startGiffyGram();
