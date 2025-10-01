import React, { use, useState } from 'react'
import CountBox from './CountBox'
import Maincontent from './Maincontent'
import { toast } from 'react-toastify'

const IssuesManagement = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [data, setData] = useState(initialData)
    const [resolvedTask,setResolvedTask]=useState([])
    const handlecomplete=(issue)=>{
        const expectedata=data.find(ee=>ee.id==issue.id)
        setResolvedTask([expectedata,...resolvedTask])
        setData(data.filter(ee=>ee.id!=issue.id))
       toast("Completed")
    }
    const handleremove=(issue)=>{
        setResolvedTask(resolvedTask.filter(ee=>ee.id!=issue.id))
    }
    return (
        <div>
            {/* Box design */}
            <CountBox data={data} resolvedTask={resolvedTask}></CountBox>
            {/* Card design */}
            <div className="flex mb-3  gap-6">  
               <div>
                   <h2 className="font-semibold text-[#34485A] text-[24px]">Customer Tickets</h2>

                      <div className=" grid grid-cols-1 md:grid-cols-2 mb-4 gap-[20px]">  
                {

                    data.map((issue) => {
                        return (
                            <Maincontent issue={issue} data={data} setData={setData}></Maincontent>
                        )
                    })
                }
            </div>
                  
               </div>
               <div className='flex flex-col top-0 '>
                   <div>
                    <h2 className="font-semibold text-[#34485A] text-[24px]">Task Status</h2>
                     {
                        data.filter(element=>element.status=="In- Progress").length>0?
                        data.filter(element=>element.status=="In- Progress").map((issue)=>{
                            return(
                                <div className='h-[120px] w-[300px] mb-2 p-1 border rounded-md shadow-md ' >
                                    <h2 className='font-bold text-[18px] text-[#001931]'>{issue.title}</h2>
                                    <button className='bg-green-700 p-3 w-full my-2 rounded-xl cursor-pointer ' onClick={()=>handlecomplete(issue)}>Complete</button>
                                </div>
                            )
                        }):<div className='h-[70px] w-[300px] mb-2 p-1 border rounded-md shadow-md '><p className='text-black mt-1 text-xs font-semibold flex  justify-center items-center'>No task in progress</p></div>
                    }
                   
                   </div>
                  <div>
                     <h2 className="font-semibold text-[#34485A] text-[24px]">Resolved  Task </h2>
                       {
                    resolvedTask.length>0?resolvedTask.map(issue=>{
                        return (
                            <div>
                                 <h1 className='text-black text-bold bg-[#E0E7FF] text-2xl p-2 rounded-xl my-2'>{issue.title}</h1>
                                 <div className='flex justify-between items-center'>
                                    <p className='font-semibold text-green-600'>Completed</p>
                                    <button onClick={() => handleremove(issue)} className='font-thin text-gray-700 cursor-pointer'>Click to remove</button>
                                 </div>
                            </div>
                    
                        )

                    }):<div className='h-[70px] w-[300px] mb-2 p-1 border rounded-md shadow-md '><p className='text-black mt-1 text-xs font-semibold flex  justify-center items-center'>No task resolved yet</p></div>
                }
                  </div>
               </div>
               </div>
        </div>
    )
}

export default IssuesManagement