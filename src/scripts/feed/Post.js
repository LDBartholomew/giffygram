import { getLikes } from './../data/DataManager.js';

//this needs to be located above the Post declaration
//this could also be imported to this module
const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}


  export const Post = (postObject) => {
    return `
      <section class="post" id="${postObject.id}">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        
        <img class="post__image" src="${postObject.imageURL}" />
        
        /// in the return add a place for the likes
          <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
          <button id="delete__${postObject.id}">Delete</button>
          <button id="edit__${postObject.id}">Edit</button>
          <button id="like__${postObject.id}">Like</button>

      </section>
    `
  }

  