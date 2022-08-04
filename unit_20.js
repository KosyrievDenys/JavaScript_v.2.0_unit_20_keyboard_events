
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
	console.log(event);
	document.querySelector('.out-1').textContent = event.key;
	return event.key;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
	console.log(event);
	document.querySelector('.out-2').textContent = event.keyCode;
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */


function t3(event) {
	let out3 = document.querySelector('.out-3');
	if (47 < event.keyCode && event.keyCode < 58) out3.textContent = false;
	else out3.textContent = true;
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

function t4(event) {
	console.log(event);
	let out4 = document.querySelector('.out-4');
	if (event.key === event.key.toLowerCase()) out4.textContent = event.key;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
	console.log(event);
	let out5 = document.querySelector('.out-5');
	out5.textContent = event.key.toUpperCase();
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let str6 = '';
function t6(event) {
	console.log(event);
	let k = event.key;
	if (k === k.toLowerCase()) str6 += k;
	this.value = str6;
	return false;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
let str7 = '';
function t7() {
	let rand = getRandomInt(0, a7.length);
	str7 += a7[rand];
	document.querySelector('.out-7').textContent = str7;
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
	i: 1,
	o: 0,
	l: 7
}

let out8 = document.querySelector('.out-8');
let str8 = '';
let i8 = document.querySelector('.i-8');
function t8(event) {
	console.log(event);
	let k8 = event.key;
	if (a8[k8] !== undefined) str8 += a8[k8];
	else str8 += k8;
	out8.textContent = str8;
	// 1. Получаем из event введенный символ
	// 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
	// 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
}

document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */

let num9 = 0;
function t9(event) {
	console.log(event);
	if (event.keyCode === 40) num9++;
	document.querySelector('.out-9').textContent = num9;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
let b10 = document.querySelector('.block-10');

function t10(event) {
	// увеличиваем  h, w, потом присваиваем как свойства...
	console.log(event.key);
	let k10 = event.key;
	if (k10 === 'ArrowUp' || k10 === 'ArrowDown') { h++; b10.style.height = `${h}px`; }
	else if (k10 === 'ArrowLeft' || k10 === 'ArrowRight') { w++; b10.style.width = `${w}px`; }
	// if (k10 === 'ArrowUp' ) { h++; b10.style.height = `${h}px`; }
	// else if (k10 === 'ArrowDown') { h--; b10.style.height = `${h}px`; }
	// else if (k10 === 'ArrowRight') { w++; b10.style.width = `${w}px`; }
	// else if (k10 === 'ArrowLeft') { w--; b10.style.width = `${w}px`; }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
const keyb = document.querySelectorAll('.keyboard');
const symbol = {
	'Control' : 'ctrl',
	'Alt' : 'alt',
	' ' : 'space',
	'Enter' : 'enter',
}

function t11(event) {
	let key = event.key;
	console.log(key);
	console.log(event);
	keyb.forEach((el, i) => el.classList.remove('active'))
	if (symbol[key] !== undefined) key = symbol[key];
	let button = document.querySelector(`.keyboard[data = '${key}']`)
	if (button) button.classList.add('active');
	}


document.querySelector('.i-11').onkeydown = t11;

