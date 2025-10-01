import { toast } from "react-toastify"


const Maincontent = ({issue,data,setData}) => {
    const handleclick=()=>{
        const expectedata=data.find(elm=>issue.id==elm.id)
        const restdata=data.filter(elm=>issue.id!=elm.id)
            if(expectedata.status=="Open"){
            expectedata.status="In- Progress"
            }
            setData([expectedata, ...restdata])
        toast("Ticket added to task status")
        
    }
  return (
      <div onClick={handleclick} className="shadow-md rounded-md cursor-pointer bg-slate-100 p-4  ">
                                <div className="flex justify-between mb-2 items-center">
                                    <h2 className="font-semibold text-[#001931] text-lg">{issue.title}
                                    </h2>
                                    <span
                                        className={`font-semibold py-1 px-2 shadow rounded-2xl mr-2 ${issue.status == "Open"
                                            ? "text-[#0B5E06] bg-[#B9F8CF]"
                                            : "text-[#9C7700]  bg-[#F8F3B9]"
                                            }`}
                                    ><span className='h-3.5 w-3.5 rounded-full bg-current inline-block mr-1'></span>{issue.status}</span>
                                </div>
                                <div>
                                    <p className="text-[#627382] mb-2 font-medium text-[16px]">{issue.description}</p>
                                </div>                                
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4 mb-2 justify-between items-center">
                                        <p className="text-[#627382] font-medium text-[14px]">{issue.id}</p>
                                        <span
                                            className={`text-[14px] font-medium ${issue.priority == "HIGH PRIORITY"
                                                ? "text-[#F83044]"
                                                : issue.priority == "MEDIUM PRIORITY"
                                                    ? "text-[#FEBB0C]"
                                                    : "text-[#02A53B]"
                                                }`}
                                        >{issue.priority}</span>
                                    </div>
                                    <div className="flex gap-4 justify-between items-center">
                                        <p className="text-[#627382] font-medium text-[14px]">{issue.requester}</p>
                                        <div className="flex justify-between items-center">
                                            <img src={issue.dateIcon} alt="" />
                                            <p className="text-[#627382] font-medium text-[14px]">{issue.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}

export default Maincontent