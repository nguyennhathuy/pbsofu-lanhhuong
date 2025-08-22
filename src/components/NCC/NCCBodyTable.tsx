import OrderTable from "../OrderTable/OrderTable";

interface INCCBodyTable {
    tableData: any,
    tableTitle: any
}

export default function NCCBodyTable({ tableData, tableTitle }: INCCBodyTable) {
    return (
        <div className="w-full h-[50%] overflow-y-auto">
            <OrderTable 
                tableData={tableData}
                tableTitle={tableTitle}
            />
        </div>
    );
}