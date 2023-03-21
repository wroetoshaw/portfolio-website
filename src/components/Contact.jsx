import React,{useRef, useState} from 'react'

import {motion} from 'framer-motion'
import { EarthCanvas }   from './canvas'
import { SectionWrapper } from '../hoc'
import { styles } from '../Style'

import emailjs from '@emailjs/browser'

import { slideIn } from '../utils/motion'


// template_30pa8yt
// service_c5ln19b
// 2sawkGAcGyWDNR7JWV1gv
// ROtrtVtF1bGuMGXiB

const Contact = () => {
  const formRef = useRef();

  const [form,setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, isLoading] = useState(false);

  const handleChange = (e) =>{
    const {target} = e;
    const {name, value} = target;

    setForm({
      ...form,
      [name] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoading(true);
    
    emailjs.send('service_c5ln19b',
    'template_30pa8yt',
    {
      from_name : form.name,
      to_name : 'Karthik',
      from_email : form.email,
      to_email : 'karthikgoud3720@gmail.com',
      message : form.message,
    },
    'ROtrtVtF1bGuMGXiB'    
    ).then(() => {
      isLoading(false);
      alert('Thank you, I will get back as soon as possible.');
      setForm({
        name: '',
        email : '',
        message : '',
      })

    }, (error) => {
      isLoading(false);
      console.log(error);
      alert('something went wrong');
    })

  }

  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className= {styles.heroSubText}>
        Get In Touch
        </p>
        <h3 className={styles.heroHeadText} > Contact </h3>

        <form
        ref = {formRef}
        onSubmit = {handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Your Name</span>
            <input
              type = 'text'
              name = 'name'
              value = {form.name}
              onChange={handleChange}
              placeholder ="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Your Email</span>
            <input
              type = 'email'
              name = 'email'
              value = {form.email}
              onChange={handleChange}
              placeholder ="What's your email ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Message </span>
            <textarea
              rows = {7}
              type = 'text'
              name = 'message'
              value = {form.message}
              onChange={handleChange}
              placeholder ="What do you wanna say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '/>
          </label>

          <button 
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>



      </motion.div>
      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");