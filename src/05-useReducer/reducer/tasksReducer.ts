
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState{
    todos: Todo[];
    length: number;
    completedNumber: number;
    pending: number;
}

//? Es recomendable que sean objetos
export type TaskAction = 
| { type: 'ADD_TODO'; payload: string }                                    
| { type: 'TOGGLE_TODO'; payload: number }
| { type: 'DELETE_TODO'; payload: number }

//! Reducer = funcion pura que resuelva un nuevo estado basado en los argumentos "state, action", siempre tiene que devolver algo de tipo state
//! state = el valor que se tiene guardado

//! action = Serie de valores que se va a recibir para determinar un nuevo estado
//! El action puede tener 2 argumentos, 
//! type(como se va a llamar la accion que se va a realizar, OBLIGATORIO), 
//! payload(lo que recibe el action para funcionar si es necesario, puede ser de cualquier tipo ejm objeto, string etc..)
//? NOTA: Se puede devolver todo lo que regrese un nuevo arreglo
export const tasksReducer = (state:TaskState, action: TaskAction ): TaskState => {

    switch (action.type) {
        case 'ADD_TODO':
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            //? NO HACER MUTACIONES, NI MODIFICACIONES
            //state.todos.push(newTodo)

            return{
                //...state: esparce todas las propiedades a nivel base es decir
                //  length, completedNumber y pending con los valores que ya se tenian
                ...state,
                todos:[...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };

        case 'DELETE_TODO':{ 
            const currentTodos = state.todos.filter(todo => todo.id !== action.payload);
            const completedTodos = currentTodos.filter(todo => todo.completed).length;
            const pendingTodos = currentTodos.length - completedTodos;

            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completedNumber: completedTodos,
                pending: pendingTodos
            }
        }

        case 'TOGGLE_TODO':
            const updateTodos = state.todos.map(todo =>{
            if (todo.id === action.payload) {
                return {...todo, completed: !todo.completed}
            }
                return todo;
            });
            return{
                ...state,
                todos: updateTodos,
                completedNumber: updateTodos.filter(todo => todo.completed).length,
                pending: updateTodos.filter(todo => !todo.completed).length
            };

        default:
            return state;
    }
    
}
