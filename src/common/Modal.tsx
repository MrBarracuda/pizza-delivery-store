interface ModalProps {
  children: JSX.Element[]
  title: string
  id: string
}
export const Modal = ({ children, title, id }: ModalProps) => (
  <>
    <label htmlFor={id}>{children[0]}</label>
    <input type="checkbox" id={id} className="modal-toggle" />
    <label htmlFor={id} className="modal cursor-pointer">
      <div className="modal-box relative">
        <h2 className="pt-2	text-center text-2xl font-bold leading-tight text-slate-900">{title}</h2>
        {children[1]}
      </div>
    </label>
  </>
)
