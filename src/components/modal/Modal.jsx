const Modal = ({isOpen, setIsOpen}) => {
  return (
<dialog id="my_modal_1" className={`modal ${isOpen ? 'modal-open' : ""}`}>
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg text-center text-red-600">Are you sure to delete?</h3>
    <div className="modal-action">
      {/* <!-- if there is a button in form, it will close the modal --> */}
      <button onClick={()=>setIsOpen(!isOpen)} className="btn">No</button>
      <button onClick={()=>setIsOpen(!isOpen)} className="btn">Yes</button>
    </div>
  </form>
</dialog>
  )
}

export default Modal