import Container from "./Container";

const CountBox = ({data,resolvedTask}) => {
  const inprogress=data.filter(element=>element.status=="In- Progress").length
  return (
    <Container>
      <div>
        <div className="grid grid-cols-2 gap-[60px] my-[80px]  ">
          <div className=" rounded-md flex flex-col items-center justify-center p-7 text-white h-[250px] bg-[linear-gradient(to_right,#632EE3,#9F62F2)]"
          >
            <h2 className=" text-[24px]">In-Progress</h2>
            <p className="font-semibold text-[50px]">{inprogress}</p>
          </div>
          <div className="rounded-md flex flex-col items-center justify-center p-7 text-white h-[250px] bg-[linear-gradient(to_right,#54CF68,#00827A)]">
            <h2 className=" text-[24px]">Resolved</h2>
            <p className="font-semibold text-[50px]">{resolvedTask.length}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
