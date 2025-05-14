import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {role, staffData,  } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Staff = {
   id:number;
   email?:string;
   name:string;
   photo:string;
   phone:string;
   address:string;
}

const  columns =[
   {
      header: "Info", accessor: "info"
   },
   {
      header: "Staff ID",
       accessor: "staffId", 
       className: "hidden md:table-cell",
   },
   {
      header: "Phone",
       accessor: "phone", 
       className: "hidden lg:table-cell",
   },
   {
      header: "Address",
       accessor: "address", 
       className: "hidden lg:table-cell",
   },
   {
      header: "Actions",
       accessor: "action", 
   },

  
]

const StaffListPage = () => {
   const renderRow = (item: Staff) => (
      <tr key={item.id} 
      className="border-n border-gray-200 even:bg-slate-50 text-sm bg:lamaPurpleLight"
      >
         <td className="flex items-center gap-4 p-4">
            <div className="flex flex-col">
               <h3 className="font-semibold">{item.name}</h3>
               <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
         </td>
         <td className="hidden md:table-cell">{item.id}</td>
         <td className="hidden md:table-cell">{item.phone}</td>
         <td className="hidden md:table-cell">{item.address}</td>
         <td>
            <div className="flex items-center gap-2">
               {role === "admin" && (
                  <>
                     <FormModal table="staff" type="update" data={item}/>
                     <FormModal table="staff" type="delete" id={item.id}/>
                  </>
            )}
            </div>
         </td>
      </tr>
   );

     return(
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
         {/**TOP SECTION */}
         <div className="flex items-center justify-between">
            <h1 className="hidden md:block text-lg font-semibold">All Staff</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch/>
                <div className="flex items-center gap-4 self-end">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                     <Image src={"/filter.png"} alt="" width={14} height={14}/>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                     <Image src={"/sort.png"} alt="" width={14} height={14}/>
                  </button>
                  {role === "admin" &&(
                     <FormModal table="staff" type="create"/>
                )}
                </div>
            </div>
         </div>
         {/**List */}
         <Table columns={columns} renderRow={renderRow} data={staffData}/>
         {/**Pagination */}
         <Pagination />
      </div>
     );
};

export default StaffListPage