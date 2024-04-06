import React from 'react';

function TextInput({
    label,
    name,
    register,
    errors,
    isRequired=true,
    type="text",
    className="sm:col-span-2",
    defaultValue=""
                   }) {
    return (
       <div className={className}>
           <label htmlFor={name} className="block text-sm font-medium leading-6 text-light dark:text-dark mb-2">

               {label}
           </label>

           <input
               {...register(`${name}`, {required:isRequired})}
                  type={type}
                  name={name}
                  id={name}
                  defaultValue={defaultValue}
                  autoComplete={name}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-focus  focus:ring-insert focu:ring-blue-600 sm:text-sm "
                  placeholder={`Type the ${label.toLowerCase()}`}/>

           {errors[`${name}`] && (
               <span className="text-sm text-red-600">
                   {label} is required
               </span>
           )}
       </div>
    );
}

export default TextInput;