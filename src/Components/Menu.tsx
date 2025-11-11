import Select from "./Select";
interface MenuProps {
   id: string,
   list: string[],
   selected: string,
   setSelected: (selected: string) => void
}

const Menu: React.FC<MenuProps> = ({
   id,
   list,
   selected,
   setSelected
}) => {
   return (
      <Select id={id} list={list} selected={selected} setSelected={setSelected} />
   )
}

export default Menu;