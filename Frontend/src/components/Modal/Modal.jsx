import { RxCrossCircled } from "react-icons/rx";

const Modal = ({open, onclose, children}) => {
  return (
    <div onClick={onclose} className={`fixed z-10 inset-0 overflow-auto flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible" }`}>
        <div onClick={(e) => e.stopPropagation()} className={`w-[100%] md:w-[70%] lg:w-[40%] transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={onclose} className="p-4 rounded-lg text-2xl absolute top-1 left-125 cursor-pointer">
              <RxCrossCircled />
            </button>
            {children} 
        </div>
    </div>
  )
}

export default Modal;