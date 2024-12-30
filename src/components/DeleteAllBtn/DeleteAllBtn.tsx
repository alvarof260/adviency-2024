interface Props {
  deleteAllGift: () => void;
}

export const DeleteAllBtn = ({ deleteAllGift }: Props) => {
  return (
    <button
      className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring"
      onClick={deleteAllGift}
    >
      <span className="absolute inset-0 border border-slate-200 group-active:border-slate-200"></span>
      <span
        className="block border border-slate-200 bg-slate-200 px-12 py-3 transition-transform active:border-red-100 active:bg-slate-100 group-hover:-translate-x-1 group-hover:-translate-y-1"
      >
        Borrar Todo
      </span>
    </button>
  )
}
