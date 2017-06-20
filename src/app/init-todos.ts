export class Init{
  load(){
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
      console.log('No Todos Found...Creating...');
      var todos = [
        {
          text: 'Pick up kids from school'
        },
        {
          text: 'Meeting with Boss'
        },
        {
          text: 'Dinner with a friend'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return

    }
    else {
      console.log('Found Todos');
    }
  }
}
