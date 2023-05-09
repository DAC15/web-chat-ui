interface ChatListItemProps {
  onClick: () => void;
}

export function ChatListItem(props: ChatListItemProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="flex items-center gap-3 px-4 h-[72px] bg-white hover:bg-slate-50 focus:bg-slate-50 focus:outline-none text-left"
    >
      <img
        className="shrink-0 w-12 h-12 rounded-full object-cover"
        src="https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg"
      />
      <div className="flex flex-col border-b border-solid border-slate-200 w-full pb-2">
        <h4 className="text-lg text-slate-900">John Doe</h4>
        <span className="text-sm text-slate-500">Hi, how are you?</span>
      </div>
    </button>
  );
}
