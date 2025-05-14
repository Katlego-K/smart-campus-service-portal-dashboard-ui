import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {lessonsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
   id:number;
   subject:string;
   class:string;
   lecturer:string;
}

const  columns =[
   {
      header: "Subject Name",
       accessor: "name", 
       className: "hidden md:table-cell",
   },
   {
      header: "Class",
       accessor: "class", 
       className: "hidden md:table-cell",
   },
   {
      header: "Lecturer",
       accessor: "lecturer", 
       className: "hidden lg:table-cell",
   },
   {
      header: "Actions",
       accessor: "action", 
   },
]

const LessonListPage = () => {
   const renderRow = (item: Lesson) => (
      <tr key={item.id} 
        className="border-n border-gray-200 even:bg-slate-50 text-sm bg:lamaPurpleLight"
      >
         <td className="flex items-center gap-4 p-4">{item.subject}</td>
         <td className="hidden md:table-cell">{item.class}</td>
         <td className="hidden md:table-cell">{item.lecturer}</td>
         <td className="hidden md:table-cell">
            <div className="flex items-center gap-2">
               {role === "admin" && (
                  <>
                     <FormModal table="lesson" type="update" data={item}/>
                     <FormModal table="lesson" type="delete" id={item.id}/>
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
            <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
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
                     <FormModal table="lesson" type="create"/>
                )}
                </div>
            </div>
         </div>
         {/**List */}
         <Table columns={columns} renderRow={renderRow} data={lessonsData}/>
         {/**Pagination */}
         <Pagination />
      </div>
     );
};

export default LessonListPage