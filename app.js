//using selectors inside the element
// traversing the dom

// get Html Elements
const questionBtns = document.querySelectorAll(".question-btn");
// Solution 1
questionBtns.forEach((btn)=> {
    btn.addEventListener("click", (e)=>{
        // parentElement : get the arent of my element
        //console.log(e.currentTarget.parentElement.parentElement)
        const question = e.currentTarget.parentElement.parentElement
        // add the show-text
        question.classList.toggle("show-text")
    })
})


/* Solution 2
const questions = document.querySelectorAll(".question");
questions.forEach(function (question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", ()=>{
        question.classList.toggle("show-text")
    })
}
*/