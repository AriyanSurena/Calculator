import Select from "./Select";

/**
 * Props for the UnitsMenu component.
 *
 * This component provides a dropdown menu for selecting a **measurement unit**
 * (e.g., kg, L, pcs). It is a thin, semantic wrapper around the generic
 * `SelectMenu` component, giving the selection a clear domain-specific meaning.
 */
interface MenuProps {
    /**
   * Unique identifier for the dropdown element.
   * Passed directly to `SelectMenu` and required for accessibility and testing.
   */
    id: string,

    /**
       * Array of available unit options that the user can choose from.
       *
       * @example
       * ["kg", "g", "L", "mL", "pcs"]
       */
    list: string[],
 
    /**
     * The currently selected unit value.
     * This is the controlled `value` of the underlying `SelectMenu`.
    */
   selected: string,
   
   /**
      * Setter function (from `useState`) that updates the selected unit in the parent.
      */
   setSelected: (selected: string) => void
}
/**
 * UnitsMenu
 *
 * A specialized dropdown for **selecting a measurement unit** in forms or input sections.
 * It re-uses the generic `SelectMenu` to avoid code duplication while keeping a clear,
 * domain-specific API for unit selection.
 *
 * @param props - Component props (see {@link MenuProps})
 * @returns A `SelectMenu` pre-configured with the provided unit list and state.
 *
 * @example
 * ```tsx
 * const [unit, setUnit] = useState("kg");
 *
 * <UnitsMenu
 *   id="unit-selector"
 *   unitTypesList={["kg", "g", "L"]}
 *   selectedUnitType={unit}
 *   setSelectedUnitType={setUnit}
 * />
 * ```
 */
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