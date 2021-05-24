const status=document.querySelector('.status');
console.log(status);
const reset = document.getElementById('restartButton')
console.log(reset);
const winningMessageElement = document.getElementById('winningMessage')
const cells=document.querySelectorAll('.game-cell');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
console.log(cells);
let gameislive=true;
let xisnext=true;
let winner=null;
const letter=(let)=>
{
   if(let==='x')
   {
   	return xsym;
   }
   return osym;
}
const handlewin=(letr)=>
{
gameislive=false;
winner=letr;
 if(winner==='x')
      {

      status.innerHTML=`${letter(winner)} has won!`;
      winningMessageTextElement.innerText = `${letter(winner)} has won!`;
       winningMessageElement.classList.add('show');
      
    }
    else 
    {
    	 status.innerHTML=`<span>${letter(winner)} has won!</span`;
       winningMessageTextElement.innerText = `${letter(winner)} has won!`;
        winningMessageElement.classList.add('show');
      
        }
        reset.addEventListener('click',had);
   
}
const xsym='X';
const osym='O';
 
const check=()=>
{
	const top=cells[0].classList[2];
    const topmid=cells[1].classList[2];
    const topend=cells[2].classList[2];
    const midtop=cells[3].classList[2];
    const midmid=cells[4].classList[2];
    const midend=cells[5].classList[2];
    const endtop=cells[6].classList[2];
    const endmid=cells[7].classList[2];
    const endend=cells[8].classList[2];

    console.log(topend);
    console.log(midend);
    console.log(endend);
    if(top&&top===topmid&&top===topend)
    {
    	handlewin(top);
    	cells[0].classList.add('won');
    	cells[1].classList.add('won');
    	cells[2].classList.add('won');


    }
    else if(midtop&&midtop===midmid&&midtop===midend)
    {
handlewin(midtop);
cells[3].classList.add('won');
cells[4].classList.add('won');
cells[5].classList.add('won');

    }
    else  if(endtop&&endtop===endmid&&endtop===endend)
    {
    	console.log('plplpl');
    	cells[6].classList.add('won');
    	cells[7].classList.add('won');
    	cells[8].classList.add('won');

handlewin(endtop);
    }
   else if(top&&top===midmid&&top===endend)
   {
   	cells[0].classList.add('won');
   	cells[4].classList.add('won');
   	cells[8].classList.add('won');

   	handlewin(top);
   }
   else if(topend&&topend===midmid&&midmid===endtop)
   {
   	cells[2].classList.add('won');
   	cells[4].classList.add('won');
   	cells[6].classList.add('won');

   	handlewin(topend);
   }
   else if(top&&top===midtop&&midtop===endtop)
   {

   handlewin(top);
   cells[0].classList.add('won');
   cells[3].classList.add('won');
   cells[6].classList.add('won');

   }
   else if(topmid&&topmid===endmid&&topmid===midmid)
   {
   	handlewin(topmid);
   	cells[1].classList.add('won');
   	cells[4].classList.add('won');
   	cells[7].classList.add('won');
   }
   else if(topend&&topend===midend&&topend===endend)
   {
   	handlewin(endend);
   	console.log('loplo');
   	cells[2].classList.add('won');
   	cells[5].classList.add('won');
   	cells[8].classList.add('won');
   }
   else if(top&&topmid&&topend&&midtop&&midend&&midmid&&endend&&endtop&&endmid)
   {
   	gameislive=false;
   	status.innerHTML='IT IS A TIE';
    winningMessageElement.classList.add('show');
    winningMessageTextElement.innerText = 'DRAW MATCH';

    reset.addEventListener('click',had);
   }
   else 
   {
 xisnext=!xisnext;
        if(xisnext)
        {
        	status.innerHTML='x turn';
        }
        else 
        {
        	status.innerHTML='o turn';
        }
   }


}
had()
function had()
{
	xisnext=true;
	status.innerHTML='x turn';
	gameislive=true;
	winner=null;
	for(const cell of cells)
	{
		cell.classList.remove('x');
		cell.classList.remove('o');
		cell.classList.remove('won');
    cell.removeEventListener('click',handle);
	}
  for(const cell of cells)
{
  cell.addEventListener('click',handle);
}
 winningMessageElement.classList.remove('show');
}
function handle(e)
{
	const classes=e.target.classList;
	if(gameislive)
	{
    
    if(classes[2]==='x'||classes[2]==='o')
    {
    	return;
    }


    if(xisnext)
    {
    	e.target.classList.add('x');
        check();

       
    }
    else 
    {
    	e.target.classList.add('o');
       check();

        
        
    }
}


}