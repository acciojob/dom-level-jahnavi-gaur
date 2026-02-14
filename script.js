//your JS code here. If required.
let count = 0
let li = document.querySelectorAll('li')

li.forEach((item)=>{
	if(item.id == 'level'){
		return count
	}
	count++
})