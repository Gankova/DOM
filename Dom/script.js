//Document Object Model (Dom)
const elem = document.getElementById('test');
console.log(elem);
elem.id = 'hello';
elem.className = 'cl1 cl2';//если нет класса то добавляет
elem.classList.add('cl3');//добавляет класс
elem.classList.remove('cl2');//удаляет

const elem2 = document.getElementsByClassName('cl2')[0];//возвращает массив, даже если элемент один, 
//чтобы вернуть конкретный элемент const elem2 = document.getElementsByClassName('cl2')[0]- в конце индекс
console.log(elem2)
elem2.innerHTML ='<span>Hello</span>';
elem2.style.color = 'red';
elem2.style['front-size']= '46px';// можно так обращаться к СSS, Правильнее:
elem2.style.backgroundColor = '#ff5577'
const elems = document.getElementsByTagName('p');
for (let e of elems){
    e.innerText = e.innerText.toUpperCase()// меняет в <p> на верхний регистр
    e.style.color ='blue'; //меняем CSS через style

}

// возвращает НЕ МАССИВ, а первый элемент по заданному селектору
const elem4 = document.querySelector('#hello > p');
console.log(elem4);

//возвращает все элементы по заданному селектору
const elem5 = document.querySelectorAll('#hello > p');
console.log(elem5);

//ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ
const img = document.createElement('img');//создет элемент, но добавляет в дерево
img.src ='https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg';
img.width = 200;
img.height = 200;
document.body.appendChild(img);// добавляет 1 дочерний элемент в конец родителя
//.append (elem1, elem3....)- добавляет несколько дочерних элементов в конец родителя

//elem- перед ним вставиться img в body 

document.body.insertBefore(img, elem);// не вставили новый объект, а переместили в дереве
//сhildNodes - массив всех потомков, вложенных тегов
console.log(elem.childNodes);

// удаление объектов
elems[0].remove();// если есть потомки, удаляет вместе с потомками
function inputText(text){
    console.log(text);
}
//onmouswhel- срабатывает, если крутить колесо мышки
img.addEventListener('mousewheel', () => { //если EventListener on не добавлять
    const delta = event.wheelDeltaY > 0 ? 5 : -5;
    img.height +=delta;
    img.width +=delta;
 
});
document.addEventListener('DOMContentLoaded', () =>{// если нужно чтобы сначала загрузить в память HTML, весь JS пишется внутри{}
    console.log('document was loaded')
})
