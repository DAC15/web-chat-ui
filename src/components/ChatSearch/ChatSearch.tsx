import { FilterList, Search } from "@mui/icons-material";

interface ChatSearchProps {
  onSearch: (term: string) => void;
}

export function ChatSearch(props: ChatSearchProps) {
  return (
    <div className="flex items-center gap-2 px-4">
      <div className="w-full relative h-[36px]">
        <Search className="absolute top-1/2 -translate-y-1/2 left-4" />
        <input
          className="w-full h-full pl-14 pr-4 rounded-lg focus:outline-none"
          type="text"
          placeholder="Search or start new chat"
          onChange={(event) => props.onSearch(event.target.value)}
        />
      </div>
      <FilterList className="shrink-0 text-slate-400" />
    </div>
  );
}
