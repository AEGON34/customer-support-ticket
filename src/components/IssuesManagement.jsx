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
               <div className="flex flex-col w-full">
  <div className="flex">
    <h2 className="font-semibold text-[#34485A] text-[20px] md:text-[24px] mb-2">
      Task Status
    </h2>
    {data.filter((el) => el.status === "In- Progress").length > 0 ? (
      data
        .filter((el) => el.status === "In- Progress")
        .map((issue) => (
          <div
            key={issue.id}
            className="w-full md:max-w-[300px] h-auto md:h-[120px] mb-3 p-3 border rounded-md shadow-md"
          >
            <h2 className="font-bold text-[16px] md:text-[18px] text-[#001931]">
              {issue.title}
            </h2>
            <button
              className="bg-green-700 p-2 md:p-3 w-full mt-2 rounded-xl text-white cursor-pointer"
              onClick={() => handlecomplete(issue)}
            >
              Complete
            </button>
          </div>
        ))
    ) : (
      <div className="w-full md:max-w-[300px] h-[70px] mb-2 p-2 border rounded-md shadow-md flex justify-center items-center">
        <p className="text-black text-xs font-semibold">No task in progress</p>
      </div>
    )}
  </div>
  <div className="flex">
    <h2 className="font-semibold text-[#34485A] text-[20px] md:text-[24px] mb-2">
      Resolved Task
    </h2>
    {resolvedTask.length > 0 ? (
      resolvedTask.map((issue) => (
        <div
          key={issue.id}
          className="w-full md:max-w-[300px] mb-3 p-3 border rounded-md shadow-md"
        >
          <h1 className="text-black font-bold bg-[#E0E7FF] text-lg md:text-2xl p-2 rounded-xl mb-2">
            {issue.title}
          </h1>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-green-600">Completed</p>
            <button
              onClick={() => handleremove(issue)}
              className="text-gray-700 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))
    ) : (
      <div className="w-full md:max-w-[300px] h-[70px] mb-2 p-2 border rounded-md shadow-md flex justify-center items-center">
        <p className="text-black text-xs font-semibold">No task resolved yet</p>
      </div>
    )}
  </div>
</div>

               </div>
        </div>
    )
}

export default IssuesManagement