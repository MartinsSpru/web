
const maxBooks = 3
let currentShelf = 0
let otherShelf = 0
const shelf = [
  document.getElementById('shelf0'),
  document.getElementById('shelf1')
];
const book = [0, 0];
function moreBooks(){

    console.log(book)
    let currentShelf = Math.floor(Math.random() * 2);   
    if(book[currentShelf] >= maxBooks){
        shelfSwap()
    }else{
        const newBook = document.createElement('div')
        newBook.className = 'book'
        let r = parseInt(Math.floor(Math.random() * 256))
        let g = parseInt(Math.floor(Math.random() * 256))
        let b = parseInt(Math.floor(Math.random() * 256))
        newBook.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        shelf[currentShelf].append(newBook)
        if(book[currentShelf] < maxBooks){
            book[currentShelf]++
        }
    }
}
function lessBooks(){
    console.log(book)
    let currentShelf = Math.floor(Math.random() * 2);
    if(book[currentShelf] == 0){
        shelfSwap()
        let booklist = shelf[currentShelf].getElementsByClassName('book')
        let random = Math.floor(Math.random() * book[currentShelf])
        booklist[random].remove();
    }else{
        let booklist = shelf[currentShelf].getElementsByClassName('book')
        let random = Math.floor(Math.random() * book[currentShelf])
        booklist[random].remove();
        book[currentShelf]--
    }
}
function shelfSwap(){
    if(currentShelf == 0){
        currentShelf = 1
        otherShelf = 0
    }else{
        currentShelf = 0
        otherShelf = 1
    }
}