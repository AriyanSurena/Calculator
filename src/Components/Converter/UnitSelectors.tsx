import Menu from "../Menu";

interface UnitSelectorsProps {
    id: string,
    unitsCategory: {
        Area: string[];
        Length: string[];
        Temperature: string[];
        Volume: string[];
        Mass: string[];
        Data: string[];
        Speed: string[];
        Time: string[];
        [key: string]: any[];
    },
    selectedUnitType: string,
    unit: string,
    setUnit: (unit: string) => void,
}
const UnitSelectors: React.FC<UnitSelectorsProps> = ({ id, unitsCategory, selectedUnitType, unit , setUnit }) => {
    return (
        <Menu id={id} list={unitsCategory[selectedUnitType]} selected={unit} setSelected={setUnit} />
    )
}

export default UnitSelectors;