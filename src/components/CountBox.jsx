import Container from "./Container";
import vector1 from "../assets/vector1.png"; // your curve pattern

const CountBox = ({ data, resolvedTask }) => {
  const inprogress = data.filter(
    (element) => element.status === "In- Progress"
  ).length;

  return (
    <Container>
      <div>
        <div className="grid grid-cols-2 gap-[60px] my-[80px]">
          <div
            className="relative rounded-md flex flex-col items-center justify-center 
                       p-7 text-white h-[250px] 
                       bg-[linear-gradient(to_right,#632EE3,#9F62F2)]
                       overflow-hidden"
          >
            <img
              src={vector1}
              alt="bg-left"
              className="absolute top-0 left-0 w-1/2 h-full object-cover opacity-50 pointer-events-none"
            />
            <img
              src={vector1}
              alt="bg-right"
              className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-50 pointer-events-none transform scale-x-[-1]"
            />

            <h2 className="text-[24px] relative z-10">In-Progress</h2>
            <p className="font-semibold text-[50px] relative z-10">
              {inprogress}
            </p>
          </div>

          <div
            className="relative rounded-md flex flex-col items-center justify-center 
                       p-7 text-white h-[250px] 
                       bg-[linear-gradient(to_right,#54CF68,#00827A)]
                       overflow-hidden"
          >
            <img
              src={vector1}
              alt="bg-left"
              className="absolute top-0 left-0 w-1/2 h-full object-cover opacity-50 pointer-events-none"
            />
            <img
              src={vector1}
              alt="bg-right"
              className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-50 pointer-events-none transform scale-x-[-1]"
            />

            <h2 className="text-[24px] relative z-10">Resolved</h2>
            <p className="font-semibold text-[50px] relative z-10">
              {resolvedTask.length}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
