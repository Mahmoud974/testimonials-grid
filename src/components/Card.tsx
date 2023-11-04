
import { Coms } from "../db/data"

interface Props {
    user: Coms
}
const Card:React.FC<Props> = ({user}) => {

  const changeColor = () =>{
    switch(user.surname){
      case 'Daniel Clifford':
       return "bg-violet-800 text-white w-[50%] md:col-span-2 md:order-1 " ;
        break;
       case 'Jonathan Walters' :
         return "bg-gray-800 text-white w-[50%] md:col-span-1 md:order-2" ;
        break;
      case 'Jeanette Harmon' :
         return "bg-white text-black md:col-span-1 md:order-4";
        break;
        case  "Kira Whittle"  :
         return "bg-white text-black md:col-span-1 row-span-3 md:order-3"
        break;
      case 'Patrick Abrams':
         return "bg-slate-900 text-white md:col-span-2 md:order-5 ";
        break;
      default:
        return;
    }
  }
  return (
     <div  className={ ` ${changeColor()}   shadow-md w-auto rounded-xl  h-auto py-12  px-10 space-y-4 md:mb-0 mb-4 drop-shadow-xl`}>
     <div className="flex space-x-4 items-center">
     
       <div>
        <img src={user.img} alt="" className="w-8 h-8 rounded-full border-[1.25px] border-slate-500 p-[0.1rem]" />
      </div>
      <div className="">
        <p className="text-[0.75rem]">{user.surname}</p>
        <p className="font-thin text-[0.63rem] text-slate-400 ">Verified Graduate</p>
      </div>
      {
    user.surname === 'Daniel Clifford' &&
      <img src="/img/bg-pattern-quotation.svg" alt="" className="absolute right-7 z-1"/>
      }
     </div>
     <div>
      <h1 className=" font-bold relative z-4">{user.title}</h1>
    <p className=" text-[0.7rem] mt-3">{user.content}</p>
     </div>
      </div>
  )
}

export default Card