import React, { useState } from 'react'


const Todo = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTitleChange = (e) => {
    setTitle (e.target.value);
  }

  const handleDescChange = (e) => {
    setDesc (e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, [title, desc]]);
    setTitle('');
    setDesc('');
  }

  const deleteHandler = (i) => {
    let newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  }

  return (
    <div className='flex flex-col align-middle justify-center'>
    <form className=' text-center'>
      <input 
        type='text' 
        className=' border border-slate-500 rounded m-5 px-8 py-2 bg-slate-500 text-white'
        placeholder='Enter title'
        onChange={handleTitleChange}
        value={title}
        required>
      </input>
      <input 
        type='text' 
        className=' border border-slate-500 rounded m-5 px-8 py-2 bg-slate-500 text-white'
        placeholder='Enter description'
        value={desc}
        onChange={handleDescChange}>
      </input>
      <button 
      className=' bg-green-200 px-6 py-2 rounded-lg'
      onClick={addTask}
      
      >Add task</button>
    </form>
    <hr className =' border border-slate-500 mb-5'/>
    
  

    {tasks.map((task, i) => {
      return(
        <div className='flex justify-center'>
            <div className='flex w-4/5 justify-between align-middle mx-5 mb-2'>
              <h1 className=' text-left text-white'>{task[0]}</h1>
              <h1 className=' text-left text-white'>{task[1]}</h1>
              <button 
              className='bg-red-300 px-6 py-2 rounded-lg'
              onClick={() => deleteHandler(i)}
              >Delete</button>
            </div>
        </div>
      )
    })}

  </div>
  )
}

export default Todo;

// import React, { useState } from 'react';

// const Todo = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescChange = (e) => {
//     setDesc(e.target.value);
//   };

//   const addTask = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, [title, desc]]);
//     setTitle('');
//     setDesc('');
//   };

//   const deleteHandler = (i) => {
//     let newTasks = [...tasks];
//     newTasks.splice(i, 1);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <form className="text-center">
//         <input
//           type="text"
//           className="border border-slate-500 rounded m-5 px-8 py-2 bg-slate-500"
//           placeholder="Enter title"
//           onChange={handleTitleChange}
//           value={title}
//           required
//         />
//         <input
//           type="text"
//           className="border border-slate-500 rounded m-5 px-8 py-2 bg-slate-500"
//           placeholder="Enter description"
//           value={desc}
//           onChange={handleDescChange}
//         />
//         <button
//           className="bg-green-200 px-6 py-2 rounded-lg"
//           onClick={addTask}
//         >
//           Add task
//         </button>
//       </form>
//       <hr className="border border-slate-500" />
//       {tasks.map((task, i) => {
//         return (
//           <div className="flex w-2/3 justify-between align-middle mx-5 mb-2" key={i}>
//             <h1>{task[0]}</h1>
//             <h1>{task[1]}</h1>
//             <button
//               className="bg-red-300 px-6 py-2 rounded-lg"
//               onClick={() => deleteHandler(i)}
//             >
//               Delete
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Todo;
