import {FC} from 'react'
import { Form } from 'react-router-dom'

interface ICategoryModal {
    type: 'post' | 'patch'
    title?: string 
    id?: number
    setCategoryTitle?: (categoryTitle: string) => void
    setVisibleModal: (visible: boolean) => void
}

const CategoryModal:FC<ICategoryModal> = ({type,id,title,setCategoryTitle,setVisibleModal}) => {

  

  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center'>
      <Form action='/categories' method={type} onSubmit={() => setVisibleModal(false)} className='grid gap-2 w-[300px] p-5 rounded-b-nd bg-slate-900'>
        <label htmlFor='title'>
          <small>Category Title</small>
          <input onChange={(e) => setCategoryTitle && setCategoryTitle(e.target.value)} className='input w-full' value={title} placeholder='title'  type="text" name='title' />
          <input type="hidden" name="id" value={id} />

        </label>


      <div className='flex items-center gap-2'>
        <button type='submit' className=' btn btn-green'>
          {type === 'patch'? 'Save' : 'Create'}
        </button>
        <button onClick={()=>{setVisibleModal(false)}} className='btn btn-red'>Close</button>

      </div>
      </Form>
    </div>
  )
}

export default CategoryModal