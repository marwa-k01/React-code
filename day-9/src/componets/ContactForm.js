import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa6';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {

    const schema = yup.object().shape({
        name : yup.string().required("please enter name"),
        email : yup.string().email("email is invaild").required("please enter email"),
        age : yup.number().positive().min(18).max(30).required(),
        meassge : yup.string().min(150).max(200).required("please enter message"),
    })

    const {register, handleSubmit, formState : {errors}} = useForm({resolver : yupResolver(schema)})

    const onFormSubmit = (data) => {
        console.log("Success form submit")
        console.log(data)
    }

  return (
    <>
      <div className='container max-h-auto flex justify-center items-center'>
        <div className='md:w-[800px] flex flex-col lg:flex-row justify-between bg-white md:h-[550px] mt-14 mb-12 p-16 shadow-2xl rounded-2xl'>
            <div className='w-[300px]'>
                <span className='text-slate-600 text-sm'>WE'RE HERE TO HELP YOU</span>
                <h1 className='text-4xl my-4'><span className='font-bold '>Discuss </span>Your Chemical Solution Needs</h1>
                <p className='text-gray-500 my-2'>Are you looking for top-quaity chemical solutino taiored to your needs? Reach out to us</p>
                <div className='my-2 flex items-center'>
                    <AiOutlineMail className='text-blue-600 text-2xl mr-2'/>
                    <div className='leading-none'>
                        <span className='text-gray-600'>E-mail</span>
                        <p>solutino12@gmail.com</p>
                    </div>
                </div>
                <div className='my-2 flex items-center'>
                    <BiPhone className='text-blue-600 text-2xl mr-2'/>
                    <div>
                        <span className='text-gray-600'>Phone-number</span>
                        <p>+123 - 456 - 7890</p>
                    </div>
                </div>
            </div>
            <div className='w-[300px] rounded-2xl shadow-lg bg-slate-50 p-4 my-4 md:my-0'>
               <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-2'>
                    <label className='text-gray-700'>Name</label>
                    <input type='text' className='w-full rounded-lg p-1.5 outline-blue-300' placeholder='Enter name' {...register("name")}/>
                    { errors.name && (
                        <p>{errors.name?.meassge}</p>
                    )}
                </div>
                <div className='mb-2'>
                    <label className='text-gray-700'>Email</label>
                    <input type='text' className='w-full rounded-lg p-1.5 outline-blue-300' placeholder='jour@gmail.com' {...register("email")}/>
                    <p>{errors.name?.meassge}</p>
                </div>
                <div className='mb-2'>
                    <label className='text-gray-700'>Age</label>
                    <input type='number' className='w-full rounded-lg p-1.5 outline-blue-300' placeholder='18-30' {...register("age")}/>
                </div>
                <div className='mb-2'>
                    <label className='text-gray-700'>Message</label>
                    <textarea type="Message" placeholder='150-200 word' className='w-full rounded-lg p-1 h-28' {...register("message")}></textarea>
                </div>
                <button className='bg-blue-700 text-white rounded-full p-2'><span className='bg-white text-blue-700 px-2 py-1 mr-4 rounded-full'><FaArrowRight className='inline-block'/></span>Get a solution</button>
            
               </form>                
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
